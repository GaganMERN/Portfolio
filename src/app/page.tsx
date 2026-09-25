import { About } from "@/components/about";
import { AnimatedBackground } from "@/components/animated-background";
import { Capabilities } from "@/components/capabilities";
import { Contact } from "@/components/contact";
import { CustomCursor } from "@/components/custom-cursor";
import { Education } from "@/components/education";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { ProjectShowcase } from "@/components/project-showcase";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#050505] text-white">
      <AnimatedBackground />
      <CustomCursor />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <ExperienceTimeline />
        <ProjectShowcase />
        <Capabilities />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
