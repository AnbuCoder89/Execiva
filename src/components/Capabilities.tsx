import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Button from "./ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

const Capabilities: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [isVisible, setIsVisible] = useState(false);

const capabilities = [
  {
    title: "FullStack Solutions",
    description: "Creating modern, responsive websites with cutting-edge technologies",
    category: "Development",
    image: "/assets/images/web-development-capabilities.jpeg",
  },
  {
    title: "Automation & Workflows",
    description: "Building native and cross-platform mobile applications",
    category: "AI",
    image: "/assets/images/mobile-apps.jpeg",
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and beautiful user experiences",
    category: "Design",
    image: "/assets/images/uiux-design.jpeg",
  },
  {
    title: "Cloud Solutions",
    description: "Implementing scalable cloud infrastructure and services",
    category: "Cloud",
    image: "/assets/images/cloud-solutions.jpeg",
  },
  {
    title: "E-commerce Development",
    description: "Building high-performance online stores with secure payment systems",
    category: "E-commerce",
    image: "/assets/images/e-commerce.jpeg",
  },
  {
    title: "AI & Machine Learning",
    description: "Developing intelligent solutions for automation and predictive insights",
    category: "AI/ML",
    image: "/assets/images/ai-machine.jpeg",
  },
  {
    title: "Cybersecurity",
    description: "Protecting systems and data from digital threats and vulnerabilities",
    category: "Security",
    image: "https://images.pexels.com/photos/5380641/pexels-photo-5380641.jpeg",
  },
  {
    title: "DevOps & Automation",
    description: "Streamlining deployment pipelines with CI/CD and infrastructure as code",
    category: "DevOps",
    image: "/assets/images/devops_automation.jpeg",
  },
  {
    title: "Blockchain Solutions",
    description: "Building decentralized applications and smart contract systems",
    category: "Blockchain",
    image: "/assets/images/blockchain.jpeg",
  },
  {
    title: "Data Analytics",
    description: "Turning raw data into actionable business insights",
    category: "Analytics",
    image: "/assets/images/data-analytics.jpeg",
  }
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
      className="relative w-full min-h-screen flex flex-col justify-center py-20 bg-white"
    >
      {/* Text Block */}
      <div className="text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-4 leading-tight font-sf-pro-display">
          Innovation is our language,
          <span className="block mt-2">
            execution is our craft
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text max-w-4xl mx-auto">
          From AI and Data to SEO, we transform complexity into clarity, building solutions that not only solve today's challenges but also create tomorrow's opportunities.
        </p>
      </div>

      <div className="text-white w-full h-[60vh] rounded-xl flex items-center justify-center p-6 sm:p-8 md:p-10 relative">
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
            slidesPerView={4}
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
              1280: { slidesPerView: 4, spaceBetween: 30 },
            }}
            className="w-full h-full !overflow-hidden"
          >
            {capabilities.map((capability, index) => (
              <SwiperSlide key={capability.title} className="rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                <div
                  className={`group relative w-full h-[350px] overflow-hidden rounded-xl 
                    shadow-xl hover:shadow-2xl transition-all duration-300
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Background Image (no pointer blocking) */}
                  <div
                    className="absolute inset-0 bg-cover bg-center rounded-xl overflow-hidden pointer-events-none"
                    style={{ backgroundImage: `url('${capability.image}')` }}
                  >
                  </div>

                  {/* Default dark gradient at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-300 rounded-xl pointer-events-none"></div>

                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-transparent group-hover:from-black/60 group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"></div>

                  {/* Title */}
                  <div className="absolute top-6 left-6 z-10 pointer-events-none">
                    <h3 className="text-2xl md:text-3xl font-light text-gray-900 leading-tight font-sf-pro-display drop-shadow-lg">   
                      <span className="block mt-1">
                        {capability.title}
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
