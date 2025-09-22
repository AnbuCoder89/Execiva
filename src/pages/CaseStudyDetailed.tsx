import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import TOC from '../components/caseStudy/TOC';
import CaseContent from '../components/caseStudy/CaseContent';
import CaseLayout from '../components/caseStudy/CaseLayout';
import HeroSection from '../components/caseStudy/HeroSection';
import DescriptionSection from '../components/caseStudy/DescriptionSection';
import allCaseStudies from '../../data/caseStudies.json';
import CTA from '../components/ui/CTA';
import PageNotFound from './PageNotFound';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  topic: string;
  industry: string;
  region: string;
  service_category: string;
  service: string;
  image: string;
  description: string;
  serviceType: string[];
  clientCompany: string;
  technology: string[];
  projectTimeline: string;
  projectType: string;
  impactArea: string[];
  background?: string;
  objectives?: string[];
  approach?: string;
  keyDeliverables?: string[];
  resultsAchieved?: string;
  clientFeedback?: string[];
  keyTechnologies?: string[];
  notableInsights?: string;
  lessonsLearned?: string;
  challengesOvercome?: string;
  nextSteps?: string;
  extensionPossibilities?: string;
}

const CaseStudyDetailed: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Find the case study by ID
    const study = allCaseStudies.find(study => study.id === id) as CaseStudy;
    setCaseStudy(study);
    setLoading(false);
  }, [id]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

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

  const handleGetStartedClick = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleViewMoreClick = () => {
    navigate('/case-studies');
  };

  const handleBackClick = () => {
    navigate('/case-studies');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600 font-sf-pro-text">Loading case study...</p>
        </div>
      </div>
    );
  }

  if (!caseStudy) {
    return <PageNotFound type="case study" />;
  }

  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <HeroSection caseStudy={caseStudy} onBackClick={handleBackClick} />
      <DescriptionSection 
        description={caseStudy.description}
        serviceType={caseStudy.serviceType}
        keyTechnologies={caseStudy.keyTechnologies}
        technology={caseStudy.technology}
      />
      <CaseLayout 
        toc={<TOC caseStudy={caseStudy} />}
        content={<CaseContent caseStudy={caseStudy} />}
      />
      <CTA onGetStarted={handleGetStarted} />
      
    </motion.div>
  );
};


export default CaseStudyDetailed;