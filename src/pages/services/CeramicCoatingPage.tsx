import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, Check, Star, Calendar, Phone, ChevronDown, ChevronUp, Shield, Droplets, Zap } from 'lucide-react';

const CeramicCoatingPage: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    package: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We\'ll contact you within 24 hours to schedule your ceramic coating consultation.');
  };

  const packages = [
    {
      name: 'Graphene Lite',
      price: '₱15,000+',
      duration: '1-2 days',
      warranty: '1 Year',
      features: [
        'Single-stage paint correction',
        'Surface preparation & decontamination',
        'Artdeshine Graphene Lite coating',
        'Hydrophobic water repelling',
        'UV protection',
        '1-year warranty coverage',
        'Maintenance kit included'
      ],
      popular: false
    },
    {
      name: 'Graphene Plus',
      price: '₱25,000+',
      duration: '2-3 days',
      warranty: '2 Years',
      features: [
        'Two-stage paint correction',
        'Complete surface preparation',
        'Artdeshine Graphene Plus coating',
        'Enhanced gloss finish',
        'Superior hydrophobic properties',
        'Chemical resistance',
        '2-year warranty coverage',
        'Premium maintenance kit'
      ],
      popular: true
    },
    {
      name: 'Graphene Pro',
      price: '₱35,000+',
      duration: '2-3 days',
      warranty: '3-5 Years',
      features: [
        'Multi-stage paint correction',
        'Complete vehicle preparation',
        'Artdeshine Graphene Pro coating',
        'Maximum gloss enhancement',
        'Ultimate protection package',
        'Wheels & trim coating included',
        '3-5 year warranty coverage',
        'Professional maintenance program'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Michael Chen',
      vehicle: '2022 BMW M3',
      rating: 5,
      text: 'The ceramic coating on my M3 is absolutely incredible. Water beads off like magic and the gloss is deeper than when it was new. Worth every peso!',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Sarah Rodriguez',
      vehicle: '2021 Tesla Model 3',
      rating: 5,
      text: 'DetailMoto\'s ceramic coating has kept my Tesla looking showroom fresh for over a year. The self-cleaning properties are amazing!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'David Santos',
      vehicle: '2020 Porsche 911',
      rating: 5,
      text: 'Professional service from start to finish. The paint correction and ceramic coating transformed my 911. Highly recommend!',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const faqs = [
    {
      question: 'How long does ceramic coating last?',
      answer: 'Depending on the package, our Artdeshine ceramic coatings last 1-5 years. Graphene Lite lasts 1 year, Graphene Plus lasts 2 years, and Graphene Pro lasts 3-5 years with proper maintenance.'
    },
    {
      question: 'What is paint correction and why is it needed?',
      answer: 'Paint correction removes swirl marks, scratches, and oxidation before coating application. This ensures the ceramic coating bonds properly and achieves maximum gloss and protection.'
    },
    {
      question: 'How do I maintain ceramic coating?',
      answer: 'Maintenance is simple: regular washing with pH-neutral soap, avoiding automatic car washes, and annual inspections. We provide a complete maintenance kit and instructions with every service.'
    },
    {
      question: 'Can ceramic coating be applied to any car?',
      answer: 'Yes! We apply ceramic coating to all vehicle types and colors. However, vehicles with severely damaged paint may require extensive correction work before coating application.'
    },
    {
      question: 'What makes Artdeshine different from other coatings?',
      answer: 'Artdeshine Graphene coatings offer superior durability, gloss, and hydrophobic properties. The graphene technology provides enhanced scratch resistance and longevity compared to traditional ceramic coatings.'
    }
  ];

  const caseStudies = [
    {
      title: 'BMW M3 Complete Transformation',
      before: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'A 2020 BMW M3 with heavy swirl marks and oxidation from poor maintenance. Required extensive paint correction before Graphene Pro application.',
      results: ['Removed 90% of swirl marks', 'Restored original paint depth', 'Applied 5-year protection', 'Achieved mirror-like finish']
    },
    {
      title: 'Tesla Model S Paint Revival',
      before: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'A white Tesla Model S with water spots and contamination. Graphene Plus coating provided long-term protection and enhanced gloss.',
      results: ['Eliminated water spotting', 'Enhanced white paint depth', 'Added hydrophobic properties', '2-year protection guarantee']
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: '9H Hardness Protection',
      description: 'Superior scratch resistance that protects your paint from minor abrasions and environmental damage.'
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Hydrophobic Properties',
      description: 'Water and contaminants slide off effortlessly, making maintenance easier and keeping your car cleaner longer.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Enhanced Gloss',
      description: 'Deeper, richer color and mirror-like finish that enhances your vehicle\'s appearance beyond factory standards.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-black via-gray-900 to-primary-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="absolute bg-gradient-to-r from-transparent via-primary-orange to-transparent opacity-20"
                style={{
                  width: '2px',
                  height: '100vh',
                  left: `${i * 7}%`,
                  transform: `rotate(${15 + i * 3}deg) translateY(-50%)`,
                  transformOrigin: 'center'
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full mb-6">
                <Car className="w-5 h-5" />
                <span className="font-medium">Artdeshine Certified</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Premium Ceramic
                <span className="text-primary-orange block">Coating</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional-grade Artdeshine Graphene ceramic coating providing years of protection 
                with incredible gloss and hydrophobic properties that keep your car looking pristine.
              </p>
              
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-300">5.0 Rating • 300+ Cars Coated</span>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#booking"
                  className="bg-primary-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Get Free Quote</span>
                </a>
                <a
                  href="tel:09563579715"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-black transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional ceramic coating application"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-orange text-white p-6 rounded-lg shadow-xl">
                <div className="text-2xl font-bold">Starting at</div>
                <div className="text-3xl font-bold">₱15,000</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-black mb-4">
              Why Choose Ceramic Coating?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced protection technology that transforms your vehicle's appearance and maintenance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-primary-orange mx-auto mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-black mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-black mb-4">
              Ceramic Coating Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect protection level for your vehicle
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                  pkg.popular ? 'ring-2 ring-primary-orange scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-orange text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-primary-black mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-primary-orange mb-2">{pkg.price}</div>
                  <div className="text-gray-600 mb-1">{pkg.duration}</div>
                  <div className="text-sm font-semibold text-primary-orange">{pkg.warranty} Warranty</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-primary-orange flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="#booking"
                  className={`w-full py-3 rounded-lg font-semibold transition-colors text-center block ${
                    pkg.popular
                      ? 'bg-primary-orange text-white hover:bg-orange-600'
                      : 'bg-gray-100 text-primary-black hover:bg-gray-200'
                  }`}
                >
                  Select Package
                </a>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              * Prices vary based on vehicle size. Contact us for exact pricing for your specific vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-black mb-4">
              Our Professional Process
            </h2>
            <p className="text-xl text-gray-600">
              Meticulous preparation and application for perfect results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-primary-black mb-3">Assessment</h3>
              <p className="text-gray-600">Thorough paint condition evaluation and documentation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-primary-black mb-3">Correction</h3>
              <p className="text-gray-600">Multi-stage paint correction to remove imperfections</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-primary-black mb-3">Preparation</h3>
              <p className="text-gray-600">Complete surface decontamination and preparation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold text-primary-black mb-3">Application</h3>
              <p className="text-gray-600">Professional ceramic coating application and curing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-black mb-4">
              Transformation Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from our ceramic coating services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-primary-black mb-4">{study.title}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm font-semibold text-gray-600 mb-2">BEFORE</div>
                    <img src={study.before} alt="Before coating" className="w-full h-32 object-cover rounded-lg" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-600 mb-2">AFTER</div>
                    <img src={study.after} alt="After coating" className="w-full h-32 object-cover rounded-lg" />
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{study.description}</p>
                
                <div className="space-y-2">
                  <div className="font-semibold text-primary-black">Results Achieved:</div>
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-primary-orange" />
                      <span className="text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-primary-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Customer Success Stories</h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <span className="text-xl">5.0 Average Rating</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-200 mb-6 italic">"{testimonial.text}"</p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-300">{testimonial.vehicle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about ceramic coating
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-light rounded-lg shadow-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-200 transition-colors"
                >
                  <span className="font-semibold text-primary-black">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-primary-orange" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary-orange" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4 bg-white">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-black mb-4">
                Get Your Free Ceramic Coating Quote
              </h2>
              <p className="text-xl text-gray-600">
                Professional consultation and personalized recommendation for your vehicle
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-primary-black mb-6">Why Choose DetailMoto?</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary-orange" />
                    <span className="text-gray-700">Certified Artdeshine installer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary-orange" />
                    <span className="text-gray-700">Professional paint correction included</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary-orange" />
                    <span className="text-gray-700">Comprehensive warranty coverage</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary-orange" />
                    <span className="text-gray-700">Maintenance kit and instructions</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-primary-black mb-3">What's Included:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Free vehicle assessment and consultation</li>
                    <li>• Detailed quote with package recommendations</li>
                    <li>• Before and after documentation</li>
                    <li>• Complete maintenance instructions</li>
                    <li>• Warranty certificate and registration</li>
                  </ul>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vehicle Details *
                    </label>
                    <input
                      type="text"
                      name="vehicle"
                      required
                      placeholder="Year, Make, Model"
                      value={formData.vehicle}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Interested Package
                    </label>
                    <select
                      name="package"
                      value={formData.package}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    >
                      <option value="">Select a package</option>
                      <option value="lite">Graphene Lite - ₱15,000+</option>
                      <option value="plus">Graphene Plus - ₱25,000+</option>
                      <option value="pro">Graphene Pro - ₱35,000+</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your vehicle's condition, specific concerns, or questions..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Get My Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Protect Your Investment Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust DetailMoto for premium ceramic coating protection
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/contact"
              className="bg-white text-primary-orange px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Consultation
            </Link>
            <a
              href="tel:09563579715"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-orange transition-colors"
            >
              Call: 0956 357 9715
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CeramicCoatingPage;