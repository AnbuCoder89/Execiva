import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Button from "../ui/Button";

interface ServiceHero2Props {}

const ServiceHero2: React.FC<ServiceHero2Props> = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleGetStarted = () => {
    // Navigate to contact section
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBackToServices = () => {
    // Navigate to services section
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      className="bg-gray-50 pt-12 min-h-screen flex items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-full px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Column - Content */}
          <motion.div 
            className="space-y-8 order-2 lg:order-1"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight font-sf-pro-display"
              variants={itemVariants}
            >
              Web Development
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text max-w-2xl"
              variants={itemVariants}
            >
              Custom websites and web applications built for performance and scalability
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Button
                variant="vision"
                size="lg"
                onClick={handleGetStarted}
                className="px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Started
              </Button>
              
              <Button
                variant="ghost"
                size="lg"
                icon={ArrowLeft}
                iconPosition="left"
                onClick={handleBackToServices}
                className="text-gray-600 hover:text-gray-900"
              >
                Back to Services
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            className="order-1 lg:order-2"
            variants={itemVariants}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img 
                src="/image/services/web_development-6.jpeg" 
                alt="Web Development Service" 
                className="w-full h-service-hero object-cover"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
      {/* add your content here later */}
    </motion.section>
  );
};

export default ServiceHero2;