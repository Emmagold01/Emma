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
      className="relative border-t bg-transparent border-[#1E2D3D] h-[56px] px-3 text-[#607B96] flex items-center font-roboto z-30"
    >
      <div className="flex justify-between items-center w-full">
        <motion.div variants={itemVariants} className="flex items-center">
          <h3 className="text-[16px] border-r border-[#1E2D3D] block px-6 py-4">
            find me in:
          </h3>
          <motion.a
            variants={itemVariants}
            href="https://x.com/e_gold3"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-5 border-r border-[#1E2D3D] hover:text-white transition-colors"
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
            className="block px-4 py-5 border-r border-[#1E2D3D] hover:text-white transition-colors"
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
            className="flex items-center gap-2 px-8 py-4 hover:text-white transition-colors"
          >
            <span>@Emmagold01</span>
            <Icon icon="bi:github" className="text-[16px]" />
          </a>
        </motion.div>
      </div>
    </motion.footer>
  );
};
