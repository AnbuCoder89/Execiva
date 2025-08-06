import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';

const Hero = () => {
  const parallax = useRef<IParallax>(null);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden pt-20 md:pt-24">
      <Parallax ref={parallax} pages={3} className="w-full h-full" style={{ overflow: 'hidden' }}>
        {/* Background Image Layer */}
        <ParallaxLayer offset={0} factor={3} speed={0.2} className="z-0">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
          </div>
        </ParallaxLayer>

        {/* Hero Content - Adjusted for header space */}
        <ParallaxLayer offset={0} speed={0.6} className="flex flex-col items-center justify-center px-4 sm:px-6 h-screen z-10" style={{ paddingTop: '80px' }}>
          <div className="max-w-4xl w-full text-center">
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
        </ParallaxLayer>

        {/* Vision Content */}
        <ParallaxLayer offset={1.5} speed={0.4} className="flex items-center justify-center text-white px-4 sm:px-6 h-screen z-10">
          <div className="max-w-3xl w-full text-center">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-sf-pro-text">
              We craft extraordinary experiences that push boundaries and create lasting impact for forward-thinking businesses.
            </p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </section>
  );
};

export default Hero;
