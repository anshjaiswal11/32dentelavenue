import React, { useState } from 'react';
import { Calendar, MapPin, Phone, Mail, User } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Side - Form */}
            <div className="p-8 md:p-12 lg:p-16">
              <div className="max-w-md mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  Book Appointment Today!
                </h1>
                <p className="text-gray-600 mb-8">
                  Schedule your consultation in minutes and let our experts guide you toward parenthood with care and clarity.
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
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
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
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition appearance-none"
                    >
                      <option value="">Choose Location</option>
                      <option value="waziabad">Asha IVF & Fertility Centre - Waziabad</option>
                      <option value="sector57">Asha IVF & Fertility Centre - Sector 57</option>
                      <option value="delhi">Asha IVF & Fertility Centre - Delhi</option>
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
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-pink-400 to-pink-500 text-white font-semibold py-4 rounded-lg hover:from-pink-500 hover:to-pink-600 transform hover:scale-105 transition duration-200 shadow-lg"
                  >
                    BOOK AN APPOINTMENT
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Map and Info */}
            <div className="bg-gray-100 p-8 md:p-12 lg:p-16 relative">
              <div className="h-full flex flex-col">
                {/* Location Info Card */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-6 z-10">
                  <h3 className="font-bold text-lg mb-2">Asha IVF & Fertility Centre | Best IVF...</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Plot No 2227, Sector 57 Rd, near Waziabad Road, Waziabad, Sector 57, Gurugram, Haryana 122011
                  </p>
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="text-sm text-blue-600 ml-2">5.0</span>
                    <span className="text-sm text-gray-600 ml-1">93 reviews</span>
                  </div>
                  <a href="#" className="text-blue-600 text-sm hover:underline">View larger map</a>
                </div>

                {/* Map Container */}
                <div className="flex-1 rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.0848837767844!2d77.0867!3d28.4195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI1JzEwLjIiTiA3N8KwMDUnMTIuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '400px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Asha IVF Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        {/* <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Schedule Your Consultation</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill out the form and let our expert team craft your healthy, confident smile.
          </p>
        </div> */}
      </div>
    </div>
  );
}