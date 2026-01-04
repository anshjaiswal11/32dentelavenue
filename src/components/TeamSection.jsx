import React from "react";
import { motion } from "framer-motion";
import drAnkitaImage from "../assets/bg-removed/bg-removed-mam.png";
import drAnujImage from "../assets/bg-removed/bg-removed-sir.png";

const dentists = [
  {
    name: "Dr. Ankita Sharma Gambhir",
    specialty: "Pediatric Dentist",
    qualifications: "MDS – Pedodontics & Preventive Dentistry",
    experience: "10+ Years of Experience",
    imageUrl: drAnkitaImage,
    position: "center 35%",
  },
  {
    name: "Dr. Anuj Gambhir",
    specialty: "Prosthodontist & Oral Implantologist",
    qualifications:
      "MDS – Prosthodontics, Crown & Bridge, and Implant Dentistry",
    experience: "10+ Years of Experience",
    imageUrl: drAnujImage,
    position: "center 35%",
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
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-[#f7f4f1] rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden w-full"
    >
      {/* IMAGE */}
      <div className="w-full h-[500px] bg-gradient-to-br from-[#EAF7F4] to-[#8FC6B7] overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
          style={{ objectPosition: position }}
          loading="lazy"
        />
      </div>

      {/* TEXT */}
      <div className="p-6 text-center space-y-1">
        <h3 className="text-xl font-semibold text-gray-800 font-['Roboto Slab']">
          {name}
        </h3>
        <h4 className="text-sm font-medium text-[#8FC6B7] font-['Raleway']">
          {specialty}
        </h4>
        <p className="text-sm text-gray-500 font-['Raleway']">
          {qualifications}
        </p>
        <p className="text-sm text-gray-500 font-['Raleway']">
          {experience}
        </p>
      </div>
    </motion.div>
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
          className="text-center text-5xl font-bold text-gray-800 font-['Roboto Slab'] mb-8"
        >
          Meet Our Expert Dentists
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-['Raleway']">
          {dentists.map((dentist) => (
            <DentistProfile key={dentist.name} {...dentist} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
