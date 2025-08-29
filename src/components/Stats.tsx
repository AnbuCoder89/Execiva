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
        className="relative bg-white text-gray-900 pt-12 pb-6 sm:pt-16 sm:pb-8 md:pt-20 md:pb-12 lg:pt-24 lg:pb-16"
        ref={sectionRef}
      >
        <div className="w-full max-w-7xl flex flex-col gap-8 items-center justify-center text-center mx-auto px-8">
          <div className="flex w-full flex-col gap-2 max-w-[970px] items-center">
            <h2 className={`leading-tight text-gray-900 mb-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium font-sf-pro-display transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              The numbers behind our rise.
            </h2>
          </div>
          <div className="flex w-full flex-col gap-8 justify-center items-center max-w-[970px]">
            <div className={`flex flex-col gap-6 text-gray-600 items-center text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl transition-all duration-1000 ${
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
      <section className="relative bg-white text-gray-900 pt-6 pb-12 sm:pt-8 sm:pb-16 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24">
        <div className="w-full max-w-7xl mx-auto px-8">
          <div className="grid w-full grid-cols-2 gap-px bg-gray-200 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="flex w-full flex-col items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 bg-white min-h-[160px] sm:min-h-[200px] md:min-h-[240px] lg:min-h-[280px] xl:min-h-[320px] 2xl:min-h-[360px]"
              >
                <div className={`flex mb-4 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`} style={{ transitionDelay: `${(stat.animationDelay || 0) + 200}ms` }}>
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light text-gray-900 font-sf-pro-display leading-none">
                    {stat.value}
                  </div>
                </div>
                <div className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-center text-gray-600 font-sf-pro-text transition-all duration-1000 leading-relaxed px-2 ${
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