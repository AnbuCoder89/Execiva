import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Button from "./ui/Button";

const Vision: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(1);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

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

  const accordionItems = [
    {
      id: 1,
      title: "Own your reach",
      content: "Reach your target audiences everywhere, with access to every digital channel and device — including display, video, audio, digital out-of-home, and hundreds of millions of Connected TV households.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
    },
    {
      id: 2,
      title: "Own your decisioning",
      content: "Run your campaigns on your terms. Tap into a marketplace of hundreds of data, inventory, and industry partners to make sure your ads are running exactly where they should.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
    },
    {
      id: 3,
      title: "Own your ROI",
      content: "Get more value from your media investment. Prove the effectiveness of your advertising with an objective partner and a more transparent media buying platform.",
      image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg"
    },
    {
      id: 4,
      title: "Own your growth",
      content: "Put your data to work, using insights about your current customers to help uncover new ones. Plus, get access to more than 100,000 pre-vetted premium third-party data segments.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
    }
  ];

  const toggleAccordion = (id: number) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95,
      filter: "blur(8px)"
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3
      }
    }
  };

  return (
    <motion.section
      id="vision"
      ref={sectionRef}
      className="relative bg-white py-12 md:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div 
        className="w-full px-4 lg:px-10 mx-auto"
        variants={itemVariants}
      >
        <motion.div 
          className="space-y-10 md:space-y-20"
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div 
            className="mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-4 md:space-y-10">
              <div className="space-y-2 md:space-y-4">
                <motion.h2 
                  className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight font-sf-pro-display"
                  variants={itemVariants}
                >
                  Shaping the future of digital innovation          
                </motion.h2>
              </div>
              
              <motion.div 
                className="mx-auto max-w-4xl"
                variants={itemVariants}
              >
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text">
                  And we do that by unleashing the full potential of your data-driven advertising.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Accordion Content */}
          <motion.div 
            className="grid gap-6 md:gap-8 lg:gap-12 xl:gap-16 md:grid-cols-12 md:items-start"
            variants={itemVariants}
          >
            {/* Left Column - Images */}
            <motion.div 
              className="relative w-full md:col-span-7 lg:col-span-8 xl:col-span-8"
              variants={imageVariants}
            >
              <div className="sticky top-[100px] w-full">
                <motion.div 
                  className="relative w-full max-w-none mx-auto"
                  style={{
                    width: '80vw',
                    maxWidth: '100%',
                    aspectRatio: '724/866'
                  }}
                  variants={imageVariants}
                >
                  {accordionItems.map((item) => (
                    <motion.div
                      key={item.id}
                      className="absolute inset-0 w-full h-full"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ 
                        opacity: activeAccordion === item.id ? 1 : 0,
                        scale: activeAccordion === item.id ? 1 : 0.95
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <figure className="w-full h-full">
                          <img
                            className="w-full h-full object-cover rounded-lg md:rounded-xl lg:rounded-2xl shadow-lg"
                            src={item.image}
                            alt={item.title}
                            loading="lazy"
                          />
                        </figure>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Accordion */}
            <motion.div 
              className="w-full md:col-span-5 lg:col-span-4 xl:col-span-4 md:mt-8 lg:mt-12"
              variants={itemVariants}
            >
              <motion.div 
                className="divide-y divide-gray-200 md:pl-4 lg:pl-6 xl:pl-8"
                variants={containerVariants}
              >
                {accordionItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="py-4 md:py-5 lg:py-6 first:pt-0 last:pb-0"
                    variants={itemVariants}
                  >
                    <motion.button
                      type="button"
                      onClick={() => toggleAccordion(item.id)}
                      aria-expanded={activeAccordion === item.id}
                      className="flex justify-between items-center py-2 md:py-3 w-full text-left text-lg md:text-xl lg:text-2xl font-medium text-gray-900 hover:text-gray-700 transition-colors font-sf-pro-display"
                      whileHover={{ x: 6, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <motion.span 
                        className="flex gap-x-2 items-center"
                        whileHover={{ x: 2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        {item.title}
                      </motion.span>
                      <motion.div
                        animate={{ rotate: activeAccordion === item.id ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <ChevronDown
                          className="w-4 h-4 md:w-5 md:h-5 shrink-0 text-blue-600"
                        />
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {activeAccordion === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <motion.div
                            className="space-y-4 pb-4 pt-2 md:pt-3"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          >
                            <motion.div 
                              className="prose prose-sm md:prose-base text-gray-600"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.4, delay: 0.2 }}
                            >
                              <motion.p 
                                className="leading-relaxed font-sf-pro-text text-sm md:text-base lg:text-lg"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                              >
                                {item.content}
                              </motion.p>
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Mobile-specific responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .vision-image-container {
            width: 95vw !important;
            max-width: 100% !important;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .vision-image-container {
            width: 85vw !important;
          }
        }
        
        @media (min-width: 1025px) {
          .vision-image-container {
            width: 80vw !important;
            max-width: 1200px !important;
          }
        }
        
        @media (min-width: 1440px) {
          .vision-image-container {
            width: 75vw !important;
            max-width: 1400px !important;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default Vision;