import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 bg-primary-black text-white">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Title - 36px+ for section titles */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Ready to Transform Your Vehicle?
          </h2>
          
          {/* Subtitle - 20-24px for subheadings */}
          <p className="text-xl md:text-2xl text-gray-300 mb-16 leading-relaxed">
            Experience the DetailMoto difference with professional-grade protection and stunning results
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-16">
            <Link
              to="/contact"
              className="bg-primary-orange text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105 flex items-center space-x-3"
            >
              <Calendar className="w-6 h-6" />
              <span>Book Your Appointment</span>
            </Link>
            
            <a
              href="tel:09563579715"
              className="border-2 border-white text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-black transition-all duration-300 flex items-center space-x-3"
            >
              <Phone className="w-6 h-6" />
              <span>Call Now: 0956 357 9715</span>
            </a>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-base lg:text-lg">
            <div className="flex items-center justify-center space-x-3">
              <ArrowRight className="w-5 h-5 text-primary-orange" />
              <span>Free consultation & quotes</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <ArrowRight className="w-5 h-5 text-primary-orange" />
              <span>Flexible scheduling options</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <ArrowRight className="w-5 h-5 text-primary-orange" />
              <span>Satisfaction guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;