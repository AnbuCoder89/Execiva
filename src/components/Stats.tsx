import React, { useEffect, useRef, useState } from 'react';

interface StatItem {
  value: string;
  label: string;
  animationDelay?: number;
}

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState<boolean[]>([false, false, false, false]);
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
            // Trigger stat animations with delays
            stats.forEach((_, index) => {
              setTimeout(() => {
                setAnimatedStats(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, stats[index].animationDelay || 0);
            });
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

  const AnimatedStat: React.FC<{ value: string; isAnimated: boolean }> = ({ value, isAnimated }) => {
    return (
      <div className="flex text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-light text-gray-900">
        {value.split('').map((char, index) => (
          <div
            key={index}
            className={`relative overflow-hidden transition-all duration-1000 ${
              isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ 
              transitionDelay: `${index * 100}ms`,
              width: char === '.' ? '20px' : char === '+' ? '40px' : char === '%' ? '50px' : char === 'B' ? '60px' : char === 'M' ? '70px' : '50px'
            }}
          >
            <span className="block font-sf-pro-display">
              {char}
            </span>
          </div>
        ))}
      </div>
    );
  };

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
        <div className="container flex w-full flex-col gap-14 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid w-full grid-cols-2 gap-px bg-gray-200 lg:flex lg:gap-0">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="flex w-full flex-col items-center p-6 bg-white lg:p-8 lg:shrink-0 lg:grow lg:basis-0"
              >
                <div className="flex mb-4">
                  <AnimatedStat value={stat.value} isAnimated={animatedStats[index]} />
                </div>
                <div className={`text-base text-center text-gray-600 sm:text-lg lg:text-xl font-sf-pro-text transition-all duration-1000 ${
                  animatedStats[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`} style={{ transitionDelay: `${(stat.animationDelay || 0) + 500}ms` }}>
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