import React from 'react';
import { Award, Users, Clock } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-primary-black mb-8 leading-tight">
              Crafting Excellence Since 2023
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              DetailMoto was born from a simple belief: every vehicle deserves the 
              highest level of care and protection. What started as a passion project in 
              2019 has evolved into a premier auto detailing service trusted by hundreds 
              of satisfied customers.
            </p>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              As certified Artdeshine Graphene installers, we use only the finest products and techniques 
              to deliver results that exceed expectations. Our commitment to excellence shows in every detail.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <Award className="w-10 h-10 text-primary-orange mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary-black mb-2">Certified</div>
                <div className="text-base text-gray-600 font-medium">Professionals</div>
              </div>
              <div className="text-center">
                <Users className="w-10 h-10 text-primary-orange mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary-black mb-2">500+</div>
                <div className="text-base text-gray-600 font-medium">Happy Clients</div>
              </div>
              <div className="text-center">
                <Clock className="w-10 h-10 text-primary-orange mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary-black mb-2">2</div>
                <div className="text-base text-gray-600 font-medium">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="h-56 bg-gradient-to-br from-primary-orange to-orange-600 rounded-lg shadow-lg"></div>
              <div className="h-40 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg shadow-lg"></div>
            </div>
            <div className="space-y-6 mt-10">
              <div className="h-40 bg-gradient-to-br from-gray-400 to-gray-500 rounded-lg shadow-lg"></div>
              <div className="h-56 bg-gradient-to-br from-primary-black to-gray-800 rounded-lg shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;