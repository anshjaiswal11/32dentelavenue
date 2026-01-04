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
    ChevronUp,
    MapPin,
    Star,
    Users
} from 'lucide-react';
import Testimonials from './Testimonals';
import AppointmentBooking from './Booking';

// Color Palette:
// Purple: #afabfd
// Teal: #88d4cb
// Orange: #ffbd59
// Off-white: #f7f4f1
// Dark Grey: #424040
// Pink: #FF9AA2

const International2 = () => {
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
            title: "Affordable Premium Dental Treatment in India",
            description: "International patients choose 32 Dental Avenue for world-class dental treatment in India that delivers exceptional quality at significantly lower costs than the US, UK, Europe, or Australia. Enjoy advanced implant dentistry, smile makeovers, veneers, crowns, and full-mouth rehabilitation—without the high international price tag.",
            icon: <Globe className="w-6 h-6 text-[#afabfd]" />
        },
        {
            title: "Advanced Technology & Trained Dental Specialists",
            description: "Our clinic uses state-of-the-art equipment, digital smile design, 3D scanning, and CAD/CAM technology to ensure precision and long-lasting results. With internationally trained experts leading your care, patients receive treatment that meets global dental standards, making us a top choice for dental tourism in India.",
            icon: <Stethoscope className="w-6 h-6 text-[#88d4cb]" />
        },
        {
            title: "Hassle-Free, End-to-End Dental Tourism Support",
            description: "We offer a complete dental tourism experience for international patients, from virtual consultations and clear cost estimates to travel coordination, appointment planning, and post-treatment follow-ups. Our streamlined process ensures visitors enjoy a stress-free journey while receiving trusted dental treatment in India.",
            icon: <Plane className="w-6 h-6 text-[#ffbd59]" />
        },
        {
            title: "Fast, Efficient Care Designed for Short Travel Timelines",
            description: "International patients often visit India for limited days, and we specialize in delivering high-quality results quickly. With same-day dentistry options, quick veneer fabrication, and coordinated treatment sessions, 32 Dental Avenue provides reliable, time-efficient solutions ideal for dental tourism in India.",
            icon: <Clock className="w-6 h-6 text-[#FF9AA2]" />
        }
    ];

    const valuePropositions = [
        {
            title: "No Hidden Costs",
            description: "Upfront, transparent pricing with detailed written estimates shared before you begin your dental tourism journey.",
            icon: <ShieldCheck className="w-10 h-10 text-[#afabfd] mb-4" />,
            borderColor: "border-[#afabfd]"
        },
        {
            title: "All-Inclusive Treatment Plans",
            description: "Comprehensive packages covering consultations, procedures, digital scans, crowns/veneers, and essential clinical requirements.",
            icon: <Star className="w-10 h-10 text-[#ffbd59] mb-4" />,
            borderColor: "border-[#ffbd59]"
        },
        {
            title: "Fast, Cost-Effective Solutions",
            description: "Save both time and money with quick turnaround treatments, same-day procedures, and efficient planning tailored to your travel schedule.",
            icon: <Clock className="w-10 h-10 text-[#FF9AA2] mb-4" />,
            borderColor: "border-[#FF9AA2]"
        },
        {
            title: "Support for International Patients",
            description: "Guidance with documentation, travel planning, priority appointments, and post-treatment support to ensure a smooth and comfortable experience.",
            icon: <Users className="w-10 h-10 text-[#88d4cb] mb-4" />,
            borderColor: "border-[#88d4cb]"
        }
    ];

    const processSteps = [
        {
            title: "Connect with Us from Anywhere",
            description: "Start your journey with an online consultation, where our specialists review your concerns, scans, and expectations to create a personalized treatment plan.",
            icon: <Globe className="w-6 h-6 text-white" />,
            bg: "bg-[#afabfd]"
        },
        {
            title: "Visa & Travel Assistance",
            description: "We provide guidance for your medical visa, travel dates, and scheduling. Whether you’re visiting for implants, smile makeovers, crowns, or full-mouth rehabilitation, we help plan your trip based on your treatment timeline for a smooth and timely experience.",
            icon: <Plane className="w-6 h-6 text-white" />,
            bg: "bg-[#88d4cb]"
        },
        {
            title: "Comfortable Accommodation Support",
            description: "We assist with hotel recommendations near the clinic—safe, well-connected, and suitable for different budgets—so your stay in India is comfortable and convenient.",
            icon: <Hotel className="w-6 h-6 text-white" />,
            bg: "bg-[#ffbd59]"
        },
        {
            title: "Get to Know Your Clinic",
            description: "Once you arrive, you’ll receive a clinic tour and meet your dental specialists. We ensure you feel familiar, confident, and fully informed before any treatment begins.",
            icon: <MapPin className="w-6 h-6 text-white" />,
            bg: "bg-[#FF9AA2]"
        },
        {
            title: "Tailored Treatment Designed for You",
            description: "Every international patient receives a custom treatment roadmap aligned with your travel duration. Our team ensures priority appointments, minimal downtime, and efficient procedures—so you return home with a beautiful, functional smile.",
            icon: <Stethoscope className="w-6 h-6 text-white" />,
            bg: "bg-[#afabfd]"
        },
        {
            title: "Support Beyond Treatment",
            description: "Your journey doesn’t end when you leave India. We offer post-treatment guidance, healing check-ins, and virtual follow-ups to ensure long-term satisfaction and oral health.",
            icon: <Smile className="w-6 h-6 text-white" />,
            bg: "bg-[#88d4cb]"
        }
    ];

    const faqs = [
        {
            question: "Is India a good place for dental treatment for international patients?",
            answer: "Yes. India is a top destination for high-quality, affordable dental treatment. International patients choose India for advanced technology, experienced dentists, excellent results, and significantly lower costs compared to the US, UK, Europe, and Australia."
        },
        {
            question: "Why should I choose 32 Dental Avenue for dental tourism in India?",
            answer: "32 Dental Avenue offers world-class technology, globally trained specialists, transparent pricing, and complete travel-to-treatment support. We ensure international patients enjoy a smooth, safe, and comfortable dental tourism experience with personalized plans and consistent follow-up care."
        },
        {
            question: "How long do I need to stay in India for dental treatment?",
            answer: "Treatment duration varies. Simple procedures need 1–2 days; veneers and crowns require 5–7 days. Implants need 7–10 days initially, with a second visit after 3–6 months. We provide a tailored travel timeline beforehand."
        },
        {
            question: "Is dental treatment in India safe and hygienic for foreign patients?",
            answer: "Yes. Reputable clinics like 32 Dental Avenue follow strict international sterilization protocols, use advanced equipment, and maintain high hygiene standards. We ensure safe, clean, and infection-controlled treatment environments for all international patients."
        },
        {
            question: "How much can I save by choosing dental tourism in India?",
            answer: "International patients typically save 50–70% on dental treatments compared to Western countries. Even after including travel and accommodation, India remains far more affordable while offering world-class quality, advanced technology, and highly experienced dental specialists."
        },
        {
            question: "Do you offer virtual consultations before I travel to India?",
            answer: "Yes. We provide detailed online consultations to review your scans, concerns, and goals. This helps us share accurate treatment timelines and cost estimates so you can confidently plan your dental tourism trip to India."
        }
    ];

    return (
        <div className="bg-[#f7f4f1] min-h-screen pt-20 font-sans">
            {/* Hero Section */}
            <div className="relative h-[70vh] w-full overflow-hidden rounded-b-[3rem] shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[#424040]/80 to-transparent z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
                    alt="Dental Tourism"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-16 max-w-4xl">
                    <span className="inline-block py-2 px-4 rounded-full bg-[#afabfd] text-white text-sm font-bold tracking-wider w-fit mb-6">
                        DENTAL TOURISM INDIA
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                        Your Trusted Dental Partner in India
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-6 font-semibold">
                        Enjoy Smooth, Stress-Free Dental Care in India with 32 Dental Avenue
                    </p>
                    <p className="text-lg text-white/80 mb-8 max-w-2xl font-light">
                        At 32 Dental Avenue, we bring together world-class technology, expert dentists, and end-to-end assistance to offer a seamless dental tourism experience.
                    </p>
                    <div className="flex gap-4">
                        <a href="#booking" className="bg-[#ffbd59] text-[#424040] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#ffaa2b] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 inline-block">
                            Schedule Consultation
                        </a>
                    </div>
                </div>
            </div>

            {/* Stats Section - Colorful Cards */}
            <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-30">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                            <h3 className="text-3xl md:text-4xl font-extrabold mb-2" style={{ color: stat.color }}>{stat.number}</h3>
                            <p className="text-gray-600 font-medium text-sm md:text-base">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Choose Us - Split Layout */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Column: Content */}
                        <div className="flex flex-col gap-8">
                            <div>
                                <span className="text-[#afabfd] font-bold uppercase tracking-wider text-sm">WHY CHOOSE US</span>
                                <h2 className="text-4xl md:text-5xl font-extrabold text-[#424040] mt-2 leading-tight">
                                    Why Choose 32 Dental Avenue?
                                </h2>
                                <p className="text-lg text-gray-600 mt-6 leading-relaxed">
                                    Choosing the right clinic is the most important step of your dental tourism journey. At 32 Dental Avenue, we ensure every international patient receives world-class care, transparent communication, and a smooth, worry-free experience from start to finish.
                                </p>
                            </div>

                            <div className="grid gap-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-[#88d4cb] transition-colors">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                                            <div>
                                                <h3 className="text-lg font-bold text-[#424040] mb-2">{feature.title}</h3>
                                                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Images */}
                        <div className="relative h-[600px] w-full hidden lg:block">
                            {/* Main Image */}
                            <div className="absolute top-0 right-0 w-[85%] h-[85%] rounded-[2rem] overflow-hidden shadow-2xl z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop"
                                    alt="Modern Dental Clinic"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Secondary Image */}
                            <div className="absolute bottom-0 left-0 w-[55%] h-[50%] rounded-[2rem] overflow-hidden shadow-2xl z-20 border-8 border-[#f7f4f1]">
                                <img
                                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop"
                                    alt="Dentist Consultation"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Decorative Circle */}
                            <div className="absolute top-10 left-10 w-32 h-32 bg-[#ffbd59] rounded-full blur-3xl opacity-20 z-0"></div>
                            <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#afabfd] rounded-full blur-3xl opacity-20 z-0"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Propositions - World-Class Dental Care */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#424040] mb-6">World-Class Dental Care, Now Affordable in India</h2>
                        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                            At 32 Dental Avenue, we make high-quality dental treatment in India accessible, transparent, and stress-free for international patients. Our treatment plans and packages are competitively priced, clearly explained, and designed to deliver global-level results without the high costs seen in the US, UK, Europe, or Australia. With advanced technology, expert specialists, and international protocols, India offers world-class dental care—at a fraction of the price you’d pay abroad.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {valuePropositions.map((prop, index) => (
                            <div key={index} className={`p-8 rounded-3xl bg-[#f7f4f1] border-2 ${prop.borderColor} hover:shadow-xl transition-all`}>
                                {prop.icon}
                                <h3 className="text-xl font-bold text-[#424040] mb-4">{prop.title}</h3>
                                <p className="text-gray-600 text-sm">{prop.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Process Section - Hassle-Free Journey */}
            <div className="py-24 bg-[#f7f4f1]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-[#88d4cb] font-bold uppercase tracking-wider text-sm">YOUR JOURNEY</span>
                        <h2 className="text-4xl font-bold text-[#424040] mt-2 mb-6">Your Hassle-Free Dental Tourism Journey with 32 Dental Avenue</h2>
                        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                            Travelling abroad for dental treatment can feel like a big decision—but with 32 Dental Avenue, the entire process is simple, transparent, and stress-free. From your first virtual consultation to your final smile transformation, we guide, support, and care for you at every step. Our dedicated international patient team ensures your visit to India is smooth, well-planned, and completely worry-free.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                                <div className={`w-16 h-16 rounded-full ${step.bg} flex items-center justify-center shadow-lg mb-6 transform hover:scale-110 transition-transform`}>
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#424040] mb-3">{step.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Banner */}
            <div className="py-20 px-4">
                <div className="max-w-6xl mx-auto bg-[#424040] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-[#88d4cb] rounded-full blur-[100px] opacity-20"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FF9AA2] rounded-full blur-[100px] opacity-20"></div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10">
                        Meet the Leading Dental Experts at 32 Dental Avenue
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto relative z-10">
                        Behind every confident smile is a team that genuinely cares. Our highly skilled dentists, implant specialists, cosmetic experts, and dedicated patient care team work together to ensure you receive world-class treatment and a truly comfortable experience. From diagnosis to smile transformation, you’re supported by experts at every step.
                    </p>
                    <a href="#booking" className="bg-[#afabfd] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#9b97f5] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 relative z-10 inline-block">
                        Book a Consultation
                    </a>
                </div>
            </div>

            {/* Testimonials */}
            <Testimonials />

            {/* FAQ Section */}
            <div className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-[#424040] text-center mb-12">FAQ</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-2 border-[#f7f4f1] rounded-2xl overflow-hidden hover:border-[#afabfd] transition-colors">
                                <button
                                    className="w-full px-8 py-6 text-left flex justify-between items-center bg-white"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span className="font-bold text-[#424040] text-lg">{faq.question}</span>
                                    {openFaq === index ? (
                                        <ChevronUp className="w-6 h-6 text-[#afabfd]" />
                                    ) : (
                                        <ChevronDown className="w-6 h-6 text-[#gray-400]" />
                                    )}
                                </button>
                                <div
                                    className={`px-8 bg-[#f7f4f1] text-gray-600 transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-48 py-6 opacity-100' : 'max-h-0 py-0 opacity-0'
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
            <AppointmentBooking />
        </div>
    );
};

export default International2;
