"use client";

import { useState } from "react";
import { BriefcaseBusiness, Globe2, Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { profile } from "@/data/portfolio";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message: string }>({ type: "idle", message: "" });
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.email.trim()) nextErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Enter a valid email address.";
    if (!form.subject.trim()) nextErrors.subject = "Subject is required.";
    if (!form.message.trim()) nextErrors.message = "Message is required.";
    else if (form.message.trim().length < 20) nextErrors.message = "Message should be at least 20 characters.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });
    if (!validate()) return;
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(data.message || "Unable to send message right now.");
      setForm(initialState);
      setErrors({});
      setStatus({ type: "success", message: data.message || "Message sent successfully." });
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "Something went wrong." });
    } finally {
      setLoading(false);
    }
  };

  const fieldClass = "mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-[#ff3030]/50 focus:bg-white/[0.05]";

  return (
    <section id="contact" className="px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#130909] to-[#090909] p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-[#ff6b6b]">08 / Contact</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">LET&apos;S BUILD SOMETHING.</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-300">If you are building a product, redesigning a platform, or need a developer who can move from UI to API, reach out through any available channel below.</p>
          <div className="mt-8 space-y-4 text-sm text-zinc-300">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 transition hover:text-white"><Mail className="h-4 w-4 text-[#ff3030]" />{profile.email}</a>
            <a href={`tel:${profile.phone}`} className="flex items-center gap-3 transition hover:text-white"><Phone className="h-4 w-4 text-[#ff3030]" />{profile.phone}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-white"><BriefcaseBusiness className="h-4 w-4 text-[#ff3030]" />LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-white"><Globe2 className="h-4 w-4 text-[#ff3030]" />GitHub</a>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm text-zinc-300">Name<input value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} className={fieldClass} name="name" autoComplete="name" />{errors.name ? <span className="mt-2 block text-xs text-[#ff6b6b]">{errors.name}</span> : null}</label>
              <label className="text-sm text-zinc-300">Email<input value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} className={fieldClass} name="email" type="email" autoComplete="email" />{errors.email ? <span className="mt-2 block text-xs text-[#ff6b6b]">{errors.email}</span> : null}</label>
            </div>
            <label className="text-sm text-zinc-300">Subject<input value={form.subject} onChange={(event) => setForm((current) => ({ ...current, subject: event.target.value }))} className={fieldClass} name="subject" />{errors.subject ? <span className="mt-2 block text-xs text-[#ff6b6b]">{errors.subject}</span> : null}</label>
            <label className="text-sm text-zinc-300">Message<textarea value={form.message} onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))} className={`${fieldClass} min-h-40 resize-y`} name="message" />{errors.message ? <span className="mt-2 block text-xs text-[#ff6b6b]">{errors.message}</span> : null}</label>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" disabled={loading} className="inline-flex items-center justify-center rounded-full border border-[#ff3030]/40 bg-[#ff1e1e] px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-white transition hover:bg-[#ff3030] disabled:cursor-not-allowed disabled:opacity-60">{loading ? "Sending..." : "Send Message"}</button>
              {status.type !== "idle" ? <p className={`text-sm ${status.type === "success" ? "text-emerald-400" : "text-[#ff6b6b]"}`}>{status.message}</p> : null}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
