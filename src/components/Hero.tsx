"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.8, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const capabilities = [
    { name: "AI", icon: "/logo/ai.png" },
    { name: "SEO", icon: "/logo/seo.png" },
    { name: "Web Development", icon: "/logo/web.png" },
    { name: "Data Analytics", icon: "/logo/data.png" },
    { name: "Automation", icon: "/logo/automation.png" },
    { name: "Cloud", icon: "/logo/cloud.png" },
  ];

  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex flex-col items-center bg-beige overflow-hidden px-6 sm:px-8 lg:px-12 pt-24"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Content */}
      <motion.div
        className="text-center w-full max-w-6xl mx-auto"
        variants={itemVariants}
      >
        {/* Headline */}
        <motion.h1
          className="mb-6 lg:mb-8 leading-tight font-sf-pro-display tracking-tight text-gray-900"
          variants={itemVariants}
        >
          <span className="block font-extrabold text-[clamp(2.5rem,5vw,5.5rem)]">
            Your technology, simplified.
          </span>
          <span className="block font-extrabold text-[clamp(2.5rem,5vw,5.5rem)] text-gray-900">
            Your business, amplified.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-sf-pro-text mb-12 lg:mb-16 max-w-3xl mx-auto font-light"
          variants={itemVariants}
        >
          Execiva partners with you across AI, SEO, Web Development, and Data
          Analytics ensuring your systems work seamlessly so your team can focus
          on impact.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pb-10"
          variants={itemVariants}
        >
          <Button variant="vision" size="lg" className="px-10 py-4 font-medium">
            Get Started
          </Button>
          <Button
            variant="vision"
            size="lg"
            onClick={() => scrollToSection("services")}
            className="px-10 py-4 font-medium shadow-md hover:shadow-lg"
          >
            Explore Services
          </Button>
        </motion.div>
      </motion.div>

      {/* Capabilities Section */}
      <motion.div
        className="w-full px-6 sm:px-8 lg:px-12 mt-12"
        variants={itemVariants}
      >
        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-500 font-sf-pro-text mb-8 font-medium tracking-wide text-left"
          variants={itemVariants}
        >
          Our Capabilities
        </motion.p>

        {/* Mobile Marquee */}
        <motion.div
          className="block sm:hidden relative overflow-hidden"
          variants={itemVariants}
        >
          {/* Divider Line between text and icons */}
          <motion.div 
            className="w-full h-px bg-gray-200 mb-8"
            variants={itemVariants}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <motion.div
            className="flex animate-marquee space-x-6"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {capabilities.concat(capabilities).map((cap, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-24 h-16 flex flex-col items-center justify-center opacity-60 hover:opacity-80 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                variants={itemVariants}
              >
                <img
                  src={cap.icon}
                  alt={cap.name}
                  className="w-8 h-8 mb-1 filter grayscale opacity-70"
                />
                <span className="text-xs text-gray-600 font-sf-pro-text text-center leading-tight whitespace-nowrap">
                  {cap.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Desktop Grid aligned LEFT */}
        <motion.div
          className="hidden sm:flex justify-start items-center space-x-6 md:space-x-8 lg:space-x-12 xl:space-x-16"
          variants={containerVariants}
        >
          {capabilities.slice(0, 6).map((cap, index) => (
            <motion.div
              key={index}
              className="w-20 h-20 sm:w-24 sm:h-24 flex flex-col items-center justify-center opacity-60 hover:opacity-90 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              whileHover={{
                scale: 1.15,
                opacity: 0.9,
                transition: { type: "spring", stiffness: 400, damping: 17 },
              }}
            >
              <img
                src={cap.icon}
                alt={cap.name}
                className="w-12 h-12 mb-2 filter grayscale opacity-70 hover:opacity-90 transition-opacity duration-300"
              />
              <span className="text-xs sm:text-sm md:text-base text-gray-600 font-sf-pro-text text-center leading-tight whitespace-nowrap">
                {cap.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
