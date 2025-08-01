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
    return () => observer.disconnect();
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
      className="py-20 md:py-32 bg-gradient-to-b from-light-gray to-beige overflow-x-hidden"
      ref={sectionRef}
    >
      {/* Container with max width */}
      <div className="w-full max-w-[100vw] px-6">
        {/* Header section */}
        <div className="text-center mb-16 md:mb-24">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 transition-all duration-1000 font-sf-pro-display ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our <span className="block font-sf-pro-display-bold font-bold mt-2">Services</span>
          </h2>
          <p
            className={`text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 font-sf-pro-text ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            From concept to launch, we provide end-to-end solutions that transform your vision into reality.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group h-100 max-auto bg-cover bg-center shadow-xl relative overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                backgroundImage: `url('${service.imageUrl}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 transition-all duration-500 group-hover:opacity-90" />
              <div className="relative z-10 h-full flex flex-col justify-between p-8 text-white">
                <div>
                  <h3 className="text-2xl md:text-3xl font-sf-pro-display-bold font-bold mb-4 transition-transform duration-500 group-hover:translate-y-1">
                    {service.title}
                  </h3>
                  <p className="text-white/90 mb-6 font-sf-pro-text-light text-base md:text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div>
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feat) => (
                      <li 
                        key={feat} 
                        className="flex items-center text-sm md:text-base font-sf-pro-text-light text-white/90 group-hover:text-white transition-colors duration-300"
                      >
                        <div className="w-1.5 h-1.5 bg-white/80 rounded-full mr-3 group-hover:bg-white transition-colors duration-300" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <button className="inline-flex items-center px-6 py-3 border-2 border-white/50 text-white rounded-full font-sf-pro-text-medium text-sm md:text-base tracking-wide transition-all duration-300 hover:bg-white hover:text-black hover:border-white group-hover:scale-105">
                    <span>Learn More</span>
                    <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
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
