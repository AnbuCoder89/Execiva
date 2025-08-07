import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 3));
    }, 4000); // Change slide every 4 seconds

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
    },
    {
      name: "James Wilson",
      position: "CEO, StartupHub",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "From ideation to execution, they were our perfect partners. The solution they built has become the backbone of our business.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      position: "CTO, DataFlow",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Outstanding technical skills combined with excellent communication. They turned our complex requirements into elegant solutions.",
      rating: 5
    },
    {
      name: "Robert Kim",
      position: "Founder, EcoSolutions",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Their innovative approach and attention to detail helped us achieve our sustainability goals through smart technology integration.",
      rating: 5
    },
    {
      name: "Amanda Foster",
      position: "VP Operations, RetailMax",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "The platform they developed transformed our operations completely. Efficiency increased by 300% within the first quarter.",
      rating: 5
    }
  ];

  const totalSlides = Math.ceil(testimonials.length / 3);

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gray-50" ref={sectionRef}>
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

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {testimonials.slice(slideIndex * 3, slideIndex * 3 + 3).map((testimonial, index) => (
                    <div 
                      key={`${slideIndex}-${index}`}
                      className={`bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 w-full h-full flex flex-col justify-center transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {/* Profile Image */}
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Name */}
                      <h3 className="text-center font-semibold text-gray-900 mb-1 font-sf-pro-display">
                        {testimonial.name}
                      </h3>

                      {/* Position */}
                      <p className="text-center text-sm text-gray-600 mb-4 font-sf-pro-text">
                        {testimonial.position}
                      </p>

                      {/* Content */}
                      <p className="text-sm text-gray-700 leading-relaxed mb-4 font-sf-pro-text text-center">
                        {testimonial.content}
                      </p>

                      {/* Rating */}
                      <div className="flex justify-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className="text-blue-500 fill-current" 
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gray-800 scale-110' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;