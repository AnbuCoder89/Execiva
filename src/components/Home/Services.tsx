import React, { useState, useEffect, useRef } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import Button from "../ui/Button";

const Services: React.FC = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      id: "artificial-intelligence",
      title: "Artificial Intelligence",
      description: "AI-powered solutions that automate processes and provide intelligent insights.",
      category: "AI",
      image: "/image/services/Artificial_Intelligence.jpg",
    },
    {
      id: "seo",
      title: "SEO",
      description: "Comprehensive digital transformation strategies tailored to your business goals",
      category: "SEO",
      image: "/image/services/Digital_Statergy.jpeg",
    },
    {
      id: "web-development",
      title: "Web Development",
      description: "Custom websites and web applications built for performance and scalability",
      category: "Development",
      image: "/image/services/web_development-6.jpeg",
    },
    {
      id: "data-analytics",
      title: "Data Analytics",
      description: "Data-driven insights to help you make informed decisions and optimize your operations",
      category: "Analytics",
      image: "/image/services/Data_Analytics.jpg",
    },
  ];

  const handleLearnMore = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };
  return (
    <motion.section
      id="services"
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col justify-center bg-white"
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
          Innovation is our language,
          <span className="block mt-2">
            execution is our craft
          </span>
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={itemVariants}
        >
         From AI and SEO to Web Development and Data Analytics, we transform complexity into clarity crafting solutions that address today's challenges while unlocking tomorrow's opportunities.
        </motion.p>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        className="w-full"
        variants={itemVariants}
      >
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
        >
          {services.slice(0, 8).map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative w-full overflow-hidden rounded-xl shadow-xl h-[320px] sm:h-[350px] md:h-[380px] lg:h-[400px] xl:h-[420px]"
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                y: -8,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center rounded-xl overflow-hidden"
                style={{ backgroundImage: `url('${service.image}')` }}
              />

              {/* Default dark gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:opacity-0 transition-opacity duration-300 rounded-xl" />

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />

              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col justify-between text-white h-full">
                <div className="flex justify-start">
                  <span className="px-3 py-1 bg-beige backdrop-blur-sm rounded-full text-black text-xs font-medium uppercase tracking-wide">
                    {service.category}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 font-sf-pro-display leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed font-sf-pro-text opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      {service.description}
                    </p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Button 
                      variant="vision"
                      onClick={() => handleLearnMore(service.id)}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Services;