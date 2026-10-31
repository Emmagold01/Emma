"use client";

import Image, { StaticImageData } from "next/image";
import blue from "@/app/assets/Blue.png";
import green from "@/app/assets/Green.png";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import canvas1 from "@/app/assets/Canvas-1.png";
import canvas2 from "@/app/assets/Canvas-2.png";
import canvas3 from "@/app/assets/Canvas-3.png";
import canvas4 from "@/app/assets/Canvas-4.png";

const headingContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.02, delayChildren: 0.2 },
  },
};

const charVariant: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

// ✅ Reusable Canvas component
const CanvasImage = ({
  src,
  alt,
  className,
  style,
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
  style?: object;
}) => (
  <motion.div
    className={className}
    animate={{
      y: [0, -15, 0],
      rotate: [-3, 3, -3],
    }}
    transition={{
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
    }}
  >
    <Image src={src} alt={alt} style={style} />
  </motion.div>
);

export default function Home() {
  const heading = "Crafting interfaces so smooth, you’ll forget the code exist";
  const sub = "> Front-end developer";

  const [typed, setTyped] = useState("");

  // ✅ Typing effect for subheading
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setTyped(sub.slice(0, i + 1));
      i++;
      if (i >= sub.length) clearInterval(id);
    }, 60);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* ✅ Gradient Blobs, Dot Grid & Spinning Canvases */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle tech dot matrix grid */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:28px_28px] opacity-50" />

        <Image
          src={blue}
          alt="Gradient Shape"
          className="absolute right-[8rem] bottom-13 z-0 md:right-[11rem] md:bottom-0"
          priority
        />
        <Image
          src={green}
          alt="Gradient Shape"
          className="absolute right-0 bottom-0 z-0"
          priority
        />

        {/* ✅ Canvases with smooth auto-spin + hover spin */}
        <CanvasImage
          src={canvas1}
          alt="canvas"
          className="pointer-events-none absolute -top-[14%] -left-[9%] w-[150px] md:-top-[10%] md:left-[5%] md:w-auto"
          style={{ filter: "brightness(2) contrast(0.5) opacity(0.6)" }}
        />
        <CanvasImage
          src={canvas3}
          alt="canvas"
          className="pointer-events-none absolute -bottom-[12%] left-[11.5%] w-[150px] md:-bottom-[9%] md:left-[22%] md:w-auto"
          style={{ filter: "brightness(2) contrast(0.5) opacity(0.6)" }}
        />
        <CanvasImage
          src={canvas2}
          alt="canvas"
          className="pointer-events-none absolute top-[0%] right-[15%]"
          style={{ filter: "brightness(2) contrast(0.5) opacity(0.6)" }}
        />
        <CanvasImage
          src={canvas4}
          alt="canvas"
          className="pointer-events-none absolute -right-[8%] -bottom-[10%] w-[250px] md:right-[6%] md:-bottom-[10%] md:w-auto"
          style={{ filter: "brightness(2) contrast(0.5) opacity(0.6)" }}
        />
      </div>

      {/* ✅ Home Content */}
      <div className="relative z-10 flex min-h-full flex-col items-center justify-center space-y-2 pt-30 text-center md:space-y-4 md:px-8 md:pt-40">
        {/* ✅ Split-text reveal for heading */}
        <motion.h1
          className="font-roboto max-w-[22rem] text-[28px] leading-tight font-medium md:max-w-2xl md:text-[40px] lg:max-w-3xl lg:text-[45px]"
          variants={headingContainer}
          initial="hidden"
          animate="visible"
        >
          {heading.split("").map((ch, idx) => (
            <motion.span
              key={idx}
              className="inline-block"
              variants={charVariant}
            >
              {ch === " " ? "\u00A0" : ch}
            </motion.span>
          ))}
        </motion.h1>

        {/* ✅ Typing effect for subheading */}
        <p className="font-fira text-[23px] tracking-tighter text-indigo-500 md:text-[30px]">
          {typed}
          <motion.span
            aria-hidden
            className="ml-1 inline-block align-[-2px]"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            |
          </motion.span>
        </p>

        {/* ✅ GitHub link with fade-in */}
        <motion.div
          className="pt-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.4, ease: "easeOut" }}
        >
          <p className="font-fira text-[16px] tracking-tighter text-gray-400">
            {"// find my profile on Github:"}
          </p>
          <p className="font-fira text-[16px]">
            <span className="text-indigo-500">const </span>
            <span className="text-teal-400">githubLink </span>
            <span>= </span>
            <a
              href="https://github.com/Emmagold01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[#ffa1ad] underline decoration-2 underline-offset-4 transition-colors hover:text-rose-400">
                &quot;https://github.com/Emmagold01&quot;
              </span>
            </a>
          </p>
        </motion.div>
      </div>
    </>
  );
}
