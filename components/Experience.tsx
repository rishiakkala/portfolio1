"use client";

import { useState, useRef } from "react";
import { portfolioData } from "@/data/portfolio-data";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { transitions, variants } from "@/utils/motion";

export default function Experience() {
    const experience = portfolioData.experience;
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    // Timeline animation logic
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 20%"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="experience" className="py-16 bg-primary-bg relative overflow-hidden">
            {/* Background Depth - Subtle Warm Neutral */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.02]"
                style={{
                    background: 'radial-gradient(circle at 20% 40%, #C06A3E 0%, transparent 60%)'
                }}
            />
            <div className="absolute inset-0 pointer-events-none opacity-[0.015] bg-dot-pattern" />

            <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                <motion.div
                    variants={variants.sectionReveal}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={variants.sectionReveal.viewport}
                >
                    {/* Section Header */}
                    <motion.div
                        variants={variants.sectionReveal}
                        transition={transitions}
                        className="space-y-4 mb-20"
                    >
                        <div className="flex items-center gap-3">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 32 }}
                                transition={{ ...transitions, delay: 0.2 }}
                                className="h-[2px] bg-accent-copper"
                            />
                            <span className="text-xs font-bold tracking-[0.3em] text-accent-copper uppercase font-inter">
                                Professional Output
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary-text leading-tight font-inter">
                            Experience
                        </h2>
                        <p className="text-lg text-secondary-text/80 max-w-xl font-inter">
                            Roles where I applied AI systems thinking under real-world constraints.
                        </p>
                    </motion.div>

                    {/* Timeline Container */}
                    <div ref={containerRef} className="relative ml-4 md:ml-6">
                        {/* Vertical Timeline Line - Progress Awareness */}
                        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-black/[0.05]" />
                        <motion.div
                            style={{ scaleY }}
                            className="absolute left-0 top-0 bottom-0 w-[1px] bg-accent-copper origin-top z-1"
                        />

                        <div className="space-y-24 pl-8 md:pl-12">
                            {experience.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ ...transitions, delay: index * 0.1 }}
                                    className="relative group"
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute -left-[33px] md:-left-[49px] top-2.5 w-3 h-3 bg-black/20 group-hover:bg-accent-copper rounded-full border-4 border-[#F9FAFB] transition-all duration-300 z-10 transform -translate-x-1/2" />

                                    <div className="space-y-8">
                                        {/* Header: Organization and Period */}
                                        <div className="space-y-2">
                                            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                                                <h3 className="text-2xl md:text-3xl font-bold text-primary-text font-inter">
                                                    {exp.organization}
                                                </h3>
                                                <span className="text-xs font-bold text-secondary-text/30 font-inter uppercase tracking-widest">
                                                    {exp.period}
                                                </span>
                                            </div>

                                            {/* System Focus Tag & Key Insight Chip */}
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="text-[10px] font-bold text-primary-text/40 uppercase tracking-widest">System Focus:</span>
                                                <span className="text-[10px] font-bold text-accent-copper/70 uppercase tracking-widest bg-accent-copper/5 px-2 py-0.5 rounded">
                                                    {exp.systemFocus}
                                                </span>
                                                <motion.span
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.5 + index * 0.1 }}
                                                    className="text-[10px] font-bold text-white uppercase tracking-widest bg-primary-text/80 px-2 py-0.5 rounded shadow-sm"
                                                >
                                                    Key Insight ⚡
                                                </motion.span>
                                            </div>

                                            {/* Title Line & Framing */}
                                            <div className="pt-2">
                                                <h4 className="text-xl font-bold text-primary-text font-inter leading-tight">
                                                    {exp.role}
                                                </h4>
                                                <p className="text-sm italic text-secondary-text/50 font-inter mt-1.5">
                                                    {exp.framing}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Impact Blocks */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                                            {exp.impactBlocks.map((block, bIndex) => (
                                                <motion.div
                                                    key={bIndex}
                                                    whileHover={{ y: -4 }}
                                                    className="bg-white/40 border border-black/[0.03] p-6 rounded-2xl space-y-4 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] transition-all duration-300"
                                                >
                                                    <h5 className="text-sm font-bold text-primary-text font-inter uppercase tracking-widest text-accent-copper/90">
                                                        {block.title}
                                                    </h5>

                                                    <div className="space-y-4">
                                                        <div className="space-y-2">
                                                            <span className="text-[10px] font-bold text-primary-text/30 uppercase tracking-[0.2em]">How:</span>
                                                            <ul className="space-y-2">
                                                                {block.how.map((item, iIndex) => (
                                                                    <li key={iIndex} className="text-sm text-secondary-text/70 font-inter flex items-start gap-2">
                                                                        <span className="text-accent-copper/40 mt-1">•</span>
                                                                        {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        <div className="space-y-2">
                                                            <span className="text-[10px] font-bold text-primary-text/30 uppercase tracking-[0.2em]">Outcome:</span>
                                                            <ul className="space-y-2">
                                                                {block.outcome.map((item, oIndex) => (
                                                                    <li key={oIndex} className="text-sm font-bold text-primary-text/80 font-inter flex items-start gap-2">
                                                                        <span className="text-accent-copper/60 mt-1">→</span>
                                                                        {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Expand-on-Intent Interaction: Key Learnings */}
                                        <div className="pt-2">
                                            <button
                                                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                                                className="flex items-center gap-2 text-[10px] font-bold text-primary-text/40 uppercase tracking-widest hover:text-accent-copper transition-colors group/btn"
                                            >
                                                <span className="group-hover/btn:underline underline-offset-4">[ View Engineering Learnings ]</span>
                                                <svg
                                                    className={`w-3 h-3 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>

                                            <AnimatePresence>
                                                {expandedIndex === index && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={transitions}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="bg-white/60 border border-black/5 p-6 rounded-2xl relative mt-4">
                                                            <div className="absolute left-6 top-6 bottom-6 w-[1px] bg-accent-copper/20" />
                                                            <ul className="space-y-4 pl-6">
                                                                {exp.learnings.map((learning, lIndex) => (
                                                                    <li key={lIndex} className="text-sm text-secondary-text/60 font-inter leading-relaxed flex items-start gap-3">
                                                                        <span className="text-accent-copper font-bold text-[10px] mt-1.5 uppercase tracking-widest opacity-40">Insight</span>
                                                                        {learning}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
