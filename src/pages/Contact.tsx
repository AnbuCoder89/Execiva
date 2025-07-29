import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gradient-card rounded-xl p-8 shadow-card">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input placeholder="Your Company" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Interest
                    </label>
                    <select className="w-full p-3 border border-input rounded-lg bg-background">
                      <option>Select a service</option>
                      <option>Data Analytics</option>
                      <option>Web Development</option>
                      <option>Business Intelligence</option>
                      <option>Custom Solutions</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your project requirements..."
                      rows={5}
                    />
                  </div>
                  <Button className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-primary p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <p className="text-muted-foreground">contact@nexuscodesolutions.com</p>
                        <p className="text-muted-foreground">support@nexuscodesolutions.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-primary p-3 rounded-lg">
                        <Phone className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Phone</h3>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        <p className="text-muted-foreground">+1 (555) 987-6543</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-primary p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Address</h3>
                        <p className="text-muted-foreground">
                          123 Innovation Drive<br />
                          Tech District, NY 10001<br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-primary p-3 rounded-lg">
                        <Clock className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Business Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 2:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gradient-card rounded-xl p-6 shadow-card text-center">
                    <h3 className="font-semibold text-foreground mb-2">Quick Quote</h3>
                    <p className="text-sm text-muted-foreground mb-4">Get a project estimate in 24 hours</p>
                    <Button variant="outline" size="sm">Request Quote</Button>
                  </div>
                  <div className="bg-gradient-card rounded-xl p-6 shadow-card text-center">
                    <h3 className="font-semibold text-foreground mb-2">Free Consultation</h3>
                    <p className="text-sm text-muted-foreground mb-4">30-minute strategy session</p>
                    <Button variant="outline" size="sm">Book Call</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-background rounded-xl p-6 shadow-card">
                  <h3 className="text-lg font-semibold text-foreground mb-2">How long does a typical project take?</h3>
                  <p className="text-muted-foreground">
                    Project timelines vary based on complexity and requirements. Most web development projects take 4-12 weeks, 
                    while data analytics projects can range from 2-8 weeks depending on scope.
                  </p>
                </div>
                <div className="bg-background rounded-xl p-6 shadow-card">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Do you provide ongoing support?</h3>
                  <p className="text-muted-foreground">
                    Yes, we offer comprehensive support and maintenance packages to ensure your solutions continue 
                    to perform optimally after launch.
                  </p>
                </div>
                <div className="bg-background rounded-xl p-6 shadow-card">
                  <h3 className="text-lg font-semibold text-foreground mb-2">What industries do you work with?</h3>
                  <p className="text-muted-foreground">
                    We work with businesses across various industries including healthcare, finance, retail, 
                    manufacturing, and technology startups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;