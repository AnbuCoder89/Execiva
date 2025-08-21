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
      className="relative w-full min-h-screen bg-white overflow-hidden"
    >
      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen pt-20 md:pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight font-sf-pro-display">
                We craft fast, scalable sites for teams of all sizes.
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-sf-pro-text mb-8 max-w-2xl mx-auto lg:mx-0">
                Webstacks empowers marketing teams to break free from website bottlenecks with a composable approach built for speed and scale.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Book intro call
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-800 text-gray-800 bg-transparent hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  View client stories
                </Button>
              </div>
            </div>

            {/* Right Column - Browser Mockup with Floating Elements */}
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
              
              {/* Floating Coins - Background Elements */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Coin 1 */}
                <div 
                  className="absolute w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 blur-sm"
                  style={{
                    top: '10%',
                    left: '10%',
                    transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.2}deg)`,
                  }}
                />
                
                {/* Coin 2 */}
                <div 
                  className="absolute w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-15 blur-sm"
                  style={{
                    top: '60%',
                    left: '5%',
                    transform: `translateY(${scrollY * -0.15}px) rotate(${scrollY * -0.3}deg)`,
                  }}
                />
                
                {/* Coin 3 */}
                <div 
                  className="absolute w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-10 blur-sm"
                  style={{
                    top: '30%',
                    right: '5%',
                    transform: `translateY(${scrollY * 0.08}px) rotate(${scrollY * 0.15}deg)`,
                  }}
                />
                
                {/* Coin 4 */}
                <div 
                  className="absolute w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-12 blur-sm"
                  style={{
                    bottom: '20%',
                    right: '15%',
                    transform: `translateY(${scrollY * -0.12}px) rotate(${scrollY * -0.25}deg)`,
                  }}
                />
                
                {/* Additional floating elements */}
                <div 
                  className="absolute w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full opacity-18 blur-sm"
                  style={{
                    top: '80%',
                    left: '20%',
                    transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.4}deg)`,
                  }}
                />
                
                <div 
                  className="absolute w-10 h-10 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full opacity-14 blur-sm"
                  style={{
                    top: '15%',
                    right: '25%',
                    transform: `translateY(${scrollY * -0.18}px) rotate(${scrollY * -0.35}deg)`,
                  }}
                />
              </div>

              {/* Browser Mockup */}
              <div 
                className="relative z-10 max-w-lg w-full"
                style={{
                  transform: `translateY(${scrollY * 0.05}px)`,
                }}
              >
                {/* Browser Window */}
                <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  
                  {/* Browser Header */}
                  <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2 border-b border-gray-200">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-500 border">
                        https://webstacks.com
                      </div>
                    </div>
                  </div>
                  
                  {/* Browser Content */}
                  <div className="relative">
                    <img
                      src="/assets/images/web-development-capabilities.jpeg"
                      alt="Website Screenshot"
                      className="w-full h-auto object-cover"
                    />
                    
                    {/* Overlay for better visual integration */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
                  </div>
                </div>
                
                {/* Floating shadow */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-gray-900/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;