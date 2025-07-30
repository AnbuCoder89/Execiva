import { ArrowRight, BarChart2, Code, Users } from "lucide-react";
import { motion, Variants } from "framer-motion";
import DarkVeil from './ui/DarkVeil';
import LightRays from './ui/LightRays';

const HeroSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <DarkVeil />
        <LightRays
          raysOrigin="top-center"
          raysColor="#3b82f6"
          raysSpeed={2}
          lightSpread={0.7}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.3}
          noiseAmount={0.1}
          distortion={0.05}
          className="opacity-100"
        />
      </div>
      {/* Foreground Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center text-center space-y-8"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
          >
            Innovative IT Solutions that{" "}
            <span>Transform</span>{" "}
            Your Business
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light"
          >
            Empowering forward-thinking companies with cutting-edge data analytics, web development, and strategic IT consulting services.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 transform hover:-translate-y-1">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
