import React from "react";
import { motion, Variants } from "framer-motion";

interface UseCase {
  title: string;
  image: string;
  heading: string;
  description: string;
}

interface UseCasesSectionProps {
  useCases?: UseCase[];
}

const UseCasesSection: React.FC<UseCasesSectionProps> = ({ useCases }) => {
  const defaultUseCases: UseCase[] = [
    {
      title: "Website Redesign",
      image: "/image/vision/vision-1.jpeg",
      heading: "Revamp your website to boost conversions and increase pipeline.",
      description: "By enhancing user experience, optimizing performance, and implementing scalable design, our website redesigns help you attract more visitors, convert leads, and drive sustainable growth."
    },
    {
      title: "Website Migrations",
      image: "/image/vision/vision-2.jpeg",
      heading: "Seamlessly move your website to a new platform without disruptions.",
      description: "Our migration experts handle every step of the process, ensuring your data, design, and functionality are securely transferred, minimizing downtime and maintaining SEO rankings."
    },
    {
      title: "Ongoing Website Services",
      image: "/image/vision/vision-3.jpeg",
      heading: "Keep your website running smoothly with proactive maintenance.",
      description: "From regular updates and security patches to performance optimization and feature enhancements, we provide continuous support to keep your site secure, fast, and up-to-date."
    },
    {
      title: "AI Integrations",
      image: "/image/vision/vision-4.jpeg",
      heading: "Enhance your website with powerful AI-driven capabilities.",
      description: "We integrate intelligent tools like chatbots, personalization engines, and analytics solutions to improve user engagement, streamline operations, and deliver actionable insights."
    },
    {
      title: "Database Design and Management",
      image: "/image/vision/vision-1.jpeg",
      heading: "Build and maintain robust databases tailored to your business needs.",
      description: "Our team designs scalable, secure, and high-performance databases, ensuring smooth data flow, reliable backups, and optimized queries for your applications."
    },
    {
      title: "SEO",
      image: "/image/vision/vision-2.jpeg",
      heading: "Boost your online visibility and outrank competitors.",
      description: "Through strategic keyword research, on-page optimization, technical audits, and link building, we help you improve search rankings, drive targeted traffic, and grow your online presence."
    }
  ];

  const useCasesToRender = useCases || defaultUseCases;

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
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.section 
      className="bg-white py-16 md:py-20 lg:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight font-sf-pro-display mb-6">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text max-w-3xl mx-auto">
            Discover how our comprehensive solutions can transform your digital presence and drive meaningful results for your business.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          {useCasesToRender.map((useCase, index) => {
            const isEven = index % 2 === 1; // 0-indexed, so index 1, 3, 5 are "even" in our alternating pattern
            
            return (
              <motion.div
                key={useCase.title}
                className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center"
                variants={itemVariants}
              >
                {/* Image Section */}
                <motion.div 
                  className={`relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <img
                      src={useCase.image}
                      alt={useCase.title}
                      className="w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover"
                      loading="lazy"
                    />
                    
                    {/* Subtle overlay for premium feel */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full blur-xl opacity-60" />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full blur-xl opacity-40" />
                </motion.div>

                {/* Content Section */}
                <motion.div 
                  className={`space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  variants={itemVariants}
                >
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-beige text-gray-900 rounded-full text-sm font-medium font-sf-pro-text border border-gray-200">
                      {useCase.title}
                    </span>
                  </div>
                  
                  <motion.h3 
                    className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight font-sf-pro-display text-gray-900"
                    variants={itemVariants}
                  >
                    {useCase.heading}
                  </motion.h3>

                  <motion.p 
                    className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed font-sf-pro-text"
                    variants={itemVariants}
                  >
                    {useCase.description}
                  </motion.p>

                  <motion.div 
                    className="pt-4"
                    variants={itemVariants}
                  >
                    <motion.button
                      className="text-gray-900 font-medium font-sf-pro-text hover:text-gray-700 transition-colors duration-300 flex items-center group"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      Learn More
                      <motion.svg
                        className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default UseCasesSection;