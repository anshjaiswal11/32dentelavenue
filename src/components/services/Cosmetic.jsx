import React, { useState } from 'react';
import Booking from '../Booking';
import docAnkita from '../../assets/images/drAnkitaImage.jpg';
import docAnuj from '../../assets/images/drAnujImage.jpg';
import Testimonials from '../review-services.jsx';
import {
    Smile,
    Sparkles,
    Gem,
    Crown,
    ShieldCheck,
    Users,
    Building2,
    Stethoscope,
    ChevronDown,
    ChevronUp,
    Clock,
    Calendar
} from 'lucide-react';
import clearBracesImg from '../../assets/images/service-clear-braces.png';
import clearAlignersImg from '../../assets/images/service-aligners.png';
import whiteningImg from '../../assets/images/teeth-whitening.png';

const Cosmetic = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const treatments = [
        {
            title: "Smile Makeover",
            image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Composite Fillings",
            image: "https://plus.unsplash.com/premium_photo-1674586615555-d3c5f498b368?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Tooth-Colored Crowns & Bridges",
            image: "https://plus.unsplash.com/premium_photo-1675666792361-b844bf679cb0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Partial Crowns / Inlays & Onlays",
            image: "https://plus.unsplash.com/premium_photo-1661601362837-97e39a584095?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Veneers",
            image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Clear Braces",
            image: clearBracesImg
        },
        {
            title: "Clear Aligners",
            image: clearAlignersImg
        },
        {
            title: "Teeth Whitening / Bleaching",
            image: whiteningImg
        }
    ];

    const faqs = [
        {
            question: "Which is the best cosmetic dentistry clinic near me in India?",
            answer: "The best cosmetic dentistry clinic is one that offers advanced technology, experienced dentists, personalized treatment plans, and proven results. At 32 Dental Avenue, we provide modern smile makeover solutions trusted by patients across India."
        },
        {
            question: "Are teeth whitening services in India affordable and safe?",
            answer: "Yes, professional teeth whitening in India is both affordable and safe when performed by trained cosmetic dentists. We use clinically tested whitening systems that deliver brighter results without harming enamel."
        },
        {
            question: "How do I choose the right cosmetic dentist in India?",
            answer: "Look for qualifications, experience, before-after results, patient reviews, and the use of digital dentistry. A consultation at 32 Dental Avenue helps you understand the best treatment for your smile goals."
        },
        {
            question: "What treatments do top cosmetic dentistry clinics in India offer?",
            answer: "Leading clinics provide veneers, teeth whitening, crowns, clear aligners, bonding, smile makeovers, and digital smile design, covering both aesthetic improvements and functional corrections."
        },
        {
            question: "Is cosmetic dentistry expensive in India?",
            answer: "Cosmetic dentistry in India is more affordable compared to many countries. Costs depend on treatment type, materials, and complexity, but clinics like ours offer budget-friendly and premium options."
        },
        {
            question: "How long do cosmetic dental treatments like veneers, whitening, or aligners last?",
            answer: "With proper care, cosmetic treatments can last many years. Veneers typically last 10–15 years, whitening results 6–12 months, and aligner results are long-term with retainers."
        }
    ];

    return (
        <div className="bg-neutral-bg min-h-screen pt-16 md:pt-20">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-[#f0f4f8] to-[#e0e7ff] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay"></div>
                <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="inline-block py-1 px-3 rounded-full bg-secondary-teal/10 text-secondary-teal text-sm font-semibold mb-4 font-roboto-slab">
                            Cosmetic Dental Treatment in Rohini, Delhi
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-text-charcoal mb-6 leading-tight font-raleway">
                            Crafting Confident, <span className="text-secondary-teal">Beautiful Smiles</span>
                        </h1>
                        <p className="text-lg text-text-light mb-8 max-w-xl font-raleway">
                            Advanced smile makeover treatments tailored for natural aesthetics, long-lasting results, and complete confidence.
                        </p>
                        <a href="#booking" className="bg-secondary-teal text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-[#76c4bb] transition-all transform hover:-translate-y-1 inline-block">
                            Book an Appointment
                        </a>
                    </div>
                    <div className="relative">
                        {/* Placeholder for Hero Image - Replace with generated image later */}
                        <div className="rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Beautiful Smile"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Treatments Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#8FC6B7] mb-4 font-roboto-slab">Dental Treatments</h2>
                        <p className="text-text-light max-w-4xl mx-auto font-raleway">
                            Transform your confidence with personalized cosmetic dentistry solutions for stunning smile aesthetics.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {treatments.map((treatment, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                                <div className="aspect-[4/3] w-full overflow-hidden">
                                    <img
                                        src={treatment.image}
                                        alt={treatment.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                                    <h3 className="text-xl font-bold text-white mb-2 font-roboto-slab">{treatment.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <Testimonials />

            {/* Meet Our Expert Dentists */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-12 items-start">
                        {/* Left Content */}
                        <div className="lg:col-span-1">
                            <div className="inline-block mb-4">
                                <span className="text-[#8FC6B7] font-semibold text-sm flex items-center gap-2 font-roboto-slab">
                                    <span className="w-2 h-2 bg-[#8FC6B7] rounded-full"></span>
                                    OUR TEAM
                                </span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-[#8FC6B7] mb-6 leading-tight font-roboto-slab">
                                Meet Our Expert Dentists
                            </h2>
                            <p className="text-gray-600 mb-8 leading-relaxed font-raleway">
                                Great results come from a team that listens, understands, and delivers with excellence. Our experienced dentists and caring clinical staff ensure you feel supported throughout every treatment.
                            </p>
                            <a href="#booking" className="bg-[#76c4bb] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#8fd7d7] transition-colors flex items-center gap-2 group w-fit">
                                Book A Consultation
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
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
                                <div className="p-6 font-raleway">
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
                                    <p className="mt-4 text-gray-700 text-sm leading-relaxed font-raleway">
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
                                <div className="p-6 font-raleway">
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
                                    <p className="mt-4 text-gray-700 text-sm leading-relaxed font-raleway       
                                    ">
                                        A prosthodontics expert with 10+ years of experience, specializing in dental implants and advanced restorative procedures.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                            <span className="text-black font-bold tracking-wider text-sm uppercase mb-2 block font-roboto-slab">Our Facility</span>
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
                                        <h4 className="text-lg font-bold text-black mb-1 font-roboto-slab">Advanced Dental Technology</h4>
                                        <p className="text-text-light text-sm font-raleway">Digital scanners, high-resolution X-rays, and CAD/CAM systems for accurate diagnoses.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-white p-3 rounded-lg shadow-sm mr-4 text-secondary-teal">
                                        <Smile className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-black mb-1 font-roboto-slab">Digital Smile Design (DSD)</h4>
                                        <p className="text-text-light text-sm font-raleway">Map and preview your smile digitally for predictable results and customized planning.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-white p-3 rounded-lg shadow-sm mr-4 text-secondary-teal">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-black mb-1 font-roboto-slab">Sterilization & Safety Protocols</h4>
                                        <p className="text-text-light text-sm font-raleway">Strict international sterilization standards using Class-B autoclaves and advanced infection control.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Info Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#afabfd]/20 via-[#88d4cb]/20 to-[#76c4bb]/8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#8FC6B7] mb-6 font-roboto-slab">
                        Advanced Cosmetic Dentistry in Rohini for Complete Smile Transformation
                    </h2>
                    <p className="text-text-light text-lg mb-8 leading-relaxed font-raleway">
                        At 32 Dental Avenue, we make cosmetic dentistry simple, comfortable, and truly transformative. If you’re dealing with stained, chipped, crooked, or missing teeth, our expert dentists in Rohini, Delhi are here to help you smile confidently again. With modern technology, digital dentistry, and fully customized treatment plans, we create natural-looking results that feel just right.
                    </p>
                    <p className="text-text-light text-lg mb-8 leading-relaxed font-raleway">
                        Whether you want veneers, teeth whitening, clear aligners, crowns, or a complete smile makeover, every treatment is designed around your goals. With precise diagnostics and strict safety protocols, we ensure predictable, long-lasting results. Experience why patients trust us for advanced aesthetic dentistry and life-changing smile transformations.
                    </p>
                    <a href="#booking" className="bg-secondary-teal text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-[#76c4bb] transition-all font-roboto-slab inline-block">
                        Book Your Transformation
                    </a>
                </div>
            </section>

            <Booking />

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-charcoal mb-4 font-roboto-slab">FAQ</h2>
                        <p className="text-text-light font-raleway">Expert Answers to Help You Choose the Right Smile Solutions</p>
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
                                    <div className="px-6 py-4 text-text-light bg-white border-t border-gray-100 font-raleway">
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

export default Cosmetic;
