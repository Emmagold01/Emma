"use client";

import { motion, Variants } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const skillCategories = [
  {
    title: "Frameworks & Core",
    icon: "solar:code-2-linear",
    skills: ["React 19", "Next.js 15", "TypeScript", "JavaScript (ES6+)"],
  },
  {
    title: "Styling & Motion",
    icon: "solar:magic-stick-3-linear",
    skills: ["Tailwind CSS", "Framer Motion", "Responsive Layouts", "CSS3"],
  },
  {
    title: "Ecosystem & Workflow",
    icon: "solar:box-minimalistic-linear",
    skills: ["Git & GitHub", "Vercel", "Iconify", "UI/UX Prototyping"],
  },
];

const pillars = [
  {
    num: "01",
    title: "Fluid Motion",
    desc: "Crafting micro-interactions and transitions that make web apps feel responsive, organic, and alive.",
    icon: "ph:sparkle-fill",
  },
  {
    num: "02",
    title: "Pixel Fidelity",
    desc: "Bridging the gap between design vision and code, ensuring crisp typography, spacing, and mobile harmony.",
    icon: "ph:ruler-fill",
  },
  {
    num: "03",
    title: "Clean Architecture",
    desc: "Writing modular, type-safe, and maintainable components built for long-term scalability.",
    icon: "ph:cube-fill",
  },
];

export default function About() {
  return (
    <div className="relative min-h-[calc(100vh-64px-56px)] w-full overflow-hidden px-6 py-12 lg:px-20 lg:py-16">

      <div className="container relative z-10 mx-auto max-w-6xl space-y-16">
        {/* Header Section */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 font-mono text-xs font-semibold tracking-wider text-[#FEA55F] uppercase"
          >
            <span>{"// 01. about-me"}</span>
            <span className="h-px w-12 bg-white/10" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Passionate about bringing{" "}
            <span className="bg-gradient-to-r from-white via-slate-200 to-[#FEA55F] bg-clip-text text-transparent">
              seamless UI
            </span>{" "}
            to life.
          </motion.h1>
        </div>

        {/* Top Grid: Bio & Interactive Code Card */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* Left Bio Card */}
          <motion.div
            custom={1}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl shadow-2xl lg:col-span-7"
          >
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3.5 py-1 text-xs font-medium text-teal-400">
                <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                Frontend Engineer & Creative Coder
              </div>

              <p className="text-base leading-relaxed text-[#A1B5C1] sm:text-lg">
                I’m <strong className="font-semibold text-white">Soyooye Emmanuel</strong>, a frontend developer dedicated to turning ideas and static designs into fluid, responsive, and engaging digital products.
              </p>

              <p className="text-base leading-relaxed text-[#A1B5C1]">
                My journey began with raw HTML and CSS curiosity, evolving into building fullstack record-breaking platforms and high-traffic web applications with Next.js, React, and Framer Motion. I care deeply about the details you feel rather than just see: the timing of an animation, the smoothness of layout shifts, and clean component architecture.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div>
                <span className="font-mono text-2xl font-bold text-white sm:text-3xl">15+</span>
                <p className="font-mono text-xs text-[#607B96] mt-1">{"// Projects Shipped"}</p>
              </div>
              <div>
                <span className="font-mono text-2xl font-bold text-[#FEA55F] sm:text-3xl">3+</span>
                <p className="font-mono text-xs text-[#607B96] mt-1">{"// Years Crafting"}</p>
              </div>
              <div>
                <span className="font-mono text-2xl font-bold text-teal-400 sm:text-3xl">100%</span>
                <p className="font-mono text-xs text-[#607B96] mt-1">{"// Code Passion"}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Code Card (IDE Window) */}
          <motion.div
            custom={2}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="overflow-hidden rounded-2xl border border-white/10 bg-[#090E17]/80 font-fira backdrop-blur-xl shadow-2xl lg:col-span-5 flex flex-col"
          >
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-black/40 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs text-[#607B96]">developer.config.ts</span>
              <div className="w-12" />
            </div>

            {/* Code Body */}
            <div className="p-6 text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-300 space-y-2 flex-grow">
              <p>
                <span className="text-indigo-400">const</span>{" "}
                <span className="text-teal-400">developer</span> = &#123;
              </p>
              <p className="pl-4">
                <span className="text-[#607B96]">name:</span>{" "}
                <span className="text-[#ffa1ad]">&quot;Soyooye Emmanuel&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-[#607B96]">role:</span>{" "}
                <span className="text-[#ffa1ad]">&quot;Frontend Developer&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-[#607B96]">location:</span>{" "}
                <span className="text-[#ffa1ad]">&quot;Nigeria 🇳🇬&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-[#607B96]">status:</span>{" "}
                <span className="text-[#43D9AD]">&quot;Open to opportunities&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-[#607B96]">passions:</span> [
              </p>
              <p className="pl-8 text-[#ffa1ad]">
                &quot;Micro-animations&quot;,
              </p>
              <p className="pl-8 text-[#ffa1ad]">
                &quot;Clean Codebase&quot;,
              </p>
              <p className="pl-8 text-[#ffa1ad]">
                &quot;Design Translation&quot;
              </p>
              <p className="pl-4">],</p>
              <p>&#125;;</p>

              <div className="pt-4">
                <p className="text-xs text-[#607B96]">
                  {"// Let's connect and build"}
                </p>
                <Link
                  href="/contact"
                  className="mt-2 inline-flex items-center gap-2 rounded-lg bg-[#FEA55F]/15 px-3 py-1.5 text-xs font-medium text-[#FEA55F] transition-colors hover:bg-[#FEA55F] hover:text-black"
                >
                  <span>_reachOut()</span>
                  <Icon icon="lucide:arrow-right" className="text-xs" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Matrix */}
        <motion.div
          custom={3}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-wider text-[#FEA55F] uppercase">
             {" // 02. tech-stack & tools"}
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl transition-all duration-300 hover:border-[#FEA55F]/40 hover:shadow-[0_10px_30px_rgba(254,165,95,0.08)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#FEA55F] group-hover:scale-105 transition-transform">
                    <Icon icon={cat.icon} className="text-xl" />
                  </div>
                  <h3 className="font-mono text-sm font-semibold text-white">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1 font-mono text-xs text-slate-300 transition-colors hover:border-[#FEA55F]/30 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy Pillars */}
        <motion.div
          custom={4}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="space-y-6 pb-6"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-wider text-[#FEA55F] uppercase">
             {" // 03. core-philosophy"}
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-black/50"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#FEA55F]">
                    {pillar.num}
                  </span>
                  <Icon
                    icon={pillar.icon}
                    className="text-[#607B96] transition-colors group-hover:text-[#FEA55F]"
                  />
                </div>
                <h4 className="text-base font-semibold text-white mb-2">
                  {pillar.title}
                </h4>
                <p className="text-sm leading-relaxed text-[#A1B5C1] font-light">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
