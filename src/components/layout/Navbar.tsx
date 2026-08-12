import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';
import { HiMenuAlt3, HiX, HiMoon, HiSun } from 'react-icons/hi';

const navLinks = [
  { name: 'ABOUT', href: '#about' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'EDUCATION', href: '#education' },
  { name: 'CONTACT', href: '#contact' },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section highlighting
      const sections = ['home', 'about', 'experience', 'projects', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent',
        isScrolled ? 'bg-background/80 backdrop-blur-md py-4 shadow-sm border-white/5' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center max-w-[95vw]">
        <a href="#home" className="text-2xl font-black tracking-tighter">
          ARADHYA<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={cn(
                    'text-xs font-bold tracking-[0.2em] transition-colors hover:text-primary relative group',
                    activeSection === link.href.substring(1) ? 'text-primary' : 'text-gray-400'
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left",
                    activeSection === link.href.substring(1) && "scale-x-100"
                  )} />
                </a>
              </li>
            ))}
          </ul>
          
          <button 
            onClick={() => setIsDark(!isDark)}
            className="w-10 h-10 rounded-full bg-cards border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all"
            aria-label="Toggle Theme"
          >
            {isDark ? <HiMoon size={18} /> : <HiSun size={18} />}
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="w-8 h-8 rounded-full bg-cards border border-white/10 flex items-center justify-center text-gray-400"
          >
            {isDark ? <HiMoon size={16} /> : <HiSun size={16} />}
          </button>
          <button
            className="text-2xl text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-white/5"
          >
            <ul className="flex flex-col items-center py-8 gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'text-sm font-bold tracking-[0.2em] transition-colors',
                      activeSection === link.href.substring(1) ? 'text-primary' : 'text-gray-400'
                    )}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
