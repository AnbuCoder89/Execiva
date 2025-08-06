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

    return () => observer.disconnect();
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
    <section id="contact" className="py-20 md:py-32 bg-light-gray" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left side - Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
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
                <p className="text-gray-700 leading-relaxed font-sf-pro-text">
                  Etiam sit amet convallis erat - class aptent taciti sociosqu ad litora torquent per conubia! Maecenas gravida lacus. Lorem etiam sit amet convallis erat.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
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

          {/* Right side - Contact Form */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '200ms' }}>
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
                  I accept the{' '}
                  <a href="#" className="text-blue-500 hover:text-blue-600 underline">
                    Terms of Service
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
    </section>
  );
};

export default Contact;