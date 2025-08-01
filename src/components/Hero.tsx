import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToVision = () => {
    const element = document.getElementById('vision');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-white via-light-gray to-beige z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Floating Elements */}
      <div 
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-beige/30 rounded-full blur-3xl -z-10"
        style={{
          transform: `translate(${scrollY * 0.02}px, ${scrollY * 0.05}px)`,
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-light-gray/30 rounded-full blur-3xl -z-10"
        style={{
          transform: `translate(${scrollY * -0.03}px, ${scrollY * -0.02}px)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-6 leading-tight font-sf-pro-display">
          Redefining
          <span className="block font-bold text-gray-900 mt-2">Excellence</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed font-sf-pro-text">
          We craft extraordinary experiences that push boundaries and create lasting impact for forward-thinking businesses.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 font-medium font-sf-pro-text flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            Start Your Journey
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          
          <button 
            onClick={scrollToVision}
            className="px-8 py-4 bg-transparent text-gray-900 border-2 border-gray-900 rounded-full hover:bg-gray-50 transition-all duration-300 font-medium font-sf-pro-text flex items-center gap-2 group"
          >
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToVision}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-900"
      >
        <ChevronDown size={32} className="hover:text-gray-600 transition-colors" />
      </button>
    </section>
  );
};

export default Hero;
