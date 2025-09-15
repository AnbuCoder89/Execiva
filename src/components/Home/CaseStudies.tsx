import React, { useState, useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

const CaseStudies: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
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

  const imageVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95,
      filter: "blur(8px)"
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3
      }
    }
  };

  return (
    <section
      id="case-studies"
      ref={sectionRef}
      className="relative w-full bg-white py-20"
    >
      <div className="mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Column - Image */}
          <motion.div 
            className="relative order-first lg:order-first"
            variants={imageVariants}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/image/case-studies/case-studies.jpg"
                alt="Success stories and case studies"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                loading="lazy"
              />
              
              {/* Subtle overlay for premium feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full blur-xl opacity-60" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full blur-xl opacity-40" />
          </motion.div>

          {/* Right Column - Content */}
          <div className="space-y-8 order-last lg:order-last">
      
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight font-sf-pro-display"
              variants={itemVariants}
            >
              Real results from real partnerships
            </motion.h2>

            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text">
                Our case studies showcase how we've partnered with businesses to transform their digital presence 
                and drive remarkable growth through innovative AI-driven solutions, automation, and data strategies.
              </p>
              
              <p className="text-base md:text-lg text-gray-500 leading-relaxed font-sf-pro-text">
                Through cutting-edge technology and strategic implementation, 
                we solve complex challenges and turn them into scalable opportunities for sustainable success.
              </p>
            </motion.div>

            <motion.div 
              className="pt-4"
              variants={itemVariants}
            >
              <Button
                variant="vision"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                onClick={() => {
                  navigate('/case-studies');
                  window.scrollTo({ top: 0, behavior: 'smooth' as ScrollBehavior });
                }}
                className="px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Explore Case Studies
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;