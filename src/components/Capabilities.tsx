import React, { useState, useEffect, useRef } from "react";
import Button from "./ui/Button";

const Capabilities: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const capabilities = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built for performance and scalability",
      category: "Development",
      image: "/assets/images/web-development/web_development-6.jpeg",
    },
    {
      title: "Artificial Intelligence",
      description: "AI-powered solutions that automate processes and provide intelligent insights.",
      category: "AI",
      image: "/assets/images/Artificial_Intelligence.jpg",
    },
    {
      title: "Data Analytics",
      description: "Data-driven insights to help you make informed decisions and optimize your operations",
      category: "Analytics",
      image: "/assets/images/Data_Analytics.jpg",
    },
    {
      title: "Digital Strategy",
      description: "Comprehensive digital transformation strategies tailored to your business goals",
      category: "Strategy",
      image: "/assets/images/Digital_Statergy.jpeg",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col justify-center py-20 bg-white"
    >
      {/* Header Text */}
      <div className="w-full text-center mb-16">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-4 leading-tight font-sf-pro-display">
          Innovation is our language,
          <span className="block mt-2">
            execution is our craft
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          From AI and Data to SEO, we transform complexity into clarity, building solutions that not only solve today's challenges but also create tomorrow's opportunities.
        </p>
      </div>

      {/* Capabilities Grid */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className={`group relative w-full overflow-hidden rounded-xl 
                shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2
                h-[280px] sm:h-[320px] md:h-[350px] lg:h-[400px] xl:h-[450px]
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center rounded-xl overflow-hidden"
                style={{ backgroundImage: `url('${capability.image}')` }}
              />

              {/* Default dark gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:opacity-0 transition-opacity duration-300 rounded-xl" />

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />

              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col justify-between text-white h-full">
                {/* Category Badge */}
                <div className="flex justify-start">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium uppercase tracking-wide">
                    {capability.category}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 font-sf-pro-display leading-tight">
                      {capability.title}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed font-sf-pro-text opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      {capability.description}
                    </p>
                  </div>

                  {/* Learn More Button */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Button
                      variant="vision"
                      size="sm"
                      className="text-gray-900 bg-white/90 hover:bg-white border-white/90 hover:border-white"
                    >
                      Learn More
                    </Button>
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

export default Capabilities;