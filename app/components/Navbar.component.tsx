'use client';

import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: '_home', href: '/' },
    { name: '_about-me', href: '/about' },
    { name: '_projects', href: '/project' },
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
        when: 'beforeChildren',
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
        type: 'spring',
        stiffness: 300,
      },
    },
  };

  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative border-b bg-transparent border-[#1E2D3D] h-[64px] px-6 text-[#607B96] flex items-center font-roboto z-20"
    >
      <div className="flex justify-between items-center w-full">
        <motion.h1
          variants={itemVariants}
          className="text-lg font-bold text-[#607B96]"
        >
          Soyooye Emmanuel
        </motion.h1>

        <motion.ul
          className="flex border-l  border-[#1E2D3D] relative"
          variants={containerVariants}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <motion.li
                key={link.href}
                className="relative border-r border-[#1E2D3D]"
                variants={itemVariants}
                whileHover={{ scale: 1.1, color: '#fff' }}
              >
                <Link
                  href={link.href}
                  className={`block px-8 py-4 hover:text-white transition-colors ${
                    isActive ? 'text-white' : ''
                  }`}
                >
                  {link.name}
                </Link>

                {isActive && (
                  <motion.div
                    layoutId="activeBorder"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FEA55F]"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.div
          className="border-l border-[#1E2D3D] relative"
          variants={itemVariants}
        >
          <Link
            href="/contact"
            className={`block px-8 py-4 hover:text-white transition-colors ${
              pathname === '/contact' ? 'text-white' : ''
            }`}
          >
            _contact-me
          </Link>

          {pathname === '/contact' && (
            <motion.div
              layoutId="activeBorder"
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FEA55F]"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
        </motion.div>
      </div>
    </motion.nav>
  );
};
