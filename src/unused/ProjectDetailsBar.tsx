import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import BackButton from '../ui/BackButton';

interface ProjectDetailsBarProps {
  region: string;
  product: string;
  channel: string;
  projectTimeline: string;
  onBackClick: () => void;
}

const ProjectDetailsBar: React.FC<ProjectDetailsBarProps> = ({
  region,
  product,
  channel,
  projectTimeline,
  onBackClick
}) => {
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
    <motion.div 
      className="py-8 border-t md:py-9 bg-beige"
      variants={itemVariants}
    >
      <div className="max-w-[1490px] px-4 lg:px-10 box-content mx-auto">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
          <ul className="flex flex-col gap-6 lg:flex-row lg:flex-wrap lg:gap-y-4 lg:gap-x-8">
            <li className="lg:gap-1">
              <p className="text-xs font-medium text-gray-600 uppercase tracking-wide font-sf-pro-text">REGION</p>
              <p className="text-sm text-gray-800 opacity-80 font-sf-pro-text">{region}</p>
            </li>
            
            <li className="lg:gap-1">
              <p className="text-xs font-medium text-gray-600 uppercase tracking-wide font-sf-pro-text">PRODUCT</p>
              <ul className="flex flex-wrap gap-4">
                <li className="text-sm font-sf-pro-text">
                  <span className="text-gray-800 opacity-80">{product}</span>
                </li>
              </ul>
            </li>
            
            <li className="lg:gap-1">
              <p className="text-xs font-medium text-gray-600 uppercase tracking-wide font-sf-pro-text">CHANNEL</p>
              <ul className="flex flex-wrap gap-4">
                <li className="text-sm font-sf-pro-text">
                  <span className="text-gray-800 opacity-80">{channel}</span>
                </li>
              </ul>
            </li>

            <li className="lg:gap-1">
              <p className="text-xs font-medium text-gray-600 uppercase tracking-wide font-sf-pro-text">TIMELINE</p>
              <p className="text-sm text-gray-800 opacity-80 font-sf-pro-text">{projectTimeline}</p>
            </li>
          </ul>
          
          {/* Back Button */}
          <div className="md:ml-auto">
            <BackButton
              variant="ghost"
              size="sm"
              onClick={onBackClick}
              className="text-gray-600 hover:text-gray-900"
              label="Back to Case Studies"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetailsBar;