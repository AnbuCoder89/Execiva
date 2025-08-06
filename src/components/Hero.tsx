import { ChevronRight, Play, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const Hero = () => {
  const scrollToVision = () => {
    const visionSection = document.getElementById('vision');
    if (visionSection) {
      visionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden pt-20 md:pt-24">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50"></div>
      
      {/* Geometric background elements inspired by TCS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-100 rounded-full opacity-15 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-30 blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge/Tag inspired by TCS */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Digital Transformation Leaders
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-tight font-sf-pro-display">
                Building a
                <span className="block font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Digital Future
                </span>
                <span className="block font-light text-gray-700">
                  Together
                </span>
              </h1>
            </div>

            {/* Supporting Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl font-sf-pro-text">
              We partner with forward-thinking organizations to accelerate their digital transformation journey through innovative technology solutions and strategic consulting.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
              <div className="text-center md:text-left">
                <div className="text-2xl font-bold text-blue-600 font-sf-pro-display">500+</div>
                <div className="text-sm text-gray-600 font-sf-pro-text">Projects Delivered</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl font-bold text-purple-600 font-sf-pro-display">98%</div>
                <div className="text-sm text-gray-600 font-sf-pro-text">Client Satisfaction</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl font-bold text-green-600 font-sf-pro-display">24/7</div>
                <div className="text-sm text-gray-600 font-sf-pro-text">Global Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={scrollToVision}
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium font-sf-pro-text transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-[1.02]"
              >
                Get Started
                <ChevronRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              
              <button className="group inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 border-2 border-gray-200 rounded-lg font-medium font-sf-pro-text transition-all duration-300 hover:border-gray-300 hover:shadow-md transform hover:scale-[1.02]">
                <Play size={18} className="mr-2 text-blue-600" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Visual Content */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative">
              <div className="relative h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Digital Transformation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>

              {/* Floating Cards inspired by TCS */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-6 border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 font-sf-pro-display">Live Projects</div>
                    <div className="text-xs text-gray-600 font-sf-pro-text">Currently Active</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border border-gray-100 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 font-sf-pro-display">AI-Powered</div>
                  <div className="text-sm text-gray-600 font-sf-pro-text">Solutions</div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToVision}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </button>
      </div>
    </section>
  );
};

export default Hero;