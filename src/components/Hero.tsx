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

  // Framer Motion scroll animations
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 300], [1, 1.2]);
  const blur = useTransform(scrollY, [0, 300], ['0px', '8px']);
  const brightness = useTransform(scrollY, [0, 300], ['100%', '75%']);

  const smoothScale = useSpring(scale, { stiffness: 100, damping: 20 });
  const smoothBlur = useSpring(blur, { stiffness: 100, damping: 20 });
  const smoothBrightness = useSpring(brightness, { stiffness: 100, damping: 20 });

  const filter = useMotionTemplate`blur(${smoothBlur}) brightness(${smoothBrightness})`;

  const scrollToVision = () => {
    const element = document.getElementById('vision');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <Parallax ref={parallax} pages={2} className="w-full h-full pt-20">
        {/* Background Image Layer */}
        <ParallaxLayer offset={0} factor={2} speed={0.1} className="z-0">
          <motion.div 
            className="absolute inset-0 w-full h-full overflow-hidden px-3"
            style={{
              scale: smoothScale,
              filter,
            }}
          >
            <div className="w-full h-full rounded-lg overflow-hidden">
              <img
                src="/assets/images/bg-1.jpg"
                alt="Hero Background"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </ParallaxLayer>

        {/* Content Layer */}
        <ParallaxLayer offset={0} factor={2} speed={0.1} className="flex flex-col items-center">
          <div className="w-full max-w-7xl px-6">
            {/* Add any additional layered content here if needed */}
          </div>
        </ParallaxLayer>

        {/* Main Content */}
        <ParallaxLayer offset={0} speed={1.2} className="flex flex-col items-center justify-center px-6">
          <div className="max-w-6xl w-full text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight font-sf-pro-display">
              Redefining
              <span className="block font-bold text-white mt-2">Excellence</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 font-medium font-sf-pro-text flex items-center gap-2 shadow-lg hover:shadow-xl">
                Start Your Journey
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              {/* Optional Learn More button */}
              {/* <button
                onClick={scrollToVision}
                className="px-8 py-4 bg-transparent text-gray-900 border-2 border-gray-900 rounded-full hover:bg-gray-50 transition-all duration-300 font-medium font-sf-pro-text flex items-center gap-2 group"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </button> */}
            </div>
          </div>
        </ParallaxLayer>

        {/* Scroll Indicator (optional) */}
        <ParallaxLayer offset={0} speed={1.5} className="flex items-end justify-center pb-8">
          {/* <button onClick={scrollToVision} className="text-gray-900 hover:text-gray-600 transition-colors">
            <ChevronDown size={32} className="animate-bounce" />
          </button> */}
        </ParallaxLayer>

        {/* Vision Section */}
        <ParallaxLayer offset={1} speed={0.8} className="flex items-center justify-center text-white" id="vision">
          <div className="max-w-6xl w-full text-center">
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-sf-pro-text">
              We craft extraordinary experiences that push boundaries and create lasting impact for forward-thinking businesses.
            </p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </section>
  );
};

export default Hero;
