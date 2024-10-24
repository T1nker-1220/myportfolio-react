'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => { 
  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed w-full z-50 bg-black bg-opacity-50 backdrop-blur-md"
    >
      <div className="container mx-auto flex justify-between items-center py-4">
        <motion.img 
          src="/your-logo.png" 
          alt="Logo" 
          className="w-12 h-12"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
        <ul className="flex space-x-8">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }}>
              <Link href={`#${item.toLowerCase()}`} className="text-white hover:text-purple-400 transition-colors">
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
        <motion.a 
          href="https://github.com/YourGitHub" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ rotateY: 180 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/github-logo.png" alt="GitHub" className="w-8 h-8" />
        </motion.a>
      </div>
    </motion.nav>
  );
};