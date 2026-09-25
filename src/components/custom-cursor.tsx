"use client";

import { motion, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const reducedMotion = useReducedMotion();
  const x = useSpring(0, { stiffness: 300, damping: 26 });
  const y = useSpring(0, { stiffness: 300, damping: 26 });
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;

    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const syncMode = () => {
      const shouldEnable = mediaQuery.matches;
      setEnabled(shouldEnable);
      setVisible((current) => (shouldEnable ? current : false));
      document.documentElement.classList.toggle("custom-cursor-enabled", shouldEnable);
    };

    const move = (event: MouseEvent) => {
      if (!mediaQuery.matches) return;
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    };

    const hide = () => setVisible(false);

    syncMode();
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", hide);
    mediaQuery.addEventListener("change", syncMode);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", hide);
      mediaQuery.removeEventListener("change", syncMode);
      document.documentElement.classList.remove("custom-cursor-enabled");
    };
  }, [reducedMotion, x, y]);

  if (reducedMotion || !enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x, y }}
        className={`pointer-events-none fixed top-0 left-0 z-[70] hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff3030] lg:block ${visible ? "opacity-100" : "opacity-0"}`}
      />
      <motion.div
        aria-hidden
        style={{ x, y }}
        className={`pointer-events-none fixed top-0 left-0 z-[69] hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff3030]/40 bg-[#ff1e1e]/10 backdrop-blur-sm lg:block ${visible ? "opacity-100" : "opacity-0"}`}
      />
    </>
  );
}
