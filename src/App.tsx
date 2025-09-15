import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Layout from './components/Layout';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Vision from './components/Vision';
import Services from './components/Services';
import Stats from './components/Stats';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyDetailed from './pages/CaseStudyDetailed';
import ServiceDetailedPage from './components/services/ServiceDetailedPage';
import StatsSection from './components/ui/StatsSection';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const HomePage = () => (
    <div className="w-full">
      <Hero />
      {/* <Capabilities /> */}
      <Vision />
      <Services />
      <Stats />
      <CaseStudies />
      <Testimonials />
      <Contact />
      <StatsSection 
        stats={[
          { number: "500+", label: "Experts supporting our clients" },
          { number: "2.1B", label: "Websites made composable" },
          { number: "98%", label: "Client Retention Rate" },
          { number: "50M+", label: "Dollars raised by our clients" }
        ]} 
      />
      
    </div>
  );

  return (
    <ParallaxProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetailed />} />
          <Route path="/services/:serviceId" element={<ServiceDetailedPage />} />
        </Route>
      </Routes>
    </ParallaxProvider>
  );
}

export default App;
