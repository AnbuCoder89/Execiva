import React from "react";
import { motion } from "framer-motion";
import InfiniteMarquee from "../ui/InfiniteScroll"; // import the marquee component you shared

interface ServiceBenefitsAndTechProps {
  benefits?: string[];
  technologies?: { name: string; src: string }[];
}

const defaultBenefits = [
  "Custom scalable solutions",
  "Optimized performance",
  "Seamless user experience",
  "Cutting-edge technologies",
];

const ServiceBenefitsAndTech: React.FC<ServiceBenefitsAndTechProps> = ({
  benefits = defaultBenefits,
  technologies,
}) => {
  return (
    <section className="py-16 px-6 md:px-16 bg-gray-50">
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Why Choose Our Services
      </motion.h2>

      {/* Benefits */}
      <motion.ul
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {benefits.map((benefit, idx) => (
          <motion.li
            key={idx}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {benefit}
          </motion.li>
        ))}
      </motion.ul>

      {/* Technologies Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <InfiniteMarquee />
      </motion.div>
    </section>
  );
};

export default ServiceBenefitsAndTech;
