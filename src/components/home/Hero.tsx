import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-black via-gray-900 to-gray-800 overflow-hidden">
      {/* Subtle Background Video Animation */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <source src="/video/ceramic-water-beading.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
      </video>
      {/* Modern Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {/* Large hexagonal grid pattern */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute border border-primary-orange"
              style={{
                width: '120px',
                height: '104px',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                left: `${(i % 4) * 25}%`,
                top: `${Math.floor(i / 4) * 30}%`,
                transform: `rotate(${i * 15}deg)`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
        
        {/* Diagonal lines pattern */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`line-${i}`}
              className="absolute bg-gradient-to-r from-transparent via-primary-orange to-transparent opacity-20"
              style={{
                width: '2px',
                height: '100vh',
                left: `${i * 5}%`,
                transform: `rotate(${15 + i * 2}deg) translateY(-50%)`,
                transformOrigin: 'center'
              }}
            />
          ))}
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary-orange transform rotate-45 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border border-primary-orange rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-primary-orange opacity-20 transform rotate-12 animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-20 h-20 border-2 border-primary-orange transform -rotate-45"></div>
        
        {/* Circuit-like connecting lines */}
        <div className="absolute top-1/4 left-1/4">
          <svg width="200" height="200" className="opacity-30">
            <path
              d="M0,0 L50,50 L100,25 L150,75 L200,50"
              stroke="#FF5722"
              strokeWidth="1"
              fill="none"
              strokeDasharray="5,5"
            />
            <path
              d="M0,100 L75,150 L125,100 L200,125"
              stroke="#FF5722"
              strokeWidth="1"
              fill="none"
              strokeDasharray="3,7"
            />
          </svg>
        </div>
        
        <div className="absolute bottom-1/4 right-1/4">
          <svg width="150" height="150" className="opacity-30">
            <path
              d="M0,75 Q75,0 150,75 Q75,150 0,75"
              stroke="#FF5722"
              strokeWidth="1"
              fill="none"
              strokeDasharray="4,6"
            />
          </svg>
        </div>
        
        {/* Dot matrix pattern */}
        <div className="absolute inset-0">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={`dot-${i}`}
              className="absolute w-1 h-1 bg-primary-orange rounded-full opacity-30"
              style={{
                left: `${(i % 10) * 10}%`,
                top: `${Math.floor(i / 10) * 10}%`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-3 bg-primary-orange/10 text-primary-orange px-6 py-3 rounded-full mb-6 animate-fade-in">
            <Shield className="w-5 h-5" />
            <span className="text-base font-medium">Certified Artdeshine Graphene Installer</span>
          </div>

          {/* Main Heading - mobile-first font size */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-slide-up leading-tight">
            Premium Auto
            <span className="text-primary-orange block">Detailing</span>
          </h1>

          {/* Geo-targeted Trust Tagline */}
          <p className="text-sm text-gray-400 mt-2 mb-6">Trusted by motorcycle and car owners across Las Piñas and Metro Manila.</p>

          {/* Subheading - spacing improved */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 animate-fade-in leading-relaxed font-medium max-w-4xl mx-auto">
            Professional ceramic coating and paint protection for motorcycles and cars
          </p>

          {/* Rating */}
          <div className="flex items-center justify-center gap-4 mb-10 animate-fade-in">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <span className="text-white font-semibold text-lg">5.0 Rating</span>
            <span className="text-gray-300 text-lg">• 200+ Happy Customers</span>
          </div>

          {/* CTA Buttons - mobile-first, vertical stack, gap-4 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 animate-fade-in mb-6">
            <div className="flex flex-col items-center">
              <Link
                to="/contact"
                className="bg-primary-orange text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105 flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2"
                aria-label="Book Appointment"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
              <span className="text-xs text-gray-300 mt-2">Takes less than 1 minute</span>
            </div>
            <Link
              to="/services"
              className="border-2 border-white text-white px-10 py-5 rounded-lg font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 hover:bg-gray-100 hover:text-primary-black dark:hover:bg-gray-800"
              aria-label="View Services"
            >
              View Services
            </Link>
          </div>

          {/* Urgency/Availability CTA */}
          <div className="mb-10">
            <span className="bg-green-500 text-white px-2 py-1 text-xs rounded-full mr-2">Now Accepting Bookings</span>
            <span className="text-sm text-orange-200 ml-2">Slots fill fast — reserve today!</span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-10 pt-8 border-t border-gray-700">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-orange mb-2">500+</div>
              <div className="text-gray-200 text-lg">Vehicles Detailed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-orange mb-2">5+</div>
              <div className="text-gray-200 text-lg">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-orange mb-2">100%</div>
              <div className="text-gray-200 text-lg">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;