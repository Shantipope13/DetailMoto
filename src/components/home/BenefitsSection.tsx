import React from 'react';
import { Shield, Droplets, Clock } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Shield className="w-16 h-16" />,
      title: 'Long-Lasting Protection',
      description: 'Our ceramic coatings provide years of protection against environmental damage, UV rays, and minor scratches, keeping your vehicle looking pristine.'
    },
    {
      icon: <Droplets className="w-16 h-16" />,
      title: 'Hydrophobic Properties',
      description: 'Water and dirt slide off effortlessly, making maintenance easier and keeping your vehicle cleaner for longer periods between washes.'
    },
    {
      icon: <Clock className="w-16 h-16" />,
      title: 'Time-Saving Maintenance',
      description: 'Spend less time cleaning and more time enjoying your ride with our low-maintenance protective solutions that work around the clock.'
    }
  ];

  return (
    <section className="py-24 bg-primary-black text-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* Main Title - 36px+ for section titles */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Why Choose DetailMoto?
          </h2>
          
          {/* Subtitle - 20-24px for subheadings */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Experience the difference that professional-grade protection makes for your vehicle
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-primary-orange mb-8 flex justify-center group-hover:animate-pulse">
                {benefit.icon}
              </div>
              
              {/* Benefit Title - 24px for card titles */}
              <h3 className="text-2xl lg:text-3xl font-bold mb-8 leading-tight">
                {benefit.title}
              </h3>
              
              {/* Description - 16px for body text */}
              <p className="text-lg lg:text-xl text-gray-200 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-24 text-center">
          <div className="bg-primary-orange/10 rounded-lg p-10 lg:p-12 max-w-6xl mx-auto">
            {/* Info Title - 24px for subsection titles */}
            <h3 className="text-2xl lg:text-3xl font-bold mb-8">Premium Quality Guarantee</h3>
            
            {/* Info Text - 16px for body */}
            <p className="text-lg lg:text-xl text-gray-200 leading-relaxed">
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