import React from 'react';
import { motion } from 'framer-motion';

interface WhatWeDoProps {
  subtitle?: string;
  heading?: string;
  description?: string;
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const WhatWeDo: React.FC<WhatWeDoProps> = ({
  subtitle = "Our Mission",
  heading = "To be the pioneers of composable websites.",
  description = "We're not just building websites—we're shaping the future of web development. Being pioneers means constantly pushing boundaries, staying ahead of the curve, and empowering businesses with websites that grow with them, not against them. We succeed when our clients thrive. That's the power of composable.",
  className = "",
  imageSrc = "/image/vision/vision-1.jpeg",
  imageAlt = "Our Mission"
}) => {
  return (
    <section className={`relative bg-white text-gray-900 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 ${className}`}>
      <div className="container mx-auto px-4 w-full">
        <div className="flex w-full flex-col gap-8 lg:justify-between lg:gap-24 lg:flex-row-reverse">
          <div className="flex w-full flex-col justify-center gap-8 lg:max-w-[700px]">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                {subtitle && (
                  <motion.h4 
                    className="flex w-fit text-base items-center gap-2.5 text-black uppercase font-mono"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    {subtitle}
                  </motion.h4>
                )}
                <div className="pt-2">
                  <motion.h3 
                    className="text-3xl md:text-4xl lg:text-5xl font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {heading}
                  </motion.h3>
                </div>
              </div>
              <motion.div 
                className="flex w-full flex-col gap-6 text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p>{description}</p>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            className="flex w-full items-center pt-8 md:pt-0 lg:max-w-[700px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-full">
              <div className="group relative w-full overflow-hidden rounded-xl shadow-xl">
                <img 
                  src={imageSrc} 
                  alt={imageAlt}
                  className="w-full rounded-xl object-cover h-[400px] md:h-[500px] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;