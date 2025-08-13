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
    <div className="relative">
      <div className="bg-black text-white w-full h-[80vh] rounded-xl flex items-center justify-center p-6 sm:p-8 md:p-10">
        <div className="w-full mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-center w-full">
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
                320: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 25 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
                1280: { slidesPerView: 4, spaceBetween: 30 },
              }}
              className="w-full !overflow-visible"
            >
              {capabilities.map((capability, index) => (
                <SwiperSlide key={capability.title}>
                  <div
                    className={`group h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px] bg-cover bg-center shadow-xl relative overflow-hidden transition-all duration-700 ease-out hover:-translate-y-4 hover:shadow-2xl rounded-xl ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{
                      backgroundImage: `url('${capability.image}')`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    {/* Dark overlay at top */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent h-1/2 transition-all duration-500 group-hover:from-black/90 group-hover:via-black/70" />
                    
                    {/* Title positioned at top */}
                    <div className="relative z-10 p-6 md:p-8">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-tight font-sf-pro-display">
                        {capability.title.split(' ')[0]}
                        <span className="block font-bold mt-1">
                          {capability.title.split(' ').slice(1).join(' ')}
                        </span>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


  );
};

export default Capabilities;