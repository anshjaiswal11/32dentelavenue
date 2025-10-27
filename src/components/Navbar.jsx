import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-text-light/95 shadow-lg' : 'bg-text-light'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                className="h-10 w-auto"
                src="/32dentalavenue.png"
                alt="32 Dental Avenue"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              to="/"
              className={`text-neutral-white px-3 py-2 rounded-md text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-neutral-white/10 ${
                location.pathname === '/' ? 'bg-neutral-white/20' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`text-neutral-white px-3 py-2 rounded-md text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-neutral-white/10 ${
                location.pathname === '/services' ? 'bg-neutral-white/20' : ''
              }`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`text-neutral-white px-3 py-2 rounded-md text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-neutral-white/10 ${
                location.pathname === '/about' ? 'bg-neutral-white/20' : ''
              }`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`text-neutral-white px-3 py-2 rounded-md text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-neutral-white/10 ${
                location.pathname === '/contact' ? 'bg-neutral-white/20' : ''
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Book Appointment Button */}
          <div className="hidden md:block">
            <button className="bg-secondary-teal text-neutral-white px-6 py-2 rounded-md font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-secondary-teal/30">
              Book Appointment
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <div className="flex flex-col space-y-1.5">
                <span className={`h-0.5 w-6 bg-white transform transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`h-0.5 w-6 bg-white transform transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 w-6 bg-white transform transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-text-light shadow-lg">
          <Link
            to="/"
            className={`block px-3 py-2 rounded-md text-base font-medium text-neutral-white hover:bg-neutral-white/10 ${
              location.pathname === '/' ? 'bg-neutral-white/20' : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`block px-3 py-2 rounded-md text-base font-medium text-neutral-white hover:bg-neutral-white/10 ${
              location.pathname === '/services' ? 'bg-neutral-white/20' : ''
            }`}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={`block px-3 py-2 rounded-md text-base font-medium text-neutral-white hover:bg-neutral-white/10 ${
              location.pathname === '/about' ? 'bg-neutral-white/20' : ''
            }`}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`block px-3 py-2 rounded-md text-base font-medium text-neutral-white hover:bg-neutral-white/10 ${
              location.pathname === '/contact' ? 'bg-neutral-white/20' : ''
            }`}
          >
            Contact Us
          </Link>
          <button className="w-full mt-2 bg-secondary-teal text-neutral-white px-6 py-2 rounded-md font-semibold transition-all hover:shadow-lg hover:shadow-secondary-teal/30">
            Book Appointment
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
