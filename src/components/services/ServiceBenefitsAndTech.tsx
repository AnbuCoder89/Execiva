import React from 'react';
import { motion } from 'framer-motion';

interface ServiceBenefitsAndTechProps {
  benefits: string[];
  technologies: string[];
}

const ServiceBenefitsAndTech: React.FC<ServiceBenefitsAndTechProps> = ({
  benefits,
  technologies
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Benefits */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 font-sf-pro-display">
              Benefits
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  variants={itemVariants}
                  whileHover={{ 
                    x: 4,
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                >
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed font-sf-pro-text text-lg">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 font-sf-pro-display">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-beige text-gray-900 rounded-full text-sm font-medium font-sf-pro-text border border-gray-200 shadow-md hover:shadow-lg"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "#ebe8dd",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  whileTap={{ scale: 0.95 }}
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

export default ServiceBenefitsAndTech;