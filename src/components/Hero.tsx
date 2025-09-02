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
      <div className="text-center w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-6 lg:mb-8 leading-tight font-sf-pro-display tracking-tight">
          Your technology, simplified. Your business, amplified.
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 leading-relaxed font-sf-pro-text mb-12 lg:mb-16 max-w-4xl mx-auto font-light">
          Execiva partners with you across AI, SEO, Web Development, and Data Analytics ensuring your systems work seamlessly so your team can focus on impact.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
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
      </div>
    </section>
  );
};

export default Hero;