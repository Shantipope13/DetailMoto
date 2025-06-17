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
      features: ['Lasts up to 3 years', 'Engine degreasing', 'Water-repellent'],
      price: 'Starting at ₱1,500',
      link: '/services/motorcycle-detailing'
    },
    {
      id: 2,
      icon: <Shield className="w-12 h-12" />,
      title: 'Paint Protection Film',
      description: 'Invisible protection against chips, scratches, and environmental damage',
      features: ['Self-healing', 'UV protection', 'Clear finish'],
      price: 'Starting at ₱8,000',
      link: '/services/paint-protection-film'
    },
    {
      id: 3,
      icon: <Car className="w-12 h-12" />,
      title: 'Car Detailing & Ceramic Coating',
      description: 'Advanced Artdeshine Graphene ceramic protection with long-lasting shine and durability',
      features: ['Up to 5-year warranty', 'Paint correction', 'Gloss enhancement'],
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

        {/* Services Grid - mobile: single column, gap-6, shadow-md */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              to={service.link}
              key={service.id}
              className="group bg-white rounded-xl p-8 lg:p-10 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 flex flex-col h-full"
              aria-label={service.title}
            >
              {/* Icon */}
              <div className="text-primary-orange mb-8 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              {/* Service Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-primary-black mb-4 leading-tight">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-base lg:text-lg text-gray-700 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features List - visually distinct bullets */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-primary-orange rounded-full mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Pricing */}
              <div className="mt-auto border-t pt-6">
                <div className="text-xl lg:text-2xl font-bold text-primary-orange mb-2">
                  {service.price}
                </div>
                <span className="text-primary-black font-semibold text-base group-hover:text-primary-orange transition-colors">Learn More →</span>
              </div>
            </Link>
          ))}
        </div>

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