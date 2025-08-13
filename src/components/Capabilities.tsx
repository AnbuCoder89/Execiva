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
  className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-32"
>
  <div className="bg-black text-white w-full h-[80vh] rounded-xl flex items-center justify-center p-0 sm:p-0 md:p-0 relative overflow-hidden">
    
    {/* Arrows */}
    <button ref={prevRef} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-3 rounded-full">◀</button>
    <button ref={nextRef} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-3 rounded-full">▶</button>

    {/* Full-width Swiper */}
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
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
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 25 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
        1280: { slidesPerView: 4, spaceBetween: 30 },
      }}
      className="w-full !overflow-visible"
    >
      {capabilities.map((capability, index) => (
        <SwiperSlide key={capability.title} className="!w-full">
          <div className="w-full h-[400px] rounded-xl overflow-hidden">
            <img src={capability.image} alt={capability.title} className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

  </div>
</section>

  );
};

export default Capabilities;
