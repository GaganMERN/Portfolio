"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BriefcaseBusiness, Globe2, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { MagneticButton } from "@/components/magnetic-button";
import { profile } from "@/data/portfolio";

const codeLines = [
  "const developer = {",
  "  focus: ['React', 'Next.js', 'Node.js'],",
  "  strengths: ['APIs', 'UX', 'Performance'],",
  "  status: 'Open to build impactful products'",
  "};",
];

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:pb-24 lg:pt-40">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div className="space-y-8">
          <motion.div
            initial={reducedMotion ? undefined : { opacity: 0, y: 40 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-[#ff3030] shadow-[0_0_24px_rgba(255,48,48,0.9)]" />
              Available for impactful web builds
            </div>
            <div className="space-y-3">
              {/* <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">Developer Portfolio</p> */}
              <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.07em] text-white sm:text-7xl lg:text-[7rem] lg:leading-[0.95]">
                {profile.name}
                <span className="block text-zinc-500">{profile.title}</span>
              </h1>
            </div>
            <p className="max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">{profile.intro}</p>
          </motion.div>

          <motion.div
            initial={reducedMotion ? undefined : { opacity: 0, y: 24 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton href="#projects" label="View My Work" />
            <MagneticButton href="#contact" label="Contact Me" variant="secondary" />
          </motion.div>

          <motion.div
            initial={reducedMotion ? undefined : { opacity: 0, y: 24 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-5 text-sm text-zinc-400"
          >
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition hover:text-white"><Mail className="h-4 w-4 text-[#ff3030]" />{profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white"><BriefcaseBusiness className="h-4 w-4 text-[#ff3030]" />LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white"><Globe2 className="h-4 w-4 text-[#ff3030]" />GitHub</a>
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[#ff3030]" />{profile.location}</span>
          </motion.div>
        </div>

        <motion.div
          initial={reducedMotion ? undefined : { opacity: 0, scale: 0.94, y: 24 }}
          animate={reducedMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -left-8 top-8 h-32 w-32 rounded-full bg-[#ff1e1e]/20 blur-3xl" />
          <div className="absolute -right-8 bottom-8 h-40 w-40 rounded-full bg-[#ff1e1e]/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_20px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-6">
            <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-zinc-500">
              <span>Interactive Build</span>
              <span className="rounded-full border border-[#ff3030]/30 px-3 py-1 text-[#ff8080]">Live System</span>
            </div>
            <div className="grid gap-5">
              <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="relative overflow-hidden rounded-[1.6rem] border border-[#ff3030]/20 bg-gradient-to-b from-[#161616] to-[#090909] p-2">
                  <div className="absolute inset-x-8 top-4 h-16 rounded-full bg-[#ff3030]/15 blur-3xl" />
                  <div className="relative aspect-[3/5] overflow-hidden rounded-[1.3rem] border border-white/10 bg-[#101010]">
                    <Image
                      src="/gagandeep-portrait.png"
                      alt={`${profile.name} portrait`}
                      fill
                      priority
                      sizes="(max-width: 2024px) 150vw, 800px"
                      className="object-contain object-center p-0"
                    />
                  </div>
                </div>
                <div className="rounded-[1.6rem] border border-white/8 bg-[#0d0d0d] p-4 sm:p-5">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                    <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="space-y-3 font-mono text-sm text-zinc-300">
                    {codeLines.map((line, index) => (
                      <motion.p
                        key={line}
                        initial={reducedMotion ? undefined : { opacity: 0, x: -12 }}
                        animate={reducedMotion ? undefined : { opacity: 1, x: 0 }}
                        transition={{ duration: 0.45, delay: 0.2 + index * 0.08 }}
                      >
                        <span className="mr-4 text-zinc-600">0{index + 1}</span>
                        {line}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.6rem] border border-white/8 bg-gradient-to-br from-[#1a1a1a] to-[#0c0c0c] p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Current Edge</p>
                  <p className="mt-3 text-3xl font-semibold text-white">Node.js + Next.js</p>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">Shipping backend systems, responsive frontends, and integration-heavy workflows with a premium product mindset.</p>
                </div>
                <motion.div
                  animate={reducedMotion ? undefined : { y: [0, -10, 0] }}
                  transition={reducedMotion ? undefined : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-[1.6rem] border border-[#ff3030]/20 bg-[#120909] p-5"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-[#ff6b6b]">Performance Signal</p>
                  <p className="mt-3 text-4xl font-semibold text-white">30%</p>
                  <p className="mt-3 text-sm leading-7 text-zinc-300">Measured rendering improvement delivered on a video generation workflow.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
