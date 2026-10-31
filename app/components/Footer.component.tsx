'use client';

import { Icon } from '@iconify/react';
import { motion, Variants } from 'framer-motion';

const footerVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.6,
      when: 'beforeChildren' as const,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.4,
    },
  },
};

export const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      animate="visible"
      className="font-roboto relative z-30 flex min-h-[56px] items-center border-t border-[#1E2D3D]/60 bg-transparent backdrop-blur-xl text-[#607B96] transition-colors duration-500"
    >
      <div className="flex w-full items-center justify-between">
        <motion.div variants={itemVariants} className="flex items-center">
          <h3 className="hidden border-r border-[#1E2D3D] px-6 py-4 text-[16px] md:block">
            find me in:
          </h3>
          <motion.a
            variants={itemVariants}
            href="https://x.com/Itunu_io"
            target="_blank"
            rel="noopener noreferrer"
            className="block border-r border-[#1E2D3D] px-4 py-5 transition-colors hover:text-white"
          >
            <Icon
              icon="streamline-logos:x-twitter-logo-solid"
              className="text-[16px]"
            />
          </motion.a>
          <motion.a
            variants={itemVariants}
            href="https://www.linkedin.com/in/soyooye-emmanuel-5b8769274/"
            target="_blank"
            rel="noopener noreferrer"
            className="block border-r border-[#1E2D3D] px-4 py-5 transition-colors hover:text-white"
          >
            <Icon
              icon="grommet-icons:linkedin-option"
              className="text-[17px]"
            />
          </motion.a>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="border-l border-[#1E2D3D]"
        >
          <a
            href="https://github.com/Emmagold01"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-4 transition-colors hover:text-white md:px-8"
          >
            <span className="hidden md:block">@Emmagold01</span>
            <Icon icon="bi:github" className="text-[16px]" />
          </a>
        </motion.div>
      </div>
    </motion.footer>
  );
};
