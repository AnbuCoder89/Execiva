import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Button from "./ui/Button";

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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="vision"
      className="relative bg-white text-gray-900 pt-12 pb-12"
      ref={sectionRef}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col gap-8 lg:justify-between lg:gap-24 lg:flex-row-reverse">
          
          {/* Content Column */}
          <div className={`flex w-full flex-col justify-center gap-8 lg:max-w-[700px] transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4 text-gray-900">
                {/* Eyebrow/Category */}
                <h4 className="flex w-fit text-base items-center gap-2.5 text-blue-600 uppercase font-medium font-sf-pro-text tracking-wide">
                  <p>Our Mission</p>
                </h4>
                
                {/* Main Heading */}
                <div className="pt-2">
                  <h2 className="mb-0 text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight font-sf-pro-display">
                    <p>Our Vision</p>
                  </h2>
                </div>
                
                {/* Subheading */}
                <div className="pt-2">
                  <h3 className="text-xl lg:text-2xl font-light text-gray-600 font-sf-pro-text">
                    Shaping the future of digital innovation
                  </h3>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex w-full flex-col gap-6 text-gray-900">
                <p className="text-lg leading-relaxed font-sf-pro-text">
                  To be the go-to innovation partner for businesses navigating change, solving complex problems, and turning challenges into opportunities by harnessing the transformative power of AI. We empower organizations to adapt, innovate, and thrive in an ever-evolving world.
                </p>
                
                {/* CTA Button */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    variant="vision"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="right"
                    className="px-6 py-3 h-[46px] flex-shrink-0"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className={`flex w-full items-center pt-8 md:pt-0 lg:max-w-[700px] transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="flex w-full justify-start">
              <div className="w-full overflow-hidden">
                <div className="group relative w-full overflow-hidden">
                  <img
                    src="/image/vision/vision3.jpeg"
                    alt="Our Vision"
                    className="w-full rounded-xl object-contain shadow-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Vision;