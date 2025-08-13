import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from "lucide-react";
import Button from "./ui/Button";


const CaseStudies: React.FC = () => {
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
      id="case-studies"
      className="relative w-full min-h-screen flex items-center justify-center bg-gray-50"
      ref={sectionRef}
    >
      <div className="w-full flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full lg:w-1/2 flex items-center justify-end">
          <div className="max-w-lg lg:max-w-[45rem] text-center lg:text-left px-4">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight font-sf-pro-display">
              <span className="font-bold">Case Studies</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text mb-8 text-justify">
Our case studies showcase how we’ve partnered with businesses to transform their digital presence and drive remarkable growth. Through innovative AI-driven solutions, automation, and data strategies, we solve complex challenges and turn them into scalable opportunities—helping our clients adapt faster, operate smarter, and achieve measurable success.
            </p>
            <div className="pt-4">
              <Button
                variant="vision"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
                <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-10">
          <img
            src="/assets/images/case-studies/case-1.jpeg"
            alt="Case Studies"
            className="w-[85%] h-auto object-contain rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;