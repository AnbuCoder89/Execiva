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
  const [activeMegaCategory, setActiveMegaCategory] = React.useState<string | null>(null);

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
                    if (item.megaMenu) {
                      setActiveMegaCategory(item.megaMenu[0]?.id || null);
                    }
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
                    className="fixed left-1/2 -translate-x-1/2 mt-2 w-screen max-w-6xl bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden mega-menu-backdrop"
                    style={{
                      top: '100%',
                      marginLeft: 'calc(-50vw + 50%)',
                      width: 'min(90vw, 1200px)'
                    }}
                  >
                    <div className="flex min-h-[500px]">
                      {/* Sidebar */}
                      <div className="w-72 bg-gradient-to-b from-gray-50 to-gray-100 p-6 border-r border-gray-200">
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Solutions</h3>
                          <p className="text-sm text-gray-600">Comprehensive services tailored to your needs</p>
                        </div>
                        <div className="space-y-2">
                          {item.megaMenu.map((category) => (
                            <button
                              key={category.id}
                              className={`flex items-center w-full text-left px-4 py-3 text-sm rounded-lg transition-all duration-200 group ${
                                activeMegaCategory === category.id
                                  ? 'bg-white text-blue-600 shadow-md'
                                  : 'text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-sm'
                              }`}
                              onClick={() => {
                                setActiveMegaCategory(category.id);
                              }}
                            >
                              {category.icon && (
                                <span className="mr-3 text-base">{category.icon}</span>
                              )}
                              <span className="flex-1">{category.name}</span>
                              <ArrowRight className={`w-4 h-4 transition-all duration-200 ${
                                activeMegaCategory === category.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                              }`} />
                            </button>
                          ))}
                        </div>
                        
                        {/* Featured CTA in Sidebar */}
                        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                          <h4 className="text-sm font-semibold text-blue-900 mb-2">Need Custom Solutions?</h4>
                          <p className="text-xs text-blue-700 mb-3">Let's discuss your unique requirements</p>
                          <button
                            onClick={() => onNavigation('/contact')}
                            className="text-xs bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition-colors"
                          >
                            Get in Touch
                          </button>
                        </div>
                      </div>
                      
                      {/* Main Content */}
                      <div className="flex-1 p-8">
                        {/* Dynamic content based on active category */}
                        {(() => {
                          const activeCategory = item.megaMenu.find(cat => cat.id === activeMegaCategory) || item.megaMenu[0];
                          return (
                            <div>
                              <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                                  {activeCategory.icon && (
                                    <span className="mr-3 text-2xl">{activeCategory.icon}</span>
                                  )}
                                  {activeCategory.name} Solutions
                                </h3>
                                <p className="text-gray-600">
                                  {activeCategory.description || `Comprehensive ${activeCategory.name.toLowerCase()} services to accelerate your business growth`}
                                </p>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-6">
                                {activeCategory.items.map((service) => (
                                  <div
                                    key={service.href}
                                    className="group cursor-pointer p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-gray-200 hover:shadow-sm"
                                    onClick={() => onNavigation(service.href)}
                                  >
                                    <div className="flex items-start justify-between">
                                      <div className="flex-1">
                                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                                          {service.title}
                                        </h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                          {service.description}
                                        </p>
                                      </div>
                                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-all ml-3 flex-shrink-0 mt-1" />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })()}
                        
                        {/* Bottom CTA Section */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                          <div className="flex items-center justify-between">
                            <div
                              className="flex-1"
                            >
                              <button
                                onClick={() => onNavigation('/services')}
                                className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                              >
                                View All Services
                                <ArrowRight className="w-4 h-4 ml-1" />
                              </button>
                            </div>
                            <div className="flex space-x-3">
                              <button
                                onClick={() => onNavigation('/case-studies')}
                                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                              >
                                Case Studies
                              </button>
                              <button
                                onClick={() => onNavigation('/contact')}
                                className="text-sm bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                              >
                                Get Started
                              </button>
                            </div>
                          </div>
                        </div>
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
