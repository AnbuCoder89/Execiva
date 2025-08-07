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
      className="relative w-full py-20 md:py-32 overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          
          {/* Left Column - Visual Mockups */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Circular Background Pattern */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-blue-50 rounded-full opacity-60"></div>
              <div className="absolute bottom-20 right-5 w-24 h-24 bg-gray-100 rounded-full opacity-80"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-100 rounded-full opacity-40"></div>
            </div>

            {/* Main Container for Mockups */}
            <div className="relative h-[500px] w-full">
              
              {/* Laptop Mockup - Main Element */}
              <div className="absolute top-0 left-0 w-80 h-52 bg-gray-900 rounded-lg shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-4 bg-gray-800 rounded-t-lg flex items-center justify-start px-3 space-x-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="p-4 h-full bg-white rounded-b-lg">
                  <div className="w-full h-8 bg-gray-100 rounded mb-3"></div>
                  <div className="space-y-2">
                    <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
                    <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
                    <div className="w-5/6 h-3 bg-gray-200 rounded"></div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="h-16 bg-blue-100 rounded"></div>
                    <div className="h-16 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Pricing Card - Floating Element */}
              <div className="absolute top-16 right-0 w-48 h-64 bg-white rounded-xl shadow-xl border border-gray-100 transform -rotate-3 hover:rotate-0 transition-transform duration-500 z-10">
                <div className="p-6 h-full">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-4"></div>
                    <h3 className="font-bold text-gray-900 mb-2">Pro Plan</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-4">$29</div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span>Unlimited Projects</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span>24/7 Support</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span>Advanced Analytics</span>
                      </div>
                    </div>
                    <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Thumbnail - Small Floating Card */}
              <div className="absolute bottom-0 left-16 w-32 h-24 bg-white rounded-lg shadow-lg border border-gray-100 transform rotate-6 hover:rotate-3 transition-transform duration-500 z-20">
                <div className="p-3 h-full">
                  <div className="w-full h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded mb-2"></div>
                  <div className="space-y-1">
                    <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
                    <div className="w-1/2 h-2 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Additional Small Card */}
              <div className="absolute bottom-10 right-20 w-24 h-20 bg-white rounded-lg shadow-md border border-gray-100 transform -rotate-12 hover:-rotate-6 transition-transform duration-500">
                <div className="p-2 h-full flex flex-col justify-center items-center">
                  <div className="w-8 h-8 bg-green-400 rounded-full mb-1"></div>
                  <div className="text-xs font-semibold text-gray-700">Success</div>
                  <div className="text-xs text-gray-500">98%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight font-sf-pro-display">
              <span className="text-blue-600 font-bold">09+</span> Technological
              <span className="block font-bold mt-2">
                Case Study <span className="text-blue-600">Layouts</span>
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-sf-pro-text">
              Discover our comprehensive collection of innovative case studies showcasing 
              cutting-edge solutions across various industries. Each layout demonstrates 
              our expertise in delivering scalable, user-centric technology solutions 
              that drive measurable business results.
            </p>

            <div className="pt-4">
              <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-sf-pro-text group">
                Find out more
                <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 font-sf-pro-display">150+</div>
                <div className="text-sm text-gray-600 font-sf-pro-text">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 font-sf-pro-display">98%</div>
                <div className="text-sm text-gray-600 font-sf-pro-text">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 font-sf-pro-display">24/7</div>
                <div className="text-sm text-gray-600 font-sf-pro-text">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision2;