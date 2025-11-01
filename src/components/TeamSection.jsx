import React from "react";
import { motion } from "framer-motion";
import drAnkitaImage from "../assets/images/1.jpg";
import drAnujImage from "../assets/images/2.JPG";

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
  reverse,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center justify-center gap-12 md:gap-16 mb-16 md:mb-20`}
    >
      {/* IMAGE SECTION */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full md:w-1/2 flex justify-center"
      >
        <img
          src={imageUrl}
          alt={name}
          className="w-[90%] md:w-[80%] h-[28rem] md:h-[36rem] object-cover rounded-3xl shadow-xl border-8 border-white"
          loading="lazy"
        />
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
      </motion.div>

      {/* TEXT SECTION */}
      <motion.div
        initial={{ x: reverse ? 100 : -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left md:w-1/2 px-4"
      >
        <h3 className="text-3xl md:text-5xl font-extrabold text-[#2c3e50] mb-3 font-['Raleway'] leading-tight">
          {name}
        </h3>
        <h4 className="text-[#88d4cb] text-xl md:text-2xl font-bold uppercase tracking-wider mb-4 font-['Raleway']">
          {specialty}
        </h4>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4 font-['Open Sans']">
          {qualifications}
        </p>
        <p className="text-[#424040] text-xl md:text-2xl font-semibold font-['Raleway']">
          {experience}
        </p>
      </motion.div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <section className="bg-[#f7f4f1] py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-center text-[#2c3e50] mb-12 leading-tight font-['Raleway']"
        >
          Meet Our <span className="text-[#88d4cb]">Expert</span> Dentists
        </motion.h2>

        {/* PROFILES */}
        {dentists.map((dentist, index) => (
          <DentistProfile
            key={dentist.name}
            {...dentist}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
