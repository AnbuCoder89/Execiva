import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundSectionProps {
  caseStudy: {
    background?: string;
  };
}

const BackgroundSection: React.FC<BackgroundSectionProps> = ({ caseStudy }) => {
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

  if (!caseStudy.background) {
    return null;
  }

  return (
    <motion.section 
      className="py-16 md:py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="mx-auto px-6 sm:px-8 lg:px-12">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Heading Section */}
            <motion.div 
              className="flex flex-col justify-start"
              variants={itemVariants}
            >
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight font-sf-pro-display mb-0"
                variants={itemVariants}
              >
                <span className="block font-medium">Background & Challenge</span>
              </motion.h2>
            </motion.div>

            {/* Content Section */}
            <motion.div 
              className="flex flex-col space-y-8"
              variants={itemVariants}
            >
              {/* Main Content */}
              <motion.div 
                className="space-y-6"
                variants={itemVariants}
              >
                <div className="text-xl md:text-2xl lg:text-3xl font-light text-gray-900 leading-relaxed font-sf-pro-display">
                  <div className="prose prose-xl max-w-none">
                    <p className="text-gray-700 leading-relaxed font-sf-pro-text mb-0">
                      {caseStudy.background}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default BackgroundSection;