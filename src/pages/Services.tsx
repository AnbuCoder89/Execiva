import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Code, 
  Cloud, 
  Shield, 
  BarChart3, 
  Cog,
  ArrowRight,
  Zap,
  Target,
  TrendingUp,
  Users
} from 'lucide-react';
import Button from '../components/ui/Button';
import Hero from '../components/services/service-detailed/Hero';

// TypeScript interfaces
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Technology {
  name: string;
  category: string;
  color: string;
}

interface PainPoint {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const navigate = useNavigate();

  // Animation variants
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

  const itemVariants: Variants = {
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

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Data structures
  const services: Service[] = [
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Modernize your business processes and technology stack to drive efficiency, reduce costs, and accelerate growth in the digital economy.',
      icon: Zap
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime, enhanced security, and 40% cost reduction on average.',
      icon: Cloud
    },
    {
      id: 'custom-software',
      title: 'Custom Software Development',
      description: 'Build scalable, high-performance applications tailored to your unique business requirements using cutting-edge technologies.',
      icon: Code
    },
    {
      id: 'devops-implementation',
      title: 'DevOps Implementation',
      description: 'Streamline your development lifecycle with automated CI/CD pipelines, reducing deployment time by up to 90%.',
      icon: Cog
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & Intelligence',
      description: 'Transform raw data into actionable insights with advanced analytics, machine learning, and real-time dashboards.',
      icon: BarChart3
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Consulting',
      description: 'Protect your digital assets with comprehensive security audits, threat assessment, and implementation of robust security frameworks.',
      icon: Shield
    }
  ];

  const painPoints: PainPoint[] = [
    {
      icon: Target,
      title: 'Legacy Systems Holding You Back',
      description: 'Outdated technology creates bottlenecks, increases maintenance costs, and limits your competitive advantage.'
    },
    {
      icon: TrendingUp,
      title: 'Scaling Challenges',
      description: 'Your current infrastructure struggles to handle growth, leading to performance issues and customer dissatisfaction.'
    },
    {
      icon: Shield,
      title: 'Security Vulnerabilities',
      description: 'Inadequate security measures expose your business to cyber threats, compliance issues, and potential data breaches.'
    },
    {
      icon: Users,
      title: 'Inefficient Processes',
      description: 'Manual workflows and disconnected systems waste time, increase errors, and reduce team productivity.'
    },
    {
      icon: BarChart3,
      title: 'Limited Data Insights',
      description: 'Without proper analytics, you\'re making decisions based on gut feeling rather than data-driven intelligence.'
    },
    {
      icon: Cog,
      title: 'Slow Time-to-Market',
      description: 'Lengthy development cycles and deployment bottlenecks prevent you from capitalizing on market opportunities.'
    }
  ];

  const technologies: Technology[] = [
    { name: 'React', category: 'Frontend', color: 'bg-blue-100 text-blue-800' },
    { name: 'TypeScript', category: 'Language', color: 'bg-blue-100 text-blue-800' },
    { name: 'Node.js', category: 'Backend', color: 'bg-green-100 text-green-800' },
    { name: 'AWS', category: 'Cloud', color: 'bg-orange-100 text-orange-800' },
    { name: 'Docker', category: 'DevOps', color: 'bg-cyan-100 text-cyan-800' },
    { name: 'MongoDB', category: 'Database', color: 'bg-green-100 text-green-800' },
    { name: 'PostgreSQL', category: 'Database', color: 'bg-blue-100 text-blue-800' },
    { name: 'TailwindCSS', category: 'Styling', color: 'bg-teal-100 text-teal-800' }
  ];

  const scrollToServices = () => {
    const element = document.getElementById('services-grid');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewAllServices = () => {
    const element = document.getElementById('services-grid');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStarted = () => {
    navigate('/#contact');
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Technology Solutions"
        category="Professional Services"
        description="From digital transformation to cloud migration, we deliver cutting-edge solutions that drive growth, reduce costs, and position your business for the future."
        image="/image/services/web_development-6.jpeg"
        tagline="Transform Your Business With Expert Technology Solutions"
        onGetStarted={handleGetStarted}
        onViewAllServices={handleViewAllServices}
      />

      {/* Why This Service Matters Section */}
      <motion.section 
        className="py-20 md:py-24 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight font-sf-pro-display mb-6">
              Why Technology Excellence Matters
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-sf-pro-text max-w-4xl mx-auto">
              In today's digital landscape, the right technology strategy isn't just an advantage—it's essential for survival and growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-6"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                >
                  <point.icon className="w-8 h-8 text-blue-600" />
                </motion.div>
                
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 font-sf-pro-display">
                  {point.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed font-sf-pro-text">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Service Cards Section */}
      <motion.section 
        id="services-grid"
        className="py-20 md:py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight font-sf-pro-display mb-6">
              Our Core Services
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-sf-pro-text max-w-4xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business transformation and drive measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 h-full flex flex-col"
                variants={cardVariants}
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 font-sf-pro-display group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed font-sf-pro-text mb-6 flex-grow">
                  {service.description}
                </p>

                <motion.button
                  className="flex items-center text-blue-600 font-medium font-sf-pro-text hover:text-blue-700 transition-colors duration-300 group/btn"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technologies Section */}
      <motion.section 
        className="py-20 md:py-24 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight font-sf-pro-display mb-6">
              Technologies We Master
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-sf-pro-text max-w-4xl mx-auto">
              We leverage cutting-edge technologies and proven frameworks to deliver robust, scalable solutions.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 md:gap-6"
            variants={containerVariants}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className={`px-6 py-3 rounded-full text-sm md:text-base font-medium font-sf-pro-text shadow-md hover:shadow-lg transition-all duration-300 ${tech.color}`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {tech.name}
              </motion.div>
            ))}
          </motion.div>

          {/* Technology Categories */}
          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            variants={containerVariants}
          >
            {[
              { category: 'Frontend', count: '10+' },
              { category: 'Backend', count: '15+' },
              { category: 'Cloud', count: '8+' },
              { category: 'DevOps', count: '12+' }
            ].map((item, index) => (
              <motion.div
                key={item.category}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
              >
                <div className="text-3xl md:text-4xl font-light text-gray-900 font-sf-pro-display mb-2">
                  {item.count}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-sf-pro-text">
                  {item.category} Technologies
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 md:py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="mx-auto px-6 sm:px-8 lg:px-12 max-w-5xl text-center">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight font-sf-pro-display"
            variants={itemVariants}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Let's discuss how our expert technology solutions can accelerate your growth, reduce costs, and position your business for long-term success.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Button
              onClick={handleGetStarted}
              variant="vision"
              size="xl"
              className="px-10 py-4 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start Your Transformation
            </Button>
            <Button
              onClick={() => window.location.href = '/contact'}
              variant="ghost"
              size="xl"
              className="px-10 py-4 shadow-md hover:shadow-lg border border-gray-300"
            >
              Schedule Consultation
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;