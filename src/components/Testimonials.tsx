import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(2); 
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    // ... add other testimonials here
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Continuous style computation for each card
  const computeCardStyles = (index: number, active: number) => {
    const total = testimonials.length;
    let diff = index - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    const abs = Math.abs(diff);

    // Smooth exponential falloff
    const scale = Math.pow(0.85, abs);
    const width = 300 * Math.pow(0.88, abs);
    const height = 380 * Math.pow(0.88, abs);
    const opacity = Math.max(0.3, Math.pow(0.85, abs));
    const blur = abs * 1.2;
    const zIndex = 20 - abs;
    const translateX = diff * 280;

    // Text and image scaling
    const nameSize = 20 * Math.pow(0.9, abs);
    const positionSize = 16 * Math.pow(0.9, abs);
    const contentSize = 16 * Math.pow(0.9, abs);
    const imageSize = 72 * Math.pow(0.85, abs);
    const starSize = 20 * Math.pow(0.9, abs);
    const padding = 28 * Math.pow(0.8, abs);

    // Content truncation
    const maxContentLength = abs === 0 ? Infinity : Math.floor(180 * Math.pow(0.4, abs));

    return {
      scale, width, height, opacity, blur, zIndex, translateX,
      nameSize, positionSize, contentSize, imageSize, starSize, padding,
      maxContentLength
    };
  };

  const handleSlide = (direction: 1 | -1) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(prev => (prev + direction + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 400); // Adjust duration to control speed
  };

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen py-20 bg-white">
      <h2 className={`text-4xl md:text-5xl font-light text-gray-900 mb-4 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        We Care About Our Customers
        <span className="block font-normal text-gray-600 mt-2">Experience Too</span>
      </h2>

      <div className="flex justify-center items-center overflow-hidden">
        <div className="relative flex items-center justify-center w-[1200px] h-[400px]">
          {testimonials.map((card, idx) => {
            const style = computeCardStyles(idx, activeIndex);
            const showFull = style.maxContentLength === Infinity;
            const content = showFull ? card.content : card.content.substring(0, style.maxContentLength) + '...';

            return (
              <div
                key={idx}
                className="absolute flex-shrink-0 transition-all duration-400 ease-in-out"
                style={{
                  width: `${style.width}px`,
                  height: `${style.height}px`,
                  transform: `translateX(calc(${style.translateX}px - 50%)) scale(${style.scale})`,
                  opacity: style.opacity,
                  filter: `blur(${style.blur}px)`,
                  zIndex: style.zIndex,
                  left: '50%',
                }}
              >
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 w-full h-full flex flex-col justify-between"
                  style={{ padding: `${style.padding}px`, transition: 'all 0.4s ease-in-out' }}>
                  
                  {/* Profile */}
                  <div className="flex justify-center mb-3">
                    <div className="rounded-full overflow-hidden bg-gray-100" style={{ width: style.imageSize, height: style.imageSize, transition: 'all 0.4s ease-in-out' }}>
                      <img src={card.image} alt={card.name} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-center font-semibold text-gray-900 mb-2" style={{ fontSize: style.nameSize }}>{card.name}</h3>
                    <p className="text-center text-gray-600 mb-3" style={{ fontSize: style.positionSize }}>{card.position}</p>
                    <p className="text-gray-700 text-center" style={{ fontSize: style.contentSize }}>{content}</p>
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center space-x-1">
                    {[...Array(card.rating)].map((_, i) => (
                      <Star key={i} size={style.starSize} className="text-blue-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center mt-6 space-x-4">
        <button onClick={() => handleSlide(-1)} disabled={isAnimating} className="px-4 py-2 bg-gray-300 rounded">Prev</button>
        <button onClick={() => handleSlide(1)} disabled={isAnimating} className="px-4 py-2 bg-gray-300 rounded">Next</button>
      </div>
    </section>
  );
};

export default Testimonials;
