import React, { useEffect, useRef, useState } from 'react';
import { Code, Palette, Zap, Globe, Shield, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';


const Capabilities: React.FC = () => {
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

  const capabilities = [
    '/assets/images/web-development/api.jpg',
    '/assets/images/web-development/custom-web-design-and-development.jpg',
    '/assets/images/web-development/ecommerce-website-development-services.png',
    '/assets/images/web-development/role-based-access-control-slide2.jpg',
    '/assets/images/web-development/saas.jpg',
    '/assets/images/web-development/testing.png',
    '/assets/images/seo/backlink-building.jpg',
    '/assets/images/seo/on-page-seo.jpg',
    '/assets/images/seo/seo-writing.jpg',
    '/assets/images/seo/seo_audit.jpg',
    '/assets/images/seo/seo_report.png',
    '/assets/images/data_analytics/User-Behavior-Analytics.jpg',
    '/assets/images/data_analytics/business_intelligence.png',
    '/assets/images/data_analytics/data-cleaning.png',
    '/assets/images/data_analytics/elt.png',
    '/assets/images/data_analytics/predictive-analysis.jpg',
  ];

  const loopedCapabilities = [...capabilities, ...capabilities];
  return (
    <section id="capabilities" 
      className="relative w-full py-10 overflow-hidden"
      ref={sectionRef}>
      <div className="w-full overflow-x-hidden py-8">
        <motion.div
          className="flex gap-8 mb-6"
          animate={{ x: ['0%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        >
          {loopedCapabilities.map((url, index) => (
            <div key={index} className="min-w-[300px] h-[200px] flex-shrink-0 overflow-hidden shadow-md">
              <img
                src={url}
                alt={`Thumbnail ${index}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Capabilities;