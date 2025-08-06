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
    <section id="case-studies" className="py-10 px-3" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Left side - Visual Elements */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              {/* Main showcase image */}
              <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Case Study Showcase"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 w-32 h-24 bg-white rounded-lg shadow-md p-4 transform rotate-3 border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">Success Rate</div>
                <div className="text-2xl font-bold text-gray-700">98%</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-36 h-28 bg-light-gray rounded-lg shadow-md p-4 transform -rotate-2 border border-gray-200">
                <div className="text-xs text-gray-600 mb-1">Projects Completed</div>
                <div className="text-2xl font-bold text-gray-800">150+</div>
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

            <button className="px-8 py-4 bg-white text-gray-800 border-2 border-gray-300 rounded-full hover:bg-light-gray hover:border-gray-400 transition-all duration-300 font-medium font-sf-pro-text flex items-center gap-2 group shadow-md hover:shadow-lg transform hover:scale-105">
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