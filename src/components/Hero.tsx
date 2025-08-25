import Button from './ui/Button';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen lg:h-screen bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 h-full">
        <div className="grid lg:grid-cols-2 h-full items-center">
            
          {/* Left Column - Text Content */}
          <div className="flex items-center justify-center order-2 lg:order-1 h-full pt-20 md:pt-24">
            <div className="text-center lg:text-left w-full max-w-2xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight font-sf-pro-display">
                We craft fast, scalable sites for teams of all sizes.
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-sf-pro-text mb-6 lg:mb-8">
                Webstacks empowers marketing teams to break free from website bottlenecks with a composable approach built for speed and scale.
              </p>

              {/* Button */}
              <div className="flex justify-center lg:justify-start">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Book intro call
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Browser Mockup */}
          <div className="relative order-1 lg:order-2 flex items-center justify-center h-full">
            <div className="relative w-full flex items-center justify-center pt-4 lg:pt-6">
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden w-[85%] lg:w-[90%] max-w-xl lg:max-w-2xl">
                
                {/* Browser Header */}
                <div className="bg-gray-50 px-3 lg:px-4 py-2 lg:py-3 flex items-center space-x-2 border-b border-gray-200">
                  <div className="flex space-x-1 lg:space-x-2">
                    <div className="w-2 h-2 lg:w-3 lg:h-3 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 lg:w-3 lg:h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 mx-2 lg:mx-4">
                    <div className="bg-white rounded-md px-2 lg:px-3 py-1 text-xs text-gray-500 border border-gray-300">
                      https://webstacks.com
                    </div>
                  </div>
                </div>
                
                {/* Browser Content */}
                <div className="relative">
                  <div className="w-full h-[350px] lg:h-[500px] border-2 border-gray-300 flex items-center justify-center bg-gray-50">
                    <span className="text-gray-400 text-sm">Content Preview</span>
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
