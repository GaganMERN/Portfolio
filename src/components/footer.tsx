import { ArrowUpRight, BriefcaseBusiness, Globe2, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="px-4 pb-8 pt-6 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-zinc-400">{profile.title}</p>
          <p className="mt-2 text-sm text-zinc-500">{profile.email}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white"><BriefcaseBusiness className="h-4 w-4 text-[#ff3030]" />LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white"><Globe2 className="h-4 w-4 text-[#ff3030]" />GitHub</a>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition hover:text-white"><Mail className="h-4 w-4 text-[#ff3030]" />Email</a>
          <a href="#home" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-white transition hover:border-[#ff3030]/40 hover:text-[#ff6b6b]">Back to top <ArrowUpRight className="h-4 w-4" /></a>
        </div>
      </div>
      <p className="mx-auto mt-4 max-w-7xl text-xs uppercase tracking-[0.25em] text-zinc-600">Copyright {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </footer>
  );
}
