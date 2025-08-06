import React, { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import Vision from './components/Vision';
import Capabilities from './components/Capabilities';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-gradient-to-br from-white via-light-gray to-beige scroll-smooth">
        <Header />
        <Hero />
        <Hero2 />
        <Vision />
        <Services />
        <Capabilities />
        <CaseStudies />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
