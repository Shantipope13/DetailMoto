import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
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

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isHomePage && !isScrolled
      ? 'bg-transparent'
      : 'bg-white shadow-lg'
  }`;

  const textColor = isHomePage && !isScrolled ? 'text-white' : 'text-primary-black';

  return (
    <header className={headerClasses} role="banner">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" aria-label="DetailMoto Home">
            <img 
              src="/image.png" 
              alt="DetailMoto Logo" 
              className="w-10 h-10 rounded-full object-cover"
              width="40"
              height="40"
            />
            <div>
              <h1 className={`text-2xl font-bold ${textColor}`}>DetailMoto</h1>
              <p className={`text-sm ${textColor} opacity-80`}>Premium Auto Care</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            <Link
              to="/"
              className={`${textColor} hover:text-primary-orange transition-colors font-medium`}
              aria-current={location.pathname === '/' ? 'page' : undefined}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`${textColor} hover:text-primary-orange transition-colors font-medium`}
              aria-current={location.pathname === '/services' ? 'page' : undefined}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`${textColor} hover:text-primary-orange transition-colors font-medium`}
              aria-current={location.pathname === '/about' ? 'page' : undefined}
            >
              About
            </Link>
            <Link
              to="/gallery"
              className={`${textColor} hover:text-primary-orange transition-colors font-medium`}
              aria-current={location.pathname === '/gallery' ? 'page' : undefined}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="bg-primary-orange text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium flex items-center space-x-2"
              aria-label="Contact us"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Contact Us</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${textColor} p-2`}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col space-y-4 px-4">
              <Link
                to="/"
                className="text-primary-black hover:text-primary-orange transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
                aria-current={location.pathname === '/' ? 'page' : undefined}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-primary-black hover:text-primary-orange transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
                aria-current={location.pathname === '/services' ? 'page' : undefined}
              >
                Services
              </Link>
              <Link
                to="/about"
                className="text-primary-black hover:text-primary-orange transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
                aria-current={location.pathname === '/about' ? 'page' : undefined}
              >
                About
              </Link>
              <Link
                to="/gallery"
                className="text-primary-black hover:text-primary-orange transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
                aria-current={location.pathname === '/gallery' ? 'page' : undefined}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="bg-primary-orange text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium flex items-center justify-center space-x-2"
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