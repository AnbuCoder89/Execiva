import React from "react";

const Vision: React.FC = () => {
  return (
    <section
      id="vision"
      className="w-full h-screen flex items-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 bg-white"
    >
      <div className="w-full flex flex-col lg:flex-row gap-8 md:gap-12 items-center h-full">
        <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-full flex items-center justify-center overflow-hidden rounded-lg">
          <img
            src="/assets/images/project-mission-vission-illustration_593183-510.webp"
            alt="Mission and Vision"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2"></div>
      </div>
    </section>
  );
};

export default Vision;
