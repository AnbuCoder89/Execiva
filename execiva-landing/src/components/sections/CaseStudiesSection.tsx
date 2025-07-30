import { TrendingUp, Clock, Users } from 'lucide-react';

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "Fintech Revenue Optimization",
      client: "Leading Payment Platform",
      sector: "Financial Technology",
      challenge: "Fragmented data across multiple systems was hindering revenue optimization and customer insights.",
      solution: "Implemented unified data pipeline with real-time analytics and predictive modeling for customer behavior.",
      results: [
        { metric: "Revenue Growth", value: "45%", icon: TrendingUp },
        { metric: "Processing Time", value: "75% Faster", icon: Clock },
        { metric: "Customer Insights", value: "3x More Detailed", icon: Users }
      ],
      image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23f8fafc'/><rect x='40' y='60' width='320' height='180' fill='%23ffffff' rx='12' stroke='%23e2e8f0' stroke-width='2'/><rect x='60' y='80' width='280' height='40' fill='%232563eb' rx='8'/><text x='200' y='105' text-anchor='middle' fill='white' font-size='16' font-weight='bold'>FINTECH DASHBOARD</text><rect x='60' y='140' width='130' height='80' fill='%23f1f5f9' rx='6'/><rect x='210' y='140' width='130' height='80' fill='%23f1f5f9' rx='6'/><circle cx='125' cy='160' r='8' fill='%2310b981'/><text x='125' y='185' text-anchor='middle' fill='%23374151' font-size='12'>+45% Revenue</text><circle cx='275' cy='160' r='8' fill='%23f59e0b'/><text x='275' y='185' text-anchor='middle' fill='%23374151' font-size='12'>75% Faster</text></svg>"
    },
    {
      title: "Healthcare Data Integration",
      client: "Regional Medical Network",
      sector: "Healthcare",
      challenge: "Siloed patient data across 15 facilities was creating inefficiencies and impacting patient care quality.",
      solution: "Built comprehensive data integration platform with HIPAA-compliant analytics and automated reporting.",
      results: [
        { metric: "Patient Care Efficiency", value: "60% Improvement", icon: TrendingUp },
        { metric: "Report Generation", value: "90% Faster", icon: Clock },
        { metric: "Data Accuracy", value: "99.5%", icon: Users }
      ],
      image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23f8fafc'/><rect x='40' y='60' width='320' height='180' fill='%23ffffff' rx='12' stroke='%23e2e8f0' stroke-width='2'/><circle cx='120' cy='120' r='30' fill='%2310b981' opacity='0.2'/><circle cx='120' cy='120' r='20' fill='%2310b981' opacity='0.4'/><circle cx='120' cy='120' r='10' fill='%2310b981'/><circle cx='280' cy='120' r='30' fill='%236366f1' opacity='0.2'/><circle cx='280' cy='120' r='20' fill='%236366f1' opacity='0.4'/><circle cx='280' cy='120' r='10' fill='%236366f1'/><rect x='60' y='180' width='280' height='8' fill='%23e2e8f0' rx='4'/><rect x='60' y='200' width='200' height='8' fill='%23cbd5e1' rx='4'/><rect x='60' y='220' width='240' height='8' fill='%23cbd5e1' rx='4'/></svg>"
    },
    {
      title: "E-commerce Personalization Engine",
      client: "Global Retail Brand",
      sector: "E-commerce",
      challenge: "Low conversion rates and poor customer experience due to lack of personalization at scale.",
      solution: "Developed AI-powered recommendation system with real-time personalization and A/B testing framework.",
      results: [
        { metric: "Conversion Rate", value: "35% Increase", icon: TrendingUp },
        { metric: "Customer Engagement", value: "2.5x Higher", icon: Users },
        { metric: "Revenue per Visitor", value: "40% Growth", icon: TrendingUp }
      ],
      image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23f8fafc'/><rect x='40' y='40' width='320' height='220' fill='%23ffffff' rx='12' stroke='%23e2e8f0' stroke-width='2'/><rect x='60' y='60' width='80' height='60' fill='%236366f1' rx='6'/><rect x='160' y='60' width='80' height='60' fill='%232563eb' rx='6'/><rect x='260' y='60' width='80' height='60' fill='%23f59e0b' rx='6'/><rect x='60' y='140' width='80' height='60' fill='%2310b981' rx='6'/><rect x='160' y='140' width='80' height='60' fill='%23ef4444' rx='6'/><rect x='260' y='140' width='80' height='60' fill='%238b5cf6' rx='6'/><rect x='60' y='220' width='280' height='20' fill='%23e2e8f0' rx='10'/></svg>"
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
            Our Work
          </h2>
          <p 
            className="text-xl text-primary-secondary max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Real results from real clients. See how we've helped organizations across industries 
            transform their data into competitive advantages.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.title}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {study.sector}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-primary-text group-hover:text-primary-accent transition-colors duration-300">
                  {study.title}
                </h3>
                
                <p className="text-sm text-primary-accent font-semibold">
                  {study.client}
                </p>
                
                <p className="text-primary-secondary text-sm leading-relaxed">
                  {study.challenge}
                </p>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-primary-text mb-3">Key Results:</h4>
                  <div className="space-y-2">
                    {study.results.map((result, resultIndex) => {
                      const IconComponent = result.icon;
                      return (
                        <div key={resultIndex} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <IconComponent className="w-4 h-4 text-primary-accent" />
                            <span className="text-sm text-primary-secondary">{result.metric}</span>
                          </div>
                          <span className="font-semibold text-primary-text">{result.value}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <button className="w-full mt-4 bg-primary-accent text-white py-2 rounded-lg font-semibold hover:bg-primary-accent2 transition-colors duration-300">
                  Read Full Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;