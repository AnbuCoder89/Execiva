import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [acceptTerms, setAcceptTerms] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptTerms) {
      alert('Please accept the Terms of Service');
      return;
    }
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <section 
      id="contact" 
      className="relative w-full min-h-screen flex items-center justify-center bg-white" 
      ref={sectionRef}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Content Column - Left on desktop, top on mobile */}
          <div className={`w-full lg:w-1/2 flex items-center justify-center lg:justify-start transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="w-full text-center lg:text-left">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight font-sf-pro-display">
                GET IN
                <span className="block font-bold mt-2">
                  TOUCH
                </span>
              </h2>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-sf-pro-display">
                  Hey! We are looking forward to start a project with you!
                </h3>
                
                <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-gray-400 mb-8">
                  <p className="text-gray-700 leading-relaxed font-sf-pro-text text-justify">
                    We'd love to hear from you! Whether you have a project in mind, a question to ask, or just want to say hello our team is ready to connect and help you bring your ideas to life
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors duration-300 text-gray-600 hover:text-gray-800"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Column - Right on desktop, bottom on mobile */}
          <div className={`w-full lg:w-1/2 flex items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '200ms' }}>
            <div className="w-[85%]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-colors duration-300 text-gray-900 font-sf-pro-text placeholder-gray-500"
                    placeholder="Enter your Name"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-colors duration-300 text-gray-900 font-sf-pro-text placeholder-gray-500"
                    placeholder="Enter a valid email address"
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-colors duration-300 text-gray-900 resize-none font-sf-pro-text placeholder-gray-500"
                    placeholder="Enter your message"
                  />
                </div>

                {/* Terms of Service Checkbox */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 text-gray-600 bg-white border-gray-300 rounded focus:ring-gray-400 focus:ring-2"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600 font-sf-pro-text">
                    I agree to the{' '}
                    <a href="#" className="text-blue-500 hover:text-blue-600 underline">
                      Terms of Service and Privacy Policy
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-gray-400 hover:bg-gray-500 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] font-sf-pro-text"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;