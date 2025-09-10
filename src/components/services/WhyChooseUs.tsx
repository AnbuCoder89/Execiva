import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Star, Award, Users, Zap, Shield } from "lucide-react";

interface WhyChooseUsProps {
  serviceName?: string;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ serviceName = "our services" }) => {
  const reasons = [
    {
      icon: Award,
      title: "Proven Expertise",
      description: "Over 500+ successful projects delivered with industry-leading expertise and cutting-edge solutions."
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Work with experienced professionals who understand your business needs and deliver personalized solutions."
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Rapid implementation and deployment without compromising on quality or attention to detail."
    },
    {
      icon: Shield,
      title: "Reliable Support",
      description: "24/7 ongoing support and maintenance to ensure your solutions continue performing at their best."
    },
    {
      icon: Star,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes ensure every deliverable meets the highest standards."
    },
    {
      icon: CheckCircle,
      title: "Client Success",
      description: "98% client satisfaction rate with measurable results that drive real business growth and ROI."
    }
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.section 
      className="py-16 md:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight font-sf-pro-display mb-6">
            Why Choose Us 
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text max-w-3xl mx-auto">
            We combine technical excellence with strategic thinking to deliver solutions that not only meet your immediate needs but position you for long-term success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-6"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
              >
                <reason.icon className="w-8 h-8 text-blue-600" />
              </motion.div>
              
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 font-sf-pro-display">
                {reason.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed font-sf-pro-text">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="mt-16 pt-16 border-t border-gray-200"
          variants={itemVariants}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
              { number: "50M+", label: "Users Impacted" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 font-sf-pro-display mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-sf-pro-text">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;