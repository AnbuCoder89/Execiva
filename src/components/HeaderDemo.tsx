"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { navItems } from "./Header/NavItems"; // your nav array
import { ArrowRight } from "lucide-react";
import Button from "./ui/Button";
import Logo from "./Header/Logo";

const HeaderDemo: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavItem = (item: typeof navItems[0]) => {
    if (item.href) {
      return (
        <HoveredLink key={item.name} href={item.href}>
          {item.name}
        </HoveredLink>
      );
    }

    if (item.submenu) {
      return (
        <MenuItem
          key={item.name}
          setActive={setActive}
          active={active}
          item={item.name}
        >
          <div className="flex flex-col space-y-4 text-sm">
            {item.submenu.map((subItem) => (
              <HoveredLink key={subItem.name} href={subItem.href}>
                {subItem.name}
              </HoveredLink>
            ))}
          </div>
        </MenuItem>
      );
    }

    if (item.megaMenu) {
      // ✅ pass the array directly
      return (
        <MenuItem
          key={item.name}
          setActive={setActive}
          active={active}
          item={item.name}
        >
          {item.megaMenu}
        </MenuItem>
      );
    }

    return null;
  };

  return (
    <div
      className={`fixed inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "backdrop-blur-md"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 z-20">
            <Logo />
          </div>

          {/* Centered Navigation */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
            <Menu setActive={setActive} className="space-x-8">
              {navItems.map((item) => renderNavItem(item))}
            </Menu>
          </div>

          <div className="hidden md:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                variant="vision"
                size="md"
                onClick={() => navigate("/contact")}
                className="whitespace-nowrap"
              >
                Book Intro Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDemo;
