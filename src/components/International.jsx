import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
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
    ChevronUp,
    ArrowRight,
    Sparkles,
    Building2
} from 'lucide-react';
import Testimonials from './newtest';
import AppointmentBooking from './Booking';
// Images used in AboutSection (reused here for consistent layout)
import mainImage from '../assets/images/aboutpng2.jpg';
import secondaryImage from '../assets/images/Aboutimg1.jpg';
// Doctor image for CTA
import doctorImg from '../assets/images/hero-setcion.png';
import heroimage from '../assets/slides_home/slides3.jpg';
import image01 from '../assets/newimg/IMG_83711.jpg';
import image02 from '../assets/newimg/IMG_81192.jpg';
import image03 from '../assets/newimg/IMG_83699.jpg';
import image04 from '../assets/newimg/IMG_83900.jpg';

// Helper Icon Component for User
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
            <Helmet>
                <title>Dental Treatment for International Clients in Rohini</title>
                <meta name="description" content="International clients choose 32 Dental Avenue in Rohini for advanced dental treatments, seamless coordination & global patient support. Contact us!" />
                <link rel="canonical" href="https://www.32dentalavenue.in/international-clients" />
            </Helmet>
            {/* Hero Section */}
            <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <img
                    src={heroimage}
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
                    <a href="#booking" className="bg-[#88d4cb] text-white px-8 py-4 rounded-full text-lg font-raleway hover:bg-[#7bc0b8] transition-all transform hover:scale-105 shadow-lg font-raleway inline-block">
                        Schedule Consultation
                    </a>
                </div>
            </div>

            {/* Stats Section - Colorful Cards */}
            <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-30">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                            <h3 className="text-3xl md:text-4xl font-extrabold mb-1" style={{ color: stat.color }}>{stat.number}</h3>
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
                                <h2 className="text-4xl font-bold text-[#8FC6B7] mt-2 leading-tight font-roboto-slab">Why Choose 32 Dental Avenue?</h2>
                                <p className="text-lg text-gray-600 max-w-3xl mt-3 font-raleway">
                                    Choosing the right clinic is the most important step of your dental tourism journey. We ensure every international patient receives world-class care.
                                </p>
                            </div>

                            <div className="grid gap-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex gap-4 p-4 rounded-2xl hover:bg-[#f7f4f1] transition-colors duration-300">
                                        <div className="flex-shrink-0 mt-1">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#424040] mb-0">{feature.title}</h3>
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
            <Testimonials />
            <section className="relative py-24 bg-gradient-to-br from-[#EAF7F4] to-[#f7f4f1] overflow-hidden">
                {/* Soft background blobs */}
                <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#88d4cb]/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#8FC6B7]/20 rounded-full blur-3xl"></div>

                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-14 items-center">

                        {/* Content */}
                        <div className="max-w-xl">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[#88d4cb]/10 text-[#2b6f6a] text-sm font-semibold">
                                <Sparkles className="w-4 h-4" />
                                World-Class Specialists
                            </div>

                            <h2 className="text-4xl sm:text-5xl font-bold text-[#1f2933] leading-tight mb-6 font-roboto-slab">
                                Meet the Leading <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5bbfb2] to-[#88d4cb] font-roboto-slab">
                                    Dental Experts
                                </span>
                            </h2>

                            <p className="text-gray-600 text-lg leading-relaxed mb-10 font-raleway">
                                Behind every confident smile is a team that genuinely cares. Our highly skilled dentists, implant specialists, and cosmetic experts ensure you receive world-class treatment.
                            </p>

                            <a href="#booking" className="group inline-flex items-center gap-3 bg-[#1f2933] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-[#88d4cb] hover:text-[#1f2933] hover:shadow-xl font-roboto-slab">
                                Book a Consultation
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>

                        {/* Image */}
                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src={doctorImg}
                                    alt="Dr. at 32 Dental Avenue"
                                    className="w-full h-[500px] object-cover object-top transition-transform duration-700 hover:scale-105"
                                    loading="lazy"
                                />
                            </div>

                            {/* Floating card */}
                            <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg">
                                <p className="text-sm font-semibold text-gray-800">
                                    ⭐ Top Rated Clinic
                                </p>
                                <p className="text-xs text-gray-500">
                                    International Standards
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* Value Propositions */}
            <div className="bg-[#8FC6B7] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                            <CheckCircle className="w-12 h-12 text-[#88d4cb] mx-auto mb-3" />
                            <h3 className="text-xl font-bold text-[#424040] mb-1 font-roboto-slab">No Hidden Costs</h3>
                            <p className="text-gray-600 font-raleway">Upfront, transparent pricing with detailed written estimates shared before you begin your dental tourism journey.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                            <Smile className="w-12 h-12 text-[#88d4cb] mx-auto mb-3" />
                            <h3 className="text-xl font-bold text-[#424040] mb-1 font-roboto-slab">All-Inclusive Plans</h3>
                            <p className="text-gray-600 font-raleway">Comprehensive packages covering consultations, procedures, digital scans, crowns/veneers, and essential clinical requirements.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                            <Clock className="w-12 h-12 text-[#88d4cb] mx-auto mb-3" />
                            <h3 className="text-xl font-bold text-[#424040] mb-1 font-roboto-slab">Fast Solutions</h3>
                            <p className="text-gray-600 font-raleway">Save both time and money with quick turnaround treatments, same-day procedures, and efficient planning tailored to your schedule.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Process Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#8FC6B7] mb-4 font-roboto-slab">Your Hassle-Free Journey</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto font-raleway">
                            From your first virtual consultation to your final smile transformation, we guide, support, and care for you at every step.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {processSteps.map((step, index) => (
                            <div key={index} className="relative p-6 border border-gray-100 rounded-2xl hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 bg-[#f7f4f1] rounded-full flex items-center justify-center text-[#88d4cb] mb-2">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#424040] mb-1 font-roboto-slab">{step.title}</h3>
                                <p className="text-gray-600 font-raleway">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Banner */}
            {/* Experts Section (Styled like CTASection) */}

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-bg">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <img src={image01} alt="Facility 1" className="rounded-2xl shadow-lg w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500" />
                                    <img src={image02} alt="Facility 2" className="rounded-2xl shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="pt-8 space-y-4">
                                    <img src={image03} alt="Facility 3" className="rounded-2xl shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500" />
                                    <img src={image04} alt="Facility 4" className="rounded-2xl shadow-lg w-full h-40 object-cover transform hover:scale-105 transition-transform duration-500" />
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-black font-roboto-slab text-sm flex items-center gap-2 font-roboto-slab uppercase mb-2">
                                <span className="w-2 h-2 bg-black rounded-full"></span>
                                OUR FACILITY
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#8FC6B7] mb-6 font-roboto-slab">
                                State-of-the-Art Dental Care at 32 Dental Avenue
                            </h2>
                            <p className="text-text-light mb-8 font-raleway">
                                Behind every beautiful, healthy smile is a clinic built with advanced technology, modern equipment, and a patient-first approach. Our facility ensures precision, comfort, and consistently high-quality dental outcomes.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-white p-3 rounded-lg shadow-sm mr-4 text-secondary-teal">
                                        <Building2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-text-charcoal mb-1 font-roboto-slab">Advanced Dental Technology</h4>
                                        <p className="text-text-light text-sm font-raleway">We use the latest dental innovations, including digital scanners, high-resolution X-rays, and CAD/CAM systems, to deliver accurate diagnoses and painless, precise treatments for every patient.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-white p-3 rounded-lg shadow-sm mr-4 text-secondary-teal">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-text-charcoal mb-1 font-roboto-slab">Digital Smile Design (DSD)</h4>
                                        <p className="text-text-light text-sm font-raleway">Our Digital Smile Design setup allows us to map and preview your smile digitally, offering predictable results, customized planning, and a clear vision of your final transformation before treatment begins.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-white p-3 rounded-lg shadow-sm mr-4 text-secondary-teal">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-text-charcoal mb-1 font-roboto-slab">Sterilization & Safety Protocols</h4>
                                        <p className="text-text-light text-sm font-raleway">Our clinic follows strict international sterilization standards using Class-B autoclaves and advanced infection control systems to ensure safe, hygienic, and worry-free dental care for all.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <AppointmentBooking />

            {/* Dental Tourism Section */}
            <div className="py-20 bg-[#f9f9f9]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#8FC6B7] mb-6 font-roboto-slab">
                        Dental Tourism in India
                    </h2>
                    <div className="space-y-4 text-gray-600 text-lg leading-relaxed font-raleway">
                        <p>
                            India has emerged as a preferred destination for dental tourism, offering world-class dental care at significantly affordable costs. Patients from across the globe choose India for its advanced technology, skilled specialists, and internationally followed treatment standards.
                        </p>
                        <p>
                            At 32 Dental Avenue, international patients receive personalized dental solutions ranging from cosmetic dentistry to advanced restorative treatments. With transparent pricing, modern facilities, and a patient-first approach, we ensure a smooth, comfortable, and trusted dental tourism experience in India.
                        </p>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-[#8FC6B7] text-center mb-12 font-roboto-slab">Frequently Asked Questions</h2>
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



export default International;
