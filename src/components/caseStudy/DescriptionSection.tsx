import React from 'react';
import { motion } from 'framer-motion';

interface DescriptionSectionProps {
  description: string;
}

const DescriptionSection: React.FC<DescriptionSectionProps> = ({ description }) => {
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
      <div className="max-w-[1490px] px-4 lg:px-10 box-content mx-auto">
        <div className="max-w-4xl">
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 leading-relaxed font-sf-pro-text"
            variants={itemVariants}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default DescriptionSection;