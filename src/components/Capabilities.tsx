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
    {
      icon: Code,
      title: "Development",
      description: "Full-stack solutions built with cutting-edge technologies and best practices."
    },
    {
      icon: Palette,
      title: "Design",
      description: "Beautiful, intuitive interfaces that enhance user experience and drive engagement."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Lightning-fast applications optimized for speed and scalability."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Solutions that work seamlessly across all platforms and devices worldwide."
    },
    {
      icon: Shield,
      title: "Security",
      description: "Enterprise-grade security measures to protect your data and users."
    },
    {
      icon: Headphones,
      title: "Support",
      description: "24/7 dedicated support to ensure your success every step of the way."
    }
  ];
  const webDevelopment = [
    '/assests/images/web-development/api.jpg',
    '/assests/images/web-development/custom-web-design-and-development.jpg',
    '/assests/images/web-development/ecommerce-website-development-services.png',
    '/assests/images/web-development/role-based-access-control-slide2.jpg',
    '/assests/images/web-development/saas.jpg',
    '/assests/images/web-development/testing.png',
  ];
  const seo = [
    '/assests/images/seo/backlink-building.jpg',
    '/assests/images/seo/on-page-seo.jpg',
    '/assests/images/seo/seo-writing.jpg',
    '/assests/images/seo/seo_audit.jpg',
    '/assests/images/seo/seo_report.png',
  ];

  const dataAnalytics = [
    '/assests/images/data_analytics/User-Behavior-Analytics.jpg',
    '/assests/images/data_analytics/business_intelligence.png',
    '/assests/images/data_analytics/data-cleaning.png',
    '/assests/images/data_analytics/elt.png',
    '/assests/images/data_analytics/predictive-analysis.jpg',
  ];

  const loopedWebDevelopment = [...webDevelopment, ...webDevelopment];
  const loopedSeo = [...seo, ...seo];
  const loopedDataAnalytics = [...dataAnalytics, ...dataAnalytics];
  return (
    <section id="capabilities" className="py-30 bg-white overflow-x-hidden" ref={sectionRef}>
      {/* <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className={`text-5xl md:text-6xl font-light text-gray-900 mb-8 transition-all duration-1000 font-sf-pro-display ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Our
            <span className="block font-bold text-gray-900">
              Capabilities
            </span>
          </h2>
          <p className={`text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 font-sf-pro-text ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
            We combine strategic thinking with technical excellence to deliver solutions that drive real business results.
          </p>
        </div>
      </div> */}
      <div className="w-full overflow-x-hidden bg-gray-50 py-8">
          <motion.div
            className="flex gap-8 mb-6"
            animate={{ x: ['0%', '-100%'] }}
            transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          >
            {loopedWebDevelopment.map((url, index) => (
              <div key={index} className="min-w-[200px] h-[120px] flex-shrink-0 overflow-hidden shadow-md">
                <img
                  src={url}
                  alt={`Thumbnail ${index}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </motion.div>
          <motion.div
            className="flex gap-8 mb-6"
            animate={{ x: ['-100%', '0%'] }}
            transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          >
            {loopedSeo.map((url, index) => (
              <div key={index} className="min-w-[200px] h-[120px] flex-shrink-0 overflow-hidden shadow-md">
                <img
                  src={url}
                  alt={`Thumbnail ${index}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </motion.div>
          <motion.div
            className="flex gap-8 mb-6"
            animate={{ x: ['0%', '-100%'] }}
            transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          >
            {loopedDataAnalytics.map((url, index) => (
              <div key={index} className="min-w-[200px] h-[120px] flex-shrink-0 overflow-hidden shadow-md">
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