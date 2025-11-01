import React from "react";
import { FaTooth, FaClinicMedical, FaSmile } from "react-icons/fa";
import { motion } from "framer-motion";

export default function DentalJourney() {
  const milestones = [
    {
      year: "2016",
      title: "Humble Beginnings, Bigger Vision",
      description:
        "Our journey began in a modest rented clinic at Sector 16, Rohini. With limited space but unlimited passion, 32 Dental Avenue was founded on a simple mission — to make quality dental care accessible and patient-friendly.",
      icon: <FaTooth className="text-white text-4xl" />,
      color: "from-teal-400 to-cyan-500",
    },
    {
      year: "2019",
      title: "Expanding Horizons",
      description:
        "As our family of happy patients grew, so did our aspirations. We opened our second clinic in Sector 7, Rohini — a more advanced and centrally located space designed to deliver comfort, precision, and premium dental experiences.",
      icon: <FaClinicMedical className="text-white text-4xl" />,
      color: "from-pink-400 to-rose-500",
    },
    {
      year: "2024",
      title: "Redefining Dental Excellence",
      description:
        "With a decade of trust and thousands of transformed smiles, we proudly launched our third and most advanced center in Sector 5, Rohini. Equipped with state-of-the-art technology and modern aesthetics, it marks a new era of precision dentistry and patient care.",
      icon: <FaSmile className="text-white text-4xl" />,
      color: "from-indigo-400 to-violet-500",
    },
  ];

  return (
    <section className="w-full py-24 bg-[#f7f4f1] text-gray-800">
      <div className="max-w-6xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6 text-gray-900"
        >
          A Journey of Care, Commitment, and Confident Smiles
        </motion.h2>

        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-20 leading-relaxed">
          At <span className="font-semibold text-teal-600">32 Dental Avenue</span>, our story is one of growth,
          trust, and transformation. What began as a small practice with a big dream has evolved into one of Rohini’s
          most trusted names in advanced dental care. Every milestone reflects our belief — that every smile deserves
          precision, comfort, and compassion.
        </p>

        <div className="relative border-l-4 border-teal-300 ml-6 md:ml-12 space-y-20">
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-14 md:pl-20"
            >
              <div
                className={`absolute -left-8 md:-left-12 w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl`}
              >
                {item.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{item.year}</h3>
              <h4 className="text-2xl md:text-3xl font-semibold text-teal-600 mt-2">
                {item.title}
              </h4>
              <p className="text-lg md:text-xl text-gray-700 mt-3 max-w-3xl leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
