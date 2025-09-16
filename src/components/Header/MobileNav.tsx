import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { navItems, NavItem } from './NavItems';

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
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item: NavItem, index: number) => (
              <li key={index} className="relative list-none">
                <button
                  onClick={() => {
                    if (item.href) {
                      onNavigation(item.href);
                    } else if (item.submenu || item.megaMenu) {
                      onToggleDropdown(item.name);
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
                              onClick={() => onNavigation(subItem.href)}
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
                            onClick={() => onNavigation(subItem.href)}
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
              </li>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={() => onNavigation('/#contact')}
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
  );
};

export default MobileNav;