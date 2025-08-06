import { ArrowRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const Vision: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 overflow-hidden px-3"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-8 leading-tight font-sf-pro-display">
              Our
              <span className="block font-bold mt-2">
                Vision
              </span>
            </h2>

            <p className="text-xl text-gray-700 mb-12 leading-relaxed font-sf-pro-text">
              We envision a world where technology seamlessly integrates with
              human ambition, creating solutions that don't just meet today's
              needs but anticipate tomorrow's possibilities.
            </p>
            <button
              onClick={scrollToServices}
              className="px-8 py-4 bg-gray-900 text-white border-2 border-gray-900 rounded-full hover:bg-gray-800 hover:border-gray-800 transition-all duration-300 font-medium font-sf-pro-text flex items-center gap-2 group shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Learn more
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right side - Image */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative h-[500px] lg:h-[600px] overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/assets/images/web-development.avif"
                alt="Our Vision"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
