import React from "react";
import { motion } from "framer-motion";
import ScrollVelocity from '@/components/ui/InfiniteScroll';

interface ServiceBenefitsAndTechProps {
  benefits?: string[];
  technologies?: string[];
}

const ServiceBenefitsAndTech: React.FC<ServiceBenefitsAndTechProps> = () => {
  const technologies = [
    {
      name: "React",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Node.js",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "TypeScript",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },
    {
      name: "MongoDB",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "PostgreSQL",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "AWS",
      src: "https://cdn.worldvectorlogo.com/logos/amazon-web-services-1.svg",
    },
    {
      name: "Docker",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <motion.section
      className="py-16 md:py-20 bg-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center font-sf-pro-display">
            Technologies We Use
          </h2>

          {/* Scrolling Logos Marquee */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee-slow">
              {/* First pass */}
              {technologies.map((tech, idx) => (
                <div
                  key={`first-${idx}`}
                  className="flex-shrink-0 mx-10 flex flex-col items-center group"
                >
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className="h-12 sm:h-14 lg:h-16 object-contain transition-transform group-hover:scale-110"
                    loading="lazy"
                  />
                  <span className="mt-3 text-sm md:text-base font-medium text-gray-700 font-sf-pro-text">
                    {tech.name}
                  </span>
                </div>
              ))}

              {/* Second pass (for seamless loop) */}
              {technologies.map((tech, idx) => (
                <div
                  key={`second-${idx}`}
                  className="flex-shrink-0 mx-10 flex flex-col items-center group"
                >
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className="h-12 sm:h-14 lg:h-16 object-contain transition-transform group-hover:scale-110"
                    loading="lazy"
                  />
                  <span className="mt-3 text-sm md:text-base font-medium text-gray-700 font-sf-pro-text">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes marquee-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-slow {
          animation: marquee-slow 30s linear infinite;
        }
      `}</style>


      <ScrollVelocity
  images={[
    { src: '/logo1.svg', alt: 'Logo 1', className: 'h-16 mx-8' },
    { src: '/logo2.svg', alt: 'Logo 2', className: 'h-16 mx-8' },
    { src: '/logo3.svg', alt: 'Logo 3', className: 'h-16 mx-8' },
  ]}
  velocity={80}
  numCopies={8}
/>

      
    </motion.section>
  );
};

export default ServiceBenefitsAndTech;