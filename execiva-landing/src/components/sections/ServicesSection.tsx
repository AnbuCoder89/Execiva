import { Database, LineChart, Cpu, Users } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Database,
      title: "Data Consulting",
      description: "Strategic guidance to help you build a data-driven culture and maximize the value of your data assets.",
      features: ["Data Strategy Development", "Architecture Design", "Technology Selection", "Team Training"],
      image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23f8fafc'/><rect x='50' y='50' width='300' height='200' fill='%23e2e8f0' rx='8'/><rect x='70' y='70' width='80' height='60' fill='%232563eb' rx='4'/><rect x='170' y='70' width='80' height='60' fill='%236366f1' rx='4'/><rect x='270' y='70' width='60' height='60' fill='%23f59e0b' rx='4'/><rect x='70' y='150' width='260' height='20' fill='%23cbd5e1' rx='10'/><rect x='70' y='180' width='200' height='20' fill='%23cbd5e1' rx='10'/><rect x='70' y='210' width='150' height='20' fill='%23cbd5e1' rx='10'/></svg>"
    },
    {
      icon: LineChart,
      title: "Interactive Dashboards",
      description: "Custom-built dashboards that provide real-time insights and empower your team to make data-driven decisions.",
      features: ["Real-time Analytics", "Custom Visualizations", "Mobile Responsive", "Role-based Access"],
      image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23f8fafc'/><rect x='40' y='40' width='320' height='220' fill='%23ffffff' rx='8' stroke='%23e2e8f0' stroke-width='2'/><path d='M60 200 L120 160 L180 120 L240 140 L320 80' stroke='%232563eb' stroke-width='3' fill='none'/><circle cx='60' cy='200' r='4' fill='%232563eb'/><circle cx='120' cy='160' r='4' fill='%232563eb'/><circle cx='180' cy='120' r='4' fill='%232563eb'/><circle cx='240' cy='140' r='4' fill='%232563eb'/><circle cx='320' cy='80' r='4' fill='%232563eb'/><rect x='60' y='240' width='40' height='20' fill='%236366f1'/><rect x='120' y='230' width='40' height='30' fill='%236366f1'/><rect x='180' y='220' width='40' height='40' fill='%236366f1'/><rect x='240' y='235' width='40' height='25' fill='%236366f1'/></svg>"
    },
    {
      icon: Cpu,
      title: "Machine Learning",
      description: "Advanced ML solutions that automate processes, predict outcomes, and uncover hidden patterns in your data.",
      features: ["Predictive Analytics", "Process Automation", "Pattern Recognition", "Model Deployment"],
      image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23f8fafc'/><circle cx='200' cy='150' r='60' fill='%232563eb' opacity='0.1'/><circle cx='200' cy='150' r='40' fill='%232563eb' opacity='0.2'/><circle cx='200' cy='150' r='20' fill='%232563eb'/><circle cx='120' cy='100' r='15' fill='%236366f1'/><circle cx='280' cy='100' r='15' fill='%236366f1'/><circle cx='120' cy='200' r='15' fill='%236366f1'/><circle cx='280' cy='200' r='15' fill='%236366f1'/><line x1='135' y1='110' x2='185' y2='140' stroke='%23cbd5e1' stroke-width='2'/><line x1='265' y1='110' x2='215' y2='140' stroke='%23cbd5e1' stroke-width='2'/><line x1='135' y1='190' x2='185' y2='160' stroke='%23cbd5e1' stroke-width='2'/><line x1='265' y1='190' x2='215' y2='160' stroke='%23cbd5e1' stroke-width='2'/></svg>"
    },
    {
      icon: Users,
      title: "Team Training",
      description: "Comprehensive training programs to upskill your team and build internal data capabilities.",
      features: ["Workshops & Seminars", "Hands-on Training", "Certification Programs", "Ongoing Support"],
      image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23f8fafc'/><rect x='50' y='80' width='300' height='140' fill='%23ffffff' rx='8' stroke='%23e2e8f0' stroke-width='2'/><circle cx='120' cy='120' r='20' fill='%232563eb'/><circle cx='200' cy='120' r='20' fill='%236366f1'/><circle cx='280' cy='120' r='20' fill='%23f59e0b'/><rect x='100' y='150' width='40' height='8' fill='%23cbd5e1' rx='4'/><rect x='180' y='150' width='40' height='8' fill='%23cbd5e1' rx='4'/><rect x='260' y='150' width='40' height='8' fill='%23cbd5e1' rx='4'/><rect x='100' y='165' width='30' height='6' fill='%23e2e8f0' rx='3'/><rect x='180' y='165' width='35' height='6' fill='%23e2e8f0' rx='3'/><rect x='260' y='165' width='25' height='6' fill='%23e2e8f0' rx='3'/></svg>"
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
            Our Services
          </h2>
          <p 
            className="text-xl text-primary-secondary max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            From strategic consulting to hands-on implementation, we provide end-to-end data solutions 
            tailored to your unique business needs and objectives.
          </p>
        </div>
        
        <div className="space-y-24">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Content */}
                <div 
                  className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}
                  data-aos={isEven ? "slide-in-left" : "slide-in-right"}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-accent to-primary-accent2 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-primary-text">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-primary-secondary leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-accent rounded-full"></div>
                        <span className="text-primary-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="bg-primary-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-accent2 transition-colors duration-300">
                    Learn More
                  </button>
                </div>
                
                {/* Image */}
                <div 
                  className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                  data-aos={isEven ? "slide-in-right" : "slide-in-left"}
                >
                  <div className="relative">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;