import React from 'react';
import { FaGithub, FaHeart, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gradient-to-r from-cyan-300 to-violet-500 text-white py-6 px-4 text-center w-full"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Copyright */}
      <motion.div
        className="text-sm md:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        &copy; {new Date().getFullYear()} <span className="font-semibold">Quiz App</span> | All Rights Reserved
      </motion.div>

      {/* Made with love */}
      <motion.div
        className="flex justify-center items-center gap-1 mt-2 text-sm md:text-base flex-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Made with
        <FaHeart className="text-red-500 animate-pulse" />
        by <span className="font-bold text-white">Usman Mobeen</span>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex justify-center items-center gap-4 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <motion.a
          href="https://www.instagram.com/usmanmobeen111"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaInstagram className="text-2xl transition duration-300 hover:text-[var(--color-instagram)]" />
        </motion.a>

        <motion.a
          href="https://github.com/usmanmobeen111"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaGithub className="text-2xl transition duration-300 hover:text-[var(--color-github)]" />
        </motion.a>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
