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
      <div className="w-full px-4 sm:px-6 md:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-12">
          
          {/* Left Column - Text Content */}
          <div className="w-full sm:w-1/2 flex items-center justify-start">
            <div className="max-w-lg text-center sm:text-left">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight font-sf-pro-display">
                Case Studies
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text mb-8">
                Our case studies showcase how we've partnered with businesses to transform their digital presence and drive remarkable growth. Through innovative AI-driven solutions, automation, and data strategies, we solve complex challenges and turn them into scalable opportunities—helping our clients adapt faster, operate smarter, and achieve measurable success.
              </p>
              <div>
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

          {/* Right Column - Image */}
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            <img
              src="/image/case-studies/case-1.jpeg"
              alt="Case Studies"
              className="w-full h-auto max-w-md rounded-2xl shadow-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;