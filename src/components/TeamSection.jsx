import React from "react";
import { motion } from "framer-motion";
import drAnkitaImage from "../assets/images/drAnkitaImage.jpg";
import drAnujImage from "../assets/images/drAnujImage.jpg";


const dentists = [
  {
    name: "Dr. Ankita Sharma Gambhir",
    specialty: "Pediatric Dentist",
    qualifications: "MDS – Pedodontics & Preventive Dentistry",
    experience: "10+ Years of Experience",
    imageUrl: drAnkitaImage,
  },
  {
    name: "Dr. Anuj Gambhir",
    specialty: "Prosthodontist & Oral Implantologist",
    qualifications:
      "MDS – Prosthodontics, Crown & Bridge, and Implant Dentistry",
    experience: "10+ Years of Experience",
    imageUrl: drAnujImage,

  },
];

const DentistProfile = ({
  name,
  specialty,
  qualifications,
  experience,
  imageUrl,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl shadow-lg overflow-hidden max-w-xl mx-auto"
    >
      {/* IMAGE SECTION */}
      <div className="relative w-full">
        <img
          src={imageUrl}
          alt={name}
          className="w-full aspect-[2/2] object-cover object-top"
          loading="lazy"
        />
      </div>

      {/* TEXT SECTION */}
      <div className="p-8 md:p-10 space-y-4">
        <h3 className="text-2xl md:text-2xl font-bold text-[#2c3e50] font-['Roboto Slab'] leading-tight">
          {name}
        </h3>

        <h4 className="text-lg md:text-lg font-semibold text-[#2c3e50] font-['Raleway']">
          {specialty}
        </h4>

        <div className="space-y-2 text-gray-600">
          <p className="flex items-start gap-2 text-base md:text-base font-['Raleway']">
            <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {qualifications}
          </p>

          <p className="flex items-start gap-2 text-base md:text-base font-['Raleway']">
            <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {experience}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  return (
    <section className="bg-[#f7f4f1] pt-10 pb-20 md:pt-12 md:pb-28">
      <div className="container mx-auto px-6 lg:px-12">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-5xl font-bold text-[#2c3e50] font-['Roboto Slab'] leading-tight">
            Meet Our Expert Dentists
          </h2>
        </motion.div>

        {/* PROFILES GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {dentists.map((dentist) => (
            <DentistProfile key={dentist.name} {...dentist} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;