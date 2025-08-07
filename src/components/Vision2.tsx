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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column - Mockup Layout */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative h-[600px] w-full">
              
              {/* Main Case Studies Header Card */}
              <div className="absolute top-0 left-0 w-80 h-32 bg-white rounded-lg shadow-lg border border-gray-100 z-10">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">Case Studies</h3>
                  <p className="text-gray-600 text-sm">We have got a lot of case studies</p>
                  <p className="text-blue-600 text-sm font-medium mt-2">Our projects make us proud</p>
                </div>
              </div>

              {/* Blue Statistics Card */}
              <div className="absolute top-40 left-0 w-48 h-64 bg-blue-600 rounded-lg shadow-xl text-white z-20">
                <div className="p-6">
                  <div className="text-sm mb-4">Started</div>
                  <div className="text-4xl font-bold mb-2">19%</div>
                  <div className="text-xs opacity-90 mb-6">
                    Faster And Predictive Scaling<br/>
                    Quality & Customer Experience<br/>
                    24/7 phone and email support
                  </div>
                  <button className="bg-orange-400 text-white px-4 py-2 rounded text-sm font-medium hover:bg-orange-500 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Small Portfolio Cards Grid */}
              <div className="absolute top-48 left-52 grid grid-cols-2 gap-2 w-32">
                <div className="w-14 h-10 bg-blue-900 rounded"></div>
                <div className="w-14 h-10 bg-yellow-600 rounded"></div>
                <div className="w-14 h-10 bg-gray-800 rounded"></div>
                <div className="w-14 h-10 bg-gray-300 rounded"></div>
              </div>

              {/* Main Laptop Mockup */}
              <div className="absolute top-32 right-0 w-96 h-64 z-30">
                {/* Laptop Base */}
                <div className="w-full h-full bg-gray-900 rounded-lg shadow-2xl transform perspective-1000 rotate-y-12">
                  {/* Screen */}
                  <div className="w-full h-48 bg-gray-800 rounded-t-lg p-1">
                    <div className="w-full h-full bg-white rounded-t-lg overflow-hidden">
                      {/* Browser Chrome */}
                      <div className="h-6 bg-gray-100 flex items-center px-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      {/* Content */}
                      <div className="p-4 bg-gray-50 h-full">
                        <div className="bg-orange-100 p-4 rounded text-center">
                          <h4 className="font-bold text-gray-800 mb-2">Subscription licensing unlocks spike in IT orders</h4>
                          <div className="text-xs text-gray-600">
                            <div className="mb-2">Overview</div>
                            <div className="text-left space-y-1">
                              <div>• Strong Trend Towards SaaS</div>
                              <div>• Subscription Licensing</div>
                              <div>• Spike in IT Orders</div>
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

              {/* Top Right Floating Card */}
              <div className="absolute top-0 right-16 w-40 h-28 bg-white rounded-lg shadow-lg border border-gray-100 z-40">
                <div className="p-3">
                  <div className="w-full h-12 bg-blue-400 rounded mb-2 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-gray-800">Parallax IT Transformations</div>
                  <div className="text-xs text-gray-500 mt-1">Case Study</div>
                </div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute top-20 right-20 w-32 h-32 bg-blue-50 rounded-full opacity-30 -z-10"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-orange-50 rounded-full opacity-40 -z-10"></div>
              <div className="absolute top-60 left-60 w-16 h-16 bg-gray-100 rounded-full opacity-50 -z-10"></div>
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
              <span className="text-blue-600 font-bold">09+</span> Technological
              <span className="block font-bold mt-2 text-gray-900">
                Case Study Layouts
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed font-sf-pro-text">
              In general, analyses of famous case studies help your clients, 
              partners, and visitors have a better understanding of what is 
              going on in the market. Your helpful advice can also be 
              beneficial for audiences, which keeps them coming back for 
              more.
            </p>

            <div className="pt-4">
              <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-sf-pro-text">
                Find out more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision2;