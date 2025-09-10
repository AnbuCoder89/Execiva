import React from "react";
import { motion } from "framer-motion";

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

  // Create multiple copies for seamless loop
  const extendedTechnologies = [
    ...technologies,
    ...technologies,
    ...technologies,
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

          {/* Circular Loop Animation Container */}
          <div className="relative overflow-hidden">
            {/* Main scrolling strip */}
            <div className="flex animate-circular-loop">
              {extendedTechnologies.map((tech, idx) => (
                <div
                  key={`${tech.name}-${idx}`}
                  className="flex-shrink-0 mx-8 lg:mx-12 flex flex-col items-center group cursor-pointer"
                >
                  <div className="relative">
                    <img
                      src={tech.src}
                      alt={tech.name}
                      className="h-12 sm:h-14 lg:h-16 object-contain transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                      loading="lazy"
                    />
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
                  </div>
                  <span className="mt-3 text-sm md:text-base font-medium text-gray-700 font-sf-pro-text transition-colors duration-300 group-hover:text-blue-600">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes circular-loop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        
        .animate-circular-loop {
          animation: circular-loop 45s linear infinite;
          width: calc(300% + 200px); /* Account for margins */
        }
        
        /* Pause animation on hover for better UX */
        .animate-circular-loop:hover {
          animation-play-state: paused;
        }
        
        /* Smooth performance optimizations */
        .animate-circular-loop {
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }
        
        /* Responsive speed adjustments */
        @media (max-width: 768px) {
          .animate-circular-loop {
            animation-duration: 35s;
          }
        }
        
        @media (min-width: 1024px) {
          .animate-circular-loop {
            animation-duration: 50s;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default ServiceBenefitsAndTech;