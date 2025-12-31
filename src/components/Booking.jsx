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

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    alert("Appointment request submitted! We will contact you shortly.");
  };

  return (
    <section id="booking" className="bg-[#8FC6B7] py-25 md:py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        {/* <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#424040]">
            Schedule Your Visit
          </h2>
          <p className="text-[#424040]/80 mt-2 text-base md:text-lg">
            Book your dental appointment in just a few steps
          </p>
        </div> */}

        {/* Main Card */}
        <div className="grid md:grid-cols-2 bg-[#f7f4f1] rounded-3xl overflow-hidden shadow-lg">

          {/* Form */}
          <div className="p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#424040] mb-6 font-['Raleway']">
              Book Appointment
            </h3>

            <div className="space-y-5">

              {/* Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input icon={User} name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                <Input icon={User} name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
              </div>

              {/* Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input icon={Mail} name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <Input icon={Phone} name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
              </div>

              {/* Location */}
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-[#8FC6B7]" />
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#8FC6B7] outline-none"
                >
                  <option value="">Choose Location</option>
                  <option value="rohini">
                    Sector 5, Rohini
                  </option>
                </select>
              </div>

              {/* Date */}
              <Input icon={Calendar} type="date" name="date" value={formData.date} onChange={handleChange} />

              {/* Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-[#424040] text-white py-3.5 rounded-full font-medium hover:bg-[#8FC6B7] hover:text-[#424040] transition-all"
              >
                Confirm Appointment
              </button>
            </div>
          </div>

          {/* Map */}
          <div className="h-[280px] md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.196835329085!2d77.1092939!3d28.713663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07d8729099e1%3A0x54581905e31175cb!2s32%20Dental%20Avenue-%20Sector%205%20Rohini%2C%20Delhi!5e0!3m2!1sen!2sin!4v1761651873675!5m2!1sen!2sin"
              className="w-full h-full"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
              title="Dental Clinic Location"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

/* Reusable Input */
const Input = ({ icon: Icon, ...props }) => (
  <div className="relative">
    <Icon className="absolute left-3 top-3 text-[#8FC6B7]" />
    <input
      {...props}
      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#8FC6B7] outline-none"
    />
  </div>
);
