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
      className="text-black bg-beige pt-20 min-h-screen lg:min-h-screen xl:min-h-screen flex items-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-full">
        <div className="px-4 lg:px-10 box-content mx-auto">
          <motion.div 
            className="grid gap-8 py-12 sm:gap-10 sm:py-16 md:grid-cols-12 md:grid-flow-col-dense md:py-20 lg:gap-12 lg:py-24"
            variants={containerVariants}
          >
            {/* Left Column - Content */}
            <motion.div 
              className="flex items-center justify-center md:justify-start md:col-span-6 xl:col-span-5"
              variants={itemVariants}
            >
              <div className="space-y-6 sm:space-y-8 md:space-y-10 max-w-5xl text-center md:text-left">
                <div className="space-y-4 sm:space-y-6 md:space-y-4">
                  <div className="space-y-2 sm:space-y-4 md:space-y-6">
                    <motion.p 
                      className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wide font-sf-pro-text motion-safe:opacity-0 motion-safe:animate-[fadeInUp_0.5s_forwards_ease-in-out]"
                      variants={itemVariants}
                    >
                      {category}
                    </motion.p>
                    <motion.h1 
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-tight font-sf-pro-display motion-safe:opacity-0 motion-safe:animate-[fadeInUp_0.5s_forwards_ease-in-out]"
                      variants={itemVariants}
                    >
                      {title}
                    </motion.h1>
                  </div>

                  <motion.div 
                    className="break-words mb-4 sm:mb-6 lg:mb-10 motion-safe:opacity-0 motion-safe:animate-[fadeInUp_0.5s_forwards_0.1s_ease-in-out]"
                    variants={itemVariants}
                  >
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text max-w-lg mx-auto md:mx-0">
                      {detailedDescription}
                    </p>
                  </motion.div>

                  <motion.div 
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center md:items-start sm:items-center motion-safe:opacity-0 motion-safe:animate-[fadeInUp_0.5s_forwards_0.2s_ease-in-out]"
                    variants={itemVariants}
                  >
                    <Button
                      variant="vision"
                      size="md"
                      onClick={onRequestDemo}
                      className="px-6 py-3 sm:px-8 sm:py-4 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto"
                    >
                      Request a demo
                    </Button>

                    <Button
                      variant="ghost"
                      size="md"
                      icon={ArrowLeft}
                      iconPosition="left"
                      onClick={onBackToServices}
                      className="text-gray-600 hover:text-gray-900 w-full sm:w-auto"
                    >
                      Back to Services
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div 
              className="flex items-center justify-center md:col-span-6 md:-ml-5 xl:col-start-7 order-first md:order-last"
              variants={itemVariants}
            >
              <figure className="w-full max-w-sm sm:max-w-md md:max-w-full">
                <img
                  className="w-full h-auto rounded-lg md:rounded-2xl shadow-xl md:shadow-2xl"
                  src={image}
                  alt={title}
                  loading="lazy"
                />
              </figure>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceHero;