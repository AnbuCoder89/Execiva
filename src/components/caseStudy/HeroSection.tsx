import React from 'react';
import { motion } from 'framer-motion';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  clientIndustry: string;
  region: string;
  product: string;
  channel: string;
  projectTimeline: string;
}

interface HeroSectionProps {
  caseStudy: CaseStudy;
  onBackClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ caseStudy, onBackClick }) => {
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
      className="text-black pt-20 bg-beige"
      variants={itemVariants}
    >
      <div className="pb-12 pt-[72px] md:pb-[60px] lg:pt-[148px]">
        <div className="max-w-[1490px] px-4 lg:px-10 box-content mx-auto">
          <motion.div 
            className="grid gap-10 mt-16 md:grid-cols-12 md:grid-flow-col-dense md:mt-10"
            variants={containerVariants}
          >
            {/* Left Column - Content */}
            <motion.div 
              className="flex items-center md:col-span-6 xl:col-span-5"
              variants={itemVariants}
            >
              <div className="space-y-10 max-w-5xl">
                <div className="space-y-6 md:space-y-4">
                  <div className="space-y-2 md:space-y-6">
                    <motion.p 
                      className="text-sm font-medium text-gray-600 uppercase tracking-wide font-sf-pro-text"
                      variants={itemVariants}
                    >
                      {caseStudy.subtitle}
                    </motion.p>
                    <motion.h1 
                      className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight font-sf-pro-display"
                      variants={itemVariants}
                    >
                      {caseStudy.title}
                    </motion.h1>
                  </div>

                  <motion.ul 
                    className="flex flex-wrap gap-4 lg:gap-8"
                    variants={itemVariants}
                  >
                    <li className="relative aspect-square min-h-[62px] lg:min-h-[124px]">
                      <div className="absolute size-full flex items-center justify-center inset-0 bg-white rounded-lg border border-gray-200 grayscale opacity-70">
                        <span className="text-xs md:text-sm font-medium text-gray-600 font-sf-pro-text text-center px-2">
                          {caseStudy.clientIndustry}
                        </span>
                      </div>
                    </li>
                  </motion.ul>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div 
              className="flex items-center md:col-span-6 md:-ml-5 xl:col-start-7"
              variants={itemVariants}
            >
              <figure className="w-full">
                <img
                  className="w-full rounded-lg md:rounded-2xl shadow-2xl"
                  src={caseStudy.image}
                  alt={caseStudy.title}
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

export default HeroSection;