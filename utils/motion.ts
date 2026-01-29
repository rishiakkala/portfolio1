export const transitions = {
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // cubic-bezier(0.22, 1, 0.36, 1)
};

export const variants = {
    fadeInUp: {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        whileInView: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 12 },
    },
    fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        whileInView: { opacity: 1 },
    },
    staggerContainer: {
        animate: {
            transition: {
                staggerChildren: 0.08,
            },
        },
    },
    sectionReveal: {
        initial: { opacity: 0, x: -20 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, margin: "0px" },
    },
};
