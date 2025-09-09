import React from 'react';
import { motion } from 'framer-motion';

const ServiceBackground: React.FC = () => {
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
      className="py-16 md:py-20 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-6 grid-rows-5 gap-2 h-96">
          <motion.div 
            className="col-span-3 row-span-5"
            variants={itemVariants}
          >
            <div className="w-full h-full border-2 border-red-500 rounded-lg p-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Section 1</h3>
              <p className="text-gray-600">Content for div1</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="col-span-3 row-span-5 col-start-4"
            variants={itemVariants}
          >
            <div className="w-full h-full border-2 border-blue-500 rounded-lg p-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Section 2</h3>
              <p className="text-gray-600">Content for div2</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceBackground;