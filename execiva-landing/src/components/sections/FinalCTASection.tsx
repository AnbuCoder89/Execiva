import { ArrowRight, Calendar } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="py-28 px-6 md:px-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23ffffff" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>')`
        }}
      />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Headline */}
        <h2 
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight"
          data-aos="fade-up"
        >
          Ready to Transform 
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Your Data Story?
          </span>
        </h2>
        
        {/* Subheading */}
        <p 
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Join industry leaders who've already transformed their businesses with data-driven insights. 
          Let's discuss how Execiva can accelerate your growth.
        </p>
        
        {/* Stats Row */}
        <div 
          className="grid md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">45%</div>
            <div className="text-gray-400 text-sm">Average Revenue Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">90 Days</div>
            <div className="text-gray-400 text-sm">To See Initial Results</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Ongoing Support</div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <button className="group bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl flex items-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>Schedule a Demo</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center space-x-2">
            <span>Get Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        
        {/* Trust Indicators */}
        <div 
          className="text-center"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <p className="text-gray-400 text-sm mb-4">
            ✓ No commitment required  ✓ Free initial consultation  ✓ 30-day money-back guarantee
          </p>
          <p className="text-gray-500 text-xs">
            Trusted by 75+ companies worldwide • GDPR & SOC 2 compliant
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;