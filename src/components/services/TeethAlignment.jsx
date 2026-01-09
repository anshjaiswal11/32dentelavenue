import React, { useState } from 'react';
import {
    Smile,
    Sparkles,
    ShieldCheck,
    Building2,
    Stethoscope,
    ChevronDown,
    ChevronUp,
    Clock,
    CheckCircle2
} from 'lucide-react';
import AppointmentBooking from '../Booking';
import docAnkita from '../../assets/bg-removed/4.png';
import docAnuj from '../../assets/bg-removed/3.png';
import serviceAligners from '../../assets/images/service-aligners.png';
import serviceClearBraces from '../../assets/images/service-clear-braces.png';
import serviceMetalBraces from '../../assets/images/service-metal-braces.png';
import Testimonals from '../review-services';
import CTASection from '../CTASection';
import heroimage from '../../assets/home-services-img/teethaligement.jpg'
import image01 from '../../assets/newimg/IMG_83711.jpg'
import image02 from '../../assets/newimg/IMG_81192.jpg'
import image03 from '../../assets/newimg/IMG_83699.jpg'
import image04 from '../../assets/newimg/IMG_83900.jpg'
import doctorMam from '../../assets/gallery/IMG_8226.JPG';

const TeethAlignment = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const services = [
        {
            title: "Clear Aligners",
            description: "Transparent, removable trays that straighten teeth discreetly and comfortably. Ideal for adults and teens looking for a flexible, lifestyle-friendly alignment option with predictable digital treatment planning.",
            icon: <Smile className="w-8 h-8 text-secondary-teal" />,
            image: serviceAligners
        },
        {
            title: "Clear Braces",
            description: "Tooth-colored ceramic braces that blend with your natural teeth, providing effective alignment with a more aesthetic, less noticeable appearance than traditional metal braces.",
            icon: <Sparkles className="w-8 h-8 text-secondary-teal" />,
            image: serviceClearBraces
        },
        {
            title: "Metal Braces",
            description: "A reliable and cost-effective orthodontic option for correcting crowding, spacing, and bite issues with strong, precise control over tooth movement.",
            icon: <div className="w-8 h-8 rounded-full border-2 border-secondary-teal flex items-center justify-center text-secondary-teal font-bold text-xs">MB</div>,
            image: serviceMetalBraces
        }
    ];

    const faqs = [
        {
            question: "Which top-rated orthodontic clinic offers the best teeth alignment treatments?",
            answer: "Top-rated orthodontic clinic in Rohini provide advanced technology, experienced specialists, and personalized alignment plans. At 32 Dental Avenue, we offer clear aligners, braces, and digital orthodontics for precise, predictable results."
        },
        {
            question: "What types of teeth alignment braces are available at a dental clinic in Rohini?",
            answer: "A good dental clinic in Rohini like 32 Dental Avenue, provides metal braces, ceramic (clear) braces, and self-ligating braces. Each option effectively corrects crooked teeth, spacing, and bite issues."
        },
        {
            question: "What does teeth alignment treatment help with?",
            answer: "Teeth alignment treatment fixes crooked teeth, gaps, overcrowding, and bite issues like overbite or underbite. It improves both appearance and oral health by ensuring proper positioning and function."
        },
        {
            question: "Are clear aligners a good option for teeth straightening?",
            answer: "Yes. Clear aligners are a popular, nearly invisible, comfortable option for mild to moderate alignment issues. They allow easy cleaning, no food restrictions, and predictable digital treatment planning."
        },
        {
            question: "How painful is teeth alignment treatment?",
            answer: "Teeth alignment isn’t usually painful, but mild pressure or discomfort is normal during adjustments or when switching aligner trays. This settles quickly and indicates that your teeth are moving correctly."
        },
        {
            question: "How long does teeth alignment take?",
            answer: "Treatment time varies based on your case, ranging from 6 months to 24 months. Clear aligners and self-ligating braces may offer faster, more efficient results for suitable cases."
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
                            Teeth Alignment Treatment in Rohini, Delhi
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-text-charcoal mb-6 leading-tight font-raleway">
                            Straight Teeth, <span className="text-secondary-teal">Confident Smile</span>
                        </h1>
                        <p className="text-lg text-text-light mb-8 max-w-xl font-raleway">
                            Experience painless, modern orthodontic care designed to correct gaps, crowding, and bite issues with ease.
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
                                alt="Straight Teeth Smile"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* Teeth Alignment Services */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-bg">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#8FC6B7] mb-4 font-roboto-slab">Teeth Alignment Services</h2>
                        <p className="text-text-light max-w-3xl mx-auto font-raleway">
                            Perfecting your smile with modern, comfortable, and highly effective orthodontic solutions.
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
                                        loading="lazy"
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
                mainTitle="SUCCESS STORIES"
                subtitle="Real Patients, Real Smiles"
                description="Discover inspiring journeys of our patients who transformed their smiles and lives with our expert teeth alignment treatments. From clear aligners to braces, see how personalized care and advanced orthodontics made a difference."
            />
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
                                    <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                                        A prosthodontics expert with 10+ years of experience, specializing in dental implants and advanced restorative procedures.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <CTASection image={doctorMam} />


            {/* Our Facility */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-bg">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <img src={image01} alt="Facility 1" className="rounded-2xl shadow-lg w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500" loading="lazy" />
                                    <img src={image02} alt="Facility 2" className="rounded-2xl shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500" loading="lazy" />
                                </div>
                                <div className="pt-8 space-y-4">
                                    <img src={image03} alt="Facility 3" className="rounded-2xl shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500" loading="lazy" />
                                    <img src={image04} alt="Facility 4" className="rounded-2xl shadow-lg w-full h-40 object-cover transform hover:scale-105 transition-transform duration-500" loading="lazy" />
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
                                        <Smile className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-text-charcoal mb-1 font-roboto-slab">Digital Smile Design (DSD)</h4>
                                        <p className="text-text-light text-sm font-raleway">Map and preview your smile digitally for predictable results and customized planning.</p>
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
                        Advanced Teeth Alignment in Rohini
                    </h2>
                    <p className="text-text-light text-lg mb-8 leading-relaxed font-raleway">
                        At 32 Dental Avenue, we make achieving a beautifully aligned smile simple and stress-free. If you’re struggling with crooked teeth, spacing issues, or an uneven bite, our orthodontic specialists in Rohini, Delhi are here to guide you toward the perfect smile. Using advanced technology and precise digital planning, we create alignment treatments that are comfortable, effective, and tailored just for you.
                    </p>
                    <p className="text-text-light text-lg mb-8 leading-relaxed font-raleway">
                        Choose from clear aligners, clear braces, or traditional braces, each designed to move your teeth gently and predictably. With expert monitoring and a patient-first approach, we ensure steady progress and long-lasting results. Step into a straighter smile and renewed confidence with 32 Dental Avenue.
                    </p>
                    <a href="#booking" className="bg-secondary-teal text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-[#76c4bb] transition-all font-roboto-slab inline-block">
                        Book Your Transformation
                    </a>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-charcoal mb-4 font-roboto-slab">FAQ</h2>
                        <p className="text-text-light font-raleway">Your Guide to Braces, Aligners & Teeth Alignment</p>
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

export default TeethAlignment;
