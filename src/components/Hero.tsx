import Button from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const capabilities = [
     { 
      name: 'SEO', 
      icon: '/logo/seo-search-symbol.png',
    },
    { 
      name: 'Web Development', 
      icon: '/logo/coding.png',
    },
    { 
      name: 'Artificial Intelligence', 
      icon: '/logo/machine-learning.png',
    },
    { 
      name: 'Data Analytics', 
      icon: '/logo/data.png',
    },
    { 
      name: 'Cloud Solutions', 
      icon: '/logo/connected-cloudscape.png',
    },
    { 
      name: 'Mobile Apps', 
      icon: '/logo/mobile-development.png',
    },
    { 
      name: 'E-Commerce', 
      icon: '/logo/shopping-cart.png',
    },
  ];

  const trustedLogos = [
    { name: 'Samsung', icon: '/logo/seo-search-symbol.png' },
    { name: 'Microsoft', icon: '/logo/coding.png' },
    { name: 'Google', icon: '/logo/machine-learning.png' },
    { name: 'Amazon', icon: '/logo/data.png' },
    { name: 'Apple', icon: '/logo/connected-cloudscape.png' },
    { name: 'Netflix', icon: '/logo/mobile-development.png' },
  ];

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

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 0.5, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  
  return (
    <motion.section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-beige overflow-hidden px-6 sm:px-8 lg:px-12 pt-24"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 items-center min-h-[calc(100vh-6rem)]">
          
          {/* Left Column - Capabilities */}
          <motion.div 
            className="space-y-8 lg:space-y-12 order-2 lg:order-1"
            variants={itemVariants}
          >
            {/* Our Capabilities Section */}
            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              <motion.h3 
                className="text-lg md:text-xl text-gray-600 font-sf-pro-text"
                variants={itemVariants}
              >
                Our Capabilities
              </motion.h3>
              
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4"
                variants={containerVariants}
              >
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg hover:bg-white/50 transition-colors duration-300"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      transition: { type: "spring", stiffness: 400, damping: 17 }
                    }}
                  >
                    <motion.img 
                      src={capability.icon} 
                      alt={capability.name}
                      className="w-8 h-8 md:w-10 md:h-10 filter grayscale opacity-70 hover:opacity-90 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    />
                    <motion.span 
                      className="text-sm md:text-base text-gray-700 font-sf-pro-text"
                      variants={itemVariants}
                    >
                      {capability.name}
                    </motion.span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Divider Line */}
            <motion.div 
              className="w-full h-px bg-gray-200"
              variants={itemVariants}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            {/* Trusted Logos Section */}
            <motion.div 
              className="space-y-4"
              variants={itemVariants}
            >
              <motion.p 
                className="text-sm md:text-base text-gray-500 font-sf-pro-text"
                variants={itemVariants}
              >
                Trusted by industry leaders
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap items-center gap-4 md:gap-6"
                variants={containerVariants}
              >
                {trustedLogos.map((logo, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-center"
                    variants={logoVariants}
                    whileHover={{ 
                      scale: 1.1, 
                      opacity: 0.8,
                      transition: { type: "spring", stiffness: 400, damping: 17 }
                    }}
                  >
                    <motion.img 
                      src={logo.icon} 
                      alt={logo.name}
                      className="h-6 w-auto md:h-8 filter grayscale opacity-40 hover:opacity-60 transition-opacity duration-300"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Hero Content */}
          <motion.div 
            className="text-center lg:text-left space-y-8 lg:space-y-12 order-1 lg:order-2 lg:pl-12 xl:pl-16"
            variants={itemVariants}
          >
            {/* Headline */}
            <motion.h1 
              className="leading-tight font-sf-pro-display tracking-tight text-gray-900"
              variants={itemVariants}
            >
              {/* Line 1 */}
              <span className="block font-extrabold text-[clamp(2.5rem,5vw,5.5rem)] md:text-[clamp(3rem,4.5vw,6rem)] lg:text-[clamp(3.5rem,4vw,6.5rem)]">
                Your technology, simplified.
              </span>
            
              {/* Line 2 */}
              <span className="block font-extrabold text-[clamp(2.5rem,5vw,5.5rem)] md:text-[clamp(3rem,4.5vw,6rem)] lg:text-[clamp(3.5rem,4vw,6.5rem)] text-gray-900">
                Your business, amplified.
              </span>
            </motion.h1> 

            {/* Subheadline */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-sf-pro-text font-light max-w-3xl lg:max-w-none"
              variants={itemVariants}
            >
              Execiva partners with you across AI, SEO, Web Development, and Data Analytics ensuring your systems work seamlessly so your team can focus on impact.
            </motion.p>

            {/* Call-to-Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center"
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
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;