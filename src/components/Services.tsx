import React, { useEffect, useRef, useState } from 'react';
import { Code, Smartphone, Palette, Cloud, ShoppingCart, Brain, Shield, Settings, Blocks, BarChart } from 'lucide-react';

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
      description: 'Creating modern, responsive websites with cutting-edge technologies and performance optimization.',
      icon: Code,
    },
    {
      title: 'Mobile Apps',
      description: 'Building native and cross-platform mobile applications for iOS and Android platforms.',
      icon: Smartphone,
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive and beautiful user experiences that engage and convert visitors.',
      icon: Palette,
    },
    {
      title: 'Cloud Solutions',
      description: 'Implementing scalable cloud infrastructure and services for modern business needs.',
      icon: Cloud,
    },
    {
      title: 'E-commerce Development',
      description: 'Building high-performance online stores with secure payment systems and inventory management.',
      icon: ShoppingCart,
    },
    {
      title: 'AI & Machine Learning',
      description: 'Developing intelligent solutions for automation and predictive insights using advanced AI.',
      icon: Brain,
    },
    {
      title: 'Cybersecurity',
      description: 'Protecting systems and data from digital threats with comprehensive security solutions.',
      icon: Shield,
    },
    {
      title: 'DevOps & Automation',
      description: 'Streamlining deployment pipelines with CI/CD and infrastructure as code practices.',
      icon: Settings,
    },
    {
      title: 'Blockchain Solutions',
      description: 'Building decentralized applications and smart contract systems for modern businesses.',
      icon: Blocks,
    },
    {
      title: 'Data Analytics',
      description: 'Turning raw data into actionable business insights through advanced analytics and visualization.',
      icon: BarChart,
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full min-h-screen flex items-center justify-center bg-gray-50"
      ref={sectionRef}
    >
      <div className="w-full flex flex-col lg:flex-row items-center justify-center">
        {/* Left side - Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-end">
          <div className="max-w-lg lg:max-w-[45rem] text-center lg:text-left px-4">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight font-sf-pro-display">
              <span className="font-bold">Our Services</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text mb-8 text-justify">
              We offer comprehensive digital solutions that transform businesses and drive growth. From web development to AI implementation, our expert team delivers cutting-edge technology solutions tailored to your unique needs.
            </p>
          </div>
        </div>

        {/* Right side - Services Grid */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-10">
          <div className="w-full max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                      <service.icon size={24} className="text-gray-700" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center font-sf-pro-display">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed font-sf-pro-text text-center text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;