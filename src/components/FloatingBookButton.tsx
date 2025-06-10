import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

// Extend Window interface to include lastScrollY
declare global {
  interface Window {
    lastScrollY?: number;
  }
}

const FloatingBookButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide button when scrolling down, show when scrolling up
      const scrollY = window.scrollY;
      const lastScrollY = window.lastScrollY || 0;
      setIsVisible(scrollY < lastScrollY || scrollY < 100);
      window.lastScrollY = scrollY;
    };

    // Stop animation after 5 seconds
    const animationTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 5000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(animationTimer);
    };
  }, []);

  return (
    <Link
      to="/contact"
      className={`fixed bottom-6 right-6 bg-primary-orange text-white p-4 rounded-full shadow-2xl hover:bg-orange-600 transition-all duration-300 hover:scale-110 z-40 ${
        isAnimating ? 'animate-bounce-gentle' : ''
      } ${isVisible ? 'translate-y-0' : 'translate-y-32'}`}
      role="button"
      aria-label="Book an appointment"
      title="Book an appointment"
    >
      <Calendar className="w-6 h-6" aria-hidden="true" />
      <span className="sr-only">Book an appointment</span>
    </Link>
  );
};

export default FloatingBookButton;