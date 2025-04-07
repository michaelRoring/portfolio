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
import SvgComponent from "@/components/atom/NotiolyIcon";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page of my portfolio",
};

export default function Home() {
  return (
    <>
      <div className="dotted-background">
        <div className="relative h-auto dotted-background px-6 py-12 md:max-w-2xl mx-auto">
          <Hero />

          <img
            src="/images/3.png"
            alt="experience"
            className=" -right-40 mt-24 absolute w-52 hidden lg:block "
          />
          <About />
          <WorkExperience />
          <Education />
          <Skills />
          <Projects />

          <Certification />
          <img
            src="/images/36.png"
            alt="michael"
            className=" -left-60 absolute md:hidden lg:block"
          />
          <Contact />
          <FloatingBanner />
        </div>
      </div>
    </>
  );
}
