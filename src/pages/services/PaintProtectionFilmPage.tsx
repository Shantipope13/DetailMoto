import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Check, Star, Calendar, Phone, ChevronDown, ChevronUp, Zap, Eye, Award } from 'lucide-react';

const PaintProtectionFilmPage: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    coverage: '',
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
    alert('Thank you! We\'ll contact you within 24 hours to schedule your PPF consultation.');
  };

  const packages = [
    {
      name: 'Partial Coverage',
      price: '₱8,000+',
      duration: '1 day',
      coverage: 'High-Impact Areas',
      features: [
        'Motorcycle tank protection',
        'High-impact fairings',
        'Vulnerable paint areas',
        'Custom template cutting',
        'Professional installation',
        '10-year manufacturer warranty'
      ],
      popular: false,
      vehicleType: 'Motorcycle'
    },
    {
      name: 'Full Front End',
      price: '₱35,000+',
      duration: '2 days',
      coverage: 'Complete Front Protection',
      features: [
        'Full hood coverage',
        'Front fenders',
        'Front bumper',
        'Headlights',
        'Mirror caps',
        'A-pillars',
        'Professional installation',
        '10-year manufacturer warranty'
      ],
      popular: true,
      vehicleType: 'Car'
    },
    {
      name: 'Full Vehicle',
      price: '₱120,000+',
      duration: '3-4 days',
      coverage: 'Complete Protection',
      features: [
        'Entire vehicle coverage',
        'All painted surfaces',
        'Door edges and jambs',
        'Roof and pillars',
        'Bumpers and trim',
        'Headlights and taillights',
        'Premium installation',
        '10-year manufacturer warranty'
      ],
      popular: false,
      vehicleType: 'Car'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      vehicle: '2022 Porsche 911',
      rating: 5,
      text: 'The PPF installation is absolutely flawless. You can\'t even tell it\'s there, but the protection is incredible. My 911 still looks brand new after a year of driving.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Maria Garcia',
      vehicle: '2021 BMW X5',
      rating: 5,
      text: 'DetailMoto\'s PPF work is top-notch. The film is invisible and has already saved my paint from several rock chips. Worth every peso for peace of mind.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Carlos Rodriguez',
      vehicle: '2020 Ducati Panigale',
      rating: 5,
      text: 'Perfect installation on my Ducati. The film protects the tank and fairings without affecting the bike\'s appearance. Professional work from start to finish.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const faqs = [
    {
      question: 'How long does PPF last?',
      answer: 'High-quality PPF typically lasts 10+ years with proper care. Our films come with a 10-year manufacturer warranty against yellowing, cracking, and peeling.'
    },
    {
      question: 'Will PPF affect my vehicle\'s appearance?',
      answer: 'Modern PPF is virtually invisible when properly installed. It maintains your vehicle\'s original finish while providing superior protection against damage.'
    },
    {
      question: 'Can PPF be removed?',
      answer: 'Yes, PPF can be safely removed without damaging the paint underneath. Professional removal is recommended to ensure no adhesive residue remains.'
    },
    {
      question: 'How do I maintain PPF?',
      answer: 'PPF maintenance is simple: regular washing with mild soap, avoiding abrasive cleaners, and occasional professional inspection. The film is self-healing for minor scratches.'
    },
    {
      question: 'What areas should I protect with PPF?',
      answer: 'High-impact areas like the front bumper, hood, fenders, and headlights are most important. For motorcycles, tank and fairing protection is essential.'
    }
  ];

  const caseStudies = [
    {
      title: 'Luxury Sports Car Full Protection',
      before: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'A brand new Porsche 911 received full vehicle PPF protection. The owner wanted maximum protection for track days and daily driving.',
      results: ['Complete paint protection', 'Invisible installation', 'Track-ready durability', '10-year warranty coverage']
    },
    {
      title: 'Adventure Motorcycle Tank Protection',
      before: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'A BMW GS adventure bike needed tank and fairing protection for off-road adventures. Custom templates ensured perfect fit.',
      results: ['Custom template creation', 'Perfect edge alignment', 'Adventure-ready protection', 'Maintained resale value']
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Impact Protection',
      description: 'Superior protection against rock chips, scratches, and road debris that can damage your paint.'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Invisible Coverage',
      description: 'Crystal-clear film that\'s virtually invisible, maintaining your vehicle\'s original appearance.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Self-Healing Technology',
      description: 'Minor scratches disappear with heat, keeping the film looking new for years.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-black via-gray-900 to-primary-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute border-2 border-primary-orange transform rotate-45"
                style={{
                  width: '100px',
                  height: '100px',
                  left: `${(i % 4) * 25}%`,
                  top: `${Math.floor(i / 4) * 50}%`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full mb-6">
                <Shield className="w-5 h-5" />
                <span className="font-medium">Ultimate Protection</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Paint Protection
                <span className="text-primary-orange block">Film (PPF)</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Invisible armor for your vehicle's paint. Crystal-clear urethane film providing 
                superior protection against rock chips, scratches, and environmental damage.
              </p>
              
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-300">5.0 Rating • 150+ Vehicles Protected</span>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#booking"
                  className="bg-primary-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Get Quote</span>
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
                src="https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional paint protection film installation"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-orange text-white p-6 rounded-lg shadow-xl">
                <div className="text-2xl font-bold">Starting at</div>
                <div className="text-3xl font-bold">₱8,000</div>
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
              Why Choose Paint Protection Film?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced protection technology that preserves your vehicle's appearance and value
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

      {/* Coverage Options Section */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-black mb-4">
              Protection Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the right level of protection for your vehicle
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
                  <div className="text-sm font-semibold text-primary-orange mb-2">{pkg.vehicleType}</div>
                  <h3 className="text-2xl font-bold text-primary-black mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-primary-orange mb-2">{pkg.price}</div>
                  <div className="text-gray-600 mb-1">{pkg.duration}</div>
                  <div className="text-sm font-semibold text-gray-700">{pkg.coverage}</div>
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
              * Prices vary based on vehicle size and complexity. Contact us for exact pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-black mb-4">
              Professional Installation Process
            </h2>
            <p className="text-xl text-gray-600">
              Precision installation for perfect results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-bold text-primary-black mb-3">Assessment</h3>
              <p className="text-gray-600">Vehicle measurement and template creation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-bold text-primary-black mb-3">Preparation</h3>
              <p className="text-gray-600">Paint surface cleaning and decontamination</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-bold text-primary-black mb-3">Cutting</h3>
              <p className="text-gray-600">Precision film cutting using templates</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-bold text-primary-black mb-3">Installation</h3>
              <p className="text-gray-600">Professional film application and positioning</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">5</div>
              <h3 className="text-lg font-bold text-primary-black mb-3">Finishing</h3>
              <p className="text-gray-600">Edge sealing and quality inspection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-black mb-4">
              Protection Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from our PPF installations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-primary-black mb-4">{study.title}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm font-semibold text-gray-600 mb-2">BEFORE</div>
                    <img src={study.before} alt="Before PPF" className="w-full h-32 object-cover rounded-lg" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-600 mb-2">AFTER</div>
                    <img src={study.after} alt="After PPF" className="w-full h-32 object-cover rounded-lg" />
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
            <h2 className="text-4xl font-bold mb-4">Customer Testimonials</h2>
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
              Everything you need to know about paint protection film
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
                Get Your PPF Quote Today
              </h2>
              <p className="text-xl text-gray-600">
                Professional consultation and custom quote for your vehicle
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-primary-black mb-6">Why Choose Our PPF Service?</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-primary-orange" />
                    <span className="text-gray-700">Professional installation expertise</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-primary-orange" />
                    <span className="text-gray-700">10-year manufacturer warranty</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Eye className="w-5 h-5 text-primary-orange" />
                    <span className="text-gray-700">Invisible, seamless installation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-primary-orange" />
                    <span className="text-gray-700">Self-healing technology</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-primary-black mb-3">Service Includes:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Free vehicle assessment and measurement</li>
                    <li>• Custom template creation</li>
                    <li>• Professional installation</li>
                    <li>• Quality inspection and warranty</li>
                    <li>• Care and maintenance instructions</li>
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
                      Coverage Needed
                    </label>
                    <select
                      name="coverage"
                      value={formData.coverage}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    >
                      <option value="">Select coverage</option>
                      <option value="partial">Partial Coverage - ₱8,000+</option>
                      <option value="front">Full Front End - ₱35,000+</option>
                      <option value="full">Full Vehicle - ₱120,000+</option>
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
                    placeholder="Tell us about your protection needs, vehicle usage, or specific concerns..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Get My PPF Quote
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
            Protect Your Investment with PPF
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't wait for damage to occur. Protect your vehicle's paint with professional PPF installation.
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

export default PaintProtectionFilmPage;