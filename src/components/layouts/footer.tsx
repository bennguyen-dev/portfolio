import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { NAV_ITEMS } from '@/constants';

// Uses shadcn/ui classnames and variables from global.css for color and radius

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
    <footer className="w-full bg-background dark:bg-background py-8 px-4 border-t border-border transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        {/* Top Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleScrollToTop}
          className="bg-primary text-primary-foreground rounded-full p-4 mb-6 shadow-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </motion.button>

        {/* Name and Title */}
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-primary">
            Le Duy Linh
            <span className="w-1.5 h-1.5 ml-0.5 inline-block bg-red-700 dark:bg-red-500 rounded-full"></span>
          </h2>
          <p className="text-muted-foreground mt-1">Front-End Developer</p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 mb-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.sectionId}
              href={`#${item.sectionId}`}
              className="text-muted-foreground hover:text-primary transition-colors font-medium px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <div className="text-muted-foreground text-xs text-center">
          &copy; 2025 Le Duy Linh. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
