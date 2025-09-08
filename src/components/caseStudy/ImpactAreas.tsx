import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

interface ImpactAreasProps {
  impactArea: string[];
}

const ImpactAreas: React.FC<ImpactAreasProps> = ({ impactArea }) => {
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
      className="py-16 md:py-20 bg-gray-50"
      variants={itemVariants}
    >
      <div className="max-w-[1490px] px-4 lg:px-10 box-content mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-semibold text-gray-900 mb-8 font-sf-pro-display"
            variants={itemVariants}
          >
            Impact Areas
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-4">
            {impactArea.map((area, index) => (
              <motion.span
                key={index}
                className="px-6 py-3 bg-green-50 text-green-800 rounded-full text-lg font-medium font-sf-pro-text border border-green-200"
                variants={itemVariants}
                whileHover={{ scale: 1.05, backgroundColor: "#DCFCE7" }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Target className="w-5 h-5 inline-block mr-2" />
                {area}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ImpactAreas;