import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
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
                  <ChevronDown 
                    className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                )}
              </motion.button>

              {/* Dropdown / Mega Menu */}
              <AnimatePresence>
                {(item.submenu || item.megaMenu) && activeDropdown === item.name && (
                  <motion.div
                    in
