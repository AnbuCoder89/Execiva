import { ChevronDown } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    if (!hero || !image || !content) return;

    // Set initial state
    gsap.set(image, {
      borderRadius: '8px',
      scale: 1,
      x: 0,
      y: 0,
    });

    // Create timeline for scroll animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: false,
        anticipatePin: 1,
      }
    });

    // Animate image to full width and remove border radius
    tl.to(image, {
      borderRadius: '0px',
      scale: 1.1,
      x: '1.5%', // Compensate for the initial padding
      width: '100vw',
      duration: 1,
      ease: 'none',
    })
    // Fade out content as we scroll
    .to(content, {
      opacity: 0,
      y: -50,
      duration: 0.5,
      ease: 'power2.out',
    }, 0);

    // Parallax effect for the image
    gsap.to(image, {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const scrollToVision = () => {
    const element = document.getElementById('vision');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden" ref={heroRef}>
      {/* Background Image Container */}
      <div 
        ref={imageRef}
        className="absolute inset-0 w-full h-full overflow-hidden px-3"
        style={{ willChange: 'transform, border-radius, width' }}
      >
        <div className="w-full h-full rounded-lg overflow-hidden">
          <img
            src="/assets/images/bg-1.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
            style={{ willChange: 'transform' }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </div>

      {/* Content Layer */}
      <div 
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center h-full px-6"
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="max-w-6xl w-full text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight font-sf-pro-display drop-shadow-lg">
            Redefining
            <span className="block font-bold text-white mt-2">Excellence</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-sf-pro-text drop-shadow-md">
            We craft extraordinary experiences that push boundaries and create lasting impact for forward-thinking businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-medium font-sf-pro-text flex items-center gap-2 shadow-lg hover:shadow-xl">
              Start Your Journey
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            
            <button
              onClick={scrollToVision}
              className="px-8 py-4 bg-transparent text-white border-2 border-white/50 rounded-full hover:bg-white/10 transition-all duration-300 font-medium font-sf-pro-text flex items-center gap-2 group backdrop-blur-sm"
            >
              Learn More
              <ChevronDown size={20} className="transition-transform duration-300 group-hover:translate-y-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button onClick={scrollToVision} className="text-white/70 hover:text-white transition-colors">
          <ChevronDown size={32} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;