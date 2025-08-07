import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Vision2: React.FC = () => {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="vision2"
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 overflow-hidden bg-gray-50"
    >
      <div className="px-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          
          {/* Left Column - Mockup Layout */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative h-[600px] w-full">
              
              {/* Main Vision Header Card */}
              <div className="absolute top-0 left-0 w-80 h-32 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Vision</h3>
                  <p className="text-gray-600 text-sm">Transforming ideas into reality</p>
                  <p className="text-gray-700 text-sm font-medium mt-2">Innovation drives our future</p>
                </div>
              </div>

              {/* Beige Statistics Card */}
              <div className="absolute top-40 left-0 w-48 h-64 bg-beige rounded-lg shadow-xl text-gray-800 z-20">
                <div className="p-6">
                  <div className="text-sm mb-4 text-gray-600">Innovation</div>
                  <div className="text-4xl font-bold mb-2 text-gray-800">100%</div>
                  <div className="text-xs text-gray-600 mb-6">
                    Future-Ready Solutions<br/>
                    Seamless User Experience<br/>
                    Continuous Innovation Support
                  </div>
                  <button className="bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-700 transition-colors">
                    Explore Vision
                  </button>
                </div>
              </div>

              {/* Small Vision Cards Grid */}
              <div className="absolute top-48 left-52 grid grid-cols-2 gap-2 w-32">
                <div className="w-14 h-10 bg-gray-800 rounded"></div>
                <div className="w-14 h-10 bg-beige rounded"></div>
                <div className="w-14 h-10 bg-light-gray rounded"></div>
                <div className="w-14 h-10 bg-gray-400 rounded"></div>
              </div>

              {/* Main Laptop Mockup */}
              <div className="absolute top-32 right-0 w-96 h-64 z-30">
                {/* Laptop Base */}
                <div className="w-full h-full bg-gray-900 rounded-lg shadow-2xl transform perspective-1000 rotate-y-12">
                  {/* Screen */}
                  <div className="w-full h-48 bg-gray-800 rounded-t-lg p-1">
                    <div className="w-full h-full bg-white rounded-t-lg overflow-hidden">
                      {/* Browser Chrome */}
                      <div className="h-6 bg-light-gray flex items-center px-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      {/* Content */}
                      <div className="p-4 bg-light-gray h-full">
                        <div className="bg-beige p-4 rounded text-center">
                          <h4 className="font-bold text-gray-800 mb-2">Vision-driven solutions unlock business potential</h4>
                          <div className="text-xs text-gray-600">
                            <div className="mb-2">Our Approach</div>
                            <div className="text-left space-y-1">
                              <div>• Innovation-First Mindset</div>
                              <div>• User-Centric Design</div>
                              <div>• Future-Ready Technology</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Laptop Keyboard */}
                  <div className="h-16 bg-gray-700 rounded-b-lg"></div>
                </div>
              </div>

              {/* Top Right Vision Card */}
              <div className="absolute top-0 right-16 w-40 h-28 bg-white rounded-lg shadow-lg border border-gray-200 z-40">
                <div className="p-3">
                  <div className="w-full h-12 bg-gray-300 rounded mb-2 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-gray-800">Future Vision Platform</div>
                  <div className="text-xs text-gray-500 mt-1">Innovation Hub</div>
                </div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute top-20 right-20 w-32 h-32 bg-light-gray rounded-full opacity-30 -z-10"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-beige rounded-full opacity-40 -z-10"></div>
              <div className="absolute top-60 left-60 w-16 h-16 bg-gray-200 rounded-full opacity-50 -z-10"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight font-sf-pro-display">
              <span className="text-gray-800 font-bold">Our</span> Vision for
              <span className="block font-bold mt-2 text-gray-800">
                Tomorrow's Solutions
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed font-sf-pro-text">
              We envision a future where technology seamlessly integrates with 
              human needs, creating solutions that are not just functional but 
              transformative. Our vision drives us to build platforms that 
              anticipate tomorrow's challenges while solving today's problems 
              with elegance and innovation.
            </p>

            <div className="pt-4">
              <button className="px-8 py-4 bg-gray-900 text-white border-2 border-gray-900 rounded-full hover:bg-gray-800 hover:border-gray-800 transition-all duration-300 font-medium font-sf-pro-text flex items-center gap-2 group shadow-lg hover:shadow-xl transform hover:scale-105">
                Explore Our Vision
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision2;