import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { profile, stats } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="About"
            title="Editorial storytelling for product-focused engineering."
            description={profile.summary}
          />
        </Reveal>
        <div className="grid gap-6">
          <Reveal className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff6b6b]">Professional Introduction</p>
            <p className="mt-5 text-2xl leading-tight tracking-[-0.04em] text-white sm:text-4xl">
              Building modern interfaces, backend systems, and connected workflows with a clear bias toward performance, usability, and scalable execution.
            </p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.08} className="rounded-[1.6rem] border border-white/10 bg-black/40 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">{stat.label}</p>
                <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">{stat.value}</p>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{stat.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
