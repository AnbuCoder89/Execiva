import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CaseStudies: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    return () => observer.disconnect();
  }, []);

  const caseStudies = [
    {
      title: "E-Commerce Revolution",
      client: "TechCorp",
      description: "Transformed a traditional retail business into a digital powerhouse with 300% increase in online sales.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      metrics: ["300% Sales Increase", "50% Cost Reduction", "24/7 Operations"]
    },
    {
      title: "Mobile Banking App",
      client: "FinanceFirst",
      description: "Designed and developed a secure mobile banking solution serving over 1 million users.",
      image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=600",
      metrics: ["1M+ Users", "99.9% Uptime", "Bank-Grade Security"]
    },
    {
      title: "Healthcare Platform",
      client: "MedConnect",
      description: "Built a comprehensive telemedicine platform connecting patients with healthcare providers.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600",
      metrics: ["10K+ Consultations", "95% Satisfaction", "HIPAA Compliant"]
    }
  ];

  return (
    <section id="case-studies" className="py-20 px-3" ref={sectionRef}>
      <div className="mx-auto px-3">

        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            navigation={false}
            autoplay={{ delay: 5000 }}
            className="pb-16"
          >
            {caseStudies.map((study, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch h-full">
                  <div className="md:order-1 h-full flex items-stretch">
                    <div className="w-full h-80 md:h-96 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:order-2 flex flex-col justify-center h-full">
                    <div className="space-y-6">
                      <div>
                            <div className="text-sm text-gray-900 font-medium mb-2">
                              {study.client}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                              {study.title}
                            </h3>
                            <p className="text-gray-900 leading-relaxed">
                              {study.description}
                            </p>
                          </div>
                          <div className="pt-2">
                            <button className="group flex items-center space-x-2 text-gray-900 hover:text-white border border-gray-900 hover:bg-gray-900 px-6 py-3 rounded-full transition-all duration-300">
                              <span>Learn More</span>
                              <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                          </div>
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

export default CaseStudies;
