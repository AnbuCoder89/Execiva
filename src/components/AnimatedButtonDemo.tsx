import React from 'react';
import AnimatedButton from './ui/AnimatedButton';

const AnimatedButtonDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Animated Button Demo
        </h1>
        
        <div className="space-y-6">
          {/* Default button */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">Default Style</h3>
            <AnimatedButton />
          </div>
          
          {/* Custom styled buttons */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">Custom Variants</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <AnimatedButton className="bg-blue-600 hover:bg-blue-700">
                Get Started
              </AnimatedButton>
              
              <AnimatedButton className="bg-green-600 hover:bg-green-700">
                Explore More
              </AnimatedButton>
              
              <AnimatedButton className="bg-purple-600 hover:bg-purple-700">
                Discover
              </AnimatedButton>
            </div>
          </div>
          
          {/* Outline variant */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">Outline Style</h3>
            <AnimatedButton className="bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white">
              Learn More
            </AnimatedButton>
          </div>
          
          {/* Light variant */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">Light Style</h3>
            <AnimatedButton className="bg-white text-gray-900 border border-gray-300 hover:bg-gray-100 shadow-md">
              Continue Reading
            </AnimatedButton>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Animation Details</h3>
          <ul className="text-left text-gray-600 space-y-2">
            <li>• Default state shows "Learn More →" with arrow positioned next to text</li>
            <li>• On hover, current arrow slides right and fades out (ease-out)</li>
            <li>• New arrow slides in from left simultaneously (ease-in)</li>
            <li>• 300ms smooth transition with no layout shift</li>
            <li>• Uses absolute positioning to keep text perfectly still</li>
            <li>• Fully responsive with Tailwind CSS classes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnimatedButtonDemo;