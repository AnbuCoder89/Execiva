import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { ArrowLeft } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  detailedDescription: string;
  features: string[];
  benefits: string[];
  technologies: string[];
  useCases: string[];
}

const ServiceDetailedPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);

  // Service data - in a real app, this would come from an API or database
  const services: Service[] = [
    {
      id: 'artificial-intelligence',
      title: 'Artificial Intelligence',
      category: 'AI',
      description: 'AI-powered solutions that automate processes and provide intelligent insights.',
      image: '/image/services/Artificial_Intelligence.jpg',
      detailedDescription: 'Streamline operations and build intelligent customer applications with secure AI grounded in your enterprise data. Our AI solutions empower your workforce and elevate your product through advanced machine learning, natural language processing, and predictive analytics.',
      features: [
        'Machine Learning Model Development',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'AI-Powered Automation',
        'Intelligent Data Processing'
      ],
      benefits: [
        'Increased operational efficiency',
        'Enhanced decision-making capabilities',
        'Automated routine tasks',
        'Improved customer experiences',
        'Data-driven insights',
        'Competitive advantage through innovation'
      ],
      technologies: [
        'TensorFlow',
        'PyTorch',
        'OpenAI GPT',
        'Hugging Face',
        'AWS SageMaker',
        'Google Cloud AI',
        'Azure Cognitive Services'
      ],
      useCases: [
        'Customer Service Chatbots',
        'Fraud Detection Systems',
        'Recommendation Engines',
        'Document Processing',
        'Predictive Maintenance',
        'Content Generation'
      ]
    },
    {
      id: 'seo',
      title: 'SEO',
      category: 'SEO',
      description: 'Comprehensive digital transformation strategies tailored to your business goals',
      image: '/image/services/Digital_Statergy.jpeg',
      detailedDescription: 'Boost your online visibility and drive organic traffic with our comprehensive SEO strategies. We optimize your digital presence to ensure your business ranks higher in search results and reaches your target audience effectively.',
      features: [
        'Technical SEO Audits',
        'Keyword Research & Strategy',
        'On-Page Optimization',
        'Content Strategy Development',
        'Link Building Campaigns',
        'Local SEO Optimization'
      ],
      benefits: [
        'Increased organic traffic',
        'Higher search engine rankings',
        'Better user experience',
        'Improved brand visibility',
        'Higher conversion rates',
        'Long-term sustainable growth'
      ],
      technologies: [
        'Google Analytics',
        'Google Search Console',
        'SEMrush',
        'Ahrefs',
        'Screaming Frog',
        'Yoast SEO',
        'Schema Markup'
      ],
      useCases: [
        'E-commerce SEO',
        'Local Business Optimization',
        'Content Marketing SEO',
        'Technical SEO Fixes',
        'Mobile SEO',
        'Voice Search Optimization'
      ]
    },
    {
      id: 'web-development',
      title: 'Web Development',
      category: 'Development',
      description: 'Custom websites and web applications built for performance and scalability',
      image: '/image/services/web_development-6.jpeg',
      detailedDescription: 'Create powerful, scalable web applications that drive business growth. Our development team builds custom solutions using modern technologies, ensuring optimal performance, security, and user experience across all devices.',
      features: [
        'Custom Web Application Development',
        'Responsive Design Implementation',
        'E-commerce Platform Development',
        'API Development & Integration',
        'Database Design & Optimization',
        'Performance Optimization'
      ],
      benefits: [
        'Enhanced user experience',
        'Improved business efficiency',
        'Scalable architecture',
        'Mobile-responsive design',
        'Secure data handling',
        'Fast loading times'
      ],
      technologies: [
        'React',
        'Next.js',
        'Node.js',
        'TypeScript',
        'MongoDB',
        'PostgreSQL',
        'AWS',
        'Docker'
      ],
      useCases: [
        'Corporate Websites',
        'E-commerce Platforms',
        'SaaS Applications',
        'Portfolio Websites',
        'Booking Systems',
        'Content Management Systems'
      ]
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      category: 'Analytics',
      description: 'Data-driven insights to help you make informed decisions and optimize your operations',
      image: '/image/services/Data_Analytics.jpg',
      detailedDescription: 'Transform your raw data into actionable insights that drive strategic decision-making. Our analytics solutions help you understand customer behavior, optimize operations, and identify new growth opportunities through advanced data science techniques.',
      features: [
        'Data Visualization Dashboards',
        'Predictive Analytics Models',
        'Business Intelligence Solutions',
        'Real-time Data Processing',
        'Custom Analytics Platforms',
        'Data Pipeline Development'
      ],
      benefits: [
        'Data-driven decision making',
        'Improved operational efficiency',
        'Better customer understanding',
        'Risk mitigation',
        'Revenue optimization',
        'Competitive insights'
      ],
      technologies: [
        'Python',
        'R',
        'Tableau',
        'Power BI',
        'Apache Spark',
        'Elasticsearch',
        'Google BigQuery',
        'Snowflake'
      ],
      useCases: [
        'Customer Analytics',
        'Sales Forecasting',
        'Marketing Attribution',
        'Operational Analytics',
        'Financial Reporting',
        'Risk Assessment'
      ]
    }
  ];

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Find the service by ID
    const foundService = services.find(s => s.id === serviceId);
    setService(foundService || null);
    setLoading(false);
  }, [serviceId]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const handleGetStartedClick = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleBackClick = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600 font-sf-pro-text">Loading service details...</p>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4 font-sf-pro-display">Service Not Found</h1>
          <p className="text-gray-600 mb-6 font-sf-pro-text">The service you're looking for doesn't exist.</p>
          <Button
            variant="vision"
            onClick={handleBackClick}
            icon={ArrowLeft}
            iconPosition="left"
          >
            Back to Services
          </Button>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <motion.section 
        className="relative w-full px-4 lg:px-10 pt-28 md:pt-40 pb-28 md:pb-40 text-black bg-white"
        variants={itemVariants}
      >
        <div className="relative z-10 max-w-7xl mx-auto w-full h-full">
          <div className="flex h-full justify-center md:gap-x-10 lg:gap-x-32 flex-col md:flex-row items-center">
            
            {/* Left Column - Content */}
            <motion.div 
              className="w-full mb-10 md:mb-14 md:w-1/2 flex justify-center"
              variants={itemVariants}
            >
              <div className="text-left max-w-[350px] sm:max-w-full lg:max-w-[550px]">
                <motion.div variants={itemVariants}>
                  <p className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-3 font-sf-pro-text">
                    {service.category}
                  </p>
                  <div className="mb-4 break-words">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight font-sf-pro-display">
                      {service.title}
                    </h1>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <div className="mx-auto flex justify-start">
                    <div className="break-words mb-6 lg:mb-10 lg:w-[555px]">
                      <p className="text-base lg:text-xl text-gray-600 leading-relaxed font-sf-pro-text">
                        {service.detailedDescription}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center justify-start">
                    <Button
                      variant="vision"
                      size="lg"
                      onClick={handleGetStartedClick}
                      className="px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Request a demo
                    </Button>
                    <Button
                      variant="ghost"
                      size="lg"
                      icon={ArrowLeft}
                      iconPosition="left"
                      onClick={handleBackClick}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Back to Services
                    </Button>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div 
              className="w-full md:w-1/2"
              variants={itemVariants}
            >
              <div className="hidden md:block">
                <img
                  alt={service.title}
                  className="m-auto w-full md:rounded-xl shadow-2xl"
                  src={service.image}
                  width="680"
                  height="680"
                />
              </div>
              <div className="block md:hidden">
                <img
                  alt={service.title}
                  className="m-auto w-full rounded-lg shadow-2xl"
                  src={service.image}
                  width="680"
                  height="680"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="py-16 md:py-20 bg-white"
        variants={itemVariants}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-10">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-12 text-center leading-tight font-sf-pro-display"
            variants={itemVariants}
          >
            Key Features
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-beige rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sf-pro-display">
                  {feature}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits & Technologies Section */}
      <motion.section 
        className="py-16 md:py-20 bg-white"
        variants={itemVariants}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-10">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Benefits */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 font-sf-pro-display">
                Benefits
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed font-sf-pro-text text-lg">
                      {benefit}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 font-sf-pro-display">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 bg-beige text-gray-900 rounded-full text-sm font-medium font-sf-pro-text border border-gray-200 shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.05, backgroundColor: "#ebe8dd" }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Use Cases Section */}
      <motion.section 
        className="py-16 md:py-20 bg-white"
        variants={itemVariants}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-10">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-12 text-center leading-tight font-sf-pro-display"
            variants={itemVariants}
          >
            Use Cases
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 font-sf-pro-display">
                  {useCase}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 md:py-20 bg-white"
        variants={itemVariants}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight font-sf-pro-display"
            variants={itemVariants}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Let's discuss how our {service.title.toLowerCase()} solutions can transform your business and drive growth.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Button
              variant="vision"
              size="lg"
              onClick={handleGetStartedClick}
              className="px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started
            </Button>
            <Button
              variant="vision"
              size="lg"
              onClick={handleBackClick}
              className="px-8 py-4 shadow-md hover:shadow-lg"
            >
              View All Services
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ServiceDetailedPage;