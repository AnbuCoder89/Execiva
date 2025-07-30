import { useParams } from "react-router-dom";
import { ArrowRight, CheckCircle, BarChart2, Palette, Code, Megaphone, Search, Share2 } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

const ServicePage = () => {
  const { serviceSlug } = useParams();

  const serviceData: Record<string, any> = {
    "business-intelligence": {
      title: "Business Intelligence",
      subtitle: "Transform Data into Strategic Insights",
      description: "Empower your decision-making with comprehensive business intelligence solutions that provide real-time insights and strategic guidance.",
      icon: <BarChart2 className="w-12 h-12 text-primary" />,
      features: [
        "Real-time dashboard creation",
        "Data warehouse design and implementation",
        "KPI monitoring and reporting",
        "Predictive analytics and forecasting",
        "Executive reporting systems",
        "Performance optimization",
      ],
      benefits: [
        "Make data-driven decisions with confidence",
        "Identify trends and opportunities faster",
        "Improve operational efficiency",
        "Reduce costs through better insights",
      ],
      process: [
        "Discovery & Requirements Analysis",
        "Data Assessment & Architecture Planning",
        "Dashboard Design & Development",
        "Testing & Quality Assurance",
        "Deployment & Training",
        "Ongoing Support & Optimization",
      ],
    },
    "data-visualization": {
      title: "Data Visualization",
      subtitle: "Make Complex Data Understandable",
      description: "Create compelling visual narratives that make complex data accessible and actionable for all stakeholders.",
      icon: <BarChart2 className="w-12 h-12 text-primary" />,
      features: [
        "Interactive dashboard development",
        "Custom chart and graph creation",
        "Storytelling through data",
        "Mobile-responsive visualizations",
        "Real-time data updates",
        "Export and sharing capabilities",
      ],
      benefits: [
        "Communicate insights more effectively",
        "Identify patterns and trends quickly",
        "Engage stakeholders with visual stories",
        "Support faster decision-making",
      ],
      process: [
        "Data Analysis & Story Mapping",
        "Visualization Strategy Planning",
        "Design & Prototype Creation",
        "Interactive Development",
        "User Testing & Refinement",
        "Launch & Performance Monitoring",
      ],
    },
    "custom-web-applications": {
      title: "Custom Web Applications",
      subtitle: "Tailored Solutions for Your Business",
      description: "Build powerful, scalable web applications designed specifically for your unique business requirements and workflows.",
      icon: <Code className="w-12 h-12 text-primary" />,
      features: [
        "Full-stack application development",
        "Custom user interface design",
        "Database design and optimization",
        "API integration and development",
        "Security implementation",
        "Performance optimization",
      ],
      benefits: [
        "Streamline business processes",
        "Improve operational efficiency",
        "Scale with your business growth",
        "Reduce manual work and errors",
      ],
      process: [
        "Requirements Gathering & Analysis",
        "System Architecture Design",
        "UI/UX Design & Prototyping",
        "Development & Testing",
        "Deployment & Go-Live",
        "Maintenance & Support",
      ],
    },
    "e-commerce-platforms": {
      title: "E-commerce Platforms",
      subtitle: "Complete Online Selling Solutions",
      description: "Launch and scale your online business with feature-rich e-commerce platforms designed for growth and conversion.",
      icon: <Code className="w-12 h-12 text-primary" />,
      features: [
        "Custom e-commerce development",
        "Payment gateway integration",
        "Inventory management systems",
        "Order processing automation",
        "Customer account management",
        "Analytics and reporting",
      ],
      benefits: [
        "Increase online sales and revenue",
        "Improve customer experience",
        "Automate business processes",
        "Scale your business globally",
      ],
      process: [
        "Business Requirements Analysis",
        "Platform Architecture Planning",
        "Design & User Experience",
        "Development & Integration",
        "Testing & Quality Assurance",
        "Launch & Growth Support",
      ],
    },
    "web-design-services": {
      title: "Web Design Services",
      subtitle: "AI-Powered Designs for Superior Experiences",
      description: "Get AI-powered web design services tailored to your needs and stay ahead of competitors. Leverage artificial intelligence to create websites that offer enhanced user experience.",
      icon: <Palette className="w-12 h-12 text-primary" />,
      features: [
        "AI-driven UI/UX design",
        "Responsive and adaptive layouts",
        "Custom visual branding",
        "Interactive prototyping",
        "Accessibility compliance",
        "Performance-optimized designs",
      ],
      benefits: [
        "Stand out with unique, modern designs",
        "Enhance user engagement and retention",
        "Improve conversion rates",
        "Stay ahead of competitors",
      ],
      process: [
        "Brand & Requirements Analysis",
        "AI-Driven Design Planning",
        "Wireframing & Prototyping",
        "Visual Design Development",
        "User Testing & Refinement",
        "Final Delivery & Integration",
      ],
    },
    "web-development-services": {
      title: "Web Development Services",
      subtitle: "Scalable, AI-Powered Web Solutions",
      description: "Get custom web development services powered by AI to create responsive, scalable, and user-friendly websites that drive business growth.",
      icon: <Code className="w-12 h-12 text-primary" />,
      features: [
        "AI-enhanced development workflows",
        "Full-stack web development",
        "Responsive and scalable architecture",
        "Custom API integrations",
        "Security and performance optimization",
        "Continuous deployment pipelines",
      ],
      benefits: [
        "Drive business growth with robust websites",
        "Ensure seamless user experiences",
        "Scale effortlessly with demand",
        "Reduce development time with AI",
      ],
      process: [
        "Requirements Gathering & Analysis",
        "System Architecture Design",
        "AI-Driven Development Planning",
        "Coding & Integration",
        "Testing & Quality Assurance",
        "Deployment & Ongoing Support",
      ],
    },
    "digital-marketing-services": {
      title: "Digital Marketing Services",
      subtitle: "Smarter, AI-Driven Campaigns",
      description: "Reach your ideal target audience and boost sales with our AI-driven digital marketing services, providing smarter, more personalized, and effective strategies.",
      icon: <Megaphone className="w-12 h-12 text-primary" />,
      features: [
        "AI-powered audience targeting",
        "Personalized campaign creation",
        "Multi-channel marketing strategies",
        "Real-time performance analytics",
        "Content optimization tools",
        "Automated ad management",
      ],
      benefits: [
        "Reach the right audience effectively",
        "Increase sales and conversions",
        "Optimize marketing spend",
        "Gain actionable campaign insights",
      ],
      process: [
        "Audience & Goals Analysis",
        "AI-Driven Strategy Planning",
        "Campaign Design & Setup",
        "Execution & Optimization",
        "Performance Tracking",
        "Reporting & Refinement",
      ],
    },
    "seo-services": {
      title: "SEO Services",
      subtitle: "AI-Powered Search Optimization",
      description: "Enhance your website’s performance with AI-powered SEO services, optimizing your content, driving organic traffic, and improving visibility.",
      icon: <Search className="w-12 h-12 text-primary" />,
      features: [
        "AI-driven keyword research",
        "On-page and technical SEO",
        "Content optimization strategies",
        "Link-building campaigns",
        "Local and global SEO",
        "Performance tracking and reporting",
      ],
      benefits: [
        "Boost organic traffic",
        "Improve search engine rankings",
        "Increase website visibility",
        "Drive long-term growth",
      ],
      process: [
        "Website & Competitor Analysis",
        "AI-Driven SEO Strategy",
        "Content & Technical Optimization",
        "Link Building & Outreach",
        "Testing & Performance Monitoring",
        "Ongoing Optimization",
      ],
    },
    "social-media-services": {
      title: "Social Media Services",
      subtitle: "AI-Driven Social Strategies",
      description: "Leverage AI-driven social media strategies to boost brand awareness, engage audiences, and drive conversions through tailored, data-driven campaigns.",
      icon: <Share2 className="w-12 h-12 text-primary" />,
      features: [
        "AI-optimized content creation",
        "Social media campaign management",
        "Audience engagement strategies",
        "Real-time analytics and insights",
        "Ad campaign optimization",
        "Cross-platform integration",
      ],
      benefits: [
        "Increase brand awareness",
        "Engage and grow your audience",
        "Drive conversions through targeted campaigns",
        "Gain actionable social insights",
      ],
      process: [
        "Audience & Brand Analysis",
        "AI-Driven Campaign Planning",
        "Content Creation & Scheduling",
        "Campaign Execution",
        "Performance Monitoring",
        "Optimization & Reporting",
      ],
    },
  };

  const service = serviceData[serviceSlug || ""] || {
    title: "Service Not Found",
    subtitle: "The requested service could not be found",
    description: "Please check the URL or return to our services page.",
    icon: null,
    features: [],
    benefits: [],
    process: [],
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-background to-background/80 py-24 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div variants={itemVariants} className="flex justify-center mb-6">
                {service.icon}
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
              >
                {service.title}
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl sm:text-2xl text-muted-foreground mb-8"
              >
                {service.subtitle}
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed"
              >
                {service.description}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-4xl font-bold text-foreground text-center mb-12"
              >
                What We Deliver
              </motion.h2>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {service.features.map((feature: string, index: number) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-secondary/10 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-4xl font-bold text-foreground text-center mb-12"
              >
                Key Benefits
              </motion.h2>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {service.benefits.map((benefit: string, index: number) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground font-bold">{index + 1}</span>
                      </div>
                      <p className="text-foreground font-medium">{benefit}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-4xl font-bold text-foreground text-center mb-12"
              >
                Our Process
              </motion.h2>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {service.process.map((step: string, index: number) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-6 bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-bold text-lg">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground">{step}</h3>
                    </div>
                    {index < service.process.length - 1 && (
                      <ArrowRight className="w-6 h-6 text-muted-foreground" />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-2xl mx-auto"
            >
              <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-6">
                Ready to Get Started?
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-xl text-primary-foreground/90 mb-8"
              >
                Let's discuss how {service.title.toLowerCase()} can transform your business.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Start Your Project
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  Schedule Consultation
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicePage;
