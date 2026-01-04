import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
    {
        question: "Which is the best dental clinic in Rohini?",
        answer: "32 Dental Avenue is a leading dental clinic in Rohini, offering advanced treatments with experienced specialists.",
    },
    {
        question: "How do I choose the right dentist in Rohini?",
        answer: "Our certified and patient-focused dentists in Rohini provide personalized care for healthy, confident smiles.",
    },
    {
        question: "What is the dental implants cost in Delhi?",
        answer: "Dental implants cost in Delhi varies by case complexity, but we provide transparent pricing and world-class results.",
    },
    {
        question: "Are invisible braces available in Delhi?",
        answer: "Yes, we offer invisible braces in Delhi for discreet, effective teeth alignment using modern orthodontic technology.",
    },
    {
        question: "How is RCT treatment performed?",
        answer: "Root Canal Treatment (RCT) is performed using advanced techniques to remove infection and preserve your natural tooth comfortably.",
    },
    {
        question: "Does 32 Dental Avenue provide cosmetic and preventive care?",
        answer: "Yes, our clinic offers comprehensive cosmetic, preventive, and restorative dental care to ensure long-lasting oral health.",
    },
];

const Faq = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <section className="pt-10 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#8FC6B7] mb-4 font-roboto-slab">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 font-raleway">
                        Answers to common queries about our dental services, treatments, and expert care in Rohini.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div key={index} className="border border-gray-100 rounded-xl overflow-hidden">
                            <button
                                className="w-full px-6 py-4 text-left bg-[#f7f4f1] hover:bg-gray-50 flex items-center justify-between transition-colors"
                                onClick={() => toggleFaq(index)}
                            >
                                <span className="font-semibold text-gray-800 pr-8 font-roboto-slab">{faq.question}</span>
                                {openFaq === index ? (
                                    <ChevronUp className="w-5 h-5 text-[#88d4cb] flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                )}
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-6 py-4 text-gray-600 bg-white border-t border-gray-100 font-raleway">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
