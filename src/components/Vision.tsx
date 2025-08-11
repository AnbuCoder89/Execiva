import React from "react";

const Vision: React.FC = () => {
  return (
    <section
      id="vision"
      className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white"
      style={{
        paddingTop: 'var(--vision-padding-top, 0)',
        paddingBottom: 'var(--vision-padding-bottom, 0)'
      }}
    >
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center justify-center">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src="/assets/images/project-mission-vission-illustration_593183-510.webp"
            alt="Mission and Vision"
            className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
          />
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="max-w-lg text-center lg:text-left">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight font-sf-pro-display">
              Our <span className="font-bold">Vision</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text mb-8">
              We envision a future where technology seamlessly integrates with human creativity to solve complex challenges and create extraordinary experiences that transform industries and improve lives.
            </p>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed font-sf-pro-text">
              Through innovation, collaboration, and unwavering commitment to excellence, we strive to be the catalyst that empowers businesses to achieve their boldest ambitions and shape tomorrow's digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
