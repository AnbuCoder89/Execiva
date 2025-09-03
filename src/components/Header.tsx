import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollThreshold = 50; // For background blur
          const hideThreshold = 80; // Minimum scroll before hiding
          
          // Update background blur state
          setIsScrolled(currentScrollY > scrollThreshold);
          
          // Simplified scroll direction logic
          if (currentScrollY <= 10) {
            // Always show at top
            setIsVisible(true);
          } else if (currentScrollY < lastScrollY && currentScrollY > hideThreshold) {
            // Scrolling up - show header
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY && currentScrollY > hideThreshold) {
            // Scrolling down - hide header
            setIsVisible(false);
          }
          
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleSectionChange = (event: CustomEvent) => {
      setActiveSection(event.detail);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('setActiveSection', handleSectionChange as EventListener);

    // Set up intersection observer for active section detection
    const sections = ['home', 'vision', 'mission', 'services', 'testimonials', 'case-studies', 'contact'];
    const observers = sections.map(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(sectionId);
              }
            });
          },
          { threshold: 0.3 }
        );
        observer.observe(element);
        return observer;
      }
      return null;
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('setActiveSection', handleSectionChange as EventListener);
      observers.forEach(observer => observer?.disconnect());
    };
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'vision', label: 'Vision' },
    { id: 'services', label: 'Services' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'testimonials', label: 'Testimonials' },  
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95,
      y: -20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  return (
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
            : 'bg-transparent'
        }`}
        animate={{
          y: isVisible ? 0 : '-100%'
        }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "tween"
        }}
      >
      <motion.div 
        className="mx-auto px-6 sm:px-8 lg:px-12"
        variants={navVariants}
      >
        <motion.div 
          className="flex items-center justify-between h-20"
          variants={navItemVariants}
        >
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.button
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 focus:outline-none"
              whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.img 
                src="/logo/1.png" 
                alt="Execiva" 
                className="h-6 w-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </motion.button>
          </motion.div>

          {/* Desktop Navigation */}
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <motion.nav 
              className="flex items-center space-x-8"
              variants={navVariants}
            >
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 font-sf-pro-text relative ${
                    activeSection === item.id
                      ? isScrolled 
                        ? 'text-gray-900' 
                        : 'text-gray-900'
                      : isScrolled 
                        ? 'text-gray-600 hover:text-gray-900' 
                        : 'text-gray-700 hover:text-gray-900'
                  }`}
                  variants={navItemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -1,
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-900 rounded-full"
                      layoutId="activeIndicator"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.nav>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:flex">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-900 border-2 shadow-lg hover:shadow-xl transform hover:scale-105 focus:ring-gray-500 bg-[#f4f3ee] border-[#f4f3ee] hover:bg-[#ebe8dd] hover:border-[#ebe8dd] px-6 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full font-sf-pro-text"
              >
                Contact
              </button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Contact Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-900 border-2 shadow-lg hover:shadow-xl transform hover:scale-105 focus:ring-gray-500 bg-[#f4f3ee] border-[#f4f3ee] hover:bg-[#ebe8dd] hover:border-[#ebe8dd] px-4 py-2 text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full font-sf-pro-text"
              >
                Contact
              </button>
            </motion.div>
            
            {/* Mobile Menu Button */}
            <motion.button
              className="p-2 rounded-lg transition-colors duration-300 hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variants={navItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} className={isScrolled ? 'text-gray-900' : 'text-gray-900'} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} className={isScrolled ? 'text-gray-900' : 'text-gray-900'} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="sm:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.nav 
                className="px-6 py-4 space-y-2"
                variants={navVariants}
              >
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 font-sf-pro-text ${
                      activeSection === item.id
                        ? 'text-gray-900 bg-gray-100'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    variants={navItemVariants}
                    whileHover={{ 
                      x: 4,
                      backgroundColor: "#F3F4F6",
                      transition: { type: "spring", stiffness: 400, damping: 17 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
};

export default Header;