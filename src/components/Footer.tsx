import React from 'react';
import { motion, Variants } from "framer-motion";
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.footer 
      className="relative bg-white text-gray-900 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div 
        className="w-full px-4 sm:px-6 lg:px-8"
        variants={itemVariants}
      >
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12"
          variants={containerVariants}
        >
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-2"
            variants={itemVariants}
          >
            <motion.div 
              className="mb-4"
              variants={itemVariants}
            >
              <motion.img 
                src="/logo/1.png" 
                alt="Execiva" 
                className="h-6 w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              />
            </motion.div>
            <motion.p 
              className="text-gray-600 leading-relaxed mb-6 font-sf-pro-text"
              variants={itemVariants}
            >
              We create extraordinary digital experiences that drive business growth and transform industries.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              variants={containerVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors duration-300 text-gray-600 hover:text-gray-800"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -2,
                    backgroundColor: "#9CA3AF",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <social.icon size={18} />
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
            >
              <motion.h3 
                className="font-semibold mb-4 font-sf-pro-display text-gray-900"
                variants={itemVariants}
              >
                {section.title}
              </motion.h3>
              <motion.ul 
                className="space-y-2"
                variants={containerVariants}
              >
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    variants={itemVariants}
                  >
                    <motion.a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-sf-pro-text"
                      whileHover={{ x: 4, color: "#111827" }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}

        <motion.div 
          className="text-gray-600 text-sm font-sf-pro-text"
          variants={itemVariants}
        >
          © {currentYear} Execiva. All rights reserved.
        </motion.div>

      </motion.div>
    </motion.footer>
  );
};

export default Footer;