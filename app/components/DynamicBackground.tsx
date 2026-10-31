"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface OrbConfig {
  color: string;
  size: string;
  position: string;
  animate: {
    x: number[];
    y: number[];
    scale: number[];
  };
  duration: number;
}

interface PageTheme {
  id: string;
  baseBg: string;
  glowTint: string;
  orbs: OrbConfig[];
}

const PAGE_THEMES: Record<string, PageTheme> = {
  "/": {
    id: "home",
    baseBg: "#070b16",
    glowTint: "rgba(14, 165, 233, 0.08)",
    orbs: [
      {
        color: "rgba(59, 130, 246, 0.28)", // Sapphire blue
        size: "w-[500px] h-[500px] md:w-[680px] md:h-[680px]",
        position: "-top-24 -left-20",
        animate: { x: [0, 30, 0], y: [0, -35, 0], scale: [1, 1.08, 1] },
        duration: 16,
      },
      {
        color: "rgba(6, 182, 212, 0.24)", // Electric cyan
        size: "w-[450px] h-[450px] md:w-[620px] md:h-[620px]",
        position: "-bottom-28 -right-20",
        animate: { x: [0, -35, 0], y: [0, 25, 0], scale: [1, 1.1, 1] },
        duration: 18,
      },
      {
        color: "rgba(99, 102, 241, 0.20)", // Indigo glow
        size: "w-[400px] h-[400px] md:w-[520px] md:h-[520px]",
        position: "top-1/3 right-1/4",
        animate: { x: [0, 25, 0], y: [0, 30, 0], scale: [1, 0.94, 1] },
        duration: 22,
      },
    ],
  },
  "/about": {
    id: "about",
    baseBg: "#050e0e",
    glowTint: "rgba(16, 185, 129, 0.08)",
    orbs: [
      {
        color: "rgba(16, 185, 129, 0.26)", // Emerald green
        size: "w-[500px] h-[500px] md:w-[660px] md:h-[660px]",
        position: "-top-20 right-10",
        animate: { x: [0, -30, 0], y: [0, -30, 0], scale: [1, 1.06, 1] },
        duration: 17,
      },
      {
        color: "rgba(254, 165, 95, 0.22)", // Warm amber
        size: "w-[450px] h-[450px] md:w-[580px] md:h-[580px]",
        position: "top-1/2 -left-24",
        animate: { x: [0, 35, 0], y: [0, -20, 0], scale: [1, 1.08, 1] },
        duration: 19,
      },
      {
        color: "rgba(13, 148, 136, 0.22)", // Deep teal
        size: "w-[420px] h-[420px] md:w-[560px] md:h-[560px]",
        position: "-bottom-24 right-1/3",
        animate: { x: [0, -20, 0], y: [0, 35, 0], scale: [1, 0.95, 1] },
        duration: 21,
      },
    ],
  },
  "/project": {
    id: "project",
    baseBg: "#0c0817",
    glowTint: "rgba(139, 92, 246, 0.09)",
    orbs: [
      {
        color: "rgba(139, 92, 246, 0.28)", // Electric violet
        size: "w-[520px] h-[520px] md:w-[700px] md:h-[700px]",
        position: "-top-28 left-1/4",
        animate: { x: [0, 35, 0], y: [0, -25, 0], scale: [1, 1.07, 1] },
        duration: 15,
      },
      {
        color: "rgba(249, 115, 22, 0.22)", // Neon sunset orange
        size: "w-[460px] h-[460px] md:w-[600px] md:h-[600px]",
        position: "top-1/3 -right-20",
        animate: { x: [0, -30, 0], y: [0, 30, 0], scale: [1, 1.1, 1] },
        duration: 19,
      },
      {
        color: "rgba(217, 70, 239, 0.20)", // Fuchsia magenta
        size: "w-[420px] h-[420px] md:w-[540px] md:h-[540px]",
        position: "-bottom-20 left-10",
        animate: { x: [0, 25, 0], y: [0, -30, 0], scale: [1, 0.94, 1] },
        duration: 23,
      },
    ],
  },
  "/contact": {
    id: "contact",
    baseBg: "#110810",
    glowTint: "rgba(244, 63, 94, 0.08)",
    orbs: [
      {
        color: "rgba(254, 165, 95, 0.26)", // Warm sunrise peach / gold
        size: "w-[480px] h-[480px] md:w-[640px] md:h-[640px]",
        position: "-top-24 left-1/3",
        animate: { x: [0, -30, 0], y: [0, -35, 0], scale: [1, 1.08, 1] },
        duration: 16,
      },
      {
        color: "rgba(244, 63, 94, 0.25)", // Electric rose / crimson
        size: "w-[480px] h-[480px] md:w-[640px] md:h-[640px]",
        position: "-bottom-24 -right-16",
        animate: { x: [0, 30, 0], y: [0, 25, 0], scale: [1, 1.09, 1] },
        duration: 18,
      },
      {
        color: "rgba(168, 85, 247, 0.20)", // Royal violet
        size: "w-[420px] h-[420px] md:w-[520px] md:h-[520px]",
        position: "top-1/2 -left-20",
        animate: { x: [0, 20, 0], y: [0, -25, 0], scale: [1, 0.95, 1] },
        duration: 22,
      },
    ],
  },
};

export const DynamicBackground = () => {
  const pathname = usePathname();

  // Match current path or fallback to home
  const currentTheme =
    PAGE_THEMES[pathname] ||
    PAGE_THEMES[
      Object.keys(PAGE_THEMES).find((key) => pathname?.startsWith(key) && key !== "/") || "/"
    ] ||
    PAGE_THEMES["/"];

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-colors duration-1000 ease-in-out"
      style={{ backgroundColor: currentTheme.baseBg }}
      aria-hidden="true"
    >
      {/* Dynamic Animated Gradient Orbs Layer per page */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentTheme.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {currentTheme.orbs.map((orb, index) => (
            <motion.div
              key={`${currentTheme.id}-orb-${index}`}
              className={`absolute rounded-full blur-[110px] md:blur-[140px] will-change-transform ${orb.size} ${orb.position}`}
              style={{ backgroundColor: orb.color }}
              animate={orb.animate}
              transition={{
                duration: orb.duration,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Radial ambient spotlight for depth */}
          <div
            className="absolute inset-0 opacity-80"
            style={{
              background: `radial-gradient(circle at 50% 40%, ${currentTheme.glowTint}, transparent 70%)`,
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* 🧊 Dark Translucent Frosted Glass Overlay */}
      <div className="absolute inset-0 bg-[#060913]/60 backdrop-blur-[80px]" />

      {/* 📐 Subtle High-Tech Dot Matrix Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:28px_28px] opacity-45" />

      {/* 🎬 Cinematic Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(5,7,15,0.75)_100%)]" />
    </div>
  );
};
