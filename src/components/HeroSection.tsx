import { ArrowRight, BarChart2, Code, Users } from "lucide-react";
import { motion, Variants } from "framer-motion";

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
    <section className="min-h-screen bg-gradient-to-b from-background via-background to-background/80 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight"
          >
            Innovative IT Solutions that
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              {" "}
              Transform
            </span>{" "}
            Your Business
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
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
            <button className="text-primary px-8 py-4 text-lg font-medium hover:text-primary/80 transition-all duration-300 flex items-center gap-2">
              Learn More <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 mt-24" // Increased margin-top from mt-16 to mt-24
          >
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <BarChart2 className="w-12 h-12 mx-auto text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Data Analytics</h3>
              <p className="text-base text-muted-foreground font-light">
                Unlock actionable insights with advanced analytics and AI-driven solutions.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <Code className="w-12 h-12 mx-auto text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Web Development</h3>
              <p className="text-base text-muted-foreground font-light">
                Build scalable, high-performance applications tailored to your needs.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <Users className="w-12 h-12 mx-auto text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Expert Consulting</h3>
              <p className="text-base text-muted-foreground font-light">
                Partner with our dedicated team to drive your business forward.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Subtle background elements for depth */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
