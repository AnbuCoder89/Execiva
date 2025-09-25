import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/services/service-detailed/Hero';
import TechStackSection from '../components/services/TechStackSection';
import UseCasesSection from '../components/services/UseCasesSection';
import CTA from '../components/ui/CTA';
import WhyChooseUs from '../components/services/WhyChooseUs';
import PageNotFound from './PageNotFound';
import servicesData from '../../public/data/services.json';

interface Technology {
  name: string;
  src: string;
}

interface UseCase {
  title: string;
  image: string;
  heading: string;
  description: string;
}

interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  tagline: string;
  image: string;
  technologies: Technology[];
  useCases: UseCase[];
}

const ServiceDetailed: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Load services data and find the service by ID
    const loadServiceData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Type assertion to ensure the imported data matches our Service interface
        const services = servicesData as Service[];
        
        // Validate that the data is an array
        if (!Array.isArray(services)) {
          throw new Error('Services data is not in the expected array format');
        }
        
        // Find the service by ID
        const foundService = services.find(s => s.id === serviceId);
        setService(foundService || null);
        
      } catch (err) {
        console.error('Error loading service data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load service data');
        setService(null);
      } finally {
        setLoading(false);
      }
    };
    
    loadServiceData();
  }, [serviceId]);

  const handleGetStarted = () => {
    navigate('/#contact');
    let attempts = 0;
    const tryScroll = () => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (attempts < 10) {
        attempts += 1;
        setTimeout(tryScroll, 100);
      }
    };
    setTimeout(tryScroll, 50);
  };

  const handleViewAllServices = () => {
    navigate('/#services');
    let attempts = 0;
    const tryScroll = () => {
      const element = document.getElementById('services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (attempts < 10) {
        attempts += 1;
        setTimeout(tryScroll, 100);
      }
    };
    setTimeout(tryScroll, 50);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 font-sf-pro-text">Loading service details...</p>
        </div>
      </div>
    );
  }

  if (error || !service) {
    return <PageNotFound type="service" />;
  }

  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero 
        title={service.title}
        category={service.category}
        tagline={service.tagline}
        description={service.description}
        image={service.image}
        onGetStarted={handleGetStarted}
        onViewAllServices={handleViewAllServices}
      />
      
      <TechStackSection 
        technologies={service.technologies}
      />

      <WhyChooseUs/>
      
      <UseCasesSection useCases={service.useCases} />
      
      <CTA onGetStarted={handleGetStarted} />
    </motion.div>
  );
};

export default ServiceDetailed;