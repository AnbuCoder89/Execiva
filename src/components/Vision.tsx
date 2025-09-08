import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Vision: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(1);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // custom logic if needed
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
      className="
        relative bg-white
        py-16 md:py-24 lg:py-32
        lg:min-h-screen lg:flex lg:items-center
      "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div
        className="w-full px-4 sm:px-6 lg:px-10 mx-auto space-y-12 md:space-y-16 lg:space-y-20"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div
          className="mx-auto text-center space-y-6 md:space-y-8 lg:space-y-10"
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-[1.1] sm:leading-tight font-sf-pro-display"
            variants={itemVariants}
          >
            Shaping the future of digital innovation
          </motion.h2>
          <motion.p
            className="mx-auto max-w-4xl text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-sf-pro-text px-4 sm:px-0"
            variants={itemVariants}
          >
            And we do that by unleashing the full potential of your
            data-driven advertising.
          </motion.p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="grid gap-12 md:gap-16 lg:gap-20 md:grid-cols-12"
          variants={itemVariants}
        >
          {/* Image */}
          <motion.div
            className="relative md:col-span-7 lg:col-span-8 order-2 md:order-1 mb-8 md:mb-0"
            variants={imageVariants}
          >
            <motion.div
              className="sticky top-[120px] h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] xl:h-[80vh]"
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
                          h-auto lg:h-full   /* auto height on small, fill on large */
                          rounded-xl 
                          md:rounded-2xl lg:rounded-3xl
                          shadow-xl md:shadow-2xl
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
            className="md:col-span-5 lg:col-span-4 divide-y divide-gray-200 order-1 md:order-2 space-y-2 md:space-y-0"
            variants={itemVariants}
          >
            {accordionItems.map(item => (
              <motion.div
                key={item.id}
                className="py-6 md:py-8 first:pt-0 last:pb-0"
                variants={itemVariants}
              >
                <motion.button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={activeAccordion === item.id}
                  className="flex justify-between items-start py-3 w-full text-left text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 hover:text-gray-700 transition-colors font-sf-pro-display leading-tight"
                  whileHover={{ x: 6, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.span
                    className="flex gap-x-2 items-start pr-4"
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {item.title}
                  </motion.span>
                  <motion.div
                    className="flex-shrink-0 mt-1"
                    animate={{ rotate: activeAccordion === item.id ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
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
                        className="pt-4 pb-6"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <motion.p
                          className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-sf-pro-text text-gray-600 pr-8"
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
