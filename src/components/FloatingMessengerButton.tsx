import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';

// Extend Window interface to include lastScrollY
declare global {
  interface Window {
    lastScrollY?: number;
  }
}

const FloatingMessengerButton: React.FC = () => {
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
    <a
      href="https://m.me/DetailMotoPh"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-24 right-6 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all duration-300 hover:scale-110 z-40 ${
        isAnimating ? 'animate-pulse' : ''
      } ${isVisible ? 'translate-y-0' : 'translate-y-32'}`}
      role="button"
      aria-label="Chat with us on Messenger"
      title="Chat with us on Messenger"
    >
      <MessageSquare className="w-6 h-6" aria-hidden="true" />
      <span className="sr-only">Chat with us on Messenger</span>
    </a>
  );
};

export default FloatingMessengerButton;