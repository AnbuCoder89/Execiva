import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import Button from './ui/Button';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="home" 
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 w-full h-[120vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/images/hero1.jpeg')`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      
      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4 sm:px-6 h-full pt-20 md:pt-24">
        <div 
          className="max-w-4xl w-full text-center"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight font-sf-pro-display drop-shadow">
            Redefining
            <span className="block font-bold text-white mt-2 drop-shadow">
              Excellence
            </span>
          </h1>

          <div className="flex justify-center items-center">
            <Button
              variant="vision"
              size="lg"
              icon={ChevronDown}
              iconPosition="right"
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;