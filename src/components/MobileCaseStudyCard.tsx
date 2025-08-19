import React from 'react';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  topic: string;
  industry: string;
  region: string;
  channel: string;
  product: string;
  image: string;
  description: string;
}

interface MobileCaseStudyCardProps {
  study: CaseStudy;
  onClick?: () => void;
}

const MobileCaseStudyCard: React.FC<MobileCaseStudyCardProps> = ({ study, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative h-40 md:h-48 overflow-hidden">
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        <div className="mb-2 md:mb-3">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide font-sf-pro-text">
            {study.subtitle}
          </span>
        </div>
        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 md:mb-3 leading-tight font-sf-pro-display">
          {study.title}
        </h3>
        <p className="text-xs md:text-sm text-gray-600 font-sf-pro-text line-clamp-2">
          {study.description}
        </p>
      </div>
    </div>
  );
};

export default MobileCaseStudyCard;