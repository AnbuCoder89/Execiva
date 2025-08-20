import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';

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
        '/assets/images/web-development/web_development-6.jpeg',
    },
    {
      title: 'Artificial Intelligence',
      description:
        'AI-powered solutions that automate processes and provide intelligent insights.',
      imageUrl:
        '/images/Artificial_Intelligence.jpg',
    },
    {
      title: 'Digital Strategy',
      description:
        'Comprehensive digital transformation strategies tailored to your business goals.',
      imageUrl:
        '/images/Digital_Statergy.jpeg',
    },
    {
      title: 'Data Analytics',
      description:
        'Data-driven insights to help you make informed decisions and optimize your operations.',
      imageUrl:
        '/images/Data_Analytics.jpg',
    },
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center bg-gray-50 p-4 sm:p-6 lg:p-8"
      >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 min-h-[80vh] lg:min-h-[85vh]">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `url('${service.imageUrl}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
              
              {/* Content */}
              <div className="relative z-10 p-4 sm:p-6 lg:p-8 flex flex-col justify-between text-white h-full">
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center font-bold mb-3 sm:mb-4 font-sf-pro-display">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-center leading-relaxed font-sf-pro-text">
                    {service.description}
                  </p>
                </div>
                <div className="flex justify-center mt-4 sm:mt-6">
                  <Button
                    variant="vision"
                    size="sm"
                    className="sm:!px-6 sm:!py-3 sm:!text-base lg:!px-8 lg:!py-4 lg:!text-lg"
                    icon={ArrowRight}
                    iconPosition="right"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile: Stack cards vertically on very small screens */}
        <style jsx>{`
          @media (max-width: 640px) {
            .grid {
              grid-template-columns: 1fr;
              gap: 1rem;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Services;