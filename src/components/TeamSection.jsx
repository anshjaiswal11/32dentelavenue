import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import drAnkitaImage from "../assets/bg-removed/4.png";
import drAnujImage from "../assets/bg-removed/3.png";

const dentists = [
  {
    name: "Dr. Ankita Sharma Gambhir",
    specialty: "Pediatric Dentist",
    qualifications: "MDS – Pedodontics & Preventive Dentistry",
    experience: "10+ Years of Experience",
    imageUrl: drAnkitaImage,
    position: "center 90%",
  },
  {
    name: "Dr. Anuj Gambhir",
    specialty: "Prosthodontist & Oral Implantologist",
    qualifications:
      "MDS – Prosthodontics, Crown & Bridge, and Implant Dentistry",
    experience: "10+ Years of Experience",
    imageUrl: drAnujImage,
    position: "center 80%",
  },
];

const DentistProfile = ({
  name,
  specialty,
  qualifications,
  experience,
  imageUrl,
  position,
}) => {
  return (
    <Link to="/about" className="block w-full h-full">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-[#f7f4f1] rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden w-full h-full flex flex-col cursor-pointer transform hover:scale-[1.02]"
      >
        {/* IMAGE */}
        <div className="w-full h-[500px] bg-gradient-to-br from-[#EAF7F4] to-[#8FC6B7] overflow-hidden flex-shrink-0">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
            style={{ objectPosition: position }}
            loading="lazy"
          />
        </div>

        {/* TEXT */}
        <div className="p-6 text-center space-y-1 flex-1 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-gray-800 font-roboto-slab">
            {name}
          </h3>
          <h4 className="text-xl font-medium text-[#8FC6B7] font-raleway">
            {specialty}
          </h4>
          <p className="text-xl text-gray-500 font-raleway">
            {qualifications}
          </p>
          <p className="text-xl text-gray-500 font-raleway">
            {experience}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

const TeamSection = () => {
  return (
    <section className="bg-white pt-6 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-bold text-[#8FC6B7] font-roboto-slab mb-8 "
        >
          Meet Our Expert Dentists
        </motion.h2>

        <p className="text-center text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 font-raleway">
          Our experienced dentists and caring clinical staff ensure you feel supported throughout every treatment.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-raleway">
          {dentists.map((dentist) => (
            <DentistProfile key={dentist.name} {...dentist} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
