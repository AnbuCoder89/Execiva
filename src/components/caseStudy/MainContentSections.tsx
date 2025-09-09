import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface CaseStudy {
  background?: string;
  objectives?: string;
  approach?: string;
  keyDeliverables?: string[];
  resultsAchieved?: string;
  clientFeedback?: string[];
  notableInsights?: string;
  lessonsLearned?: string;
  challengesOvercome?: string;
  nextSteps?: string;
  extensionPossibilities?: string;
}

interface MainContentSectionsProps {
  caseStudy: CaseStudy;
}

const MainContentSections: React.FC<MainContentSectionsProps> = ({ caseStudy }) => {
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
      variants={itemVariants}
    >
      <div className="max-w-[1490px] px-4 lg:px-10 box-content mx-auto">
        <div className="max-w-4xl mx-auto">
  
          {/* Key Deliverables */}
          {caseStudy.keyDeliverables && (
            <motion.div 
              className="mb-16"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-semibold text-gray-900 mb-6 font-sf-pro-display">Key Deliverables</h2>
              <div className="space-y-4">
                {caseStudy.keyDeliverables.map((deliverable, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 leading-relaxed font-sf-pro-text">{deliverable}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Results & Impact */}
          {caseStudy.resultsAchieved && (
            <motion.div 
              className="mb-16"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-semibold text-gray-900 mb-6 font-sf-pro-display">Results & Impact</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed font-sf-pro-text">{caseStudy.resultsAchieved}</p>
              </div>
            </motion.div>
          )}

          {/* Client Feedback */}
          {caseStudy.clientFeedback && caseStudy.clientFeedback.length > 0 && (
            <motion.div 
              className="mb-16"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-semibold text-gray-900 mb-6 font-sf-pro-display">Client Feedback</h2>
              <div className="space-y-4">
                {caseStudy.clientFeedback.map((feedback, index) => (
                  <motion.blockquote
                    key={index}
                    className="border-l-4 border-blue-500 pl-6 py-2 bg-blue-50 rounded-r-lg"
                    whileHover={{ scale: 1.02, x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <p className="text-gray-700 italic font-sf-pro-text">"{feedback}"</p>
                  </motion.blockquote>
                ))}
              </div>
            </motion.div>
          )}

          {/* Notable Insights */}
          {caseStudy.notableInsights && (
            <motion.div 
              className="mb-16"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-semibold text-gray-900 mb-6 font-sf-pro-display">Notable Insights</h2>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-700 leading-relaxed font-sf-pro-text">{caseStudy.notableInsights}</p>
              </div>
            </motion.div>
          )}

          {/* Lessons Learned & Challenges */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {caseStudy.lessonsLearned && (
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-sf-pro-display">Lessons Learned</h3>
                <p className="text-gray-700 leading-relaxed font-sf-pro-text">{caseStudy.lessonsLearned}</p>
              </motion.div>
            )}

            {caseStudy.challengesOvercome && (
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-sf-pro-display">Challenges Overcome</h3>
                <p className="text-gray-700 leading-relaxed font-sf-pro-text">{caseStudy.challengesOvercome}</p>
              </motion.div>
            )}
          </div>

          {/* Next Steps & Future Possibilities */}
          <div className="grid md:grid-cols-2 gap-12">
            {caseStudy.nextSteps && (
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-sf-pro-display">Next Steps</h3>
                <p className="text-gray-700 leading-relaxed font-sf-pro-text">{caseStudy.nextSteps}</p>
              </motion.div>
            )}

            {caseStudy.extensionPossibilities && (
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-sf-pro-display">Extension Possibilities</h3>
                <p className="text-gray-700 leading-relaxed font-sf-pro-text">{caseStudy.extensionPossibilities}</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default MainContentSections;