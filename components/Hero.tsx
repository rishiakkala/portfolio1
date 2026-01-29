"use client";

import Image from "next/image";
import { portfolioData } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { transitions, variants } from "@/utils/motion";

export default function Hero() {
    const { name, role, tagline } = portfolioData.hero;

    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
            style={{
                background: `
                    radial-gradient(circle at 65% 45%, rgba(192, 106, 62, 0.08), transparent 60%),
                    linear-gradient(180deg, #F9FAFB 0%, #F3F4F6 100%)
                `
            }}
        >
            {/* Structural Overlays */}
            <div
                className="absolute inset-0 pointer-events-none opacity-50"
                style={{
                    background: 'linear-gradient(135deg, transparent 45%, rgba(192, 106, 62, 0.04) 50%, transparent 55%)'
                }}
            />
            <div className="absolute inset-0 pointer-events-none opacity-[0.025] bg-dot-pattern" />

            {/* Light-Dark Tension Zone */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/[0.04] to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column - Text Content + Visual Spine */}
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={variants.staggerContainer}
                        className="relative pl-8 lg:order-1"
                    >
                        {/* Animated Vertical Line (UI Chrome) */}
                        {/* Animated Vertical Line (UI Chrome) */}
                        <motion.div
                            variants={{
                                initial: { scaleY: 0 },
                                animate: { scaleY: 1, transition: { duration: 0.4, ease: "easeOut", delay: 0.15 } }
                            }}
                            className="absolute left-0 top-2 w-[3px] h-[80%] bg-gradient-to-b from-accent-copper to-transparent origin-top"
                        />
                        <div className="space-y-6">
                            <motion.h1
                                variants={variants.fadeInUp}
                                transition={transitions}
                                className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-text group inline-block"
                            >
                                <span className="relative">
                                    {name}
                                    <span className="absolute left-0 -bottom-2 w-0 h-[3px] bg-accent-copper transition-all duration-300 group-hover:w-full" />
                                </span>
                            </motion.h1>
                            <motion.h2
                                variants={variants.fadeInUp}
                                transition={transitions}
                                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-accent-copper"
                            >
                                {role}
                            </motion.h2>
                            <motion.p
                                variants={variants.fadeInUp}
                                transition={transitions}
                                className="text-lg md:text-xl text-secondary-text max-w-xl leading-relaxed"
                            >
                                {tagline}
                            </motion.p>

                            {/* Capability Strip */}
                            <motion.div
                                variants={variants.fadeInUp}
                                transition={transitions}
                                className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-4 text-[10px] md:text-xs font-bold tracking-[0.2em] text-secondary-text/80 uppercase"
                            >
                                <span>Machine Learning</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-copper/60" />
                                <span>AI Agents</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-copper/60" />
                                <span>Computer Vision</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-copper/60" />
                                <span>Systems</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Column - Avatar with Glow & Shadow Anchor */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ ...transitions, delay: 0.2 }}
                        className="flex justify-center lg:order-2"
                    >
                        <div className="relative">
                            {/* Radial Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-copper/30 via-accent-copper/20 to-transparent rounded-full blur-3xl scale-110" />

                            {/* Avatar Grounding Shadow (Shadow Anchor) */}
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/5 blur-xl rounded-[100%] pointer-events-none" />

                            {/* Avatar Image Container */}
                            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem]">
                                <Image
                                    src="/avatar.png"
                                    alt={`${name} - Avatar`}
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Enhanced Scroll Indicator with Contract */}
            <button
                onClick={() => {
                    const element = document.getElementById("about");
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-float text-accent-copper border-none bg-transparent cursor-pointer hover:opacity-70 transition-opacity z-30"
            >
                <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-80">
                    See how I think
                </span>
                <svg
                    className="w-8 h-8 md:w-10 md:h-10"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </button>
        </section>
    );
}
