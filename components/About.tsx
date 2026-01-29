"use client";

import Image from "next/image";
import { portfolioData } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { transitions, variants } from "@/utils/motion";

export default function About() {
    const { name, role } = portfolioData.hero;
    const { paragraphs, principles, metrics } = portfolioData.about;
    const { github, linkedin, email, resume } = portfolioData.contact;

    return (
        <section id="about" className="py-16 bg-[#F9FAFB] relative overflow-hidden">
            {/* Background Depth - Soft Warm Glow */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    background: 'radial-gradient(circle at 30% 50%, #C06A3E 0%, transparent 50%)'
                }}
            />
            <div className="absolute inset-0 pointer-events-none opacity-[0.015] bg-dot-pattern" />

            <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                <motion.div
                    variants={variants.sectionReveal}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={variants.sectionReveal.viewport}
                    className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 lg:gap-24 items-start"
                >

                    {/* Left Column: The Narrative (Thinking, Motivation, Direction) */}
                    <div className="space-y-12 order-2 lg:order-1">
                        <motion.div
                            variants={variants.fadeInUp}
                            transition={transitions}
                            whileInView="whileInView"
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-3">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 32 }}
                                    transition={{ ...transitions, delay: 0.2 }}
                                    className="h-[2px] bg-accent-copper"
                                />
                                <span className="text-xs font-bold tracking-[0.3em] text-accent-copper uppercase">
                                    Identity & Philosophy
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-primary-text leading-tight">
                                Engineering with <br /> <span className="text-secondary-text/40 italic">Human Intent</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            variants={variants.sectionReveal}
                            transition={{ ...transitions, delay: 0.2 }}
                            whileInView="whileInView"
                            className="relative group block"
                        >
                            {paragraphs.map((p, i) => (
                                <p key={i} className="text-lg md:text-xl text-secondary-text leading-relaxed font-light">
                                    {p}
                                </p>
                            ))}
                        </motion.div>

                        {/* How I Think - Micro-Section */}
                        <motion.div
                            variants={variants.sectionReveal}
                            transition={{ ...transitions, delay: 0.2 }}
                            className="space-y-6 pt-4"
                        >
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] font-bold tracking-[0.2em] text-secondary-text/50 uppercase">
                                    How I Think
                                </span>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 48 }}
                                    transition={{ ...transitions, delay: 0.4 }}
                                    className="h-[1px] bg-secondary-text/10"
                                />
                            </div>
                            <ul className="space-y-4">
                                {principles.map((principle, i) => (
                                    <motion.li
                                        key={i}
                                        whileHover={{ x: 6 }}
                                        className="flex items-center gap-3 text-sm md:text-base text-secondary-text/70 font-medium group cursor-default"
                                    >
                                        <motion.span
                                            whileHover={{ scaleX: 1.5 }}
                                            className="text-accent-copper text-lg origin-left transition-all"
                                        >
                                            —
                                        </motion.span>
                                        <span className="group-hover:text-primary-text transition-colors">
                                            {principle}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Right Column: Identity + Proof Layer */}
                    <div className="order-1 lg:order-2 space-y-8">
                        <div className="sticky top-32 space-y-8">

                            {/* Profile Card (Photo + Links) */}
                            <motion.div
                                variants={variants.sectionReveal}
                                transition={{ ...transitions, delay: 0.3 }}
                                className="group transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="bg-white/90 backdrop-blur-sm rounded-[24px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-white/20 relative overflow-hidden">

                                    {/* Subtle Profile Photo Halo */}
                                    <div className="relative mb-8 flex justify-center">
                                        <div
                                            className="absolute inset-0 scale-150 blur-xl opacity-60 pointer-events-none"
                                            style={{
                                                background: 'radial-gradient(circle, rgba(192, 106, 62, 0.12), transparent 70%)'
                                            }}
                                        />
                                        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-sm ring-1 ring-black/5">
                                            <Image
                                                src="/rishi_photo.jpg"
                                                alt={name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="text-center space-y-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-primary-text mb-1 tracking-tight italic uppercase tracking-widest">{name}</h3>
                                            <p className="text-[10px] font-bold text-accent-copper uppercase tracking-[0.2em]">
                                                {role}
                                            </p>
                                        </div>

                                        {/* Social Links - Outline style */}
                                        <div className="flex items-center justify-center gap-6">
                                            <a
                                                href={`mailto:${email}`}
                                                className="p-2 rounded-full text-secondary-text/80 hover:text-accent-copper transition-all duration-300"
                                                aria-label="Email"
                                            >
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                                </svg>
                                            </a>
                                            <a
                                                href={github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-full text-secondary-text/80 hover:text-accent-copper transition-all duration-300"
                                                aria-label="GitHub"
                                            >
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                                                </svg>
                                            </a>
                                            <a
                                                href={linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-full text-secondary-text/80 hover:text-accent-copper transition-all duration-300"
                                                aria-label="LinkedIn"
                                            >
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                                    <circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </a>
                                            {portfolioData.contact.instagram && (
                                                <a
                                                    href={portfolioData.contact.instagram}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 rounded-full text-secondary-text/80 hover:text-accent-copper transition-all duration-300"
                                                    aria-label="Instagram"
                                                >
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                    </svg>
                                                </a>
                                            )}
                                        </div>

                                        {/* Resume Button */}
                                        <div className="pt-2">
                                            <a
                                                href={resume}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-accent-copper text-accent-copper font-medium text-[11px] tracking-[0.2em] uppercase transition-all duration-500 hover:bg-accent-copper hover:text-white hover:shadow-lg hover:shadow-accent-copper/20"
                                            >
                                                Download Resume
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Impact / Snapshot Card (At a Glance) */}
                            <motion.div
                                variants={variants.sectionReveal}
                                transition={{ ...transitions, delay: 0.4 }}
                                className="bg-white/70 backdrop-blur-sm rounded-[20px] p-6 shadow-[0_5px_20px_rgba(0,0,0,0.02)] border border-white/40"
                            >
                                <div className="text-[10px] font-bold tracking-[0.2em] text-secondary-text/40 uppercase mb-6 flex items-center gap-3">
                                    At A Glance
                                    <div className="flex-1 h-[1px] bg-secondary-text/5" />
                                </div>

                                <div className="grid grid-cols-3 gap-4">
                                    {metrics.map((metric, i) => (
                                        <div key={i} className="text-center space-y-1">
                                            <div className="text-2xl font-bold text-primary-text tabular-nums">
                                                <span className="text-accent-copper">{metric.value}</span>
                                            </div>
                                            <div className="text-[10px] font-bold text-secondary-text/50 uppercase leading-tight tracking-wider">
                                                {metric.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
