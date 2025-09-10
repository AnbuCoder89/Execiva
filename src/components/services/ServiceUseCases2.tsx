import React from "react";

const ServiceUseCases2: React.FC = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full h-full flex items-center justify-center">
        {/* Card Container - Full screen design */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden w-full h-full min-h-[80vh] flex flex-col md:flex-row">
          <div className="flex flex-col md:flex-row">
            {/* Left Side - Image */}
            <div className="md:w-1/2 relative flex-1">
              <img
                src="https://cdn.sanity.io/images/q9c9g16o/production/214d51304ca5e675e91994b7add6a7c370e5af15-8095x5399.jpg?w=1200&q=80"
                alt="Service showcase"
                className="w-full h-full min-h-[40vh] md:min-h-full object-cover"
              />
            </div>

            {/* Right Side - Content */}
            <div className="md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center flex-1">
              {/* Main Heading */}
              <p className="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-medium leading-snug mb-6">
                Get a dedicated Website Product Team to drive continuous growth.
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-lg md:text-xl lg:text-2xl leading-relaxed mb-8">
                Get a tailored Website Product Team to help you continuously manage, optimize, and scale your website. Taking an agile, data-driven approach, we ensure your site evolves alongside your business goals.
              </p>
              
              {/* Author/Attribution Section */}
              <div className="flex items-center">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                  <span className="text-gray-600 font-medium text-base md:text-lg">EX</span>
                </div>
                <div>
                  <p className="text-gray-900 font-medium text-base md:text-lg">Execiva Team</p>
                  <p className="text-gray-500 text-sm md:text-base">Digital Solutions</p>
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