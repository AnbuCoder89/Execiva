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
        setTimeout(slideStep, 200); // 200ms between each step for smoother feel
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
        setTimeout(slideStep, 180); // Balanced speed for indicator clicks
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
    const absPosition = Math.abs(position);
    const cardSpacing = 280; // Optimized spacing for smoother transitions
    
    // Dynamic interpolation with smooth falloff based on distance from center
    let scale, width, height, opacity, blur, zIndex;
    
    // Smooth interpolation using exponential falloff for natural transitions
    const falloff = Math.pow(0.85, absPosition);
    const sizeFalloff = Math.pow(0.88, absPosition);
    
    scale = Math.max(0.5, falloff);
    width = Math.max(180, 300 * sizeFalloff);
    height = Math.max(240, 380 * sizeFalloff);
    opacity = Math.max(0.3, falloff);
    blur = Math.min(5, absPosition * 1.2);
    zIndex = Math.max(1, 20 - absPosition);
    
    return {
      width: width + 'px',
      height: height + 'px',
      scale: scale,
      translateX: position * cardSpacing + 'px',
      zIndex: zIndex,
      filter: `blur(${blur}px)`,
      opacity: opacity,
    };
  };

  const getTextStyles = (cardIndex: number) => {
    const position = getCardPosition(cardIndex);
    const absPosition = Math.abs(position);
    
    // Smooth text scaling with exponential falloff
    const textFalloff = Math.pow(0.9, absPosition);
    const imageFalloff = Math.pow(0.85, absPosition);
    const paddingFalloff = Math.pow(0.8, absPosition);
    
    const nameSize = Math.max(12, 20 * textFalloff);
    const positionSize = Math.max(10, 16 * textFalloff);
    const contentSize = Math.max(10, 16 * textFalloff);
    const imageSize = Math.max(32, 72 * imageFalloff);
    const starSize = Math.max(12, 20 * textFalloff);
    const padding = Math.max(8, 28 * paddingFalloff);
    
    return {
      nameSize,
      positionSize,
      contentSize,
      imageSize,
      starSize,
      padding
    };
  };

  const getContentLength = (cardIndex: number) => {
    const position = getCardPosition(cardIndex);
    const absPosition = Math.abs(position);
    
    // Dynamic content length based on distance from center
    const baseLength = 180;
    const lengthFalloff = Math.pow(0.4, absPosition);
    const maxLength = Math.max(40, baseLength * lengthFalloff);
    
    return {
      showFullContent: absPosition === 0,
      maxLength: Math.floor(maxLength)
    };
  };

  return (
    <section 
      id="testimonials" 
      className="relative w-full min-h-screen py-20 md:pb-32 bg-white" 
      ref={sectionRef}
    >
      <div className="px-6">
        {/* Header */}
<h2 className={`text-4xl md:text-5xl font-light text-gray-900 mb-4 transition-all duration-1000 font-sf-pro-display text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
  We Care About Our Customers
  <span className="block font-normal text-gray-600 mt-2">
    Experience Too
  </span>
</h2>

        </div>

        {/* Sliding Carousel */}
        <div className="flex justify-center items-center mb-12 overflow-hidden">
          <div className="relative flex items-center justify-center" style={{ width: '1200px', height: '400px' }}>
            {testimonials.map((card, cardIndex) => {
              const cardStyles = getCardStyles(cardIndex);
              const textStyles = getTextStyles(cardIndex);
              const contentStyles = getContentLength(cardIndex);
              const position = getCardPosition(cardIndex);
              const absPosition = Math.abs(position);
              const isVisible = absPosition <= 3; // Show more cards for smoother transitions
              
              return (
                <div
                  key={cardIndex}
                  className={`absolute cursor-pointer flex-shrink-0 transition-all duration-800 ease-in-out will-change-transform ${
                    absPosition !== 0 ? 'hover:opacity-90' : ''
                  } ${!isVisible ? 'pointer-events-none' : ''}`}
                  style={{
                    width: cardStyles.width,
                    height: cardStyles.height,
                    transform: `translateX(${cardStyles.translateX}) scale(${cardStyles.scale})`,
                    filter: cardStyles.filter,
                    opacity: isVisible ? cardStyles.opacity : 0,
                    zIndex: cardStyles.zIndex,
                    left: '50%',
                    transform: `translateX(calc(${cardStyles.translateX} - 50%)) scale(${cardStyles.scale})`,
                  }}
                  onClick={() => handleCardClick(position)}
                >
                  <div className={`bg-white rounded-2xl shadow-xl border border-gray-100 w-full h-full flex flex-col justify-between ${
                    absPosition === 0 ? 'shadow-2xl border-gray-200' : 'hover:shadow-xl'
                  }`}
                  style={{ 
                    padding: `${textStyles.padding}px`,
                    transition: 'padding 0.8s ease-in-out'
                  }}>
                    {/* Profile Image */}
                    <div className="flex justify-center mb-3">
                      <div 
                        className="rounded-full overflow-hidden bg-gray-100"
                        style={{ 
                          width: `${textStyles.imageSize}px`, 
                          height: `${textStyles.imageSize}px`,
                          transition: 'all 0.8s ease-in-out'
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
                        style={{ 
                          fontSize: `${textStyles.nameSize}px`,
                          transition: 'all 0.8s ease-in-out'
                        }}
                      >
                        {card.name}
                      </h3>

                      {/* Position */}
                      <p 
                        className="text-center text-gray-600 mb-3 font-sf-pro-text"
                        style={{ 
                          fontSize: `${textStyles.positionSize}px`,
                          transition: 'all 0.8s ease-in-out'
                        }}
                      >
                        {card.position}
                      </p>

                      {/* Content */}
                      <p 
                        className="text-gray-700 leading-relaxed mb-3 font-sf-pro-text text-center"
                        style={{ 
                          fontSize: `${textStyles.contentSize}px`,
                          transition: 'all 0.8s ease-in-out'
                        }}
                      >
                        {contentStyles.showFullContent 
                          ? card.content 
                          : card.content.substring(0, contentStyles.maxLength) + '...'
                        }
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center space-x-1">
                      {[...Array(card.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={textStyles.starSize}
                          className="text-blue-500 fill-current"
                          style={{ transition: 'all 0.8s ease-in-out' }}
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
    </section>
  );
};

export default Testimonials;