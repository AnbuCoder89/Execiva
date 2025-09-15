import React from 'react';
import Hero from '../components/Hero';
import Vision from '../components/Vision';
import Services from '../components/Services';
import Stats from '../components/Stats';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <Hero />
      <Vision />
      <Services />
      <Stats />
      <CaseStudies />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;