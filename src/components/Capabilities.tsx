import React from 'react';

const Capabilities: React.FC = () => {
  const capabilities = [
    'FullStack Solutions',
    'Automation & Workflows',
    'E-Commerce Solutions',
    'UI/UX Design',
    'Consulting & Strategy',
    'AI & Data Insights',
    'Digital Marketing & SEO'
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-4 font-sf-pro-display">
            Our Capabilities
          </h2>
          {/* Apple-style thin divider */}
          <div className="w-16 h-px bg-gray-300"></div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 font-sf-pro-text font-light leading-relaxed transition-opacity duration-300 group-hover:opacity-70">
                {capability}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;