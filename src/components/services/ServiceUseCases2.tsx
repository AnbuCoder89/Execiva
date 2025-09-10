import React from "react";
import { motion } from "framer-motion";

interface UseCase {
  title: string;
  image: string;
  heading: string;
  description: string;
}

interface ServiceUseCases2Props {
  useCases?: UseCase[];
}

const ServiceUseCases2: React.FC<ServiceUseCases2Props> = ({ useCases }) => {
  // Default use cases data
  const defaultUseCases: UseCase[] = [
    {
      title: "Website Redesign",
      image: "/image/services/website_redesign.jpeg",
      heading: "Revamp your website to boost conversions and increase pipeline.",
      description: "By enhancing user experience, optimizing performance, and implementing scalable design, our website redesigns help you attract more visitors, convert leads, and drive sustainable growth."
    },
    {
      title: "Website Migrations",
      image: "/image/services/website_redesign.jpeg",
      heading: "Seamlessly move your website to a new platform without disruptions.",
      description: "Our migration experts handle every step of the process, ensuring your data, design, and functionality are securely transferred, minimizing downtime and maintaining SEO rankings."
    },
    {
      title: "Ongoing Website Services",
      image: "/image/services/website_redesign.jpeg",
      heading: "Keep your website running smoothly with proactive maintenance.",
      description: "From regular updates and security patches to performance optimization and feature enhancements, we provide continuous support to keep your site secure, fast, and up-to-date."
    },
    {
      title: "AI Integrations",
      image: "/image/services/website_redesign.jpeg",
      heading: "Enhance your website with powerful AI-driven capabilities.",
      description: "We integrate intelligent tools like chatbots, personalization engines, and analytics solutions to improve user engagement, streamline operations, and deliver actionable insights."
    },
    {
      title: "Database Design and Management",
      image: "/image/services/website_redesign.jpeg",
      heading: "Build and maintain robust databases tailored to your business needs.",
      description: "Our team designs scalable, secure, and high-performance databases, ensuring smooth data flow, reliable backups, and optimized queries for your applications."
    },
    {
      title: "SEO",
      image: "/image/services/website_redesign.jpeg",
      heading: "Boost your online visibility and outrank competitors.",
      description: "Through strategic keyword research, on-page optimization, technical audits, and link building, we help you improve search rankings, drive targeted traffic, and grow your online presence."
    }
  ];

  const displayUseCases = useCases || defaultUseCases;
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
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

  // Auto-rotate through use cases
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayUseCases.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [displayUseCases.length]);

  const currentUseCase = displayUseCases[currentIndex];

  return (
    <motion.section 
      className="bg-white p-4 sm:p-6 lg:p-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="w-full flex">
        {/* Card Container - Equal height design */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden w-full flex flex-col md:flex-row"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row">
            {/* Left Side - Image */}
            <motion.div 
              className="md:w-1/2 relative"
              variants={itemVariants}
            >
              <motion.img
                key={currentIndex}
                src={currentUseCase.image}
                alt={currentUseCase.title}
                className="w-full h-[400px] md:h-[500px] object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              
              {/* Overlay with use case title */}
              <div className="absolute top-4 left-4">
                <motion.span 
                  className="inline-block px-4 py-2 bg-beige text-gray-900 rounded-full text-sm font-medium font-sf-pro-text border border-gray-200"
                  key={`tag-${currentIndex}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {currentUseCase.title}
                </motion.span>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div 
              className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center h-[400px] md:h-[500px]"
              variants={itemVariants}
            >
              <div className="space-y-6">
                {/* Main Heading */}
                <motion.h3 
                  className="text-gray-900 text-xl md:text-2xl lg:text-[2.875rem] lg:leading-[3.25rem] font-medium leading-snug font-sf-pro-display"
                  key={`heading-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {currentUseCase.heading}
                </motion.h3>

                {/* Description */}
                <motion.p 
                  className="text-gray-600 text-base md:text-lg lg:text-[1.25rem] lg:leading-[1.75rem] leading-relaxed font-sf-pro-text"
                  key={`description-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {currentUseCase.description}
                </motion.p>
              </div>

              {/* Navigation Dots */}
              <motion.div 
                className="flex space-x-2 mt-8"
                variants={itemVariants}
              >
                {displayUseCases.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-gray-800 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    aria-label={`Go to ${displayUseCases[index].title}`}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServiceUseCases2;