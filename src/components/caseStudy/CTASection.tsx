import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

interface CTASectionProps {
  onGetStartedClick: () => void;
  onViewMoreClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onGetStartedClick, onViewMoreClick }) => {
  const itemVariants = {
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
      className="py-16 md:py-20 bg-white"
      variants={itemVariants}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight font-sf-pro-display"
            variants={itemVariants}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Let's discuss how we can help you achieve similar results with innovative solutions tailored to your needs.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Button
              variant="vision"
              size="lg"
              onClick={onGetStartedClick}
              className="px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started
            </Button>
            <Button
              variant="vision"
              size="lg"
              onClick={onViewMoreClick}
              className="px-8 py-4 shadow-md hover:shadow-lg"
            >
              View More Case Studies
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CTASection;