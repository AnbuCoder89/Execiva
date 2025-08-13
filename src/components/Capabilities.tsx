import React, { useState } from "react";

const CapabilitiesCarousel: React.FC = () => {
  const capabilities = [
    {
      title: "Web Development",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
    },
    {
      title: "Mobile Apps",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg",
    },
    {
      title: "UI/UX Design",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    },
    {
      title: "Cloud Solutions",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? capabilities.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === capabilities.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-black px-6">
      <div className="relative w-full max-w-6xl overflow-hidden rounded-xl">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-[450px] bg-cover bg-center rounded-xl"
              style={{
                backgroundImage: `url(${capability.image})`,
              }}
            >
              <div className="bg-black/50 h-full flex items-center justify-center text-white text-3xl font-bold">
                {capability.title}
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow hover:bg-gray-200"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow hover:bg-gray-200"
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default CapabilitiesCarousel;
