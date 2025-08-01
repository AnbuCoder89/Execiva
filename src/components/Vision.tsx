import React, { useEffect, useRef, useState } from 'react';
import { Target, Lightbulb, Rocket } from 'lucide-react';

const Vision: React.FC = () => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const visionItems = [
    {
      icon: Target,
      title: "Precision Focus",
      description: "Every decision guided by strategic clarity and unwavering commitment to excellence."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Pioneering solutions that transform industries and redefine what's possible."
    },
    {
      icon: Rocket,
      title: "Limitless Growth",
      description: "Empowering businesses to transcend boundaries and achieve unprecedented success."
    }
  ];

  return (
    <section id="vision" className="py-32 bg-gradient-to-b from-white to-gray-50 w-full overflow-x-hidden" ref={sectionRef}>
      <div className="w-full max-w-[100vw] px-6">
        {/* Split Screen Layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-center px-10">
          {/* Left Side - Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
              Our
              <span className="block font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Vision
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              We envision a world where technology seamlessly integrates with human ambition,
              creating solutions that don't just meet today's needs but anticipate tomorrow's possibilities.
            </p>

            <div className="space-y-8">
              {visionItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <item.icon size={24} className="text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Main Visual Container */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-12 shadow-xl">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="w-8 h-8 bg-orange-500 rounded-full mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded mb-2"></div>
                    <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="w-8 h-8 bg-gray-400 rounded-full mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded mb-2"></div>
                    <div className="h-2 bg-gray-100 rounded w-2/3"></div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="flex items-center justify-center h-32">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl"></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <Target size={32} className="text-orange-500" />
              </div>
              <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-20 h-20 bg-orange-500 rounded-2xl shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;