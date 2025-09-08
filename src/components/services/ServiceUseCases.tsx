import React from 'react';
import { motion } from 'framer-motion';

interface ServiceUseCasesProps {
  useCases: string[];
}

const ServiceUseCases: React.FC<ServiceUseCasesProps> = ({ useCases }) => {
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
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-12 text-center leading-tight font-sf-pro-display"
          variants={itemVariants}
        >
          Use Cases
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -4,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 font-sf-pro-display">
                {useCase}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServiceUseCases;