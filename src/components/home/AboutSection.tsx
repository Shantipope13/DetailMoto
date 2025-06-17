import React from 'react';
import { Award, Users, Star, Search, Gem } from 'lucide-react';

const values = [
  {
    icon: <Award className="w-10 h-10 text-primary-orange mb-2" aria-hidden="true" />,
    title: 'Certified Installers',
    description: 'Trained & certified professionals ensure top-quality results.'
  },
  {
    icon: <Gem className="w-10 h-10 text-primary-orange mb-2" aria-hidden="true" />,
    title: 'Premium Products',
    description: 'We use only the finest brands for lasting protection and shine.'
  },
  {
    icon: <Star className="w-10 h-10 text-primary-orange mb-2" aria-hidden="true" />,
    title: 'Customer Satisfaction',
    description: 'Hundreds of happy clients—your satisfaction is our priority.'
  },
  {
    icon: <Search className="w-10 h-10 text-primary-orange mb-2" aria-hidden="true" />,
    title: 'Attention to Detail',
    description: 'We treat every vehicle as our own, with meticulous care.'
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <div>
            {/* Main Title - 36px+ for section titles */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-black mb-10 leading-tight">
              Crafting Excellence Since 2023
            </h2>
            
            {/* Body Text - 16px for body */}
            <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
              DetailMoto was born from a simple belief: every vehicle deserves the 
              highest level of care and protection. What started as a passion project in 
              2019 has evolved into a premier auto detailing service trusted by hundreds 
              of satisfied customers.
            </p>
            <p className="text-lg lg:text-xl text-gray-700 mb-12 leading-relaxed">
              As certified Artdeshine Graphene installers, we use only the finest products and techniques 
              to deliver results that exceed expectations. Our commitment to excellence shows in every detail.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 lg:gap-10">
              <div className="text-center">
                <Award className="w-12 h-12 text-primary-orange mx-auto mb-4" />
                <div className="text-3xl lg:text-4xl font-bold text-primary-black mb-3">Certified</div>
                <div className="text-base lg:text-lg text-gray-600 font-medium">Professionals</div>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-primary-orange mx-auto mb-4" />
                <div className="text-3xl lg:text-4xl font-bold text-primary-black mb-3">500+</div>
                <div className="text-base lg:text-lg text-gray-600 font-medium">Happy Clients</div>
              </div>
              <div className="text-center">
                <Star className="w-12 h-12 text-primary-orange mx-auto mb-4" />
                <div className="text-3xl lg:text-4xl font-bold text-primary-black mb-3">2</div>
                <div className="text-base lg:text-lg text-gray-600 font-medium">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="card flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg h-full">
                {value.icon}
                <h3 className="font-bold text-lg mb-2 text-primary-black">{value.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;