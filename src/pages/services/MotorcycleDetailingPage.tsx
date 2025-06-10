import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bike, Check, Star, Calendar, Phone, ChevronDown, ChevronUp, Shield, Droplets, Clock } from 'lucide-react';

const MotorcycleDetailingPage: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    motorcycle: '',
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
    alert('Thank you! We\'ll contact you within 24 hours to schedule your motorcycle detailing service.');
  };

  const packages = [
    {
      name: 'Basic Detail',
      price: '₱1,500',
      duration: '2-3 hours',
      features: [
        'Hand wash with premium soap',
        'Basic decontamination',
        'Chrome polishing',
        'Synthetic wax application',
        'Tire and plastic dressing',
        'Basic interior cleaning'
      ],
      popular: false
    },
    {
      name: 'Premium Detail',
      price: '₱2,800',
      duration: '3-4 hours',
      features: [
        'Everything in Basic package',
        'Clay bar treatment',
        'One-step machine polish',
        'Premium synthetic sealant',
        'Chain cleaning & lubrication',
        'Leather conditioning',
        'Engine bay cleaning'
      ],
      popular: true
    },
    {
      name: 'Ultimate Detail',
      price: '₱4,500',
      duration: '4-5 hours',
      features: [
        'Everything in Premium package',
        'Two-step machine polish',
        'Paint correction for scratches',
        'Complete engine bay detailing',
        'Exhaust polishing',
        'Headlight restoration',
        'Protective coating application'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Carlos Mendoza',
      motorcycle: '2021 Harley Davidson Street Glide',
      rating: 5,
      text: 'DetailMoto brought my Harley back to showroom condition. The chrome work is absolutely stunning and the attention to detail is incredible. Worth every peso!',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Maria Santos',
      motorcycle: '2020 Yamaha R1',
      rating: 5,
      text: 'My sport bike has never looked better. They really understand motorcycles and treated my R1 with the care it deserves. The ceramic coating is amazing!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Jake Rodriguez',
      motorcycle: '2019 BMW R1250GS',
      rating: 5,
      text: 'Professional service from start to finish. They even cleaned parts I didn\'t know could be cleaned. My adventure bike is ready for the next journey!',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const faqs = [
    {
      question: 'How long does motorcycle detailing take?',
      answer: 'Depending on the package selected, motorcycle detailing takes 2-5 hours. Basic detailing takes 2-3 hours, Premium takes 3-4 hours, and Ultimate detailing takes 4-5 hours for complete restoration.'
    },
    {
      question: 'Do you work on all types of motorcycles?',
      answer: 'Yes! We service all motorcycle types including cruisers, sport bikes, touring bikes, adventure bikes, scooters, and custom motorcycles. Our team has experience with all major brands.'
    },
    {
      question: 'Is it safe to wash the engine bay?',
      answer: 'Absolutely! We use specialized techniques and products designed for motorcycle engines. We carefully protect electrical components and use appropriate cleaning methods for each engine type.'
    },
    {
      question: 'How often should I detail my motorcycle?',
      answer: 'We recommend professional detailing every 3-6 months depending on usage. Regular riders or those in harsh conditions may benefit from more frequent service, while garage-kept bikes can go longer between details.'
    },
    {
      question: 'Do you provide pickup and delivery?',
      answer: 'Currently, all services are performed at our facility in Las Piñas City. We can arrange pickup and delivery within Metro Manila for an additional fee of ₱500-1,000 depending on distance.'
    }
  ];

  const caseStudies = [
    {
      title: 'Vintage Harley Restoration Detail',
      before: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'A 1995 Harley Davidson that hadn\'t been properly maintained for years. We performed complete paint correction, chrome restoration, and leather conditioning.',
      results: ['Removed 15 years of oxidation', 'Restored original paint depth', 'Chrome brought back to mirror finish', 'Leather seats completely rejuvenated']
    },
    {
      title: 'Track Day Sport Bike Recovery',
      before: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'A heavily used track bike covered in brake dust, tire rubber, and chain lube. Required intensive decontamination and protection.',
      results: ['Removed embedded brake dust', 'Cleaned chain and sprockets', 'Applied protective coating', 'Ready for next track session']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-black via-gray-900 to-primary-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute border border-primary-orange"
                style={{
                  width: '60px',
                  height: '52px',
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  left: `${(i % 5) * 20}%`,
                  top: `${Math.floor(i / 5) * 25}%`,
                  transform: `rotate(${i * 18}deg)`,
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full mb-6">
                <Bike className="w-5 h-5" />
                <span className="font-medium">Motorcycle Specialists</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Professional Motorcycle
                <span className="text-primary-orange block">Detailing</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Specialized care for your motorcycle with expert cleaning, polishing, and protection services. 
                From cruisers to sport bikes, we treat every ride with the attention it deserves.
              </p>
              
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-300">5.0 Rating • 200+ Motorcycles Detailed</span>
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
                src="https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional motorcycle detailing service"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-orange text-white p-6 rounded-lg shadow-xl">
                <div className="text-2xl font-bold">Starting at</div>
                <div className="text-3xl font-bold">₱1,500</div>
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
              Why Choose Our Motorcycle Detailing?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized techniques and products designed specifically for motorcycles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Shield className="w-12 h-12 text-primary-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-black mb-3">Expert Care</h3>
              <p className="text-gray-600">Our team understands the unique needs of motorcycles, from delicate chrome to sensitive electronics.</p>
            </div>
            
            <div className="text-center p-6">
              <Droplets className="w-12 h-12 text-primary-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-black mb-3">Safe Cleaning</h3>
              <p className="text-gray-600">Specialized products and techniques that protect your bike's finish while achieving superior results.</p>
            </div>
            
            <div className="text-center p-6">
              <Clock className="w-12 h-12 text-primary-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-black mb-3">Long-Lasting Results</h3>
              <p className="text-gray-600">Premium protection that keeps your motorcycle looking great between services and rides.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-black mb-4">
              Choose Your Package
            </h2>
            <p className="text-xl text-gray-600">
              From basic maintenance to complete restoration
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
                  <div className="text-gray-600">{pkg.duration}</div>
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

      {/* Case Studies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-black mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real transformations from our motorcycle detailing services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-light rounded-xl p-8">
                <h3 className="text-2xl font-bold text-primary-black mb-4">{study.title}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm font-semibold text-gray-600 mb-2">BEFORE</div>
                    <img src={study.before} alt="Before detailing" className="w-full h-32 object-cover rounded-lg" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-600 mb-2">AFTER</div>
                    <img src={study.after} alt="After detailing" className="w-full h-32 object-cover rounded-lg" />
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
            <h2 className="text-4xl font-bold mb-4">What Riders Say</h2>
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
                    <div className="text-sm text-gray-300">{testimonial.motorcycle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our motorcycle detailing service
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-primary-black">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-primary-orange" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary-orange" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-black mb-4">
                Book Your Motorcycle Detailing
              </h2>
              <p className="text-xl text-gray-600">
                Ready to give your motorcycle the care it deserves? Get started today!
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-primary-black mb-6">Contact Information</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary-orange" />
                    <span className="text-gray-700">0956 357 9715</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-primary-orange" />
                    <span className="text-gray-700">Monday - Saturday: 8:00 AM - 6:00 PM</span>
                  </div>
                </div>
                
                <div className="bg-gray-light rounded-lg p-6">
                  <h4 className="font-semibold text-primary-black mb-3">What to Expect:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Free consultation and quote</li>
                    <li>• Professional assessment of your motorcycle</li>
                    <li>• Detailed explanation of recommended services</li>
                    <li>• Flexible scheduling to fit your needs</li>
                    <li>• Before and after photos of the work</li>
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
                      Motorcycle Details
                    </label>
                    <input
                      type="text"
                      name="motorcycle"
                      placeholder="Year, Make, Model"
                      value={formData.motorcycle}
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
                      <option value="basic">Basic Detail - ₱1,500</option>
                      <option value="premium">Premium Detail - ₱2,800</option>
                      <option value="ultimate">Ultimate Detail - ₱4,500</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your motorcycle's condition, specific concerns, or preferred appointment time..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Book My Motorcycle Detailing
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
            Ready to Transform Your Ride?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied riders who trust DetailMoto with their motorcycle care
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/contact"
              className="bg-white text-primary-orange px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
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

export default MotorcycleDetailingPage;