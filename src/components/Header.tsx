"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import Button from "./ui/Button";
import { Logo } from "./Header/index";
import Navigation from "./Header/Navigation";
import { navItems, NavItem } from "./Header/NavItems";

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

  // Handle navigation and scrolling
  const handleNavigation = (href: string) => {
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
    
    // Handle different types of navigation
    if (href.startsWith('/')) {
      // For regular navigation
      navigate(href);
      // Scroll to top for page navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href.startsWith('#')) {
      // For hash links
      const element = document.getElementById(href.substring(1));
      if (element) {
        // If we're already on the same page, just scroll to the section
        if (window.location.pathname === location.pathname) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // If it's a new page, let the ScrollToTop component handle it
          navigate(href);
        }
      }
    } else {
      // Fallback for any other case
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Close any open dropdowns
    setActiveDropdown(null);
  };

  // Scroll handling
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Hide header when scrolling down, show when scrolling up
          if (currentScrollY > lastScrollY && currentScrollY > 10) {
            setIsVisible(false);
            // Only update scrolled state after header starts hiding
            setIsScrolled(true);
          } else if (currentScrollY < lastScrollY) {
            setIsVisible(true);
            // Update scrolled state when showing header on scroll up
            setIsScrolled(currentScrollY > 10);
          }
          
          // Always show header at the very top
          if (currentScrollY <= 10) {
            setIsVisible(true);
            setIsScrolled(false);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = (menu: string) => setActiveDropdown(activeDropdown === menu ? null : menu);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      animate={{ y: isVisible ? 0 : "-100%" }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo + Hamburger + CTA Container */}
        <div className="flex items-center justify-between h-16 md:h-20 relative">
          {/* Logo */}
          <div className="flex-shrink-0 z-20">
            <Logo />
          </div>

          {/* Desktop Center Navigation */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
            <Navigation
              isScrolled={isScrolled}
              activeDropdown={activeDropdown}
              onToggleDropdown={toggleDropdown}
              onNavigation={handleNavigation}
              isMobileMenuOpen={isMobileMenuOpen}
            />
          </div>

          {/* Right-side Items (CTA + Hamburger for mobile) */}
          <div className="flex items-center space-x-4 z-20">
            {/* CTA - hidden on mobile */}
            <div className="hidden sm:block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  variant="vision"
                  size={window.innerWidth < 1024 ? "sm" : "md"}
                  onClick={() => handleNavigation("/contact")}
                  className="whitespace-nowrap"
                >
                  Book Intro Call
                  <ArrowRight className="ml-1 md:ml-2 h-3 md:h-4 w-3 md:w-4" />
                </Button>
              </motion.div>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden">
              <button
                type="button"
                className="h-10 w-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-lg transition-colors duration-200"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMenu}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-900" /> : <Menu className="h-6 w-6 text-gray-900" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-10 overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <div className="px-4 py-2 space-y-2 pb-6">
              {navItems.map((item: NavItem) => (
                <div key={item.name} className="border-b border-gray-100">
                  <button
                    onClick={() => {
                      if (item.href) handleNavigation(item.href);
                      else toggleDropdown(item.name);
                    }}
                    className="w-full flex items-center justify-between py-3 text-gray-900 hover:text-gray-700 transition-colors text-left"
                  >
                    <span>{item.name}</span>
                    {(item.submenu || item.megaMenu) && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Mobile Submenu */}
                  <AnimatePresence>
                    {item.submenu && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 overflow-hidden"
                      >
                        {item.submenu.map((subItem, i: number) => (
                          <button
                            key={i}
                            onClick={() => handleNavigation(subItem.href)}
                            className="w-full text-left py-2 text-gray-600 hover:text-gray-800 transition-colors"
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Button
                  variant="vision"
                  size="md"
                  onClick={() => handleNavigation("/contact")}
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
