import React from 'react';
import { motion, Variants } from 'framer-motion';
import Button from '../ui/Button';
import BackButton from '../ui/BackButton';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  industry: string;
  region: string;
  service: string;
  service_category: string;
  projectTimeline: string;
}

interface HeroSectionProps {
  caseStudy: CaseStudy;
  onBackClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ caseStudy, onBackClick }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      className="pt-16 sm:pt-20 lg:pt-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl shadow-xl w-full overflow-hidden h-[60vh] min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
          {/* background image */}
          <img
            src={caseStudy.image}
            alt={`${caseStudy.title} hero`}
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* content overlay */}
          <motion.div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 sm:p-12 text-white text-center"
            variants={containerVariants}
          >


            <motion.div
              className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 w-full px-4"
              variants={itemVariants}
            >
              <div className="bg-green-500/20 backdrop-blur-sm rounded-lg border border-white/30 px-3 py-1.5 sm:px-4 sm:py-2">
                <span className="text-xs sm:text-sm font-medium text-white font-sf-pro-text">
                  {caseStudy.industry}
                </span>
              </div>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 font-sf-pro-display text-white max-w-4xl mx-auto px-4"
              variants={itemVariants}
            >
              {caseStudy.title}
            </motion.h1>
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md sm:max-w-lg mx-auto px-4 justify-center items-center"
              variants={itemVariants}
            >
              <Button 
                variant="vision" 
                size="lg" 
                className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base"
              >
                Get Started
              </Button>
              <BackButton
                size="lg"
                onClick={onBackClick}
                className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base border border-white/30 text-white hover:bg-white/30 transition-all duration-200"
                label="Back to Case Studies"
              />
            </motion.div>


            <motion.div 
              className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 w-full"
              variants={itemVariants}
            >
              <div className="w-full overflow-x-auto no-scrollbar">
                <div className="flex justify-center min-w-max mx-auto px-4">
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
                    {[
                      { label: caseStudy.region },
                      { label: caseStudy.service },
                      { label: caseStudy.service_category },
                      { label: caseStudy.projectTimeline }
                    ].filter(item => item.label).map((item, index) => (
                      <div 
                        key={index}
                        className="flex-shrink-0 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 transition-all duration-200 hover:bg-white/30"
                      >
                        <div className="text-xs sm:text-sm font-medium text-white font-sf-pro-text whitespace-nowrap">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>


          </motion.div>

          {/* Project Details - Centered at bottom */}

        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
