import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Delete as Helmet, Check, Star, Calendar, Phone, ChevronDown, ChevronUp, Shield, Droplets, Sparkles } from 'lucide-react';

const HelmetCoatingPage: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    helmet: '',
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
    alert('Thank you! We\'ll contact you within 24 hours to schedule your helmet coating service.');
  };

  const packages = [
    {
      name: 'Basic Helmet',
      price: '₱2,500',
      duration: '2 hours',
      protection: '6 months',
      features: [
        'Helmet shell cleaning',
        'Surface preparation',
        'Hydrophobic coating application',
        'Basic scratch resistance',
        'Easy cleaning properties',
        '6-month protection warranty'
      ],
      popular: false
    },
    {
      name: 'Premium Helmet',
      price: '₱3,500',
      duration: '3 hours',
      protection: '12 months',
      features: [
        'Deep helmet cleaning',
        'Complete surface preparation',
        'Advanced hydrophobic coating',
        'Enhanced scratch resistance',
        'Anti-static properties',
        'Visor treatment included',
        '12-month protection warranty'
      ],
      popular: true
    },
    {
      name: 'Helmet + Gear',
      price: '₱5,000+',
      duration: '4 hours',
      protection: '12 months',
      features: [
        'Complete helmet treatment',
        'Riding jacket coating',
        'Gloves protection',
        'Boots treatment',
        'Comprehensive gear care',
        'Extended protection package',
        '12-month warranty coverage'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Rico Valdez',
      helmet: 'Shoei RF-1400',
      rating: 5,
      text: 'The helmet coating is amazing! Bugs and dirt just slide off now. My Shoei looks brand new even after long rides. Highly recommend this service!',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Anna Cruz',
      helmet: 'Arai Corsair-X',
      rating: 5,
      text: 'DetailMoto\'s helmet coating service is fantastic. The anti-static properties really work - less dust accumulation and easier cleaning.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Mark Santos',
      helmet: 'AGV K6',
      rating: 5,
      text: 'Professional service and great results. My helmet stays cleaner longer and the coating doesn\'t affect the graphics at all. Perfect!',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const faqs = [
    {
      question: 'Is helmet coating safe for all helmet types?',
      answer: 'Yes, our coating is safe for all helmet materials including polycarbonate, fiberglass, and carbon fiber. We test compatibility before application to ensure no damage to graphics or finishes.'
    },
    {
      question: 'Will the coating affect my helmet\'s safety rating?',
      answer: 'No, our coating is applied only to the exterior shell and does not affect the helmet\'s safety structure or certifications. The coating is thin and flexible, maintaining all safety properties.'
    },
    {
      question: 'How long does helmet coating last?',
      answer: 'Depending on the package, our helmet coatings last 6-12 months. The longevity depends on usage frequency, cleaning habits, and environmental conditions.'
    },
    {
      question: 'Can I still use my helmet immediately after coating?',
      answer: 'We recommend waiting 24 hours after coating application before use to ensure complete curing. This ensures maximum durability and performance of the coating.'
    },
    {
      question: 'How do I maintain the coating?',
      answer: 'Maintenance is simple: rinse with water, use mild soap if needed, and avoid abrasive cleaners. The coating makes cleaning much easier as dirt and bugs slide off effortlessly.'
    }
  ];

  const caseStudies = [
    {
      title: 'Track Day Helmet Protection',
      before: 'https://images.pexels.com/photos/163210/motorcycles-race-helmets-pilots-163210.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/163210/motorcycles-race-helmets-pilots-163210.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'A racing helmet used for track days needed protection from high-speed debris and easy cleaning between sessions.',
      results: ['Enhanced impact resistance', 'Easy bug removal', 'Maintained visibility', 'Extended helmet life']
    },
    {
      title: 'Daily Commuter Helmet Care',
      before: 'https://images.pexels.com/photos/163210/motorcycles-race-helmets-pilots-163210.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/163210/motorcycles-race-helmets-pilots-163210.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'A commuter helmet exposed to daily pollution and weather needed protection and easier maintenance.',
      results: ['Reduced cleaning frequency', 'Better pollution resistance', 'Enhanced appearance', 'Longer-lasting graphics']
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Scratch Protection',
      description: 'Enhanced resistance to minor scratches and abrasions that can damage your helmet\'s finish.'
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Easy Cleaning',
      description: 'Hydrophobic properties make bug and dirt removal effortless with just water.'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Enhanced Appearance',
      description: 'Maintains and enhances your helmet\'s original finish and graphics.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-black via-gray-900 to-primary-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-16 h-16 border border-primary-orange rounded-full"
                style={{
                  left: `${(i % 4) * 25}%`,
                  top: `${Math.floor(i / 4) * 33}%`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full mb-6">
                <Helmet className="w-5 h-5" />
                <span className="font-medium">Specialized Protection</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Professional Helmet
                <span className="text-primary-orange block">Coating</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Specialized ceramic coating for motorcycle helmets and riding gear. 
                Enhanced protection, easier cleaning, and extended life for your safety equipment.
              </p>
              
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-300">5.0 Rating • 100+ Helmets Coated</span>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#booking"
                  className="bg-primary-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Service</span>
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
                src="https://images.pexels.com/photos/163210/motorcycles-race-helmets-pilots-163210.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional helmet coating service"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-orange text-white p-6 rounded-lg shadow-xl">
                <div className="text-2xl font-bold">Starting at</div>
                <div className="text-3xl font-bold">₱2,500</div>
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
              Why Coat Your Helmet?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized protection that enhances your helmet's performance and longevity
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
              Helmet Coating Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect protection for your riding gear
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
                  <div className="text-sm font-semibold text-primary-orange">{pkg.protection} Protection</div>
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
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-black mb-4">
              Our Coating Process
            </h2>
            <p className="text-xl text-gray-600">
              Careful preparation and application for optimal results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-primary-black mb-3">Inspection</h3>
              <p className="text-gray-600">Thorough helmet condition assessment and cleaning</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-primary-black mb-3">Preparation</h3>
              <p className="text-gray-600">Surface decontamination and preparation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-primary-black mb-3">Application</h3>
              <p className="text-gray-600">Professional coating application to shell</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold text-primary-black mb-3">Curing</h3>
              <p className="text-gray-600">Proper curing and quality inspection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-black mb-4">
              Real Results
            </h2>
            <p className="text-xl text-gray-600">
              See how our helmet coating protects and enhances
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
                  <div className="font-semibold text-primary-black">Benefits Achieved:</div>
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
            <h2 className="text-4xl font-bold mb-4">Rider Testimonials</h2>
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
                    <div className="text-sm text-gray-300">{testimonial.helmet}</div>
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
              Everything you need to know about helmet coating
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
                Book Your Helmet Coating Service
              </h2>
              <p className="text-xl text-gray-600">
                Protect your helmet and riding gear with professional coating
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-primary-black mb-6">Service Benefits</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-primary-orange" />
                    <span className="text-gray-700">Enhanced scratch resistance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Droplets className="w-5 h-5 text-primary-orange" />
                    <span className="text-gray-700">Easy bug and dirt removal</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Sparkles className="w-5 h-5 text-primary-orange" />
                    <span className="text-gray-700">Enhanced appearance and gloss</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary-orange" />
                    <span className="text-gray-700">Extended helmet lifespan</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-primary-black mb-3">What's Included:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Complete helmet inspection and cleaning</li>
                    <li>• Professional coating application</li>
                    <li>• Quality assurance testing</li>
                    <li>• Care and maintenance instructions</li>
                    <li>• Protection warranty certificate</li>
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
                      Helmet Brand & Model
                    </label>
                    <input
                      type="text"
                      name="helmet"
                      placeholder="e.g., Shoei RF-1400"
                      value={formData.helmet}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Package
                    </label>
                    <select
                      name="package"
                      value={formData.package}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    >
                      <option value="">Select a package</option>
                      <option value="basic">Basic Helmet - ₱2,500</option>
                      <option value="premium">Premium Helmet - ₱3,500</option>
                      <option value="gear">Helmet + Gear - ₱5,000+</option>
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
                    placeholder="Tell us about your helmet's condition, any specific concerns, or additional gear you'd like coated..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Book Helmet Coating Service
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
            Protect Your Safety Gear Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Give your helmet the protection it deserves with our specialized coating service
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/contact"
              className="bg-white text-primary-orange px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Service
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

export default HelmetCoatingPage;