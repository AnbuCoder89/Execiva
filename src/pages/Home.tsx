import React from 'react';
import Hero from '../components/Home/Hero';
import Vision from '../components/Home/Vision';
import Services from '../components/Home/Services';
import KeyMetrics from '../components/Home/KeyMetrics';
import CaseStudies from '../components/Home/CaseStudies';
import Testimonials from '../components/Home/Testimonials';
import Contact from '../components/Home/Contact';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <Hero />
      <Vision />
      <Services />
      <KeyMetrics />
      <CaseStudies />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;