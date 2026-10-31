"use client";

import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "@iconify/react";

export const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "_home", href: "/" },
    { name: "_about-me", href: "/about" },
    { name: "_projects", href: "/project" },
  ];

  // Variants for the container
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.42, 0, 0.58, 1],
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  // Variants for each nav item
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  // Mobile menu variants
  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
      },
    },
  };

  const mobileItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="font-roboto relative z-20 flex min-h-[64px] flex-col border-b border-[#1E2D3D]/60 bg-[#070b16]/60 backdrop-blur-xl px-4 text-[#607B96] transition-colors duration-500 md:flex-row md:items-center md:px-6"
    >
      {/* Desktop Layout */}
      <div className="flex h-[64px] w-full items-center justify-between">
        <motion.h1
          variants={itemVariants}
          className="truncate text-base font-bold text-[#607B96] md:text-lg"
        >
          Soyooye Emmanuel
        </motion.h1>

        {/* Desktop Navigation */}
        <motion.ul
          className="relative hidden border-l border-[#1E2D3D] md:flex"
          variants={containerVariants}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <motion.li
                key={link.href}
                className="relative border-r border-[#1E2D3D]"
                variants={itemVariants}
                whileHover={{ scale: 1.1, color: "#fff" }}
              >
                <Link
                  href={link.href}
                  className={`block px-4 py-4 text-sm transition-colors hover:text-white lg:px-8 lg:text-base ${
                    isActive ? "text-white" : ""
                  }`}
                >
                  {link.name}
                </Link>

                {isActive && (
                  <motion.div
                    layoutId="activeBorder"
                    className="absolute right-0 -bottom-1 left-0 h-[2px] bg-[#FEA55F]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.div
          className="relative hidden border-l border-[#1E2D3D] md:block"
          variants={itemVariants}
        >
          <Link
            href="/contact"
            className={`block px-4 py-4 text-sm transition-colors hover:text-white lg:px-8 lg:text-base ${
              pathname === "/contact" ? "text-white" : ""
            }`}
          >
            _contact-me
          </Link>

          {pathname === "/contact" && (
            <motion.div
              layoutId="activeBorder"
              className="absolute right-0 bottom-0 left-0 h-[2px] bg-[#FEA55F]"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          variants={itemVariants}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-[#607B96] transition-colors hover:text-white md:hidden"
          whileTap={{ scale: 0.95 }}
        >
          <Icon
            icon={
              isMenuOpen ? "material-symbols:close" : "material-symbols:menu"
            }
            className="text-xl"
          />
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        variants={mobileMenuVariants}
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        className="absolute top-[64px] left-0 z-50 w-full border-t border-[#1E2D3D]/60 bg-[#070b16]/90 backdrop-blur-xl md:hidden"
      >
        <motion.ul className="py-2" variants={mobileMenuVariants}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <motion.li
                key={link.href}
                variants={mobileItemVariants}
                className="border-b border-[#1E2D3D]/50 last:border-b-0"
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`relative block px-6 py-3 transition-colors hover:text-white ${
                    isActive ? "bg-[#1E2D3D]/30 text-white" : ""
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      className="absolute top-0 bottom-0 left-0 w-[3px] bg-[#FEA55F]"
                      layoutId="mobileActiveBorder"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </motion.li>
            );
          })}
          <motion.li variants={mobileItemVariants}>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`relative block px-6 py-3 transition-colors hover:text-white ${
                pathname === "/contact" ? "bg-[#1E2D3D]/30 text-white" : ""
              }`}
            >
              _contact-me
              {pathname === "/contact" && (
                <motion.div
                  className="absolute top-0 bottom-0 left-0 w-[3px] bg-[#FEA55F]"
                  layoutId="mobileActiveBorder"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.nav>
  );
};
