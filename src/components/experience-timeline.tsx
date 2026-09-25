import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/data/portfolio";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-12">
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="Experience"
            title="A vertical timeline of shipping interfaces, APIs, and workflow systems."
            description="Every role is mapped from the resume with responsibilities, achievements, and technologies where the details are explicitly available."
          />
        </Reveal>
        <div className="relative">
          <div className="absolute left-3 top-0 hidden h-full w-px bg-gradient-to-b from-[#ff3030] via-white/15 to-transparent md:block" />
          <div className="space-y-8">
            {experiences.map((item, index) => (
              <Reveal key={`${item.company}-${item.period}`} delay={index * 0.08} className="relative md:pl-16">
                <div className="absolute left-0 top-8 hidden h-6 w-6 rounded-full border border-[#ff3030]/50 bg-[#120909] shadow-[0_0_30px_rgba(255,30,30,0.45)] md:block" />
                <article className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.26em] text-[#ff6b6b]">{item.period}</p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">{item.title}</h3>
                      <p className="mt-2 text-base text-zinc-400">{item.company} | {item.location}</p>
                    </div>
                    <p className="max-w-xl text-sm leading-7 text-zinc-400">{item.description}</p>
                  </div>
                  <div className="mt-8 grid gap-6 lg:grid-cols-2">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">Responsibilities</p>
                      <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-300">
                        {item.responsibilities.map((point) => (
                          <li key={point} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#ff3030]" />{point}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">Impact + Technologies</p>
                      <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-300">
                        {item.achievements.map((point) => (
                          <li key={point} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-white" />{point}</li>
                        ))}
                      </ul>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span key={tech} className="rounded-full border border-white/10 bg-black/30 px-3 py-2 text-xs uppercase tracking-[0.18em] text-zinc-300">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
