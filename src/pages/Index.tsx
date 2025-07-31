import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import MagicBento, { BentoCardProps } from "@/components/ui/magicbento";
import SpotlightCard from "@/components/ui/spotlight-card";
import { BarChart3, Code, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Fragment, useState } from "react";
import Testimonials from "./Testimonials";

const Index = () => {
  const cardData: BentoCardProps[] = [
    {
      color: "rgba(132, 0, 255, 0.2)",
      title: "Project Dashboard",
      description: "Track all your project metrics and KPIs in real-time with our comprehensive dashboard.",
      label: "Analytics",
      icon: "📊",
      stats: [
        { label: "Active Users", value: "2.5K" },
        { label: "Growth", value: "+12.5%" }
      ]
    },
    {
      color: "rgba(0, 132, 255, 0.2)",
      title: "Team Collaboration",
      description: "Seamlessly collaborate with your team members in real-time. Share files, chat, and manage tasks all in one place.",
      label: "Productivity",
      icon: "👥",
      stats: [
        { label: "Team Members", value: "24" },
        { label: "Active Tasks", value: "156" }
      ]
    },
    {
      color: "rgba(255, 132, 0, 0.2)",
      title: "Data Insights",
      description: "Unlock powerful insights from your data with our advanced analytics tools. Make data-driven decisions with confidence.",
      label: "Analytics",
      icon: "📈",
      stats: [
        { label: "Data Points", value: "1.2M" },
        { label: "Accuracy", value: "99.9%" }
      ]
    },
    {
      color: "rgba(0, 255, 132, 0.2)",
      title: "Cloud Storage",
      description: "Secure and scalable cloud storage solution for all your files. Access your data from anywhere, anytime.",
      label: "Storage",
      icon: "☁️",
      stats: [
        { label: "Storage Used", value: "45%" },
        { label: "Total Space", value: "2TB" }
      ]
    },
    {
      color: "rgba(255, 0, 132, 0.2)",
      title: "Security Center",
      description: "Advanced security features to protect your data and privacy. Real-time monitoring and threat detection.",
      label: "Security",
      icon: "🔒",
      stats: [
        { label: "Threats Blocked", value: "1.2K" },
        { label: "Uptime", value: "99.99%" }
      ]
    },
    {
      color: "rgba(132, 255, 0, 0.2)",
      title: "Support Center",
      description: "24/7 customer support and resources to help you get the most out of our platform.",
      label: "Support",
      icon: "🛟",
      stats: [
        { label: "Avg. Response", value: "<5min" },
        { label: "Satisfaction", value: "98.7%" }
      ]
    }
  ];

  const services = [
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with our comprehensive analytics solutions.",
      features: ["Business Intelligence", "Data Visualization", "Predictive Analytics", "Big Data Solutions"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Build powerful, scalable web applications tailored to your business needs.",
      features: ["Custom Applications", "E-commerce Platforms", "Mobile-First Design", "API Development"]
    },
    {
      icon: Users,
      title: "Consulting",
      description: "Strategic technology consulting to guide your digital transformation journey.",
      features: ["Technology Strategy", "Digital Transformation", "Process Optimization", "Team Training"]
    }
  ];

  const capabilities = [
    {
      icon: BarChart3,
      title: "Advanced Data Analytics",
      description: "Expertise in turning complex data into clear, strategic insights.",
      features: ["Business Intelligence", "Data Visualization", "Predictive Modeling", "Big Data Engineering"]
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Skilled in building scalable, maintainable, and high-performance digital products.",
      features: ["Frontend & Backend Architecture", "E-commerce Systems", "Mobile-First UX", "API Design"]
    },
    {
      icon: Users,
      title: "Technology Consulting",
      description: "Deep understanding of digital strategy and organizational transformation.",
      features: ["Tech Strategy & Roadmapping", "Digital Process Design", "Agile Implementation", "Team Enablement"]
    },

  ];


  return (
    <>
      <HeroSection />
      <section className="py-20 relative overflow-hidden w-full">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white leading-tight tracking-tight mb-6">Why Execiva?</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-4">
              At <span className="text-cyan-400 font-medium">Execiva</span>, we fuse technical excellence with strategic thinking to solve real business challenges.
            </p>
            <p className="text-lg text-gray-300/90 leading-relaxed">
              From data analytics and SEO optimization to full-stack development and digital consulting, our capabilities help businesses thrive, scale, and lead in an ever-evolving digital world.
            </p>

          </div>
        </div>
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
          cards={cardData}
        />

      </section>

      <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white leading-tight tracking-tight mb-6">Our Capabilities</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-4">
              At <span className="text-cyan-400 font-medium">Execiva</span>, we blend technical excellence with strategic insight to deliver impactful digital solutions.
            </p>
            <p className="text-lg text-gray-300/90 leading-relaxed">
              From advanced data analytics and SEO to full-stack development and consulting, our capabilities enable your business to adapt, compete, and lead in a fast-changing digital world.
            </p>

          </div>
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {
                capabilities.map((service, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {/* <Button
                    variant="ghost"
                    className="mt-6 px-0 text-cyan-400 hover:bg-transparent hover:text-cyan-300 group"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button> */}
                  </div>
                ))}
            </div>
          </SpotlightCard>
        </div>
      </section>

      <Testimonials />

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Why Choose Execiva</h2>
            <p className="text-xl text-muted-foreground mb-12">
              We combine technical expertise with business understanding to deliver solutions that drive real results
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-background rounded-xl p-6 shadow-card">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-foreground font-semibold mb-1">Projects Completed</div>
                <div className="text-sm text-muted-foreground">Successful deliveries across industries</div>
              </div>
              <div className="bg-background rounded-xl p-6 shadow-card">
                <div className="text-3xl font-bold text-primary mb-2">99%</div>
                <div className="text-foreground font-semibold mb-1">Client Satisfaction</div>
                <div className="text-sm text-muted-foreground">Consistently exceeding expectations</div>
              </div>
              <div className="bg-background rounded-xl p-6 shadow-card">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-foreground font-semibold mb-1">Support Available</div>
                <div className="text-sm text-muted-foreground">Always here when you need us</div>
              </div>
              <div className="bg-background rounded-xl p-6 shadow-card">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-foreground font-semibold mb-1">Years Experience</div>
                <div className="text-sm text-muted-foreground">Deep expertise across technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let's discuss how our expertise can help you achieve your technology goals and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-elegant text-lg px-8 py-4"
              >
                Get Started Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-4"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
