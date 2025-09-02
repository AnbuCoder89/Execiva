import React from 'react';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  const footerLinks = [
    {
      title: "Company",
      links: ["About", "Careers", "Press", "News"]
    },
    {
      title: "Services",
      links: ["Web Development", "Mobile Apps", "Digital Strategy", "Consulting"]
    },
    {
      title: "Resources",
      links: ["Blog", "Case Studies", "Documentation", "Support"]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer"]
    }
  ];

  return (
    <footer className="relative bg-white text-gray-900 py-20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img 
                src="/logo/1.png" 
                alt="Execiva" 
                className="h-6 w-auto"
              />
            </div>
            <p className="text-gray-600 leading-relaxed mb-6 font-sf-pro-text">
              We create extraordinary digital experiences that drive business growth and transform industries.
            </p>
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

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4 font-sf-pro-display text-gray-900">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-sf-pro-text"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}

        <div className="text-gray-600 text-sm font-sf-pro-text">
          © {currentYear} Execiva. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;