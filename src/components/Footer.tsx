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
    <footer className="bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-4 font-sf-pro-display">YourBrand</div>
            <p className="text-gray-400 leading-relaxed mb-6 font-sf-pro-text">
              We create extraordinary digital experiences that drive business growth and transform industries.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4 font-sf-pro-display">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 font-sf-pro-text"
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
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm font-sf-pro-text">
            © {currentYear} YourBrand. All rights reserved.
          </div>
          <div className="text-gray-400 text-sm mt-4 md:mt-0 font-sf-pro-text">
            Made with ❤️ for businesses that dare to dream big.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;