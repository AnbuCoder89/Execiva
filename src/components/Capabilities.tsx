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

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-32"
    >
      <div className="text-white w-full h-[80vh] rounded-xl flex items-center justify-center p-6 sm:p-8 md:p-10 relative">
        {/* Custom Arrows */}
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
                  className={`group relative w-full h-[450px] overflow-hidden rounded-xl 
                    shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Background Image (no pointer blocking) */}
                  <div
                    className="absolute inset-0 bg-cover bg-center rounded-xl overflow-hidden pointer-events-none"
                    style={{ backgroundImage: `url('${capability.image}')` }}
                  >
                  </div>

                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-transparent group-hover:from-black/50 group-hover:to-transparent transition-all duration-300 rounded-xl pointer-events-none"></div>

                  {/* Title */}
                  <div className="absolute top-6 left-6 z-10 pointer-events-none">
                    <h3 className="text-2xl md:text-3xl font-light text-white leading-tight font-sf-pro-display drop-shadow-lg">
                      {capability.title.split(" ")[0]}
                      <span className="block font-bold mt-1">
                        {capability.title.split(" ").slice(1).join(" ")}
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
