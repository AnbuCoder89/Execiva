import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const useCases = [
  {
    id: "redesign",
    label: "Website Redesign",
    title: "Revamp your website to boost conversions and increase pipeline.",
    description:
      "By enhancing user experience, optimizing performance, and implementing scalable design, our website redesigns help you attract more visitors, convert leads, and drive sustainable growth.",
    cta: "/solutions/website-redesigns",
    ctaLabel: "Learn more",
    image:
      "https://cdn.sanity.io/images/q9c9g16o/production/214d51304ca5e675e91994b7add6a7c370e5af15-8095x5399.jpg?w=1200&q=80",
  },
  {
    id: "migrations",
    label: "Website Migrations",
    title: "Seamless Website Migrations without the headaches.",
    description:
      "Migrate your website to a modern platform with minimal downtime and maximum efficiency. From planning to execution, we ensure your migration is seamless, secure, and aligned with your business goals.",
    cta: "/solutions/website-migrations",
    ctaLabel: "Learn more",
    image:
      "https://cdn.sanity.io/images/q9c9g16o/production/214d51304ca5e675e91994b7add6a7c370e5af15-8095x5399.jpg?w=1200&q=80",
  },
  {
    id: "ongoing",
    label: "Ongoing Website Services",
    title: "Get a dedicated Website Product Team to drive continuous growth.",
    description:
      "Get a tailored Website Product Team to help you continuously manage, optimize, and scale your website. Taking an agile, data-driven approach, we ensure your site evolves alongside your business goals.",
    cta: "/solutions/ongoing-website-services",
    ctaLabel: "Learn more",
    image:
      "https://cdn.sanity.io/images/q9c9g16o/production/214d51304ca5e675e91994b7add6a7c370e5af15-8095x5399.jpg?w=1200&q=80",
  },
];

const ServiceUseCases: React.FC = () => {
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
      className="py-16 md:py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight font-sf-pro-display"
            variants={itemVariants}
          >
            Use Cases & Solutions
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Discover how our solutions can be applied to solve real-world challenges and drive meaningful results for your business.
          </motion.p>
        </motion.div>

        {/* Use Cases Cards */}
        <motion.div 
          className="space-y-8 md:space-y-12"
          variants={containerVariants}
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              className="w-full bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                y: -8,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0`}>
                {/* Content Section */}
                <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <motion.div 
                    className="space-y-6"
                    variants={itemVariants}
                  >
                    <div className="space-y-4">
                      <motion.span 
                        className="inline-block px-4 py-2 bg-beige text-gray-900 rounded-full text-sm font-medium font-sf-pro-text border border-gray-200"
                        variants={itemVariants}
                      >
                        {useCase.label}
                      </motion.span>
                      
                      <motion.h3 
                        className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 leading-tight font-sf-pro-display"
                        variants={itemVariants}
                      >
                        {useCase.title}
                      </motion.h3>
                    </div>

                    <motion.p 
                      className="text-base md:text-lg text-gray-600 leading-relaxed font-sf-pro-text"
                      variants={itemVariants}
                    >
                      {useCase.description}
                    </motion.p>

                    <motion.div 
                      className="pt-4"
                      variants={itemVariants}
                    >
                      <Button
                        variant="vision"
                        size="lg"
                        className="px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        {useCase.ctaLabel}
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Image Section */}
                <div className="flex-1 relative min-h-[300px] lg:min-h-[400px]">
                  <motion.img
                    src={useCase.image}
                    alt={useCase.label}
                    className="absolute inset-0 w-full h-full object-cover"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/10" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServiceUseCases;