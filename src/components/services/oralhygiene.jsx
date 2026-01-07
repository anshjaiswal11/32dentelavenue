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
import docAnkita from '../../assets/bg-removed/4.png';
import docAnuj from '../../assets/bg-removed/3.png';
import CTASection from '../CTASection';
import image01 from '../../assets/newimg/IMG_83711.jpg'
import image02 from '../../assets/newimg/IMG_81192.jpg'
import image03 from '../../assets/newimg/IMG_83699.jpg'
import image04 from '../../assets/newimg/IMG_83900.jpg'

// Using generated assets
import heroImage from '../../assets/images/oral-hygiene/hero.png';
import imgCheckup from '../../assets/images/oral-hygiene/checkup.png';
import imgCleaning from '../../assets/images/oral-hygiene/cleaning.png';
import imgFluoride from '../../assets/images/oral-hygiene/fluoride.png';
import imgSealants from '../../assets/images/oral-hygiene/sealants.png';
import imgScreening from '../../assets/images/oral-hygiene/screening.png';
import imgPreventive from '../../assets/images/oral-hygiene/preventive.png';
import imgSuccess from '../../assets/images/oral-hygiene/success.png';
import Testimonals from '../review-services';

const OralHygiene = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const services = [
        {
            title: "Dental Check-Up & Consultation",
            description: "Comprehensive examination to detect early signs of cavities, gum disease, and other oral health issues. Personalized guidance helps maintain long-term dental health.",
            icon: <Stethoscope className="w-8 h-8 text-secondary-teal" />,
            image: imgCheckup
        },
        {
            title: "Professional Teeth Cleaning",
            description: "Removes plaque, tartar, and surface stains for a cleaner, brighter smile. Helps prevent cavities, bad breath, and gum problems.",
            icon: <ShieldCheck className="w-8 h-8 text-secondary-teal" />,
            image: imgCleaning
        },
        {
            title: "Fluoride Treatments",
            description: "Strengthens enamel and protects against tooth decay. Ideal for children, teens, and adults seeking added protection.",
            icon: <Activity className="w-8 h-8 text-secondary-teal" />,
            image: imgFluoride
        },
        {
            title: "Dental Sealants",
            description: "Thin protective coating applied to molars to prevent decay in grooves and pits. A simple, pain-free preventive solution for kids and adults.",
            icon: <ShieldCheck className="w-8 h-8 text-secondary-teal" />,
            image: imgSealants
        },
        {
            title: "Oral Cancer & Gum Disease Screening",
            description: "Early detection of gum problems, infections, and oral cancers for timely treatment and better outcomes.",
            icon: <Activity className="w-8 h-8 text-secondary-teal" />,
            image: imgScreening
        },
        {
            title: "Preventive Care Plans",
            description: "Personalized oral hygiene and recall plans designed to fit your dental needs, schedule, and risk factors, helping you maintain a healthy, problem-free smile year-round.",
            icon: <Smile className="w-8 h-8 text-secondary-teal" />,
            image: imgPreventive
        }
    ];

    const faqs = [
        {
            question: "What preventive dental treatments are available in Rohini Sector 5?",
            answer: "At 32 Dental Avenue, we offer professional teeth cleaning, fluoride treatments, dental sealants, oral cancer and gum disease screening, and personalized check-ups. These preventive dental services in Rohini help maintain healthy teeth and gums."
        },
        {
            question: "How often should I visit a dentist for preventive care?",
            answer: "It is recommended to schedule a dental check-up every 6 months. Regular visits with our dentists in Rohini Sector 5 ensure early detection of cavities, gum disease, and other oral health issues."
        },
        {
            question: "Are preventive dental treatments painful?",
            answer: "No. Most preventive procedures, such as scaling, polishing, fluoride application, and screenings, are painless or minimally uncomfortable, designed for patient comfort and safety."
        },
        {
            question: "How do dental sealants and fluoride help prevent cavities?",
            answer: "Dental sealants protect deep grooves in teeth from decay, while fluoride treatments strengthen enamel. Together, they are effective, safe, and widely used in preventive dental care in Rohini."
        },
        {
            question: "Can preventive dental care stop gum disease and bad breath?",
            answer: "Yes. Routine cleaning, early screenings, and proper oral hygiene guidance prevent gum disease, plaque buildup, and bad breath, ensuring long-term oral health."
        },
        {
            question: "Do children need preventive dental care too?",
            answer: "Absolutely. Kids benefit from regular dental check-ups, fluoride treatments, and sealants to protect developing teeth and prevent early cavities. Our dentists in Rohini Sector 5 provide child-friendly, gentle care."
        }
    ];

    return (
        <div className="bg-neutral-bg min-h-screen pt-16 md:pt-20">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-[#e8f4f2] to-[#f0f4f8] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay"></div>
                <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="inline-block py-1 px-3 rounded-full bg-secondary-teal/10 text-secondary-teal text-sm font-semibold mb-4 font-roboto-slab">
                            Healthy Teeth, Fresh Smiles
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-text-charcoal mb-6 leading-tight font-raleway">
                            Oral Hygiene & Preventive Dental Care in <span className="text-secondary-teal">Rohini, Delhi</span>
                        </h1>
                        <p className="text-lg text-text-light mb-8 max-w-xl font-raleway">
                            Keep your teeth and gums healthy with painless preventive care that stops cavities, gum disease, and dental problems before they start.
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
                                alt="Oral Hygiene"
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
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 font-roboto-slab">Dr. Ankita Sharma Gambhir</h3>
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
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 font-roboto-slab">Dr. Anuj Gambhir</h3>
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
                                    <p className="mt-4 text-gray-700 text-sm leading-relaxed font-raleway">
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
                        <h2 className="text-3xl md:text-4xl font-bold text-[#8FC6B7] mb-4 font-roboto-slab">Oral Hygiene & Preventive Dental Care Services</h2>
                        <p className="text-text-light max-w-3xl mx-auto font-raleway">
                            Protect your smile with modern, painless, and effective preventive dental solutions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                subtitle="Expert Dental Care, Healthy Outcomes"
                description=" 32 Dental Avenue, we’ve transformed countless lives with durable, natural-looking dental implants that restore missing teeth with complete comfort and stability. Our expert implant dentists in Rohini use advanced technology and personalized planning to rebuild smiles with precision and long-lasting strength."
            />


            {/* Our Facility */}
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
                            <span className="text-[#8FC6B7] font-semibold text-sm flex items-center gap-2 font-roboto-slab uppercase mb-2">
                                <span className="w-2 h-2 bg-[#8FC6B7] rounded-full"></span>
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

            {/* Booking Section */}
            <AppointmentBooking />

            {/* Bottom Info Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#e0f2fe]/50 via-[#f0f9ff]/50 to-[#e8f4f2]/50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#8FC6B7] mb-6 font-roboto-slab">
                        Advanced Preventive Dental Care in Rohini Sector 5
                    </h2>
                    <p className="text-text-light text-lg mb-8 leading-relaxed font-raleway">
                        At 32 Dental Avenue, we make maintaining a healthy, confident smile simple and stress-free. If you’re looking for dental treatments in Rohini Sector 5 to prevent cavities, gum disease, or other oral health issues, our expert dentists in Rohini Sector 5 provide personalized, modern care tailored to your needs.
                    </p>
                    <p className="text-text-light text-lg mb-8 leading-relaxed font-raleway">
                        Using advanced diagnostic tools, digital X-rays, and gentle preventive techniques, we offer services like professional cleaning, fluoride treatment, sealants, and routine dental check-ups. Each procedure is designed to protect your teeth, maintain healthy gums, and prevent future problems. With careful monitoring and a patient-first approach, we ensure long-lasting oral health and a smile you can trust. Choose 32 Dental Avenue for reliable, preventive dental care near me.
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-charcoal mb-4 font-roboto-slab">FAQ</h2>
                        <p className="text-text-light mb-8 font-raleway">Everything You Need to Know About Dental Check-Ups</p>
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

export default OralHygiene;
