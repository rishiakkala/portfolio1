import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";


const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Rishi Akkala | AI/ML Engineer & Researcher",
    description: "Personal portfolio of Rishi Akkala, showcasing AI/ML engineering expertise, research publications, and professional experience.",
    keywords: ["AI", "ML", "Machine Learning", "Artificial Intelligence", "Engineer", "Researcher", "Portfolio"],
    authors: [{ name: "Rishi Akkala" }],
    openGraph: {
        title: "Rishi Akkala | AI/ML Engineer & Researcher",
        description: "Personal portfolio of Rishi Akkala, showcasing AI/ML engineering expertise, research publications, and professional experience.",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable} suppressHydrationWarning>
            <body className="antialiased bg-primary-bg text-primary-text transition-colors duration-300">
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
                <ScrollToTop />
            </body>
        </html>
    );
}
