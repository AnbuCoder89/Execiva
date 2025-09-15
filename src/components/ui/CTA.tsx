import React from 'react';
import { motion, Variants } from "framer-motion";
import Button from './Button';

interface CTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
}

const CTA: React.FC<CTAProps> = ({
  title = "Ready to Get Started?",
  description = "Let's discuss how our solutions can transform your business and drive growth.",
  primaryButtonText = "Get Started",
  secondaryButtonText = "Learn More",
  onPrimaryClick,
  onSecondaryClick,
  className = ""
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.section 
      className={`py-16 md:py-20 bg-white ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight font-sf-pro-display"
          variants={itemVariants}
        >
          {title}
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text mb-8 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          {description}
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <Button
            variant="vision"
            size="lg"
            onClick={onPrimaryClick}
            className="px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {primaryButtonText}
          </Button>
          <Button
            variant="vision"
            size="lg"
            onClick={onSecondaryClick}
            className="px-8 py-4 shadow-md hover:shadow-lg"
          >
            {secondaryButtonText}
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTA;