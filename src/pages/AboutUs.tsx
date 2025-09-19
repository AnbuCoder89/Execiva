import React, { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { WhatWeDo, ImageGallery } from '../components/About';
import CTA from '../components/ui/CTA';

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

      {/* Image Gallery Section */}
      <motion.div variants={itemVariants}>
        <ImageGallery 
          heading="Our Story"
          description="From concept to execution, we're dedicated to creating digital experiences that matter. Explore the journey that defines who we are."
          images={[
            {
              url: "#",
              src: "/image/vision/vision-1.jpeg",
              alt: "Team collaboration and strategic planning",
            },
            {
              url: "#",
              src: "/image/vision/vision-2.jpeg",
              alt: "Innovative technology solutions in development",
            },
            {
              url: "#",
              src: "/image/vision/vision-3.jpeg",
              alt: "Client success stories and partnerships",
            },
          ]}
        />
      </motion.div>

      {/* Values Section */}
      <motion.section 
        className="py-16 md:py-20 bg-gray-50"
        variants={itemVariants}
      >
        <div className="mx-auto px-6 sm:px-8 lg:px-12">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
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
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 font-sf-pro-display">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-sf-pro-text">
                  {value.description}
                </p>
              </motion.div>
            ))}
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