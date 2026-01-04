import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'General Dentistry', path: '/services/general' },
      { name: 'Cosmetic Dentistry', path: '/services/cosmetic' },
      { name: 'Dental Implants', path: '/services/implants' },
      { name: 'Orthodontics', path: '/services/orthodontics' },
      { name: 'Pediatric Dentistry', path: '/services/pediatric' },
      { name: 'Wisdom Tooth Surgery', path: '/services/wisdom' },
      { name: 'Root Canal Treatment', path: '/services/root-canal' },
      { name: 'Oral Hygiene', path: '/services/hygiene' }
    ],
    locations: [
      {
        name: 'Sector 5, Rohini',
        address: '32 Dental Avenue, Sector 5, Rohini, Delhi',
        url: 'https://share.google/Rvq1rQlyaUmwPQMLS' // Placeholder / Verify actual link format if possible, but using user provided
      },
      {
        name: 'Sector 7, Rohini',
        address: '32 Dental Avenue, Sector 7, Rohini, Delhi',
        url: 'https://share.google/TMg5fVuGZQpdXcQEB'
      },
      {
        name: 'Sector 16, Rohini',
        address: '32 Dental Avenue, Sector 16, Rohini, Delhi',
        url: 'https://share.google/JYUVIyA1uln00yyV9'
      }
    ],
    contact: {
      phone: '+91 7042129178',
      email: 'info@32dentalavenue.com',
      hours: 'Tues-Sun: 11:00 AM - 8:00 PM'
    }
  };

  return (
    <footer className="bg-[#54ad95] text-black font-bold text-sm md:text-base">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and About Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center">
                <img src="/32dentalavenue.png" alt="32 Dental Avenue" className="h-10 w-auto md:h-12" />
                <div className="hidden md:flex flex-col ml-3 leading-none">
                  <span className="text-lg md:text-xl font-extrabold text-black tracking-wide">Dental Avenue</span>
                  <span className="text-xs text-black">Advanced Dental Care</span>
                </div>
              </Link>
            </div>
            <p className="text-sm text-black leading-relaxed">
              At 32 Dental Avenue, we combine advanced technology with compassionate care to deliver exceptional dental treatments. Your smile is our priority.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/profile.php?id=61573590021088" className="p-2 rounded-lg bg-[#88d4cb] text-white hover:opacity-90 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
              </a>
              <a href="https://www.instagram.com/32dentalavenue" className="p-2 rounded-lg bg-[#88d4cb] text-white hover:opacity-90 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="https://www.youtube.com/@32dentalavenue" className="p-2 rounded-lg bg-[#88d4cb] text-white hover:opacity-90 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-black">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm text-black hover:text-[#424040] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Links - Replacing Company */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-black">Our Locations</h3>
            <ul className="space-y-4">
              {footerLinks.locations.map((loc, index) => (
                <li key={index}>
                  <a
                    href={loc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-black flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <span className="block text-sm font-medium text-black group-hover:text-[#88d4cb] transition-colors">
                          {loc.name}
                        </span>
                        <span className="block text-xs text-black mt-1 leading-tight group-hover:text-[#424040]">
                          {loc.address}
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-black">Contact</h3>
            <div className="space-y-4">
              {/* Address removed as it is now in Locations */}
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#88d4cb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${footerLinks.contact.phone}`} className="text-sm text-[#060505] hover:text-[#88d4cb] transition-colors">{footerLinks.contact.phone}</a>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#88d4cb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${footerLinks.contact.email}`} className="text-sm text-[#060505] hover:text-[#88d4cb] transition-colors">{footerLinks.contact.email}</a>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#88d4cb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <a href={`mailto:${footerLinks.contact.email}`} className="text-sm text-[#060505] hover:text-[#88d4cb] transition-colors">{footerLinks.contact.hours}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#e0ddd9]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-black">
              © {currentYear} 32 Dental Avenue. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-black hover:text-[#424040] transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-black hover:text-[#424040] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
