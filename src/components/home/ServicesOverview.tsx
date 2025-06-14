import React from 'react';
import { Link } from 'react-router-dom';
import { Bike, Car, Shield } from 'lucide-react';
import { StaggeredGrid } from '../StaggeredGrid';
import { ScrollReveal } from '../ScrollReveal';

const ServicesOverview: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: <Bike className="w-12 h-12" />,
      title: 'Motorcycle Detailing & Ceramic Coating',
      description: 'Complete cleaning, polishing, and ceramic protection services specifically designed for motorcycles',
      features: ['Engine degreasing', 'Chrome polishing', 'Ceramic coating application'],
      price: 'Starting at ₱1,500',
      link: '/services/motorcycle-detailing'
    },
    {
      id: 2,
      icon: <Shield className="w-12 h-12" />,
      title: 'Paint Protection Film',
      description: 'Invisible protection against chips, scratches, and environmental damage',
      features: ['Self-healing properties', 'UV resistance', 'Clear finish'],
      price: 'Starting at ₱8,000',
      link: '/services/paint-protection-film'
    },
    {
      id: 3,
      icon: <Car className="w-12 h-12" />,
      title: 'Car Detailing & Ceramic Coating',
      description: 'Advanced Artdeshine Graphene ceramic protection with long-lasting shine and durability',
      features: ['Paint correction', '9H hardness coating', 'Up to 5-year warranty'],
      price: 'Starting at ₱15,000',
      link: '/services/ceramic-coating'
    }
  ];

  return (
    <section className="py-24 bg-gray-light">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-8">
              <img 
                src="/image.png" 
                alt="DetailMoto Logo" 
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            
            {/* Main Title - 36px+ for section titles */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-black mb-8 leading-tight">
              Our Premium Services
            </h2>
            
            {/* Subtitle - 20-24px for subheadings */}
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Professional auto care services designed to protect and enhance your vehicle's appearance
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <StaggeredGrid
          items={services}
          renderItem={(service) => (
            <div className="bg-white rounded-xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              {/* Icon */}
              <div className="text-primary-orange mb-8 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              {/* Service Title - 24px for card titles */}
              <h3 className="text-2xl lg:text-3xl font-bold text-primary-black mb-6 leading-tight">
                {service.title}
              </h3>
              
              {/* Description - 16px for body text */}
              <p className="text-base lg:text-lg text-gray-700 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features List */}
              <ul className="space-y-4 mb-10">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-base text-gray-600 flex items-center leading-relaxed">
                    <div className="w-2 h-2 bg-primary-orange rounded-full mr-4 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Pricing and CTA */}
              <div className="border-t pt-8">
                <div className="text-xl lg:text-2xl font-bold text-primary-orange mb-6">
                  {service.price}
                </div>
                <Link
                  to={service.link}
                  className="text-primary-black font-semibold text-lg hover:text-primary-orange transition-colors inline-flex items-center"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          )}
          columns={3}
          staggerDelay={0.1}
          animationDirection="up"
        />

        {/* CTA */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-20">
            <Link
              to="/services"
              className="bg-primary-orange text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors inline-flex items-center space-x-3"
            >
              <span>View All Services</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesOverview;