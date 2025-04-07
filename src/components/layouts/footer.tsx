import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { NAV_ITEMS } from '@/constants';

interface FooterProps {
  scrollToTop?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ scrollToTop }) => {
  const handleScrollToTop = () => {
    if (scrollToTop) {
      scrollToTop();
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-gray-50 py-6 px-4 w-full">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Top Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleScrollToTop}
          className="bg-blue-600 text-white rounded-full p-4 mb-6 shadow-md"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </motion.button>

        {/* Name and Title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-blue-600">
            Le Duy Linh<span className="text-black">.</span>
          </h2>
          <p className="text-gray-600 mt-1">Front-End Developer</p>
        </div>

        {/* Navigation as */}
        <nav className="flex flex-wrap justify-center gap-6 mb-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.sectionId}
              href={`#${item.sectionId}`}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <div className="text-gray-500 text-sm">
          © 2025 Le Duy Linh. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
