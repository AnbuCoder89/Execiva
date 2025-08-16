import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  const services = [
    {
      title: 'Web Development',
      description:
        'Custom websites and web applications built for performance and scalability.',
      imageUrl:
        '/assets/images/web-development/web-development-service.jpeg',
    },
    {
      title: 'Artificial Intelligence',
      description:
        'AI-powered solutions that automate processes and provide intelligent insights.',
      imageUrl:
        '/assets/images/Ai-service.jpeg',
    },
    {
      title: 'Digital Strategy',
      description:
        'Comprehensive digital transformation strategies tailored to your business goals.',
      imageUrl:
        '/assets/images/data_analytics/digital-analytics-service.jpeg',
    },
    {
      title: 'Data Analytics',
      description:
        'Data-driven insights to help you make informed decisions and optimize your operations.',
      imageUrl:
        '/assets/images/data_analytics/data-analytics-service.jpeg',
    },
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center bg-gray-50 p-8"
      >
      <div className="w-full h-full">
        <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                backgroundImage: `url('${service.imageUrl}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%'
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" style={{ width: '100%', height: '100%' }}></div>
              
              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col justify-between text-white" style={{ width: '100%', height: '100%' }}>
                <div>
                  <h3 className="text-3xl md:text-4xl text-center font-bold mb-4 font-sf-pro-display">
                    {service.title}
                  </h3>
                  <p className="text-lg md:text-xl leading-relaxed font-sf-pro-text">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;