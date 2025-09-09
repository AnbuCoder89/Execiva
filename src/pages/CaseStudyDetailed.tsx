import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/caseStudy/HeroSection';
import DescriptionSection from '../components/caseStudy/DescriptionSection';
import MainContentSections from '../components/caseStudy/MainContentSections';
import ImpactAreas from '../components/caseStudy/ImpactAreas';
import CTASection from '../components/caseStudy/CTASection';
import BackgroundSection from '../components/caseStudy/BackgroundSection';
import ObjectivesSection from '../components/caseStudy/ObjectivesSection';
import ApproachSection from '../components/caseStudy/ApproachSection';
import Button from '../components/ui/Button';
import { ArrowLeft } from 'lucide-react';
import allCaseStudies from '../../data/caseStudies.json';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  topic: string;
  industry: string;
  region: string;
  channel: string;
  product: string;
  image: string;
  description: string;
  serviceType: string[];
  clientIndustry: string;
  technology: string[];
  projectTimeline: string;
  projectType: string;
  impactArea: string[];
  background?: string;
  objectives?: string;
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
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4 font-sf-pro-display">Case Study Not Found</h1>
          <p className="text-gray-600 mb-6 font-sf-pro-text">The case study you're looking for doesn't exist.</p>
          <Button
            variant="vision"
            onClick={() => navigate('/case-studies')}
            icon={ArrowLeft}
            iconPosition="left"
          >
            Back to Case Studies
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
      <HeroSection caseStudy={caseStudy} onBackClick={handleBackClick} />
      <DescriptionSection 
        description={caseStudy.description}
        serviceType={caseStudy.serviceType}
        keyTechnologies={caseStudy.keyTechnologies}
        technology={caseStudy.technology}
      />
      <BackgroundSection caseStudy={caseStudy} />
      <ObjectivesSection caseStudy={caseStudy} />
      <ApproachSection caseStudy={caseStudy} />
      <MainContentSections caseStudy={caseStudy} />
      {/* <ImpactAreas impactArea={caseStudy.impactArea} /> */}
      
      <CTASection 
        onGetStartedClick={handleGetStartedClick}
        onViewMoreClick={handleViewMoreClick}
      />
    </motion.div>
  );
};

export default CaseStudyDetailed;