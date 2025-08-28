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
    <section className="w-full py-16 lg:py-24 bg-[#fdfaf6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Small Label */}
          <p className="text-sm font-medium text-gray-600 mb-4 font-sf-pro-text uppercase tracking-wide">
            Our Capabilities
          </p>
          
          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-600 mb-2 font-sf-pro-display leading-tight">
            We've got expertise in
          </h2>
          
          {/* Highlighted Bold Part */}
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-sf-pro-display leading-tight">
            <span className="underline decoration-2 underline-offset-4 decoration-gray-300">
              FullStack, Automation, AI & more.
            </span>
          </h3>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 lg:gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group bg-white hover:bg-gray-900 rounded-xl p-6 lg:p-8 text-center transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-lg cursor-pointer"
            >
              <p className="text-sm lg:text-base font-medium text-gray-900 group-hover:text-[#fdfaf6] transition-colors duration-300 font-sf-pro-text leading-relaxed">
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