const VisionSection = () => {
  return (
    <section id="vision" className="py-28 px-6 md:px-20 bg-background-light-gray">
      <div className="max-w-4xl mx-auto text-center">
        <h2 
          className="text-4xl md:text-5xl font-bold text-primary-text mb-8 leading-tight"
          data-aos="fade-up"
        >
          Why Execiva
        </h2>
        
        <div className="space-y-8">
          <p 
            className="text-2xl font-semibold text-primary-text leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We believe data is the most valuable asset of the modern enterprise.
          </p>
          
          <p 
            className="text-lg text-primary-secondary leading-relaxed max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            At Execiva, we don't just analyze data — we transform it into strategic insights that drive real business outcomes. Our team of data scientists, engineers, and strategists work alongside your organization to unlock the hidden potential within your data ecosystem.
          </p>
          
          <p 
            className="text-lg text-primary-secondary leading-relaxed max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            From Fortune 500 companies to innovative startups, we've helped organizations across industries harness the power of data to make smarter decisions, optimize operations, and accelerate growth. Our approach combines cutting-edge technology with deep industry expertise to deliver solutions that are both powerful and practical.
          </p>
        </div>
        
        <div 
          className="mt-12 grid md:grid-cols-3 gap-8 text-center"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-primary-text">Our Mission</h3>
            <p className="text-primary-secondary">Democratize data-driven decision making for businesses of all sizes</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-primary-text">Our Vision</h3>
            <p className="text-primary-secondary">A world where every business decision is informed by intelligent data insights</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-primary-text">Our Values</h3>
            <p className="text-primary-secondary">Innovation, integrity, and impact in everything we deliver</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;