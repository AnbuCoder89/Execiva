import React from "react";
import { motion, Variants } from "framer-motion";
import Button from "../ui/Button";
import BackButton from "../ui/BackButton";

interface HeroSectionProps {
  title: string;
  category: string;
  description: string;
  image: string;
  tagline?: string;
  onGetStarted?: () => void;
  onViewAllServices?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  category,
  description,
  image,
  tagline,
  onGetStarted,
  onViewAllServices
}) => {
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

  const imageVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 1.1,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.section 
      className="pt-12 min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="flex items-center justify-center px-6 sm:px-8 lg:px-12"
        variants={itemVariants}
      >
        <motion.div 
          className="relative rounded-2xl shadow-xl w-full mt-8 overflow-hidden"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.02,
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
        >
          {/* background image */}
          <motion.img
            src={image}
            alt={`${title} - Professional ${category} Services`}
            className="w-full h-[100vh] lg:h-[90vh] object-cover rounded-2xl"
            variants={imageVariants}
          />
          {/* dark overlay for readability */}
          <motion.div 
            className="absolute inset-0 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          {/* content overlay */}
          <motion.div 
            className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 sm:p-12 text-white"
            variants={containerVariants}
          >
            {/* Service Category Badge */}
            <motion.div 
              className="bg-green-500/20 backdrop-blur-sm rounded-lg border border-white/30 px-4 py-2 mb-4"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(34, 197, 94, 0.3)",
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              <span className="text-sm font-medium text-white font-sf-pro-text uppercase tracking-wide">
                {title}
              </span>
            </motion.div>

            {/* Main Headline (H1) - SEO Optimized */}
            <motion.h1 
              className="font-bold mb-4 font-sf-pro-display text-center text-[2.5rem] leading-[1.2] md:text-[4rem] md:leading-[1.3] lg:text-[6rem] lg:leading-[1]"
              variants={itemVariants}
            >
              {tagline}
            </motion.h1>

            {/* Supporting Description */}
            <motion.p 
              className="max-w-7xl mx-auto mb-8 py-2 font-sf-pro-text text-center text-[1.125rem] md:text-[1.5rem] lg:text-[2rem] leading-relaxed"
              variants={itemVariants}
            >
              {description}
            </motion.p>

            {/* Call-to-Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  variant="vision" 
                  size="lg" 
                  className="px-8 py-4 shadow-lg hover:shadow-xl" 
                  onClick={onGetStarted}
                >
                  Get Started
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <BackButton
                  label="Back to Services"
                  onClick={onViewAllServices}
                  className="px-8 py-4 border border-white/30 text-white hover:bg-white/20 transition-all duration-300"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
                Get Started
              </Button>
              <BackButton
                label="Back to Services"
                onClick={onViewAllServices}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;