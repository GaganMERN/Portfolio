"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ExternalLink, Globe2, X } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/portfolio";

export function ProjectShowcase() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();
  const activeProject = projects.find((project) => project.slug === activeSlug) ?? null;

  return (
    <section id="projects" className="px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-12">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="Projects"
            title="Selected projects presented with clearer product context and delivery details."
            description="This section highlights business platforms, health tech, AI automation, and e-commerce work with focused descriptions, features, and links where available."
          />
        </Reveal>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <article className="group grid gap-6 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#ff3030]/30 hover:shadow-[0_30px_120px_rgba(255,30,30,0.14)] lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
                <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-[#151515] via-[#0d0d0d] to-[#120808] p-6 sm:p-8">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,30,30,0.18),transparent_34%),linear-gradient(135deg,transparent,rgba(255,255,255,0.04))] opacity-90 transition duration-500 group-hover:scale-105" />
                  <div className="relative flex h-full min-h-[280px] flex-col justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-[#ff6b6b]">{project.category}</p>
                      <h3 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">{project.name}</h3>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {project.features.slice(0, 4).map((feature) => (
                        <div key={feature} className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-zinc-200">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-6">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">Purpose / Problem</p>
                    <p className="mt-4 text-base leading-8 text-zinc-300">{project.purpose}</p>
                    <p className="mt-5 text-base leading-8 text-zinc-400">{project.description}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-5">
                      <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">Technology Context</p>
                      {project.technologies.length ? (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="rounded-full border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.16em] text-zinc-300">{tech}</span>
                          ))}
                        </div>
                      ) : (
                        <p className="mt-4 text-sm leading-7 text-zinc-400">{project.techNote}</p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveSlug(project.slug)}
                      className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-white transition hover:text-[#ff6b6b]"
                    >
                      Open Case Study <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {activeProject ? (
          <motion.div
            initial={reducedMotion ? undefined : { opacity: 0 }}
            animate={reducedMotion ? undefined : { opacity: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0 }}
            className="fixed inset-0 z-[120] overflow-y-auto bg-black/85 px-4 pb-4 pt-24 md:mt-22 backdrop-blur-lg sm:px-6 sm:py-6"
          >
            <button
              type="button"
              onClick={() => setActiveSlug(null)}
              aria-label="Close case study"
              className="fixed right-4 top-24 z-[140] inline-flex rounded-full border border-white/10 bg-[#0a0a0a]/95 p-3 text-zinc-300 shadow-lg backdrop-blur transition hover:border-[#ff3030]/40 hover:text-white sm:hidden"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="mx-auto mt-8 flex max-h-[calc(100vh-8rem)] max-w-5xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] sm:mt-0 sm:max-h-[calc(100vh-3rem)]">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:items-center sm:px-6 sm:py-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Case Study</p>
                  <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">{activeProject.name}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveSlug(null)}
                  aria-label="Close case study"
                  className="hidden shrink-0 rounded-full border border-white/10 p-3 text-zinc-300 transition hover:border-[#ff3030]/40 hover:text-white sm:inline-flex"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="grid flex-1 gap-8 overflow-y-auto p-6 lg:grid-cols-[1fr_0.9fr] lg:p-8">
                <div className="space-y-8">
                  <div className="rounded-[1.7rem] border border-white/10 bg-gradient-to-br from-[#161616] to-[#0b0b0b] p-6">
                    <p className="text-xs uppercase tracking-[0.28em] text-[#ff6b6b]">Outcome</p>
                    <p className="mt-4 text-2xl leading-tight tracking-[-0.04em] text-white">{activeProject.outcome}</p>
                    <p className="mt-4 text-sm leading-7 text-zinc-400">{activeProject.description}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">Key Features</p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {activeProject.features.map((feature) => (
                        <div key={feature} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-zinc-300">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-6">
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">Purpose / Problem</p>
                    <p className="mt-4 text-sm leading-8 text-zinc-300">{activeProject.purpose}</p>
                  </div>
                  <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-6">
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">Tech Details</p>
                    {activeProject.technologies.length ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {activeProject.technologies.map((tech) => (
                          <span key={tech} className="rounded-full border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.16em] text-zinc-300">{tech}</span>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-4 text-sm leading-7 text-zinc-400">{activeProject.techNote}</p>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {activeProject.liveUrl ? <a href={activeProject.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#ff3030]/35 bg-[#ff1e1e] px-5 py-3 text-sm font-medium uppercase tracking-[0.16em] text-white"><ExternalLink className="h-4 w-4" />Live</a> : null}
                    {activeProject.githubUrl ? <a href={activeProject.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium uppercase tracking-[0.16em] text-white"><Globe2 className="h-4 w-4" />GitHub</a> : null}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
