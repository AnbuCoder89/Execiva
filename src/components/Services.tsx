import React, { useRef, useState, useEffect } from 'react';
import ScrollStack from '@/components/ui/scroll-stack';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: 'Web Development',
      subtitle: 'Custom websites and web applications built for performance and scalability.',
      badge: 'Step 1',
      backgroundImage: '/assets/images/web-development/web_development-6.jpeg',
      content: (
        <div className="flex flex-col justify-between h-full p-8">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-sf-pro-display">Web Development</h3>
            <p className="text-lg md:text-xl leading-relaxed font-sf-pro-text">
              Custom websites and web applications built for performance and scalability.
            </p>
          </div>
          <div className="flex justify-center">
            <Button variant="vision" size="md" icon={ArrowRight} iconPosition="right">
              Learn More
            </Button>
          </div>
        </div>
      ),
    },
    {
      title: 'Artificial Intelligence',
      subtitle: 'AI-powered solutions that automate processes and provide intelligent insights.',
      badge: 'Step 2',
      backgroundImage: '/assets/images/Artificial_Intelligence.jpg',
      content: (
        <div className="flex flex-col justify-between h-full p-8">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-sf-pro-display">Artificial Intelligence</h3>
            <p className="text-lg md:text-xl leading-relaxed font-sf-pro-text">
              AI-powered solutions that automate processes and provide intelligent insights.
            </p>
          </div>
          <div className="flex justify-center">
            <Button variant="vision" size="md" icon={ArrowRight} iconPosition="right">
              Learn More
            </Button>
          </div>
        </div>
      ),
    },
    {
      title: 'Digital Strategy',
      subtitle: 'Comprehensive digital transformation strategies tailored to your business goals.',
      badge: 'Step 3',
      backgroundImage: '/assets/images/Digital_Statergy.jpeg',
      content: (
        <div className="flex flex-col justify-between h-full p-8">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-sf-pro-display">Digital Strategy</h3>
            <p className="text-lg md:text-xl leading-relaxed font-sf-pro-text">
              Comprehensive digital transformation strategies tailored to your business goals.
            </p>
          </div>
          <div className="flex justify-center">
            <Button variant="vision" size="md" icon={ArrowRight} iconPosition="right">
              Learn More
            </Button>
          </div>
        </div>
      ),
    },
    {
      title: 'Data Analytics',
      subtitle: 'Data-driven insights to help you make informed decisions and optimize your operations.',
      badge: 'Step 4',
      backgroundImage: '/assets/images/Data_Analytics.jpg',
      content: (
        <div className="flex flex-col justify-between h-full p-8">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-sf-pro-display">Data Analytics</h3>
            <p className="text-lg md:text-xl leading-relaxed font-sf-pro-text">
              Data-driven insights to help you make informed decisions and optimize your operations.
            </p>
          </div>
          <div className="flex justify-center">
            <Button variant="vision" size="md" icon={ArrowRight} iconPosition="right">
              Learn More
            </Button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="relative w-full h-screen bg-white overflow-hidden">
      <ScrollStack 
        cards={services} 
        backgroundColor="white"
        cardHeight="80vh"
        animationDuration="0.7s"
        sectionHeightMultiplier={4}
      />
    </section>
  );
};

export default Services;
