import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Button from '../ui/Button';
import BackButton from '../ui/BackButton';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  industry: string;
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
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.section className="pt-12 min-h-screen" variants={containerVariants} initial="hidden" animate="visible">
      <div className="flex items-center justify-center px-6 sm:px-8 lg:px-12">
        <div className="relative rounded-2xl shadow-xl w-full mt-8 overflow-hidden">
          {/* background image */}
          <img
            src={caseStudy.image}
            alt="Case Study Hero"
            className="w-full h-[60vh] md:h-[70vh] lg:h-[90vh] object-cover rounded-2xl"
          />

          {/* dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* content overlay */}
          <motion.div 
            className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 sm:p-12 text-white text-center"
            variants={containerVariants}
          >
            >
              {caseStudy.subtitle}
            </motion.p>
            <motion.h1 
              className="text-6xl font-bold mb-4 font-sf-pro-display text-white"
              variants={itemVariants}
            >
              {caseStudy.title}
            </motion.h1>
            <motion.div 
              className="flex flex-wrap gap-4 lg:gap-8 mb-6"
              variants={itemVariants}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 px-4 py-2">
                <span className="text-sm font-medium text-white font-sf-pro-text">
                  {caseStudy.industry}
                </span>
              </div>
            </motion.div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="vision" size="lg" className="px-8 py-4">
                Get Started
              </Button>
              <BackButton
                size="lg"
                onClick={onBackClick}
                className="px-8 py-4 border border-white/30 text-white hover:bg-white/30 transition-all duration-200"
                label="Back to Case Studies"
              />
            </div>
          </div>
            
          {/* Project Details - Centered at bottom */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-6 max-w-4xl"
            variants={itemVariants}
          >
            {/* REGION */}
            <div className="bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 px-3 py-2 sm:px-4">
              <div className="text-xs sm:text-sm font-medium text-white font-sf-pro-text">
                {caseStudy.region}
              </div>
            </div>

            {/* PRODUCT */}
            <div className="bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 px-3 py-2 sm:px-4">
              <div className="text-xs sm:text-sm font-medium text-white font-sf-pro-text">
                {caseStudy.product}
              </div>
            </div>

            {/* CHANNEL */}
            <div className="bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 px-3 py-2 sm:px-4">
              <div className="text-xs sm:text-sm font-medium text-white font-sf-pro-text">
                {caseStudy.channel}
              </div>
            </div>

            {/* TIMELINE */}
            <div className="bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 px-3 py-2 sm:px-4">
              <div className="text-xs sm:text-sm font-medium text-white font-sf-pro-text">
                {caseStudy.projectTimeline}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;