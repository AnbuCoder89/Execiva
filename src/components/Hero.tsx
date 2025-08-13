import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

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
            <button className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 font-medium font-sf-pro-text flex items-center gap-2 shadow-lg hover:shadow-xl">
              Start Your Journey
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;