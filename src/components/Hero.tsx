import Button from './ui/Button';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen bg-white"
    >
      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen pt-20 md:pt-24 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto">
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
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Book intro call
                </Button>
              </div>
            </div>

            {/* Right Column - Browser Mockup */}
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative z-10 w-full max-w-lg">
                {/* Browser Window */}
                <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                  
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
                
                {/* Subtle shadow */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3/4 h-6 bg-gray-900/5 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;