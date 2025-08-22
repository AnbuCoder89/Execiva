import React from 'react';
import { BrowserWindow } from '../components/ui';

const BrowserDemoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Browser Window Demo
          </h1>
          <p className="text-xl text-gray-600 font-sans">
            Scroll within the browser window to experience the parallax effect
          </p>
        </div>
        
        <BrowserWindow className="mx-auto" />
        
        <div className="text-center mt-12">
          <p className="text-gray-500 font-sans">
            This component demonstrates smooth parallax scrolling between two content pages
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrowserDemoPage;