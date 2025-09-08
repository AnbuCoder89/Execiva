import React from 'react';
import { motion } from 'framer-motion';

interface ServicesAndTechnologiesProps {
  serviceType: string[];
  keyTechnologies?: string[];
  technology?: string[];
}

const ServicesAndTechnologies: React.FC<ServicesAndTechnologiesProps> = ({
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
      className="py-16 md:py-20 bg-white"
      variants={itemVariants}
    >
      <div className="max-w-[1490px] px-4 lg:px-10 box-content mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-semibold text-gray-900 mb-6 font-sf-pro-display">Services Provided</h3>
            <div className="flex flex-wrap gap-3">
              {serviceType.map((service, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-beige text-gray-900 rounded-full text-sm font-medium font-sf-pro-text border border-gray-200 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05, backgroundColor: "#ebe8dd" }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {service}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-semibold text-gray-900 mb-6 font-sf-pro-display">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-beige text-gray-900 rounded-full text-sm font-medium font-sf-pro-text border border-gray-200 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05, backgroundColor: "#ebe8dd" }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesAndTechnologies;