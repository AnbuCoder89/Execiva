import React from "react";

const ServiceUseCases2: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto px-6 sm:px-8 lg:px-12">
        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          {/* Grid Container */}
          <div className="grid grid-cols-2 gap-2">
            {/* Div1 - left side, spans 1 column */}
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://cdn.sanity.io/images/q9c9g16o/production/214d51304ca5e675e91994b7add6a7c370e5af15-8095x5399.jpg?w=1200&q=80"
                alt="Service showcase"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Div2 - right side, spans 1 column */}
            <div className="bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">2</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceUseCases2;