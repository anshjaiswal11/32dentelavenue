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
  scrolled ? 'bg-[#F2F1EF] shadow-md' : 'bg-[#F2F1EF]'
}`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16 md:h-20">
      <div className="flex-shrink-0">
        <Link to="/" className="flex items-center">
          <img className="h-10 w-auto md:h-14" src="/32dentalavenue.png" alt="32 Dental Avenue" />
          <span className="hidden md:inline-flex flex-col ml-3 leading-none">
            <span className="text-2xl md:text-3xl font-extrabold text-[#723E31] tracking-wide">
              Dental Avenue
            </span>
            <span className="text-sm text-[#A67564]/80">Smile Design & Care</span>
          </span>
        </Link>
      </div>

      <div className="hidden md:flex md:items-center md:space-x-8">
        {["Home","Services","About Us","Contact Us"].map((item,i)=>(
          <Link key={i}
            to={`/${item.toLowerCase().replace(" ","")}`}
            className={`text-[#723E31] px-3 py-2 rounded-md text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-[#D9D2CC]/60 ${
              location.pathname === `/${item.toLowerCase().replace(" ","")}` ? 'bg-[#D9D2CC]/80' : ''
            }`}
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="hidden md:block">
        <button className="bg-[#D9B18E] text-[#F2F1EF] px-6 py-2 rounded-md font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:bg-[#A67564]">
          Book Appointment
        </button>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="p-2 text-[#723E31] hover:bg-[#D9D2CC]/40 rounded-md">
          <div className="flex flex-col space-y-1.5">
            <span className={`h-0.5 w-6 bg-[#723E31] transform transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-[#723E31] ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-[#723E31] transform transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>
    </div>
  </div>

  {isOpen && (
    <div className="md:hidden bg-[#F2F1EF] shadow-lg px-4 py-4 space-y-2">
      {["Home","Services","About Us","Contact Us"].map((item,i)=>(
        <Link key={i} to={`/${item.toLowerCase().replace(" ","")}`} className="block text-[#723E31] px-3 py-2 rounded-md hover:bg-[#D9D2CC]/50">
          {item}
        </Link>
      ))}
      <button className="w-full bg-[#D9B18E] text-[#F2F1EF] px-6 py-2 rounded-md font-semibold hover:bg-[#A67564] transition-all">
        Book Appointment
      </button>
    </div>
  )}
</nav>
    );
}

export default Navbar;

