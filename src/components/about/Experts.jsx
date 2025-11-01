import React from "react";
import { motion } from "framer-motion";
import { FaUserMd, FaTooth, FaSmile } from "react-icons/fa";
import drAnkitaImage from "../../assets/images/1.jpg";
import drAnujImage from "../../assets/images/2.jpg";

const ExpertDentists = () => {
  return (
    <section className="bg-[#f7f4f1] py-28 md:py-40 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-[#2c3e50] font-['Raleway'] mb-6">
            Meet Our <span className="text-[#88d4cb]">Expert</span> Dentists
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-['Open Sans'] leading-relaxed">
            Compassionate care. Advanced expertise. Creating confident smiles for every age.
          </p>
        </motion.div>

        {/* Dr. Ankita */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 mb-32"
        >
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={drAnkitaImage}
              alt="Dr. Ankita Sharma Gambhir"
              className="w-[90%] md:w-[80%] h-[30rem] md:h-[38rem] object-cover rounded-3xl shadow-2xl border-8 border-white"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-4 font-['Raleway'] flex items-center justify-center md:justify-start gap-3">
              <FaUserMd className="text-[#88d4cb]" /> Dr. Ankita Sharma Gambhir
            </h3>
            <p className="text-[#88d4cb] text-2xl font-semibold mb-4 font-['Raleway'] uppercase">
              Pediatric Dentist
            </p>
            <p className="text-gray-700 text-xl md:text-2xl leading-relaxed mb-4 font-['Open Sans']">
              MDS – Pedodontics & Preventive Dentistry
            </p>
            <p className="text-[#424040] text-xl md:text-2xl font-semibold mb-6 font-['Raleway']">
              10+ Years of Experience
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-['Open Sans']">
              Dr. Ankita Sharma completed her BDS (2015) from ESIC Dental College & Hospital, a reputed
              government institution, and later pursued her MDS in Pedodontics and Preventive Dentistry (2019)
              from IPDC, Ghaziabad. With over 10 years of clinical experience, she specializes in providing gentle,
              child-friendly dental care focused on comfort, trust, and preventive oral health.
              <br />
              <br />
              Her warm approach and expertise make every dental visit a positive experience for young patients and parents alike.
            </p>
          </div>
        </motion.div>

        {/* Dr. Anuj */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 md:gap-20"
        >
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={drAnujImage}
              alt="Dr. Anuj Gambhir"
              className="w-[90%] md:w-[80%] h-[30rem] md:h-[40rem] object-cover rounded-3xl shadow-2xl border-8 border-white"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-4 font-['Raleway'] flex items-center justify-center md:justify-start gap-3">
              <FaUserMd className="text-[#88d4cb]" /> Dr. Anuj Gambhir
            </h3>
            <p className="text-[#88d4cb] text-2xl font-semibold mb-4 font-['Raleway'] uppercase">
              Prosthodontist & Oral Implantologist
            </p>
            <p className="text-gray-700 text-xl md:text-2xl leading-relaxed mb-4 font-['Open Sans']">
              MDS – Prosthodontics, Crown & Bridge, and Implant Dentistry
            </p>
            <p className="text-[#424040] text-xl md:text-2xl font-semibold mb-6 font-['Raleway']">
              10+ Years of Experience
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-['Open Sans']">
              Dr. Anuj Gambhir earned his BDS and MDS (2019) in Prosthodontics, Crown & Bridge, and Implant
              Dentistry from ESIC Dental College & Hospital, one of India’s leading government dental institutions.
              He brings advanced expertise in smile reconstruction, full-mouth rehabilitation, and implant-supported
              restorations.
              <br />
              <br />
              As a consultant prosthodontist and oral implantologist, Dr. Anuj is known for his precision,
              aesthetic sense, and commitment to delivering natural, confident smiles through modern dental innovation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertDentists;
