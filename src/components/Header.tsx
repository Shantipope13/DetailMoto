import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Sun, Moon, MessageSquare, Search, ChevronDown, Facebook, Instagram } from 'lucide-react';
import { Testimonials } from "@/components/ui/testimonials";

interface HeaderProps {
  isDarkMode: boolean;
  onDarkModeToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, onDarkModeToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsServicesDropdownOpen(false);
        setIsSearchOpen(false);
        setIsMenuOpen(false);
      }
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        setIsSearchOpen(true);
        setTimeout(() => searchRef.current?.focus(), 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyPress);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Always use white background, shadow, and dark text for the header
  const headerClasses = 'fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-100';
  const textColor = 'text-primary-black';

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const isOpen = hours >= 9 && hours < 18;
    return { isOpen, hours };
  };

  const serviceItems = [
    { name: 'Motorcycle Detailing', path: '/services/motorcycle-detailing', description: 'Complete motorcycle cleaning & detailing' },
    { name: 'Ceramic Coating', path: '/services/ceramic-coating', description: 'Long-lasting paint protection' },
    { name: 'Paint Protection Film', path: '/services/paint-protection-film', description: 'Ultimate paint protection' },
    { name: 'All Services', path: '/services', description: 'View all our services' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality here
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const { isOpen } = getCurrentTime();

  return (
    <>
      <header className={`${headerClasses} ${showAnnouncement ? 'top-0' : 'top-0'}`} role="banner">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 rounded-lg p-1 group" 
              aria-label="DetailMoto Home"
            >
              <div className="relative">
                <img 
                  src="/image.png" 
                  alt="DetailMoto Logo" 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover transition-transform group-hover:scale-110 shadow-lg"
                  width="48"
                  height="48"
                  loading="eager"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-orange to-orange-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>
              <div>
                <h1 className={`text-xl sm:text-2xl font-bold ${textColor} group-hover:text-primary-orange transition-colors`}>DetailMoto</h1>
                <p className={`text-xs sm:text-sm ${textColor} opacity-80 group-hover:opacity-100 transition-opacity`}>Premium Auto Care</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav 
              className="hidden lg:flex items-center space-x-6 xl:space-x-8" 
              aria-label="Main navigation"
            >
              <Link
                to="/"
                className={`${textColor} hover:text-primary-orange transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 rounded-lg px-3 py-2 relative group`}
                aria-current={location.pathname === '/' ? 'page' : undefined}
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-orange transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  className={`${textColor} hover:text-primary-orange transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 rounded-lg px-3 py-2 flex items-center space-x-1 relative group`}
                  aria-expanded={isServicesDropdownOpen ? 'true' : 'false'}
                  aria-haspopup="true"
                  title="Toggle services dropdown"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-orange transition-all duration-300 group-hover:w-full"></span>
                </button>
                
                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex flex-col px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-inset"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        <span className="font-medium">{item.name}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.description}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link
                to="/about"
                className={`${textColor} hover:text-primary-orange transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 rounded-lg px-3 py-2 relative group`}
                aria-current={location.pathname === '/about' ? 'page' : undefined}
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-orange transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/gallery"
                className={`${textColor} hover:text-primary-orange transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 rounded-lg px-3 py-2 relative group`}
                aria-current={location.pathname === '/gallery' ? 'page' : undefined}
              >
                Gallery
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-orange transition-all duration-300 group-hover:w-full"></span>
              </Link>
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`${textColor} hover:text-primary-orange transition-colors p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2`}
                aria-label="Search services"
                title="Search (Ctrl+K)"
              >
                <Search className="w-5 h-5" />
              </button>
              
              {/* Contact Info */}
              <div className="flex items-center space-x-4 border-l border-gray-300 dark:border-gray-600 pl-4">
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <span className={`text-sm ${textColor}`}>{isOpen ? 'Open' : 'Closed'}</span>
                </div>
                <a
                  href="tel:09563579715"
                  className={`${textColor} hover:text-primary-orange transition-colors font-medium flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 rounded-lg px-2 py-1`}
                  aria-label="Call DetailMoto"
                >
                  <Phone className="w-4 h-4" />
                  <span className="hidden xl:inline">0956 357 9715</span>
                </a>
              </div>
              
              {/* Social Media Links */}
              <div className="flex items-center space-x-2">
                <a
                  href="https://www.facebook.com/DetailMotoPh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${textColor} hover:text-primary-orange transition-colors p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2`}
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com/detailmotoph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${textColor} hover:text-primary-orange transition-colors p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2`}
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
              
              <a
                href="https://m.me/DetailMotoPh"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary-orange to-orange-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-medium flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                aria-label="Book via Messenger"
              >
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
                <span>Book Now</span>
              </a>

              {/* Dark Mode Toggle */}
              <button
                onClick={onDarkModeToggle}
                className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 ${textColor} hover:text-primary-orange transition-colors`}
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
            <div className="flex items-center space-x-2 lg:hidden">
              {/* One-tap calling for mobile */}
              <a
                href="tel:09563579715"
                className={`${textColor} hover:text-primary-orange transition-colors p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2`}
                aria-label="Call DetailMoto"
              >
                <Phone className="w-5 h-5" />
              </a>
              
              {/* Dark Mode Toggle (Mobile) */}
              <button
                onClick={onDarkModeToggle}
                className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 ${textColor} hover:text-primary-orange transition-colors`}
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
                className={`${textColor} p-2 rounded-lg hover:bg-gray-100/20 dark:hover:bg-gray-800/20 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 transition-colors`}
                aria-expanded={isMenuOpen ? 'true' : 'false'}
                aria-controls="mobile-menu"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                title={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
              </button>
            </div>
          </div>

          {/* Search Overlay */}
          {isSearchOpen && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-lg mx-4" ref={searchRef}>
                <form onSubmit={handleSearch} className="p-4">
                  <div className="flex items-center space-x-3">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search services, gallery, or content..."
                      className="flex-1 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none text-lg"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setIsSearchOpen(false)}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                      title="Close search"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    <p>Press <kbd className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">Enter</kbd> to search or <kbd className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">Esc</kbd> to close</p>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Mobile Navigation - Slide-out Drawer */}
          {isMenuOpen && (
            <>
              <div 
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setIsMenuOpen(false)}
              ></div>
              <div 
                id="mobile-menu"
                ref={mobileMenuRef}
                className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden"
                role="navigation"
                aria-label="Mobile navigation"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-3">
                      <img src="/image.png" alt="DetailMoto" className="w-8 h-8 rounded-full" />
                      <span className="text-xl font-bold text-primary-black dark:text-white">DetailMoto</span>
                    </div>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-2"
                      title="Close menu"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <nav className="space-y-6">
                    <Link
                      to="/"
                      className="block text-primary-black dark:text-white hover:text-primary-orange transition-colors font-medium text-lg focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 rounded-lg px-3 py-2"
                      onClick={() => setIsMenuOpen(false)}
                      aria-current={location.pathname === '/' ? 'page' : undefined}
                    >
                      Home
                    </Link>
                    
                    <div className="space-y-3">
                      <span className="block text-primary-black dark:text-white font-medium text-lg px-3 py-2">Services</span>
                      <div className="pl-6 space-y-2">
                        {serviceItems.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="block text-gray-600 dark:text-gray-400 hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 rounded-lg px-3 py-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    <Link
                      to="/about"
                      className="block text-primary-black dark:text-white hover:text-primary-orange transition-colors font-medium text-lg focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 rounded-lg px-3 py-2"
                      onClick={() => setIsMenuOpen(false)}
                      aria-current={location.pathname === '/about' ? 'page' : undefined}
                    >
                      About
                    </Link>
                    <Link
                      to="/gallery"
                      className="block text-primary-black dark:text-white hover:text-primary-orange transition-colors font-medium text-lg focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 rounded-lg px-3 py-2"
                      onClick={() => setIsMenuOpen(false)}
                      aria-current={location.pathname === '/gallery' ? 'page' : undefined}
                    >
                      Gallery
                    </Link>
                    
                    <div className="pt-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
                      <div className="flex items-center space-x-3 px-3">
                        <div className={`w-3 h-3 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        <span className="text-gray-600 dark:text-gray-400">
                          {isOpen ? 'Open now' : 'Closed'} • 9AM - 6PM
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-4 px-3">
                        <a
                          href="https://www.facebook.com/DetailMotoPh"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-primary-orange transition-colors"
                        >
                          <Facebook className="w-5 h-5" />
                        </a>
                        <a
                          href="https://instagram.com/detailmotoph"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-primary-orange transition-colors"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                        <a
                          href="tel:09563579715"
                          className="text-gray-600 dark:text-gray-400 hover:text-primary-orange transition-colors flex items-center space-x-2"
                        >
                          <Phone className="w-4 h-4" />
                          <span>0956 357 9715</span>
                        </a>
                      </div>
                      
                      <a
                        href="https://m.me/DetailMotoPh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-primary-orange to-orange-600 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-medium flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 shadow-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Book via Messenger</span>
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </>
          )}
        </div>
      </header>
      {/* Announcement Banner BELOW header */}
      {showAnnouncement && (
        <div className="w-full bg-gradient-to-r from-primary-orange to-orange-600 text-white py-2 px-4 text-sm text-center shadow z-40">
          <div className="flex items-center justify-center space-x-2">
            <span>🎉 Special Offer: 20% off on all ceramic coating services this month!</span>
            <button 
              onClick={() => setShowAnnouncement(false)}
              className="ml-4 text-white hover:text-gray-200 focus:outline-none"
              aria-label="Close announcement"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
      <Testimonials />
    </>
  );
};

export default Header;