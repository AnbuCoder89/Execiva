import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TestimonialData {
  quote: string;
  author: string;
  position: string;
  company: string;
  logo: string;
}

interface StatData {
  value: string;
  description: string;
  trend: 'up' | 'down';
}

interface FeatureCard {
  title: string;
  description: string;
  image: string;
}

interface BrowserWindowProps {
  className?: string;
}

const BrowserWindow: React.FC<BrowserWindowProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax transforms
  const pageOneY = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const pageTwoY = useTransform(scrollYProgress, [0, 1], [800, 0]);
  const pageOneOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const pageTwoOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  const testimonials: TestimonialData[] = [
    {
      quote: "This platform transformed our entire payment workflow. The automation saved us countless hours every month.",
      author: "Sarah Chen",
      position: "CEO",
      company: "TechFlow Inc.",
      logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
    },
    {
      quote: "The vendor onboarding process went from weeks to hours. Absolutely game-changing for our operations.",
      author: "Michael Rodriguez",
      position: "CFO",
      company: "GlobalTech Solutions",
      logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
    },
    {
      quote: "International payments are now seamless. The cost savings alone justified the investment immediately.",
      author: "Emily Johnson",
      position: "Finance Director",
      company: "InnovateCorp",
      logo: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
    },
    {
      quote: "The approval workflows eliminated bottlenecks we didn't even know we had. Incredible efficiency gains.",
      author: "David Park",
      position: "Operations Manager",
      company: "ScaleUp Ventures",
      logo: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
    }
  ];

  const stats: StatData[] = [
    {
      value: "80%",
      description: "manual payment tasks",
      trend: "down"
    },
    {
      value: "30%",
      description: "international fees",
      trend: "down"
    },
    {
      value: "25%",
      description: "payment reconciliation",
      trend: "down"
    },
    {
      value: "$100K",
      description: "saved per year",
      trend: "up"
    }
  ];

  const features: FeatureCard[] = [
    {
      title: "Automated AP Processing",
      description: "Streamline accounts payable with intelligent automation",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
    },
    {
      title: "Vendor Onboarding",
      description: "Seamless vendor registration and verification process",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
    },
    {
      title: "Approval Workflows",
      description: "Customizable approval chains for every transaction",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
    },
    {
      title: "Real-time Analytics",
      description: "Comprehensive insights into your payment operations",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
    }
  ];

  return (
    <div className={`w-full max-w-6xl mx-auto ${className}`}>
      {/* Browser Window Frame */}
      <div className="bg-gray-100 rounded-t-2xl px-4 py-3 flex items-center space-x-2 shadow-sm">
        {/* Traffic Light Buttons */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        
        {/* URL Bar */}
        <div className="flex-1 mx-4">
          <div className="bg-white rounded-lg px-4 py-1.5 text-sm text-gray-500 border border-gray-200">
            https://payments.company.com
          </div>
        </div>
      </div>

      {/* Browser Content */}
      <div 
        ref={containerRef}
        className="bg-white rounded-b-2xl shadow-2xl overflow-hidden relative"
        style={{ height: '800px' }}
      >
        <div className="relative h-[1600px] overflow-hidden">
          
          {/* Page One - Testimonials & Stats */}
          <motion.div
            style={{ 
              y: pageOneY,
              opacity: pageOneOpacity
            }}
            className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white p-12"
          >
            {/* Testimonials Grid */}
            <div className="mb-16">
              <h2 className="text-4xl font-serif font-bold text-gray-900 text-center mb-12">
                Trusted by Industry Leaders
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={testimonial.logo}
                        alt={testimonial.company}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-gray-700 text-sm leading-relaxed mb-4 font-sans">
                          "{testimonial.quote}"
                        </p>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">
                            {testimonial.author}
                          </p>
                          <p className="text-gray-500 text-xs">
                            {testimonial.position}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Row */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex items-center justify-center mb-2">
                      <span className={`text-2xl mr-1 ${
                        stat.trend === 'down' ? 'text-red-500' : 'text-green-500'
                      }`}>
                        {stat.trend === 'down' ? '↓' : '↑'}
                      </span>
                      <span className="text-3xl font-bold text-gray-900 font-serif">
                        {stat.value}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 font-sans">
                      {stat.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Page Two - Features */}
          <motion.div
            style={{ 
              y: pageTwoY,
              opacity: pageTwoOpacity
            }}
            className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 p-12"
          >
            <div className="max-w-5xl mx-auto">
              {/* Headline */}
              <div className="text-center mb-16">
                <h2 className="text-5xl font-serif font-bold text-gray-900 leading-tight mb-6">
                  Automated AP, seamless vendor onboarding,
                  <br />
                  approval flows, and more.
                </h2>
                <p className="text-xl text-gray-600 font-sans max-w-2xl mx-auto">
                  Everything you need to modernize your payment operations in one comprehensive platform.
                </p>
              </div>

              {/* Feature Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 font-sans leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BrowserWindow;