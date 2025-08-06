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
      className="relative w-full py-10 overflow-hidden px-3"
      ref={sectionRef}
    >
      {/* Container with max width */}
      <div className="w-full max-w-[100vw] p-3">
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px] max-auto bg-cover bg-center shadow-xl relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{
                backgroundImage: `url('${service.imageUrl}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                transitionDelay: `${index * 100}ms`,
              }}
            >

              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 transition-all duration-500 group-hover:opacity-90 flex items-center justify-center" />
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 md:p-10 text-white">
                <div className="flex flex-col items-center">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight font-sf-pro-display drop-shadow text-center">
                    {service.title.split(' ')[0]}
                    <span className="block font-bold mt-2 drop-shadow">
                      {service.title.split(' ').slice(1).join(' ')}
                    </span>
                  </h3>
                  <p className="text-white/90 mb-4 font-sf-pro-text-light text-lg md:text-xl leading-relaxed text-center">
                    {service.description}
                  </p>
                  <div className="w-full flex justify-center">
                    <button className="inline-flex items-center px-6 py-3 border-2 border-white/50 text-white rounded-full font-sf-pro-text-medium text-sm md:text-base tracking-wide transition-all duration-300 hover:bg-white hover:text-black hover:border-white group-hover:scale-105">
                      <span>Learn More</span>
                      <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
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
