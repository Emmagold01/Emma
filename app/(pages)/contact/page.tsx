"use client";

import { motion, Variants } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState } from "react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const socials = [
  {
    name: "GitHub",
    handle: "@Emmagold01",
    href: "https://github.com/Emmagold01",
    icon: "bi:github",
    description: "Inspect repositories, experiments, and source code.",
    accent: "hover:border-white/40 hover:shadow-white/10",
    badge: "Open Source",
  },
  {
    name: "X / Twitter",
    handle: "@Itunu_io",
    href: "https://x.com/Itunu_io",
    icon: "streamline-logos:x-twitter-logo-solid",
    description:
      "Daily insights on frontend engineering, UI designs, and dev thoughts.",
    accent: "hover:border-sky-400/40 hover:shadow-sky-400/10",
    badge: "Direct Messages Open",
  },
  {
    name: "LinkedIn",
    handle: "Soyooye Emmanuel",
    href: "https://www.linkedin.com/in/soyooye-emmanuel-5b8769274/",
    icon: "grommet-icons:linkedin-option",
    description:
      "Professional background, career journey, and industry network.",
    accent: "hover:border-blue-500/40 hover:shadow-blue-500/10",
    badge: "Professional Network",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "soyooyeemmanuel@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative min-h-[calc(100vh-64px-56px)] w-full overflow-hidden px-6 py-12 lg:px-20 lg:py-16">

      <div className="relative z-10 container mx-auto max-w-5xl space-y-12">
        {/* Header */}
        <div className="space-y-4 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 font-mono text-xs font-semibold tracking-wider text-[#FEA55F] uppercase"
          >
            <span>{"// 02. contact-me"}</span>
            <span className="h-px w-12 bg-white/10" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-[#FEA55F] via-[#ffa1ad] to-white bg-clip-text text-transparent">
              exceptional
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-base font-light text-[#A1B5C1] sm:text-lg"
          >
            Reach out directly via email or connect with me through my active
            social channels.
          </motion.p>
        </div>

        {/* Live Availability Status Pill */}
        <motion.div
          custom={1}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="inline-flex flex-wrap items-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 whitespace-nowrap backdrop-blur-md"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-[10px] font-medium text-emerald-300 md:text-xs">
            Available for new opportunities & freelance projects
          </span>
        </motion.div>

        {/* Primary Reachout: Hero Email Card */}
        <motion.div
          custom={2}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-[#FEA55F]/30"
        >
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="space-y-2">
              <span className="font-mono text-xs tracking-wider text-[#607B96] uppercase">
                Direct Email Reach
              </span>
              <h2 className="font-mono text-lg font-bold text-white sm:text-2xl">
                {email}
              </h2>
              <p className="text-xs text-[#A1B5C1]">
                Typically responds within 24 hours.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Copy Email Button */}
              <motion.button
                onClick={handleCopy}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-medium text-white backdrop-blur-md transition-colors hover:border-[#FEA55F] hover:bg-[#FEA55F]/10 hover:text-[#FEA55F]"
              >
                <Icon
                  icon={copied ? "lucide:check" : "lucide:copy"}
                  className={`text-base ${copied ? "text-emerald-400" : ""}`}
                />
                <span>{copied ? "Copied to Clipboard!" : "Copy Email"}</span>
              </motion.button>

              {/* Direct Mailto Button */}
              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=soyooyeemmanuel@gmail.com"
                target="_blank"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-xl bg-[#FEA55F] px-5 py-3 text-sm font-bold text-[#0F172B] shadow-[0_0_20px_rgba(254,165,95,0.3)] transition-all hover:bg-[#ffb476] hover:shadow-[0_0_30px_rgba(254,165,95,0.5)]"
              >
                <Icon icon="lucide:send" className="text-base" />
                <span>Send Email</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Socials Grid */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-wider text-[#FEA55F] uppercase">
              {"// Find me on socials"}
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                custom={index + 3}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={`group flex flex-col justify-between rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl transition-all duration-300 hover:shadow-xl ${social.accent}`}
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-colors group-hover:border-[#FEA55F]/50 group-hover:text-[#FEA55F]">
                      <Icon icon={social.icon} className="text-2xl" />
                    </div>
                    <span className="rounded-full border border-white/5 bg-white/[0.03] px-2.5 py-0.5 font-mono text-[11px] text-[#A1B5C1]">
                      {social.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white transition-colors group-hover:text-[#FEA55F]">
                    {social.name}
                  </h3>
                  <p className="mt-0.5 font-mono text-xs text-[#FEA55F]/90">
                    {social.handle}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-[#A1B5C1]">
                    {social.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 font-mono text-xs text-white/70 transition-colors group-hover:text-white">
                  <span>Visit profile</span>
                  <Icon
                    icon="lucide:arrow-up-right"
                    className="text-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Code Snippet Footer / Info */}
        <motion.div
          custom={6}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="font-fira rounded-2xl border border-white/10 bg-[#090E17]/70 p-6 text-xs text-[#607B96] backdrop-blur-xl"
        >
          <div className="mb-2 flex items-center gap-2 text-white/80">
            <Icon
              icon="solar:info-circle-linear"
              className="text-sm text-[#FEA55F]"
            />
            <span className="font-semibold">{"// Collaboration Note"}</span>
          </div>
          <p className="leading-relaxed">
            I am currently open to freelance contracts, remote frontend roles,
            and open-source collaborations. If you have an exciting concept or
            need high-fidelity interface design implementation, feel free to
            drop a message anytime!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
