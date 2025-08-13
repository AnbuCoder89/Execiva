import React, { useState, useEffect, useRef } from "react";

const Capabilities: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const capabilities = [
    {
      title: "Web Development",
      description: "Creating modern, responsive websites with cutting-edge technologies",
      category: "Development",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
    },
    {
      title: "Mobile Apps",
      description: "Building native and cross-platform mobile applications",
      category: "Mobile",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg",
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful user experiences",
      category: "Design",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    },
    {
      title: "Cloud Solutions",
      description: "Implementing scalable cloud infrastructure and services",
      category: "Cloud",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % capabilities.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, capabilities.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + capabilities.length) % capabilities.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % capabilities.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const [cardsToShow, setCardsToShow] = useState(4);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1280) setCardsToShow(4);
      else if (window.innerWidth >= 1024) setCardsToShow(3);
      else if (window.innerWidth >= 768) setCardsToShow(2);
      else setCardsToShow(1);
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-32"
    >
      <div className="text-white w-full h-[80vh] rounded-xl flex items-center justify-center p-6 sm:p-8 md:p-10 relative">
        {/* Custom Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute -left-8 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-3 rounded-full shadow hover:bg-gray-200 transition-colors duration-300"
        >
          ◀
        </button>
        <button
          onClick={goToNext}
          className="absolute -right-8 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-3 rounded-full shadow hover:bg-gray-200 transition-colors duration-300"
        >
          ▶
        </button>

        <div className="w-full flex items-center overflow-hidden">
          {/* Custom Carousel Container */}
          <div className="w-full relative">
            <div 
              className="flex transition-transform duration-700 ease-in-out gap-6"
              style={{
                transform: `translateX(-${(currentIndex * (100 / cardsToShow))}%)`,
                width: `${(capabilities.length * 100) / cardsToShow}%`
              }}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {capabilities.map((capability, index) => (
                <div
                  key={capability.title}
                  className={`flex-shrink-0 group relative overflow-hidden rounded-xl 
                    shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ 
                    width: `${100 / cardsToShow}%`,
                    height: '450px',
                    transitionDelay: `${index * 100}ms` 
                  }}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center rounded-xl overflow-hidden"
                    style={{ backgroundImage: `url('${capability.image}')` }}
                  />

                  {/* Title */}
                  <div className="absolute top-6 left-6 z-10">
                    <h3 className="text-2xl md:text-3xl font-light text-white leading-tight font-sf-pro-display drop-shadow-lg">
                      {capability.title.split(" ")[0]}
                      <span className="block font-bold mt-1">
                        {capability.title.split(" ").slice(1).join(" ")}
                      </span>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {capabilities.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;