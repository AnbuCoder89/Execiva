import React, { ReactNode } from 'react';

interface CaseLayoutProps {
  toc: ReactNode;
  content: ReactNode;
}

const CaseLayout: React.FC<CaseLayoutProps> = ({ toc, content }) => {
  return (
    <div className="min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: Stacked layout */}
        <div className="lg:hidden space-y-6">
          <div className="w-full">
            {toc}
          </div>
          <div className="w-full">
            {content}
          </div>
        </div>

        {/* Desktop: Two-column grid layout */}
        <div className="hidden lg:grid lg:grid-cols-[250px_1fr] lg:gap-8">
          {/* Left column: TOC */}
          <div className="w-full">
            {toc}
          </div>
          
          {/* Right column: Content */}
          <div className="w-full bg-white rounded-lg border border-gray-200 p-8">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseLayout;