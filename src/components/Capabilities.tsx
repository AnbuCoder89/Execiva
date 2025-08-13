import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
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
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 py-20 md:py-32"
      ref={sectionRef}
    >
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={800}
            effect="slide"
            grabCursor={true}
            modules={[Navigation, Autoplay]}
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
            className="w-full h-[600px] !overflow-visible"
          >
            {capabilities.map((capability, index) => (
              <SwiperSlide key={capability.title}>
                <div
                  className={`group relative w-full h-[500px] overflow-hidden cursor-pointer transition-all duration-700 ease-out hover:-translate-y-4 hover:shadow-2xl hover:scale-105 transform rounded-xl ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${capability.image}')` }}
                  />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-3xl md:text-4xl font-light text-white text-center leading-tight font-sf-pro-display">
                      {capability.title.split(' ')[0]}
                      <span className="block font-bold mt-2">
                        {capability.title.split(' ').slice(1).join(' ') || ''}
                      </span>
                    </h3>
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