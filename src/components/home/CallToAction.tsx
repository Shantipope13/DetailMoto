import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-primary-black text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Experience the DetailMoto difference with professional-grade protection and stunning results
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Link
              to="/contact"
              className="bg-primary-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Your Appointment</span>
            </Link>
            
            <a
              href="tel:09563579715"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-black transition-all duration-300 flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now: 0956 357 9715</span>
            </a>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center justify-center space-x-2">
              <ArrowRight className="w-4 h-4 text-primary-orange" />
              <span>Free consultation & quotes</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <ArrowRight className="w-4 h-4 text-primary-orange" />
              <span>Flexible scheduling options</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <ArrowRight className="w-4 h-4 text-primary-orange" />
              <span>Satisfaction guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;