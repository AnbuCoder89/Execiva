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
      className="relative h-screen flex items-center justify-center bg-beige overflow-hidden"
    >
      <div className="text-center w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Headline - Split into two lines */}
        <h1 className="text-gray-900 mb-4 sm:mb-6 md:mb-8 lg:mb-10 leading-[0.9] sm:leading-[0.95] md:leading-[0.9] lg:leading-[0.85] xl:leading-[0.8] font-sf-pro-display">
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light tracking-tight sm:tracking-normal md:tracking-wide lg:tracking-wider">
            Your technology, simplified.
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-medium sm:font-semibold md:font-bold tracking-tight sm:tracking-normal md:tracking-wide lg:tracking-wider mt-1 sm:mt-2 md:mt-3 lg:mt-4">
            Your business, amplified.
          </span>
        </h1>
        
        {/* Subheadline */}
        <div className="flex justify-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-600 leading-relaxed sm:leading-relaxed md:leading-loose lg:leading-loose font-sf-pro-text font-light sm:font-normal max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl px-2 sm:px-4 md:px-6 lg:px-8">
            Execiva partners with you across AI, SEO, Web Development, and Data Analytics ensuring your systems work seamlessly so your team can focus on impact.
          </p>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-center items-center px-4 sm:px-6 md:px-8">
          <Button
            variant="vision"
            size="lg"
            className="w-full sm:w-auto text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 font-medium sm:font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Get Started
          </Button>
          <Button
            variant="vision"
            size="lg"
            onClick={() => scrollToSection("services")}
            className="w-full sm:w-auto text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 font-medium sm:font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;