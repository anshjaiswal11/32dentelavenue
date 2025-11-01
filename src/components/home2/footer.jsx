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
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/team' },
      { name: 'Careers', path: '/careers' },
      { name: 'Contact', path: '/contact' },
    ],
    contact: {
      address: '32 Dental Avenue, Sector 5, Rohini, Delhi',
      phone: '+91 98765 XXXXX',
      email: 'care@32dentalavenue.com',
      hours: 'Mon-Sat: 10:00 AM - 8:00 PM',
    },
  };

  return (
    <footer className="bg-gradient-to-b from-[#494949] to-[#2f2f2f] text-white relative overflow-hidden">
      {/* Gradient Blur Elements */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-[#88d4cb]/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#afabfd]/20 rounded-full blur-[120px]"></div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 md:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo + About */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-[#88d4cb] to-[#afabfd] rounded-xl flex items-center justify-center font-extrabold text-xl text-white shadow-md">
                32
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">Dental Avenue</h3>
                <p className="text-xs text-white/60">Advanced Dental Care</p>
              </div>
            </div>

            <p className="text-sm text-white/70 leading-relaxed">
              At 32 Dental Avenue, we blend technology, expertise, and compassion to craft confident smiles.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-3">
              {[
                { href: "https://facebook.com", icon: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" },
                { href: "https://instagram.com", icon: "M12 2.163c3.204 0 3.584.012 4.85.07..." },
                { href: "https://twitter.com", icon: "M24 4.557c-.883.392-1.832.656-2.828..." },
              ].map((social, idx) => (
                <a key={idx} href={social.href} className="p-2 rounded-lg bg-white/10 hover:bg-gradient-to-r hover:from-[#88d4cb]/30 hover:to-[#afabfd]/30 transition-all">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#88d4cb]">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 hover:text-[#afabfd] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#88d4cb]">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 hover:text-[#afabfd] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#88d4cb]">Contact</h3>
            <div className="space-y-4 text-white/70 text-sm">
              <p>📍 {footerLinks.contact.address}</p>
              <p>📞 {footerLinks.contact.phone}</p>
              <p>✉️ {footerLinks.contact.email}</p>
              <p>⏰ {footerLinks.contact.hours}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 backdrop-blur-md bg-white/5 py-6 text-center">
        <p className="text-sm text-white/60">
          © {currentYear} 32 Dental Avenue — All rights reserved. |
          <Link to="/privacy" className="ml-2 hover:text-[#88d4cb] transition">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
