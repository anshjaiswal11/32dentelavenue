import React, { useState } from "react";
import { Calendar, Mail, Phone, MapPin, User } from "lucide-react";

export default function AppointmentBooking() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Appointment request submitted! We will contact you shortly.");
  };

  return (
    <div className="bg-[#D9D2CC] w-full py-12 md:py-1">
      {/* Section Wrapper */}
      <div className="w-full max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#723E31] mb-3">
            Schedule Your Visit
          </h2>
          <p className="text-lg text-[#4A3B35]/80">
            Book an appointment in minutes — choose a location and date, and we'll confirm your visit.
          </p>
        </div>

        {/* Booking and Map Section */}
        <div className="grid md:grid-cols-2 w-full h-auto bg-[#F2F1EF] overflow-hidden">
          {/* Left - Booking Form */}
          <div className="flex flex-col justify-center p-10 md:p-20 bg-gradient-to-br from-[#FFFFFF]/80 to-[#D9D2CC]/60 relative">
            <div className="absolute top-12 right-16 w-40 h-40 bg-[#D9B18E]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-12 left-16 w-48 h-48 bg-[#A67564]/10 rounded-full blur-2xl"></div>

            <div className="relative z-10 max-w-lg mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-[#723E31] mb-6 flex items-center gap-2">
                🦷 Book Appointment
              </h1>
              <p className="text-[#4A3B35]/80 mb-10 leading-relaxed text-lg">
                Fill in your details and we’ll confirm your visit. Our expert dentists are ready to care for your smile!
              </p>

              <div className="space-y-7">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-5">
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 text-[#A67564]" size={22} />
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-4 bg-white border border-[#E5E5E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9B18E] text-lg transition"
                    />
                  </div>

                  <div className="relative">
                    <User className="absolute left-3 top-3.5 text-[#A67564]" size={22} />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-4 bg-white border border-[#E5E5E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9B18E] text-lg transition"
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-2 gap-5">
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 text-[#A67564]" size={22} />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-4 bg-white border border-[#E5E5E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9B18E] text-lg transition"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 text-[#A67564]" size={22} />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-4 bg-white border border-[#E5E5E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9B18E] text-lg transition"
                    />
                  </div>
                </div>

                {/* Location */}
                <div className="relative">
                  <MapPin className="absolute left-3 top-3.5 text-[#A67564]" size={22} />
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-4 bg-white border border-[#E5E5E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9B18E] text-lg appearance-none transition"
                  >
                    <option value="">Choose Location</option>
                    <option value="rohini_sec5">32 Dental Avenue - Sector 5, Rohini</option>
                    <option value="rohini_other">32 Dental Avenue - Other Branch</option>
                  </select>
                </div>

                {/* Date */}
                <div className="relative">
                  <Calendar className="absolute left-3 top-3.5 text-[#A67564]" size={22} />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-4 bg-white border border-[#E5E5E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9B18E] text-lg transition"
                  />
                </div>

                {/* Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full mt-6 bg-gradient-to-r from-[#D9B18E] to-[#A67564] text-white font-semibold py-5 rounded-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 text-lg"
                >
                  Confirm Appointment
                </button>
              </div>
            </div>
          </div>

          {/* Right - Map */}
          <div className="relative bg-[#D9D2CC] flex flex-col justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D9B18E]/20 to-[#A67564]/20 blur-3xl"></div>
            <div className="relative w-full h-[90vh] md:h-[95vh]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.196835329085!2d77.1092939!3d28.713663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07d8729099e1%3A0x54581905e31175cb!2s32%20Dental%20Avenue-%20Sector%205%20Rohini%2C%20Delhi!5e0!3m2!1sen!2sin!4v1761651873675!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
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
