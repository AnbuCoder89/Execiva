import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Capabilities: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      image:
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg",
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

  return (
    <section
  id="capabilities"
  ref={sectionRef}
  className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-32"
>
  <div className="bg-black text-white w-full h-[80vh] rounded-xl flex items-center justify-center p-6 sm:p-8 md:p-10 relative">
    
    
    {/* Custom Arrows INSIDE the black card */}
    <button
      ref={prevRef}
      className="absolute -left-8 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-3 rounded-full shadow hover:bg-gray-200 transition"
    >
      ◀
    </button>
    <button
      ref={nextRef}
      className="absolute -right-8 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-3 rounded-full shadow hover:bg-gray-200 transition"
    >
      ▶
    </button>

    <div className="w-full flex items-center">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={800}
        grabCursor={true}
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation !== "boolean") {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 25 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1280: { slidesPerView: 4, spaceBetween: 30 },
        }}
        className="w-full h-full !overflow-hidden"
      >
        {capabilities.map((capability, index) => (
          <SwiperSlide key={capability.title}>
            <div
              className={`group relative w-full h-[450px] overflow-hidden rounded-xl transition-all duration-700 ease-out hover:-translate-y-4 hover:shadow-2xl ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${capability.image}')` }}
              />

              {/* Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60">
                <h3 className="text-xl font-semibold">{capability.title}</h3>
                <p className="text-sm">{capability.description}</p>
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
