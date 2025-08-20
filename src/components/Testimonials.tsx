import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(2); // Start with center card active
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const testimonials = [
    {
      name: "Sarah Chen",
      position: "CEO, TechCorp",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Working with this team has been transformative for our business. Their attention to detail and innovative approach exceeded all expectations.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      position: "CTO, FinanceFirst",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "The level of professionalism and technical expertise is unmatched. They delivered a solution that perfectly aligned with our vision.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      position: "Founder, MedConnect",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "From concept to launch, they guided us every step of the way. The result exceeded our wildest dreams and transformed our industry presence.",
      rating: 5
    },
    {
      name: "David Park",
      position: "VP, Innovation Labs",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Their strategic approach and cutting-edge solutions have revolutionized how we operate. Truly exceptional partnership and results.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      position: "Marketing Director, GrowthTech",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "The team's creativity and technical expertise delivered beyond our expectations. Our digital transformation was seamless and impactful.",
      rating: 5
    },
    {
      name: "James Wilson",
      position: "Founder, StartupHub",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Outstanding results that transformed our entire business model. The team's expertise and dedication are truly remarkable.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      position: "Head of Digital, RetailCorp",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Incredible attention to detail and innovative solutions. They exceeded every expectation and delivered exceptional results.",
      rating: 5
    },
    {
      name: "Robert Kim",
      position: "CTO, DataFlow",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Professional, innovative, and results-driven. The perfect partner for digital transformation and growth.",
      rating: 5
    },
    {
      name: "Amanda Foster",
      position: "CEO, InnovateLab",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Exceptional service and outstanding results. They brought our vision to life with precision and creativity.",
      rating: 5
    }
  ];

  const handleCardClick = (position: number) => {
    if (isAnimating || position === 0) return; // Don't animate if already center or animating
    
    setIsAnimating(true);
    
    // Create smooth transition by moving one step at a time
    const steps = Math.abs(position);
    const direction = position > 0 ? 1 : -1;
    let currentStep = 0;
    
    const slideStep = () => {
      if (currentStep < steps) {
        setActiveIndex(prev => (prev + direction + testimonials.length) % testimonials.length);
        currentStep++;
        setTimeout(slideStep, 150); // 150ms between each step
      } else {
        setIsAnimating(false);
      }
    };
    
    slideStep();
  };

  const handleIndicatorClick = (index: number) => {
    if (isAnimating || activeIndex === index) return;
    
    setIsAnimating(true);
    
    // Calculate shortest path to target
    const totalCards = testimonials.length;
    const directDistance = index - activeIndex;
    const wrapDistance = directDistance > 0 
      ? directDistance - totalCards 
      : directDistance + totalCards;
    
    const shortestDistance = Math.abs(directDistance) <= Math.abs(wrapDistance) 
      ? directDistance 
      : wrapDistance;
    
    const steps = Math.abs(shortestDistance);
    const direction = shortestDistance > 0 ? 1 : -1;
    let currentStep = 0;
    
    const slideStep = () => {
      if (currentStep < steps) {
        setActiveIndex(prev => (prev + direction + totalCards) % totalCards);
        currentStep++;
        setTimeout(slideStep, 120); // Slightly faster for indicator clicks
      } else {
        setIsAnimating(false);
      }
    };
    
    slideStep();
  };

  // Calculate position of each card relative to active index
  const getCardPosition = (cardIndex: number) => {
    const diff = cardIndex - activeIndex;
    if (diff > testimonials.length / 2) {
      return diff - testimonials.length;
    } else if (diff < -testimonials.length / 2) {
      return diff + testimonials.length;
    }
    return diff;
  };

  const getCardStyles = (cardIndex: number) => {
    const position = getCardPosition(cardIndex);
    const isActive = position === 0;
    const cardSpacing = 320; // Consistent spacing between card centers
    
    if (isActive) {
      return {
        width: '350px',
        height: '450px',
        scale: 1,
        translateX: position * cardSpacing + 'px',
        zIndex: 10,
        filter: 'blur(0px)',
        opacity: 1,
      };
    } else if (Math.abs(position) === 1) {
      return {
        width: '300px',
        height: '380px',
        scale: 0.9,
        translateX: position * cardSpacing + 'px',
        zIndex: 5,
        filter: 'blur(2px)',
        opacity: 0.7,
      };
    } else {
      return {
        width: '250px',
        height: '320px',
        scale: 0.8,
        translateX: position * cardSpacing + 'px',
        zIndex: 2,
        filter: 'blur(3px)',
        opacity: 0.5,
      };
    }
  };

  const getTextStyles = (cardIndex: number) => {
    const position = getCardPosition(cardIndex);
    const isActive = position === 0;
    
    if (isActive) {
      return {
        nameSize: 'text-xl',
        positionSize: 'text-base',
        contentSize: 'text-base',
        imageSize: 'w-20 h-20',
        starSize: 18,
        padding: 'p-8'
      };
    } else if (Math.abs(position) === 1) {
      return {
        nameSize: 'text-lg',
        positionSize: 'text-sm',
        contentSize: 'text-sm',
        imageSize: 'w-16 h-16',
        starSize: 16,
        padding: 'p-6'
      };
    } else {
      return {
        nameSize: 'text-base',
        positionSize: 'text-xs',
        contentSize: 'text-xs',
        imageSize: 'w-12 h-12',
        starSize: 14,
        padding: 'p-4'
      };
    }
  };

  return (
    <section 
      id="testimonials" 
      className="relative w-full min-h-screen py-20 md:pb-32 bg-gray-50" 
      ref={sectionRef}
    >
      <div className="px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-light text-gray-900 mb-4 transition-all duration-1000 font-sf-pro-display ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            We Care About Our Customers
            <span className="block font-normal text-gray-600 mt-2">
              Experience Too
            </span>
          </h2>
        </div>

        {/* Sliding Carousel */}
        <div className="flex justify-center items-center mb-12 overflow-hidden">
          <div className="relative flex items-center justify-center" style={{ width: '1600px', height: '500px' }}>
            {testimonials.map((card, cardIndex) => {
              const cardStyles = getCardStyles(cardIndex);
              const textStyles = getTextStyles(cardIndex);
              const position = getCardPosition(cardIndex);
              const isActive = position === 0;
              const isVisible = Math.abs(position) <= 3; // Show more cards for better context
              
              return (
                <div
                  key={cardIndex}
                  className={`absolute cursor-pointer flex-shrink-0 transition-all duration-700 ease-in-out will-change-transform ${
                    !isActive ? 'hover:opacity-80' : ''
                  } ${!isVisible ? 'pointer-events-none' : ''}`}
                  style={{
                    width: cardStyles.width,
                    height: cardStyles.height,
                    transform: `translateX(${cardStyles.translateX}) scale(${cardStyles.scale})`,
                    filter: cardStyles.filter,
                    opacity: isVisible ? cardStyles.opacity : 0,
                    zIndex: cardStyles.zIndex,
                    left: '50%',
                    marginLeft: '-175px', // Center point for all cards
                  }}
                  onClick={() => handleCardClick(position)}
                >
                  <div className={`bg-white rounded-2xl shadow-xl border border-gray-100 w-full h-full flex flex-col justify-between ${
                    textStyles.padding
                  } ${
                    isActive 
                      ? 'shadow-2xl border-gray-200' 
                      : 'hover:shadow-xl'
                  }`}>
                    {/* Profile Image */}
                    <div className="flex justify-center mb-3">
                      <div 
                        className="rounded-full overflow-hidden bg-gray-100"
                        style={{ 
                          width: textStyles.imageSize.split(' ')[0].replace('w-', '') === '20' ? '80px' : textStyles.imageSize.split(' ')[0].replace('w-', '') === '16' ? '64px' : '48px', 
                          height: textStyles.imageSize.split(' ')[0].replace('w-', '') === '20' ? '80px' : textStyles.imageSize.split(' ')[0].replace('w-', '') === '16' ? '64px' : '48px'
                        }}
                      >
                        <img
                          src={card.image}
                          alt={card.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-center">
                      {/* Name */}
                      <h3 
                        className="text-center font-semibold text-gray-900 mb-2 font-sf-pro-display"
                        style={{ fontSize: textStyles.nameSize === 'text-xl' ? '1.25rem' : textStyles.nameSize === 'text-lg' ? '1.125rem' : '1rem' }}
                      >
                        {card.name}
                      </h3>

                      {/* Position */}
                      <p 
                        className="text-center text-gray-600 mb-3 font-sf-pro-text"
                        style={{ fontSize: textStyles.positionSize === 'text-base' ? '1rem' : textStyles.positionSize === 'text-sm' ? '0.875rem' : '0.75rem' }}
                      >
                        {card.position}
                      </p>

                      {/* Content */}
                      <p 
                        className="text-gray-700 leading-relaxed mb-3 font-sf-pro-text text-center"
                        style={{ fontSize: textStyles.contentSize === 'text-base' ? '1rem' : textStyles.contentSize === 'text-sm' ? '0.875rem' : '0.75rem' }}
                      >
                        {isActive ? card.content : card.content.substring(0, 80) + '...'}
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center space-x-1">
                      {[...Array(card.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={textStyles.starSize}
                          className="text-blue-500 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-gray-800 scale-125 shadow-lg' 
                  : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
              } ${isAnimating ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
              aria-label={`Go to testimonial ${index + 1}`}
              disabled={isAnimating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;