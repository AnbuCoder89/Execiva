import Button from './ui/Button';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen lg:h-screen bg-beige overflow-hidden"
    >
      <div className="container mx-auto px-4 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center gap-8">
            
          {/* Left Column - Text Content */}
          <div className="flex items-center justify-center h-full pt-20 md:pt-24">
            <div className="text-center lg:text-left w-full max-w-2xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight font-sf-pro-display">
                We craft fast, scalable sites for teams of all sizes.
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-sf-pro-text mb-6 lg:mb-8">
                Webstacks empowers marketing teams to break free from website bottlenecks with a composable approach built for speed and scale.
              </p>
            </div>
          </div>

          {/* Right Column - Browser Mockup */
        </div>
      </div>
    </section>
  );
};

export default Hero;
