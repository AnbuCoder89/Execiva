import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(2); // Start with center card active
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

  // Auto-slide effect (optional - can be removed if you want manual only)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
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

  const getCardStyle = (index: number) => {
    const position = index - activeIndex;
    const isActive = index === activeIndex;
    
    // Base styles for all cards
    let transform = '';
    let scale = 1;
    let opacity = 1;
    let zIndex = 1;
    let blur = 0;

    if (isActive) {
      // Center card (active)
      scale = 1;
      opacity = 1;
      zIndex = 10;
      blur = 0;
    } else if (Math.abs(position) === 1) {
      // Adjacent cards (left and right)
      scale = 0.85;
      opacity = 0.7;
      zIndex = 5;
      blur = 1;
      transform = `translateX(${position * 20}px) rotateY(${position * -15}deg)`;
    } else if (Math.abs(position) === 2) {
      // Outer cards
      scale = 0.7;
      opacity = 0.5;
      zIndex = 2;
      blur = 2;
      transform = `translateX(${position * 40}px) rotateY(${position * -25}deg)`;
    } else {
      // Hidden cards
      scale = 0.6;
      opacity = 0.3;
      zIndex = 1;
      blur = 3;
      transform = `translateX(${position * 60}px) rotateY(${position * -35}deg)`;
    }

    return {
      transform: `${transform} scale(${scale})`,
      opacity,
      zIndex,
      filter: `blur(${blur}px)`,
      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    };
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

        {/* 3D Carousel Container */}
        <div className="relative h-96 flex items-center justify-center perspective-1000">
          <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute w-80 h-80 cursor-pointer transform-gpu ${
                  index === activeIndex ? 'cursor-default' : 'cursor-pointer hover:scale-105'
                }`}
                style={getCardStyle(index)}
                onClick={() => handleCardClick(index)}
              >
                <div className={`bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100 w-full h-full flex flex-col justify-center transition-all duration-300 ${
                  index === activeIndex 
                    ? 'shadow-2xl border-gray-200' 
                    : 'hover:shadow-xl'
                }`}>
                  {/* Profile Image */}
                  <div className="flex justify-center mb-4">
                    <div className={`rounded-full overflow-hidden bg-gray-100 transition-all duration-300 ${
                      index === activeIndex ? 'w-20 h-20' : 'w-16 h-16'
                    }`}>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className={`text-center font-semibold text-gray-900 mb-1 font-sf-pro-display transition-all duration-300 ${
                    index === activeIndex ? 'text-xl' : 'text-lg'
                  }`}>
                    {testimonial.name}
                  </h3>

                  {/* Position */}
                  <p className={`text-center text-gray-600 mb-4 font-sf-pro-text transition-all duration-300 ${
                    index === activeIndex ? 'text-base' : 'text-sm'
                  }`}>
                    {testimonial.position}
                  </p>

                  {/* Content */}
                  <p className={`text-gray-700 leading-relaxed mb-4 font-sf-pro-text text-center transition-all duration-300 ${
                    index === activeIndex ? 'text-base' : 'text-sm'
                  }`}>
                    {testimonial.content}
                  </p>

                  {/* Rating */}
                  <div className="flex justify-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={index === activeIndex ? 18 : 16} 
                        className="text-blue-500 fill-current transition-all duration-300" 
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-12 space-x-3">
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