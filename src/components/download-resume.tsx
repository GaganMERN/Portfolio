import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Download } from "lucide-react";

export function DownloadResume() {
  return (
    <section id="resume" className="px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-12">
        <Reveal>
          <SectionHeading
            index="07"
            eyebrow="Resume"
            title="Grab a copy of my resume."
            description="Download my resume to get a detailed overview of my skills, experience, and education."
          />
        </Reveal>
        <Reveal delay={0.1} className="flex justify-center">
          <a
            href="/Gagandeep_Resume.pages"
            download
            className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full bg-white px-8 py-4 font-semibold text-black transition-transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Download className="h-5 w-5" />
              DOWNLOAD RESUME
            </span>
            <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-[#ff3030] to-[#ff6b6b] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute inset-0 z-10 flex items-center justify-center gap-3 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Download className="h-5 w-5" />
              DOWNLOAD RESUME
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
