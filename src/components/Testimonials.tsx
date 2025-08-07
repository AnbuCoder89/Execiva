import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(2); // Start with center card (index 2)
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

    return () => observer.disconnect();
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
    }
  ];

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  const getCardStyles = (index: number) => {
    const position = index - activeIndex;
    const isActive = index === activeIndex;
    
    if (isActive) {
      // Center card - largest and fully focused
      return {
        width: '350px',
        height: '450px',
        opacity: 1,
        filter: 'blur(0px)',
        transform: 'scale(1)',
        zIndex: 10,
      };
    } else if (Math.abs(position) === 1) {
      // Adjacent cards (left and right of center)
      return {
        width: '300px',
        height: '380px',
        opacity: 0.7,
        filter: 'blur(1px)',
        transform: 'scale(0.9)',
        zIndex: 5,
      };
    } else {
      // Outer cards (far left and far right)
      return {
        width: '250px',
        height: '320px',
        opacity: 0.5,
        filter: 'blur(2px)',
        transform: 'scale(0.8)',
        zIndex: 2,
      };
    }
  };

  const getTextStyles = (index: number) => {
    const isActive = index === activeIndex;
    const position = Math.abs(index - activeIndex);
    
    if (isActive) {
      return {
        nameSize: 'text-xl',
        positionSize: 'text-base',
        contentSize: 'text-base',
        imageSize: 'w-20 h-20',
        starSize: 18,
        padding: 'p-8'
      };
    } else if (position === 1) {
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
    <section id="testimonials" className="py-20 md:py-32 bg-gray-50 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-light text-gray-900 mb-4 transition-all duration-1000 font-sf-pro-display ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            We Care About Our Customers
            <span className="block font-normal text-gray-600 mt-2">
              Experience Too
            </span>
          </h2>
        </div>

        {/* 5-Card Horizontal Carousel */}
        <div className="flex items-center justify-center gap-6 mb-12">
          {testimonials.map((testimonial, index) => {
            const cardStyles = getCardStyles(index);
            const textStyles = getTextStyles(index);
            const isActive = index === activeIndex;
            
            return (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-700 ease-out flex-shrink-0 ${
                  !isActive ? 'hover:opacity-80 hover:scale-105' : ''
                }`}
                style={{
                  ...cardStyles,
                  transition: 'all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
                onClick={() => handleCardClick(index)}
              >
                <div className={`bg-white rounded-2xl p-6 shadow-xl border border-gray-100 w-full h-full flex flex-col justify-between transition-all duration-700 ${
                  textStyles.padding
                } ${
                  isActive 
                    ? 'shadow-2xl border-gray-200' 
                    : 'hover:shadow-xl'
                }`}>
                  {/* Profile Image */}
                  <div className="flex justify-center mb-3">
                    <div className={`${textStyles.imageSize} rounded-full overflow-hidden bg-gray-100 transition-all duration-300`}>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    {/* Name */}
                    <h3 className={`text-center font-semibold text-gray-900 mb-2 font-sf-pro-display transition-all duration-300 ${textStyles.nameSize}`}>
                      {testimonial.name}
                    </h3>

                    {/* Position */}
                    <p className={`text-center text-gray-600 mb-3 font-sf-pro-text transition-all duration-300 ${textStyles.positionSize}`}>
                      {testimonial.position}
                    </p>

                    {/* Content */}
                    <p className={`text-gray-700 leading-relaxed mb-3 font-sf-pro-text text-center transition-all duration-300 ${textStyles.contentSize}`}>
                      {isActive ? testimonial.content : testimonial.content.substring(0, 80) + '...'}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={textStyles.starSize} 
                        className="text-blue-500 fill-current transition-all duration-300" 
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleCardClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-gray-800 scale-125 shadow-lg' 
                  : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;