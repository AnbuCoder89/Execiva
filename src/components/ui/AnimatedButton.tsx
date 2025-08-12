import React from 'react';

interface AnimatedButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ 
  children = "Learn More", 
  className = "",
  onClick 
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative px-8 py-4 bg-gray-900 text-white rounded-full 
        hover:bg-gray-800 transition-colors duration-300 
        font-medium font-sf-pro-text shadow-lg hover:shadow-xl 
        transform hover:scale-105 group overflow-hidden
        ${className}
      `}
    >
      <span className="flex items-center gap-3">
        <span className="relative z-10">{children}</span>
        
        {/* Arrow container with fixed width and overflow hidden to prevent layout shift */}
        <span className="relative inline-block w-4 h-4 overflow-hidden">
          {/* Default arrow - slides right and fades out on hover */}
          <span className="absolute inset-0 transition-all duration-300 ease-out group-hover:translate-x-3 group-hover:opacity-0">
            →
          </span>
          
          {/* Hover arrow - starts from left and slides into position */}
          <span className="absolute inset-0 transition-all duration-300 ease-in -translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
            →
          </span>
        </span>
      </span>
    </button>
  );
};

export default AnimatedButton;