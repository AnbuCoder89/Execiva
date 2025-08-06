import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
} from 'framer-motion';

const Hero = () => {
  const parallax = useRef<IParallax>(null);

  return (
    <section id="home" className="relative h-screen overflow-hidden w-full">
      <Parallax ref={parallax} pages={1} className="w-full h-full pt-20" style={{ overflow: 'hidden' }}>
        {/* Background Image Layer */}
        <ParallaxLayer offset={0} factor={1} speed={0.1} className="z-0">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <div className="w-full h-full overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Hero Background"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </ParallaxLayer>

        {/* Main Content */}
        <ParallaxLayer offset={0} speed={0.8} className="flex flex-col items-center justify-center px-4 sm:px-6">
          <div className="max-w-4xl w-full text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight font-sf-pro-display">
              Redefining
              <span className="block font-bold text-white mt-2">Excellence</span>
            </h1>

            <div className="flex justify-center items-center">
              <button className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 font-medium font-sf-pro-text flex items-center gap-2 shadow-lg hover:shadow-xl">
                Start Your Journey
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </ParallaxLayer>

        {/* Vision Content */}
        <ParallaxLayer offset={1} speed={0.5} className="flex items-center justify-center text-white px-4 sm:px-6">
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
