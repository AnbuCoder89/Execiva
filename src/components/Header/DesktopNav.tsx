import { ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from './navItems';

export default function DesktopNav({ activeDropdown, toggleDropdown, handleNavigation, isScrolled }) {
  return (
    <nav className="hidden xl:flex xl:justify-center">
      <ul className="group flex gap-6">
        {navItems.map((item, index) => (
          <li key={index} className="relative">
            <button
              className={`relative flex items-center gap-2 px-4 py-3 text-sm font-medium ${
                isScrolled ? 'text-gray-900 hover:text-blue-600' : 'text-gray-900 hover:text-blue-600'
              }`}
              onClick={() => {
                if (item.href) handleNavigation(item.href);
                else if (item.submenu || item.megaMenu) toggleDropdown(item.name);
              }}
            >
              {item.name}
              {(item.submenu || item.megaMenu) && (
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`}
                />
              )}
            </button>

            {/* Dropdown logic here (just move your AnimatePresence/motion.div from NewHeader) */}
          </li>
        ))}
      </ul>
    </nav>
  );
}
