import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from "lucide-react";
import Button from "./ui/Button";

const CaseStudies: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
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
      id="case-studies"
      className="relative bg-white text-gray-900 pt-12 pb-12"
      ref={sectionRef}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col gap-8 lg:justify-between lg:gap-24 lg:flex-row">
          
          {/* Content Column */}
          <div className={`flex w-full flex-col justify-center gap-8 lg:max-w-[700px] transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4 text-gray-900">
                {/* Eyebrow */}
                <h4 className="flex w-fit text-base items-center gap-2.5 text-black-600 uppercase font-medium font-sf-pro-text">
                  <p>Success Stories</p>
                </h4>
                
                {/* Main Heading */}
                <div className="pt-2">
                  <h2 className="mb-0 text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight font-sf-pro-display">
                    <p>Case Studies</p>
                  </h2>
                </div>
                
                {/* Subheading */}
                <div className="pt-2">
                  <h3 className="text-xl lg:text-2xl font-light text-gray-600 font-sf-pro-text">
                    Real results from real partnerships
                  </h3>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex w-full flex-col gap-6 text-gray-900">
                <p className="text-lg leading-relaxed font-sf-pro-text">
                  Our case studies showcase how we've partnered with businesses to transform their digital presence and drive remarkable growth. Through innovative AI-driven solutions, automation, and data strategies, we solve complex challenges and turn them into scalable opportunities.
                </p>
                
                {/* CTA Button */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    variant="vision"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="right"
                    onClick={() => navigate('/case-studies')}
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
                    src="/image/case-studies/case-1.jpeg"
                    alt="Case Studies"
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

export default CaseStudies;