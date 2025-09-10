import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Button from '../ui/Button';
import ServiceHero2 from './ServiceHero2';
import ServiceBenefitsAndTech from './ServiceBenefitsAndTech';
import ServiceUseCases2 from './ServiceUseCases2';
import ServiceCTA from './ServiceCTA';
import TrustedBy from './TrustedBy';
import WhyChooseUs from './WhyChooseUs';

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
        'Performance Optimization',
        'Progressive Web App (PWA) Development',
        'Cloud Deployment & Scalability',
        'Third-Party Service Integration',
        'Ongoing Maintenance & Support'
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

  const handleRequestDemo = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleBackToServices = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleGetStarted = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleViewAllServices = () => {
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
            onClick={handleBackToServices}
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
    <ServiceHero2 />
      
      <ServiceBenefitsAndTech 
        benefits={service.benefits}
        technologies={service.technologies}
      />

      <WhyChooseUs serviceName={service.title} />
      
      <ServiceUseCases2 />
      
      {/* <TrustedBy /> */}
      


    
      <ServiceCTA
        serviceName={service.title}
        onGetStarted={handleGetStarted}
        onViewAllServices={handleViewAllServices}
      />
    </motion.div>
  );
};

export default ServiceDetailedPage;