import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
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
  return (
    <section className="bg-gray-50 pt-12 min-h-screen">
      <div className="flex items-center justify-center px-6 sm:px-8 lg:px-12">
        <div
          className="relative rounded-2xl shadow-xl w-full mt-8 overflow-hidden"
        >
          {/* background image */}
          <img
             src="/image/vision/vision-1.jpeg" 
            alt="Service Hero"
            className="w-full h-service-hero object-cover rounded-2xl"
          />

          {/* dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* content overlay */}
          <div className="relative z-10 flex flex-col items-start justify-center min-h-[60vh] sm:min-h-[70vh] p-8 sm:p-12 text-white">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-lg sm:text-xl mb-6 max-w-2xl">{detailedDescription}</p>
            <div className="flex gap-4">
              <Button onClick={onRequestDemo} variant="primary">
                Get Started
              </Button>
              <button
                onClick={onBackToServices}
                className="inline-flex items-center text-white underline"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero2;
