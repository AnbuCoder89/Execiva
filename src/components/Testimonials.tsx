import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Star, ChevronRight, ChevronLeft } from 'lucide-react';
import Button from "./ui/Button";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const testimonials = [
    {
      name: "Sarah Chen",
      position: "CEO, TechCorp",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Working with this team has been transformative for our business. Their attention to detail and innovative approach exceeded all expectations.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      position: "CTO, FinanceFirst",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "The level of professionalism and technical expertise is unmatched. They delivered a solution that perfectly aligned with our vision.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      position: "Founder, MedConnect",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "From concept to launch, they guided us every step of the way. The result exceeded our wildest dreams and transformed our industry presence.",
      rating: 5
    },
    {
      name: "David Park",
      position: "VP, Innovation Labs",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Their strategic approach and cutting-edge solutions have revolutionized how we operate. Truly exceptional partnership and results.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      position: "Marketing Director, GrowthTech",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "The team's creativity and technical expertise delivered beyond our expectations. Our digital transformation was seamless and impactful.",
      rating: 5
    },
    {
      name: "James Wilson",
      position: "Founder, StartupHub",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Outstanding results that transformed our entire business model. The team's expertise and dedication are truly remarkable.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      position: "Head of Digital, RetailCorp",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Incredible attention to detail and innovative solutions. They exceeded every expectation and delivered exceptional results.",
      rating: 5
    },
    {
      name: "Robert Kim",
      position: "CTO, DataFlow",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Professional, innovative, and results-driven. The perfect partner for digital transformation and growth.",
      rating: 5
    },
    {
      name: "Amanda Foster",
      position: "CEO, InnovateLab",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Exceptional service and outstanding results. They brought our vision to life with precision and creativity.",
      rating: 5
    }
  ];

  return (
    <section 
      id="testimonials" 
      className="relative py-20 md:py-32 bg-gray-50" 
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-light text-gray-900 mb-4 transition-all duration-1000 font-sf-pro-display ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            We Care About Our Customers
            <span className="block font-normal text-gray-600 mt-2">
              Experience Too
            </span>
          </h2>
        </div>

        {/* Horizontal Scroll Testimonials */}
        <div className="relative w-full flex items-center justify-center px-4 sm:px-6 md:px-16">
          <div className="w-full h-[500px] rounded-xl flex items-center justify-center p-6 sm:p-8 md:p-10 relative">
            {/* Custom Arrows */}
            <button
              ref={prevRef}
              className="absolute -left-8 top-1/2 -translate-y-1/2 z-10"
            >
              <Button
                variant="vision"
                size="md"
                icon={ChevronLeft}
                iconPosition="left"
                className="!p-3 !rounded-full shadow hover:shadow-lg"
              >
              </Button>
            </button>
            <button
              ref={nextRef}
              className="absolute -right-8 top-1/2 -translate-y-1/2 z-10"
            >
              <Button
                variant="vision"
                size="md"
                icon={ChevronRight}
                iconPosition="right"
                className="!p-3 !rounded-full shadow hover:shadow-lg"
              >
              </Button>
            </button>

            <div className="w-full flex items-center">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                speed={800}
                grabCursor={true}
                modules={[Navigation]}
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
                }}
                className="w-full h-full !overflow-hidden"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={testimonial.name} className="rounded-xl overflow-hidden">
                    <div
                      className={`group relative w-full h-[400px] overflow-hidden rounded-xl 
                        shadow-xl hover:shadow-2xl transition-all duration-300 bg-white
                        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="p-8 h-full flex flex-col justify-between">
                        {/* Profile Image */}
                        <div className="flex justify-center mb-6">
                          <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col justify-center text-center">
                          {/* Name */}
                          <h3 className="text-xl font-semibold text-gray-900 mb-2 font-sf-pro-display">
                            {testimonial.name}
                          </h3>

                          {/* Position */}
                          <p className="text-base text-gray-600 mb-4 font-sf-pro-text">
                            {testimonial.position}
                          </p>

                          {/* Content */}
                          <p className="text-gray-700 leading-relaxed mb-6 font-sf-pro-text">
                            "{testimonial.content}"
                          </p>
                        </div>

                        {/* Rating */}
                        <div className="flex justify-center space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={18} 
                              className="text-yellow-400 fill-current" 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;