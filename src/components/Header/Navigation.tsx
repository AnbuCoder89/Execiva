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
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <div className="hidden lg:flex flex-1 justify-center">
      <motion.nav 
        className="flex items-center justify-center w-full"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <ul className="flex items-center justify-center space-x-6 xl:space-x-8">
          {navItems.map((item: NavItem) => (
            <li 
              key={item.name} 
              className="relative"
              onMouseEnter={() => {
                if (item.submenu || item.megaMenu) {
                  onToggleDropdown(item.name);
                  // Set first category as hovered when menu opens
                  if (item.megaMenu?.[0]) {
                    setHoveredCategory(item.megaMenu[0].id);
                  }
                }
              }}
              onMouseLeave={() => {
                onToggleDropdown('');
                setHoveredCategory(null);
              }}
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
                    className={`w-4 h-4 ml-1 transition-transform ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </button>

              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {item.megaMenu && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                    style={{ 
                      width: '900px', 
                      maxWidth: '95vw',
                      minHeight: 'auto'
                    }}
                  >
                    {/* 3-Column Grid Layout */}
                    <div className="grid grid-cols-3 min-h-[400px]">
                      {/* Column 1: Main Service Categories */}
                      <div className="bg-gray-50 border-r border-gray-100 p-6">
                        <div className="space-y-2">
                          {item.megaMenu.map((category) => (
                            <button
                              key={category.id}
                              onMouseEnter={() => setHoveredCategory(category.id)}
                              className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-200 group ${
                                hoveredCategory === category.id
                                  ? 'bg-white text-blue-600 shadow-sm border border-blue-100' 
                                  : 'text-gray-700 hover:bg-white hover:text-gray-900'
                              }`}
                            >
                              <span className="font-medium text-sm">
                                {category.name}
                              </span>
                              <ChevronRight 
                                className={`w-4 h-4 transition-transform ${
                                  hoveredCategory === category.id ? 'text-blue-600' : 'text-gray-400'
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Columns 2 & 3: Sub-services */}
                      <div className="col-span-2 p-6">
                        {item.megaMenu.map((category) => (
                          <div 
                            key={category.id}
                            className={`transition-all duration-300 ${
                              hoveredCategory === category.id ? 'block' : 'hidden'
                            }`}
                          >
                            <div className="mb-4">
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {category.name} Services
                              </h3>
                              {category.description && (
                                <p className="text-sm text-gray-600 mb-4">
                                  {category.description}
                                </p>
                              )}
                            </div>
                            
                            {/* 2-Column Grid for Sub-services */}
                            <div className="grid grid-cols-2 gap-4">
                              {category.items.map((item, itemIdx) => (
                                <motion.a
                                  key={itemIdx}
                                  href={item.href}
                                  className="group block p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200 h-full"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    onNavigation(item.href);
                                  }}
                                  whileHover={{ y: -2 }}
                                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                >
                                  <div className="flex items-start justify-between mb-2">
                                    <h4 className="font-medium text-gray-900 group-hover:text-blue-600 text-sm">
                                      {item.title}
                                    </h4>
                                    <div className="text-gray-400 group-hover:text-blue-500 transition-colors ml-2">
                                      <ChevronRight className="w-3 h-3" />
                                    </div>
                                  </div>
                                  {item.description && (
                                    <p className="text-xs text-gray-500 group-hover:text-gray-600 leading-relaxed">
                                      {item.description}
                                    </p>
                                  )}
                                </motion.a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

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