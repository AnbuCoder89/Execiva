import React from 'react';
import { CheckCircle } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  background?: string;
  objectives?: string | string[];
  approach?: string;
  keyDeliverables?: string[];
  resultsAchieved?: string;
  clientFeedback?: string[];
  notableInsights?: string;
  lessonsLearned?: string;
  challengesOvercome?: string;
  nextSteps?: string;
  extensionPossibilities?: string;
  impactArea?: string[];
  [key: string]: any;
}

interface CaseContentProps {
  caseStudy: CaseStudy;
}

const CaseContent: React.FC<CaseContentProps> = ({ caseStudy }) => {
  const renderSection = (key: string, title: string, content: any) => {
    if (!content) return null;

    // Handle different content types
    const renderContent = () => {
      if (Array.isArray(content)) {
        if (key === 'clientFeedback') {
          return (
            <div className="space-y-4">
              {content.map((feedback, index) => (
                <blockquote
                  key={index}
                  className="border-l-4 border-blue-500 pl-6 py-2 bg-blue-50 rounded-r-lg"
                >
                  <p className="text-gray-700 italic font-sf-pro-text">"{feedback}"</p>
                </blockquote>
              ))}
            </div>
          );
        } else {
          return (
            <ul className="space-y-3">
              {content.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed font-sf-pro-text">{item}</span>
                </li>
              ))}
            </ul>
          );
        }
      } else if (typeof content === 'string') {
        return (
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed font-sf-pro-text">{content}</p>
          </div>
        );
      }
      return null;
    };

    return (
      <section id={key} className="mb-12 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 font-sf-pro-display">
          {title}
        </h2>
        {renderContent()}
      </section>
    );
  };

  // Define sections with their titles
  const sections = [
    { key: 'background', title: 'Background & Challenge' },
    { key: 'objectives', title: 'Objectives' },
    { key: 'approach', title: 'Our Approach' },
    { key: 'keyDeliverables', title: 'Key Deliverables' },
    { key: 'resultsAchieved', title: 'Results & Impact' },
    { key: 'clientFeedback', title: 'Client Feedback' },
    { key: 'notableInsights', title: 'Notable Insights' },
    { key: 'lessonsLearned', title: 'Lessons Learned' },
    { key: 'challengesOvercome', title: 'Challenges Overcome' },
    { key: 'nextSteps', title: 'Next Steps' },
    { key: 'extensionPossibilities', title: 'Extension Possibilities' },
    { key: 'impactArea', title: 'Impact Areas' }
  ];

  return (
    <div className="bg-white">
      {sections.map(({ key, title }) => {
        const content = caseStudy[key];
        if (!content || (Array.isArray(content) && content.length === 0) || 
            (typeof content === 'string' && content.trim().length === 0)) {
          return null;
        }
        return renderSection(key, title, content);
      })}
    </div>
  );
};

export default CaseContent;