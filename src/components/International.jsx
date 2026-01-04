import React, { useState } from 'react';
import {
    Plane,
    Calendar,
    Hotel,
    Stethoscope,
    Clock,
    CheckCircle,
    Globe,
    ShieldCheck,
    Smile,
    ChevronDown,
    ChevronUp
} from 'lucide-react';
import Testimonials from './Testimonals';
import AppointmentBooking from './Booking';
// Images used in AboutSection (reused here for consistent layout)
import mainImage from '../assets/images/aboutpng2.jpg';
import secondaryImage from '../assets/images/Aboutimg1.jpg';
// Doctor image for CTA
import doctorImg from '../assets/images/drAnkitaImage.jpg';

const International = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const stats = [
        { number: "10,000+", label: "Smiles Transformed", color: "#afabfd" },
        { number: "1,000+", label: "Successful Implants", color: "#88d4cb" },
        { number: "85,000+", label: "Aesthetic Crowns Crafted", color: "#ffbd59" },
        { number: "10+", label: "Years of Dental Excellence", color: "#FF9AA2" }
    ];

    const features = [
        {
            title: "Affordable Premium Dental Treatment",
            description: "World-class dental treatment in India delivering exceptional quality at significantly lower costs than the US, UK, Europe, or Australia. Enjoy advanced implant dentistry, smile makeovers, and more without the high price tag.",
            icon: <Globe className="w-8 h-8 text-[#88d4cb]" />
        },
        {
            title: "Advanced Technology & Specialists",
            description: "State-of-the-art equipment, digital smile design, 3D scanning, and CAD/CAM technology. Internationally trained experts ensure treatment meets global dental standards.",
            icon: <Stethoscope className="w-8 h-8 text-[#88d4cb]" />
        },
        {
            title: "Hassle-Free Support",
            description: "Complete dental tourism experience from virtual consultations and cost estimates to travel coordination and appointment planning.",
            icon: <Plane className="w-8 h-8 text-[#88d4cb]" />
        },
        {
            title: "Fast, Efficient Care",
            description: "Designed for short travel timelines. Same-day dentistry options, quick veneer fabrication, and coordinated treatment sessions.",
            icon: <Clock className="w-8 h-8 text-[#88d4cb]" />
        }
    ];

    const processSteps = [
        {
            title: "Connect with Us",
            description: "Start with an online consultation. Our specialists review your concerns and scans to create a personalized plan.",
            icon: <Globe className="w-6 h-6" />
        },
        {
            title: "Accommodation Support",
            description: "Assistance with hotel recommendations near the clinic suitable for different budgets.",
            icon: <Hotel className="w-6 h-6" />
        },
        {
            title: "Meet Your Specialists",
            description: "Clinic tour and meeting with your dental specialists upon arrival.",
            icon: <UserIcon className="w-6 h-6" />
        },
        {
            title: "Tailored Treatment",
            description: "Custom treatment roadmap with priority appointments and minimal downtime.",
            icon: <Stethoscope className="w-6 h-6" />
        },
        {
            title: "Support Beyond Treatment",
            description: "Post-treatment guidance, healing check-ins, and virtual follow-ups.",
            icon: <ShieldCheck className="w-6 h-6" />
        }
    ];

    const faqs = [
        {
            question: "Is India a good place for dental treatment for international patients?",
            answer: "Yes. India is a top destination for high-quality, affordable dental treatment. International patients choose India for advanced technology, experienced dentists, excellent results, and significantly lower costs compared to the US, UK, Europe, and Australia."
        },
        {
            question: "Why should I choose 32 Dental Avenue for dental tourism in India?",
            answer: "32 Dental Avenue offers world-class technology, globally trained specialists, transparent pricing, and complete travel-to-treatment support. We ensure international patients enjoy a smooth, safe, and comfortable dental tourism experience."
        },
        {
            question: "How long do I need to stay in India for dental treatment?",
            answer: "Treatment duration varies. Simple procedures need 1–2 days; veneers and crowns require 5–7 days. Implants need 7–10 days initially, with a second visit after 3–6 months. We provide a tailored travel timeline beforehand."
        },
        {
            question: "Is dental treatment in India safe and hygienic for foreign patients?",
            answer: "Yes. Reputable clinics like 32 Dental Avenue follow strict international sterilization protocols, use advanced equipment, and maintain high hygiene standards."
        },
        {
            question: "How much can I save by choosing dental tourism in India?",
            answer: "International patients typically save 50–70% on dental treatments compared to Western countries. Even after including travel and accommodation, India remains far more affordable while offering world-class quality."
        },
        {
            question: "Do you offer virtual consultations before I travel to India?",
            answer: "Yes. We provide detailed online consultations to review your scans, concerns, and goals. This helps us share accurate treatment timelines and cost estimates so you can confidently plan your trip."
        }
    ];

    return (
        <div className="bg-white min-h-screen pt-20">
            {/* Hero Section */}
            <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
                    alt="Dental Tourism India"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 font-roboto-slab">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg font-roboto-slab">
                        Your Trusted Dental Partner in India
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl drop-shadow-md font-raleway">
                        Enjoy Smooth, Stress-Free Dental Care in India with 32 Dental Avenue
                    </p>
                    <button className="bg-[#88d4cb] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#7bc0b8] transition-all transform hover:scale-105 shadow-lg font-roboto-slab">
                        Schedule Consultation
                    </button>
                </div>
            </div>

            {/* Stats Section - Colorful Cards */}
            <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-30">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                            <h3 className="text-3xl md:text-4xl font-extrabold mb-2" style={{ color: stat.color }}>{stat.number}</h3>
                            <p className="text-gray-600 font-medium text-sm md:text-base font-raleway">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Choose Us - Split Layout with Images */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Column: Content */}
                        <div className="flex flex-col gap-8">
                            <div>
                                {/* <span className="text-[#88d4cb] font-bold uppercase tracking-wider text-sm">WHY CHOOSE US</span> */}
                                <h2 className="text-4xl font-bold text-[#424040] mt-2 leading-tight font-roboto-slab">Why Choose 32 Dental Avenue?</h2>
                                <p className="text-lg text-gray-600 max-w-3xl mt-6 font-raleway">
                                    Choosing the right clinic is the most important step of your dental tourism journey. We ensure every international patient receives world-class care.
                                </p>
                            </div>

                            <div className="grid gap-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex gap-6 p-6 rounded-2xl hover:bg-[#f7f4f1] transition-colors duration-300">
                                        <div className="flex-shrink-0 mt-1">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#424040] mb-3">{feature.title}</h3>
                                            <p className="text-gray-600 leading-relaxed font-raleway">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Large Image Layout (from International2) */}
                        <div className="relative h-[600px] w-full hidden lg:block">
                            {/* Main Image */}
                            <div className="absolute top-0 right-0 w-[95%] h-[120%] rounded-[2rem] overflow-hidden shadow-2xl z-10">
                                <img
                                    src={mainImage}
                                    alt="Modern Dental Clinic"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Secondary Image */}
                            {/* <div className="absolute bottom-0 left-20 w-[60%] h-[60%] rounded-[2rem] overflow-hidden shadow-2xl z-20 border-8 border-[#f7f4f1]">
                                <img
                                    src={secondaryImage}
                                    alt="Dentist Consultation"
                                    className="w-full h-full object-cover"
                                />
                            </div> */}
                            {/* Decorative Circles */}
                            <div className="absolute top-10 left-10 w-32 h-32 bg-[#ffbd59] rounded-full blur-3xl opacity-20 z-0"></div>
                            <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#afabfd] rounded-full blur-3xl opacity-20 z-0"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Propositions */}
            <div className="bg-[#8FC6B7] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                            <CheckCircle className="w-12 h-12 text-[#88d4cb] mx-auto mb-6" />
                            <h3 className="text-xl font-bold text-[#424040] mb-4 font-roboto-slab">No Hidden Costs</h3>
                            <p className="text-gray-600 font-raleway">Upfront, transparent pricing with detailed written estimates shared before you begin your dental tourism journey.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                            <Smile className="w-12 h-12 text-[#88d4cb] mx-auto mb-6" />
                            <h3 className="text-xl font-bold text-[#424040] mb-4 font-roboto-slab">All-Inclusive Plans</h3>
                            <p className="text-gray-600 font-raleway">Comprehensive packages covering consultations, procedures, digital scans, crowns/veneers, and essential clinical requirements.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                            <Clock className="w-12 h-12 text-[#88d4cb] mx-auto mb-6" />
                            <h3 className="text-xl font-bold text-[#424040] mb-4 font-roboto-slab">Fast Solutions</h3>
                            <p className="text-gray-600 font-raleway">Save both time and money with quick turnaround treatments, same-day procedures, and efficient planning tailored to your schedule.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Process Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#424040] mb-4 font-roboto-slab">Your Hassle-Free Journey</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto font-raleway">
                            From your first virtual consultation to your final smile transformation, we guide, support, and care for you at every step.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className="relative p-6 border border-gray-100 rounded-2xl hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 bg-[#f7f4f1] rounded-full flex items-center justify-center text-[#88d4cb] mb-4">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#424040] mb-3 font-roboto-slab">{step.title}</h3>
                                <p className="text-gray-600 font-raleway">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Banner */}
            <div className="bg-gradient-to-br from-[#8FC6B7] to-[#7ab5a5] py-20 text-white relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-left space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight font-roboto-slab">
                                Meet the Leading Dental Experts
                            </h2>

                            <p className="text-lg text-white/90 leading-relaxed font-raleway">
                                Behind every confident smile is a team that genuinely cares. Our highly skilled dentists, implant specialists, and cosmetic experts ensure you receive world-class treatment.
                            </p>

                            <button className="bg-white text-[#8FC6B7] px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-4">
                                Book a Consultation
                            </button>
                        </div>

                        {/* Right Image Section */}
                        <div className="relative">
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 ">
                                <div className="aspect-square bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center relative overflow-hidden">
                                    {/* Decorative elements */}
                                    {/* <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-48 h-48  rounded-full absolute top-8 right-8"></div>
                                        <div className="w-32 h-32  rounded-full absolute bottom-12 left-12"></div>
                                    </div> */}

                                    {/* Doctor image */}
                                    <div className="relative z-10 text-center">
                                        <img src={doctorImg} alt="Dr. at 32 Dental Avenue" className="mx-auto w-180 md:w-100 rounded-2xl object-cover" />
                                    </div>
                                </div>

                                {/* Floating badge */}
                                {/* <div className="absolute -bottom-4 -right-4 bg-white text-[#8FC6B7] px-6 py-3 rounded-full shadow-xl font-semibold text-sm">
                                    Trusted Experts
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <Testimonials />
            <AppointmentBooking />

            {/* FAQ Section */}
            <div className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-[#424040] text-center mb-12 font-roboto-slab">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                                <button
                                    className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span className="font-semibold text-[#424040] text-lg font-roboto-slab">{faq.question}</span>
                                    {openFaq === index ? (
                                        <ChevronUp className="w-5 h-5 text-[#88d4cb]" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-[#88d4cb]" />
                                    )}
                                </button>
                                <div
                                    className={`px-6 bg-gray-50 text-gray-600 transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-48 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
                                        }`}
                                >
                                    {faq.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Booking Section */}

        </div>
    );
};

// Helper Icon Component for User (since User is imported but used as UserIcon in map to avoid conflict if any)
const UserIcon = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

export default International;
