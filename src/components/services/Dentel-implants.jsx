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
    Smile,
    Award
} from 'lucide-react';
import AppointmentBooking from '../Booking';
import docAnkita from '../../assets/images/drAnkitaImage.jpg';
import docAnuj from '../../assets/images/drAnujImage.jpg';
import CTASection from '../CTASection';

// Using generated assets
import heroImage from '../../assets/images/dental-implants/hero.png';
import imgSingle from '../../assets/images/dental-implants/single.png';
import imgMultiple from '../../assets/images/dental-implants/multiple.png';
import imgFullMouth from '../../assets/images/dental-implants/full_mouth.png';
import imgSuccess from '../../assets/images/dental-implants/success.png';
import Testimonals from '../review-services';

const DentalImplants = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const services = [
        {
            title: "Single Tooth Implant",
            description: "A perfect solution to replace one missing tooth with a natural-looking, permanent implant. It restores full chewing strength and blends seamlessly with your existing teeth.",
            icon: <Award className="w-8 h-8 text-secondary-teal" />,
            image: imgSingle
        },
        {
            title: "Multiple Teeth Implants",
            description: "Ideal for patients missing several teeth in a row. These implants support bridges without affecting neighboring teeth, offering strong, stable, and long-lasting results.",
            icon: <Activity className="w-8 h-8 text-secondary-teal" />,
            image: imgMultiple
        },
        {
            title: "Full Mouth Implants (All-on-4 / All-on-6)",
            description: "A complete smile restoration option that replaces an entire arch of teeth with minimal implants. Provides maximum stability, improved function, and a fixed, natural-looking set of teeth.",
            icon: <Smile className="w-8 h-8 text-secondary-teal" />,
            image: imgFullMouth
        }
    ];

    const faqs = [
        {
            question: "How much do dental implants cost in Rohini or Delhi?",
            answer: "Dental implant cost in Rohini varies based on implant brand, bone support, and type of restoration. Prices generally start from ₹18,000–₹45,000 per implant, with transparent plans at 32 Dental Avenue."
        },
        {
            question: "Are dental implants painful?",
            answer: "No. Implant placement is done under local anesthesia, making it painless and comfortable. Mild soreness after surgery is normal and easily manageable with medication."
        },
        {
            question: "How long do dental implants last?",
            answer: "With proper brushing, flossing, and regular check-ups, dental implants can last 15–25 years or even a lifetime. They are the longest-lasting tooth replacement option."
        },
        {
            question: "Am I the right candidate for dental implants?",
            answer: "You may be a good candidate if you have one or more missing teeth, good oral health, and sufficient bone density (or can undergo grafting). A dental check-up and X-ray confirm suitability."
        },
        {
            question: "How long does the dental implant procedure take?",
            answer: "The implant placement itself takes 30–60 minutes. Healing (osseointegration) takes 3–6 months, after which the crown (tooth cap) is placed."
        },
        {
            question: "Can dental implants replace dentures or multiple missing teeth?",
            answer: "Yes. Options like All-on-4, All-on-6, full-mouth implants, and implant-supported dentures can replace multiple missing teeth with stable, natural-looking results."
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
                            Strong Bite, Natural Smile
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-text-charcoal mb-6 leading-tight font-raleway">
                            Long-Lasting Dental Implants in <span className="text-secondary-teal">Rohini, Delhi</span>
                        </h1>
                        <p className="text-lg text-text-light mb-8 max-w-xl font-raleway">
                            Painless tooth replacement with advanced dental implants designed to restore your smile with complete comfort.
                        </p>
                        <a href="#booking" className="bg-secondary-teal text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-[#76c4bb] transition-all transform hover:-translate-y-1 font-roboto-slab inline-block">
                            Book an Appointment
                        </a>
                    </div>
                    <div className="relative">
                        {/* Hero Image */}
                        <div className="rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
                            <img
                                src={heroImage}
                                alt="Dental Implants"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

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
                            <a href="#booking" className="bg-[#76c4bb] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#8fd7d7] transition-colors flex items-center gap-2 group font-roboto-slab w-fit">
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
                                    <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                                        A prosthodontics expert with 10+ years of experience, specializing in dental implants and advanced restorative procedures.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <CTASection />

            {/* Services Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-bg">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#8FC6B7] mb-4 font-roboto-slab">Dental Implants</h2>
                        <p className="text-text-light max-w-3xl mx-auto font-raleway">
                            Rebuild your smile with safe, durable, and natural-looking tooth replacement solutions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-secondary-teal/20 overflow-hidden">
                                <div className="h-56 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-8">
                                    <div className="mb-6 bg-neutral-bg w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-text-charcoal mb-3 font-roboto-slab">{service.title}</h3>
                                    <p className="text-text-light text-sm leading-relaxed font-raleway">
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
                subtitle="Rebuilt Smiles That Bring Joy Back"
                description="At 32 Dental Avenue, we’ve transformed countless lives with durable, natural-looking dental implants that restore missing teeth with complete comfort and stability. Our expert implant dentists in Rohini use advanced technology and personalized planning to rebuild smiles with precision and long-lasting strength."
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
                            <span className="text-secondary-teal font-bold tracking-wider text-sm uppercase mb-2 block font-roboto-slab">OUR FACILITY</span>
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

            {/* Booking Section */}
            <AppointmentBooking />

            {/* Bottom Info Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#afabfd]/20 via-[#88d4cb]/20 to-[#76c4bb]/8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#8FC6B7] mb-6 font-roboto-slab">
                        Durable, Painless Dental Implants in Rohini
                    </h2>
                    <p className="text-text-light text-lg mb-8 leading-relaxed font-raleway">
                        At 32 Dental Avenue, we make replacing missing teeth simple, safe, and stress-free. If you’re struggling with tooth loss, weak chewing, or an unstable denture, our implant specialists in Rohini, Delhi are here to restore your smile with precision and complete comfort. Using digital scans, guided implant placement, and advanced surgical techniques, we create implant solutions that look natural and last for years.
                    </p>
                    <p className="text-text-light text-lg mb-8 leading-relaxed font-raleway">
                        Choose from single tooth implants, multiple teeth implants, or full-mouth implants (All-on-4 / All-on-6), each designed to offer strong support, a natural bite, and long-term durability. With expert planning and a patient-first approach, we ensure predictable healing, stable function, and a confident smile you can trust.
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-charcoal mb-4 font-roboto-slab">FAQ</h2>
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

export default DentalImplants;
