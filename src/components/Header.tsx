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
    <header className={headerClasses}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/image.png" 
              alt="DetailMoto Logo" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h1 className={`text-2xl font-bold ${textColor}`}>DetailMoto</h1>
              <p className={`text-sm ${textColor} opacity-80`}>Premium Auto Care</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${textColor} hover:text-primary-orange transition-colors font-medium`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`${textColor} hover:text-primary-orange transition-colors font-medium`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`${textColor} hover:text-primary-orange transition-colors font-medium`}
            >
              About
            </Link>
            <Link
              to="/gallery"
              className={`${textColor} hover:text-primary-orange transition-colors font-medium`}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="bg-primary-orange text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${textColor} p-2`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4">
            <nav className="flex flex-col space-y-4 px-4">
              <Link
                to="/"
                className="text-primary-black hover:text-primary-orange transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-primary-black hover:text-primary-orange transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/about"
                className="text-primary-black hover:text-primary-orange transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/gallery"
                className="text-primary-black hover:text-primary-orange transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="bg-primary-orange text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium flex items-center justify-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-4 h-4" />
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