'use client';

import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

const NumbersSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const metrics = [
    {
      number: 150,
      suffix: "+",
      label: "Total Projects",
      description: "Successfully delivered across industries"
    },
    {
      number: 75,
      suffix: "+",
      label: "Clients Served",
      description: "From startups to Fortune 500 companies"
    },
    {
      number: 500,
      suffix: "TB+",
      label: "Data Processed",
      description: "Transforming raw data into insights"
    },
    {
      number: 25,
      suffix: "+",
      label: "Countries Served",
      description: "Global reach with local expertise"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 px-6 md:px-20 bg-gradient-to-br from-white via-background-light-gray to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-primary-text mb-6 leading-tight"
            data-aos="fade-up"
          >
            Our Impact in Numbers
          </h2>
          <p 
            className="text-xl text-primary-secondary max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Numbers tell a story. Here's the measurable impact we've created for our clients 
            and the data community worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="text-center group"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
                {/* Number */}
                <div className="mb-4">
                  <div className="text-5xl md:text-6xl font-bold text-primary-text group-hover:text-primary-accent transition-colors duration-300">
                    {inView && (
                      <CountUp
                        end={metric.number}
                        duration={2.5}
                        delay={index * 0.2}
                      />
                    )}
                    <span className="text-primary-accent">{metric.suffix}</span>
                  </div>
                </div>
                
                {/* Label */}
                <h3 className="text-xl font-semibold text-primary-text mb-2 uppercase tracking-wide">
                  {metric.label}
                </h3>
                
                {/* Description */}
                <p className="text-primary-secondary text-sm leading-relaxed">
                  {metric.description}
                </p>
                
                {/* Decorative Line */}
                <div className="mt-6 w-16 h-1 bg-gradient-to-r from-primary-accent to-primary-accent2 rounded-full mx-auto group-hover:w-24 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Context */}
        <div 
          className="text-center mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-bold text-primary-text mb-2">98%</h4>
              <p className="text-primary-secondary">Client Satisfaction Rate</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-primary-text mb-2">24/7</h4>
              <p className="text-primary-secondary">Support & Monitoring</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-primary-text mb-2">5 Years</h4>
              <p className="text-primary-secondary">Average Partnership Duration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;