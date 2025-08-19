'use client';

import Image, { StaticImageData } from 'next/image';
import blue from '@/app/assets/Blue.png';
import green from '@/app/assets/Green.png';
import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import canvas1 from '@/app/assets/Canvas-1.png';
import canvas2 from '@/app/assets/Canvas-2.png';
import canvas3 from '@/app/assets/Canvas-3.png';
import canvas4 from '@/app/assets/Canvas-4.png';

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
    transition: { duration: 0.25, ease: 'easeOut' },
  },
};

// ✅ Reusable Canvas component
const CanvasImage = ({
  src,
  alt,
  className,
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
}) => (
  <motion.div
    className={className}
    animate={{
      y: [0, -15, 0],
      rotate: [-3, 3, -3],
    }}
    transition={{
      duration: 6,
      ease: 'easeInOut',
      repeat: Infinity,
    }}
  >
    <Image src={src} alt={alt} />
  </motion.div>
);

export default function Home() {
  const heading = 'Crafting interfaces so smooth, you’ll forget the code exist';
  const sub = '> Front-end developer';

  const [typed, setTyped] = useState('');

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
          className="absolute bottom-0 z-0 right-[11rem]"
          priority
        />
        <Image
          src={green}
          alt="Gradient Shape"
          className="absolute bottom-0 z-0 right-0"
          priority
        />

        {/* ✅ Canvases with smooth auto-spin + hover spin */}
        <CanvasImage
          src={canvas1}
          alt="canvas"
          className="absolute left-[5%] -top-[10%] pointer-events-none "
        />
        <CanvasImage
          src={canvas3}
          alt="canvas"
          className="absolute left-[22%] -bottom-[9%] pointer-events-none "
        />
        <CanvasImage
          src={canvas4}
          alt="canvas"
          className="absolute right-[6%] -bottom-[10%] pointer-events-none"
        />
        <CanvasImage
          src={canvas2}
          alt="canvas"
          className="absolute right-[15%] top-[0%] pointer-events-none"
        />
      </div>

      {/* ✅ Home Content */}
      <div className="flex flex-col space-y-4 justify-center items-center text-center min-h-full relative z-10 pt-40">
        {/* ✅ Split-text reveal for heading */}
        <motion.h1
          className="font-roboto font-medium text-[45px] max-w-3xl leading-tight"
          variants={headingContainer}
          initial="hidden"
          animate="visible"
        >
          {heading.split('').map((ch, idx) => (
            <motion.span
              key={idx}
              className="inline-block"
              variants={charVariant}
            >
              {ch === ' ' ? '\u00A0' : ch}
            </motion.span>
          ))}
        </motion.h1>

        {/* ✅ Typing effect for subheading */}
        <p className="text-indigo-500 text-[30px] font-fira tracking-tighter">
          {typed}
          <motion.span
            aria-hidden
            className="inline-block ml-1 align-[-2px]"
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
          transition={{ delay: 1.2, duration: 0.4, ease: 'easeOut' }}
        >
          <p className="font-fira text-gray-400 text-[16px] tracking-tighter">
            {'// find my profile on Github:'}
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
              <span className="text-[#ffa1ad] underline decoration-2 underline-offset-4 hover:text-rose-400 transition-colors">
                &quot;https://github.com/Emmagold01&quot;
              </span>
            </a>
          </p>
        </motion.div>
      </div>
    </>
  );
}
