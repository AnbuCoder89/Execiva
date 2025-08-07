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
      title: 'AI & Machine Learning',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#ai-ml'
    },
    {
      title: 'Cloud Infrastructure',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#cloud'
    },
    {
      title: 'Data Analytics',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=800',
      link: '#analytics'
    },
    {
      title: 'Cybersecurity',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#security'
    },
    {
      title: 'IoT Solutions',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#iot'
    },
    {
      title: 'Blockchain Technology',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#blockchain'
    },
    {
      title: 'Mobile Development',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#mobile'
    },
    {
      title: 'DevOps & Automation',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#devops'
    }
  ];

  const displayedCapabilities = showAll ? capabilities : capabilities.slice(0, 4);

  const toggleView = () => {
    setShowAll(!showAll);
  };

  return (
    <section id="capabilities2" className="py-20 md:py-32 bg-light-gray" ref={sectionRef}>
      <div className="px-6">
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
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayedCapabilities.map((capability, index) => (
            <a
              key={capability.title}
              href={capability.link}
              className={`group relative h-96 rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-cover bg-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                backgroundImage: `url('${capability.image}')`,
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Top darkening overlay - only appears on hover */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Title positioned at top */}
              <div className="relative z-10 p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight font-sf-pro-display drop-shadow-lg">
                  {capability.title}
                </h3>
              </div>
            </a>
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