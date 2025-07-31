import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import ScrollStack, { ScrollStackItem } from "@/components/ui/scroll-stack";
import { BarChart3, Code, Users, ArrowRight, CheckCircle } from "lucide-react";

const Index = () => {
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

  return (
    <>

      <HeroSection />
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white leading-tight tracking-tight mb-6">Why Execiva?</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              We provide comprehensive technology solutions to help your business thrive in the digital age
            </p>
          </div>
        </div>
      </section>
   
      <section className="min-h-screen relative overflow-hidden flex items-center justify-center">

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white leading-tight tracking-tight mb-6">Our Services</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              We provide comprehensive technology solutions to help your business thrive in the digital age
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-card rounded-xl p-8 shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="ghost"
                  className="mt-6 px-0 text-primary hover:bg-transparent hover:text-primary/80 group"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Why Choose Nexus Code Solutions</h2>
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
