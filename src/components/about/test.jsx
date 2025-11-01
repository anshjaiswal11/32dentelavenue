import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Navbar Component - Modern and clean navigation
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold" style={{ color: '#88d4cb' }}>
              32 DENTAL AVENUE
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors">Services</a>
            <a href="#team" className="text-gray-700 hover:text-gray-900 transition-colors">Team</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-gray-900">Home</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
              <a href="#services" className="text-gray-700 hover:text-gray-900">Services</a>
              <a href="#team" className="text-gray-700 hover:text-gray-900">Team</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Main About Us Page Component
const AboutUsPage = () => {
  return (
    <div style={{ backgroundColor: '#f7f4f1', fontFamily: 'Railway, sans-serif', minHeight: '100vh' }}>
      {/* Removed local Navbar as it's handled by the main router */}

      {/* Hero Section - Welcome banner with patient image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Patient image */}
          <div className="order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80" 
              alt="Happy dental patient"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          {/* Welcome text */}
          <div className="order-1 md:order-2">
            <div className="text-left md:text-left">
              <h2 className="text-5xl font-bold mb-4" style={{ color: '#424040' }}>
                Journey Introduction
              </h2>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed max-w-xl">
                Begin your dental journey with compassionate care and modern dentistry — designed
                to build confident, lasting smiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* (Removed duplicate Journey Introduction section) */}

      {/* (Removed timeline cards - replaced below with redesigned Journey of Care) */}

      {/* Redesigned Journey of Care — modern, icon-led, mobile-friendly */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-extrabold mb-4 text-[#424040]">Journey of Care</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A modern approach combining expert clinicians, gentle techniques and proven outcomes —
              built around your comfort.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-[#f7f4f1] rounded-2xl shadow-md flex flex-col items-start">
              <div className="p-3 bg-white rounded-full mb-4">
                {/* Tooth / care icon */}
                <svg className="w-8 h-8 text-[#88d4cb]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C9.791 2 8 4.5 8 4.5S6.5 2 4 2c-1.5 0-2 3 0 6s2 4 4 6 1 7 4 7 2-6 4-7 3-2 4-6 0-6-1.5-6C18 2 15.5 2 12 2z" fill="#88d4cb" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2 text-[#424040]">Comfort-first Care</h4>
              <p className="text-gray-700">We prioritize gentle techniques and clear communication for anxiety-free visits.</p>
            </div>

            <div className="p-6 bg-[#f7f4f1] rounded-2xl shadow-md flex flex-col items-start">
              <div className="p-3 bg-white rounded-full mb-4">
                {/* Shield / tech icon */}
                <svg className="w-8 h-8 text-[#88d4cb]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l7 3v4c0 5-3 9-7 11-4-2-7-6-7-11V5l7-3z" fill="#88d4cb" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2 text-[#424040]">Advanced Technology</h4>
              <p className="text-gray-700">Digital imaging and modern techniques for accurate diagnosis and predictable outcomes.</p>
            </div>

            <div className="p-6 bg-[#f7f4f1] rounded-2xl shadow-md flex flex-col items-start">
              <div className="p-3 bg-white rounded-full mb-4">
                {/* Heart / trust icon */}
                <svg className="w-8 h-8 text-[#88d4cb]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21s-7-4.35-9-7.07C-1 8.5 6 3 12 8c6-5 13 0 9 5.93C19 16.65 12 21 12 21z" fill="#88d4cb" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2 text-[#424040]">Patient Trust</h4>
              <p className="text-gray-700">Compassionate, transparent care that builds long-term relationships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* (Removed Meet Our Team section and duplicate Expert Dentists block — experts are included in Why Choose below) */}

      {/* Why Choose Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text content */}
          <div>
            <h3 className="text-4xl font-bold mb-8" style={{ color: '#424040' }}>
              Why Choose Dental Avenue for Your Care?
            </h3>
            
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#afabfd' }}
                >
                  <span className="text-white text-xl">✓</span>
                </div>
                <div>
                  <h5 className="text-xl font-bold mb-2" style={{ color: '#424040' }}>Personalized Care</h5>
                  <p className="text-gray-700 leading-relaxed">
                    Every treatment plan is carefully designed to meet your individual needs and goals.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#88d4cb' }}
                >
                  <span className="text-white text-xl">✓</span>
                </div>
                <div>
                  <h5 className="text-xl font-bold mb-2" style={{ color: '#424040' }}>Advanced Technology</h5>
                  <p className="text-gray-700 leading-relaxed">
                    Utilizing the latest dental systems and techniques for fantastic, efficient, and comfortable procedures.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#ffbd59' }}
                >
                  <span className="text-white text-xl">✓</span>
                </div>
                <div>
                  <h5 className="text-xl font-bold mb-2" style={{ color: '#424040' }}>Expert Team</h5>
                  <p className="text-gray-700 leading-relaxed">
                    Our experienced professionals are dedicated to their passion and health.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start space-x-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#ff9aa2' }}
                >
                  <span className="text-white text-xl">✓</span>
                </div>
                <div>
                  <h5 className="text-xl font-bold mb-2" style={{ color: '#424040' }}>Central, Local, Nationwide</h5>
                  <p className="text-gray-700 leading-relaxed">
                    Conveniently located, spa-like environment dedicated to make your visit relaxing and anxiety-free.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor image */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80" 
              alt="Professional dentist"
              className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
            />
          </div>
        </div>

        {/* Why Choose List (updated) */}
        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#424040' }}>
            Why Choose 32 Dental Avenue?
          </h3>

          {/* Expert Dentists compact block (replaces previous first point) */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-[#ff9aa2] flex items-center justify-center text-white text-xl font-bold">
                Dr
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2" style={{ color: '#424040' }}>Expert Dentists</h4>
              <p className="text-gray-700 leading-relaxed max-w-xl">
                Our skilled team — including Dr. Ankita Sharma Gambhir (Pediatric Dentistry) and Dr. Anuj Gambhir (Prosthodontics & Implants) — bring years of specialised experience to deliver precise, compassionate care.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Patient-Centric */}
            <div>
              <h4 className="text-2xl font-bold mb-3" style={{ color: '#424040' }}>
                Patient-Centric Care
              </h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                Personalized, gentle treatments ensuring comfort, trust, and long-term oral wellness.
              </p>
            </div>

            {/* Advanced Technology */}
            <div>
              <h4 className="text-2xl font-bold mb-3" style={{ color: '#424040' }}>
                Advanced Technology
              </h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                Equipped with modern dental systems and digital precision for enhanced outcomes.
              </p>
            </div>

            {/* Comprehensive Expertise */}
            <div>
              <h4 className="text-2xl font-bold mb-3" style={{ color: '#424040' }}>
                Comprehensive Expertise
              </h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                End-to-end dental solutions, from aesthetic smile makeovers to advanced restorative treatments, all under one roof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Vision Card */}
          <div 
            className="rounded-3xl p-12 text-white shadow-2xl"
            style={{ backgroundColor: '#424040' }}
          >
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: '#ff9aa2' }}
            >
              <span className="text-3xl">👁️</span>
            </div>
            <h3 className="text-3xl font-bold mb-6">OUR VISION</h3>
            <p className="text-lg leading-relaxed">
              We envision a place where there is nurture, where even infertility is the become starting or care, and where every child s journey in achieving a healthy life starts with a smile. We aspire to be every mother of the way.
            </p>
          </div>

          {/* Commitment Card */}
          <div 
            className="rounded-3xl p-12 text-white shadow-2xl"
            style={{ backgroundColor: '#424040' }}
          >
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: '#ff9aa2' }}
            >
              <span className="text-3xl">❤️</span>
            </div>
            <h3 className="text-3xl font-bold mb-6">OUR COMMITMENT</h3>
            <p className="text-lg leading-relaxed">
              We promote skill as instrumental care with honesty and trust. We realise they provide the root strength that is required for the future of health care. Every smile is a result of becoming a promise.
            </p>
          </div>
        </div>

        {/* Mission Card - Full Width */}
        <div 
          className="rounded-3xl p-12 text-white shadow-2xl"
          style={{ backgroundColor: '#afabfd' }}
        >
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
            style={{ backgroundColor: '#ff9aa2' }}
          >
            <span className="text-3xl">🎯</span>
          </div>
          <h3 className="text-3xl font-bold mb-6">OUR MISSION</h3>
          <p className="text-lg leading-relaxed">
            Our mission is to walk hand in hand with every hopeful parent of "MOM/DAD", on your sacred journey towards building families, offering compassionate care, and we identify best-in-class success.
          </p>
        </div>
      </section>

      {/* Stories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-4xl font-bold text-center mb-16" style={{ color: '#424040' }}>
          Stories That Inspire New Beginnings
        </h3>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="mb-6">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" 
                alt="Patient testimonial"
                className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
              />
            </div>
            <p className="text-gray-700 italic mb-4 leading-relaxed">
              "After 8BC thousand miles under week paper follow ups, our 'Baby E' arrived this week!"
            </p>
            <p className="font-semibold" style={{ color: '#424040' }}>— Priya & Rahul, 2023</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="mb-6">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" 
                alt="Patient testimonial"
                className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
              />
            </div>
            <p className="text-gray-700 italic mb-4 leading-relaxed">
              "We consulted a clinic at these convenient facilities including ART IVF. The highs and struggles... We owe each to the lab staff and Dr Ankita. $1st cycle result!"
            </p>
            <p className="font-semibold" style={{ color: '#424040' }}>— Sarah & Vikram, June 2024, 2020</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="mb-6">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80" 
                alt="Patient testimonial"
                className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
              />
            </div>
            <p className="text-gray-700 italic mb-4 leading-relaxed">
              "Both IVF wants everything we need, home relative with PCOS. It changed birth in a one round – we are expecting our twins in 2 UP preprocessed cycles from here in a way – we wouldn't be reaching joy."
            </p>
            <p className="font-semibold" style={{ color: '#424040' }}>— Anjali & Amit, July 2024 , updating In.</p>
          </div>
        </div>

        {/* Stories Gallery */}
        <div className="text-center mb-12">
          <h4 className="text-3xl font-bold mb-8" style={{ color: '#424040' }}>
            Stories That Make Us Smile
          </h4>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            [Written + Video testimonials]
          </p>
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* Gallery Image 1 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-lg h-48">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80" 
              alt="Happy patient story"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Gallery Image 2 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-lg h-48">
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80" 
              alt="Patient care moment"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Gallery Image 3 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-lg h-48">
            <img 
              src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&q=80" 
              alt="Team celebration"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Gallery Image 4 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-lg h-48">
            <img 
              src="https://images.unsplash.com/photo-1609436021205-08a3a0b19cfe?w=400&q=80" 
              alt="Patient success story"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Gallery Image 5 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-lg h-48">
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80" 
              alt="Dental care excellence"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Gallery Image 6 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-lg h-48">
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80" 
              alt="Professional care"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div 
          className="rounded-3xl p-16 text-center text-white shadow-2xl"
          style={{ backgroundColor: '#88d4cb' }}
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Take the first step towards a healthier, more confident smile. Our team is here to guide you every step of the way.
          </p>
          <button 
            className="px-10 py-5 rounded-full text-xl font-semibold hover:opacity-90 transition-opacity shadow-lg"
            style={{ backgroundColor: '#424040', color: 'white' }}
          >
            Schedule Your Consultation Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="py-12 mt-20"
        style={{ backgroundColor: '#424040' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-white">
            {/* Contact Info */}
            <div>
              <h4 className="text-2xl font-bold mb-4">32 Dental Avenue</h4>
              <p className="mb-2">Sector 5, 7, 16 Rohini</p>
              <p className="mb-2">New Delhi, India</p>
              <p>Phone: +91-XXXX-XXXXXX</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:opacity-80 transition-opacity">Services</a></li>
                <li><a href="#" className="hover:opacity-80 transition-opacity">Our Team</a></li>
                <li><a href="#" className="hover:opacity-80 transition-opacity">Patient Resources</a></li>
                <li><a href="#" className="hover:opacity-80 transition-opacity">Contact Us</a></li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-xl font-bold mb-4">Office Hours</h4>
              <p className="mb-2">Monday - Saturday</p>
              <p className="mb-2">9:00 AM - 7:00 PM</p>
              <p>Sunday: By Appointment</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-white">
            <p>&copy; 2024 32 Dental Avenue. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;