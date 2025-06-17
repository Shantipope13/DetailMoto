import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  onDarkModeToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, onDarkModeToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isHomePage && !isScrolled
      ? 'bg-transparent'
      : 'bg-white dark:bg-gray-900'
  } ${isScrolled ? 'shadow-lg' : 'shadow-none'}`;

  const textColor = isHomePage && !isScrolled 
    ? 'text-white' 
    : 'text-primary-black dark:text-white';

  return (
    <header className={headerClasses} role="banner">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 rounded-lg p-1" 
            aria-label="DetailMoto Home"
          >
            <img 
              src="/image.png" 
              alt="DetailMoto Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
              width="40"
              height="40"
              loading="eager"
            />
            <div>
              <h1 className={`text-xl sm:text-2xl font-bold ${textColor}`}>DetailMoto</h1>
              <p className={`text-xs sm:text-sm ${textColor} opacity-80`}>Premium Auto Care</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav 
            className="hidden md:flex items-center space-x-6 lg:space-x-8" 
            aria-label="Main navigation"
          >
            <Link
              to="/"
              className={`${textColor} hover:text-primary-orange transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 rounded-lg px-2 py-1`}
              aria-current={location.pathname === '/' ? 'page' : undefined}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`${textColor} hover:text-primary-orange transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 rounded-lg px-2 py-1`}
              aria-current={location.pathname === '/services' ? 'page' : undefined}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`${textColor} hover:text-primary-orange transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 rounded-lg px-2 py-1`}
              aria-current={location.pathname === '/about' ? 'page' : undefined}
            >
              About
            </Link>
            <Link
              to="/gallery"
              className={`${textColor} hover:text-primary-orange transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 rounded-lg px-2 py-1`}
              aria-current={location.pathname === '/gallery' ? 'page' : undefined}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="bg-primary-orange text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2"
              aria-label="Contact us"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Contact Us</span>
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={onDarkModeToggle}
              className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 ${textColor}`}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Moon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            {/* Dark Mode Toggle (Mobile) */}
            <button
              onClick={onDarkModeToggle}
              className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 ${textColor}`}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Moon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${textColor} p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2`}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg rounded-lg mt-2 py-4"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col space-y-4 px-4">
              <Link
                to="/"
                className="text-primary-black dark:text-white hover:text-primary-orange transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 rounded-lg px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
                aria-current={location.pathname === '/' ? 'page' : undefined}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-primary-black dark:text-white hover:text-primary-orange transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 rounded-lg px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
                aria-current={location.pathname === '/services' ? 'page' : undefined}
              >
                Services
              </Link>
              <Link
                to="/about"
                className="text-primary-black dark:text-white hover:text-primary-orange transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 rounded-lg px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
                aria-current={location.pathname === '/about' ? 'page' : undefined}
              >
                About
              </Link>
              <Link
                to="/gallery"
                className="text-primary-black dark:text-white hover:text-primary-orange transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 rounded-lg px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
                aria-current={location.pathname === '/gallery' ? 'page' : undefined}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="bg-primary-orange text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Contact us"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Contact Us</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;