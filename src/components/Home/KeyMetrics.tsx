import React from 'react';
import { motion, Variants } from 'framer-motion';
import StatsSection from '../ui/StatsSection';


const KeyMetrics: React.FC = () => {
  const stats = [
    {
      number: "500+",
      label: "Experts supporting our clients",
    },
    {
      number: "2.1B",
      label: "Websites made composable",
    },
    {
      number: "98%",
      label: "Client Retention Rate",
    },
    {
      number: "50M+",
      label: "Dollars raised by our clients",
    }
  ];

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

  return (
    <>
      {/* Header Section */}
      <motion.section 
        className="relative w-full flex flex-col justify-center py-10 bg-white"
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
        <StatsSection stats={stats} />
      </motion.section>
    </>
  );
};


export default KeyMetrics