import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
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
                    className="absolute left-0 mt-2 w-screen max-w-6xl bg-white rounded-xl shadow-xl border border-gray-100 z-50"
                  >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
                      {item.megaMenu.map((category) => (
                        <div key={category.id} className="space-y-3">
                          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                            {category.name}
                          </h3>
                          <ul className="space-y-2">
                            {category.items.map((sub) => (
                              <li key={sub.href}>
                                <button
                                  onClick={() => onNavigation(sub.href)}
                                  className="block text-left w-full text-gray-700 hover:text-blue-600 text-sm"
                                >
                                  <div className="font-medium">{sub.title}</div>
                                  {sub.description && (
                                    <div className="text-xs text-gray-500">
                                      {sub.description}
                                    </div>
                                  )}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
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
