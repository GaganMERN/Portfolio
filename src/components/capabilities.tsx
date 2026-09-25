import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { capabilities } from "@/data/portfolio";

export function Capabilities() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-12">
        <Reveal>
          <SectionHeading
            index="05"
            eyebrow="Capabilities"
            title="What I do across interfaces, APIs, and product workflows."
            description="Only capabilities directly supported by experience and technical skills are shown here."
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06} className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-[#ff6b6b]">0{index + 1}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-300">{item.description}</p>
              <p className="mt-4 border-t border-white/8 pt-4 text-sm leading-7 text-zinc-500">{item.proof}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
