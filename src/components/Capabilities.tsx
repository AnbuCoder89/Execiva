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
    <section className="relative bg-white text-black pt-12 pb-12">
      <div className="container relative flex flex-col gap-14 overflow-hidden mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-[53px] xl:gap-16 items-center xl:flex-row xl:justify-between">
          
          {/* Left Side - Text */}
          <div className="flex flex-col items-center w-full lg:shrink-0 lg:flex-row lg:justify-center lg:gap-2 xl:flex-col xl:items-start xl:w-fit xl:gap-0 xl:pb-6 text-3xl sm:text-4xl font-medium leading-tight font-sf-pro-display text-gray-600">
            <span>We've got experts in </span>
            <span 
              className="text-gray-900 transition-all duration-300 font-sf-pro-display" 
              style={{ opacity: 1, transform: 'none' }}
            >
              {hoveredCapability ? hoveredCapability : 'the composable stack.'}
            </span>
          </div>

          {/* Right Side - Logo Grid */}
          <div className="w-fit">
            <ul className="group grid grid-cols-4 sm:grid-cols-6 gap-2 lg:flex lg:flex-wrap">
              {capabilities.map((capability, index) => (
                <li key={index} className="size-16">
                  <div 
                    className="block size-full cursor-pointer rounded-xl border border-transparent transition-all duration-300 hover:border-blue-600"
                    onMouseEnter={() => setHoveredCapability(capability.name)}
                    onMouseLeave={() => setHoveredCapability(null)}
                  >
                    <span className="flex items-center justify-center size-full p-2 transition-all duration-300 cursor-pointer grayscale brightness-50 group-hover:opacity-50 hover:!opacity-100">
                      <div className="size-full flex items-center justify-center text-2xl">
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
    </section>
  );
};

export default Capabilities;