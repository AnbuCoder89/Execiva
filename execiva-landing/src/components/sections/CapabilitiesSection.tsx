import { BarChart3, Brain, Cog, Shield } from 'lucide-react';

const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: BarChart3,
      title: "Data Strategy",
      description: "Comprehensive data roadmaps that align with your business objectives and drive measurable outcomes through strategic planning and implementation."
    },
    {
      icon: Brain,
      title: "Business Intelligence",
      description: "Transform raw data into actionable insights with advanced analytics, interactive dashboards, and real-time reporting solutions."
    },
    {
      icon: Cog,
      title: "Automation",
      description: "Streamline operations with intelligent automation solutions that reduce manual work and increase efficiency across your organization."
    },
    {
      icon: Shield,
      title: "Data Governance",
      description: "Ensure data quality, security, and compliance with robust governance frameworks and best practices implementation."
    }
  ];

  return (
    <section className="py-28 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-primary-text mb-6 leading-tight"
            data-aos="fade-up"
          >
            What We Do Best
          </h2>
          <p 
            className="text-xl text-primary-secondary max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our core capabilities span the entire data lifecycle, from strategy to implementation, 
            ensuring your organization maximizes the value of its data assets.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <div
                key={capability.title}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-accent to-primary-accent2 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-primary-text mb-4 group-hover:text-primary-accent transition-colors duration-300">
                  {capability.title}
                </h3>
                
                <p className="text-primary-secondary leading-relaxed">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;