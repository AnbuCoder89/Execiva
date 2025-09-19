import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { navItems, NavItem } from './NavItems';
import CenteredMegaMenu from './CenteredMegaMenu';

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
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeMegaCategory, setActiveMegaCategory] = useState<string | null>(null);

  const handleMegaMenuOpen = (item: NavItem) => {
    if (item.megaMenu) {
      setMegaMenuOpen(true);
      setActiveMegaCategory(item.megaMenu[0]?.id || null);
    }
  };

  const handleMegaMenuClose = () => {
    setMegaMenuOpen(false);
    setActiveMegaCategory(null);
  };

  return (
    <div className="hidden lg:flex flex-1 justify-center relative">
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
                if (item.submenu) {
                  onToggleDropdown(item.name);
                } else if (item.megaMenu) {
                  handleMegaMenuOpen(item);
                }
              }}
              onMouseLeave={() => {
                if (item.submenu) {
                  onToggleDropdown('');
                } else if (item.megaMenu) {
                  handleMegaMenuClose();
                }
              }}
            >
              <button
                className={`flex items-center px-3 text-base font-medium transition-colors ${
                  activeDropdown === item.name || (item.megaMenu && megaMenuOpen)
                    ? 'text-blue-600'
                    : 'text-gray-900 hover:text-blue-600'
                }`}
                onClick={() => {
                  if (item.href) {
                    onNavigation(item.href);
                  } else if (item.submenu) {
                    onToggleDropdown(item.name);
                  } else if (item.megaMenu) {
                    handleMegaMenuOpen(item);
                  }
                }}
              >
                <span>{item.name}</span>
                {(item.submenu || item.megaMenu) && (
                  <ChevronDown 
                    className={`w-4 h-4 ml-1 transition-transform ${
                      activeDropdown === item.name || (item.megaMenu && megaMenuOpen) ? 'rotate-180' : ''
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

        {/* Centered Mega Menu */}
        {navItems.some(item => item.megaMenu) && (
          <CenteredMegaMenu
            isOpen={megaMenuOpen}
            onClose={handleMegaMenuClose}
            activeCategory={activeMegaCategory}
            onCategoryChange={setActiveMegaCategory}
            onNavigation={(href) => {
              onNavigation(href);
              handleMegaMenuClose();
            }}
            categories={navItems.find(item => item.megaMenu)?.megaMenu || []}
          />
        )}
      </motion.nav>
    </div>
  );
};

export default Navigation;