import React, { useState } from 'react';

const Capabilities: React.FC = () => {
  const [hoveredCapability, setHoveredCapability] = useState<string | null>(null);

  const capabilities = [
    {
      name: 'FullStack Solutions',
      shortName: 'FullStack',
      logo: '⚡',
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
    },
    {
      name: 'Cloud Infrastructure',
      shortName: 'Cloud',
      logo: '☁️',
      description: 'Scalable cloud solutions'
    }
  ];

  return (
    <section className="relative bg-white text-black py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container relative flex flex-col gap-8 sm:gap-12 md:gap-14 overflow-hidden mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 items-center lg:flex-row lg:justify-between lg:items-center">
          
          {/* Left Side - Text */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full lg:w-auto lg:flex-shrink-0">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight font-sf-pro-display text-gray-600 mb-2 sm:mb-4">
              <span className="block sm:inline">We've got experts in </span>
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight font-sf-pro-display text-gray-900 transition-all duration-300">
              {hoveredCapability || 'future-ready solutions.'}
            </div>
          </div>

          {/* Right Side - Logo Grid */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none lg:w-auto">
              <ul className="group grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-4 xl:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-2 xl:gap-3 lg:flex lg:flex-wrap lg:max-w-[400px] xl:max-w-[480px]">
                {capabilities.map((capability, index) => (
                  <li key={index} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-14 lg:h-14 xl:w-16 xl:h-16">
                    <div 
                      className="block w-full h-full cursor-pointer rounded-xl border border-transparent transition-all duration-300 hover:border-blue-600 hover:shadow-lg"
                      onMouseEnter={() => setHoveredCapability(capability.name)}
                      onMouseLeave={() => setHoveredCapability(null)}
                    >
                      <span className="flex items-center justify-center w-full h-full p-1 sm:p-2 transition-all duration-300 cursor-pointer grayscale brightness-50 group-hover:opacity-50 hover:!opacity-100 hover:grayscale-0 hover:brightness-100">
                        <div className="w-full h-full flex items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl">
                          {capability.logo}
                        </div>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;