import React, { useState } from 'react';

const Capabilities: React.FC = () => {
  const [hoveredCapability, setHoveredCapability] = useState<string | null>(null);

  const capabilities = [
    {
      name: 'FullStack Solutions',
      shortName: 'FullStack',
      logo: '⚡', // You can replace with actual SVG icons
      description: 'End-to-end web development'
    },
    {
      name: 'Automation & Workflows',
      shortName: 'Automation',
      logo: '🔄',
      description: 'Streamlined business processes'
    },
    {
      name: 'E-Commerce Solutions',
      shortName: 'E-Commerce',
      logo: '🛒',
      description: 'Online store development'
    },
    {
      name: 'UI/UX Design',
      shortName: 'Design',
      logo: '🎨',
      description: 'User-centered design'
    },
    {
      name: 'Consulting & Strategy',
      shortName: 'Strategy',
      logo: '💡',
      description: 'Business transformation'
    },
    {
      name: 'AI & Data Insights',
      shortName: 'AI/Data',
      logo: '🤖',
      description: 'Intelligent analytics'
    },
    {
      name: 'Digital Marketing & SEO',
      shortName: 'Marketing',
      logo: '📈',
      description: 'Growth optimization'
    }
  ];

  const defaultText = "We've got experts in\nthe composable stack.";
  const getDisplayText = () => {
    if (hoveredCapability) {
      const capability = capabilities.find(cap => cap.name === hoveredCapability);
      return `We've got experts in\n${capability?.name || 'the composable stack'}.`;
    }
    return defaultText;
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Text */}
          <div className="text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight font-sf-pro-display">
              {getDisplayText().split('\n').map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>

          {/* Right Side - Logo Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="group relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-2xl"
                onMouseEnter={() => setHoveredCapability(capability.name)}
                onMouseLeave={() => setHoveredCapability(null)}
              >
                {/* Logo/Icon */}
                <div className="text-2xl sm:text-3xl lg:text-4xl transition-transform duration-300 group-hover:scale-110">
                  {capability.logo}
                </div>
                
                {/* Tooltip on hover */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-white text-gray-900 px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap shadow-lg font-sf-pro-text">
                    {capability.shortName}
                  </div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-white rotate-45"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;