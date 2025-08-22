import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Capabilities from './components/Capabilities';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudiesPage from './pages/CaseStudiesPage';
import BrowserDemoPage from './pages/BrowserDemoPage';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const HomePage = () => (
    <>
      <Hero />
      <Vision />
      <Services />
      <Capabilities />
      <CaseStudies />
      <Testimonials />
      <Contact />
      
    </>
  );

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-gradient-to-br from-white via-light-gray to-beige scroll-smooth">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/browser-demo" element={<BrowserDemoPage />} />
        </Routes>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
