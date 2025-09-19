import React, { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { WhatWeDo } from '../components/About';
import CTA from '../components/ui/CTA';
import { ParallaxScrollSecond } from "../components/ui/parallax-scroll";
import { HoverEffect } from "../components/ui/card-hover-effect";

const AboutUs: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About Us - Execiva | Your Technology Partner';
  }, []);

  const handleGetStarted = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const images = [
    "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2640&q=80",
    "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  ];

  const projects = [
    {
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges and drive meaningful progress."
    },
    {
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering results that exceed expectations and create lasting value."
    },
    {
      title: "Transparency",
      description: "We believe in open communication, honest feedback, and building trust through every interaction and project milestone."
    },
    {
      title: "Quality Excellence",
      description: "We maintain the highest standards in everything we deliver, ensuring robust, scalable, and reliable solutions."
    },
    {
      title: "Continuous Learning",
      description: "We stay ahead of industry trends and continuously evolve our skills to provide the most effective solutions."
    },
    {
      title: "Partnership Mindset",
      description: "We work as an extension of your team, collaborating closely to understand your vision and achieve your goals."
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <motion.section
        className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-beige to-white"
        variants={itemVariants}
      >
        <div className="mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight font-sf-pro-display"
              variants={itemVariants}
            >
              About <span className="font-medium">Execiva</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 leading-relaxed font-sf-pro-text mb-8"
              variants={itemVariants}
            >
              We're more than a technology company. We're your partners in digital transformation,
              committed to simplifying complexity and amplifying your business potential.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <button
                onClick={handleGetStarted}
                className="text-gray-900 border-2 shadow-lg hover:shadow-xl transform hover:scale-105 focus:ring-gray-500 bg-[#f4f3ee] border-[#f4f3ee] hover:bg-[#ebe8dd] hover:border-[#ebe8dd] px-8 py-4 text-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full font-sf-pro-text"
              >
                Get Started
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* What We Do Section */}
      <motion.div variants={itemVariants}>
        <WhatWeDo
          subtitle="Our Mission"
          heading="Technology that transforms businesses"
          description="We believe in the power of technology to transform businesses and create meaningful connections. Our expertise spans AI, web development, SEO, and data analytics, enabling us to deliver comprehensive solutions that drive real results. Every project we undertake is guided by our commitment to excellence, innovation, and your success."
        />
      </motion.div>

      {/* Values Section */}
      <motion.section
        className="py-8 md:py-12"
        variants={itemVariants}
      >
        <div className="mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight font-sf-pro-display mb-6">
              Our Story
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text max-w-3xl mx-auto">
              From concept to execution, we're dedicated to creating digital experiences that matter. Explore the journey that defines who we are.
            </p>
            <ParallaxScrollSecond images={images} />
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="py-8 md:py-12"
        variants={itemVariants}
      >
        <div className="mx-auto sm:px-8 lg:px-12">
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight font-sf-pro-display mb-6">
              Our Core Values
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text max-w-3xl mx-auto">
              These principles guide everything we do and shape how we work with our clients.
            </p>
          </motion.div>
          <div className="mx-auto px-8">
            <HoverEffect items={projects} />
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.div variants={itemVariants}>
        <CTA onGetStarted={handleGetStarted} />
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;