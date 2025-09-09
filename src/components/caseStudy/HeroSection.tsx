import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Button from '../ui/Button';

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
      className="pt-12 min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="relative flex flex-col items-center justify-center px-4 sm:px-8 lg:px-12">
        <div className="relative rounded-2xl shadow-xl w-full mt-4 sm:mt-8 overflow-hidden">
          {/* background image */}
          <img
            src={caseStudy.image}
            alt="Case Study Hero"
            className="w-full h-64 sm:h-96 lg:h-service-hero object-cover rounded-2xl"
          />

          {/* dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* content overlay */}
          <div className="absolute inset-0 z-10 flex flex-col items-start justify-center p-6 sm:p-12 text-white">
            <motion.p
              className="text-xs sm:text-sm font-medium text-white/80 uppercase tracking-wide font-sf-pro-text mb-2 sm:mb-4"
              variants={itemVariants}
            >
              {caseStudy.subtitle}
            </motion.p>
            <motion.h1
              className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 font-sf-pro-display text-white"
              variants={itemVariants}
            >
              {caseStudy.title}
            </motion.h1>
            <motion.div
              className="flex flex-wrap gap-2 sm:gap-4 lg:gap-8 mb-4 sm:mb-6"
              variants={itemVariants}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 px-3 py-1 sm:px-4 sm:py-2">
                <span className="text-xs sm:text-sm font-medium text-white font-sf-pro-text">
                  {caseStudy.clientIndustry}
                </span>
              </div>
            </motion.div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button variant="vision" size="lg" className="px-6 sm:px-8 py-3 sm:py-4">
                Get Started
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={onBackClick}
                className="px-6 sm:px-8 py-3 sm:py-4 border border-white/30 text-white hover:bg-white/30 transition-all duration-200"
              >
                Back to Case Studies
              </Button>
            </div>
          </div>
        </div>

        {/* Project Details - Positioned at bottom */}
        <motion.div
          className="absolute bottom-8 sm:bottom-20 left-4 sm:left-24 lg:left-24 flex flex-wrap gap-2 sm:gap-4 lg:gap-8"
          variants={itemVariants}
        >
          {/* REGION */}
          <div className="bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 px-3 py-1 sm:px-4 sm:py-2">
            <div className="text-xs sm:text-sm font-medium text-white font-sf-pro-text">
              {caseStudy.region}
            </div>
          </div>

          {/* PRODUCT */}
          <div className="bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 px-3 py-1 sm:px-4 sm:py-2">
            <div className="text-xs sm:text-sm font-medium text-white font-sf-pro-text">
              {caseStudy.product}
            </div>
          </div>

          {/* CHANNEL */}
          <div className="bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 px-3 py-1 sm:px-4 sm:py-2">
            <div className="text-xs sm:text-sm font-medium text-white font-sf-pro-text">
              {caseStudy.channel}
            </div>
          </div>

          {/* TIMELINE */}
          <div className="bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 px-3 py-1 sm:px-4 sm:py-2">
            <div className="text-xs sm:text-sm font-medium text-white font-sf-pro-text">
              {caseStudy.projectTimeline}
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 animate-bounce"
          variants={itemVariants}
        >
          <div className="w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center border border-white/60 rounded-full">
            <ArrowDown className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
