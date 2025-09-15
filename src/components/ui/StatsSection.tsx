import React from 'react';

interface Stat {
  number: string | number;
  label: string;
}

interface StatsSectionProps {
  stats: Stat[];
  className?: string;
}

const StatsSection: React.FC<StatsSectionProps> = ({ stats, className = '' }) => {
  return (
    <section className={`py-16 md:py-20 bg-white ${className}`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 font-sf-pro-display">
                {stat.number}
              </div>
              <div className="text-base md:text-lg text-gray-600 leading-relaxed font-sf-pro-text">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;