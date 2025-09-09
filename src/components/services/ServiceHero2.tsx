import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
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

  return (
    <section className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 bg-gray-50">
      <div className="bg-white rounded-2xl shadow-xl w-full p-8 sm:p-12">
          <img 
            src="/image/vision/vision-2.jpeg" 
            alt="Service Hero" 
            className="w-full object-cover rounded-2xl"
          />
        {/* add your content here later */}
      </div>
    </section>
  );
};

export default ServiceHero2;