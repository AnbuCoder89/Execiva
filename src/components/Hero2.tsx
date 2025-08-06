import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';

const Hero2: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Animate main text sliding up
    tl.fromTo(
      textRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    )
    // Animate subtitle sliding up
    .fromTo(
      subtitleRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.6"
    )
    // Animate button sliding up
    .fromTo(
      buttonRef.current,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4"
    );
  }, []);

  return (
    <section className="relative h-screen overflow-hidden px-3">
      {/* Background Image */}
      <div className="absolute inset-0 rounded-l">
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Consultancy Background"
          className="w-full h-full object-cover rounded-l"
        />
        <div className="absolute inset-0 bg-black/40 rounded-l"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6">
          {/* Main Heading */}
          <div ref={textRef} className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight font-sf-pro-display">
              Strategic
              <span className="block font-bold mt-2">
                Consultancy
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-sf-pro-text"
          >
            Transform your business with expert guidance and innovative solutions 
            tailored to drive sustainable growth and competitive advantage.
          </p>

          {/* CTA Button */}
          <button
            ref={buttonRef}
            className="px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-medium font-sf-pro-text flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl"
          >
            Start Your Transformation
            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero2;