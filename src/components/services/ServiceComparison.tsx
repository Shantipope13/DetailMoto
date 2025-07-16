import React, { useState } from 'react';
import { Check, X, MessageSquare } from 'lucide-react';

interface ServicePackage {
  name: string;
  price: string;
  duration: string;
  features: { name: string; included: boolean }[];
  popular?: boolean;
}

const ServiceComparison: React.FC = () => {
  const [selectedService, setSelectedService] = useState<'motorcycle' | 'car'>('motorcycle');

  const motorcyclePackages: ServicePackage[] = [
    {
      name: 'Basic Detail',
      price: '₱1,500',
      duration: '2-3 hours',
      features: [
        { name: 'Hand wash with premium soap', included: true },
        { name: 'Basic decontamination', included: true },
        { name: 'Chrome polishing', included: true },
        { name: 'Synthetic wax application', included: true },
        { name: 'Tire and plastic dressing', included: true },
        { name: 'Clay bar treatment', included: false },
        { name: 'Machine polish', included: false },
        { name: 'Paint correction', included: false },
        { name: 'Ceramic coating', included: false },
        { name: 'Engine bay detailing', included: false }
      ]
    },
    {
      name: 'Premium Detail',
      price: '₱2,800',
      duration: '3-4 hours',
      popular: true,
      features: [
        { name: 'Hand wash with premium soap', included: true },
        { name: 'Basic decontamination', included: true },
        { name: 'Chrome polishing', included: true },
        { name: 'Synthetic wax application', included: true },
        { name: 'Tire and plastic dressing', included: true },
        { name: 'Clay bar treatment', included: true },
        { name: 'Machine polish', included: true },
        { name: 'Paint correction', included: false },
        { name: 'Ceramic coating', included: false },
        { name: 'Engine bay detailing', included: true }
      ]
    },
    {
      name: 'Ultimate Detail',
      price: '₱4,500',
      duration: '4-5 hours',
      features: [
        { name: 'Hand wash with premium soap', included: true },
        { name: 'Basic decontamination', included: true },
        { name: 'Chrome polishing', included: true },
        { name: 'Synthetic wax application', included: true },
        { name: 'Tire and plastic dressing', included: true },
        { name: 'Clay bar treatment', included: true },
        { name: 'Machine polish', included: true },
        { name: 'Paint correction', included: true },
        { name: 'Ceramic coating', included: false },
        { name: 'Engine bay detailing', included: true }
      ]
    }
  ];

  const carPackages: ServicePackage[] = [
    {
      name: 'Graphene Lite',
      price: '₱15,000+',
      duration: '1-2 days',
      features: [
        { name: 'Full vehicle wash & decontamination', included: true },
        { name: 'Single stage paint correction', included: true },
        { name: '1-year ceramic protection', included: true },
        { name: 'Hydrophobic coating', included: true },
        { name: 'UV protection', included: true },
        { name: 'Multi-stage correction', included: false },
        { name: 'Wheel coating', included: false },
        { name: 'Glass coating', included: false },
        { name: 'Interior protection', included: false },
        { name: 'Extended warranty', included: false }
      ]
    },
    {
      name: 'Graphene Plus',
      price: '₱25,000+',
      duration: '2-3 days',
      popular: true,
      features: [
        { name: 'Full vehicle wash & decontamination', included: true },
        { name: 'Single stage paint correction', included: true },
        { name: '2-year ceramic protection', included: true },
        { name: 'Hydrophobic coating', included: true },
        { name: 'UV protection', included: true },
        { name: 'Multi-stage correction', included: true },
        { name: 'Wheel coating', included: true },
        { name: 'Glass coating', included: true },
        { name: 'Interior protection', included: false },
        { name: 'Extended warranty', included: true }
      ]
    },
    {
      name: 'Graphene Pro',
      price: '₱35,000+',
      duration: '2-3 days',
      features: [
        { name: 'Full vehicle wash & decontamination', included: true },
        { name: 'Single stage paint correction', included: true },
        { name: '3-5 year ceramic protection', included: true },
        { name: 'Hydrophobic coating', included: true },
        { name: 'UV protection', included: true },
        { name: 'Multi-stage correction', included: true },
        { name: 'Wheel coating', included: true },
        { name: 'Glass coating', included: true },
        { name: 'Interior protection', included: true },
        { name: 'Extended warranty', included: true }
      ]
    }
  ];

  const packages = selectedService === 'motorcycle' ? motorcyclePackages : carPackages;

  return (
    <section className="py-16 bg-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-black mb-4">
            Compare Our Packages
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Choose the perfect service package for your vehicle
          </p>

          {/* Service Type Toggle */}
          <div className="inline-flex rounded-lg bg-white p-1 shadow-md">
            <button
              onClick={() => setSelectedService('motorcycle')}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                selectedService === 'motorcycle'
                  ? 'bg-primary-orange text-white'
                  : 'text-gray-600 hover:text-primary-orange'
              }`}
            >
              Motorcycle Detailing
            </button>
            <button
              onClick={() => setSelectedService('car')}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                selectedService === 'car'
                  ? 'bg-primary-orange text-white'
                  : 'text-gray-600 hover:text-primary-orange'
              }`}
            >
              Car Ceramic Coating
            </button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <div className="min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-4 text-left">
                      <span className="text-gray-600 font-medium">Features</span>
                    </th>
                    {packages.map((pkg) => (
                      <th key={pkg.name} className="px-6 py-4 text-center">
                        <div className={`relative ${pkg.popular ? 'pt-8' : ''}`}>
                          {pkg.popular && (
                            <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-orange text-white text-sm px-4 py-1 rounded-full">
                              Most Popular
                            </span>
                          )}
                          <div className="text-xl font-bold text-primary-black">{pkg.name}</div>
                          <div className="text-2xl font-bold text-primary-orange mt-2">{pkg.price}</div>
                          <div className="text-sm text-gray-600">{pkg.duration}</div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {packages[0].features.map((feature, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {feature.name}
                      </td>
                      {packages.map((pkg) => (
                        <td key={pkg.name} className="px-6 py-4 text-center">
                          {pkg.features[index].included ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td className="px-6 py-4"></td>
                    {packages.map((pkg) => (
                      <td key={pkg.name} className="px-6 py-4 text-center">
                        <a
                          href={`https://m.me/DetailMotoPh?ref=${selectedService}_${pkg.name.toLowerCase().replace(' ', '_')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                            pkg.popular
                              ? 'bg-primary-orange text-white hover:bg-orange-600'
                              : 'bg-gray-100 text-primary-black hover:bg-gray-200'
                          }`}
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>Book Now</span>
                        </a>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden mt-8 space-y-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`bg-white rounded-lg p-6 shadow-lg ${
                pkg.popular ? 'ring-2 ring-primary-orange' : ''
              }`}
            >
              {pkg.popular && (
                <span className="bg-primary-orange text-white text-sm px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-primary-black mt-2">{pkg.name}</h3>
              <div className="text-2xl font-bold text-primary-orange mt-2">{pkg.price}</div>
              <div className="text-sm text-gray-600 mb-4">{pkg.duration}</div>
              
              <ul className="space-y-2 mb-6">
                {pkg.features
                  .filter((f) => f.included)
                  .map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature.name}</span>
                    </li>
                  ))}
              </ul>

              <a
                href={`https://m.me/DetailMotoPh?ref=${selectedService}_${pkg.name.toLowerCase().replace(' ', '_')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  pkg.popular
                    ? 'bg-primary-orange text-white hover:bg-orange-600'
                    : 'bg-gray-100 text-primary-black hover:bg-gray-200'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book via Messenger</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceComparison;
