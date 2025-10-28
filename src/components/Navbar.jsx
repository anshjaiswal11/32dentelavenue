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
      scrolled ? 'bg-[#f7f4f1] shadow-lg' : 'bg-[#f7f4f1]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                className="h-10 w-auto md:h-14 md:w-auto"
                src="/32dentalavenue.png"
                alt="32 Dental Avenue"
              />
              {/* Brand text - visible on md+ only */}
              <span className="hidden md:inline-flex flex-col ml-3 leading-none">
                <span className="text-2xl md:text-3xl font-extrabold text-[#424040] tracking-wide">
                  <span className="text-[#afabfd]">32</span>&nbsp;Dental Avenue
                </span>
                <span className="text-sm text-[#424040] opacity-80">Smile design & care</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              to="/"
              className={`text-[#424040] px-3 py-2 rounded-md text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-[#f7f4f1]/80 ${
                location.pathname === '/' ? 'bg-[#f7f4f1]/60' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`text-[#424040] px-3 py-2 rounded-md text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-[#f7f4f1]/80 ${
                location.pathname === '/services' ? 'bg-[#f7f4f1]/60' : ''
              }`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`text-[#424040] px-3 py-2 rounded-md text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-[#f7f4f1]/80 ${
                location.pathname === '/about' ? 'bg-[#f7f4f1]/60' : ''
              }`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`text-[#424040] px-3 py-2 rounded-md text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-[#f7f4f1]/80 ${
                location.pathname === '/contact' ? 'bg-[#f7f4f1]/60' : ''
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Book Appointment Button */}
          <div className="hidden md:block">
            <button className="bg-[#88d4cb] text-white px-6 py-2 rounded-md font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#88d4cb]/30">
              Book Appointment
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#424040] hover:bg-[#f7f4f1]/80 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <div className="flex flex-col space-y-1.5">
                <span className={`h-0.5 w-6 bg-[#424040] transform transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`h-0.5 w-6 bg-[#424040] transform transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 w-6 bg-[#424040] transform transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-[#f7f4f1] shadow-lg">
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
          <button className="w-full mt-2 bg-[#88d4cb] text-white px-6 py-2 rounded-md font-semibold transition-all hover:shadow-lg hover:shadow-[#88d4cb]/30">
            Book Appointment
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
