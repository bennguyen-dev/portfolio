'use client';

import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarLogo,
  NavBody,
  NavItems,
} from '@/components/ui/resizable-navbar';
import { useEffect, useState } from 'react';
import { Download, Monitor, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/constants';
import { ShimmerButton } from '@/components/ui/shimmer-button.tsx';

type Theme = 'light' | 'dark' | 'system';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>('system');

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'system';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(newTheme);
    }
  };

  const toggleTheme = () => {
    const themes: Theme[] = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(theme);
    const newTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800"
      aria-label="Toggle theme"
    >
      {theme === 'light' && <Sun className="w-5 h-5" />}
      {theme === 'dark' && <Moon className="w-5 h-5" />}
      {theme === 'system' && <Monitor className="w-5 h-5" />}
    </button>
  );
};

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    NAV_ITEMS.forEach((item) => {
      const element = document.getElementById(item.sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems
          items={NAV_ITEMS}
          className={cn(
            '!static', // Override absolute positioning
            'flex justify-center items-center',
          )}
        />
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <ShimmerButton
            onClick={() => {
              window.open('/path-to-your-cv.pdf', '_blank');
            }}
          >
            <Download className="w-4 h-4 mr-2" />
            Resume
          </ShimmerButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {NAV_ITEMS.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                'relative text-neutral-600 dark:text-neutral-300 w-full px-4 py-2 rounded-md transition-colors',
                activeSection === item.sectionId &&
                  'font-bold text-neutral-900 dark:text-white bg-gray-100 dark:bg-neutral-800',
              )}
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4 mt-4">
            <ShimmerButton
              onClick={() => {
                window.open('/path-to-your-cv.pdf', '_blank');
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </ShimmerButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
