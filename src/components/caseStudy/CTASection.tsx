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
      className="py-16 md:py-20 bg-gray-900 text-white"
      variants={itemVariants}
    >
      <div className="max-w-[1490px] px-4 lg:px-10 box-content mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-semibold mb-6 font-sf-pro-display"
            variants={itemVariants}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8 font-sf-pro-text"
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
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onViewMoreClick}
              className="border-white text-white hover:bg-white hover:text-gray-900"
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