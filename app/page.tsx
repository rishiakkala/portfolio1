import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechSkills from "@/components/TechSkills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import GetInTouch from "@/components/GetInTouch";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <TechSkills />
            <Education />
            <Experience />
            <Projects />
            <Publications />
            <GetInTouch />
        </main>
    );
}
