import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import Hero from '../components/home/Hero';
import ServicesOverview from '../components/home/ServicesOverview';
import AboutSection from '../components/home/AboutSection';
import BenefitsSection from '../components/home/BenefitsSection';
import PortfolioPreview from '../components/home/PortfolioPreview';
import Testimonials from '../components/home/Testimonials';
import AppointmentPolicy from '../components/home/AppointmentPolicy';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  return (
    <div className="pt-0">
      <Hero />
      <ScrollReveal>
        <ServicesOverview />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <AboutSection />
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <BenefitsSection />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <PortfolioPreview />
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <AppointmentPolicy />
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <CallToAction />
      </ScrollReveal>
    </div>
  );
};

export default HomePage;