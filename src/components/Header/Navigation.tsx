import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { navItems, NavItem } from './NavItems';

// Animation variants
const navVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 25,
    },
  },
};

interface NavigationProps {
  isScrolled: boolean;
  activeDropdown: string | null;
  onToggleDropdown: (menu: string) => void;
  onNavigation: (href: string) => void;
  isMobileMenuOpen: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  isScrolled,
  activeDropdown,
  onToggleDropdown,
  onNavigation,
  isMobileMenuOpen,
}) => {
  return (
    <div className="hidden lg:flex flex-1 justify-center relative">
      <motion.nav
        className="flex items-center justify-center w-full"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <ul className="flex items-center justify-center space-x-6 xl:space-x-8 relative">
          {navItems.map((item: NavItem) => (
            <li key={item.name} className="relative z-10">
              {/* Top-level button */}
              <button
                className={`flex items-center px-3 text-base font-medium text-gray-900 ${
                  activeDropdown === item.name ? 'opacity-70' : 'opacity-100'
                }`}
                onClick={() => {
                  if (item.href) {
                    onNavigation(item.href);
                  } else if (item.submenu || item.megaMenu) {
                    onToggleDropdown(item.name);
                  }
                }}
              >
                <span>{item.name}</span>
                {(item.submenu || item.megaMenu) && (
                  <ChevronDown
                    className={`w-4 h-4 ml-1 transition-all duration-200 ${
                      activeDropdown === item.name
                        ? 'rotate-180 text-blue-600'
                        : ''
                    }`}
                  />
                )}
              </button>

              {/* Regular Dropdown */}
              <AnimatePresence>
                {item.submenu && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 w-48"
                  >
                    <div className="py-2">
                      {item.submenu.map((subItem, idx) => (
                        <button
                          key={idx}
                          onClick={() => onNavigation(subItem.href)}
                          className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Mega Menu */}
              <AnimatePresence>
                {item.megaMenu && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="fixed left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-5xl bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden"
                  >
                    <div className="flex">
                      {/* Sidebar */}
                      <div className="w-64 bg-gray-50 p-6 border-r border-gray-200">
                        <div className="space-y-2">
                          {item.megaMenu.map((category) => (
                            <button
                              key={category.id}
                              className="flex items-center w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-white hover:text-blue-600 rounded-lg transition-colors group"
                              onClick={() => {
                                // Handle category selection
                                console.log('Selected category:', category.name);
                              }}
                            >
                              <span className="flex-1">{category.name}</span>
                              <ChevronDown className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -rotate-90" />
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {/* Main Content */}
                      <div className="flex-1 p-6">
                        <div className="grid grid-cols-2 gap-6">
                          {/* Show first category's items by default */}
                          {item.megaMenu[0]?.items.map((service) => (
                            <div
                              key={service.href}
                              className="group cursor-pointer p-4 rounded-lg hover:bg-gray-50 transition-colors"
                              onClick={() => onNavigation(service.href)}
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                    {service.title}
                                  </h4>
                                  <p className="text-sm text-gray-600 mt-1">
                                    {service.description}
                                  </p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-all ml-2 flex-shrink-0" />
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* View All Link */}
                        {/* <div className="mt-6 pt-4 border-t border-gray-200">
                          <button
                            onClick={() => onNavigation('/services')}
                            className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                          >
                            View All Services
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </button>
                        </div> */}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
};

export default Navigation;
