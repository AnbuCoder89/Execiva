import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowUpRight, X } from 'lucide-react';

// TypeScript interfaces
interface MegaMenuItem {
  title: string;
  href: string;
  description?: string;
  featured?: boolean;
  icon?: React.ReactNode;
}

interface MegaMenuCategory {
  id: string;
  name: string;
  description?: string;
  items: MegaMenuItem[];
}

interface CenteredMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  onNavigation: (href: string) => void;
  categories: MegaMenuCategory[];
}

const CenteredMegaMenu: React.FC<CenteredMegaMenuProps> = ({
  isOpen,
  onClose,
  activeCategory,
  onCategoryChange,
  onNavigation,
  categories
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case 'Escape':
          onClose();
          break;
        case 'Tab':
          // Allow natural tab navigation within the menu
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  const handleItemClick = (href: string) => {
    onNavigation(href);
    onClose();
  };

  const currentCategory = categories.find(cat => cat.id === activeCategory);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Mega Menu Container - Centered and Full Width */}
          <motion.div
            ref={menuRef}
            className="mega-menu-container absolute left-1/2 top-full bg-white shadow-2xl border-t border-gray-100 z-50 overflow-hidden"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ 
              duration: 0.3, 
              ease: [0.25, 0.46, 0.45, 0.94],
              staggerChildren: 0.05
            }}
            style={{
              transform: 'translateX(-50%)',
              width: '100vw',
              maxWidth: '1200px',
              minHeight: '500px'
            }}
          >
            {/* Mobile Close Button */}
            <div className="lg:hidden absolute top-4 right-4 z-10">
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="mega-menu-grid grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
              {/* Left Sidebar - Categories */}
              <motion.div 
                className="mega-menu-sidebar lg:col-span-3 bg-gray-50 border-r border-gray-200 p-6"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-gray-900 mb-4 font-sf-pro-display">
                    Explore Solutions
                  </h3>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onMouseEnter={() => onCategoryChange(category.id)}
                      onFocus={() => onCategoryChange(category.id)}
                      className={`mega-menu-category w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-200 group ${
                        activeCategory === category.id
                          ? 'bg-white text-blue-600 shadow-sm border border-blue-100' 
                          : 'text-gray-700 hover:bg-white hover:text-gray-900 hover:shadow-sm'
                      }`}
                      aria-expanded={activeCategory === category.id}
                      aria-controls={`menu-${category.id}`}
                    >
                      <div>
                        <div className="font-medium text-sm font-sf-pro-display">
                          {category.name}
                        </div>
                        {category.description && (
                          <div className="text-xs text-gray-500 mt-1 font-sf-pro-text">
                            {category.description}
                          </div>
                        )}
                      </div>
                      <ChevronRight 
                        className={`w-4 h-4 transition-all duration-200 ${
                          activeCategory === category.id 
                            ? 'text-blue-600 rotate-90' 
                            : 'text-gray-400 group-hover:text-gray-600'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Right Content - Menu Items */}
              <motion.div 
                className="mega-menu-content lg:col-span-9 p-8"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <AnimatePresence mode="wait">
                  {currentCategory && (
                    <motion.div
                      key={currentCategory.id}
                      id={`menu-${currentCategory.id}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="mb-6">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2 font-sf-pro-display">
                          {currentCategory.name} Solutions
                        </h3>
                        <p className="text-gray-600 font-sf-pro-text">
                          Comprehensive {currentCategory.name.toLowerCase()} solutions tailored to your business needs
                        </p>
                      </div>

                      {/* Grid of menu items */}
                      <div className="mega-menu-services-grid grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentCategory.items.map((item, index) => (
                          <motion.button
                            key={item.href}
                            onClick={() => handleItemClick(item.href)}
                            onMouseEnter={() => setHoveredItem(item.href)}
                            onMouseLeave={() => setHoveredItem(null)}
                            className={`mega-menu-item group text-left p-4 rounded-xl border transition-all duration-200 ${
                              item.featured 
                                ? 'border-blue-200 bg-blue-50 hover:bg-blue-100 hover:border-blue-300' 
                                : 'border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300'
                            } ${hoveredItem === item.href ? 'shadow-lg transform -translate-y-1' : 'shadow-sm'}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ 
                              scale: 1.02,
                              transition: { type: "spring", stiffness: 400, damping: 25 }
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex items-start space-x-3">
                                {item.icon && (
                                  <span className="text-2xl flex-shrink-0 mt-1">
                                    {item.icon}
                                  </span>
                                )}
                                <div>
                                  <h4 className={`font-medium mb-1 font-sf-pro-display ${
                                    item.featured ? 'text-blue-900' : 'text-gray-900'
                                  } group-hover:text-blue-600 transition-colors`}>
                                    {item.title}
                                  </h4>
                                  {item.description && (
                                    <p className={`text-sm font-sf-pro-text ${
                                      item.featured ? 'text-blue-700' : 'text-gray-600'
                                    } group-hover:text-gray-700 transition-colors`}>
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <ArrowUpRight 
                                className={`w-4 h-4 flex-shrink-0 transition-all duration-200 ${
                                  hoveredItem === item.href 
                                    ? 'text-blue-600 transform translate-x-1 -translate-y-1' 
                                    : 'text-gray-400 group-hover:text-blue-500'
                                }`}
                              />
                            </div>
                            {item.featured && (
                              <div className="mt-2">
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 font-sf-pro-text">
                                  Featured
                                </span>
                              </div>
                            )}
                          </motion.button>
                        ))}
                      </div>

                      {/* Call to Action */}
                      <motion.div 
                        className="mt-8 pt-6 border-t border-gray-200"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                          <div>
                            <h4 className="font-medium text-gray-900 font-sf-pro-display">
                              Need a custom solution?
                            </h4>
                            <p className="text-sm text-gray-600 font-sf-pro-text">
                              Let's discuss your specific requirements and create a tailored approach
                            </p>
                          </div>
                          <button
                            onClick={() => handleItemClick('/contact')}
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm font-sf-pro-text whitespace-nowrap"
                          >
                            Contact Us
                          </button>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CenteredMegaMenu;