"use client";

import { motion, Variants } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState, useRef } from "react";
import { projects } from "@/app/data";
import Image from "next/image";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export default function ProjectsJourney() {
  const [activeSection, setActiveSection] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  const ticking = useRef(false);

  // Reversed projects list (newest first)
  const reversedProjects = [...projects].reverse();

  // Simple, robust onScroll approach (no IntersectionObserver)
  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    if (ticking.current) return;

    ticking.current = true;
    window.requestAnimationFrame(() => {
      const scrollTop = container.scrollTop;
      const vh = window.innerHeight || document.documentElement.clientHeight;

      // Active section update
      const newIndex = Math.round(scrollTop / vh);
      setActiveSection((prev) => (prev === newIndex ? prev : newIndex));

      // Show button when scrolled
      setShowButton(scrollTop > 300);

      ticking.current = false;
    });
  };

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    setActiveSection(index);
  };

  const scrollToTop = () => {
    containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative h-[calc(100vh-64px-56px)] w-full overflow-hidden">

      {/* Scroll container (snap + onScroll) */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="hide-scrollbar relative z-10 h-full snap-y snap-mandatory overflow-y-auto"
      >
        {reversedProjects.map((project, index) => {
          const projectNum = String(reversedProjects.length - index).padStart(2, "0");
          return (
            <section
              key={project.id}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="relative flex min-h-full snap-start items-center justify-center px-6 py-12 lg:px-20"
            >
              {/* Subtle background project counter watermark */}
              <div className="pointer-events-none absolute top-6 right-8 select-none font-mono text-7xl font-black text-white/[0.03] lg:top-12 lg:right-16 lg:text-9xl">
                #{projectNum}
              </div>

              <div className="container mx-auto w-full max-w-7xl">
                <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-16">
                  {/* Image Column */}
                  <motion.div
                    className="w-full lg:w-1/2"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <motion.div
                      variants={fadeInUp}
                      className="group relative h-[320px] sm:h-[380px] lg:h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-[#FEA55F]/40 hover:shadow-[0_20px_60px_rgba(254,165,95,0.15)]"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={800}
                        className="h-[650px] w-full object-cover object-top transition-transform duration-[3000ms] ease-in-out group-hover:-translate-y-1/4"
                        priority={index === 0}
                      />
                      {/* Gradient overlay for contrast */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F172B]/90 via-transparent to-black/20" />

                      {/* Top badge */}
                      <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1 font-mono text-xs text-white/80 backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FEA55F] animate-pulse" />
                        <span>Project {projectNum}</span>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Content Column */}
                  <motion.div
                    className="w-full space-y-5 lg:w-1/2"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-semibold tracking-wider text-[#FEA55F] uppercase">
                        {project.year}
                        </span>
                        <span className="h-px w-10 bg-white/10" />
                      </div>
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                        {project.title}
                      </h2>
                    </motion.div>

                    <motion.p
                      variants={fadeInUp}
                      className="text-base sm:text-lg leading-relaxed text-[#A1B5C1] lg:text-lg font-light"
                    >
                      {project.description}
                    </motion.p>

                    {/* Technologies tags */}
                    <motion.div
                      variants={fadeInUp}
                      className="flex flex-wrap gap-2 pt-1"
                    >
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-white/10 bg-black/40 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-300 backdrop-blur-md transition-all hover:border-[#FEA55F]/60 hover:text-[#FEA55F] hover:bg-[#FEA55F]/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </motion.div>

                    {/* Action buttons */}
                    <motion.div
                      variants={fadeInUp}
                      className="flex flex-wrap gap-4 pt-3"
                    >
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-medium text-slate-200 backdrop-blur-md transition-all hover:border-[#FEA55F] hover:bg-white/[0.05] hover:text-white hover:shadow-[0_0_25px_rgba(254,165,95,0.2)]"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Icon icon="bi:github" className="text-lg" />
                          <span>View Code</span>
                        </motion.a>
                      )}

                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2.5 rounded-xl bg-[#FEA55F] px-5 py-3 text-sm font-bold text-[#0F172B] shadow-[0_0_25px_rgba(254,165,95,0.3)] transition-all hover:bg-[#ffb476] hover:shadow-[0_0_35px_rgba(254,165,95,0.55)]"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Icon
                            icon="material-symbols:open-in-new"
                            className="text-lg"
                          />
                          <span>Live Demo</span>
                        </motion.a>
                      )}
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </section>
          );
        })}
      </div>


      {/* Back to top for mobile */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed right-5 bottom-20 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white backdrop-blur-md shadow-xl transition-all active:scale-95 lg:hidden"
          aria-label="Back to top"
        >
          <Icon icon="line-md:arrow-up" className="text-xl" />
        </button>
      )}
    </div>
  );
}
