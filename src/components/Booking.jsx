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
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    // Basic validation
    if (!formData.firstName || !formData.email || !formData.phone || !formData.date) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://server-32dentalavenue-kappa.vercel.app/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          location: "",
          date: "",
        });
      } else {
        const errorData = await response.json().catch(() => ({}));
        setErrorMessage(errorData.message || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch (error) {
      console.error("Booking Error:", error);
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <section id="booking" className="bg-[#8FC6B7] py-24 md:py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Main Card */}
        <div className="grid md:grid-cols-2 bg-[#f7f4f1] rounded-3xl overflow-hidden shadow-lg min-h-[500px]">

          {/* Form Side */}
          <div className="p-8 md:p-12 flex flex-col justify-center">

            {status === "success" ? (
              // Success View
              <div className="text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-[#8FC6B7]/20 rounded-full flex items-center justify-center mx-auto">
                  <Calendar className="w-10 h-10 text-[#8FC6B7]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#424040] mb-2">Booking Confirmed!</h3>
                  <p className="text-[#424040]/80">
                    Thank you for scheduling with us. We have received your request and will contact you shortly to confirm the details.
                  </p>
                </div>
                <button
                  onClick={resetForm}
                  className="px-8 py-3 bg-[#424040] text-white rounded-full font-medium hover:bg-[#8FC6B7] hover:text-[#424040] transition-all"
                >
                  Book Another
                </button>
              </div>
            ) : (
              // Form View
              <>
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
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#8FC6B7] outline-none text-gray-600 cursor-pointer"
                    >
                      <option value="">Choose Location</option>
                      <option value="rohini-sec-5">
                        Sector 5, Rohini
                      </option>
                      <option value="rohini-sec-7">
                        Sector 7, Rohini
                      </option>
                      <option value="rohini-sec-16">
                        Sector 16, Rohini
                      </option>
                    </select>
                  </div>

                  {/* Date */}
                  <Input icon={Calendar} type="date" name="date" min={new Date().toISOString().split("T")[0]} value={formData.date} onChange={handleChange} />

                  {/* Error Message */}
                  {errorMessage && (
                    <div className="text-red-500 text-sm text-center bg-red-50 p-2 rounded-lg border border-red-100">
                      {errorMessage}
                    </div>
                  )}

                  {/* Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={status === "loading"}
                    className={`w-full py-3.5 rounded-full font-medium transition-all ${status === "loading"
                      ? "bg-gray-400 cursor-not-allowed text-white"
                      : "bg-[#424040] text-white hover:bg-[#8FC6B7] hover:text-[#424040]"
                      }`}
                  >
                    {status === "loading" ? "Confirming..." : "Confirm Appointment"}
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Map */}
          <div className="h-[280px] md:h-full relative p-4 md:p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.196835329085!2d77.1092939!3d28.713663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07d8729099e1%3A0x54581905e31175cb!2s32%20Dental%20Avenue-%20Sector%205%20Rohini%2C%20Delhi!5e0!3m2!1sen!2sin!4v1761651873675!5m2!1sen!2sin"
              className="w-full h-full rounded-2xl md:rounded-none"
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
