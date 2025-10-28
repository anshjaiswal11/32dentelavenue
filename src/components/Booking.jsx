import React, { useState } from 'react';

export default function AppointmentBooking() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    date: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Appointment request submitted! We will contact you shortly.');
  };

  return (
    <div className="min-h-screen bg-[#f7f4f1] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[#424040] mb-4">Schedule Your Visit</h2>
          <p className="text-lg text-[#424040]/70">Experience exceptional dental care at your convenience</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start bg-white rounded-2xl shadow-xl overflow-hidden">

          {/* Left Side - Form with enhanced styling */}
          <div className="p-8 md:p-12 lg:p-16 bg-gradient-to-br from-white to-[#f7f4f1]">
            <div className="max-w-md mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-[#424040] mb-2 relative">
                Book Appointment Today!
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#88d4cb]/20 rounded-full"></div>
              </h1>
              <p className="text-[#424040] opacity-80 mb-8">
                Schedule your consultation in minutes. Our team provides precise, compassionate dental care.
              </p>

              <div className="space-y-5">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88d4cb] focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88d4cb] focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88d4cb] focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88d4cb] focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88d4cb] focus:border-transparent transition appearance-none"
                  >
                    <option value="">Choose Location</option>
                    <option value="rohini_sec5">32 Dental Avenue - Sector 5, Rohini</option>
                    <option value="rohini_other">32 Dental Avenue - Other Branch</option>
                  </select>
                </div>

                {/* Date */}
                <div>
                  <input
                    type="date"
                    name="date"
                    placeholder="dd-mm-yyyy"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88d4cb] focus:border-transparent transition"
                  />
                </div>

                {/* Submit Button */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#88d4cb] to-[#afabfd] rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <button
                    onClick={handleSubmit}
                    className="relative w-full bg-gradient-to-r from-[#88d4cb] to-[#88d4cb] text-white font-semibold py-4 rounded-lg hover:from-[#88d4cb] hover:to-[#afabfd] transform hover:scale-102 transition duration-200 shadow-xl"
                  >
                    BOOK AN APPOINTMENT
                  </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#88d4cb]/10 rounded-full blur-xl"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#afabfd]/10 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Map with enhanced styling */}
          <div className="relative p-8 md:p-12 lg:p-16 bg-gradient-to-bl from-white to-[#f7f4f1]">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#88d4cb]/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#88d4cb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#424040]">32 Dental Avenue — Sector 5, Rohini, Delhi</h3>
            </div>
            <div className="w-full h-full rounded-xl overflow-hidden border-4 border-[#88d4cb]/20 shadow-lg relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#88d4cb]/10 to-transparent pointer-events-none"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.196835329085!2d77.1092939!3d28.713663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07d8729099e1%3A0x54581905e31175cb!2s32%20Dental%20Avenue-%20Sector%205%20Rohini%2C%20Delhi!5e0!3m2!1sen!2sin!4v1761651873675!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="32 Dental Avenue - Sector 5 Rohini"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
