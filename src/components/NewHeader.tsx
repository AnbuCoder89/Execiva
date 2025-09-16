import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';
import DesktopNav from './DesktopNav';
import MobileMenu from './MobileMenu';

const NewHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  // scroll logic here …

  const handleNavigation = (href: string) => {
    if (href.startsWith('/')) navigate(href);
    // rest logic
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      animate={{ y: isVisible ? 0 : '-100%' }}
      transition={{ duration: 0.4 }}
    >
      <div className="container mx-auto flex justify-between items-center min-h-[80px] px-6">
        <Logo />

        <DesktopNav
          activeDropdown={activeDropdown}
          toggleDropdown={(m) =>
            setActiveDropdown(activeDropdown === m ? null : m)
          }
          handleNavigation={handleNavigation}
          isScrolled={isScrolled}
        />

        {/* CTA and mobile button here */}

      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        activeDropdown={activeDropdown}
        toggleDropdown={(m) =>
          setActiveDropdown(activeDropdown === m ? null : m)
        }
        handleNavigation={handleNavigation}
      />
    </motion.header>
  );
};

export default NewHeader;

