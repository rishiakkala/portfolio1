"use client";

import { portfolioData } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { transitions, variants } from "@/utils/motion";

export default function Footer() {
    const { name, role } = portfolioData.hero;
    const { github, linkedin, email, resume, instagram } = portfolioData.contact;

    return (
        <footer className="bg-[#F3F4F6]/50 border-t border-black/[0.03] pt-8 pb-6 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <motion.div
                    variants={variants.sectionReveal}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true, margin: "0px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start mb-0"
                >
                    {/* 1. Identity (Left) */}
                    <motion.div
                        variants={variants.fadeInUp}
                        transition={transitions}
                        className="space-y-4 group/id cursor-default flex flex-col items-center text-center md:items-start md:text-left"
                    >
                        <div className="space-y-1">
                            <motion.h3
                                whileHover={{ x: 4 }}
                                className="text-xl md:text-2xl font-bold text-primary-text font-inter transition-colors group-hover/id:text-accent-copper"
                            >
                                {name}
                            </motion.h3>
                            <p className="text-sm font-medium text-secondary-text/60 font-inter">
                                {role.split(' & ').join(' · ')}
                            </p>
                        </div>
                        <p className="text-sm text-secondary-text/40 font-inter max-w-xs italic opacity-0 transition-opacity duration-1000 group-hover/id:opacity-100 hidden md:block">
                            Building intelligent systems with intent.
                        </p>
                    </motion.div>

                    {/* 2. Presence (Center) */}
                    <div className="flex flex-col items-center justify-center gap-6">
                        <motion.span
                            variants={variants.fadeInUp}
                            transition={{ ...transitions, delay: 0.1 }}
                            className="text-[10px] font-bold tracking-[0.2em] text-secondary-text/30 uppercase font-inter text-center block"
                        >
                            Presence
                        </motion.span>
                        <motion.div
                            variants={{
                                whileInView: {
                                    transition: {
                                        staggerChildren: 0.08,
                                        delayChildren: 0.2
                                    }
                                }
                            }}
                            className="flex items-center gap-8"
                        >
                            {[
                                {
                                    id: 'github', href: github, icon: (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                        </svg>
                                    )
                                },
                                {
                                    id: 'linkedin', href: linkedin, icon: (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                            <circle cx="4" cy="4" r="2" />
                                        </svg>
                                    )
                                },
                                {
                                    id: 'email', href: `mailto:${email}`, icon: (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    )
                                },
                                {
                                    id: 'resume', href: resume, icon: (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    )
                                },
                                {
                                    id: 'instagram', href: instagram, icon: (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                        </svg>
                                    )
                                }
                            ].map((social) => (
                                <motion.a
                                    key={social.id}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={{
                                        initial: { opacity: 0, scale: 0.8, y: 10 },
                                        whileInView: { opacity: 1, scale: 1, y: 0 }
                                    }}
                                    whileHover={{ scale: 1.15, y: -4 }}
                                    className="text-secondary-text/40 hover:text-accent-copper transition-all duration-300"
                                    aria-label={social.id}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        variants={variants.fadeInUp}
                        transition={{ ...transitions, delay: 0.2 }}
                        className="text-center md:text-right space-y-4"
                    >
                        <div className="space-y-1">
                            <p className="text-sm font-bold text-primary-text/80 font-inter">
                                © {new Date().getFullYear()}
                            </p>
                            <p className="text-[10px] font-bold tracking-widest text-secondary-text/30 uppercase font-inter">
                                Optimized for Clarity
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </footer>
    );
}
