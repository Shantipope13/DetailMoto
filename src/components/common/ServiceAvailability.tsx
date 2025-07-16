import React, { useState } from 'react';
import { Calendar, MessageSquare, X } from 'lucide-react';

const ServiceAvailability: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  // Mock availability data - in real app this could come from an API
  const nextAvailableDate = new Date();
  nextAvailableDate.setDate(nextAvailableDate.getDate() + 2);
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-gradient-to-r from-primary-orange to-orange-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              <span className="font-medium">Currently Accepting Bookings</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">
                Next available slot: {formatDate(nextAvailableDate)}
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://m.me/DetailMotoPh?ref=availability_banner"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-orange px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2 text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="hidden sm:inline">Check Availability</span>
              <span className="sm:hidden">Book Now</span>
            </a>
            
            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Close banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAvailability;
