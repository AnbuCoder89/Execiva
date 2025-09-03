import Button from "./ui/Button";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const capabilities = [
    { name: "SEO", icon: "/logo/seo-search-symbol.png" },
    { name: "Web Development", icon: "/logo/coding.png" },
    { name: "Artificial Intelligence", icon: "/logo/machine-learning.png" },
    { name: "Data Analytics", icon: "/logo/data.png" },
    { name: "Cloud Solutions", icon: "/logo/connected-cloudscape.png" },
    { name: "Mobile Apps", icon: "/logo/mobile-development.png" },
    { name: "E-Commerce", icon: "/logo/shopping-cart.png" },
  ];

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-beige overflow-hidden px-6 sm:px-8 lg:px-12 pt-24"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="text-center w-full max-w-6xl mx-auto"
        variants={itemVariants}
      >
        {/* Headline */}
        <motion.h1
          className="mb-6 lg:mb-8 leading-tight font-sf-pro-display tracking-tight text-gray-900"
          variants={itemVariants}
        >
          <span className="block font-extrabold text-[clamp(2.5rem,5vw,5.5rem)] md:text-[clamp(3rem,4.5vw,6rem)] lg:text-[clamp(3.5rem,4vw,6.5rem)]">
            Your technology, simplified.
          </span>
          <span className="block font-extrabold text-[clamp(2.5rem,5vw,5.5rem)] md:text-[clamp(3rem,4.5vw,6rem)] lg:text-[clamp(3.5rem,4vw,6.5rem)] text-gray-900">
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
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              variant="vision"
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-10 py-4 font-medium"
            >
              Get Started
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              variant="vision"
              size="lg"
              onClick={() => scrollToSection("services")}
              className="w-full sm:w-auto text-base sm:text-lg px-10 py-4 font-medium shadow-md hover:shadow-lg"
            >
              Explore Services
            </Button>
          </motion.div>
        </motion.div>

        {/* Our Capabilities */}
        <motion.div
          className="w-full pt-10 text-left"
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

          {/* Desktop Grid */}
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

          {/* Full Width Line */}
          <motion.div 
            className="w-full mt-8"
            variants={itemVariants}
          >
            <div className="w-full h-px bg-neutral-100 dark:bg-white dark:opacity-50"></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
