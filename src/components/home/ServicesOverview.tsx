import React from 'react';
import { Link } from 'react-router-dom';
import { Bike, Car, Shield } from 'lucide-react';

const ServicesOverview: React.FC = () => {
  const services = [
    {
      icon: <Bike className="w-10 h-10" />,
      title: 'Motorcycle Detailing & Ceramic Coating',
      description: 'Complete cleaning, polishing, and ceramic protection services specifically designed for motorcycles',
      features: ['Engine degreasing', 'Chrome polishing', 'Ceramic coating application'],
      price: 'Starting at ₱1,500',
      link: '/services/motorcycle-detailing'
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Paint Protection Film',
      description: 'Invisible protection against chips, scratches, and environmental damage',
      features: ['Self-healing properties', 'UV resistance', 'Clear finish'],
      price: 'Starting at ₱8,000',
      link: '/services/paint-protection-film'
    },
    {
      icon: <Car className="w-10 h-10" />,
      title: 'Car Detailing & Ceramic Coating',
      description: 'Advanced Artdeshine Graphene ceramic protection with long-lasting shine and durability',
      features: ['Paint correction', '9H hardness coating', 'Up to 5-year warranty'],
      price: 'Starting at ₱15,000',
      link: '/services/ceramic-coating'
    }
  ];

  return (
    <section className="py-24 bg-gray-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/image.png" 
              alt="DetailMoto Logo" 
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-primary-black mb-6 leading-tight">
            Our Premium Services
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Professional auto care services designed to protect and enhance your vehicle's appearance
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-primary-orange mb-8 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-primary-black mb-4 leading-tight">
                {service.title}
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-base text-gray-600 flex items-center leading-relaxed">
                    <div className="w-2 h-2 bg-primary-orange rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="border-t pt-6">
                <div className="text-xl font-bold text-primary-orange mb-4">
                  {service.price}
                </div>
                <Link
                  to={service.link}
                  className="text-primary-black font-semibold text-lg hover:text-primary-orange transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/services"
            className="bg-primary-orange text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors inline-flex items-center space-x-2"
          >
            <span>View All Services</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;