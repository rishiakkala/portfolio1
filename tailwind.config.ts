import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    bg: '#F9FAFB',
                    text: '#1F2933',
                },
                secondary: {
                    bg: '#F1F3F5',
                    text: '#4B5563',
                },
                accent: {
                    copper: '#C06A3E',
                    blue: '#3B82F6',
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
            },
            lineHeight: {
                'relaxed': '1.75',
                'loose': '2',
            },
        },
    },
    plugins: [],
};

export default config;
