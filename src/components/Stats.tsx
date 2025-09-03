import React, { useEffect, useRef, useState } from 'react';

interface StatItem {
  value: string;
  label: string;
  animationDelay?: number;
}

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    {
      value: "500+",
      label: "Experts supporting our clients",
      animationDelay: 0
    },
    {
      value: "2.1B",
      label: "Websites made composable",
      animationDelay: 200
    },
    {
      value: "98%",
      label: "Client Retention Rate",
      animationDelay: 400
    },
    {
      value: "50M+",
      label: "Dollars raised by our clients",
      animationDelay: 600
    }
  ];

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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Header Section */}
      <section 
        className="relative w-full min-h-screen flex flex-col justify-center py-20 bg-white lg:min-h-screen md:min-h-[50vh]"
        ref={sectionRef}
      >
        {/* Header Text */}
        <div className="w-full text-center mb-16">
          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-4 leading-tight font-sf-pro-display transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            The numbers behind our rise
            </h2>
          <p className={`text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '200ms' }}>
            Our journey is built on innovation, partnerships, and measurable results. These numbers reflect our growth and commitment to being the pioneers of digital transformation.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="w-full">
          <div className="grid w-full grid-cols-2 gap-px bg-gray-200 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="flex w-full flex-col items-center justify-center p-6 bg-white min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:min-h-[260px] xl:min-h-[280px]"
              >
                <div className={`flex mb-4 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`} style={{ transitionDelay: `${(stat.animationDelay || 0) + 200}ms` }}>
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 font-sf-pro-display leading-none">
                    {stat.value}
                  </div>
                </div>
                <div className={`text-sm md:text-base lg:text-lg text-center text-gray-600 font-sf-pro-text transition-all duration-1000 leading-relaxed px-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`} style={{ transitionDelay: `${(stat.animationDelay || 0) + 400}ms` }}>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;