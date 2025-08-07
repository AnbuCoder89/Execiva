import React, { useEffect, useRef, useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const Capabilities2: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const capabilities = [
    {
      category: 'ARTIFICIAL INTELLIGENCE',
      title: 'AI & Machine Learning Solutions',
      date: 'MARCH 15, 2024',
      description: 'Advanced AI algorithms and machine learning models for intelligent automation',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'CLOUD COMPUTING',
      title: 'Scalable Cloud Infrastructure',
      date: 'FEBRUARY 28, 2024',
      description: 'Robust cloud solutions for enterprise-grade applications',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'DATA SCIENCE',
      title: 'Advanced Data Analytics',
      date: 'JANUARY 20, 2024',
      description: 'Transform raw data into actionable business insights',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'SECURITY',
      title: 'Enterprise Cybersecurity',
      date: 'DECEMBER 10, 2023',
      description: 'Comprehensive security solutions for digital protection',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'INTERNET OF THINGS',
      title: 'Smart IoT Solutions',
      date: 'NOVEMBER 25, 2023',
      description: 'Connected devices and intelligent automation systems',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'BLOCKCHAIN',
      title: 'Blockchain Development',
      date: 'OCTOBER 15, 2023',
      description: 'Decentralized solutions and smart contract development',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'MOBILE TECHNOLOGY',
      title: 'Cross-Platform Mobile Apps',
      date: 'SEPTEMBER 30, 2023',
      description: 'Native and hybrid mobile applications for all platforms',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'DEVOPS',
      title: 'DevOps & CI/CD Automation',
      date: 'AUGUST 20, 2023',
      description: 'Streamlined development workflows and automated deployments',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    }
  ];

  const displayedCapabilities = showAll ? capabilities : capabilities.slice(0, 4);

  const toggleView = () => {
    setShowAll(!showAll);
  };

  return (
    <section id="capabilities2" className="py-20 md:py-32 bg-light-gray" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight font-sf-pro-display transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Our
            <span className="block font-bold mt-2">
              Capabilities
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-500 ease-in-out">
          {displayedCapabilities.map((capability, index) => (
            <div
              key={capability.title}
              className={`group relative h-96 overflow-hidden shadow-lg cursor-pointer transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${capability.image}')` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
              
              {/* Category Tag */}
              <div className="absolute top-6 left-6 z-10">
                <span className="px-4 py-2 bg-gray-800/80 backdrop-blur-sm text-white text-xs font-semibold border border-white/20 font-sf-pro-text">
                  {capability.category}
                </span>
              </div>
              
              {/* Article Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="bg-white/95 backdrop-blur-sm p-6 shadow-lg border border-white/20 transition-all duration-300 group-hover:bg-white">
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-gray-500 tracking-wider font-sf-pro-text">
                      ARTICLE • {capability.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2 font-sf-pro-display">
                    {capability.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-sf-pro-text">
                    {capability.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center">
          <button
            onClick={toggleView}
            className="px-8 py-4 bg-gray-900 text-white border-2 border-gray-900 rounded-full hover:bg-gray-800 hover:border-gray-800 transition-all duration-300 font-medium font-sf-pro-text shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
          >
            {showAll ? 'View Less Capabilities' : 'View More Capabilities'}
            {showAll ? (
              <ChevronUp size={16} className="transition-transform duration-300" />
            ) : (
              <ChevronDown size={16} className="transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Capabilities2;