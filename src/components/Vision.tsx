import React from "react";

const Vision: React.FC = () => {
  return (
    <section
      id="vision"
      className="w-full h-screen flex items-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40"
    >
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center h-full">
          <div className="w-full h-64 sm:h-80 md:h-96 lg:h-full flex items-center justify-center overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Vision"
              className="w-full h-full object-cover"
            />
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
