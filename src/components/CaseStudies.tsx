import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

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
    <section id="case-studies" className="py-32 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className={`text-5xl md:text-6xl font-light text-gray-900 mb-8 transition-all duration-1000 font-sf-pro-display ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Case
            <span className="block font-bold text-gray-900">
              Studies
            </span>
          </h2>
          <p className={`text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 font-sf-pro-text ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
            Real results from real partnerships. See how we've helped businesses achieve extraordinary growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-b from-gray-50 to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="aspect-video overflow-hidden bg-light-gray">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-8">
                <div className="text-sm text-gray-900 font-medium mb-2 font-sf-pro-text">
                  {study.client}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-sf-pro-display">
                  {study.title}
                </h3>
                <p className="text-gray-900 mb-6 leading-relaxed font-sf-pro-text">
                  {study.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center text-sm text-gray-900 font-sf-pro-text">
                      <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mr-3"></div>
                      {metric}
                    </div>
                  ))}
                </div>

                <button className="group-hover:bg-gray-900 group-hover:text-white border border-gray-900 text-gray-900 px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 font-sf-pro-text">
                  <span>View Case Study</span>
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;