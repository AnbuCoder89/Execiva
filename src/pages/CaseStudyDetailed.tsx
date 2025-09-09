import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import TOC from '../components/caseStudy/TOC';
import CaseContent from '../components/caseStudy/CaseContent';
import CaseLayout from '../components/caseStudy/CaseLayout';
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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    try {
      if (id) {
        // Find the case study by ID
        const study = allCaseStudies.find(study => study.id === id) as CaseStudy;
        if (study) {
          setCaseStudy(study);
        } else {
          setError('Case study not found');
        }
      } else {
        // If no ID provided, use the first case study
        const study = allCaseStudies[0] as CaseStudy;
        setCaseStudy(study);
      }
    } catch (err) {
      setError('Error loading case study');
    } finally {
      setLoading(false);
    }
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

  if (error || !caseStudy) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4 font-sf-pro-display">
            {error || 'Case Study Not Found'}
          </h1>
          <p className="text-gray-600 mb-6 font-sf-pro-text">
            {error || "The case study you're looking for doesn't exist."}
          </p>
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
      {/* Header with back button and title */}
      <div className="bg-white border-b border-gray-200 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="ghost"
              size="sm"
              icon={ArrowLeft}
              iconPosition="left"
              onClick={() => navigate('/case-studies')}
              className="text-gray-600 hover:text-gray-900"
            >
              Back to Case Studies
            </Button>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-sf-pro-display">
              {caseStudy.title}
            </h1>
            <p className="text-lg text-gray-600 font-sf-pro-text max-w-3xl mx-auto">
              {caseStudy.description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Main content with TOC and case study details */}
      <CaseLayout
        toc={<TOC caseStudy={caseStudy} />}
        content={<CaseContent caseStudy={caseStudy} />}
      />
      
      {/* CTA Section */}
      <div className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight font-sf-pro-display">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help you achieve similar results with innovative solutions tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              onClick={() => navigate('/case-studies')}
              className="px-8 py-4 shadow-md hover:shadow-lg"
            >
              View More Case Studies
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudyDetailed;