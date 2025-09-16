import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { navItems, NavItem } from './NavItems';

const navVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const navItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  }
};

interface MobileNavProps {
  isMobileMenuOpen: boolean;
  activeDropdown: string | null;
  onToggleDropdown: (menu: string) => void;
  onNavigation: (href: string) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({
  isMobileMenuOpen,
  activeDropdown,
  onToggleDropdown,
  onNavigation
}) => {
  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="sm:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50"
        >
          <motion.nav 
            className="px-6 py-4 space-y-2"
            variants={navVariants}
          >
            {navItems.map((item: NavItem, index: number) => (
              <motion.button
                key={item.name}
                onClick={() => {
                  if (item.href) {
                    onNavigation(item.href);
                  } else if (item.submenu || item.megaMenu) {
                    onToggleDropdown(item.name);
                  }
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 font-sf-pro-text ${
                  activeDropdown === item.name
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
                <div className="flex items-center justify-between">
                  {item.name}
                  {(item.submenu || item.megaMenu) && (
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  )}
                </div>
              </motion.button>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <button
                  onClick={() => {
                    onNavigation('/#contact');
                  }}
                  className="w-full text-gray-900 border-2 shadow-lg hover:shadow-xl transform hover:scale-105 focus:ring-gray-500 bg-[#f4f3ee] border-[#f4f3ee] hover:bg-[#ebe8dd] hover:border-[#ebe8dd] px-6 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full font-sf-pro-text"
                >
                  Contact
                </button>
              </motion.div>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;