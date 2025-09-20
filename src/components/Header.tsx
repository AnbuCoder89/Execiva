import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import { Logo } from './Header/index';
import Navigation from './Header/Navigation';
import type { Variants } from 'framer-motion';

// Framer Motion variants for header and items
const navVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const navItemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.3, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  },
};

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.3, 
      ease: [0.4, 0, 0.2, 1] as const 
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { 
      duration: 0.3, 
      ease: [0.4, 0, 0.2, 1] as const
    },
  },
};

const Header: React.FC = () => {
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
        isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/80 backdrop-blur-sm'
      }`}
      animate={{ y: isVisible ? 0 : '-100%' }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="relative flex items-center justify-between h-16 md:h-20"
          variants={navVariants} 
          initial="hidden" 
          animate="visible"
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation - Only show on lg and up */}
          <div className="hidden lg:block flex-1">
            <Navigation
              isScrolled={isScrolled}
              activeDropdown={activeDropdown}
              onToggleDropdown={toggleDropdown}
              onNavigation={handleNavigation}
              isMobileMenuOpen={isMobileMenuOpen}
            />
          </div>

          <div className="flex items-center space-x-4">
            {/* CTA Button - Hidden on mobile, visible on sm and up */}
            <div className="hidden sm:block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="mr-2 lg:mr-0"
              >
                <Button
                  variant="vision"
                  size={window.innerWidth < 1024 ? "sm" : "md"}
                  onClick={() => handleNavigation('/contact')}
                  className="whitespace-nowrap"
                >
                  Book Intro Call
                  <ArrowRight className="ml-1 md:ml-2 h-3 md:h-4 w-3 md:w-4" />
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button - Show on lg and down */}
            <div className="lg:hidden">
              <button
                type="button"
                className="relative h-10 w-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg transition-colors duration-200"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMenu}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.img
                      key="close"
                      src="/icon/close.svg"
                      alt="Close menu"
                      className="h-6 w-6"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    />
                  ) : (
                    <motion.img
                      key="menu"
                      src="/icon/menus.svg"
                      alt="Open menu"
                      className="h-6 w-6"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Navigation
                isScrolled={isScrolled}
                activeDropdown={activeDropdown}
                onToggleDropdown={toggleDropdown}
                onNavigation={handleNavigation}
                isMobileMenuOpen={isMobileMenuOpen}
              />
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Button
                  variant="vision"
                  size="md"
                  onClick={() => handleNavigation('/contact')}
                  className="w-full justify-center"
                >
                  Book Intro Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
