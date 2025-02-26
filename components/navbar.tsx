'use client';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import MenuItem from './menu-items';
import { GithubIcon, LinkedInIcon } from './social-icons';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navItems = [
  { name: 'About', href: '#about' }, 
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/tyler-harnish-0744012b1/",
  twitter: "https://twitter.com/yourusername"
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  // Function to scroll smoothly to a section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 ${isScrolled
        ? 'backdrop-blur-2xl bg-background/90 shadow-2xl shadow-primary/10'
        : 'backdrop-blur-lg bg-background/50'
        } transition-all duration-300 ease-out`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 group"
          >
            <div className="relative h-8 w-8 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-tertiary animate-spin-slow [mask-image:linear-gradient(transparent,white)]" />
              <div className="absolute inset-[2px] bg-background rounded-full flex items-center justify-center">
                <span className="font-bold bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
                  TH
                </span>
              </div>
            </div>
            <span className="font-semibold text-content/90 group-hover:text-primary transition-colors">
              Tyler Harnish
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6 bg-background/80 px-4 py-2 
            rounded-full border border-white/5 shadow-lg shadow-primary/5">
              {navItems.map((item, i) => (
                item.name === 'About' || item.name === 'Contact' || item.name === 'Skills' || item.name === 'Education' ? (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href.substring(1))}
                    className="text-content/80 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </button>
                ) : (
                  <MenuItem key={item.name} index={i} href={item.href}>
                    {item.name}
                  </MenuItem>
                )
              ))}
            </div>

            <div className="h-6 w-px bg-white/10 mx-2" />

            <div className="flex gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group"
              >
                <GithubIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group"
              >
                <LinkedInIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-content/80" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-content/80" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  scrollToSection(item.href.substring(1));
                  setIsMenuOpen(false); // Close mobile menu
                }}
                className="block w-full text-left px-4 py-2 text-content/80 hover:text-primary hover:bg-white/5 
                rounded-lg transition-colors"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 border-t border-white/5 flex gap-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group"
              >
                <GithubIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group"
              >
                <LinkedInIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
