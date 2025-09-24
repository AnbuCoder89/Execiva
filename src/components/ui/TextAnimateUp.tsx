import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface TextAnimateUpProps {
  text: string;
  className?: string;
  wordDelay?: number;
  charDelay?: number;
}

const TextAnimateUp: React.FC<TextAnimateUpProps> = ({
  text,
  className = '',
  wordDelay = 0.1,
  charDelay = 0.03,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll('.char');
    
    // Set initial state
    gsap.set(chars, { 
      y: '100%', 
      opacity: 0,
      display: 'inline-block',
      whiteSpace: 'pre',
    });

    // Animate each character with a small delay
    gsap.to(chars, {
      y: '0%',
      opacity: 1,
      duration: 0.8,
      stagger: charDelay,
      ease: 'power3.out',
      delay: 0.5, // Initial delay before animation starts
    });

    return () => {
      // Cleanup function
      gsap.killTweensOf(chars);
    };
  }, [text, charDelay]);

  // Split text into characters and render each one in a span
  const renderText = () => {
    return text.split('').map((char, index) => (
      <span 
        key={index} 
        className="char"
        style={{
          display: 'inline-block',
          whiteSpace: 'pre',
          willChange: 'transform, opacity',
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <span 
      ref={containerRef} 
      className={`inline-block overflow-hidden ${className}`}
      aria-label={text}
    >
      {renderText()}
    </span>
  );
};

export default TextAnimateUp;
