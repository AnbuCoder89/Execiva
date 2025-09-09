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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            className="inline-block px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-400/30 mb-6"
            variants={itemVariants}
          >
            <span className="text-blue-300 font-medium">{category}</span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {detailedDescription}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <Button
              variant="primary"
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
