import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const TCSServices: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const services = [
    {
      title: 'Consulting',
      description: 'Strategic guidance to transform your business with cutting-edge technology solutions.',
      icon: '💼',
      link: '#consulting'
    },
    {
      title: 'Digital',
      description: 'End-to-end digital transformation services to accelerate your business growth.',
      icon: '🚀',
      link: '#digital'
    },
    {
      title: 'Operations',
      description: 'Streamline operations with intelligent automation and process optimization.',
      icon: '⚙️',
      link: '#operations'
    },
    {
      title: 'Products & Platforms',
      description: 'Innovative products and platforms designed to drive business excellence.',
      icon: '📱',
      link: '#products'
    },
    {
      title: 'Cloud',
      description: 'Comprehensive cloud solutions for scalability, security, and performance.',
      icon: '☁️',
      link: '#cloud'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets and infrastructure.',
      icon: '🔒',
      link: '#cybersecurity'
    },
    {
      title: 'Data & Analytics',
      description: 'Transform data into actionable insights with advanced analytics and AI.',
      icon: '📊',
      link: '#data-analytics'
    },
    {
      title: 'Sustainability',
      description: 'Sustainable technology solutions for a better tomorrow and greener future.',
      icon: '🌱',
      link: '#sustainability'
    }
  ];

  return (
    <section 
      id="tcs-services" 
      className="py-20 md:py-32 bg-white"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Services
          </h2>
          <p className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '200ms' }}>
            Comprehensive technology services designed to accelerate your digital transformation journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Arrow Link */}
              <div className="flex items-center justify-between">
                <a 
                  href={service.link}
                  className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors duration-300"
                >
                  Learn more
                  <ChevronRight 
                    size={16} 
                    className="ml-1 group-hover:translate-x-1 transition-transform duration-300" 
                  />
                </a>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '800ms' }}>
          <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Explore All Services
            <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TCSServices;