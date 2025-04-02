import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certification from "@/components/Certification";
import Contact from "@/components/Contact";
import FloatingBanner from "@/components/FloatingBanner";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page of my portfolio",
};

export default function Home() {
  return (
    <>
      <div className="dotted-background">
        <div className="h-auto dotted-background px-6 py-12 md:max-w-2xl mx-auto">
          <Hero />
          <About />
          <WorkExperience />
          <Education />
          <Skills />
          <Projects />
          <Certification />
          <Contact />
          <FloatingBanner />
        </div>
      </div>
    </>
  );
}
