import { useEffect, useState } from 'react';
import Button from './ui/Button';
import { BrowserWindow } from './ui';

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
      className="relative w-full h-screen bg-white overflow-hidden"
    >
      {/* Main Content - Full Height Container */}
      <div className="relative z-20 flex items-center justify-center h-full pt-20 md:pt-24 px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1 max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight font-sf-pro-display">
                We craft fast, scalable sites for teams of all sizes.
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-sf-pro-text mb-8 max-w-2xl mx-auto lg:mx-0">
                Our approach empowers marketing teams to break free from website bottlenecks with a composable system built for speed and scale.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  variant="primary"
                  size="lg"
                  className="px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 rounded-lg font-medium transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Column - Browser Component */}
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end h-full max-h-[calc(100vh-8rem)]">
              <div className="w-full max-w-4xl flex items-center">
                <BrowserWindow className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;