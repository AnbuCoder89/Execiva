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
  const [activeMegaMenu, setActiveMegaMenu] = useState<{
    itemName: string;
    categoryId: string;
  } | null>(null);

  const handleMegaMenuHover = (itemName: string, categoryId: string) => {
    setActiveMegaMenu({ itemName, categoryId });
  };

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
                  // Set first category as active when menu opens
                  if (item.megaMenu?.[0]) {
                    setActiveMegaMenu({
                      itemName: item.name,
                      categoryId: item.megaMenu[0].id
                    });
                  }
                }
              }}
              onMouseLeave={() => {
                onToggleDropdown('');
                setActiveMegaMenu(null);
              }}
            >
              <button
                className={`flex items-center px-3 text-base font-medium transition-colors ${
                  activeDropdown === item.name || activeMegaMenu?.itemName === item.name
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
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 8 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                    style={{ width: '800px', maxWidth: '90vw', minHeight: 'auto' }}
                  >
                    <div className="flex min-h-[400px]">
                      {/* Left Panel - Categories */}
                      <div className="w-64 bg-gray-50 border-r border-gray-100 overflow-y-auto hidden">
                        <div className="p-4 hidden">
                          <div className="space-y-1">
                            {item.megaMenu.map((category) => (
                              <button
                                key={category.id}
                                onMouseEnter={() => handleMegaMenuHover(item.name, category.id)}
                                className={`w-full flex items-center gap-3 p-3 rounded-md text-left transition-colors ${
                                  activeMegaMenu?.itemName === item.name && 
                                  activeMegaMenu?.categoryId === category.id
                                    ? 'bg-white text-blue-600 shadow-sm border border-gray-200' 
                                    : 'text-gray-700 hover:bg-gray-100'
                                }`}
                              >
                                <span className="text-sm font-medium">{category.name}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Panel - Content */}
                      <div className="w-full p-6 overflow-y-auto">
                        {item.megaMenu.map((category) => {
                          const isActive = activeMegaMenu?.itemName === item.name && 
                                        activeMegaMenu?.categoryId === category.id;
                          return (
                            <div 
                              key={category.id}
                              className="block mb-8 last:mb-0"
                            >
                              
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {category.items.map((item, itemIdx) => (
                                  <a
                                    key={itemIdx}
                                    href={item.href}
                                    className="group block p-4 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-colors duration-200 h-full"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      onNavigation(item.href);
                                    }}
                                  >
                                    <div className="flex items-start justify-between">
                                      <div>
                                        <h3 className="font-medium text-gray-900 group-hover:text-blue-600">
                                          {item.title}
                                        </h3>
                                        {item.description && (
                                          <p className="mt-1 text-sm text-gray-500">
                                            {item.description}
                                          </p>
                                        )}
                                      </div>
                                      <div className="text-gray-400 group-hover:text-blue-500 transition-colors">
                                        <ChevronRight className="w-4 h-4" />
                                      </div>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          );
                        })}
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
                    animate={{ opacity: 1, y: 20 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 w-48"
                  >
                    <div className="py-1">
                      {item.submenu.map((subItem, idx) => (
                        <button
                          key={idx}
                          onClick={() => onNavigation(subItem.href)}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
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
