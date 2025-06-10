import React from 'react';
import { Shield, Droplets, Clock } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Shield className="w-14 h-14" />,
      title: 'Long-Lasting Protection',
      description: 'Our ceramic coatings provide years of protection against environmental damage, UV rays, and minor scratches, keeping your vehicle looking pristine.'
    },
    {
      icon: <Droplets className="w-14 h-14" />,
      title: 'Hydrophobic Properties',
      description: 'Water and dirt slide off effortlessly, making maintenance easier and keeping your vehicle cleaner for longer periods between washes.'
    },
    {
      icon: <Clock className="w-14 h-14" />,
      title: 'Time-Saving Maintenance',
      description: 'Spend less time cleaning and more time enjoying your ride with our low-maintenance protective solutions that work around the clock.'
    }
  ];

  return (
    <section className="py-24 bg-primary-black text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Why Choose DetailMoto?
          </h2>
          <p className="text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Experience the difference that professional-grade protection makes for your vehicle
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-primary-orange mb-8 flex justify-center group-hover:animate-pulse">
                {benefit.icon}
              </div>
              <h3 className="text-3xl font-bold mb-6 leading-tight">
                {benefit.title}
              </h3>
              <p className="text-xl text-gray-200 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center">
          <div className="bg-primary-orange/10 rounded-lg p-10 max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Premium Quality Guarantee</h3>
            <p className="text-xl text-gray-200 leading-relaxed">
              We stand behind our work with comprehensive warranties and use only the finest products 
              from trusted brands like Artdeshine. Your satisfaction is our commitment, and every service 
              comes with our promise of excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;