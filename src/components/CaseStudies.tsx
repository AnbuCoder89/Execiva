import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

const CaseStudies: React.FC = () => {
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

  return (
    <section id="case-studies" className="py-20 px-3" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Left side - Visual Elements */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              {/* Main showcase image */}
              <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Case Study Showcase"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 w-32 h-24 bg-white rounded-lg shadow-lg p-4 transform rotate-3">
                <div className="text-xs text-gray-600 mb-1">Success Rate</div>
                <div className="text-2xl font-bold text-blue-600">98%</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-36 h-28 bg-blue-600 rounded-lg shadow-lg p-4 text-white transform -rotate-2">
                <div className="text-xs opacity-90 mb-1">Projects Completed</div>
                <div className="text-2xl font-bold">150+</div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '200ms' }}>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-8 leading-tight font-sf-pro-display">
              Case
              <span className="block font-bold mt-2">
                Studies
              </span>
            </h2>

            <p className="text-xl text-gray-700 mb-12 leading-relaxed font-sf-pro-text">
              Our projects make us proud. We've helped businesses transform their digital presence and achieve remarkable growth through innovative solutions and strategic thinking.
            </p>

            <button className="px-8 py-4 bg-blue-600 text-white border-2 border-blue-600 rounded-full hover:bg-blue-700 hover:border-blue-700 transition-all duration-300 font-medium font-sf-pro-text flex items-center gap-2 group shadow-lg hover:shadow-xl transform hover:scale-105">
              Learn More
              <ExternalLink size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;