import React, { useEffect, useRef, useState } from 'react';

interface Card {
  title: string;
  subtitle: string;
  badge: string;
  backgroundImage: string;
  content: React.ReactNode;
}

interface ScrollStackProps {
  cards: Card[];
  backgroundColor?: string;
  cardHeight?: string;
  animationDuration?: string;
  sectionHeightMultiplier?: number;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  cards,
  backgroundColor = 'white',
  cardHeight = '80vh',
  animationDuration = '0.7s',
  sectionHeightMultiplier = 4
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress within the container
      const scrollStart = -rect.top;
      const scrollEnd = containerHeight - windowHeight;
      const progress = Math.max(0, Math.min(1, scrollStart / scrollEnd));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCardTransform = (index: number) => {
    const totalCards = cards.length;
    const cardProgress = scrollProgress * (totalCards - 1);
    const cardIndex = Math.floor(cardProgress);
    const cardOffset = cardProgress - cardIndex;

    if (index < cardIndex) {
      // Cards that have scrolled past
      return {
        transform: `translateY(-100vh) scale(0.8)`,
        opacity: 0,
        zIndex: 1
      };
    } else if (index === cardIndex) {
      // Current active card
      return {
        transform: `translateY(${-cardOffset * 100}vh) scale(${1 - cardOffset * 0.1})`,
        opacity: 1 - cardOffset * 0.3,
        zIndex: totalCards - index + 10
      };
    } else if (index === cardIndex + 1) {
      // Next card coming in
      return {
        transform: `translateY(${(1 - cardOffset) * 20}px) scale(${0.9 + cardOffset * 0.1})`,
        opacity: 0.7 + cardOffset * 0.3,
        zIndex: totalCards - index + 5
      };
    } else {
      // Cards waiting to be shown
      return {
        transform: `translateY(40px) scale(0.9)`,
        opacity: 0.5,
        zIndex: totalCards - index
      };
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{
        height: `${sectionHeightMultiplier * 100}vh`,
        backgroundColor
      }}
    >
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
        {cards.map((card, index) => {
          const cardStyle = getCardTransform(index);
          
          return (
            <div
              key={index}
              className="absolute w-full max-w-4xl mx-auto px-4"
              style={{
                height: cardHeight,
                ...cardStyle,
                transition: `all ${animationDuration} ease-out`
              }}
            >
              <div
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  backgroundImage: `url(${card.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
                
                {/* Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {card.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 text-white h-full">
                  {card.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollStack;