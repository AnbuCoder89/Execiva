import Button from './ui/Button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center bg-beige overflow-hidden pt-28"
    >
      <div className="w-full flex-1 flex flex-col">
        {/* Main Hero Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center w-full max-w-4xl mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-6 lg:mb-8 leading-tight font-sf-pro-display">
              Your technology, simplified. Your business, amplified.
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 leading-relaxed font-sf-pro-text mb-8 lg:mb-12 max-w-3xl mx-auto">
              Execiva partners with you across web development, business intelligence, and AI, so your systems work seamlessly, and your team can focus on impact.
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
                variant="vision"
                size="lg"
                onClick={() => scrollToSection("services")}
                className="w-full sm:w-auto text-base sm:text-lg px-8 py-4 shadow-md hover:shadow-lg"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>

        {/* Capabilities Tagline Section */}
        <div className="w-full py-6 sm:py-8 md:py-10">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-4 sm:mb-6">
              <p className="text-xs sm:text-sm md:text-base text-gray-600 font-sf-pro-text leading-relaxed">
                Our{' '}
                <span className="font-semibold text-gray-900 underline decoration-gray-300 underline-offset-2">
                  Capabilities
                </span>
              </p>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-4 sm:mb-6"></div>

            <div className="flex flex-wrap items-left justify-left gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 opacity-60 hover:opacity-80 transition-opacity duration-300">
              <div className="text-black font-sf-pro-display">FullStack Solutions</div>
              <div className="text-black font-sf-pro-display">Automation & Workflows</div>
              <div className="text-black font-sf-pro-display">E-Commerce Solutions</div>
              <div className="text-black font-sf-pro-display">UI/UX Design</div>
              <div className="text-black font-sf-pro-display">Consulting & Strategy</div>
              <div className="text-black font-sf-pro-display">AI & Data Insights</div>
              <div className="text-black font-sf-pro-display">Digital Marketing & SEO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
