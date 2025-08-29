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
      className="relative w-full min-h-screen flex items-center justify-center bg-white"
      ref={sectionRef}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Content Column - Left on desktop, top on mobile */}
          <div className={`w-full lg:w-1/2 flex items-center justify-center lg:justify-start transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="max-w-lg lg:max-w-[45rem] text-center lg:text-left">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight font-sf-pro-display">
                <span className="font-bold">Case Studies</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text mb-8 text-justify">
                Our case studies showcase how we've partnered with businesses to transform their digital presence and drive remarkable growth. Through innovative AI-driven solutions, automation, and data strategies, we solve complex challenges and turn them into scalable opportunities—helping our clients adapt faster, operate smarter, and achieve measurable success.
              </p>
              <div className="pt-4">
                <Button
                  variant="vision"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  onClick={() => navigate('/case-studies')}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* Image Column - Right on desktop, bottom on mobile */}
          <div className={`w-full lg:w-1/2 flex items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '200ms' }}>
            <img
              src="/image/case-studies/case-1.jpeg"
              alt="Case Studies"
              className="w-[85%] h-auto object-contain rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;