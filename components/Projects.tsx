"use client";

import { portfolioData } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { transitions, variants } from "@/utils/motion";

export default function Projects() {
    const projects = portfolioData.projects;

    return (
        <section id="projects" className="py-16 bg-primary-bg relative overflow-hidden">
            {/* Background Depth - Subtle Light Glow */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    background: 'radial-gradient(circle at 80% 20%, #C06A3E 0%, transparent 50%)'
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
                                Technical Builds
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary-text leading-tight font-inter">
                            Projects
                        </h2>
                        <p className="text-lg text-secondary-text/80 max-w-xl font-inter">
                            Implementations of intelligent systems designed for scale and reliability.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-start">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={variants.sectionReveal}
                                transition={{ ...transitions, delay: index * 0.1 }}
                                whileHover="hover"
                                initial="initial"
                                whileInView="whileInView"
                                className="group relative bg-[#F9FAFB] border border-black/[0.05] p-8 rounded-2xl transition-all duration-500 hover:border-accent-copper/40 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] flex flex-col h-full cursor-default overflow-hidden"
                            >
                                {/* Subtle Hover Background Shift */}
                                <motion.div
                                    variants={{
                                        initial: { opacity: 0 },
                                        hover: { opacity: 1 }
                                    }}
                                    className="absolute inset-0 bg-white pointer-events-none transition-opacity duration-500"
                                />

                                <div className="space-y-6 flex-grow relative z-10">
                                    {/* Title & Thesis */}
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold text-primary-text font-inter group-hover:text-accent-copper transition-colors duration-300 leading-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs font-bold tracking-[0.15em] text-accent-copper/70 uppercase font-inter">
                                            {project.thesis}
                                        </p>
                                    </div>

                                    {/* Project Description - Progressive Disclosure */}
                                    <motion.p
                                        variants={{
                                            initial: { y: 0 },
                                            hover: { y: -2 }
                                        }}
                                        transition={transitions}
                                        className="text-sm text-primary-text md:text-secondary-text leading-relaxed font-inter opacity-100 md:opacity-50 transition-opacity duration-300 group-hover:opacity-100"
                                    >
                                        {project.description}
                                    </motion.p>

                                    {/* Structured System Sentences */}
                                    <motion.div
                                        variants={{
                                            initial: { opacity: 1 },
                                            hover: { opacity: 1 }
                                        }}
                                        transition={transitions}
                                        className="space-y-3 opacity-100 md:opacity-40 transition-opacity duration-300 group-hover:opacity-100"
                                    >
                                        <h4 className="text-[10px] font-bold tracking-[0.2em] text-primary-text/30 uppercase font-inter">
                                            Key Contributions
                                        </h4>
                                        {project.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent-copper/40 mt-2 flex-shrink-0" />
                                                <p className="text-primary-text md:text-secondary-text/80 text-sm font-inter leading-relaxed">
                                                    {feature}
                                                </p>
                                            </div>
                                        ))}
                                    </motion.div>

                                    {/* Technologies - Staggered Slide Up */}
                                    <motion.div
                                        variants={{
                                            hover: {
                                                transition: {
                                                    staggerChildren: 0.05
                                                }
                                            }
                                        }}
                                        className="flex flex-wrap gap-x-3 gap-y-2 pt-2 border-t border-black/[0.03]"
                                    >
                                        {project.technologies.map((tech, techIndex) => (
                                            <motion.span
                                                key={techIndex}
                                                variants={{
                                                    initial: { y: 4 },
                                                    hover: { y: 0 }
                                                }}
                                                className="text-[10px] font-bold text-primary-text md:text-secondary-text/60 font-inter uppercase tracking-wider opacity-100 md:opacity-40 transition-opacity duration-300 group-hover:opacity-100"
                                            >
                                                {tech}{techIndex < project.technologies.length - 1 ? " ·" : ""}
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                </div>

                                {/* Links */}
                                <motion.div
                                    variants={{
                                        initial: { opacity: 1 },
                                        hover: { opacity: 1 }
                                    }}
                                    className="flex items-center gap-6 mt-8 pt-6 relative z-10 opacity-100 md:opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                                >
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[10px] font-bold text-accent-copper uppercase tracking-widest hover:text-primary-text transition-colors flex items-center gap-2 group/link"
                                        >
                                            <span className="border-b border-transparent group-hover/link:border-accent-copper pb-0.5 transition-all">Source Code</span>
                                            <span className="text-xs">↗</span>
                                        </a>
                                    )}
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[10px] font-bold text-accent-copper uppercase tracking-widest hover:text-primary-text transition-colors flex items-center gap-2 group/link"
                                        >
                                            <span className="border-b border-transparent group-hover/link:border-accent-copper pb-0.5 transition-all">Live System</span>
                                            <span className="text-xs">↗</span>
                                        </a>
                                    )}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
