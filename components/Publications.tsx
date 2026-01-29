"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { transitions, variants } from "@/utils/motion";

export default function Publications() {
    const publications = portfolioData.publications;

    return (
        <section id="publications" className="py-16 bg-[#F9FAFB] relative overflow-hidden">
            {/* Background Depth - Subtle Research Glow */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.02]"
                style={{
                    background: 'radial-gradient(circle at 40% 70%, #374151 0%, transparent 60%)'
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
                                Research Output
                            </span>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-primary-text leading-tight font-inter">
                                Publications
                            </h2>
                            <div className="space-y-2">
                                <p className="text-lg text-secondary-text/80 max-w-xl font-inter">
                                    Scientific contributions at the intersection of machine learning and healthcare.
                                </p>
                                <p className="text-sm italic text-secondary-text/50 font-inter border-l border-accent-copper/20 pl-4 py-1">
                                    I focus on research that balances methodological rigor with real-world constraints.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="space-y-16">
                        {publications.map((pub, index) => (
                            <motion.div
                                key={index}
                                variants={variants.sectionReveal}
                                transition={{ ...transitions, delay: index * 0.1 }}
                                className="relative pl-8 md:pl-12 py-2 group/entry"
                            >
                                {/* Animated Left Border - Origin Top */}
                                <motion.div
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.2 + index * 0.1 }}
                                    className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent-copper origin-top"
                                />

                                <div className="space-y-6">
                                    {/* Title - Citation Style Hover */}
                                    <div className="relative inline-block max-w-4xl">
                                        <h3 className="text-xl md:text-3xl font-bold text-primary-text leading-tight font-inter transition-colors duration-300 group-hover/entry:text-accent-copper/90">
                                            {pub.title}
                                        </h3>
                                        <motion.div
                                            className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-accent-copper/20 origin-center"
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                                        />
                                    </div>

                                    {/* Research Snapshot */}
                                    <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-secondary-text/40 font-inter">
                                        {pub.focus}
                                    </div>

                                    <div className="space-y-4">
                                        {/* Venue and Year */}
                                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                            <span className="text-sm font-bold text-accent-copper uppercase tracking-widest font-inter">
                                                {pub.venue}
                                            </span>
                                            <div className="hidden md:block w-1 h-1 rounded-full bg-black/10" />
                                            <span className="text-sm font-medium text-secondary-text/50 font-inter">
                                                {pub.year}
                                            </span>
                                        </div>

                                        {/* Contribution Statement */}
                                        <p className="text-base md:text-lg text-secondary-text/70 leading-relaxed font-inter max-w-3xl border-l-[1px] border-black/[0.03] pl-6 italic">
                                            &quot;{pub.contribution}&quot;
                                        </p>
                                    </div>

                                    {/* Action Links - Citation Trigger style */}
                                    {pub.link && (
                                        <div className="pt-2">
                                            <a
                                                href={pub.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="relative inline-flex items-center gap-3 text-xs font-bold text-accent-copper uppercase tracking-[0.2em] font-inter group/link"
                                            >
                                                <span className="relative z-10 transition-colors group-hover/link:text-primary-text">
                                                    View Research Citation
                                                </span>
                                                <motion.span
                                                    className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-copper transition-all duration-500 group-hover/link:w-full"
                                                />
                                                <span className="text-lg transition-transform duration-500 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">↗</span>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
