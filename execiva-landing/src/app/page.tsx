'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HeroSection from '@/components/sections/HeroSection';
import VisionSection from '@/components/sections/VisionSection';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import NumbersSection from '@/components/sections/NumbersSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <VisionSection />
      <CapabilitiesSection />
      <ServicesSection />
      <CaseStudiesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <NumbersSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
