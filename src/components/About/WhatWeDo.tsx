import React, { useState, useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';

interface WhatWeDoProps {
  subtitle?: string;
  heading?: string;
  description?: string;
  className?: string;
}

const WhatWeDo: React.FC<WhatWeDoProps> = ({
  subtitle = "Why we do what we do",
  heading = "It's about more than just clicks",
  description = "Premium streaming TV. One-click commerce. Trusted journalism. The world's most popular audio and podcasts. All these amazing online experiences thrive on an open internet. And they're all fueled by relevant advertising.",
  className = ""
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const wordVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Split text into words for animation
  const splitTextIntoWords = (text: string) => {
    return text.split(' ').map((word, index) => (
      <motion.span
        key={index}
        className="inline-block overflow-hidden pb-1 -mb-3 mr-2"
        variants={wordVariants}
      >
        <motion.span
          className="inline-block"
          style={{ fontKerning: 'none' }}
          variants={wordVariants}
        >
          {word}
        </motion.span>
      </motion.span>
    ));
  };

  return (
    <motion.section 
      ref={sectionRef}
      className={`my-12 md:my-32 ${className}`}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-[1490px] px-4 lg:px-10 box-content mx-auto">
        <motion.div variants={containerVariants}>
          <motion.header 
            className="mx-auto text-center max-w-5xl"
            variants={itemVariants}
          >
            <motion.div 
              className="space-y-4 md:space-y-10"
              variants={containerVariants}
            >
              <motion.div 
                className="space-y-2 md:space-y-4"
                variants={itemVariants}
              >
                <motion.p 
                  className="text-sm md:text-base font-medium text-gray-600 uppercase tracking-wide font-sf-pro-text"
                  variants={itemVariants}
                >
                  {subtitle}
                </motion.p>
                
                <motion.h2 
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-tight font-sf-pro-display"
                  variants={containerVariants}
                >
                  {splitTextIntoWords(heading)}
                </motion.h2>
              </motion.div>

              <motion.div 
                className="mx-auto max-w-4xl"
                variants={itemVariants}
              >
                <motion.p 
                  className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-sf-pro-text"
                  variants={containerVariants}
                >
                  {splitTextIntoWords(description)}
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.header>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhatWeDo;