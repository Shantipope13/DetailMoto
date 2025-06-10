import React from 'react';
import { Bike, Car, Shield, Check, Star, Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 'motorcycle-detailing',
      icon: <Bike className="w-12 h-12" />,
      title: 'Motorcycle Detailing & Ceramic Coating',
      subtitle: 'Complete care for your ride',
      description: 'Comprehensive cleaning, protection, and ceramic coating services specifically designed for motorcycles, from cruisers to sport bikes.',
      benefits: [
        'Engine degreasing and cleaning',
        'Chrome and metal polishing',
        'Leather seat conditioning',
        'Chain cleaning and lubrication',
        'Brake component care',
        'Ceramic coating application'
      ],
      process: [
        'Pre-wash inspection and photography',
        'Gentle hand washing with premium products',
        'Engine bay degreasing and detailing',
        'Chrome polishing and metal care',
        'Leather conditioning and protection',
        'Ceramic coating application and curing'
      ],
      packages: [
        { name: 'Basic Detail', price: '₱1,500', duration: '2-3 hours', description: 'Standard Wash & Wax' },
        { name: 'Premium Detail', price: '₱2,800', duration: '3-4 hours', description: 'Deep Clean & Seal' },
        { name: 'Ultimate Detail + Coating', price: '₱8,000', duration: '1-2 days', description: 'Complete Detail + Ceramic Coating' }
      ],
      image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/motorcycle-detailing'
    },
    {
      id: 'paint-protection-film',
      icon: <Shield className="w-12 h-12" />,
      title: 'Paint Protection Film (PPF)',
      subtitle: 'Invisible armor for your paint',
      description: 'Crystal-clear urethane film providing superior protection against rock chips, scratches, and environmental damage.',
      benefits: [
        'Self-healing technology',
        'Invisible protection coverage',
        'Impact and chip resistance',
        'Stain and chemical protection',
        'Maintains original paint finish',
        '10-year manufacturer warranty'
      ],
      process: [
        'Vehicle assessment and measurement',
        'Custom template creation',
        'Paint surface preparation',
        'Precision film application',
        'Edge sealing and trimming',
        'Quality assurance inspection'
      ],
      packages: [
        { name: 'Partial Coverage', price: '₱8,000+', duration: '1 day', description: 'Motorcycle tank & high-impact areas' },
        { name: 'Full Front End', price: '₱35,000+', duration: '2 days', description: 'Complete hood, fenders, bumper' },
        { name: 'Full Vehicle', price: '₱120,000+', duration: '3-4 days', description: 'Complete exterior protection' }
      ],
      image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/paint-protection-film'
    },
    {
      id: 'ceramic-coating',
      icon: <Car className="w-12 h-12" />,
      title: 'Car Detailing & Ceramic Coating',
      subtitle: 'Ultimate paint protection',
      description: 'Professional-grade Artdeshine Graphene ceramic coating application providing years of protection with incredible gloss and hydrophobic properties.',
      benefits: [
        '9H scratch resistance hardness',
        'Hydrophobic water repelling',
        'UV protection and color stability',
        'Chemical stain resistance',
        'Self-cleaning properties',
        'Up to 5-year warranty coverage'
      ],
      process: [
        'Paint condition assessment',
        'Multi-stage paint correction',
        'Surface preparation and decontamination',
        'Professional coating application',
        'Infrared curing process',
        'Quality inspection and documentation'
      ],
      packages: [
        { name: 'Graphene Lite', price: '₱15,000+', duration: '1-2 days', description: '1-year protection' },
        { name: 'Graphene Plus', price: '₱25,000+', duration: '2-3 days', description: '2-year protection' },
        { name: 'Graphene Pro', price: '₱35,000+', duration: '2-3 days', description: '3-5 year protection' }
      ],
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/ceramic-coating'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-black to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Premium Auto Care Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional detailing and protection services using the finest Artdeshine products and techniques 
            to keep your vehicle looking its absolute best.
          </p>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="font-medium">5.0 Rating • 500+ Services Completed</span>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-light'}`}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="text-primary-orange mb-6">
                  {service.icon}
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-4">
                  {service.title}
                </h2>
                
                <p className="text-xl text-primary-orange font-medium mb-6">
                  {service.subtitle}
                </p>
                
                <p className="text-lg text-gray-600 mb-8">
                  {service.description}
                </p>

                {/* Benefits */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-primary-black mb-4">Key Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Packages */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {service.packages.map((pkg, pkgIndex) => (
                    <div key={pkgIndex} className="border border-gray-200 rounded-lg p-4 text-center hover:border-primary-orange transition-colors">
                      <h4 className="font-bold text-primary-black mb-2">{pkg.name}</h4>
                      <div className="text-2xl font-bold text-primary-orange mb-1">{pkg.price}</div>
                      <div className="text-sm text-gray-500 mb-2">{pkg.duration}</div>
                      <div className="text-xs text-gray-600">{pkg.description}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  to={service.link}
                  className="bg-primary-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center space-x-2"
                >
                  <span>Learn More & Book</span>
                </Link>
              </div>

              {/* Image & Process */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="mb-8">
                  <img
                    src={service.image}
                    alt={`${service.title} - Professional auto detailing service`}
                    className="w-full h-80 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  />
                </div>

                {/* Process */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-primary-black mb-4">Our Process</h3>
                  <ol className="space-y-3">
                    {service.process.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary-orange text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          {stepIndex + 1}
                        </div>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Additional Services */}
      <section className="py-16 bg-primary-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-300">
              Specialized treatments to keep your vehicle in perfect condition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Maintenance Wash</h3>
              <p className="text-gray-300 mb-4">Special ceramic coating maintenance service</p>
              <div className="text-primary-orange font-semibold">Starting at ₱800</div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Coating Refresh</h3>
              <p className="text-gray-300 mb-4">Annual ceramic coating top-up service</p>
              <div className="text-primary-orange font-semibold">Starting at ₱2,500</div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Custom Packages</h3>
              <p className="text-gray-300 mb-4">Tailored service combinations for your needs</p>
              <div className="text-primary-orange font-semibold">Contact for Quote</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Book Your Service?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Get a free consultation and personalized quote for your vehicle. 
            Our experts are ready to help you choose the perfect protection package.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
            <Link
              to="/contact"
              className="bg-white text-primary-orange px-10 py-5 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center space-x-3"
            >
              <Calendar className="w-6 h-6" />
              <span>Get Free Quote</span>
            </Link>
            <a
              href="tel:09563579715"
              className="border-2 border-white text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-orange transition-colors flex items-center space-x-3"
            >
              <Phone className="w-6 h-6" />
              <span>Call: 0956 357 9715</span>
            </a>
          </div>

          {/* Additional Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <Check className="w-5 h-5" />
              <span>Free consultation & quotes</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Check className="w-5 h-5" />
              <span>Flexible scheduling options</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Check className="w-5 h-5" />
              <span>Satisfaction guaranteed</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;