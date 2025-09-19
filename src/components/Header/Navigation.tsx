import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { navItems, NavItem } from './NavItems';

// Animation variants
const navVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  }
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
  isMobileMenuOpen
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
            <li 
              key={item.name} 
              className="relative z-10"
            >
              <button
                className={`flex items-center px-3 text-base font-medium transition-colors ${
                  activeDropdown === item.name
                    ? 'text-blue-600'
                    : 'text-gray-900 hover:text-blue-600'
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
                      activeDropdown === item.name ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                )}
              </button>

              {/* Regular Dropdown Menu */}
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
            </li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
};

export default Navigation;