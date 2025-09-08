import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Button from '../ui/Button';

interface ServiceHeroProps {
  title: string;
  category: string;
  detailedDescription: string;
  image: string;
  onRequestDemo: () => void;
  onBackToServices: () => void;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({
  title,
  category,
  detailedDescription,
  image,
  onRequestDemo,
  onBackToServices
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

  return (
    <motion.section 
      className="relative w-full px-4 lg:px-10 pt-28 md:pt-40 pb-28 md:pb-40 text-black bg-white"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
          }
        }
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full h-full">
        <div className="flex h-full justify-center md:gap-x-10 lg:gap-x-32 flex-col md:flex-row items-center">
          
          {/* Left Column - Content */}
          <motion.div 
            className="w-full mb-10 md:mb-14 md:w-1/2 flex justify-center"
            variants={itemVariants}
          >
            <div className="text-left max-w-[350px] sm:max-w-full lg:max-w-[550px]">
              <motion.div variants={itemVariants}>
                <p className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-3 font-sf-pro-text">
                  {category}
                </p>
                <div className="mb-4 break-words">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight font-sf-pro-display">
                    {title}
                  </h1>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <div className="mx-auto flex justify-start">
                  <div className="break-words mb-6 lg:mb-10 lg:w-[555px]">
                    <p className="text-base lg:text-xl text-gray-600 leading-relaxed font-sf-pro-text">
                      {detailedDescription}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center justify-start">
                  <Button
                    variant="vision"
                    size="lg"
                    onClick={onRequestDemo}
                    className="px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Request a demo
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    icon={ArrowLeft}
                    iconPosition="left"
                    onClick={onBackToServices}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Back to Services
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            className="w-full md:w-1/2"
            variants={itemVariants}
          >
            <div className="hidden md:block">
              <img
                alt={title}
                className="m-auto w-full md:rounded-xl shadow-2xl"
                src={image}
                width="680"
                height="680"
              />
            </div>
            <div className="block md:hidden">
              <img
                alt={title}
                className="m-auto w-full rounded-lg shadow-2xl"
                src={image}
                width="680"
                height="680"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceHero;