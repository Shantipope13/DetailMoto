import React from 'react';
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
      <ServicesOverview />
      <AboutSection />
      <BenefitsSection />
      <PortfolioPreview />
      <Testimonials />
      <AppointmentPolicy />
      <CallToAction />
    </div>
  );
};

export default HomePage;