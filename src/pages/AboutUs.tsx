import React, { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import CTA from '../components/ui/CTA';
import { ParallaxScrollSecond } from "../components/ui/parallax-scroll";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { HeroParallax } from "../components/ui/hero-parallax";
import { FocusCards } from "../components/ui/focus-cards";


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

  const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cursor.png",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },
   
    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editorially.png",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editrix.png",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
    },
   
    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    },
   
    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/invoker.png",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
    },
  ];

  const cards = [
    {
      title: "Monil Shah",
      role: "CEO & Founder",
      src: "/image/team-members/monil_shah.webp",
    },
    {
      title: "Rohit Mudaliar",
      role: "CGO",
      src: "/image/team-members/rohit_mudaliar.webp",
    },
    {
      title: "Anburaj Nadar",
      role: "Lead Software Developer",
      src: "/image/team-members/anburaj_nadar.webp",
    },
    {
      title: "Varun Petekar",
      role: "Lead Data Analyst",
      src: "/image/team-members/varun_petekar.webp",
    },
  ];


  return (
    <motion.div
      className="min-h-screen bg-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
    <HeroParallax 
      products={products}
      title="About Execiva"
      description="We're more than a technology company. We're your partners in digital transformation,
      committed to simplifying complexity and amplifying your business potential."
    />

    <motion.section 
      className="relative bg-white py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      
    >
      <div className="mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 items-center">
          {/* Left Column - Image */}
          <motion.div 
            className="relative group"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { 
                opacity: 1, 
                x: 0, 
                transition: {
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }
              }
            }}
          >
            <div 
              className="relative overflow-hidden rounded-2xl h-[400px] md:h-[500px]"
            >
              <motion.div 
                className="w-full h-full overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
                }}
              >
                <motion.img
                  src="/image/vision/vision-1.jpeg"
                  alt="mission"
                  className="w-full h-full object-cover rounded-xl"
                  initial={{ scale: 1.1 }}
                  whileInView={{ 
                    scale: 1,
                    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.15,
                    transition: { 
                      duration: 0.8, 
                      ease: [0.4, 0, 0.2, 1] 
                    }
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            className="space-y-8"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }
              }
            }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight font-sf-pro-display"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6 }
                }
              }}
            >
              Technology that transforms businesses
            </motion.h2>

            <motion.div 
              className="space-y-6"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: 0.3,
                    duration: 0.6 
                  }
                }
              }}
            >
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text">
                We believe in the power of technology to transform businesses and create meaningful connections. 
                Our expertise spans AI, web development, SEO, and data analytics, enabling us to deliver comprehensive solutions that drive real results. 
                Every project we undertake is guided by our commitment to excellence, innovation, and your success.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
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
              Meet Our Team
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text max-w-3xl mx-auto">
              Our team is made up of passionate individuals who are dedicated to creating digital experiences that matter. Explore the journey that defines who we are.
            </p>
          </motion.div>
          <FocusCards cards={cards} />
        </div>
      </motion.section>


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