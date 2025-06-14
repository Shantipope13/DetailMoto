import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    vehicle: '',
    message: ''
  });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll contact you within 24 hours to confirm your appointment.');
  };

  const faqs = [
    {
      question: 'How long do your services take?',
      answer: 'Service times vary: Basic detailing takes 2-3 hours, ceramic coatings require 1-3 days, and PPF installation takes 1-4 days depending on coverage. We\'ll provide a detailed timeline during consultation.'
    },
    {
      question: 'What are your payment terms?',
      answer: 'We accept cash and bank transfers. A 50% deposit is required for booking ceramic coating and PPF services. Full payment is due upon completion of the service.'
    },
    {
      question: 'What\'s included in your warranties?',
      answer: 'Artdeshine ceramic coatings come with 1-5 year warranties depending on the package. PPF includes a 10-year manufacturer warranty. All services include a satisfaction guarantee.'
    },
    {
      question: 'How should I prepare my vehicle?',
      answer: 'Simply bring your vehicle as-is. We handle all preparation including washing and decontamination. Just remove personal items and ensure fuel tank is above 1/4 full for multi-day services.'
    },
    {
      question: 'Do you offer pickup and delivery?',
      answer: 'Currently, all services are performed at our facility in Las Piñas City to ensure the highest quality results. We can arrange pickup and delivery within Metro Manila for an additional fee.'
    },
    {
      question: 'Do you work on all vehicle types?',
      answer: 'Yes! We service cars, motorcycles, trucks, SUVs, and even boats. Our team has experience with all vehicle types from economy cars to luxury vehicles and custom motorcycles.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-black to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to give your vehicle the premium care it deserves? 
            Contact us for a free consultation and personalized quote.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary-black mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary-orange mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary-black mb-1">Location</h3>
                    <p className="text-gray-600">
                      <a 
                        href="https://g.co/kgs/zDmGZqY" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary-orange transition-colors"
                      >
                        T.S. Cruz subd, Gladiola St, corner Sampaguita St,<br />
                        Almanza, Las Pinas City, 1750 Metro Manila
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary-orange mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary-black mb-1">Phone</h3>
                    <a href="tel:09563579715" className="text-gray-600 hover:text-primary-orange">
                      0956 357 9715
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary-orange mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary-black mb-1">Email</h3>
                    <a href="mailto:hello.detailmotoph@gmail.com" className="text-gray-600 hover:text-primary-orange">
                      hello.detailmotoph@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MessageSquare className="w-6 h-6 text-primary-orange mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary-black mb-1">Messenger</h3>
                    <a 
                      href="https://m.me/DetailMotoPh" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-orange transition-colors"
                    >
                      Chat with us on Facebook Messenger
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary-orange mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary-black mb-1">Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: By Appointment Only</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links & Messenger CTA */}
              <div className="bg-gray-light rounded-lg p-6">
                <h3 className="font-semibold text-primary-black mb-4">Connect With Us</h3>
                <div className="space-y-3">
                  <a 
                    href="https://www.facebook.com/DetailMotoPh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-600 hover:text-primary-orange transition-colors"
                  >
                    <span>Facebook - DetailMotoPh</span>
                  </a>
                  <a 
                    href="https://m.me/DetailMotoPh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-3 font-medium"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Start Messenger Chat</span>
                  </a>
                  <a 
                    href="https://g.co/kgs/jYyPPZr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-600 hover:text-primary-orange transition-colors"
                  >
                    <span>Google Reviews</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary-black mb-8">
                Book Your Service
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="motorcycle-detailing">Motorcycle Detailing</option>
                      <option value="ceramic-coating">Car Ceramic Coating</option>
                      <option value="ppf">Paint Protection Film</option>
                      <option value="helmet-coating">Helmet Coating</option>
                      <option value="paint-correction">Paint Correction</option>
                      <option value="consultation">Free Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700 mb-2">
                    Vehicle Information
                  </label>
                  <input
                    type="text"
                    id="vehicle"
                    name="vehicle"
                    placeholder="Year, Make, Model (e.g., 2022 BMW M3)"
                    value={formData.vehicle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your vehicle's condition, specific concerns, or preferred appointment time..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>

                {/* Alternative Contact Methods */}
                <div className="text-center pt-4 border-t border-gray-200">
                  <p className="text-gray-600 mb-4">Prefer to chat directly?</p>
                  <a
                    href="https://m.me/DetailMotoPh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2 font-medium"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Message Us on Facebook</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
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
    </div>
  );
};

export default ContactPage;