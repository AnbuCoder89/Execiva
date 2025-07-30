const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Execiva transformed our entire approach to data. Their strategic insights and technical expertise helped us increase revenue by 45% while reducing operational costs. The team truly understands how to turn data into business value.",
      author: "Sarah Chen",
      role: "Chief Technology Officer",
      company: "TechFlow Solutions",
      avatar: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%236366f1'/><circle cx='50' cy='35' r='15' fill='white'/><path d='M25 75 Q25 60 40 60 L60 60 Q75 60 75 75 L75 85 L25 85 Z' fill='white'/></svg>"
    },
    {
      quote: "The healthcare data integration platform Execiva built for us has revolutionized patient care across our network. We've seen a 60% improvement in care efficiency and our staff can now focus on what matters most — our patients.",
      author: "Dr. Michael Rodriguez",
      role: "Chief Medical Officer",
      company: "Regional Health Network",
      avatar: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%2310b981'/><circle cx='50' cy='35' r='15' fill='white'/><path d='M25 75 Q25 60 40 60 L60 60 Q75 60 75 75 L75 85 L25 85 Z' fill='white'/></svg>"
    },
    {
      quote: "Working with Execiva was a game-changer for our e-commerce platform. Their AI-powered personalization engine increased our conversion rates by 35% and customer engagement by 2.5x. Exceptional results and outstanding partnership.",
      author: "Jennifer Park",
      role: "Head of Digital Strategy",
      company: "Global Retail Co.",
      avatar: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%23f59e0b'/><circle cx='50' cy='35' r='15' fill='white'/><path d='M25 75 Q25 60 40 60 L60 60 Q75 60 75 75 L75 85 L25 85 Z' fill='white'/></svg>"
    }
  ];

  return (
    <section className="py-28 px-6 md:px-20 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-background-dark via-background-dark-gray to-background-dark"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="grad" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="%23ffffff" stop-opacity="0.03"/><stop offset="100%" stop-color="%23000000" stop-opacity="0.01"/></radialGradient></defs><rect width="1000" height="1000" fill="url(%23grad)"/></svg>')`
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            data-aos="fade-up"
          >
            What Our Clients Say
          </h2>
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Don't just take our word for it. Here's what industry leaders have to say 
            about their experience working with Execiva.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group glassmorphism rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Quote */}
              <div className="mb-8">
                <svg className="w-8 h-8 text-white/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-white text-lg leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
              
              {/* Author */}
              <div className="flex items-center space-x-4 border-t border-white/20 pt-6">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.author}</h4>
                  <p className="text-gray-300 text-sm">{testimonial.role}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-xl"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Social Proof */}
        <div 
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <p className="text-gray-300 mb-8">
            Trusted by companies of all sizes, from startups to Fortune 500 enterprises
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            {/* Placeholder logos */}
            <div className="w-24 h-8 bg-white/20 rounded"></div>
            <div className="w-24 h-8 bg-white/20 rounded"></div>
            <div className="w-24 h-8 bg-white/20 rounded"></div>
            <div className="w-24 h-8 bg-white/20 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;