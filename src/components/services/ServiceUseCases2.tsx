import React from "react";

const ServiceUseCases2: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto px-6 sm:px-8 lg:px-12">
        {/* Card Container - Inspired by the reference design */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Left Side - Image */}
            <div className="md:w-1/2 relative">
              <img
                src="https://cdn.sanity.io/images/q9c9g16o/production/214d51304ca5e675e91994b7add6a7c370e5af15-8095x5399.jpg?w=1200&q=80"
                alt="Service showcase"
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
              />
            </div>

            {/* Right Side - Content */}
            <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
              {/* Main Heading */}
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Get a dedicated Website Product Team to drive continuous growth.
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                Get a tailored Website Product Team to help you continuously manage, optimize, and scale your website. Taking an agile, data-driven approach, we ensure your site evolves alongside your business goals.
              </p>
              
              {/* Author/Attribution Section */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                  <span className="text-gray-600 font-medium text-sm">EX</span>
                </div>
                <div>
                  <p className="text-gray-900 font-medium text-sm">Execiva Team</p>
                  <p className="text-gray-500 text-xs">Digital Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceUseCases2;