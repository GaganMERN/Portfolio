import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-12">
        <Reveal>
          <SectionHeading
            index="06"
            eyebrow="Education"
            title="Academic milestones in a clean editorial timeline."
            description="Formal education, including score details where they add useful context."
          />
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-3">
          {education.map((item, index) => (
            <Reveal key={item.institution} delay={index * 0.07} className="rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-[#ff6b6b]">{item.period}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">{item.degree}</h3>
              <p className="mt-2 text-base text-zinc-400">{item.institution}</p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-zinc-300">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#ff3030]" />{highlight}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
