import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Layout from './Layout';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import CaseStudyDetailed from './pages/CaseStudyDetailed';
import ServiceDetailed from './pages/ServiceDetailed';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Bolg from './pages/Bolg';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <BrowserRouter>
      <ParallaxProvider>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/case-studies" element={<CaseStudy />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetailed />} />
            <Route path="/services/:serviceId" element={<ServiceDetailed />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Bolg />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ParallaxProvider>
    </BrowserRouter>
  );
}

export default App;