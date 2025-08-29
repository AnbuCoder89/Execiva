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
        className="relative bg-white text-gray-900 pt-12 pb-12 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
        ref={sectionRef}
      >
        <div className="container flex w-full flex-col gap-8 items-center justify-center text-center mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex w-full flex-col gap-2 max-w-[970px] items-center">
            <h2 className={`leading-tight text-gray-900 mb-0 text-3xl md:text-4xl lg:text-5xl font-medium font-sf-pro-display transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              The numbers behind our rise.
            </h2>
          </div>
          <div className="flex w-full flex-col gap-8 justify-center items-center max-w-[970px]">
            <div className={`flex flex-col gap-6 text-gray-600 items-center text-center text-base lg:text-xl transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '200ms' }}>
              <p className="font-sf-pro-text">
                Our journey is built on innovation, partnerships, and measurable results. These numbers reflect our growth and commitment to being the pioneers of digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-white text-gray-900 pt-12 pb-12 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid w-full grid-cols-2 gap-px bg-gray-200 lg:grid-cols-4 lg:gap-0">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="flex w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8 bg-white min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:min-h-[320px]"
              >
                <div className={`flex mb-4 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`} style={{ transitionDelay: `${(stat.animationDelay || 0) + 200}ms` }}>
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-light text-gray-900 font-sf-pro-display">
                    {stat.value}
                  </div>
                </div>
                <div className={`text-sm sm:text-base lg:text-lg xl:text-xl text-center text-gray-600 font-sf-pro-text transition-all duration-1000 leading-relaxed ${
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