import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { navItems } from './navItems';

export default function MobileMenu({
  isOpen,
  activeDropdown,
  toggleDropdown,
  handleNavigation,
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t border-gray-200 shadow-lg"
        >
          {/* your mobile nav items mapped here */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
