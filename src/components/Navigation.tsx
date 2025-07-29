import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const dataAnalyticsServices = [
    { name: "Business Intelligence", slug: "business-intelligence", description: "Transform data into actionable insights" },
    { name: "Data Visualization", slug: "data-visualization", description: "Create compelling visual narratives" },
    { name: "Predictive Analytics", slug: "predictive-analytics", description: "Forecast trends and outcomes" },
    { name: "Big Data Solutions", slug: "big-data-solutions", description: "Handle large-scale data processing" },
    { name: "Data Migration", slug: "data-migration", description: "Seamless data platform transitions" },
  ];

  const webDevelopmentServices = [
    { name: "Custom Web Applications", slug: "custom-web-applications", description: "Tailored solutions for your business" },
    { name: "E-commerce Platforms", slug: "e-commerce-platforms", description: "Complete online selling solutions" },
    { name: "Mobile-First Design", slug: "mobile-first-design", description: "Responsive across all devices" },
    { name: "API Development", slug: "api-development", description: "Robust backend integrations" },
    { name: "Cloud Solutions", slug: "cloud-solutions", description: "Scalable cloud architecture" },
  ];

  return (
    <nav className="bg-background/80 backdrop-blur-xl border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-semibold text-sm">N</span>
            </div>
            <span className="text-lg font-medium text-foreground">Nexus Code Solutions</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-sm font-normal text-foreground hover:text-primary transition-colors duration-200">
              Home
            </Link>

            {/* Data Analytics Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("data-analytics")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-sm font-normal text-foreground hover:text-primary transition-colors duration-200">
                <span>Data Analytics</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {activeDropdown === "data-analytics" && (
                <div className="absolute top-full left-0 w-72 bg-background border border-border/20 rounded-xl shadow-elegant p-4 mt-1">
                  <div className="space-y-1">
                    {dataAnalyticsServices.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="block px-3 py-2 rounded-lg hover:bg-muted transition-colors duration-200 group"
                      >
                        <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-0.5">{service.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Web Development Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("web-development")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-sm font-normal text-foreground hover:text-primary transition-colors duration-200">
                <span>Web Development</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {activeDropdown === "web-development" && (
                <div className="absolute top-full left-0 w-72 bg-background border border-border/20 rounded-xl shadow-elegant p-4 mt-1">
                  <div className="space-y-1">
                    {webDevelopmentServices.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="block px-3 py-2 rounded-lg hover:bg-muted transition-colors duration-200 group"
                      >
                        <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-0.5">{service.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-sm font-normal text-foreground hover:text-primary transition-colors duration-200">
              About
            </Link>

            <Link 
              to="/contact" 
              className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;