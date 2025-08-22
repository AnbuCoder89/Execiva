import Button from './ui/Button';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen bg-white"
    >
      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen pt-20 md:pt-24">
        <div className="w-full h-full">
          <div className="grid lg:grid-cols-2 h-full min-h-screen items-center">
            
            {/* Left Column - Text Content */}
            <div className="flex items-center justify-center px-6 sm:px-8 lg:px-12 xl:px-16 order-2 lg:order-1">
              <div className="text-center lg:text-left w-full">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight font-sf-pro-display">
                  We craft fast, scalable sites for teams of all sizes.
                </h1>
                
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-sf-pro-text mb-8">
                  Webstacks empowers marketing teams to break free from website bottlenecks with a composable approach built for speed and scale.
                </p>

                {/* Button */}
                <div className="flex justify-center lg:justify-start">
                  <Button
                    variant="primary"
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Book intro call
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column - Browser Mockup (Full Coverage) */}
            <div className="relative order-1 lg:order-2 h-full min-h-screen bg-gray-100 flex items-center justify-center p-0">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Browser Window - Covers full right column */}
                <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden w-[90%] max-w-2xl">
                  
                  {/* Browser Header */}
                  <div className="bg-gray-50 px-4 py-3 flex items-center space-x-2 border-b border-gray-200">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-500 border border-gray-300">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;