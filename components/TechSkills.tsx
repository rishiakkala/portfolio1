"use client";

import { portfolioData } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { transitions, variants } from "@/utils/motion";

export default function TechSkills() {
    const { design, tools } = portfolioData.skills;

    return (
        <section id="skills" className="py-16 bg-primary-bg relative overflow-hidden">
            {/* Background Depth - Neutral Gray Gradient */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.02]"
                style={{
                    background: 'radial-gradient(circle at 70% 50%, #374151 0%, transparent 60%)'
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
                        whileInView="whileInView"
                        className="space-y-4 mb-20 text-center md:text-left"
                    >
                        <div className="flex items-center justify-center md:justify-start gap-3">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 32 }}
                                transition={{ ...transitions, delay: 0.2 }}
                                className="h-[2px] bg-accent-copper"
                            />
                            <span className="text-xs font-bold tracking-[0.3em] text-accent-copper uppercase font-inter">
                                Expertise
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary-text leading-tight font-inter">
                            How I Build Systems
                        </h2>
                        <p className="text-lg text-secondary-text/80 max-w-xl italic font-inter">
                            &quot;Tools change. System design principles don&apos;t.&quot;
                        </p>
                    </motion.div>

                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* Left Column - What I Design */}
                        <motion.div
                            variants={variants.sectionReveal}
                            transition={{ ...transitions, delay: 0.1 }}
                            className="space-y-10 group"
                        >
                            <div className="space-y-2">
                                <h3 className="text-sm font-bold tracking-[0.2em] text-primary-text uppercase opacity-50 font-inter">
                                    I Design
                                </h3>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 48 }}
                                    transition={{ ...transitions, delay: 0.4 }}
                                    className="h-1 bg-accent-copper/20"
                                />
                            </div>

                            <ul className="space-y-8">
                                {design.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        whileHover={{ x: 8 }}
                                        className="flex gap-4 group/item cursor-default"
                                    >
                                        <motion.span
                                            whileHover={{ scaleX: 1.5 }}
                                            className="text-accent-copper font-bold mt-1 origin-left transition-all"
                                        >
                                            —
                                        </motion.span>
                                        <p className="text-xl md:text-2xl font-semibold text-primary-text/90 leading-tight transition-all duration-300 group-hover/item:text-primary-text">
                                            {item}
                                        </p>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Right Column - What I Use (Refined Translucent Cards) */}
                        <motion.div
                            variants={variants.sectionReveal}
                            transition={{ ...transitions, delay: 0.2 }}
                            className="space-y-12"
                        >
                            <div className="space-y-2">
                                <h3 className="text-sm font-bold tracking-[0.2em] text-secondary-text/40 uppercase font-inter">
                                    I Use
                                </h3>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 48 }}
                                    transition={{ ...transitions, delay: 0.5 }}
                                    className="h-1 bg-black/[0.03]"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {tools.map((group, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "0px" }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.08,
                                            ease: [0.22, 1, 0.36, 1]
                                        }}
                                        whileHover={{
                                            y: -6,
                                            backgroundColor: "rgba(255, 255, 255, 0.72)",
                                            boxShadow: "0 16px 40px rgba(0, 0, 0, 0.08)"
                                        }}
                                        className="group/card relative bg-white/55 backdrop-blur-[12px] border border-black/[0.04] p-6 rounded-2xl transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.04)] overflow-hidden"
                                    >
                                        {/* Soft Ambient Glow (Subtle Depth) */}
                                        <div
                                            className="absolute inset-0 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
                                            style={{
                                                background: 'radial-gradient(120% 120% at 0% 0%, rgba(199, 116, 61, 0.06), transparent 60%)'
                                            }}
                                        />

                                        <h4 className="text-[11px] font-medium tracking-[0.12em] text-black/[0.45] uppercase font-inter mb-3 relative inline-block">
                                            {group.category}
                                        </h4>
                                        <div className="flex flex-wrap gap-x-2 gap-y-1.5 items-center relative z-10">
                                            {group.items.map((tool, toolIndex) => (
                                                <span key={toolIndex} className="flex items-center gap-2">
                                                    <span
                                                        className="text-[15px] font-medium text-[#141414]/85 leading-relaxed transition-colors duration-300 cursor-default font-inter"
                                                    >
                                                        {tool}
                                                    </span>
                                                    {toolIndex < group.items.length - 1 && (
                                                        <span className="text-[10px] text-accent-copper font-bold">•</span>
                                                    )}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
