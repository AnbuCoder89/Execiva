import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Mission: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(1);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Auto-open first accordion when section becomes visible
            if (activeAccordion === null) {
              setActiveAccordion(1);
            }
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
  }, [activeAccordion]);

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
      ref={sectionRef}
      className="relative bg-gray-50 py-12 md:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div 
        className="max-w-[1490px] px-4 lg:px-10 mx-auto"
        variants={itemVariants}
      >
        <motion.div 
          className="space-y-10 md:space-y-20"
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div 
            className="mx-auto text-center max-w-5xl"
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
                  We're here to help brands drive growth             
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
            className="grid gap-10 md:grid-cols-12"
            variants={itemVariants}
          >
            {/* Left Column - Images */}
            <motion.div 
              className="relative md:col-span-6"
              variants={imageVariants}
            >
              <motion.div 
                className="sticky top-[100px] aspect-[724/866]"
                variants={imageVariants}
              >
                {accordionItems.map((item) => (
                  <motion.div
                    key={item.id}
                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                      activeAccordion === item.id
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-5'
                    }`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ 
                      opacity: activeAccordion === item.id ? 1 : 0,
                      scale: activeAccordion === item.id ? 1 : 0.95
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <div className="flex justify-center items-center h-full">
                      <figure className="w-full h-full">
                        <img
                          className="w-full h-full object-cover rounded-lg md:rounded-2xl"
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                        />
                      </figure>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Accordion */}
            <motion.div 
              className="md:col-span-6 lg:col-span-4 lg:col-start-8"
              variants={itemVariants}
            >
              <motion.div 
                className="divide-y xl:py-6 divide-gray-200"
                variants={containerVariants}
              >
                {accordionItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="py-3.5 first:pt-0 last:pb-0"
                    variants={itemVariants}
                  >
                    <motion.button
                      type="button"
                      onClick={() => toggleAccordion(item.id)}
                      aria-expanded={activeAccordion === item.id}
                      className="flex justify-between items-center py-2.5 w-full text-left text-lg md:text-xl font-medium text-gray-900 hover:text-gray-700 transition-colors font-sf-pro-display"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <span className="flex gap-x-2 items-center">
                        {item.title}
                      </span>
                      <motion.div
                        animate={{ rotate: activeAccordion === item.id ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <ChevronDown
                          className="w-4 h-4 shrink-0 text-blue-600"
                        />
                      </motion.div>
                    </motion.button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: activeAccordion === item.id ? "auto" : 0,
                        opacity: activeAccordion === item.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        className="space-y-4 pb-4 pt-2"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ 
                          opacity: activeAccordion === item.id ? 1 : 0,
                          y: activeAccordion === item.id ? 0 : -10
                        }}
                        transition={{ duration: 0.2, delay: activeAccordion === item.id ? 0.1 : 0 }}
                      >
                        <div className="prose prose-sm text-gray-600">
                          <p className="leading-relaxed font-sf-pro-text">
                            {item.content}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Mission;