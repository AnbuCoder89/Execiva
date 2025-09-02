import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "./ui/Button";

const Vision: React.FC = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
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

  const imageVariants = {
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
      id="vision"
      ref={sectionRef}
      className="relative bg-white py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Column - Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider font-sf-pro-text mb-4">
                Our Vision
              </p>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight font-sf-pro-display"
              variants={itemVariants}
            >
              Shaping the future
              <span className="block font-medium mt-2">
                of digital innovation
              </span>
            </motion.h2>

            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text">
                We envision a world where technology seamlessly integrates with human potential, 
                creating solutions that not only solve today's challenges but anticipate tomorrow's opportunities.
              </p>
              
              <p className="text-base md:text-lg text-gray-500 leading-relaxed font-sf-pro-text">
                Through cutting-edge AI, intelligent automation, and data-driven insights, 
                we're building the foundation for businesses to thrive in an ever-evolving digital landscape.
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
                className="px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Learn More
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div 
            className="relative order-first lg:order-last"
            variants={imageVariants}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/image/vision/vision3.jpeg"
                alt="Our vision for the future of technology"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                loading="lazy"
              />
              
              {/* Subtle overlay for premium feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-xl opacity-60" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full blur-xl opacity-40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;