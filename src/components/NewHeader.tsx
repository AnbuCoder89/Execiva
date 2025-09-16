import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Logo, DesktopNav, MobileNav } from './Header/index';

// Framer Motion variants for header and items
const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, staggerChildren: 0.05 },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const NewHeader: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Handle scroll for sticky header
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollThreshold = 50;
          const hideThreshold = 80;

          setIsScrolled(currentScrollY > scrollThreshold);

          if (currentScrollY <= 10) {
            setIsVisible(true);
          } else if (currentScrollY < lastScrollY && currentScrollY > hideThreshold) {
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY && currentScrollY > hideThreshold) {
            setIsVisible(false);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const handleNavigation = (href: string) => {
    if (href.startsWith('/')) {
      navigate(href);
    } else if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      animate={{ y: isVisible ? 0 : '-100%' }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94], type: 'tween' }}
    >
      <motion.div className="mx-auto px-6 sm:px-8 lg:px-12" variants={navVariants} initial="hidden" animate="visible">
        <motion.div className="flex items-center justify-between h-20" variants={navItemVariants}>
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <DesktopNav
            isScrolled={isScrolled}
            activeDropdown={activeDropdown}
            onToggleDropdown={toggleDropdown}
            onNavigation={handleNavigation}
          />

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center">
            <motion.button
              onClick={() => handleNavigation('/#contact')}
              className="group inline-flex items-center justify-center text-center rounded-lg transition-colors whitespace-nowrap gap-2 font-medium text-sm leading-none px-4 py-3 h-[46px] bg-blue-700 text-white hover:bg-blue-800"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
               <motion.button
              onClick={() => handleNavigation('/#contact')}
              className="group inline-flex items-center justify-center text-center rounded-lg transition-colors whitespace-nowrap gap-2 font-medium text-sm leading-none px-4 py-3 h-[46px] bg-blue-700 text-white hover:bg-blue-800"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                Book intro call
                <motion.div
                  className="flex items-center"
                  whileHover={{ x: 2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </span>
            </motion.button>
                <motion.div
                  className="flex items-center"
                  whileHover={{ x: 2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="relative h-6 w-6 p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <motion.span
                className={`block absolute h-0.5 w-full left-0 bg-gray-900 transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 top-2.5' : 'top-1'
                }`}
              />
              <motion.span
                className={`block absolute h-0.5 w-full bg-gray-900 left-0 top-2.5 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <motion.span
                className={`block absolute h-0.5 w-full left-0 bg-gray-900 transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 top-2.5' : 'top-4'
                }`}
              />
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileNav
            isMobileMenuOpen={isMobileMenuOpen}
            activeDropdown={activeDropdown}
            onToggleDropdown={toggleDropdown}
            onNavigation={handleNavigation}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default NewHeader;
