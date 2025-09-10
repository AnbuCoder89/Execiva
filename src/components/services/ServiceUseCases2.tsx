import React from "react";

const ServiceUseCases2: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto px-6 sm:px-8 lg:px-12">
        {/* Grid Container */}
        <div className="grid grid-cols-7 grid-rows-6 gap-2">
          {/* Div1 - spans 3 columns and 3 rows */}
          <div className="col-span-3 row-span-3 bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-700">1</span>
          </div>
          
          {/* Div2 - spans 4 columns, 3 rows, starts at column 4 */}
          <div className="col-span-4 row-span-3 col-start-4 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-700">2</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceUseCases2;