import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from "lucide-react";
import Button from "./ui/Button";

const CaseStudies: React.FC = () => {
  const navigate = useNavigate();

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
    <>
      {/* Header Section */}
      <section 
        className="relative bg-white text-gray-900 pt-12 pb-6 sm:pt-16 sm:pb-8 md:pt-20 md:pb-12 lg:pt-24 lg:pb-16"
      >
        <div className="w-full max-w-7xl flex flex-col gap-8 items-center justify-center text-center mx-auto px-8">
          <div className="flex w-full flex-col gap-2 max-w-[970px] items-center">
            <motion.h2 
              className="leading-tight text-gray-900 mb-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium font-sf-pro-display"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              Real results from real partnerships
            </motion.h2>
          </div>
          <div className="flex w-full flex-col gap-8 justify-center items-center max-w-[970px]">
            <motion.div 
              className="flex flex-col gap-6 text-gray-600 items-center text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="font-sf-pro-text">
                Our case studies showcase how we've partnered with businesses to transform their digital presence and drive remarkable growth through innovative AI-driven solutions, automation, and data strategies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Case Studies Section */}
      <section
        id="case-studies"
        className="relative bg-white text-gray-900 pt-6 pb-12 sm:pt-8 sm:pb-16 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 min-h-[50vh] md:min-h-screen lg:min-h-screen xl:min-h-screen"
      >
        <div className="w-full max-w-7xl mx-auto px-8">
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 items-center h-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Left Column - Image */}
            <motion.div 
              className="relative"
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
            <div className="space-y-8 order-first lg:order-last">
              <motion.div 
                className="space-y-6"
                variants={itemVariants}
              >
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text">
                  Through innovative AI-driven solutions, automation, and data strategies, 
                  we solve complex challenges and turn them into scalable opportunities.
                </p>
                
                <p className="text-base md:text-lg text-gray-500 leading-relaxed font-sf-pro-text">
                  Discover how we've partnered with businesses to transform their digital presence 
                  and drive remarkable growth across industries.
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
                  onClick={() => navigate('/case-studies')}
                  className="px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Explore Case Studies
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;