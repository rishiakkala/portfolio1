"use client";

import { portfolioData } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { transitions, variants } from "@/utils/motion";

export default function GetInTouch() {
    const { github, linkedin, email, instagram } = portfolioData.contact;

    return (
        <section id="contact" className="py-16 bg-[#F9FAFB] relative overflow-hidden">
            {/* Background Depth - Subtle Copper Glow */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.015]"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, #C06A3E 0%, transparent 50%)'
                }}
            />
            <div className="absolute inset-0 pointer-events-none opacity-[0.015] bg-dot-pattern" />

            <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                <motion.div
                    variants={variants.sectionReveal}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={variants.sectionReveal.viewport}
                    className="max-w-4xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div
                        variants={variants.sectionReveal}
                        transition={transitions}
                        className="space-y-4 mb-20 text-center relative"
                    >
                        <div className="flex items-center justify-center gap-3">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 32 }}
                                transition={{ ...transitions, delay: 0.2 }}
                                className="h-[2px] bg-accent-copper"
                            />
                            <span className="text-xs font-bold tracking-[0.3em] text-accent-copper uppercase font-inter">
                                Interface
                            </span>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 32 }}
                                transition={{ ...transitions, delay: 0.2 }}
                                className="h-[2px] bg-accent-copper"
                            />
                        </div>

                        {/* Senior Availability Signal */}
                        <div className="inline-flex justify-center mb-2">
                            <div className="group relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-copper/5 border border-accent-copper/20 transition-all hover:bg-accent-copper/10 cursor-default">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-[10px] font-bold text-accent-copper uppercase tracking-wider">
                                    Status: Online
                                </span>
                                <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 w-max px-2 py-1 bg-primary-text text-white text-[10px] font-bold uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    Open to Collaboration
                                </div>
                            </div>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-primary-text leading-tight font-inter">
                            Get In Touch
                        </h2>
                        <p className="text-lg text-secondary-text/80 max-w-xl mx-auto font-inter">
                            Open to research collaborations and system-level engineering conversations.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Direct Email Column - The Action Card */}
                        <div className="order-2 md:order-1 space-y-6">
                            <motion.div
                                variants={variants.sectionReveal}
                                transition={{ ...transitions, delay: 0.1 }}
                                whileHover={{ y: -2 }}
                                className="group relative space-y-8 p-8 md:p-10 rounded-3xl bg-white border border-black/[0.05] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] text-center md:text-left transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(192,106,62,0.15)] hover:border-accent-copper/30"
                            >
                                {/* Soft Gradient Glow */}
                                <div
                                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                    style={{
                                        background: 'radial-gradient(circle at 50% 50%, rgba(192, 106, 62, 0.08), transparent 70%)'
                                    }}
                                />

                                <div className="space-y-4 relative z-10">
                                    <h3 className="text-[10px] font-bold tracking-[0.2em] text-accent-copper uppercase font-inter">
                                        Primary Channel
                                    </h3>
                                    <div className="space-y-2">
                                        <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-primary-text font-inter leading-tight group-hover:text-accent-copper transition-colors duration-500">
                                            {email}
                                        </p>
                                        <p className="text-sm text-secondary-text/60 font-inter">
                                            Best for detailed technical discussions.
                                        </p>
                                    </div>
                                </div>

                                <motion.a
                                    href={`mailto:${email}`}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="relative z-10 inline-flex items-center justify-center px-8 py-4 rounded-xl bg-accent-copper text-white font-bold uppercase tracking-[0.2em] text-sm transition-all duration-300 hover:shadow-xl hover:shadow-accent-copper/30 font-inter w-full md:w-auto"
                                >
                                    Send an Email
                                </motion.a>
                            </motion.div>

                            {/* What to Include - Micro-Guide */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="px-4 md:px-6"
                            >
                                <p className="text-[10px] font-bold text-secondary-text/40 uppercase tracking-widest mb-3">
                                    Helpful context to include:
                                </p>
                                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-secondary-text/60 font-inter italic">
                                    <span>— What you&apos;re building</span>
                                    <span>— The problem you&apos;re stuck on</span>
                                    <span>— Timeline or constraints</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Profiles & Context Column */}
                        <div className="space-y-12 order-1 md:order-2">
                            <motion.div
                                variants={variants.sectionReveal}
                                transition={{ ...transitions, delay: 0.2 }}
                                className="space-y-6"
                            >
                                <h3 className="text-xl font-bold text-primary-text font-inter uppercase tracking-widest text-sm text-center md:text-left">
                                    Areas I Collaborate On
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Designing RAG and agentic architectures for real-world constraints",
                                        "Research-driven ML systems with evaluation-first thinking",
                                        "System orchestration across models, tools, and data",
                                        "Technical consulting for early-stage or research-heavy products"
                                    ].map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ ...transitions, delay: 0.4 + i * 0.1 }}
                                            className="flex items-start gap-3 text-secondary-text/70 font-inter justify-center md:justify-start group/li text-sm leading-relaxed"
                                        >
                                            <motion.div
                                                whileHover={{ scale: 1.5 }}
                                                className="w-1.5 h-1.5 rounded-full bg-accent-copper transition-all mt-1.5 flex-shrink-0"
                                            />
                                            <span className="group-hover/li:text-primary-text transition-colors text-left">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                variants={variants.sectionReveal}
                                transition={{ ...transitions, delay: 0.3 }}
                                className="space-y-6"
                            >
                                <h3 className="text-xl font-bold text-primary-text font-inter uppercase tracking-widest text-sm text-center md:text-left">
                                    Profiles
                                </h3>
                                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                    {[
                                        {
                                            label: "GitHub",
                                            tooltip: "Code & systems",
                                            href: github,
                                            icon: (
                                                <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                </svg>
                                            )
                                        },
                                        {
                                            label: "LinkedIn",
                                            tooltip: "Professional context",
                                            href: linkedin,
                                            icon: (
                                                <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                            )
                                        },
                                        {
                                            label: "Instagram",
                                            tooltip: "Human side",
                                            href: instagram,
                                            icon: (
                                                <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                </svg>
                                            )
                                        }
                                    ].map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="group relative p-4 rounded-2xl bg-white border border-black/[0.05] text-primary-text transition-all duration-300 hover:bg-accent-copper hover:text-white hover:border-accent-copper hover:shadow-lg hover:shadow-accent-copper/20"
                                        >
                                            {social.icon}

                                            {/* Tooltip */}
                                            <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-max px-3 py-1.5 bg-primary-text text-white text-[10px] font-bold uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none transform translate-y-2 group-hover:translate-y-0 shadow-xl">
                                                {social.tooltip}
                                                {/* Tooltip Arrow */}
                                                <div className="absolute left-1/2 -translate-x-1/2 bottom-[-4px] w-2 h-2 bg-primary-text rotate-45" />
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Footer Transition */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ...transitions, delay: 0.6 }}
                    className="mt-24 pt-12 border-t border-black/[0.03] flex items-center justify-center gap-4 relative"
                >
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 40 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="h-[1px] bg-accent-copper/30"
                    />
                    <span className="text-[10px] font-bold tracking-[0.3em] text-accent-copper/40 uppercase font-inter">
                        Designed with clarity. Built for scale.
                    </span>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 40 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="h-[1px] bg-accent-copper/30"
                    />
                </motion.div>
            </div>
        </section>
    );
}
