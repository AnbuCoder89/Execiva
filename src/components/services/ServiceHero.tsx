import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "../ui/Button";

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
  onBackToServices,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <motion.section
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full bg-black/50 object-cover"
        loading="lazy"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>      

      {/* Content */}
      <div className="relative z-10 w-full text-white px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">
            {/* Left Column - Content */}
            <div className="space-y-8">
        <motion.p
          className="text-xs sm:text-sm font-medium uppercase tracking-wide text-gray-200 font-sf-pro-text"
          variants={itemVariants}
        >
          {category}
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-sf-pro-display"
          variants={itemVariants}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-200 leading-relaxed font-sf-pro-text max-w-xl"
          variants={itemVariants}
        >
          {detailedDescription}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 pt-4"
          variants={itemVariants}
        >
          <Button
            variant="vision"
            size="lg"
            onClick={onRequestDemo}
            className="px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto"
          >
            Request a demo
          </Button>

          <Button
            variant="ghost"
            size="lg"
            icon={ArrowLeft}
            iconPosition="left"
            onClick={onBackToServices}
            className="text-gray-200 hover:text-white w-full sm:w-auto px-8 py-4"
          >
            Back to Services
          </Button>
        </motion.div>
            </div>

            {/* Right Column - Visual Space */}
            <div className="hidden lg:block">
              {/* This space can be used for additional visual elements if needed */}
            </div>
          </div>
        </div>
      </div>

    </motion.section>
  );
};

export default ServiceHero;
