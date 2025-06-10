import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const FloatingBookButton: React.FC = () => {
  return (
    <Link
      to="/contact"
      className="fixed bottom-6 right-6 bg-primary-orange text-white p-4 rounded-full shadow-2xl hover:bg-orange-600 transition-all duration-300 hover:scale-110 z-40 animate-bounce-gentle"
    >
      <Calendar className="w-6 h-6" />
      <span className="sr-only">Book Now</span>
    </Link>
  );
};

export default FloatingBookButton;