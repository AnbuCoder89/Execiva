import React from 'react';

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
  [key: string]: any;
}

interface TOCProps {
  caseStudy: CaseStudy;
}

const TOC: React.FC<TOCProps> = ({ caseStudy }) => {
  // Define the sections we want to include in TOC with their display names
  const sectionMap = {
    background: 'Background & Challenge',
    objectives: 'Objectives',
    approach: 'Our Approach',
    keyDeliverables: 'Key Deliverables',
    resultsAchieved: 'Results & Impact',
    clientFeedback: 'Client Feedback',
    notableInsights: 'Notable Insights',
    lessonsLearned: 'Lessons Learned',
    challengesOvercome: 'Challenges Overcome',
    nextSteps: 'Next Steps',
    extensionPossibilities: 'Extension Possibilities'
  };

  // Filter sections that exist in the case study
  const availableSections = Object.entries(sectionMap).filter(([key]) => {
    const value = caseStudy[key];
    return value && (
      (typeof value === 'string' && value.trim().length > 0) ||
      (Array.isArray(value) && value.length > 0)
    );
  });

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (availableSections.length === 0) {
    return null;
  }

  return (
    <nav className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 font-sf-pro-display">
        Table of Contents
      </h3>
      <ul className="space-y-2">
        {availableSections.map(([key, displayName]) => (
          <li key={key}>
            <button
              onClick={() => handleClick(key)}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 text-left w-full font-sf-pro-text hover:underline"
            >
              {displayName}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TOC;