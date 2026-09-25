import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { skillCategories } from "@/data/portfolio";

const marqueeItems = skillCategories.flatMap((group) => group.technologies);

export function Skills() {
  return (
    <section id="skills" className="px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-12">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Technology Arsenal"
            title="A stack shaped by interfaces, APIs, and real product workflows."
            description="Organized around real delivery experience, without fake ratings or inflated proficiency bars."
          />
        </Reveal>
        <div className="marquee-shell overflow-hidden rounded-full border border-white/10 bg-white/[0.03] py-4">
          <div className="marquee-track flex min-w-max gap-4 px-4">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`} className="rounded-full border border-[#ff3030]/25 bg-[#140909] px-4 py-2 text-sm text-zinc-200">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 0.06} className="group rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 transition hover:-translate-y-1 hover:border-[#ff3030]/30 hover:shadow-[0_20px_80px_rgba(255,30,30,0.12)]">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">{category.title}</h3>
                <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">0{index + 1}</span>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {category.technologies.map((technology) => (
                  <span key={technology} className="rounded-full border border-white/10 bg-black/35 px-3 py-2 text-sm text-zinc-300 transition group-hover:border-[#ff3030]/25 group-hover:text-white">
                    {technology}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
