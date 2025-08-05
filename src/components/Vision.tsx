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

  const scrollToVision = () => {
    const visionSection = document.getElementById("vision");
    if (visionSection) {
      visionSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="relative w-full py-4 md:py-4 overflow-hidden px-3"
    >
      {/* Background Image with overlay */}
      <div className="relative w-full max-w-[100vw] h-[900px] overflow-hidden rounded-3xl">
        {/* Image */}
        <img
          src="/assets/images/web-development.avif"
          alt="Background"
          className="w-full h-full object-cover object-left scale-[1.2]"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Text content over image */}
        <div
          className={`absolute right-12 top-1/2 -translate-y-1/2 text-white max-w-xl z-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight font-sf-pro-display drop-shadow">
            Our
            <span className="block font-bold mt-2 drop-shadow">
              Vision
            </span>
          </h2>

          <p className="text-xl text-white mb-12 leading-relaxed drop-shadow-md">
            We envision a world where technology seamlessly integrates with
            human ambition, creating solutions that don't just meet today's
            needs but anticipate tomorrow's possibilities.
          </p>

          <button
            onClick={scrollToVision}
            className="px-8 py-4 bg-white text-gray-900 border-2 border-white rounded-full hover:bg-gray-100 transition-all duration-300 font-medium font-sf-pro-text flex items-center gap-2 group shadow-lg"
          >
            Learn More
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Vision;
