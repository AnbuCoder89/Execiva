import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Building, Globe, Wrench, Target, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';
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
      {/* Hero Section */}
      <motion.section 
        className="text-black pt-20"
        style={{
          background: 'linear-gradient(to bottom, #f2f2f2 0%, #ada996 100%)'
        }}
        variants={itemVariants}
      >
        <div className="pb-12 pt-[72px] md:pb-[60px] lg:pt-[148px]">
          <div className="max-w-[1490px] px-4 lg:px-10 box-content mx-auto">
            <motion.div 
              className="grid gap-10 mt-16 md:grid-cols-12 md:grid-flow-col-dense md:mt-10"
              variants={containerVariants}
            >
              {/* Left Column - Content */}
              <motion.div 
                className="flex items-center md:col-span-6 xl:col-span-5"
                variants={itemVariants}
              >
                <div className="space-y-10 max-w-5xl">
                  <div className="space-y-6 md:space-y-4">
                    <div className="space-y-2 md:space-y-6">
                      <motion.p 
                        className="text-sm font-medium text-gray-600 uppercase tracking-wide font-sf-pro-text"
                        variants={itemVariants}
                      >
                        {caseStudy.subtitle}
                      </motion.p>
                      <motion.h1 
                        className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight font-sf-pro-display"
                        variants={itemVariants}
                      >
                        {caseStudy.title}
                      </motion.h1>
                    </div>

                    {/* Client Industry Logo/Badge */}
                    <motion.ul 
                      className="flex flex-wrap gap-4 lg:gap-8"
                      variants={itemVariants}
                    >
                      <li className="relative aspect-square min-h-[62px] lg:min-h-[124px]">
                        <div className="absolute size-full flex items-center justify-center inset-0 bg-white rounded-lg border border-gray-200 grayscale opacity-70">
                          <span className="text-xs md:text-sm font-medium text-gray-600 font-sf-pro-text text-center px-2">
                            {caseStudy.clientIndustry}
                          </span>
                        </div>
                      </li>
                    </motion.ul>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Image */}
              <motion.div 
                className="flex items-center md:col-span-6 md:-ml-5 xl:col-start-7"
                variants={itemVariants}
              >
                <figure className="w-full">
                  <img
                    className="w-full rounded-lg md:rounded-2xl shadow-2xl"
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    loading="lazy"
                  />
                </figure>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Project Details Bar */}
        <motion.div 
          className="py-8 border-t md:py-9"
          variants={itemVariants}
        >
          <div className="max-w-[1490px] px-4 lg:px-10 box-content mx-auto">
            <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
              <ul className="flex flex-col gap-6 lg:flex-row lg:flex-wrap lg:gap-y-4 lg:gap-x-8">
                <li className="lg:gap-1">
                  <p className="text-xs font-medium text-gray-600 uppercase tracking-wide font-sf-pro-text">REGION</p>
                  <p className="text-sm text-gray-800 opacity-80 font-sf-pro-text">{caseStudy.region}</p>
                </li>
                
                <li className="lg:gap-1">
                  <p className="text-xs font-medium text-gray-600 uppercase tracking-wide font-sf-pro-text">PRODUCT</p>
                  <ul className="flex flex-wrap gap-4">
                    <li className="text-sm font-sf-pro-text">
                      <span className="text-gray-800 opacity-80">{caseStudy.product}</span>
                    </li>
                  </ul>
                </li>
                
                <li className="lg:gap-1">
                  <p className="text-xs font-medium text-gray-600 uppercase tracking-wide font-sf-pro-text">CHANNEL</p>
                  <ul className="flex flex-wrap gap-4">
                    <li className="text-sm font-sf-pro-text">
                      <span className="text-gray-800 opacity-80">{caseStudy.channel}</span>
                    </li>
                  </ul>
                </li>

                <li className="lg:gap-1">
                  <p className="text-xs font-medium text-gray-600 uppercase tracking-wide font-sf-pro-text">TIMELINE</p>
                  <p className="text-sm text-gray-800 opacity-80 font-sf-pro-text">{caseStudy.projectTimeline}</p>
                </li>
              </ul>
              
              {/* Back Button */}
              <div className="md:ml-auto">
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
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Description Section */}
      <motion.section 
        className="py-16 md:py-20 bg-white"
        variants={itemVariants}
      >
        <div className="max-w-[1490px] px-4 lg:px-10 box-content mx-auto">
          <div className="max-w-4xl">
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 leading-relaxed font-sf-pro-text"
              variants={itemVariants}
            >
              {caseStudy.description}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Services & Technologies */}
      <motion.section 
        className="py-16 md:py-20 bg-gray-50"
        variants={itemVariants}
      >
        <div className="max-w-[1490px] px-4 lg:px-10 box-content mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 font-sf-pro-display">Services Provided</h3>
              <div className="flex flex-wrap gap-3">
                {caseStudy.serviceType.map((service, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 bg-white text-gray-800 rounded-full text-sm font-medium font-sf-pro-text border border-gray-200"
                    whileHover={{ scale: 1.05, backgroundColor: "#F9FAFB" }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {service}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 font-sf-pro-display">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {(caseStudy.keyTechnologies || caseStudy.technology).map((tech, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-medium font-sf-pro-text border border-blue-200"
                    whileHover={{ scale: 1.05, backgroundColor: "#DBEAFE" }}
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

      {/* Main Content */}
      <motion.section 
        className="py-16 md:py-20 bg-white"
        variants={itemVariants}
      >
        <div className="max-w-[1490px] px-4 lg:px-10 box-content mx-auto">
          <div className="max-w-4xl mx-auto">
            
            {/* Background & Challenge */}
            {caseStudy.background && (
              <motion.div 
                className="mb-16"
                variants={itemVariants}
              >
                <h2 className="text-3xl font-semibold text-gray-900 mb-6 font-sf-pro-display">Background & Challenge</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed font-sf-pro-text">{caseStudy.background}</p>
                </div>
              </motion.div>
            )}

            {/* Objectives */}
            {caseStudy.objectives && (
              <motion.div 
                className="mb-16"
                variants={itemVariants}
              >
                <h2 className="text-3xl font-semibold text-gray-900 mb-6 font-sf-pro-display">Objectives</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed font-sf-pro-text">{caseStudy.objectives}</p>
                </div>
              </motion.div>
            )}

            {/* Approach & Solution */}
            {caseStudy.approach && (
              <motion.div 
                className="mb-16"
                variants={itemVariants}
              >
                <h2 className="text-3xl font-semibold text-gray-900 mb-6 font-sf-pro-display">Approach & Solution</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed font-sf-pro-text">{caseStudy.approach}</p>
                </div>
              </motion.div>
            )}

            {/* Key Deliverables */}
            {caseStudy.keyDeliverables && (
              <motion.div 
                className="mb-16"
                variants={itemVariants}
              >
                <h2 className="text-3xl font-semibold text-gray-900 mb-6 font-sf-pro-display">Key Deliverables</h2>
                <div className="space-y-4">
                  {caseStudy.keyDeliverables.map((deliverable, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 leading-relaxed font-sf-pro-text">{deliverable}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Results & Impact */}
            {caseStudy.resultsAchieved && (
              <motion.div 
                className="mb-16"
                variants={itemVariants}
              >
                <h2 className="text-3xl font-semibold text-gray-900 mb-6 font-sf-pro-display">Results & Impact</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed font-sf-pro-text">{caseStudy.resultsAchieved}</p>
                </div>
              </motion.div>
            )}

            {/* Client Feedback */}
            {caseStudy.clientFeedback && caseStudy.clientFeedback.length > 0 && (
              <motion.div 
                className="mb-16"
                variants={itemVariants}
              >
                <h2 className="text-3xl font-semibold text-gray-900 mb-6 font-sf-pro-display">Client Feedback</h2>
                <div className="space-y-4">
                  {caseStudy.clientFeedback.map((feedback, index) => (
                    <motion.blockquote
                      key={index}
                      className="border-l-4 border-blue-500 pl-6 py-2 bg-blue-50 rounded-r-lg"
                      whileHover={{ scale: 1.02, x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <p className="text-gray-700 italic font-sf-pro-text">"{feedback}"</p>
                    </motion.blockquote>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Notable Insights */}
            {caseStudy.notableInsights && (
              <motion.div 
                className="mb-16"
                variants={itemVariants}
              >
                <h2 className="text-3xl font-semibold text-gray-900 mb-6 font-sf-pro-display">Notable Insights</h2>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <p className="text-gray-700 leading-relaxed font-sf-pro-text">{caseStudy.notableInsights}</p>
                </div>
              </motion.div>
            )}

            {/* Lessons Learned & Challenges */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {caseStudy.lessonsLearned && (
                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-sf-pro-display">Lessons Learned</h3>
                  <p className="text-gray-700 leading-relaxed font-sf-pro-text">{caseStudy.lessonsLearned}</p>
                </motion.div>
              )}

              {caseStudy.challengesOvercome && (
                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-sf-pro-display">Challenges Overcome</h3>
                  <p className="text-gray-700 leading-relaxed font-sf-pro-text">{caseStudy.challengesOvercome}</p>
                </motion.div>
              )}
            </div>

            {/* Next Steps & Future Possibilities */}
            <div className="grid md:grid-cols-2 gap-12">
              {caseStudy.nextSteps && (
                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-sf-pro-display">Next Steps</h3>
                  <p className="text-gray-700 leading-relaxed font-sf-pro-text">{caseStudy.nextSteps}</p>
                </motion.div>
              )}

              {caseStudy.extensionPossibilities && (
                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-sf-pro-display">Extension Possibilities</h3>
                  <p className="text-gray-700 leading-relaxed font-sf-pro-text">{caseStudy.extensionPossibilities}</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Impact Areas */}
      <motion.section 
        className="py-16 md:py-20 bg-gray-50"
        variants={itemVariants}
      >
        <div className="max-w-[1490px] px-4 lg:px-10 box-content mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-semibold text-gray-900 mb-8 font-sf-pro-display"
              variants={itemVariants}
            >
              Impact Areas
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-4">
              {caseStudy.impactArea.map((area, index) => (
                <motion.span
                  key={index}
                  className="px-6 py-3 bg-green-50 text-green-800 rounded-full text-lg font-medium font-sf-pro-text border border-green-200"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, backgroundColor: "#DCFCE7" }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Target className="w-5 h-5 inline-block mr-2" />
                  {area}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 md:py-20 bg-gray-900 text-white"
        variants={itemVariants}
      >
        <div className="max-w-[1490px] px-4 lg:px-10 box-content mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-semibold mb-6 font-sf-pro-display"
              variants={itemVariants}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8 font-sf-pro-text"
              variants={itemVariants}
            >
              Let's discuss how we can help you achieve similar results with innovative solutions tailored to your needs.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <Button
                variant="vision"
                size="lg"
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/case-studies')}
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                View More Case Studies
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default CaseStudyDetailed;