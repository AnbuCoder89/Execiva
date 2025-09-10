import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowDown } from "lucide-react";
import Button from "../ui/Button";

interface ServiceHero2Props {
  title: string;
  category: string;
  detailedDescription: string;
  image: string;
  onRequestDemo: () => void;
  onBackToServices: () => void;
}

const ServiceHero2: React.FC<ServiceHero2Props> = ({
  title,
  category,
  detailedDescription,
  image,
  onRequestDemo,
  onBackToServices,
}) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="pt-12 min-h-screen">
      <div className="flex items-center justify-center px-6 sm:px-8 lg:px-12">
        <div className="relative rounded-2xl shadow-xl w-full mt-8 overflow-hidden">
          {/* background image */}
          <img
             src="/image/vision/vision-1.jpeg" 
            alt="Service Hero"
            className="w-full h-service-hero object-cover rounded-2xl"
          />

          
          {/* dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* content overlay */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 sm:p-12 text-white">
            <h1 className="hero-header font-bold mb-4 font-sf-pro-display">Website Development</h1>
            <p className="hero-description mb-6 font-sf-pro-text">Custom websites and web applications built for performance and scalability</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="vision" size="lg" className="px-8 py-4">
                Get Started
              </Button>
              <Button
                variant="ghost"
                size="lg"
                icon={ArrowLeft}
                iconPosition="left"
              >
                Back to Services
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce"
          variants={itemVariants}
        >
          <div className="w-10 h-10 flex items-center justify-center border border-white/60 rounded-full">
            <ArrowDown className="w-4 h-4 text-white" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero2;
