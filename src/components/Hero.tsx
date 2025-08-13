import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat pt-20 md:pt-24"
      style={{
        backgroundImage: `url('/assets/images/hero1.jpeg')`,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 h-full">
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
      </div>
    </section>
  );
};

export default Hero;
