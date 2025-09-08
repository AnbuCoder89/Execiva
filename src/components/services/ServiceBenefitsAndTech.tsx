import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaAws, 
  FaDocker 
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiMongodb, 
  SiPostgresql 
} from 'react-icons/si';

interface ServiceBenefitsAndTechProps {
  benefits?: string[];
  technologies?: string[];
}

const ServiceBenefitsAndTech: React.FC<ServiceBenefitsAndTechProps> = () => {
  const technologies = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    { name: 'AWS', icon: FaAws, color: '#FF9900' },
    { name: 'Docker', icon: FaDocker, color: '#2496ED' }
  ];

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

  return (
    <motion.section 
      className="py-16 md:py-20 bg-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 font-sf-pro-display text-center">
            Technologies We Use
          </h2>
          
          {/* Scrolling Technologies Marquee */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee-slow">
              {/* First set of technologies */}
              {technologies.map((tech, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-8 md:mx-12 lg:mx-16 flex flex-col items-center justify-center group"
                >
                  <div 
                    className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-xl bg-white shadow-lg border border-gray-100 mb-4 transition-all duration-300 group-hover:shadow-xl group-hover:scale-110"
                    style={{ 
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    }}
                  >
                    <tech.icon 
                      className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 transition-colors duration-300"
                      style={{ color: tech.color }}
                    />
                  </div>
                  <span className="text-sm md:text-base font-medium text-gray-700 font-sf-pro-text text-center whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
              
              {/* Second set for seamless loop */}
              {technologies.map((tech, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-8 md:mx-12 lg:mx-16 flex flex-col items-center justify-center group"
                >
                  <div 
                    className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-xl bg-white shadow-lg border border-gray-100 mb-4 transition-all duration-300 group-hover:shadow-xl group-hover:scale-110"
                    style={{ 
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    }}
                  >
                    <tech.icon 
                      className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 transition-colors duration-300"
                      style={{ color: tech.color }}
                    />
                  </div>
                  <span className="text-sm md:text-base font-medium text-gray-700 font-sf-pro-text text-center whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
              
              {/* Third set for extra smoothness */}
              {technologies.map((tech, index) => (
                <div
                  key={`third-${index}`}
                  className="flex-shrink-0 mx-8 md:mx-12 lg:mx-16 flex flex-col items-center justify-center group"
                >
                  <div 
                    className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-xl bg-white shadow-lg border border-gray-100 mb-4 transition-all duration-300 group-hover:shadow-xl group-hover:scale-110"
                    style={{ 
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    }}
                  >
                    <tech.icon 
                      className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 transition-colors duration-300"
                      style={{ color: tech.color }}
                    />
                  </div>
                  <span className="text-sm md:text-base font-medium text-gray-700 font-sf-pro-text text-center whitespace-nowrap">
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
            transform: translateX(-33.333%);
          }
        }
        
        .animate-marquee-slow {
          animation: marquee-slow 25s linear infinite;
        }
      `}</style>
    </motion.section>
  );
};

export default ServiceBenefitsAndTech;