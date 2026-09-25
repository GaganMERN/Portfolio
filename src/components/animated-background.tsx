"use client";

import { motion, useReducedMotion, useSpring } from "framer-motion";
import { useEffect } from "react";

export function AnimatedBackground() {
  const reducedMotion = useReducedMotion();
  const mouseX = useSpring(0, { stiffness: 120, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 120, damping: 20 });

  useEffect(() => {
    if (reducedMotion) return;

    const handleMove = (event: MouseEvent) => {
      mouseX.set(event.clientX - 180);
      mouseY.set(event.clientY - 180);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY, reducedMotion]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,30,30,0.16),_transparent_30%),linear-gradient(180deg,#050505_0%,#0a0a0a_45%,#050505_100%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]" />
      <div className="noise absolute inset-0 opacity-[0.16]" />
      {!reducedMotion ? (
        <motion.div
          style={{ x: mouseX, y: mouseY }}
          className="absolute h-96 w-96 rounded-full bg-[#ff1e1e]/20 blur-[140px]"
        />
      ) : null}
    </div>
  );
}
