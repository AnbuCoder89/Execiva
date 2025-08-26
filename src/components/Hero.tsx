import Button from './ui/Button';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen bg-beige overflow-hidden flex items-center justify-center"
    >
      <div className="container-padding h-full">
        <div className="flex items-center justify-center min-h-screen">
          {/* Single Column - Centered Content */}
          <div className="text-center w-full max-w-4xl mx-auto py-20">
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
      </div>
    </section>
  );
};

export default Hero;