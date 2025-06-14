import React from 'react';
import { Star, Quote } from 'lucide-react';
import { StaggeredGrid } from '../StaggeredGrid';
import { ScrollReveal } from '../ScrollReveal';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Mike Johnson',
      vehicle: '2022 BMW M3',
      rating: 5,
      text: 'Absolutely incredible work! The ceramic coating on my M3 looks phenomenal and has lasted over a year with minimal maintenance. Professional service from start to finish.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      vehicle: 'Harley Davidson Street Glide',
      rating: 5,
      text: 'DetailMoto transformed my Harley completely. The attention to detail is unmatched, and they truly understand motorcycles. Highly recommend for any bike owner.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 3,
      name: 'David Rodriguez',
      vehicle: '2021 Tesla Model S',
      rating: 5,
      text: 'The PPF installation was flawless. You can\'t even tell it\'s there, but the protection is incredible. Worth every penny for peace of mind.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            {/* Main Title - 36px+ for section titles */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-black mb-8 leading-tight">
              What Our Clients Say
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-7 h-7 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-semibold text-primary-black">5.0 Average Rating</span>
            </div>
            
            {/* Subtitle - 20-24px for subheadings */}
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Based on 200+ reviews from satisfied customers
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <StaggeredGrid
          items={testimonials}
          renderItem={(testimonial) => (
            <div className="bg-gray-light rounded-xl p-10 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <Quote className="w-12 h-12 text-primary-orange mb-8" />
              
              <div className="flex text-yellow-400 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              {/* Testimonial Text - 16px for body */}
              <p className="text-lg text-gray-800 mb-10 leading-relaxed font-medium">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold text-primary-black text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-base text-gray-600">
                    {testimonial.vehicle}
                  </div>
                </div>
              </div>
            </div>
          )}
          columns={3}
          staggerDelay={0.15}
          animationDirection="scale"
        />

        {/* Additional Reviews Link */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-20">
            <p className="text-xl text-gray-700 mb-8">
              See more reviews on Google and Facebook
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <button className="text-primary-orange font-semibold text-lg hover:text-orange-600 transition-colors">
                Google Reviews →
              </button>
              <button className="text-primary-orange font-semibold text-lg hover:text-orange-600 transition-colors">
                Facebook Reviews →
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;