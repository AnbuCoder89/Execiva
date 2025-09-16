import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

const NewHeader: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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

  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      submenu: [
        { name: 'AI Solutions', href: '/services/artificial-intelligence', icon: '🤖' },
        { name: 'SEO & Content', href: '/services/seo', icon: '📈' },
        { name: 'Web Design', href: '/services/web-development', icon: '💻' },
        { name: 'Web Development', href: '/services/web-development', icon: '⚡' },
        { name: 'Data Analytics', href: '/services/data-analytics', icon: '📊' },
      ],
    },
    {
      name: 'Capabilities',
      megaMenu: [
        {
          category: 'Services',
          items: [
            { name: 'AI Solutions', href: '/services/artificial-intelligence', icon: '🤖' },
            { name: 'SEO & Content', href: '/services/seo', icon: '📈' },
            { name: 'Web Design', href: '/services/web-development', icon: '💻' },
            { name: 'Web Development', href: '/services/web-development', icon: '⚡' },
            { name: 'Data Analytics', href: '/services/data-analytics', icon: '📊' },
          ],
        },
        {
          category: 'Capabilities',
          items: [
            { name: 'Static Website Development', href: '/capabilities/static-website-development', icon: '🏗️' },
            { name: 'Website Redesign', href: '/capabilities/website-redesign', icon: '🔄' },
            { name: 'Web Performance Optimization', href: '/capabilities/web-performance-optimization', icon: '⚡' },
            { name: 'E-commerce Development', href: '/capabilities/e-commerce-development', icon: '🛒' },
            { name: 'CMS Implementation', href: '/capabilities/cms-implementation', icon: '📝' },
            { name: 'API Integrations', href: '/capabilities/api-integrations', icon: '🔗' },
            { name: 'Branding & Visual Identity', href: '/capabilities/branding', icon: '🎨' },
          ],
        },
      ],
    },
    { name: 'Case Studies', href: '/case-studies' },
    {
      name: 'Company',
      submenu: [
        { name: 'About Us', href: '/company/about-us', icon: 'ℹ️' },
        { name: 'Team', href: '/company/team', icon: '👥' },
        { name: 'Careers', href: '/company/careers', icon: '💼' },
        { name: 'Contact', href: '/company/contact', icon: '📞' },
      ],
    },
    { name: 'Blog', href: '/blog' },
  ];

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
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm' 
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
      <div className="container mx-auto">
        <div className="relative mx-auto flex h-full w-full justify-between items-center">
          <div className="flex w-full items-center justify-between gap-3 min-h-[80px] py-4 px-6 transition-all duration-200">
            
            {/* Logo */}
            <Link to="/" className="flex items-center z-[100] relative">
              <img
                alt="Execiva"
                width="149"
                height="21"
                className="h-6 w-auto"
                src="/logo/1.png"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              className={`${
                isMobileMenuOpen ? 'block' : 'hidden'
              } w-full max-w-[100vw] items-center xl:relative xl:left-auto xl:top-auto xl:flex xl:size-auto xl:overflow-visible xl:justify-center`}
            >
              <ul className="group flex w-full flex-col gap-2 pt-3 xl:w-auto xl:z-[60] xl:flex-row xl:gap-6 xl:border-0 xl:p-0 xl:pt-0">
                {navItems.map((item, index) => (
                  <li key={index} className="relative">
                    <button
                      className={`relative flex items-center justify-between gap-2 px-4 py-3 font-medium text-sm transition-colors duration-300 xl:px-5 xl:py-2 xl:hover:!opacity-100 xl:group-hover:opacity-60 ${
                        isScrolled ? 'text-gray-900' : 'text-white'
                      }`}
                      onClick={() => {
                        if (item.href) {
                          handleNavigation(item.href);
                        } else if (item.submenu || item.megaMenu) {
                          toggleDropdown(item.name);
                        }
                      }}
                    >
                      {item.name}
                      {(item.submenu || item.megaMenu) && (
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : 'rotate-0'
                          }`}
                        />
                      )}
                    </button>

                    {/* Dropdown/Mega Menu */}
                    <AnimatePresence>
                      {(item.submenu || item.megaMenu) && activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden z-50"
                          style={{
                            width: item.megaMenu ? '600px' : '280px',
                            left: item.megaMenu ? '-200px' : '0'
                          }}
                        >
                          <div className="p-6">
                            {item.megaMenu ? (
                              <div className="flex gap-8">
                                {item.megaMenu.map((category, idx) => (
                                  <div key={idx} className="flex-1">
                                    <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                                      {category.category}
                                    </h3>
                                    <div className="space-y-3">
                                      {category.items.map((subItem, subIdx) => (
                                        <button
                                          key={subIdx}
                                          onClick={() => handleNavigation(subItem.href)}
                                          className="group flex items-center gap-3 w-full text-left p-2 rounded-md hover:bg-gray-50 transition-colors duration-200"
                                        >
                                          <span className="text-lg">{subItem.icon}</span>
                                          <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                              <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                                                {subItem.name}
                                              </span>
                                              <ArrowRight className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                            </div>
                                          </div>
                                        </button>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="space-y-2">
                                {item.submenu?.map((subItem, subIdx) => (
                                  <button
                                    key={subIdx}
                                    onClick={() => handleNavigation(subItem.href)}
                                    className="group flex items-center gap-3 w-full text-left p-2 rounded-md hover:bg-gray-50 transition-colors duration-200"
                                  >
                                    <span className="text-lg">{subItem.icon}</span>
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                                          {subItem.name}
                                        </span>
                                        <ArrowRight className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                      </div>
                                    </div>
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden md:flex items-center">
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
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
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
            <div className="hidden md:flex items-center">
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
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
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
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => {
                      if (item.href) {
                        handleNavigation(item.href);
                      } else if (item.submenu || item.megaMenu) {
                        toggleDropdown(item.name);
                      }
                    }}
                    className="flex items-center justify-between w-full py-2 text-left font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200"
                  >
                    {item.name}
                    {(item.submenu || item.megaMenu) && (
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {(item.submenu || item.megaMenu) && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-4 mt-2 space-y-2 border-l-2 border-gray-100 pl-4"
                      >
                        {item.megaMenu ? (
                          item.megaMenu.map((category) =>
                            category.items.map((subItem, subIdx) => (
                              <button
                                key={subIdx}
                                onClick={() => handleNavigation(subItem.href)}
                                className="flex items-center gap-2 w-full py-1 text-left text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                              >
                                <span>{subItem.icon}</span>
                                {subItem.name}
                              </button>
                            ))
                          )
                        ) : (
                          item.submenu?.map((subItem, subIdx) => (
                            <button
                              key={subIdx}
                              onClick={() => handleNavigation(subItem.href)}
                              className="flex items-center gap-2 w-full py-1 text-left text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                            >
                              <span>{subItem.icon}</span>
                              {subItem.name}
                            </button>
                          ))
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={() => handleNavigation('/#contact')}
                  className="w-full inline-flex items-center justify-center text-center rounded-lg transition-colors whitespace-nowrap gap-2 font-medium text-sm leading-none px-4 py-3 h-[46px] bg-blue-700 text-white hover:bg-blue-800"
                >
                  Book intro call
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default NewHeader;
