import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Capabilities: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
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
      description: 'Advanced AI algorithms and machine learning models for intelligent automation',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'CLOUD COMPUTING',
      title: 'Scalable Cloud Infrastructure',
      description: 'Robust cloud solutions for enterprise-grade applications',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'DATA SCIENCE',
      title: 'Advanced Data Analytics',
      description: 'Transform raw data into actionable business insights',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'SECURITY',
      title: 'Enterprise Cybersecurity',
      description: 'Comprehensive security solutions for digital protection',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'INTERNET OF THINGS',
      title: 'Smart IoT Solutions',
      description: 'Connected devices and intelligent automation systems',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'BLOCKCHAIN',
      title: 'Blockchain Development',
      description: 'Decentralized solutions and smart contract development',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'MOBILE TECHNOLOGY',
      title: 'Cross-Platform Mobile Apps',
      description: 'Native and hybrid mobile applications for all platforms',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'DEVOPS',
      title: 'DevOps & CI/CD Automation',
      description: 'Streamlined development workflows and automated deployments',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    }
  ];

  const cardsPerSlide = 4;
  const totalSlides = Math.ceil(capabilities.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentCards = () => {
    const startIndex = currentSlide * cardsPerSlide;
    return capabilities.slice(startIndex, startIndex + cardsPerSlide);
  };

  return (
    <section id="capabilities" className="w-full py-20 md:py-32 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-light text-gray-900 mb-4 transition-all duration-1000 font-sf-pro-display ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Our
            <span className="block font-bold mt-2">
              Capabilities
            </span>
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden">
          {/* Cards Grid */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              width: `${totalSlides * 100}%`,
              gridTemplateColumns: `repeat(${capabilities.length}, 1fr)`
            }}
          >
            {capabilities.map((capability, index) => (
              <div
                key={capability.title}
                className={`group relative w-full max-w-[350px] mx-auto aspect-[5/7] overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl transform rounded-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{
                  transitionDelay: `${(index % cardsPerSlide) * 50}ms`,
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
                  <span className="px-4 py-2 bg-gray-800/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/20 font-sf-pro-text">
                    {capability.category}
                  </span>
                </div>
                
                {/* Article Card Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="bg-white/60 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-lg border border-white/30 transition-all duration-300 group-hover:bg-white/70 group-hover:backdrop-blur-lg">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 leading-tight mb-2 font-sf-pro-display">
                      {capability.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-sf-pro-text">
                      {capability.description.length > 60 
                        ? `${capability.description.substring(0, 60)}...` 
                        : capability.description
                      }
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
          disabled={currentSlide === 0}
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
          disabled={currentSlide === totalSlides - 1}
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-gray-800 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;