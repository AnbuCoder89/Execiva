const About = () => {
  const teamMembers = [
    {
      name: "Anber Smith",
      role: "Data Analytics Lead",
      expertise: "Business Intelligence, Machine Learning",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Michael Chen", 
      role: "Full-Stack Developer",
      expertise: "React, Node.js, Cloud Architecture",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Emily Rodriguez",
      role: "UX/UI Designer",
      expertise: "User Experience, Interface Design", 
      image: "/api/placeholder/300/300"
    },
    {
      name: "David Lee",
      role: "DevOps Engineer",
      expertise: "Cloud Infrastructure, CI/CD",
      image: "/api/placeholder/300/300"
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">About Nexus Code Solutions</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              We're a passionate team of technology experts dedicated to helping businesses 
              leverage the power of data and modern web technologies.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-8">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                At Nexus Code Solutions, we believe that every business has untapped potential waiting to be unlocked 
                through the strategic use of technology and data. Our mission is to bridge the gap between complex 
                technical solutions and real-world business outcomes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-gradient-card rounded-xl p-6 shadow-card">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Innovation</h3>
                  <p className="text-muted-foreground">
                    We stay ahead of technology trends to deliver cutting-edge solutions
                  </p>
                </div>
                <div className="bg-gradient-card rounded-xl p-6 shadow-card">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Collaboration</h3>
                  <p className="text-muted-foreground">
                    We work closely with clients as partners in their digital transformation
                  </p>
                </div>
                <div className="bg-gradient-card rounded-xl p-6 shadow-card">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Excellence</h3>
                  <p className="text-muted-foreground">
                    We deliver high-quality solutions that exceed expectations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground">
                The experts behind your success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-background rounded-xl p-6 shadow-card text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.expertise}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">Why Choose Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Proven Expertise</h3>
                    <p className="text-muted-foreground">
                      Years of experience across various industries and technologies
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Tailored Solutions</h3>
                    <p className="text-muted-foreground">
                      Custom approaches designed specifically for your business needs
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Ongoing Support</h3>
                    <p className="text-muted-foreground">
                      Continuous support and maintenance to ensure long-term success
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Agile Methodology</h3>
                    <p className="text-muted-foreground">
                      Flexible development process with regular feedback and iterations
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Transparent Communication</h3>
                    <p className="text-muted-foreground">
                      Clear, honest communication throughout every project phase
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Results-Driven</h3>
                    <p className="text-muted-foreground">
                      Focus on measurable outcomes that impact your bottom line
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;