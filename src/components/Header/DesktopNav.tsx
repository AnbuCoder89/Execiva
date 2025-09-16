import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { navItems, NavItem } from './NavItems';

interface DesktopNavProps {
  isScrolled: boolean;
  activeDropdown: string | null;
  onToggleDropdown: (menu: string) => void;
  onNavigation: (href: string) => void;
}

const navVariants = {};
const navItemVariants = {};

const DesktopNav: React.FC<DesktopNavProps> = ({
  isScrolled,
  activeDropdown,
  onToggleDropdown,
  onNavigation
}) => {
  return (
    <div className="hidden md:flex flex-1 justify-center">
      <motion.nav 
        className="flex items-center"
        variants={navVariants}
      >
        {/* Increased spacing between nav items */}
        <ul className="flex items-center space-x-12">
          {navItems.map((item: NavItem, index: number) => (
            <li 
              key={item.name} 
              className="relative"
              onMouseEnter={() => {
                if (item.submenu || item.megaMenu) {
                  onToggleDropdown(item.name);
                }
              }}
              onMouseLeave={() => {
                if (item.submenu || item.megaMenu) {
                  onToggleDropdown('');
                }
              }}
            >
              <motion.button
                key={item.name}
                onClick={() => {
                  if (item.href) {
                    onNavigation(item.href);
                  } else if (item.submenu || item.megaMenu) {
                    onToggleDropdown(item.name);
                  }
                }}
                className={`flex items-center px-3 text-base font-medium transition-all duration-300 font-sf-pro-text relative ${
                  activeDropdown === item.name
                    ? isScrolled 
                      ? 'text-gray-900' 
                      : 'text-gray-900'
                    : isScrolled 
                      ? 'text-gray-600 hover:text-gray-900' 
                      : 'text-gray-700 hover:text-gray-900'
                } ${isScrolled ? 'text-gray-900' : 'text-black'}`}
                variants={navItemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -1,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{item.name}</span>
                {(item.submenu || item.megaMenu) && (
                  <ChevronRight 
                    className="w-4 h-4 ml-2 transition-transform duration-200 text-gray-500 group-hover:text-gray-900"
                  />
                )}
              </motion.button>

              {/* Dropdown / Mega Menu */}
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
                    onMouseEnter={() => onToggleDropdown(item.name)}
                    onMouseLeave={() => onToggleDropdown('')}
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
                                    onClick={() => onNavigation(subItem.href)}
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
                              onClick={() => onNavigation(subItem.href)}
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
      </motion.nav>
    </div>
  );
};

export default DesktopNav;
