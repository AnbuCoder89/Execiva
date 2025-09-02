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
      className="relative min-h-screen flex items-center justify-center bg-beige overflow-hidden px-6 sm:px-8 lg:px-12 pt-24" 
      // pt-24 prevents overlap with navbar
    >
      <div className="text-center w-full max-w-5xl mx-auto">
        {/* Headline */}
        <h1 className="font-bold text-gray-900 mb-6 lg:mb-8 leading-tight font-sf-pro-display tracking-tight">
          <span className="block text-[clamp(2rem,6vw,4rem)] sm:text-[clamp(2.5rem,5vw,5rem)] md:text-[clamp(3rem,4.5vw,5.5rem)] lg:text-[clamp(4rem,4vw,6.5rem)]">
            Your technology, simplified.
          </span>
          <span className="block text-[clamp(2.5rem,6vw,4.5rem)] sm:text-[clamp(3rem,5vw,5.5rem)] md:text-[clamp(3.5rem,4.5vw,6rem)] lg:text-[clamp(4rem,4vw,6.5rem)] text-gray-900">
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
      </div>
    </section>
  );
};

export default Hero;
