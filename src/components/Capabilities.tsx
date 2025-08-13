import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Capabilities: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Sample capabilities data - replace with your actual data
  const capabilities = [
    {
      title: "Web Development",
      description: "Creating modern, responsive websites with cutting-edge technologies",
      category: "Development",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg"
    },
    {
      title: "Mobile Apps",
      description: "Building native and cross-platform mobile applications",
      category: "Mobile",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg"
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful user experiences",
      category: "Design",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg"
    },
    {
      title: "Cloud Solutions",
      description: "Implementing scalable cloud infrastructure and services",
      category: "Cloud",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg"
    }
        {
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful user experiences",
      category: "Design",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg"
    },
    {
      title: "Cloud Solutions",
      description: "Implementing scalable cloud infrastructure and services",
      category: "Cloud",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="capabilities"
      className="w-screen h-screen py-20 md:py-32 bg-gray-50 flex items-center justify-center"
      ref={sectionRef}
    >
      <div className="mx-auto px-10 relative w-full h-full flex flex-col justify-center">
        {/* Swiper Container */}
        <div className="relative flex-grow flex items-center">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            pagination={{ clickable: true }}
            loop={true}
            modules={[Navigation, Pagination]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="w-full h-[500px]"
          >
            {capabilities.map((capability, index) => (
              <SwiperSlide key={capability.title}>
                <div
                  className={`group relative w-full h-[500px] overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl transform rounded-xl ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${capability.image}')` }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

                  {/* Category Tag */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="px-4 py-2 bg-gray-800/80 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/20 font-sf-pro-text">
                      {capability.category}
                    </span>
                  </div>

                  {/* Article Card Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <div className="bg-white/60 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-lg border border-white/30 transition-all duration-300 group-hover:bg-white/70 group-hover:backdrop-blur-lg">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight mb-3 font-sf-pro-display">
                        {capability.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed font-sf-pro-text">
                        {capability.description.length > 80
                          ? `${capability.description.substring(0, 80)}...`
                          : capability.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;