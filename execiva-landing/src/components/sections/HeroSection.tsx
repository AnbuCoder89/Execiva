'use client';

import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('vision');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 parallax-bg opacity-30"
        style={{
          backgroundImage: `linear-gradient(135deg, 
            rgba(37, 99, 235, 0.1) 0%, 
            rgba(99, 102, 241, 0.1) 50%, 
            rgba(15, 23, 42, 0.3) 100%),
            url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="a" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="%23ffffff" stop-opacity="0.1"/><stop offset="100%" stop-color="%23000000" stop-opacity="0.05"/></radialGradient></defs><rect width="1000" height="1000" fill="url(%23a)"/><circle cx="200" cy="200" r="2" fill="%23ffffff" opacity="0.3"/><circle cx="800" cy="300" r="1.5" fill="%23ffffff" opacity="0.4"/><circle cx="400" cy="600" r="1" fill="%23ffffff" opacity="0.2"/><circle cx="700" cy="800" r="2.5" fill="%23ffffff" opacity="0.3"/></svg>')`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-background-dark/60 to-background-dark/90" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1 
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Transform Your Data Into
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
            Strategic Advantage
          </span>
        </h1>
        
        <p 
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Execiva empowers businesses to unlock the full potential of their data through 
          cutting-edge analytics, intelligent automation, and strategic insights.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <button className="bg-white text-background-dark px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            Get Started
          </button>
          <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
            Watch Demo
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <div className="flex flex-col items-center text-white/60 hover:text-white transition-colors duration-300">
          <span className="text-sm mb-2 tracking-wide">Learn More</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;