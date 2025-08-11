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
            className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain rounded-2xl shadow-2xl"
          />
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          {/* Content can be added here */}
        </div>
      </div>
    </section>
  );
};

export default Vision;
