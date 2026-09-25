"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type MagneticButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export function MagneticButton({ href, label, variant = "primary" }: MagneticButtonProps) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLAnchorElement | null>(null);

  const handleMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (reducedMotion || !ref.current || window.innerWidth < 1024) return;
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  const classes =
    variant === "primary"
      ? "border border-[#ff3030]/50 bg-[#ff1e1e] text-white shadow-[0_0_60px_rgba(255,30,30,0.22)] hover:bg-[#ff3030]"
      : "border border-white/12 bg-white/5 text-white hover:border-[#ff3030]/40 hover:bg-white/8";

  return (
    <motion.div whileTap={{ scale: 0.98 }}>
      <Link
        ref={ref}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-[0.18em] uppercase transition duration-300 ${classes}`}
      >
        <span>{label}</span>
        <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.div>
  );
}
