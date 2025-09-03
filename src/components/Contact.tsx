import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import Button from './ui/Button';

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

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!acceptTerms) {
    alert('Please accept the Terms of Service');
    return;
  }

  try {
    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("message", formData.message);

    const response = await fetch("https://development.execiva.com/contact.php", {   // 👈 local PHP file on Hostinger
      method: "POST",
      body: formDataObj,
    });

    const result = await response.json();

    if (result.success) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setAcceptTerms(false);
    } else {
      alert("Failed to send. Please try again later.");
    }
  } catch (err) {
    console.error("Error submitting form:", err);
    alert("⚠️ Something went wrong.");
  }
};



  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: "blur(8px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.section 
      id="contact" 
      className="relative w-full min-h-screen flex items-center justify-center bg-white" 
      ref={sectionRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div 
        className="w-full mx-auto px-4 sm:px-6 lg:px-12"
        variants={itemVariants}
      >
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          variants={containerVariants}
        >
          
          {/* Content Column - Left on desktop, top on mobile */}
          <motion.div 
            className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start"
            variants={itemVariants}
          >
            <motion.div 
              className="w-full text-center lg:text-left"
              variants={containerVariants}
            >
              <motion.h2 
                className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight font-sf-pro-display"
                variants={itemVariants}
              >
                GET IN
                <span className="block font-bold mt-2">
                  TOUCH
                </span>
              </motion.h2>
              
              <motion.div 
                className="mb-8"
                variants={itemVariants}
              >
                <motion.h3 
                  className="text-2xl font-semibold text-gray-900 mb-4 font-sf-pro-display"
                  variants={itemVariants}
                >
                  Hey! We are looking forward to start a project with you!
                </motion.h3>
                
                <motion.div 
                  className="bg-gray-100 p-6 rounded-lg border-l-4 border-gray-400 mb-8"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                >
                  <p className="text-gray-700 leading-relaxed font-sf-pro-text text-justify">
                    We'd love to hear from you! Whether you have a project in mind, a question to ask, or just want to say hello our team is ready to connect and help you bring your ideas to life
                  </p>
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="flex justify-center lg:justify-start space-x-4"
                variants={itemVariants}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors duration-300 text-gray-600 hover:text-gray-800"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "#9CA3AF",
                      transition: { type: "spring", stiffness: 400, damping: 17 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Form Column - Right on desktop, bottom on mobile */}
          <motion.div 
            className="w-full lg:w-1/2 flex items-center justify-center"
            variants={itemVariants}
          >
            <motion.div 
              className="w-[85%]"
              variants={containerVariants}
            >
              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
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
                </motion.div>

                <motion.div variants={itemVariants}>
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
                </motion.div>

                <motion.div variants={itemVariants}>
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
                </motion.div>

                {/* Terms of Service Checkbox */}
                <motion.div 
                  className="flex items-start space-x-3"
                  variants={itemVariants}
                >
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
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    variant="vision"
                    size="lg"
                    icon={Send}
                    iconPosition="right"
                    className="px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Submit
                  </Button>
                </motion.div>
              </motion.form>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;