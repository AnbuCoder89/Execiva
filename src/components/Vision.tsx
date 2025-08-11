import React from "react";
import { ArrowRight } from "lucide-react";

const Vision: React.FC = () => {
  return (
    <section
      id="vision"
      className="w-full min-h-screen flex items-center justify-center bg-white px-0"
      style={{
        paddingTop: 'var(--vision-padding-top, 0)',
        paddingBottom: 'var(--vision-padding-bottom, 0)'
      }}
    >
<div className="w-full flex flex-col lg:flex-row items-center justify-center">
  {/* Image Column */}
  <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-8">
    <img
      src="/assets/images/mitech-landing-case-study-preview.jpg"
      alt="Mission and Vision"
      className="max-w-full lg:max-w-md xl:max-w-lg h-auto object-contain"
    />
  </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="max-w-lg text-center lg:text-left px-4">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight font-sf-pro-display">
              Our <span className="font-bold">Vision</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text mb-8">
              We envision a future where technology seamlessly integrates with human creativity to solve complex challenges and create extraordinary experiences that transform industries and improve lives.
            </p>
            <div className="pt-4">
              <button className="px-8 py-4 bg-gray-900 text-white border-2 border-gray-900 rounded-full hover:bg-gray-800 hover:border-gray-800 transition-all duration-300 font-medium font-sf-pro-text flex items-center gap-2 group shadow-lg hover:shadow-xl transform hover:scale-105">
                Learn More
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
