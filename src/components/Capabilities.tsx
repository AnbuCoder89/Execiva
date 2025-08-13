import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

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
    },
    {
      title: "Data Analytics",
      description: "Data-driven insights to help you make informed decisions",
      category: "Analytics",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg"
    },
    {
      title: "AI Solutions",
      description: "Artificial intelligence and machine learning implementations",
      category: "AI",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
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
      className="w-full min-h-screen flex flex-col items-center justify-center py-20"
      ref={sectionRef}
    >
      <div className="w-full px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight font-sf-pro-display transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Our
            <span className="block font-bold mt-2">
              Capabilities
            </span>
          </h2>
        </div>

        {/* Slider Container with External Navigation */}
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button className="prev-btn absolute left-0 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-700 hover:text-gray-900 hover:scale-110 -translate-x-16">
            <ChevronLeft size={24} />
          </button>

          {/* Swiper Container */}
          <div className="w-full mx-16">
            <Swiper
              slidesPerView={1}
              spaceBetween={24}
              navigation={{
                prevEl: '.prev-btn',
                nextEl: '.next-btn',
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={800}
              loop={true}
              modules={[Navigation, Autoplay]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
              className="w-full h-[500px]"
            >
              {capabilities.map((capability, index) => (
                <SwiperSlide key={capability.title}>
                  <div
                    className={`group relative w-full h-[450px] overflow-hidden cursor-pointer transition-all duration-700 ease-out hover:-translate-y-4 hover:shadow-2xl transform rounded-xl ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                      style={{ backgroundImage: `url('${capability.image}')` }}
                    />

                    {/* Dark Overlay at Top */}
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent h-1/2 transition-all duration-300 group-hover:from-black/90 group-hover:via-black/70">
                      <div className="p-6 md:p-8">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-tight font-sf-pro-display">
                          {capability.title.split(' ')[0]}
                          <span className="block font-bold">
                            {capability.title.split(' ').slice(1).join(' ')}
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Arrow */}
          <button className="next-btn absolute right-0 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-700 hover:text-gray-900 hover:scale-110 translate-x-16">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;