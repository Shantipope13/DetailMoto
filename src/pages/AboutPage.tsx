import React from 'react';
import { Award, Users, Clock, Target, Heart, Shield } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: '500+', label: 'Happy Customers' },
    { icon: <Clock className="w-8 h-8" />, number: '5+', label: 'Years Experience' },
    { icon: <Award className="w-8 h-8" />, number: '100%', label: 'Satisfaction Rate' },
    { icon: <Shield className="w-8 h-8" />, number: '1000+', label: 'Vehicles Protected' }
  ];

  const values = [
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Precision & Excellence',
      description: 'Every detail matters. We approach each vehicle with meticulous attention to achieve perfection in every service.'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Passion for Automotive',
      description: 'Our love for vehicles drives us to provide the best care possible, treating each one as if it were our own.'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Quality Assurance',
      description: 'We use only premium products and proven techniques, backed by comprehensive warranties and guarantees.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-black to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About DetailMoto
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Founded on passion for automotive perfection, we've been delivering premium 
            detailing and protection services that exceed expectations since 2019.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-orange text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-6">
                Our Story
              </h2>         
              <p className="text-lg text-gray-600 mb-6">
                Our founder, a lifelong automotive enthusiast, recognized the need for truly professional-grade detailing 
                services that combine cutting-edge products with traditional craftsmanship. This vision drives everything we do.
              </p>
              <p className="text-lg text-gray-600">
                Today, as certified Artdeshine Graphene installers, we continue to push the boundaries of what's possible 
                in automotive protection and appearance enhancement.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-gradient-to-br from-primary-orange to-orange-600 rounded-lg shadow-lg"></div>
                <div className="h-32 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg shadow-lg"></div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="h-32 bg-gradient-to-br from-gray-400 to-gray-500 rounded-lg shadow-lg"></div>
                <div className="h-48 bg-gradient-to-br from-primary-black to-gray-800 rounded-lg shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every service we provide and every relationship we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-primary-orange mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary-black mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to automotive excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-48 h-48 bg-gradient-to-br from-primary-orange to-orange-600 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold text-primary-black mb-2">Alex Rodriguez</h3>
              <p className="text-primary-orange font-medium mb-2">Founder & Lead Detailer</p>
              <p className="text-gray-600">
                5+ years experience, Artdeshine certified installer
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold text-primary-black mb-2">Maria Santos</h3>
              <p className="text-primary-orange font-medium mb-2">Paint Correction Specialist</p>
              <p className="text-gray-600">
                Expert in paint restoration and ceramic coating application
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 bg-gradient-to-br from-primary-black to-gray-800 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold text-primary-black mb-2">Jake Thompson</h3>
              <p className="text-primary-orange font-medium mb-2">PPF Installation Expert</p>
              <p className="text-gray-600">
                Precision film installation with 3+ years specialized experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-primary-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certifications & Expertise
            </h2>
            <p className="text-xl text-gray-300">
              Trained and certified by industry leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 text-primary-orange mx-auto mb-4" />
              <h3 className="font-bold mb-2">Artdeshine Certified</h3>
              <p className="text-sm text-gray-300">Graphene Coating Installer</p>
            </div>
            
            <div className="text-center">
              <Shield className="w-12 h-12 text-primary-orange mx-auto mb-4" />
              <h3 className="font-bold mb-2">PPF Certified</h3>
              <p className="text-sm text-gray-300">Professional Film Installation</p>
            </div>
            
            <div className="text-center">
              <Target className="w-12 h-12 text-primary-orange mx-auto mb-4" />
              <h3 className="font-bold mb-2">Paint Correction</h3>
              <p className="text-sm text-gray-300">Advanced Restoration Techniques</p>
            </div>
            
            <div className="text-center">
              <Users className="w-12 h-12 text-primary-orange mx-auto mb-4" />
              <h3 className="font-bold mb-2">Customer Service</h3>
              <p className="text-sm text-gray-300">Excellence Training Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Satisfaction Metrics */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-8">
            Customer Satisfaction Metrics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-4xl font-bold text-primary-orange mb-2">98%</div>
              <div className="text-lg font-semibold text-primary-black mb-2">Customer Retention</div>
              <div className="text-gray-600">Clients who return for additional services</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-4xl font-bold text-primary-orange mb-2">5.0</div>
              <div className="text-lg font-semibold text-primary-black mb-2">Average Rating</div>
              <div className="text-gray-600">Based on 200+ customer reviews</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-4xl font-bold text-primary-orange mb-2">95%</div>
              <div className="text-lg font-semibold text-primary-black mb-2">Referral Rate</div>
              <div className="text-gray-600">New customers from referrals</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;