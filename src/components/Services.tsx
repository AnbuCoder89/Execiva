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
        '/assets/images/Artificial_Intelligence.jpg',
    },
    {
      title: 'Digital Strategy',
      description:
        'Comprehensive digital transformation strategies tailored to your business goals.',
      imageUrl:
        '/assets/images/Digital_Statergy.jpeg',
    },
    {
      title: 'Data Analytics',
      description:
        'Data-driven insights to help you make informed decisions and optimize your operations.',
      imageUrl:
        '/assets/images/data_analytics/Data_Analytics.jpg',
    },
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center bg-white z-30"
    >
      <div className="w-full min-h-screen p-4 lg:p-10 flex items-center justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full h-full">
    {services.map((service, index) => (
      <div
        key={service.title}
        className={`relative flex flex-col items-center justify-between overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        {/* Image */}
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={service.imageUrl}
            alt={service.title}
            className="max-w-full max-h-full object-contain rounded-2xl"
          />
        </div>

        {/* Overlay + Content */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70 flex flex-col justify-between p-8 text-white">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-sf-pro-display">
              {service.title}
            </h3>
            <p className="text-lg md:text-xl leading-relaxed font-sf-pro-text">
              {service.description}
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <Button
              variant="vision"
              size="md"
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
</div>

    </section>
  );
};

export default Services;
