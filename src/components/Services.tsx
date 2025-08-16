import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  const services = [
    {
      title: 'Web Development',
      description:
        'Custom websites and web applications built for performance and scalability.',
      features: [
        'Responsive Design',
        'Performance Optimization',
        'SEO Ready',
        'Modern Frameworks',
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'Mobile Development',
      description:
        'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      features: [
        'iOS & Android',
        'Cross-Platform',
        'App Store Optimization',
        'Push Notifications',
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'Digital Strategy',
      description:
        'Comprehensive digital transformation strategies tailored to your business goals.',
      features: [
        'Market Analysis',
        'Technology Roadmap',
        'Digital Transformation',
        'Growth Strategy',
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'Data Analytics',
      description:
        'Data-driven insights to help you make informed decisions and optimize your operations.',
      features: ['Data Cleaning', 'Data Visualization', 'Data Analysis', 'Data Reporting'],
      imageUrl:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1470&q=80',
    },
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center bg-gray-50"
      >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-4">
  <div className="p-6 rounded-2xl shadow bg-white">Service 1</div>
  <div className="p-6 rounded-2xl shadow bg-white">Service 2</div>
  <div className="p-6 rounded-2xl shadow bg-white">Service 3</div>
  <div className="p-6 rounded-2xl shadow bg-white">Service 4</div>
</div>
    </section>
  );
};

export default Services;