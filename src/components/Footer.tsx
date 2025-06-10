import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/image.png" 
                alt="DetailMoto Logo" 
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold">DetailMoto</h3>
                <p className="text-sm opacity-80">Premium Auto Care</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Professional auto detailing and ceramic coating services for motorcycles and cars in Metro Manila.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/DetailMotoPh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-orange transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-orange transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-orange transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary-orange transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-primary-orange transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Motorcycle Detailing & Ceramic Coating</li>
              <li className="text-gray-300">Paint Protection Film</li>
              <li className="text-gray-300">Car Detailing & Ceramic Coating</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-orange mt-1" />
                <div className="text-gray-300">
                  <a 
                    href="https://g.co/kgs/zDmGZqY" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary-orange transition-colors"
                  >
                    T.S. Cruz subd, Gladiola St, corner Sampaguita St,<br />
                    Almanza, Las Pinas City, 1750 Metro Manila
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-orange" />
                <a href="tel:09563579715" className="text-gray-300 hover:text-primary-orange transition-colors">
                  0956 357 9715
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-orange" />
                <a href="mailto:hello.detailmotoph@gmail.com" className="text-gray-300 hover:text-primary-orange transition-colors">
                  hello.detailmotoph@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 DetailMoto. All rights reserved. | Premium Auto Detailing & Ceramic Coating in Metro Manila
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;