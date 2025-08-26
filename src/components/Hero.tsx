import Button from './ui/Button';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen bg-beige overflow-hidden flex flex-col"
    >
      <div className="w-full flex-1 flex flex-col">
        {/* Main Hero Content - Takes most of the screen */}
        <div className="flex-1 flex items-center justify-center">
          {/* Single Column - Centered Content */}
          <div className="text-center w-full max-w-4xl mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-6 lg:mb-8 leading-tight font-sf-pro-display">
              We craft fast, scalable sites for teams of all sizes.
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 leading-relaxed font-sf-pro-text mb-8 lg:mb-12 max-w-3xl mx-auto">
              Webstacks empowers marketing teams to break free from website bottlenecks with a composable approach built for speed and scale.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button
                variant="vision"
                size="lg"
                className="w-full sm:w-auto text-base sm:text-lg px-8 py-4"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-base sm:text-lg px-8 py-4"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>

        {/* Capabilities Tagline Section */}
        <div className="w-full py-6 sm:py-8 md:py-10 border-t border-gray-200">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            {/* Horizontal Divider Line */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-4 sm:mb-6"></div>
            
            {/* Tagline Text */}
            <div className="text-center mb-4 sm:mb-6">
              <p className="text-xs sm:text-sm md:text-base text-gray-600 font-sf-pro-text leading-relaxed">
                Our{' '}
                <span className="font-semibold text-gray-900 underline decoration-gray-300 underline-offset-2">
                  Capabilities
                </span>
              </p>
            </div>

            {/* Company Logos */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 opacity-60 hover:opacity-80 transition-opacity duration-300">
              {/* Logo placeholders - you can replace these with actual company logos */}
              <div className="text-black font-sf-pro-display">
                FullStack Solutions
              </div>
              <div className="text-black font-sf-pro-display">
                Automation & Workflows
              </div>
              <div className="text-black font-sf-pro-display">
                E-Commerce Solutions
              </div>
              <div className="text-black font-sf-pro-display">
                UI/UX Design
              </div>
              <div className="text-black font-sf-pro-display">
                Consulting & Strategy
              </div>
              <div className="text-black font-sf-pro-display">
                AI & Data Insights
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;