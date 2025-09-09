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
    <section className="bg-gray-50"> {/* Optional background for contrast */}
      <div className="flex items-center justify-center px-6 sm:px-8 lg:px-12">
        <div className="bg-white rounded-2xl shadow-xl w-full min-h-screen">
          {/* blank card - content goes here later */}
          
        </div>
      </div>
    </section>
  );
};

export default ServiceHero2;