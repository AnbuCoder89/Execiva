import { Building2, Stethoscope, ShoppingBag, Gamepad2, Megaphone, Banknote } from 'lucide-react';

const IndustriesSection = () => {
  const industries = [
    {
      icon: Building2,
      name: "Technology",
      description: "SaaS platforms, software companies, and tech startups leveraging data for growth",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Banknote,
      name: "Finance",
      description: "Banks, fintech, and financial services optimizing operations with data insights",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Stethoscope,
      name: "Healthcare",
      description: "Medical institutions and health tech companies improving patient outcomes",
      color: "from-red-500 to-red-600"
    },
    {
      icon: ShoppingBag,
      name: "E-commerce",
      description: "Retail brands and online marketplaces enhancing customer experiences",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Gamepad2,
      name: "Entertainment",
      description: "Media companies and gaming platforms creating engaging user experiences",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Megaphone,
      name: "Marketing",
      description: "Agencies and brands driving growth through data-driven marketing strategies",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section className="py-28 px-6 md:px-20 bg-background-light-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-primary-text mb-6 leading-tight"
            data-aos="fade-up"
          >
            Industries We Serve
          </h2>
          <p 
            className="text-xl text-primary-secondary max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our expertise spans across diverse industries, bringing specialized knowledge 
            and tailored solutions to meet unique sector challenges.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={industry.name}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary-text mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {industry.name}
                  </h3>
                  
                  <p className="text-primary-secondary leading-relaxed">
                    {industry.description}
                  </p>
                  
                  {/* Hover Arrow */}
                  <div className="mt-6 flex items-center text-primary-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-semibold mr-2">Learn More</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Call to Action */}
        <div 
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <p className="text-lg text-primary-secondary mb-6">
            Don't see your industry? We work with businesses across all sectors.
          </p>
          <button className="bg-primary-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-accent2 hover:scale-105 transition-all duration-300 shadow-lg">
            Discuss Your Industry
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;