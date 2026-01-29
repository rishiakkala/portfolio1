"use client";

import { useState, useRef } from "react";
import { portfolioData } from "@/data/portfolio-data";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Education() {
    const education = portfolioData.education;
    const [isAcademicEmphasis, setIsAcademicEmphasis] = useState(false);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    // Timeline animation logic
    const timelineRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start 80%", "end 20%"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.section
            id="education"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="py-16 bg-[#F9FAFB] relative overflow-hidden"
        >
            {/* Background Texture */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.015] bg-dot-pattern" />

            <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                {/* Section Header & Toggle */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-[2px] bg-accent-copper" />
                            <span className="text-xs font-bold tracking-[0.3em] text-accent-copper uppercase font-inter">
                                Academic Journey
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary-text leading-tight font-inter">
                            Education
                        </h2>
                        <p className="text-lg text-secondary-text/80 max-w-xl font-inter">
                            Academic foundations that support my work in AI systems and engineering.
                        </p>
                    </div>

                    {/* Academic Focus Toggle - Tiny & Minimal */}
                    <div className="flex items-center">
                        <button
                            onClick={() => setIsAcademicEmphasis(!isAcademicEmphasis)}
                            className={`group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${isAcademicEmphasis
                                ? "text-accent-copper"
                                : "text-secondary-text/30 hover:text-secondary-text/50"
                                }`}
                        >
                            <span>[ {isAcademicEmphasis ? "Academic Focus: ON" : "Academic Focus"} ]</span>
                            {isAcademicEmphasis && (
                                <span className="w-1 h-1 rounded-full bg-accent-copper animate-pulse" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Timeline Container */}
                <div ref={timelineRef} className="relative ml-4 md:ml-6">
                    {/* Vertical Timeline Line - Progress Awareness */}
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-black/[0.05]" />
                    <motion.div
                        style={{ scaleY }}
                        className="absolute left-0 top-0 bottom-0 w-[1px] bg-accent-copper/40 origin-top z-1"
                    />

                    <div className="space-y-20 pl-8 md:pl-12">
                        {education.map((edu, index) => (
                            <div key={index} className="relative group">
                                {/* Timeline Node - Micro-Interaction */}
                                <motion.div
                                    whileHover={{ scale: 1.25, backgroundColor: "rgba(192, 106, 62, 1)" }}
                                    className={`absolute -left-[32px] md:-left-[48px] top-2.5 rounded-full border-4 border-[#F9FAFB] transition-all duration-300 z-10 transform -translate-x-1/2 ${edu.isPresent
                                        ? "w-4 h-4 bg-accent-copper shadow-[0_0_15px_rgba(192,106,62,0.5)] md:w-5 md:h-5"
                                        : "w-3 h-3 bg-black/20 group-hover:bg-accent-copper/40"
                                        } ${isAcademicEmphasis && !edu.isPresent ? "opacity-20 grayscale" : ""}`}
                                />

                                <div className={`space-y-6 transition-all duration-500 ${isAcademicEmphasis && !edu.isPresent ? "opacity-20 grayscale" : ""}`}>
                                    <div className="space-y-1">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <h3 className={`text-2xl md:text-3xl font-bold text-primary-text leading-tight font-inter transition-opacity duration-500 ${isAcademicEmphasis && !edu.isPresent ? "opacity-20 grayscale" : "opacity-100"}`}>
                                                {edu.degree}
                                            </h3>

                                            {/* Present Badge - Responsive Momentum */}
                                            {edu.isPresent && (
                                                <motion.div
                                                    whileHover={{ scale: 1.05 }}
                                                    className="relative group/badge"
                                                >
                                                    <span className="px-3 py-1 bg-accent-copper/10 text-accent-copper text-[10px] font-bold uppercase tracking-widest rounded-full border border-accent-copper/20 cursor-default">
                                                        <span className="group-hover/badge:hidden">Present</span>
                                                        <span className="hidden group-hover/badge:inline">Currently Pursuing</span>
                                                    </span>
                                                </motion.div>
                                            )}
                                        </div>

                                        {/* Reflection Line - Transformation Narrative */}
                                        {edu.reflection && (
                                            <p className={`text-sm italic text-secondary-text/50 font-inter pt-1 transition-opacity duration-500 ${isAcademicEmphasis && !edu.isPresent ? "opacity-10 blur-[0.5px]" : "opacity-100"}`}>
                                                {edu.reflection}
                                            </p>
                                        )}

                                        <p className={`text-xl font-semibold text-accent-copper font-inter pt-2 transition-opacity duration-500 ${isAcademicEmphasis && !edu.isPresent ? "opacity-20 grayscale" : "opacity-100"}`}>
                                            {edu.institution}
                                        </p>
                                        <div className={`flex items-center gap-4 text-xs font-bold text-secondary-text/30 font-inter uppercase tracking-widest transition-opacity duration-500 ${isAcademicEmphasis && !edu.isPresent ? "opacity-10 blur-[0.5px]" : "opacity-100"}`}>
                                            <span>{edu.year}</span>
                                            {edu.location && <span>• {edu.location}</span>}
                                        </div>
                                    </div>

                                    {/* Detailed Context with Progressive Reveal */}
                                    {edu.focusAreas && (
                                        <div className="space-y-4 pt-2 max-w-2xl">
                                            <div className="group/focus">
                                                <div
                                                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                                                    className="text-sm font-medium text-secondary-text/60 font-inter flex gap-3 cursor-pointer"
                                                >
                                                    <span className={`text-primary-text/40 font-bold uppercase text-[10px] tracking-wider min-w-[90px] mt-0.5 transition-opacity duration-500 ${isAcademicEmphasis && !edu.isPresent ? "opacity-20" : "opacity-100"}`}>Focus Areas:</span>
                                                    <span className="flex-1 transition-colors group-hover/focus:text-primary-text">
                                                        {expandedIndex === index || isAcademicEmphasis ? (
                                                            <span className="flex flex-wrap gap-x-2">
                                                                {(edu.focusAreas || "").split(", ").map((area, i) => {
                                                                    const isHighlighted = area === "AI Systems" || area === "Distributed Computing";
                                                                    return (
                                                                        <span
                                                                            key={i}
                                                                            className={`transition-all duration-500 ${isAcademicEmphasis && isHighlighted
                                                                                ? "text-accent-copper font-bold scale-105 opacity-100"
                                                                                : isAcademicEmphasis ? "opacity-10 blur-[0.5px]" : ""
                                                                                }`}
                                                                        >
                                                                            {area}{i < (edu.focusAreas || "").split(", ").length - 1 ? " · " : ""}
                                                                        </span>
                                                                    );
                                                                })}
                                                            </span>
                                                        ) : (
                                                            <span>{(edu.focusAreas || "").split(", ").slice(0, 2).join(", ")} <span className="text-accent-copper/40 italic ml-1">+ curiosity reward</span></span>
                                                        )}
                                                    </span>
                                                </div>
                                            </div>

                                            {edu.notableWork && (
                                                <div className={`text-sm font-medium text-secondary-text/60 font-inter flex gap-3 transition-opacity duration-500 ${isAcademicEmphasis && !edu.isPresent ? "opacity-10 blur-[0.5px]" : "opacity-100"}`}>
                                                    <span className="text-primary-text/40 font-bold uppercase text-[10px] tracking-wider min-w-[90px] mt-0.5">Notable Work:</span>
                                                    <span className="flex-1 leading-relaxed">{edu.notableWork}</span>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
