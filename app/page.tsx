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
      {/* ✅ Gradient Blobs & Spinning Canvases */}
      <div className="absolute inset-0">
        <Image
          src={blue}
          alt="Gradient Shape"
          className="absolute right-[11rem] bottom-0 z-0"
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
          className="pointer-events-none absolute -top-[10%] left-[5%]"
          style={{ filter: "brightness(2) contrast(0.5) opacity(0.6)" }}
        />
        <CanvasImage
          src={canvas3}
          alt="canvas"
          className="pointer-events-none absolute -bottom-[9%] left-[22%]"
          style={{ filter: "brightness(2) contrast(0.5) opacity(0.6)" }}
        />
        <CanvasImage
          src={canvas4}
          alt="canvas"
          className="pointer-events-none absolute right-[6%] -bottom-[10%]"
          style={{ filter: "brightness(2) contrast(0.5) opacity(0.6)" }}
        />
        <CanvasImage
          src={canvas2}
          alt="canvas"
          className="pointer-events-none absolute top-[0%] right-[15%]"
          style={{ filter: "brightness(2) contrast(0.5) opacity(0.6)" }}
        />
      </div>

      {/* ✅ Home Content */}
      <div className="relative z-10 flex min-h-full flex-col items-center justify-center space-y-4 pt-40 text-center">
        {/* ✅ Split-text reveal for heading */}
        <motion.h1
          className="font-roboto max-w-3xl text-[45px] leading-tight font-medium"
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
        <p className="font-fira text-[30px] tracking-tighter text-indigo-500">
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
