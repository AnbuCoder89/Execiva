import React from 'react';
import { motion } from 'framer-motion';

interface DescriptionSectionProps {
  description: string;
  serviceType: string[];
  keyTechnologies?: string[];
  technology?: string[];
}

const DescriptionSection: React.FC<DescriptionSectionProps> = ({ 
  description, 
  serviceType, 
  keyTechnologies, 
  technology 
}) => {
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

  const technologies = keyTechnologies || technology || [];

  return (
    <motion.section 
      className="bg-white"
      variants={itemVariants}
    >
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 box-content mx-auto">
       
        
        {/* Grid Layout - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-5 gap-4 md:gap-2 mt-8 md:mt-12 min-h-[400px] md:h-96">
          <motion.div 
            className="col-span-1 md:col-span-3 md:row-span-4 rounded-lg border border-gray-200 p-4 sm:p-5 md:p-6 order-1"
            variants={itemVariants}
          >
            <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-sf-pro-text"
            variants={itemVariants}
            >
            {description}
            </motion.p>
          </motion.div>
          
          
          <motion.div
            className="col-span-1 md:col-span-2 md:row-span-2 md:col-start-4 rounded-lg border border-gray-200 p-3 sm:p-4 order-2"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 font-sf-pro-display">Services Provided</h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {serviceType.map((service, index) => (
                <span
                  key={index}
                  className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 text-xs sm:text-xs font-medium rounded-full font-sf-pro-text"
                >
                  {service}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="col-span-1 md:col-span-2 md:row-span-2 md:col-start-4 md:row-start-3 rounded-lg border border-gray-200 p-3 sm:p-4 order-3"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 font-sf-pro-display">Technologies Used</h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 sm:px-3 py-1 bg-green-100 text-green-800 text-xs sm:text-xs font-medium rounded-full font-sf-pro-text"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default DescriptionSection;