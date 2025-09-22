import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import BackButton from "../components/ui/BackButton";

interface PageNotFoundProps {
  type?: string;
}

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: i * 0.1,
    },
  }),
};

const PageNotFound: React.FC<PageNotFoundProps> = ({ type = 'page' }) => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-16 sm:pt-20 lg:pt-24 overflow-hidden">
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl shadow-xl w-full overflow-hidden h-[60vh] min-h-[350px] sm:min-h-[450px] lg:min-h-[550px]">
          {/* Background image */}
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/image/case-studies/casestudy-1.jpeg"
              alt="404 Background"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <motion.div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 sm:p-12 text-white text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="relative" variants={itemVariants}>
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl font-bold text-white/90 mb-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)} Not Found
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl md:text-2xl font-light max-w-2xl mx-auto mb-8"
                variants={itemVariants}
              >
                Oops! The {type} you're looking for doesn't exist or has been moved.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <BackButton
                    label="Back to Home"
                    onClick={() => navigate("/")}
                    className="px-8 py-4 border border-white/30 text-white hover:bg-white/20 transition-all duration-300"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10 backdrop-blur-sm"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 40 - 20, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  );
};

export default PageNotFound;
