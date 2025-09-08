import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ServiceFeaturesProps {
  features: string[];
}

const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({ features }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Create rows of 5 features each
  const featureRows = [];
  for (let i = 0; i < features.length; i += 5) {
    featureRows.push(features.slice(i, i + 5));
  }

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featureRows.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [featureRows.length]);

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
     className="relative w-full px-6 sm:px-8 lg:px-12 pt-12 md:pt-20 pb-12 md:pb-20 text-black overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="relative z-content">
        <div className="flex w-full flex-col items-center">
          <motion.p 
            className="text-base lg:text-lg font-sf-pro-text mb-5 text-center sm:mb-6 text-black"
            variants={itemVariants}
          >
            Key Features
          </motion.p>
          
          {/* Desktop Feature Grid */}
          <div className="hidden lg:block lg:min-h-[108px] xl:min-h-[138px]">
            {featureRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`relative flex justify-center transition-opacity duration-500 ${
                  rowIndex === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ zIndex: rowIndex === currentSlide ? 1 : 0 }}
              >
                <div className="absolute left-1/2 top-6 -translate-x-1/2">
                  <div className="flex flex-row gap-10 overflow-hidden">
                    {row.map((feature, featureIndex) => (
                      <div
                        key={`${rowIndex}-${featureIndex}`}
                        className={`flex h-[60px] w-[170px] justify-center items-center transition-opacity duration-500 xl:h-[90px] xl:w-[240px] ${
                          rowIndex === currentSlide ? 'opacity-100' : 'opacity-0'
                        } bg-beige rounded-xl border border-gray-200 shadow-md hover:shadow-lg`}
                      >
                        <span className="text-xs md:text-sm font-medium text-gray-900 font-sf-pro-text text-center px-2 leading-tight">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Scrolling Animation */}
          <div className="relative py-2 lg:hidden">
            <div className="flex">
              <div className="flex h-[60px] animate-scroll items-center justify-around gap-4 pl-4">
                {/* First set of features */}
                {features.map((feature, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex h-[60px] w-[170px] justify-center items-center transition-opacity duration-500 opacity-100 flex-shrink-0 bg-beige rounded-xl border border-gray-200 shadow-md"
                  >
                    <span className="text-xs font-medium text-gray-900 font-sf-pro-text text-center px-2 leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {features.map((feature, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex h-[60px] w-[170px] justify-center items-center transition-opacity duration-500 opacity-100 flex-shrink-0 bg-beige rounded-xl border border-gray-200 shadow-md"
                  >
                    <span className="text-xs font-medium text-gray-900 font-sf-pro-text text-center px-2 leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </motion.section>
  );
};

export default ServiceFeatures;