import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, Menu, X, ChevronDown } from 'lucide-react';
import Button from './ui/Button';
import { Logo } from './Header/index';
import Navigation from './Header/Navigation';
import { navItems, NavItem } from './Header/NavItems';

// Framer Motion variants
const navVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } },
};

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
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

          if (currentScrollY <= 10) setIsVisible(true);
          else if (currentScrollY < lastScrollY && currentScrollY > hideThreshold) setIsVisible(true);
          else if (currentScrollY > lastScrollY && currentScrollY > hideThreshold) setIsVisible(false);

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
    if (href.startsWith('/')) navigate(href);
    else if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
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
          <div className="flex-shrink-0 z-20">
            <Logo />
          </div>

          {/* Mobile Menu Button - Visible on mobile/tablet */}
          <div className="lg:hidden ml-auto mr-4 z-20">
            <button
              type="button"
              className="relative h-10 w-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-900" />
              ) : (
                <Menu className="h-6 w-6 text-gray-900" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={mobileMenuVariants}
                className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-10 overflow-hidden"
              >
                <div className="px-4 py-2 space-y-2 pb-6">
                  {navItems.map((item: NavItem) => (
                    <div key={item.name} className="border-b border-gray-100">
                      <button
                        onClick={() => {
                          if (item.href) {
                            handleNavigation(item.href);
                          } else {
                            toggleDropdown(item.name);
                          }
                        }}
                        className="w-full flex items-center justify-between py-3 text-gray-900 hover:text-blue-600 transition-colors text-left"
                      >
                        <span>{item.name}</span>
                        {(item.submenu || item.megaMenu) && (
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`}
                          />
                        )}
                      </button>
                      
                      {/* Mobile Submenu */}
                      <AnimatePresence>
                        {(item.submenu && activeDropdown === item.name) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 overflow-hidden"
                          >
                            {item.submenu.map((subItem, i: number) => (
                              <button
                                key={i}
                                onClick={() => handleNavigation(subItem.href)}
                                className="w-full text-left py-2 text-gray-600 hover:text-blue-600 transition-colors"
                              >
                                {subItem.name}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Centered Navigation */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
            <Navigation
              isScrolled={isScrolled}
              activeDropdown={activeDropdown}
              onToggleDropdown={toggleDropdown}
              onNavigation={handleNavigation}
              isMobileMenuOpen={isMobileMenuOpen}
            />
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4 z-20">
            <div className="hidden sm:block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Button
                  variant="vision"
                  size={window.innerWidth < 1024 ? 'sm' : 'md'}
                  onClick={() => handleNavigation('/contact')}
                  className="whitespace-nowrap"
                >
                  Book Intro Call
                  <ArrowRight className="ml-1 md:ml-2 h-3 md:h-4 w-3 md:w-4" />
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                type="button"
                className="relative h-10 w-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg transition-colors duration-200"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMenu}
              >
                {isMobileMenuOpen ? (
                  <img src="/icon/close.svg" alt="Close menu" className="h-6 w-6" />
                ) : (
                  <img src="/icon/menus.svg" alt="Open menu" className="h-6 w-6" />
                )}
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
