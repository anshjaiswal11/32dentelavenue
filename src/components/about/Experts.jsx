import React from "react";
import { motion } from "framer-motion";
import { FaUserMd, FaGraduationCap, FaAward } from "react-icons/fa";
import drAnkitaImage from "../../assets/bg-removed/9.png";
import drAnujImage from "../../assets/bg-removed/8.png";

const ExpertDentists = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="bg-white py-10 md:py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">

        {/* Header Section */}
        <motion.div
          {...fadeInUp}
          className="max-w-4xl mb-20 mx-auto text-center"
        >
          <h2 className="text-5xl font-bold md:text-6xl font-roboto-slab text-[#8FC6B7] mb-6 leading-tight">
            Meet Our <span className="text-[#8FC6B7]">Expert</span> Dentists
          </h2>
        </motion.div>

        {/* Doctors List */}
        <div className="space-y-32">

          {/* Dr. Ankita - Left Aligned Layout */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full lg:w-1/2"
            >
              {/* Background Decorative Element */}
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-[#8FC6B7]/10 rounded-full blur-3xl -z-10" />
              <img
                src={drAnkitaImage}
                alt="Dr. Ankita Sharma Gambhir"
                className="w-full h-[500px] md:h-[650px] object-cover rounded-2xl shadow-sm transition-all duration-700"
              />
              <div className="absolute bottom-6 right-6 bg-white py-4 px-8 rounded-xl shadow-xl hidden md:block">
                <p className="text-[#8FC6B7] font-bold text-3xl font-roboto-slab">10+</p>
                <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Years Experience</p>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="w-full lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8FC6B7]/10 text-[#8FC6B7] rounded-full mb-6 font-bold tracking-wide text-sm uppercase">
                <FaUserMd /> Pediatric Specialist
              </div>

              <h2 className="text-4xl md:text-5xl font-bold font-roboto-slab text-[#2c3e50] mb-4">
                Dr. Ankita Sharma Gambhir
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <FaGraduationCap className="text-[#8FC6B7] text-2xl mt-1" />
                  <p className="text-xl text-[#8FC6B7] font-raleway font-medium">
                    MDS – Pedodontics & Preventive Dentistry
                  </p>
                </div>
              </div>

              <div className="h-[1px] w-20 bg-[#8FC6B7] mb-8" />

              <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-raleway">
                Dr. Ankita Sharma completed her BDS (2015) from ESIC Dental College & Hospital,
                a reputed government institution, and later pursued her MDS in Pedodontics and
                Preventive Dentistry (2019).
                <br /><br />
                With over 10 years of clinical experience, she specializes in providing gentle,
                child-friendly dental care focused on comfort, trust, and preventive oral health.
                Her warm approach and expertise make every dental visit a positive experience
                for young patients and parents alike.
              </p>
            </motion.div>
          </div>

          {/* Dr. Anuj - Right Aligned Layout */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full lg:w-1/2"
            >
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#2c3e50]/5 rounded-full blur-3xl -z-10" />
              <img
                src={drAnujImage}
                alt="Dr. Anuj Gambhir"
                className="w-full h-[500px] md:h-[650px] object-cover rounded-2xl shadow-sm transition-all duration-700"
              />
              <div className="absolute top-6 left-6 bg-[#2c3e50] py-4 px-8 rounded-xl shadow-xl hidden md:block">
                <p className="text-[#8FC6B7] font-bold text-3xl font-roboto-slab">10+</p>
                <p className="text-white/70 uppercase tracking-widest text-xs font-bold">Years Experience</p>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="w-full lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8FC6B7]/10 text-[#8FC6B7] rounded-full mb-6 font-bold tracking-wide text-sm uppercase">
                <FaAward /> Prosthodontist & Implantologist
              </div>

              <h2 className="text-4xl md:text-5xl font-bold font-roboto-slab text-[#2c3e50] mb-4">
                Dr. Anuj Gambhir
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <FaGraduationCap className="text-[#8FC6B7] text-2xl mt-1" />
                  <p className="text-xl text-[#8FC6B7] font-raleway font-medium">
                    MDS – Prosthodontics, Crown & Bridge, and Implant Dentistry
                  </p>
                </div>
              </div>

              <div className="h-[1px] w-20 bg-[#8FC6B7] mb-8" />

              <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-raleway">
                Dr. Anuj Gambhir earned his BDS and MDS (2019) in Prosthodontics, Crown & Bridge,
                and Implant Dentistry from ESIC Dental College & Hospital, one of India’s leading
                government dental institutions.
                <br /><br />
                He brings advanced expertise in smile reconstruction, full-mouth rehabilitation,
                and implant-supported restorations. As a Consultant Prosthodontist and Oral
                Implantologist, Dr. Anuj is known for his precision, aesthetic sense, and
                commitment to delivering natural, confident smiles through modern dental innovation.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExpertDentists;