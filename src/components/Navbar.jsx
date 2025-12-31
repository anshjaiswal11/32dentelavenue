import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#f7f4f1] shadow-lg' : 'bg-[#f7f4f1]'
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
                <span className="text-2x1 md:text-3x2 font-extrabold text-[#8FC6B7] tracking-wide">
                  <span className="text-[#8FC6B7]"></span>&nbsp;Dental Avenue
                </span>
                <span className="text-sm text-[#424040] opacity-80">Smile design & care</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              to="/"
              className={`text-[#424040] px-3 py-2 rounded-md text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-[#f7f4f1]/80 ${location.pathname === '/' ? 'bg-[#f7f4f1]/60' : ''
                }`}
            >
              Home
            </Link>
            <div className="relative group">
              <button
                className={`flex items-center text-[#424040] px-3 py-2 rounded-md text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-[#f7f4f1]/80 ${location.pathname === '/home' ? 'bg-[#f7f4f1]/60' : ''
                  }`}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-0 w-64 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50 border border-gray-100 overflow-hidden">
                <div className="py-2">
                  <Link to="/cosmetic-dentistry" className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#f7f4f1] hover:text-[#88d4cb] transition-colors">
                    Cosmetic Dentistry
                  </Link>
                  <Link to="/teeth-alignment" className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#f7f4f1] hover:text-[#88d4cb] transition-colors">
                    Teeth Alignment
                  </Link>
                  <Link to="/wisdom-tooth-surgery" className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#f7f4f1] hover:text-[#88d4cb] transition-colors">
                    Wisdom Tooth Surgery
                  </Link>
                  <Link to="/root-canal-treatment" className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#f7f4f1] hover:text-[#88d4cb] transition-colors">
                    Root Canal Treatment
                  </Link>
                  <Link to="/dental-implants" className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#f7f4f1] hover:text-[#88d4cb] transition-colors">
                    Dental Implants
                  </Link>
                  <Link to="/oral-hygiene" className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#f7f4f1] hover:text-[#88d4cb] transition-colors">
                    Oral Hygiene & Preventive Care
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/international-clients"
              className={`text-[#424040] px-3 py-2 rounded-md text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-[#f7f4f1]/80 ${location.pathname === '/international-clients' ? 'bg-[#f7f4f1]/60' : ''
                }`}
            >
              Dental Tourism
            </Link>
            <Link
              to="/about"
              className={`text-[#424040] px-3 py-2 rounded-md text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-[#f7f4f1]/80 ${location.pathname === '/about' ? 'bg-[#f7f4f1]/60' : ''
                }`}
            >
              About Us
            </Link>
            <Link
              to="/international-2"
              className={`text-[#424040] px-3 py-2 rounded-md text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-[#f7f4f1]/80 ${location.pathname === '/international-2' ? 'bg-[#f7f4f1]/60' : ''
                }`}
            >
              Contact Us
            </Link>
            <div className="relative group">
              <button
                className={`flex items-center text-[#424040] px-3 py-2 rounded-md text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-[#f7f4f1]/80 ${location.pathname.includes('/blogs') || location.pathname.includes('/gallery') ? 'bg-[#f7f4f1]/60' : ''
                  }`}
              >
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50 border border-gray-100 overflow-hidden">
                <div className="py-2">
                  <Link to="/blogs" className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#f7f4f1] hover:text-[#88d4cb] transition-colors">
                    Blogs
                  </Link>
                  <Link to="/gallery" className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#f7f4f1] hover:text-[#88d4cb] transition-colors">
                    Gallery
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Book Appointment Button */}
          <div className="hidden md:block">
            <a
              href="#booking"
              className="bg-[#88d4cb] text-white px-6 py-2 rounded-md font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#88d4cb]/30"
            >
              Book Appointment
            </a>
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
      <div
        className={`md:hidden absolute top-16 left-0 w-full transform transition-all duration-300 ease-in-out ${isOpen
          ? 'opacity-100 translate-y-0 visible'
          : 'opacity-0 -translate-y-2 invisible'
          }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2 bg-[#f7f4f1]/95 backdrop-blur-md shadow-xl rounded-b-2xl border-t border-[#e0ddd9]">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2 rounded-md text-lg font-semibold text-[#424040] hover:bg-[#eae7e3] transition ${location.pathname === '/' ? 'bg-[#eae7e3]' : ''
              }`}
          >
            Home
          </Link>
          <button
            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-lg font-semibold text-[#424040] hover:bg-[#eae7e3] transition ${location.pathname === '/home' ? 'bg-[#eae7e3]' : ''
              }`}
          >
            Services
            <ChevronDown
              className={`h-5 w-5 transform transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''
                }`}
            />
          </button>

          {/* Mobile Services Dropdown */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
          >
            <div className="pl-6 space-y-2 pb-2">
              <Link
                to="/cosmetic-dentistry"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-[#88d4cb] transition-colors"
              >
                Cosmetic Dentistry
              </Link>
              <Link
                to="/teeth-alignment"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-[#88d4cb] transition-colors"
              >
                Teeth Alignment
              </Link>
              <Link
                to="/wisdom-tooth-surgery"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-[#88d4cb] transition-colors"
              >
                Wisdom Tooth Surgery
              </Link>
              <Link
                to="/root-canal-treatment"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-[#88d4cb] transition-colors"
              >
                Root Canal Treatment
              </Link>
              <Link
                to="/dental-implants"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-[#88d4cb] transition-colors"
              >
                Dental Implants
              </Link>
              <Link
                to="/oral-hygiene"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-[#88d4cb] transition-colors"
              >
                Oral Hygiene
              </Link>
            </div>
          </div>
          <Link
            to="/international-clients"
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2 rounded-md text-lg font-semibold text-[#424040] hover:bg-[#eae7e3] transition ${location.pathname === '/international-clients' ? 'bg-[#eae7e3]' : ''
              }`}
          >
            International Clients
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2 rounded-md text-lg font-semibold text-[#424040] hover:bg-[#eae7e3] transition ${location.pathname === '/about' ? 'bg-[#eae7e3]' : ''
              }`}
          >
            About Us
          </Link>
          <Link
            to="/international-2"
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2 rounded-md text-lg font-semibold text-[#424040] hover:bg-[#eae7e3] transition ${location.pathname === '/international-2' ? 'bg-[#eae7e3]' : ''
              }`}
          >
            Contact Us
          </Link>
          <button
            onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
            className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-lg font-semibold text-[#424040] hover:bg-[#eae7e3] transition ${location.pathname.includes('/blogs') || location.pathname.includes('/gallery') ? 'bg-[#eae7e3]' : ''
              }`}
          >
            Resources
            <ChevronDown
              className={`h-5 w-5 transform transition-transform duration-200 ${isMobileResourcesOpen ? 'rotate-180' : ''
                }`}
            />
          </button>

          {/* Mobile Resources Dropdown */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileResourcesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
          >
            <div className="pl-6 space-y-2 pb-2">
              <Link
                to="/blogs"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-[#88d4cb] transition-colors"
              >
                Blogs
              </Link>
              <Link
                to="/gallery"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-[#88d4cb] transition-colors"
              >
                Gallery
              </Link>
            </div>
          </div>

          <a
            href="#booking"
            onClick={() => setIsOpen(false)}
            className="w-full mt-3 bg-[#8FC6B7] text-white px-6 py-2.5 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-[#88d4cb]/40 text-center block"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
