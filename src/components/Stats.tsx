import React, { useEffect, useRef, useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };
  const StatCounter: React.FC<{ value: string; delay?: number }> = ({ value, delay = 0 }) => {
    const [displayValue, setDisplayValue] = useState('0');
    const [hasAnimated, setHasAnimated] = useState(false);

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

    return <span>{displayValue}</span>;
  };

  return (
    <>
      {/* Header Section */}
      <motion.section 
        className="relative w-full min-h-screen flex flex-col justify-center py-20 bg-white lg:min-h-screen md:min-h-[50vh]"
        ref={sectionRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Header Text */}
        <motion.div 
          className="w-full text-center mb-16"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-4 leading-tight font-sf-pro-display"
            variants={itemVariants}
          >
            The numbers behind our rise
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
            variants={itemVariants}
          >
            Our journey is built on innovation, partnerships, and measurable results. These numbers reflect our growth and commitment to being the pioneers of digital transformation.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="w-full"
          variants={itemVariants}
        >
          <motion.div 
            className="grid w-full grid-cols-2 gap-px bg-black-500 lg:grid-cols-4"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="flex w-full flex-col items-center justify-center p-6 bg-white min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:min-h-[260px] xl:min-h-[280px]"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03,
                  y: -8,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="flex mb-4"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.8 + (index * 0.1), 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 font-sf-pro-display leading-none">
                    <StatCounter value={stat.value} delay={stat.animationDelay} />
                  </div>
                </motion.div>
                <motion.div 
                  className="text-sm md:text-base lg:text-lg text-center text-gray-600 font-sf-pro-text leading-relaxed px-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1.0 + (index * 0.1), 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    type: "spring"
                  }}
                >
                  <p>{stat.label}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Stats;