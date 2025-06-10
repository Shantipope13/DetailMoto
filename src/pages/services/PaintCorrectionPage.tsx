import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Check, Star, Calendar, Phone, ChevronDown, ChevronUp, Eye, Zap, Award } from 'lucide-react';

const PaintCorrectionPage: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    correction: '',
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
    alert('Thank you! We\'ll contact you within 24 hours to schedule your paint correction consultation.');
  };

  const packages = [
    {
      name: 'Single Stage',
      price: '₱3,500+',
      duration: '4-6 hours',
      correction: 'Light Defects',
      features: [
        'Light swirl mark removal',
        'Minor scratch correction',
        'Single-step machine polish',
        'Gloss enhancement',
        'Paint protection application',
        'Before/after documentation'
      ],
      popular: false,
      vehicleType: 'Motorcycle'
    },
    {
      name: 'Two Stage',
      price: '₱5,500+',
      duration: '6-8 hours',
      correction: 'Moderate Defects',
      features: [
        'Moderate scratch removal',
        'Swirl mark elimination',
        'Two-step correction process',
        'Compound and polish',
        'Significant gloss improvement',
        'Paint protection included',
        'Detailed documentation'
      ],
      popular: true,
      vehicleType: 'Motorcycle'
    },
    {
      name: 'Multi-Stage',
      price: '₱8,000+',
      duration: '8-12 hours',
      correction: 'Heavy Defects',
      features: [
        'Heavy scratch removal',
        'Deep swirl mark correction',
        'Oxidation removal',
        'Multi-step process',
        'Maximum gloss restoration',
        'Paint thickness monitoring',
        'Premium protection coating',
        'Complete documentation'
      ],
      popular: false,
      vehicleType: 'Motorcycle'
    }
  ];

  const testimonials = [
    {
      name: 'Roberto Martinez',
      vehicle: '2019 BMW M4',
      rating: 5,
      text: 'The paint correction on my M4 was absolutely incredible. They removed years of swirl marks and brought back the original deep gloss. It looks better than new!',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Lisa Chen',
      vehicle: '2020 Porsche 911',
      rating: 5,
      text: 'DetailMoto\'s paint correction service is top-notch. The attention to detail and results achieved on my 911 exceeded all expectations. Highly professional!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Mark Rodriguez',
      vehicle: '2018 Ducati Panigale',
      rating: 5,
      text: 'My Ducati had heavy scratches from poor maintenance. The multi-stage correction brought it back to showroom condition. Amazing transformation!',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const faqs = [
    {
      question: 'What is paint correction?',
      answer: 'Paint correction is the process of removing surface imperfections like swirl marks, scratches, and oxidation through machine polishing. It restores the paint to its original clarity and gloss.'
    },
    {
      question: 'How do I know if my vehicle needs paint correction?',
      answer: 'Signs include visible swirl marks under light, dull or hazy paint, fine scratches, water spots, or oxidation. We provide free assessments to determine the level of correction needed.'
    },
    {
      question: 'Will paint correction remove all scratches?',
      answer: 'Paint correction can remove most surface-level scratches and swirl marks. Deep scratches that go through the clear coat may require touch-up paint or panel refinishing.'
    },
    {
      question: 'How long do paint correction results last?',
      answer: 'Results are permanent for the defects removed. However, new swirl marks can develop over time. Proper washing techniques and protection help maintain the corrected finish longer.'
    },
    {
      question: 'Should I get ceramic coating after paint correction?',
      answer: 'Yes! Paint correction creates the perfect foundation for ceramic coating. The coating will lock in the corrected finish and provide long-term protection against future damage.'
    }
  ];

  const caseStudies = [
    {
      title: 'Classic Car Paint Restoration',
      before: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'A vintage sports car with 20 years of oxidation and heavy swirl marks. Required multi-stage correction to restore the original finish.',
      results: ['Removed 95% of swirl marks', 'Eliminated oxidation', 'Restored original color depth', 'Applied protective coating']
    },
    {
      title: 'Track Car Paint Recovery',
      before: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'A track-used sports car with heavy contamination and scratches from debris. Two-stage correction brought it back to pristine condition.',
      results: ['Removed track contamination', 'Corrected impact damage', 'Restored gloss finish', 'Ready for protection coating']
    }
  ];

  const benefits = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Restored Clarity',
      description: 'Remove swirl marks, scratches, and haze to reveal your paint\'s true color and depth.'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Enhanced Gloss',
      description: 'Achieve mirror-like finish that often exceeds the original factory appearance.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Increased Value',
      description: 'Properly corrected paint significantly increases your vehicle\'s resale value and appeal.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-black via-gray-900 to-primary-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="absolute bg-primary-orange rounded-full opacity-30"
                style={{
                  width: `${20 + i * 5}px`,
                  height: `${20 + i * 5}px`,
                  left: `${(i % 5) * 20}%`,
                  top: `${Math.floor(i / 5) * 50}%`,
                  animationDelay: `${i * 0.4}s`
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-5 h-5" />
                <span className="font-medium">Paint Restoration</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Professional Paint
                <span className="text-primary-orange block">Correction</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Expert paint correction services that remove swirl marks, scratches, and imperfections 
                to restore your vehicle's paint to its original glory and beyond.
              </p>
              
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-300">5.0 Rating • 250+ Paint Corrections</span>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#booking"
                  className="bg-primary-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Get Assessment</span>
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
                alt="Professional paint correction service"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-orange text-white p-6 rounded-lg shadow-xl">
                <div className="text-2xl font-bold">Starting at</div>
                <div className="text-3xl font-bold">₱3,500</div>
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
              Why Choose Paint Correction?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your vehicle's appearance with professional paint restoration
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

      {/* Correction Levels Section */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-black mb-4">
              Paint Correction Levels
            </h2>
            <p className="text-xl text-gray-600">
              Choose the right level of correction for your vehicle's needs
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
                  <div className="text-sm font-semibold text-gray-700">{pkg.correction}</div>
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
                  Select Level
                </a>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              * Car pricing starts at ₱8,000+ for single stage. Contact us for exact pricing based on vehicle size and condition.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-black mb-4">
              Our Correction Process
            </h2>
            <p className="text-xl text-gray-600">
              Systematic approach for optimal results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-bold text-primary-black mb-3">Assessment</h3>
              <p className="text-gray-600">Paint condition evaluation and defect mapping</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-bold text-primary-black mb-3">Preparation</h3>
              <p className="text-gray-600">Thorough washing and decontamination</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-bold text-primary-black mb-3">Correction</h3>
              <p className="text-gray-600">Machine polishing with appropriate compounds</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-bold text-primary-black mb-3">Refinement</h3>
              <p className="text-gray-600">Final polishing for maximum gloss</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">5</div>
              <h3 className="text-lg font-bold text-primary-black mb-3">Protection</h3>
              <p className="text-gray-600">Protective coating application</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-black mb-4">
              Transformation Results
            </h2>
            <p className="text-xl text-gray-600">
              See the dramatic improvements achieved through paint correction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-primary-black mb-4">{study.title}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm font-semibold text-gray-600 mb-2">BEFORE</div>
                    <img src={study.before} alt="Before correction" className="w-full h-32 object-cover rounded-lg" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-600 mb-2">AFTER</div>
                    <img src={study.after} alt="After correction" className="w-full h-32 object-cover rounded-lg" />
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
              Everything you need to know about paint correction
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
                Get Your Paint Assessment
              </h2>
              <p className="text-xl text-gray-600">
                Free evaluation to determine the best correction approach for your vehicle
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-primary-black mb-6">Why Choose Our Service?</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-primary-orange" />
                    <span className="text-gray-700">Expert paint correction specialists</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Eye className="w-5 h-5 text-primary-orange" />
                    <span className="text-gray-700">Paint thickness monitoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Sparkles className="w-5 h-5 text-primary-orange" />
                    <span className="text-gray-700">Professional-grade equipment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary-orange" />
                    <span className="text-gray-700">Satisfaction guarantee</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-primary-black mb-3">Assessment Includes:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Comprehensive paint condition evaluation</li>
                    <li>• Paint thickness measurements</li>
                    <li>• Defect severity assessment</li>
                    <li>• Recommended correction level</li>
                    <li>• Detailed quote and timeline</li>
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
                      Correction Level Needed
                    </label>
                    <select
                      name="correction"
                      value={formData.correction}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    >
                      <option value="">Not sure - need assessment</option>
                      <option value="single">Single Stage - ₱3,500+</option>
                      <option value="two">Two Stage - ₱5,500+</option>
                      <option value="multi">Multi-Stage - ₱8,000+</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Paint Condition Details
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Describe your paint's condition: swirl marks, scratches, oxidation, previous work, etc..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Schedule Free Assessment
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
            Restore Your Paint's True Beauty
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't let swirl marks and scratches diminish your vehicle's appearance. Professional paint correction brings back the showroom shine.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/contact"
              className="bg-white text-primary-orange px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Assessment
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

export default PaintCorrectionPage;