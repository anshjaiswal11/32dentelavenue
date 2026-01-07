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
import docAnkita from '../../assets/bg-removed/4.png';
import docAnuj from '../../assets/bg-removed/3.png';
import serviceExtraction from '../../assets/images/service-extraction.png';
import serviceSurgical from '../../assets/images/service-surgical.png';
import serviceImpacted from '../../assets/images/service-impacted.png';
import Testimonals from '../review-services';
import CTASection from '../CTASection';
import heroimage from '../../assets/home-services-img/wisdom-tooth.jpg'
import image01 from '../../assets/newimg/IMG_83711.jpg'
import image02 from '../../assets/newimg/IMG_81192.jpg'
import image03 from '../../assets/newimg/IMG_83699.jpg'
import image04 from '../../assets/newimg/IMG_83900.jpg'

const WisdomTooth = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const services = [
        {
            title: "Painless Extraction",
            description: "Simple, non-surgical removal of fully erupted wisdom teeth under local anesthesia. A quick and virtually painless procedure for teeth that have grown in straight but need removal.",
            icon: <HeartPulse className="w-8 h-8 text-secondary-teal" />,
            image: serviceExtraction
        },
        {
            title: "Surgical Extraction",
            description: "Specialized removal of broken, decayed, or complex wisdom teeth. Our expert surgeons ensure minimal discomfort and rapid healing through precise surgical techniques.",
            icon: <Activity className="w-8 h-8 text-secondary-teal" />,
            image: serviceSurgical
        },
        {
            title: "Impacted Wisdom Tooth Removal",
            description: "Expert surgical removal of impacted teeth trapped beneath the gum or bone. We use advanced imaging to plan safe extraction, preventing future pain, infection, and crowding.",
            icon: <Zap className="w-8 h-8 text-secondary-teal" />,
            image: serviceImpacted
        }
    ];

    const faqs = [
        {
            question: "Is wisdom tooth removal painful?",
            answer: "No, wisdom tooth removal is performed under effective local anesthesia, so you won't feel pain during the procedure. Post-operative discomfort is managed with prescribed medication and typically subsides within a few days."
        },
        {
            question: "Do I really need to remove my wisdom teeth?",
            answer: "Not always. Removal is recommended if they are impacted, causing pain, damaging neighboring teeth, or are decayed. A consultation with our experts using digital X-rays will determine if removal is necessary for you."
        },
        {
            question: "How long does the recovery take?",
            answer: "Most patients recover fully within 3-4 days. You can usually return to normal activities the next day, though you should avoid strenuous exercise and hard foods for a few days to ensure proper healing."
        },
        {
            question: "What is an impacted wisdom tooth?",
            answer: "An impacted wisdom tooth is one that hasn't fully erupted through the gum line because it's blocked by other teeth or bone. This can cause pain, infection, and damage to adjacent teeth if left untreated."
        },
        {
            question: "Are there any side effects of the surgery?",
            answer: "Common temporary side effects include swelling and mild discomfort. Serious complications are rare when performed by experienced oral surgeons like ours. We provide detailed aftercare instructions to minimize any risks."
        },
        {
            question: "Can I eat normally after the surgery?",
            answer: "You should stick to a soft diet (soups, yogurt, smoothies) for the first 24-48 hours. You can gradually reintroduce solid foods as healing progresses, usually within a few days."
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
                            Wisdom Tooth Surgery in Rohini, Delhi
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-text-charcoal mb-6 leading-tight font-raleway">
                            Safe, Comfortable, <span className="text-secondary-teal">Expert Care</span>
                        </h1>
                        <p className="text-lg text-text-light mb-8 max-w-xl font-raleway">
                            Experience painless, and stress-free wisdom tooth removal by expert surgeons designed for fast recovery and maximum comfort.
                        </p>
                        <a href="#booking" className="bg-secondary-teal text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-[#76c4bb] transition-all transform hover:-translate-y-1 font-roboto-slab inline-block">
                            Book an Appointment
                        </a>
                    </div>
                    <div className="relative">
                        {/* Placeholder for Hero Image */}
                        <div className="rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
                            <img
                                src={heroimage}
                                alt="Comfortable Dental Care"
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
                        <h2 className="text-3xl md:text-4xl font-bold text-[#8FC6B7] mb-4 font-roboto-slab">Specialized Procedures</h2>
                        <p className="text-text-light max-w-3xl mx-auto font-raleway">
                            Expert surgical solutions for wisdom teeth, ensuring safety, comfort, and optimal oral health.
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
                mainTitle="PATIENT EXPERIENCES"
                subtitle="Pain-Free & Stress-Free"
                description="At 32 Dental Avenue, we understand the anxiety surrounding wisdom tooth removal. That's why we prioritize patient comfort above all else. Our patients consistently report surprisingly painless procedures and smooth recoveries, thanks to our gentle approach and expert care."

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
                                Our Facility
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
                                        <p className="text-text-light text-sm font-raleway">Digital scanners, high-resolution X-rays, and CAD/CAM systems for accurate diagnoses.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-white p-3 rounded-lg shadow-sm mr-4 text-secondary-teal">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-text-charcoal mb-1 font-roboto-slab">Sterilization & Safety Protocols</h4>
                                        <p className="text-text-light text-sm font-raleway">Strict international sterilization standards using Class-B autoclaves and advanced infection control.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-white p-3 rounded-lg shadow-sm mr-4 text-secondary-teal">
                                        <HeartPulse className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-text-charcoal mb-1 font-roboto-slab">Patient Comfort Focus</h4>
                                        <p className="text-text-light text-sm font-raleway">Ergonomic chairs, calming ambiance, and gentle care techniques to ensure a relaxed experience.</p>
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
                        Expert Wisdom Tooth Removal in Rohini
                    </h2>
                    <p className="text-text-light text-lg mb-8 leading-relaxed font-raleway">
                        Don't let wisdom tooth pain disrupt your life. At 32 Dental Avenue, our specialized oral surgeons provide safe, quick, and comfortable wisdom tooth removal services. Whether it's a simple extraction or complex impaction surgery, we have the expertise and technology to handle it with care.
                    </p>
                    <p className="text-text-light text-lg mb-8 leading-relaxed font-raleway">
                        We believe in keeping you informed and comfortable every step of the way. From digital diagnostics to detailed aftercare, we ensure your journey to a pain-free smile is smooth and worry-free. Trust us for the best wisdom tooth care in Delhi.
                    </p>
                    <a href="#booking" className="bg-secondary-teal text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-[#76c4bb] transition-all font-roboto-slab inline-block">
                        Book Your Relief Today
                    </a>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-charcoal mb-4 font-roboto-slab">FAQ</h2>
                        <p className="text-text-light font-raleway">Common Questions About Wisdom Tooth Surgery</p>
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

export default WisdomTooth;
