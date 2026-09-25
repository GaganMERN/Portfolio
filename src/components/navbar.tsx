"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { navItems } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const reducedMotion = useReducedMotion();
  const rafRef = useRef<number>(0);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const updateActiveSection = useCallback(() => {
    const ids = navItems.map((item) => item.id);
    const sections: { id: string; top: number }[] = [];

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) {
        sections.push({ id, top: el.getBoundingClientRect().top });
      }
    }

    if (sections.length === 0) return;

    // If scrolled to the bottom of the page, activate the last nav item
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
      setActive(sections[sections.length - 1].id);
      return;
    }

    // Find the last section whose top has scrolled past a point 20% from the top of the viewport
    const offset = window.innerHeight * 0.2;
    let current = sections[0].id;

    for (const section of sections) {
      if (section.top <= offset) {
        current = section.id;
      }
    }

    setActive(current);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateActiveSection);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Run once on mount
    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [updateActiveSection]);

  return (
    <>
      <motion.header
        initial={reducedMotion ? undefined : { y: -30, opacity: 0 }}
        animate={reducedMotion ? undefined : { y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/55 px-4 py-3 backdrop-blur-xl sm:px-6">
          <Link href="/" onClick={(e) => handleNavClick(e, "home")} className="inline-flex items-center gap-3 text-sm font-semibold text-white">
            <span className="relative h-9 w-9 overflow-hidden rounded-full border border-white/10 bg-white/5">
              <Image
                src="/profileicon.png!sw800"
                alt="Gagandeep logo"
                fill
                sizes="36px"
                className="object-cover"
              />
            </span>
            <span className="text-xs tracking-[0.22em] sm:text-sm">Gagandeep</span>
          </Link>
          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href="/"
                onClick={(e) => handleNavClick(e, item.id)}
                className={`rounded-full px-4 py-2 text-sm transition ${active === item.id ? "bg-white/10 text-white" : "text-zinc-400 hover:text-white"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Link
              href="/"
              onClick={(e) => handleNavClick(e, "contact")}
              className="rounded-full border border-[#ff3030]/40 bg-[#ff1e1e]/10 px-5 py-2 text-sm font-medium uppercase tracking-[0.16em] text-white transition hover:bg-[#ff1e1e]"
            >
              LET&apos;S TALK -&gt;
            </Link>
          </div>
          <button
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((value) => !value)}
            className="rounded-full border border-white/10 p-2 text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={reducedMotion ? undefined : { opacity: 0, y: -16 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -16 }}
            className="fixed inset-x-4 top-24 z-40 rounded-[2rem] border border-white/10 bg-[#0a0a0a]/95 p-5 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href="/"
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="block rounded-2xl border border-transparent px-4 py-3 text-base text-zinc-300 transition hover:border-[#ff3030]/30 hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/"
                onClick={(e) => handleNavClick(e, "contact")}
                className="mt-3 block rounded-2xl border border-[#ff3030]/40 bg-[#ff1e1e] px-4 py-3 text-center text-sm font-medium uppercase tracking-[0.18em] text-white"
              >
                LET&apos;S TALK -&gt;
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
