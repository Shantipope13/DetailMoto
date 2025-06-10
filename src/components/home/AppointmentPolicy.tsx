import React from 'react';
import { Clock, Calendar, Phone } from 'lucide-react';

const AppointmentPolicy: React.FC = () => {
  return (
    <section className="py-16 bg-primary-orange text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Appointment Policy & Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <Calendar className="w-8 h-8 mb-4" />
              <h3 className="font-semibold mb-2">Booking Required</h3>
              <p className="text-sm opacity-90">
                All services require advance booking to ensure quality time and attention
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 mb-4" />
              <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-sm opacity-90">
                We offer morning, afternoon, and weekend appointments to fit your schedule
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-4" />
              <h3 className="font-semibold mb-2">24hr Confirmation</h3>
              <p className="text-sm opacity-90">
                We'll confirm your appointment 24 hours in advance via phone or text
              </p>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-6 text-left">
            <h4 className="font-semibold mb-4 text-center">Important Notes:</h4>
            <ul className="space-y-2 text-sm">
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