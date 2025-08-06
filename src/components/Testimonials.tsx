import React, { useEffect, useRef, useState } from 'react';

const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
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
      quote: "Working with this team has been transformative for our business. Their attention to detail and innovative approach exceeded all expectations.",
      author: "Sarah Chen",
      position: "CEO, TechCorp"
    },
    {
      quote: "The level of professionalism and technical expertise is unmatched. They delivered a solution that perfectly aligned with our vision.",
      author: "Michael Rodriguez",
      position: "CTO, FinanceFirst"
    },
    {
      quote: "From concept to launch, they guided us every step of the way. The result exceeded our wildest dreams and transformed our industry presence.",
      author: "Emily Johnson",
      position: "Founder, MedConnect"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section 
      id="testimonials" 
      className="relative py-32 min-h-screen flex items-center justify-center overflow-hidden" 
      ref={sectionRef}
    >
      {/* Dark Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      
      {/* Background Pattern/Texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Glassmorphism Card */}
        <div 
          className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 md:p-16 lg:p-20 shadow-2xl transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Quote Content */}
          <div className="relative min-h-[300px] flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ${
                  index === activeTestimonial 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Quote Mark */}
                <div className="text-6xl md:text-8xl text-white/20 mb-8 font-serif">"</div>
                
                {/* Main Quote */}
                <blockquote className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight mb-12 max-w-4xl">
                  <span className="italic">{testimonial.quote}</span>
                </blockquote>
                
                {/* Author */}
                <div className="text-slate-300">
                  <div className="text-xl md:text-2xl font-semibold mb-2 font-sf-pro-display">
                    {testimonial.author}
                  </div>
                  <div className="text-lg md:text-xl text-slate-400 font-sf-pro-text">
                    {testimonial.position}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle Indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                index === activeTestimonial 
                  ? 'bg-white scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Testimonials;