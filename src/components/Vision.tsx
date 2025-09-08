import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Vision: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(1);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // you could trigger custom logic here if needed
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(8px)" },
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

  const accordionItems = [
    {
      id: 1,
      title: "Own your reach",
      content:
        "Reach your target audiences everywhere, with access to every digital channel and device — including display, video, audio, digital out-of-home, and hundreds of millions of Connected TV households.",
      image: "/image/vision/vision-3.jpeg"
    },
    {
      id: 2,
      title: "Own your decisioning",
      content:
        "Run your campaigns on your terms. Tap into a marketplace of hundreds of data, inventory, and industry partners to make sure your ads are running exactly where they should.",
      image: "/image/vision/vision-2.jpeg"
    },
    {
      id: 3,
      title: "Own your ROI",
      content:
        "Get more value from your media investment. Prove the effectiveness of your advertising with an objective partner and a more transparent media buying platform.",
      image: "/image/vision/vision-4.jpeg"
    },
    {
      id: 4,
      title: "Own your growth",
      content:
        "Put your data to work, using insights about your current customers to help uncover new ones. Plus, get access to more than 100,000 pre-vetted premium third-party data segments.",
      image: "/image/vision/vision-1.jpeg"
    }
  ];

  const toggleAccordion = (id: number) =>
    setActiveAccordion(activeAccordion === id ? null : id);

  return (
    <motion.section
      id="vision"
      ref={sectionRef}
      className="relative bg-white py-12 md:py-16 lg:py-20 xl:py-24 min-h-screen flex items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div
        className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mx-auto space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div
          className="mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10"
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-tight font-sf-pro-display px-2 sm:px-4"
            variants={itemVariants}
          >
            Shaping the future of digital innovation
          </motion.h2>
          <motion.p
            className="mx-auto max-w-4xl text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-sf-pro-text px-4 sm:px-6"
            variants={itemVariants}
          >
            And we do that by unleashing the full potential of your
            data-driven advertising.
          </motion.p>
        </motion.div>

        {/* Content */}
        <motion.div className="grid gap-8 sm:gap-10 md:gap-12 lg:gap-16 md:grid-cols-12 items-center" variants={itemVariants}>
          {/* Image */}
          <motion.div className="relative order-2 md:order-1 md:col-span-6 lg:col-span-7" variants={imageVariants}>
            <motion.div
              className="sticky top-[100px] md:top-[120px] lg:top-[140px] aspect-[724/866] max-w-md sm:max-w-lg md:max-w-none mx-auto"
              variants={imageVariants}
            >
              {accordionItems.map(item => (
                <motion.div
                  key={item.id}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    activeAccordion === item.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
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
                    className="
                      w-full
                      h-auto
                      sm:h-[60%]
                      md:h-[70%]
                      lg:h-[80%]
                      xl:h-[85%]
                      object-cover 
                      rounded-lg
                      sm:rounded-xl
                      md:rounded-2xl
                      shadow-lg
                      md:shadow-xl
                      lg:shadow-2xl
                    "
                    src={item.image}
                    alt={item.title}
                  />
                    </figure>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          
          {/* Accordion */}
          <motion.div
            className="order-1 md:order-2 md:col-span-6 lg:col-span-5 xl:col-span-4 xl:col-start-9 divide-y py-4 sm:py-6 xl:py-8 divide-gray-200"
            variants={itemVariants}
          >
            {accordionItems.map(item => (
              <motion.div
                key={item.id}
                className="py-3 sm:py-3.5 md:py-4 first:pt-0 last:pb-0"
                variants={itemVariants}
              >
                <motion.button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={activeAccordion === item.id}
                  className="flex justify-between items-center py-2 sm:py-2.5 md:py-3 w-full text-left text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-900 hover:text-gray-700 transition-colors font-sf-pro-display"
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
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 shrink-0 text-blue-600" />
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
                        className="space-y-3 sm:space-y-4 pb-3 sm:pb-4 pt-2 prose prose-sm sm:prose-base text-gray-600"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <motion.p
                          className="leading-relaxed font-sf-pro-text text-sm sm:text-base md:text-lg"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                        >
                          {item.content}
                        </motion.p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Vision;