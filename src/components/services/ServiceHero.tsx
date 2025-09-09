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
        <section className="bg-gray-50"> {/* Optional background for contrast */}
      <div className="flex items-center justify-center min-h-screen px-6 sm:px-8 lg:px-12">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-6xl min-h-screen">
          {/* blank card - content goes here later */}
        </div>
      </div>
    </section>
    <motion.section
      className="relative w-full min-h-screen flex items-center justify-start overflow-hidden"
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
      <div className="relative z-10 w-full text-white px-6 sm:px-8 lg:px-12 pt-32 md:pt-40">
        <div className="max-w-4xl">
        <motion.p
          className="text-xs sm:text-sm font-medium uppercase tracking-wide mb-3 text-gray-200"
          variants={itemVariants}
        >
          {category}
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6 font-sf-pro-display"
          variants={itemVariants}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl mb-8 font-sf-pro-text"
          variants={itemVariants}
        >
          {detailedDescription}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          variants={itemVariants}
        >
          <Button
            variant="vision"
            size="lg"
            onClick={onRequestDemo}
            className="px-6 py-3 sm:px-8 sm:py-4 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto"
          >
            Request a demo
          </Button>

          <Button
            variant="ghost"
            size="lg"
            icon={ArrowLeft}
            iconPosition="left"
            onClick={onBackToServices}
            className="text-gray-200 hover:text-white w-full sm:w-auto"
          >
            Back to Services
          </Button>
        </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce"
        variants={itemVariants}
      >
        <div className="w-10 h-10 flex items-center justify-center border border-white/60 rounded-full">
          <ArrowRight className="w-4 h-4 text-white" />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ServiceHero;
