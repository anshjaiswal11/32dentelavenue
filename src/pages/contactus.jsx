import React, { useState } from "react";
import { Calendar, Mail, Phone, MapPin, User, ArrowRight, Clock } from "lucide-react";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        location: "",
        message: "",
    });
    const [status, setStatus] = useState("idle"); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState("");

    const locations = [
        {
            id: 'sec5',
            name: 'Sector 5, Rohini',
            address: '32 Dental Avenue, Sector 5, Rohini, Delhi',
            mapUrl: 'https://share.google/Rvq1rQlyaUmwPQMLS', // Placeholder, using what was in Footer
            embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.196835329085!2d77.1092939!3d28.713663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07d8729099e1%3A0x54581905e31175cb!2s32%20Dental%20Avenue-%20Sector%205%20Rohini%2C%20Delhi!5e0!3m2!1sen!2sin!4v1761651873675!5m2!1sen!2sin"
        },
        {
            id: 'sec7',
            name: 'Sector 7, Rohini',
            address: '32 Dental Avenue, Sector 7, Rohini, Delhi',
            mapUrl: 'https://share.google/TMg5fVuGZQpdXcQEB',
            embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.8123!2d77.1!3d28.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQyJzAwLjAiTiA3N8KwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" // Generic placeholder for Sec 7 if not available
        },
        {
            id: 'sec16',
            name: 'Sector 16, Rohini',
            address: '32 Dental Avenue, Sector 16, Rohini, Delhi',
            mapUrl: 'https://share.google/JYUVIyA1uln00yyV9',
            embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.8123!2d77.1!3d28.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQyJzAwLjAiTiA3N8KwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" // Generic placeholder for Sec 16
        }
    ];

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async () => {
        if (!formData.firstName || !formData.email || !formData.phone) {
            setErrorMessage("Please fill in all required fields.");
            return;
        }

        setStatus("loading");
        setErrorMessage("");

        try {
            // Simulated API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            setStatus("success");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                location: "",
                message: "",
            });
        } catch (error) {
            console.error("Contact Error:", error);
            setStatus("error");
            setErrorMessage("Network error. Please check your connection and try again.");
        }
    };

    const resetForm = () => {
        setStatus("idle");
        setErrorMessage("");
    };

    return (
        <section className="bg-slate-50 min-h-screen pt-28 pb-20">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-[#8FC6B7]/20 text-[#2c7a6b] text-sm font-semibold mb-4 tracking-wide">
                    GET IN TOUCH
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-[#424040] mb-6 font-roboto-slab">
                    We'd Love to Hear from You
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto font-raleway leading-relaxed">
                    Whether you have a question about our services, pricing, or want to book an appointment, our team is ready to answer all your questions.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 space-y-12">

                {/* Locations Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {locations.map((loc) => (
                        <div key={loc.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
                            <div className="w-12 h-12 bg-[#8FC6B7]/10 rounded-xl flex items-center justify-center mb-6 text-[#8FC6B7] group-hover:bg-[#8FC6B7] group-hover:text-white transition-colors">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-raleway font-bold text-[#424040] mb-2">{loc.name}</h3>
                            <p className="text-gray-500 mb-6 leading-relaxed text-sm h-10">
                                {loc.address}
                            </p>
                            <a
                                href={loc.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-[#2a8775] font-semibold hover:text-[#1d5e51] transition-colors text-sm"
                            >
                                Get Directions <ArrowRight className="w-4 h-4 ml-1" />
                            </a>
                        </div>
                    ))}
                </div>

                {/* Main Contact Section */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col lg:flex-row">

                    {/* Form Area */}
                    <div className="flex-1 p-8 md:p-12 lg:p-16">
                        {status === "success" ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-500 py-12">
                                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center">
                                    <Mail className="w-10 h-10 text-green-500" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                    <p className="text-gray-500">
                                        Thank you for contacting us. We will get back to you shortly.
                                    </p>
                                </div>
                                <button
                                    onClick={resetForm}
                                    className="px-8 py-3 bg-[#424040] text-white rounded-xl font-medium hover:bg-[#8FC6B7] hover:text-[#424040] transition-colors"
                                >
                                    Send Another
                                </button>
                            </div>
                        ) : (
                            <div>
                                <h2 className="text-3xl font-bold text-[#424040] mb-8 font-roboto-slab">Send us a Message</h2>
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">First Name</label>
                                            <Input icon={User} name="firstName" placeholder="John" value={formData.firstName} onChange={handleChange} />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">Last Name</label>
                                            <Input icon={User} name="lastName" placeholder="Doe" value={formData.lastName} onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">Email Address</label>
                                            <Input icon={Mail} name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">Phone Number</label>
                                            <Input icon={Phone} name="phone" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Preferred Location</label>
                                        <div className="relative">
                                            <MapPin className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
                                            <select
                                                name="location"
                                                value={formData.location}
                                                onChange={handleChange}
                                                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#8FC6B7]/50 focus:border-[#8FC6B7] outline-none transition-all text-gray-600 appearance-none cursor-pointer"
                                            >
                                                <option value="">Select a location (Optional)</option>
                                                {locations.map(loc => (
                                                    <option key={loc.id} value={loc.id}>{loc.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Message</label>
                                        <textarea
                                            name="message"
                                            rows="4"
                                            placeholder="How can we help you?"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#8FC6B7]/50 focus:border-[#8FC6B7] outline-none transition-all resize-none"
                                        />
                                    </div>

                                    {errorMessage && (
                                        <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg border border-red-100 flex items-center">
                                            <span className="mr-2">⚠️</span> {errorMessage}
                                        </div>
                                    )}

                                    <button
                                        onClick={handleSubmit}
                                        disabled={status === "loading"}
                                        className={`w-full py-4 rounded-xl font-bold tracking-wide transition-all shadow-lg ${status === "loading"
                                            ? "bg-gray-300 cursor-not-allowed text-gray-500"
                                            : "bg-[#424040] text-white hover:bg-[#8FC6B7] hover:text-[#424040] hover:shadow-[#8FC6B7]/30"
                                            }`}
                                    >
                                        {status === "loading" ? "Sending..." : "Send Message"}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Map / Image Area */}
                    <div className="lg:w-[45%] bg-[#ecfdf5] relative min-h-[400px] lg:min-h-full">
                        <iframe
                            src={locations[0].embedSrc} // Default to Sector 5 map
                            className="w-full h-full absolute inset-0"
                            loading="lazy"
                            style={{ border: 0, filter: "grayscale(20%)" }}
                            allowFullScreen
                            title="Dental Clinic Location"
                        />
                        <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-lg">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-green-100 text-green-700 rounded-lg">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Opening Hours</p>
                                    <p className="text-sm font-medium text-gray-800">Tue - Sun: 10:00 AM - 8:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

/* Reusable Input */
const Input = ({ icon: Icon, ...props }) => (
    <div className="relative group">
        <Icon className="absolute left-4 top-3.5 text-gray-400 w-5 h-5 group-focus-within:text-[#8FC6B7] transition-colors" />
        <input
            {...props}
            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#8FC6B7]/50 focus:border-[#8FC6B7] outline-none transition-all placeholder:text-gray-400"
        />
    </div>
);
