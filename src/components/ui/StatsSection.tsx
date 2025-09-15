import React, { useEffect, useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';

interface StatCounterProps {
  value: string;
  delay?: number;
}

const StatCounter: React.FC<StatCounterProps> = ({ value, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    const timer = setTimeout(() => {
      // Extract numeric part and suffix
      const numericMatch = value.match(/^(\d+(?:\.\d+)?)/);
      const suffix = value.replace(/^(\d+(?:\.\d+)?)/, '');
      
      if (numericMatch) {
        const targetNumber = parseFloat(numericMatch[1]);
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = targetNumber / steps;
        let current = 0;
        let step = 0;

        const counter = setInterval(() => {
          step++;
          current = Math.min(current + increment, targetNumber);
          
          // Format the number based on target
          let formattedNumber;
          if (targetNumber >= 1000) {
            formattedNumber = Math.floor(current).toLocaleString();
          } else if (targetNumber % 1 !== 0) {
            formattedNumber = current.toFixed(1);
          } else {
            formattedNumber = Math.floor(current).toString();
          }
          
          setDisplayValue(formattedNumber + suffix);
          
          if (step >= steps || current >= targetNumber) {
            setDisplayValue(value);
            setHasAnimated(true);
            clearInterval(counter);
          }
        }, duration / steps);

        return () => clearInterval(counter);
      } else {
        setDisplayValue(value);
        setHasAnimated(true);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, value, delay, hasAnimated]);

  return (
    <span ref={counterRef}>
      {displayValue}
    </span>
  );
};

interface Stat {
  number: string | number;
  label: string;
}

interface StatsSectionProps {
  stats: Stat[];
  className?: string;
}

const StatsSection: React.FC<StatsSectionProps> = ({ stats, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: "blur(8px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      className={`py-16 md:py-20 bg-white ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              <motion.div 
                className="text-6xl md:text-7xl font-bold text-gray-900 mb-4 font-sf-pro-display"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.8 + (index * 0.1), 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100
                }}
              >
                <StatCounter value={stat.number.toString()} delay={index * 100} />
              </motion.div>
              <motion.div 
                className="text-base md:text-lg text-gray-700 leading-tight font-sf-pro-text"
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.0 + (index * 0.1), 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring"
                }}
              >
                <p>{stat.label}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default StatsSection;