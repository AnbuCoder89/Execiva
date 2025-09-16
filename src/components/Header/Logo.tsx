import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <Link to="/" className={`flex items-center z-[100] relative ${className}`}>
      <motion.img
        alt="Execiva"
        width="149"
        height="21"
        className="h-6 w-auto"
        src="/logo/1.png"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      />
    </Link>
  );
};

export default Logo;