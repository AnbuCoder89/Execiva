import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Layout from './Layout';
import HomePage from './pages/HomePage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyDetailed from './pages/CaseStudyDetailed';
import ServiceDetailedPage from './components/services/ServiceDetailedPage';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;