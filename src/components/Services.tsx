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
      features: [
        'Responsive Design',
        'Performance Optimization',
        'SEO Ready',
        'Modern Frameworks',
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'Mobile Development',
      description:
        'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      features: [
        'iOS & Android',
        'Cross-Platform',
        'App Store Optimization',
        'Push Notifications',
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'Digital Strategy',
      description:
        'Comprehensive digital transformation strategies tailored to your business goals.',
      features: [
        'Market Analysis',
        'Technology Roadmap',
        'Digital Transformation',
        'Growth Strategy',
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'Data Analytics',
      description:
        'Data-driven insights to help you make informed decisions and optimize your operations.',
      features: ['Data Cleaning', 'Data Visualization', 'Data Analysis', 'Data Reporting'],
      imageUrl:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1470&q=80',
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
                backgroundPosition: 'center'
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
              
              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 font-sf-pro-display">
                    {service.title}
                  </h3>
                  <p className="text-lg md:text-xl leading-relaxed mb-6 font-sf-pro-text opacity-90">
                    {service.description}
                  </p>
                </div>
                
                <div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm md:text-base font-sf-pro-text">
                        <ArrowRight className="w-4 h-4 mr-2 text-white/80" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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