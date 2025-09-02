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
    <section
      id="case-studies"
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
            <motion.div variants={itemVariants}>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider font-sf-pro-text mb-4">
                Success Stories
              </p>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight font-sf-pro-display"
              variants={itemVariants}
            >
              Real results from
              <span className="block font-medium mt-2">
                real partnerships
              </span>
            </motion.h2>

            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text">
                Our case studies showcase how we've partnered with businesses to transform 
                their digital presence and drive remarkable growth.
              </p>
              
              <p className="text-base md:text-lg text-gray-500 leading-relaxed font-sf-pro-text">
                Through innovative AI-driven solutions, automation, and data strategies, 
                we solve complex challenges and turn them into scalable opportunities.
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