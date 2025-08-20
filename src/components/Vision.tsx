import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "./ui/Button"


const Vision: React.FC = () => {
  return (
    <section
      id="vision"
      className="relative w-full min-h-screen flex items-center justify-center bg-white z-30"
    >
<div className="w-full flex flex-col lg:flex-row items-center justify-center">
  {/* Image Column */}
  <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-10">
    <img
      src="/assets/images/vision3.jpeg"
      alt="Mission and Vision"
      className="w-[85%] h-auto object-contain"
    />
  </div>
        <div className="w-full lg:w-1/2 flex items-center justify-start">
          <div className="max-w-lg lg:max-w-[45rem] text-center lg:text-left px-4">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight font-sf-pro-display">
               <span className="font-bold">Our Vision</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text mb-8 text-justify">
              To be the go-to innovation partner for businesses navigating change solving complex problems and turning challenges into opportunities by harnessing the transformative power of AI, empowering organizations to adapt, innovate, and thrive in an ever-evolving world.
            </p>
            <div className="pt-4">
              <Button
                variant="vision"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
              >
                Learn More
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
