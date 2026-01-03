import React, { useState } from 'react';
import {
    ShieldCheck,
    Building2,
    Stethoscope,
    ChevronDown,
    ChevronUp,
    Clock,
    CheckCircle2,
    Activity,
    Zap,
    HeartPulse
} from 'lucide-react';
import AppointmentBooking from '../Booking';
import docAnkita from '../../assets/images/drAnkitaImage.jpg';
import docAnuj from '../../assets/images/drAnujImage.jpg';

// Using generated assets
import heroImage from '../../assets/images/root-canal/hero.png';
import imgExperienced from '../../assets/images/root-canal/experienced.png';
import imgDigital from '../../assets/images/root-canal/digital.png';
import imgPersonalized from '../../assets/images/root-canal/personalized.png';
import imgCare from '../../assets/images/root-canal/care.png';
import Testimonals from '../review-services';

const RootCanal = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const services = [
        {
            title: "Experienced Dentists",
            description: "Our team of skilled dental specialists ensures evidence-based, gentle, and transparent care for patients of all ages.",
            icon: <Stethoscope className="w-8 h-8 text-secondary-teal" />,
            image: imgExperienced
        },
        {
            title: "Advanced Digital Dentistry",
            description: "We use modern dental technology for accurate diagnosis, pain-free procedures, and faster recovery.",
            icon: <Activity className="w-8 h-8 text-secondary-teal" />,
            image: imgDigital
        },
        {
            title: "Personalised Dental Treatment",
            description: "Every dental treatment is tailored to your unique oral health needs and goals.",
            icon: <HeartPulse className="w-8 h-8 text-secondary-teal" />,
            image: imgPersonalized
        },
        {
            title: "Care Beyond Treatment",
            description: "Post-treatment instructions, follow-ups, and preventive care to keep your smile healthy long term.",
            icon: <ShieldCheck className="w-8 h-8 text-secondary-teal" />,
            image: imgCare
        }
    ];

    const faqs = [
        {
            question: "Where can I get safe and painless root canal treatment near me in Rohini Sector 5?",
            answer: "If you’re searching for root canal near me or a trusted dentist in Rohini Sector 5, 32 Dental Avenue provides painless, advanced root canal therapy using digital X-rays, rotary instruments, and modern sterilization protocols."
        },
        {
            question: "How do I know if I need a root canal?",
            answer: "Common signs include severe tooth pain, sensitivity to hot or cold, swelling, gum tenderness, or deep decay. A quick dental exam and X-ray at a reliable dental clinic in Rohini will confirm if a root canal is necessary."
        },
        {
            question: "Is a root canal treatment painful?",
            answer: "No. With modern anesthesia and advanced tools, the procedure is painless. You may feel slight pressure, but not discomfort. Most patients feel relief immediately after the infected nerve is removed."
        },
        {
            question: "How long does it take to recover after a root canal?",
            answer: "Most patients resume normal activities the same day. Minor soreness may last 24–48 hours. Proper aftercare ensures smooth healing and protects the treated tooth."
        },
        {
            question: "What happens if I delay a root canal?",
            answer: "Delaying treatment can worsen the infection, increase pain, cause swelling, damage nearby teeth, or lead to tooth loss. Early care from a trusted dentist near me in Rohini Sector 5 prevents complications."
        },
        {
            question: "How long does a root canal-treated tooth last?",
            answer: "With proper restoration (filling or crown) and regular check-ups, a root canal-treated tooth can last many years, often a lifetime. Good oral hygiene and timely dental visits keep it strong and stable."
        }
    ];

    return (
        <div className="bg-neutral-bg min-h-screen pt-16 md:pt-20">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-[#f0f4f8] to-[#e0e7ff] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay"></div>
                <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="inline-block py-1 px-3 rounded-full bg-secondary-teal/10 text-secondary-teal text-sm font-semibold mb-4">
                            Pain-Free Relief, Trusted Dental Care
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-text-charcoal mb-6 leading-tight">
                            Advanced Root Canal Treatment in <span className="text-secondary-teal">Rohini, Delhi</span>
                        </h1>
                        <p className="text-lg text-text-light mb-8 max-w-xl">
                            Say goodbye to tooth pain with our gentle, modern root canal treatment designed to restore your tooth’s health comfortably and precisely.
                        </p>
                        <button className="bg-secondary-teal text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-[#76c4bb] transition-all transform hover:-translate-y-1">
                            Book an Appointment
                        </button>
                    </div>
                    <div className="relative">
                        {/* Hero Image */}
                        <div className="rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
                            <img
                                src={heroImage}
                                alt="Comfortable Dental Care"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet Our Expert Dentists */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#8FC6B7]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-12 items-start">
                        {/* Left Content */}
                        <div className="lg:col-span-1">
                            <div className="inline-block mb-4">
                                <span className="text-[#8FC6B7] font-semibold text-sm flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#8FC6B7] rounded-full"></span>
                                    OUR TEAM
                                </span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Meet Our Expert Dentists
                            </h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Great results come from a team that listens, understands, and delivers with excellence. Our experienced dentists and caring clinical staff ensure you feel supported throughout every treatment.
                            </p>
                            <button className="bg-[#76c4bb] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#8fd7d7] transition-colors flex items-center gap-2 group">
                                Book A Consultation
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </div>

                        {/* Right Cards */}
                        <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                            {/* Dr. Ankita Sharma Gambhir */}
                            <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="relative h-96">
                                    <img
                                        src={docAnkita}
                                        alt="Dr. Ankita Sharma Gambhir"
                                        className="w-full h-full object-cover object-center"
                                    />
                                    {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                                            Dental Expert
                                        </span>
                                    </div> */}
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Ankita Sharma Gambhir</h3>
                                    <div className="space-y-2 text-sm text-gray-600">
                                        <p className="flex items-start gap-2">
                                            <Stethoscope className="w-4 h-4 mt-0.5 text-[#8FC6B7] flex-shrink-0" />
                                            <span>Pediatric Dentist</span>
                                        </p>
                                        <p className="flex items-start gap-2">
                                            <Clock className="w-4 h-4 mt-0.5 text-[#8FC6B7] flex-shrink-0" />
                                            <span>10+ Years of experience</span>
                                        </p>
                                        <p className="flex items-start gap-2">
                                            <svg className="w-4 h-4 mt-0.5 text-[#8FC6B7] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>MDS – Pedodontics & Preventive Dentistry</span>
                                        </p>
                                    </div>
                                    <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                                        A pediatric dentistry specialist with 10+ years of experience, delivering gentle, child-friendly care with advanced techniques.
                                    </p>
                                </div>
                            </div>

                            {/* Dr. Anuj Gambhir */}
                            <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="relative h-96">
                                    <img
                                        src={docAnuj}
                                        alt="Dr. Anuj Gambhir"
                                        className="w-full h-full object-cover object-center"
                                    />
                                    {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                                            Dental Expert
                                        </span>
                                    </div> */}
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Anuj Gambhir</h3>
                                    <div className="space-y-2 text-sm text-gray-600">
                                        <p className="flex items-start gap-2">
                                            <Stethoscope className="w-4 h-4 mt-0.5 text-[#8FC6B7] flex-shrink-0" />
                                            <span>Prosthodontist & Oral Implantologist</span>
                                        </p>
                                        <p className="flex items-start gap-2">
                                            <Clock className="w-4 h-4 mt-0.5 text-[#8FC6B7] flex-shrink-0" />
                                            <span>10+ Years of experience</span>
                                        </p>
                                        <p className="flex items-start gap-2">
                                            <svg className="w-4 h-4 mt-0.5 text-[#8FC6B7] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>MDS – Prosthodontics, Crown & Bridge</span>
                                        </p>
                                    </div>
                                    <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                                        A prosthodontics expert with 10+ years of experience, specializing in dental implants and advanced restorative procedures.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-bg">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-charcoal mb-4">Safe, Reliable & Modern Dental Treatment</h2>
                        <p className="text-text-light max-w-3xl mx-auto">
                            As a leading dental clinic in Rohini, we provide more than just routine dental care, we deliver comfort, precision, and patient-first treatment for every smile.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-secondary-teal/20 overflow-hidden">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="mb-4 bg-neutral-bg w-12 h-12 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-text-charcoal mb-2">{service.title}</h3>
                                    <p className="text-text-light text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <Testimonals
                mainTitle="OUR SUCCESS STORIES"
                subtitle="Restored Teeth, Renewed Comfort"
                description="At 32 Dental Avenue, we’ve helped countless patients save their natural teeth through gentle, precise, and highly successful root canal treatments in Rohini. Our experienced dentists in Rohini Sector 5 use advanced technology and pain-free techniques to eliminate infection, ease sensitivity, and restore full tooth strength."
            />

            {/* Our Facility */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-bg">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Facility 1" className="rounded-2xl shadow-lg w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500" />
                                    <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Facility 2" className="rounded-2xl shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="pt-8 space-y-4">
                                    <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Facility 3" className="rounded-2xl shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500" />
                                    <img src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Facility 4" className="rounded-2xl shadow-lg w-full h-40 object-cover transform hover:scale-105 transition-transform duration-500" />
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-secondary-teal font-bold tracking-wider text-sm uppercase mb-2 block">OUR FACILITY</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-text-charcoal mb-6">
                                State-of-the-State-of-the-Art Dental Care at 32 Dental Avenue
                            </h2>
                            <p className="text-text-light mb-8">
                                Behind every beautiful, healthy smile is a clinic built with advanced technology, modern equipment, and a patient-first approach. Our facility ensures precision, comfort, and consistently high-quality dental outcomes.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-white p-3 rounded-lg shadow-sm mr-4 text-secondary-teal">
                                        <Building2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-text-charcoal mb-1">Advanced Dental Technology</h4>
                                        <p className="text-text-light text-sm">We use the latest dental innovations, including digital scanners, high-resolution X-rays, and CAD/CAM systems, to deliver accurate diagnoses and painless, precise treatments for every patient.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-white p-3 rounded-lg shadow-sm mr-4 text-secondary-teal">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-text-charcoal mb-1">Digital Smile Design (DSD)</h4>
                                        <p className="text-text-light text-sm">Our Digital Smile Design setup allows us to map and preview your smile digitally, offering predictable results, customized planning, and a clear vision of your final transformation before treatment begins.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-white p-3 rounded-lg shadow-sm mr-4 text-secondary-teal">
                                        <HeartPulse className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-text-charcoal mb-1">Sterilization & Safety Protocols</h4>
                                        <p className="text-text-light text-sm">Our clinic follows strict international sterilization standards using Class-B autoclaves and advanced infection control systems to ensure safe, hygienic, and worry-free dental care for all.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking Section */}
            <AppointmentBooking />

            {/* Bottom Info Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#afabfd]/20 via-[#88d4cb]/20 to-[#76c4bb]/8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-charcoal mb-6">
                        Expert & Painless Root Canal Treatment in Rohini
                    </h2>
                    <p className="text-text-light text-lg mb-8 leading-relaxed">
                        At 32 Dental Avenue, we offer gentle and modern root canal treatment in Rohini to relieve pain and save your natural tooth. If you have sensitivity, swelling, or deep decay, our expert dentists in Rohini Sector 5 provide accurate diagnosis and painless care.
                    </p>
                    <p className="text-text-light text-lg mb-8 leading-relaxed">
                        We use digital X-rays, rotary endodontics, and strict sterilization for a safe and smooth procedure. With minimally invasive methods and proper aftercare, healing is faster and more comfortable. Choose trusted, long-lasting root canal treatment near me at 32 Dental Avenue.
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-charcoal mb-4">FAQ</h2>
                        <p className="text-text-light">Your Guide to Root Canal Treatment & Tooth Pain Relief</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-gray-100 rounded-xl overflow-hidden">
                                <button
                                    className="w-full px-6 py-4 text-left bg-neutral-bg hover:bg-gray-50 flex items-center justify-between transition-colors"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span className="font-semibold text-text-charcoal pr-8">{faq.question}</span>
                                    {openFaq === index ? (
                                        <ChevronUp className="w-5 h-5 text-secondary-teal flex-shrink-0" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                    )}
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="px-6 py-4 text-text-light bg-white border-t border-gray-100">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RootCanal;
