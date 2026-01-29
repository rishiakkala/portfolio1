"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { transitions } from "@/utils/motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Scroll Progress Logic
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });



    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            // Close menu first so the target position is calculated correctly
            closeMenu();
            // Small timeout to allow the layout to settle after closing the menu
            setTimeout(() => {
                element.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    };

    const navLinks = [
        { name: "About", id: "about" },
        { name: "Skills", id: "skills" },
        { name: "Education", id: "education" },
        { name: "Experience", id: "experience" },
        { name: "Projects", id: "projects" },
        { name: "Publications", id: "publications" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen
                ? "bg-primary-bg/95 backdrop-blur-md shadow-lg"
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={{
                        animate: {
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.1
                            }
                        }
                    }}
                    className="flex items-center justify-between h-20"
                >
                    {/* Logo - AR */}
                    <motion.div
                        variants={{
                            initial: { opacity: 0, y: -12 },
                            animate: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.25, ease: "easeOut" }
                            }
                        }}
                    >
                        <Link href="/" className="group" onClick={closeMenu}>
                            <div className="flex items-center gap-2">
                                <div className="relative w-12 h-12 flex items-center justify-center bg-gradient-to-br from-accent-copper to-orange-400 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                                    <span className="text-2xl font-bold text-white">AR</span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <motion.div
                            className="flex items-center gap-8"
                            variants={{
                                animate: {
                                    transition: {
                                        staggerChildren: 0.08,
                                    }
                                }
                            }}
                        >
                            {navLinks.map((link) => (
                                <motion.button
                                    key={link.id}
                                    variants={{
                                        initial: { opacity: 0, y: -8 },
                                        animate: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 0.35,
                                                ease: [0.22, 1, 0.36, 1]
                                            }
                                        }
                                    }}
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-secondary-text hover:text-accent-copper transition-colors duration-200 font-medium font-inter text-sm uppercase tracking-widest relative group"
                                >
                                    {link.name}
                                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent-copper transition-all duration-300 group-hover:w-full" />
                                </motion.button>
                            ))}


                            <motion.button
                                variants={{
                                    initial: { opacity: 0, y: -8 },
                                    animate: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.35,
                                            ease: [0.22, 1, 0.36, 1]
                                        }
                                    }
                                }}
                                onClick={() => scrollToSection("contact")}
                                className="px-4 py-2 bg-accent-copper text-white rounded-lg hover:bg-accent-copper/90 transition-all duration-200 font-medium shadow-md hover:shadow-lg font-inter text-sm uppercase tracking-widest"
                            >
                                Contact
                            </motion.button>
                        </motion.div>
                    </div>

                    <motion.div
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-copper origin-left"
                        style={{ scaleX }}
                    />

                    {/* Mobile Menu Button - Improved SVG Animation */}
                    <motion.button
                        variants={{
                            initial: { opacity: 0, scale: 0.8 },
                            animate: {
                                opacity: 1,
                                scale: 1,
                                transition: { duration: 0.2, ease: "easeOut" }
                            }
                        }}
                        className="md:hidden p-2 text-secondary-text hover:text-accent-copper transition-colors z-[60] relative"
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path
                                animate={isMenuOpen ? { d: "M6 18L18 6" } : { d: "M4 6H20" }}
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                transition={{ duration: 0.3 }}
                            />
                            <motion.path
                                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                d="M4 12H20"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                transition={{ duration: 0.3 }}
                            />
                            <motion.path
                                animate={isMenuOpen ? { d: "M6 6L18 18" } : { d: "M4 18H20" }}
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                transition={{ duration: 0.3 }}
                            />
                        </svg>
                    </motion.button>
                </motion.div>
            </div>

            {/* Mobile Menu Overlay - Top Sheet Implementation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden fixed top-20 left-0 right-0 max-h-[70vh] overflow-y-auto bg-primary-bg/95 backdrop-blur-md shadow-lg border-b border-black/5"
                    >
                        <div className="container mx-auto px-6 py-6 flex flex-col gap-5 relative z-50">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="w-full text-left text-lg font-bold text-primary-text hover:text-accent-copper transition-all duration-200 font-inter uppercase tracking-[0.1em] py-2 border-b border-black/[0.03] last:border-none"
                                >
                                    {link.name}
                                </button>
                            ))}
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="w-full py-3 bg-accent-copper text-white rounded-xl font-bold shadow-md text-center font-inter uppercase tracking-widest text-sm mt-2 active:scale-[0.98] transition-transform"
                            >
                                Contact
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
