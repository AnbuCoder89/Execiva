import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Vision from './components/Vision';
import Mission from './components/Mission';
import Services from './components/Services';
import Stats from './components/Stats';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudiesPage from './pages/CaseStudiesPage';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const HomePage = () => (
    <div className="w-full">
      <Hero />
      {/* <Capabilities /> */}
      <Vision />
      <Mission />
      <Services />
      <Stats />
      <CaseStudies />
      <Testimonials />
      <Contact />
    </div>
  );

  return (
    <ParallaxProvider>
      <div className="min-h-screen scroll-smooth">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
        </Routes>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
