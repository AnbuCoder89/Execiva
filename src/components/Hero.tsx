import Button from './ui/Button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const capabilities = [
    { name: 'Web Development', icon: '🌐' },
    { name: 'Artificial Intelligence', icon: '🤖' },
    { name: 'Data Analytics', icon: '📊' },
    { name: 'Digital Strategy', icon: '💡' },
    { name: 'Cloud Solutions', icon: '☁️' },
    { name: 'Mobile Apps', icon: '📱' },
    { name: 'E-Commerce', icon: '🛒' },
    { name: 'SEO & Marketing', icon: '📈' }
  ];

  
  return (
    <>
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-beige overflow-hidden px-6 sm:px-8 lg:px-12 pt-24" 
      // pt-24 prevents overlap with navbar
    >
      <div className="text-center w-full max-w-6xl mx-auto">
        {/* Headline */}
        <h1 className="mb-6 lg:mb-8 leading-tight font-sf-pro-display tracking-tight text-gray-900">
          {/* Line 1 */}
          <span className="block font-extrabold text-[clamp(2.5rem,5vw,5.5rem)] md:text-[clamp(3rem,4.5vw,6rem)] lg:text-[clamp(3.5rem,4vw,6.5rem)]">
            Your technology, simplified.
          </span>
        
          {/* Line 2 */}
          <span className="block font-extrabold text-[clamp(2.5rem,5vw,5.5rem)] md:text-[clamp(3rem,4.5vw,6rem)] lg:text-[clamp(3.5rem,4vw,6.5rem)] text-gray-900">
            Your business, amplified.
          </span>
        </h1> 
        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-sf-pro-text mb-12 lg:mb-16 max-w-3xl mx-auto font-light">
          Execiva partners with you across AI, SEO, Web Development, and Data Analytics ensuring your systems work seamlessly so your team can focus on impact.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pb-10">
          <Button
            variant="vision"
            size="lg"
            className="w-full sm:w-auto text-base sm:text-lg px-10 py-4 font-medium"
          >
            Get Started
          </Button>
          <Button
            variant="vision"
            size="lg"
            onClick={() => scrollToSection("services")}
            className="w-full sm:w-auto text-base sm:text-lg px-10 py-4 font-medium shadow-md hover:shadow-lg"
          >
            Explore Services
          </Button>
        </div>

        {/* Trusted By Section */}
        <div className="w-full pt-16 sm:pt-20 md:pt-24">
          {/* Headline */}
          <p className="text-sm sm:text-base md:text-lg text-gray-500 font-sf-pro-text mb-8 sm:mb-10 md:mb-12 font-medium tracking-wide">
            Our Capabilities
          </p>

          {/* Mobile: Scrolling Marquee */}
          <div className="block sm:hidden relative overflow-hidden">
            <div className="flex animate-marquee space-x-8">
              {/* First set of logos */}
              {capabilities.map((capability, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-20 h-12 flex flex-col items-center justify-center opacity-60 hover:opacity-80 transition-opacity duration-300"
                >
                  <div className="text-2xl mb-1">{capability.icon}</div>
                  <span className="text-xs text-gray-600 font-sf-pro-text text-center leading-tight">{capability.name}</span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {capabilities.map((capability, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-20 h-12 flex flex-col items-center justify-center opacity-60 hover:opacity-80 transition-opacity duration-300"
                >
                  <div className="text-2xl mb-1">{capability.icon}</div>
                  <span className="text-xs text-gray-600 font-sf-pro-text text-center leading-tight">{capability.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tablet and Desktop: Static Grid */}
          <div className="hidden sm:flex justify-center items-center space-x-8 md:space-x-12 lg:space-x-16 xl:space-x-20">
            {capabilities.slice(0, 6).map((capability, index) => (
              <div
                key={index}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex flex-col items-center justify-center opacity-60 hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2">{capability.icon}</div>
                <span className="text-xs sm:text-sm md:text-base text-gray-600 font-sf-pro-text text-center leading-tight">{capability.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
