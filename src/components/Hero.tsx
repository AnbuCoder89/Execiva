import Button from './ui/Button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trustedLogos = [
    { name: 'Microsoft', src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
    { name: 'Google', src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Amazon', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Apple', src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { name: 'Meta', src: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
    { name: 'Netflix', src: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
    { name: 'Tesla', src: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg' },
    { name: 'Spotify', src: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg' }
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
            Trusted by the world's fastest growing Startups and Enterprises
          </p>

          {/* Mobile: Scrolling Marquee */}
          <div className="block sm:hidden relative overflow-hidden">
            <div className="flex animate-marquee space-x-8">
              {/* First set of logos */}
              {trustedLogos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-20 h-12 flex items-center justify-center grayscale opacity-40 hover:opacity-60 transition-opacity duration-300"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain filter brightness-0"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {trustedLogos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-20 h-12 flex items-center justify-center grayscale opacity-40 hover:opacity-60 transition-opacity duration-300"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain filter brightness-0"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Tablet and Desktop: Static Grid */}
          <div className="hidden sm:flex justify-center items-center space-x-8 md:space-x-12 lg:space-x-16 xl:space-x-20">
            {trustedLogos.slice(0, 6).map((logo, index) => (
              <div
                key={index}
                className="w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-14 lg:w-28 lg:h-16 flex items-center justify-center grayscale opacity-40 hover:opacity-70 transition-all duration-300 hover:scale-105"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain filter brightness-0"
                />
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
