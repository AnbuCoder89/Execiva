import React from 'react';
import { motion, Variants } from "framer-motion";
import Button from '../ui/Button';

interface ServiceCTAProps {
  serviceName: string;
  onGetStarted: () => void;
  onViewAllServices: () => void;
}

const ServiceCTA: React.FC<ServiceCTAProps> = ({
  serviceName,
  onGetStarted,
  onViewAllServices
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
      className="py-16 md:py-20 bg-white"
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
          Ready to Get Started?
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text mb-8 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Let's discuss how our {serviceName.toLowerCase()} solutions can transform your business and drive growth.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <Button
            variant="vision"
            size="lg"
            onClick={onGetStarted}
            className="px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get Started
          </Button>
          <Button
            variant="vision"
            size="lg"
            onClick={onViewAllServices}
            className="px-8 py-4 shadow-md hover:shadow-lg"
          >
            View All Services
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServiceCTA;