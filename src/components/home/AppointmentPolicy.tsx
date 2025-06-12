import React from 'react';
import { Clock, Calendar, Phone } from 'lucide-react';

const AppointmentPolicy: React.FC = () => {
  return (
    <section className="py-20 bg-primary-orange text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title - 36px+ for section titles */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
            Appointment Policy & Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mb-12">
            <div className="flex flex-col items-center">
              <Calendar className="w-12 h-12 mb-6" />
              
              {/* Card Title - 20-24px for subheadings */}
              <h3 className="text-xl lg:text-2xl font-semibold mb-4">Booking Required</h3>
              
              {/* Card Text - 16px for body */}
              <p className="text-base lg:text-lg opacity-90 leading-relaxed">
                All services require advance booking to ensure quality time and attention
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 mb-6" />
              <h3 className="text-xl lg:text-2xl font-semibold mb-4">Flexible Scheduling</h3>
              <p className="text-base lg:text-lg opacity-90 leading-relaxed">
                We offer morning, afternoon, and weekend appointments to fit your schedule
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <Phone className="w-12 h-12 mb-6" />
              <h3 className="text-xl lg:text-2xl font-semibold mb-4">24hr Confirmation</h3>
              <p className="text-base lg:text-lg opacity-90 leading-relaxed">
                We'll confirm your appointment 24 hours in advance via phone or text
              </p>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-8 lg:p-10 text-left">
            <h4 className="text-xl lg:text-2xl font-semibold mb-6 text-center">Important Notes:</h4>
            <ul className="space-y-3 text-base lg:text-lg leading-relaxed">
              <li>• Services typically take 2-8 hours depending on package selected</li>
              <li>• Vehicle drop-off and pickup options available</li>
              <li>• 48-hour cancellation policy to avoid fees</li>
              <li>• Free touch-up service within 30 days of completion</li>
              <li>• All work comes with detailed care instructions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentPolicy;