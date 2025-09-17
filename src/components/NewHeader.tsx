import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import { Logo } from './Header/index';
import Navigation from './Header/Navigation';

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
      <motion.div 
        className="mx-auto px-6 sm:px-8 lg:px-12" 
        variants={navVariants} 
        initial="hidden" 
        animate="visible"
      >
        <motion.div className="flex items-center justify-between h-16 md:h-20 w-full" variants={navItemVariants}>
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

            {/* Mobile Menu Button - Show on md and down */}
            <div className="lg:hidden">
              <button
                type="button"
                className="relative h-8 w-8 p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMenu}
              >
                <motion.span
                  className={`block absolute h-0.5 w-full left-0 transition-all duration-300 bg-gray-900 ${
                    isMobileMenuOpen ? 'rotate-45 top-3.5' : 'top-2'
                  }`}
                />
                <motion.span
                  className={`block absolute h-0.5 w-full left-0 transition-all duration-300 bg-gray-900 top-3.5 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <motion.span
                  className={`block absolute h-0.5 w-full left-0 transition-all duration-300 bg-gray-900 ${
                    isMobileMenuOpen ? '-rotate-45 top-3.5' : 'top-5'
                  }`}
                />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

export default NewHeader;
