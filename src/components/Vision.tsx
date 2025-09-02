import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Vision: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      x: -60,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: 60,
      scale: 0.9,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 80,
        damping: 25,
        delay: 0.3
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      filter: "blur(8px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay: 0.5
      }
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="vision"
      className="relative bg-white py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40"
    >
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
        >
          {/* Content Column - Left on desktop, top on mobile */}
          <motion.div 
            className="space-y-6 sm:space-y-8 text-center sm:text-left order-1 lg:order-1"
            variants={contentVariants}
          >
            {/* Section Label */}
            <motion.div variants={contentVariants}>
              <p className="text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wider font-sf-pro-text mb-3 sm:mb-4">
                Our Vision
              </p>
            </motion.div>

            {/* Main Heading */}
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-tight font-sf-pro-display"
              variants={contentVariants}
            >
              Shaping tomorrow's
              <span className="block font-medium mt-1 sm:mt-2">
                digital landscape
              </span>
            </motion.h2>

            {/* Description */}
            <motion.div 
              className="space-y-4 sm:space-y-6 max-w-xl mx-auto sm:mx-0"
              variants={contentVariants}
            >
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text">
                We envision a future where technology seamlessly integrates with human potential, 
                creating extraordinary experiences that drive meaningful progress.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed font-sf-pro-text">
                Through innovative AI solutions and thoughtful design, we empower organizations 
                to transcend limitations and achieve unprecedented growth.
              </p>
            </motion.div>

            {/* Premium Learn More Button */}
            <motion.div 
              className="pt-2 sm:pt-4 flex justify-center sm:justify-start"
              variants={buttonVariants}
            >
              <motion.button
                onClick={scrollToContact}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-400 font-sf-pro-text text-sm sm:text-base overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Gradient overlay for hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-full"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                
                {/* Button content */}
                <span className="relative z-10">Learn More</span>
                <motion.div
                  className="relative z-10"
                  animate={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Column - Right on desktop, bottom on mobile */}
          <motion.div 
            className="relative order-2 lg:order-2"
            variants={imageVariants}
            style={{ y: imageY }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <motion.img
                src="/image/vision/vision3.jpeg"
                alt="Our vision for the future of technology"
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover"
                loading="lazy"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              
              {/* Subtle overlay for premium feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
            </div>
            
            {/* Decorative gradient elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full blur-xl opacity-60"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.6, 0.8, 0.6]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full blur-xl opacity-40"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
                      </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
