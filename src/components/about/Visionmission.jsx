import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaBullseye, FaHandsHelping } from "react-icons/fa";
const visionImg = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470";
const missionImg = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470";
const commitmentImg = "https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470";


const sections = [
  {
    title: "Our Vision",
    icon: <FaBullseye className="text-[#88d4cb] text-5xl md:text-6xl" />,
    text: "To create a place where innovation meets compassion — where every patient feels valued, cared for, and confident. We aim to set a new standard in modern dental care that inspires trust and transformation.",
    image: visionImg,
  },
  {
    title: "Our Mission",
    icon: <FaHandsHelping className="text-[#88d4cb] text-5xl md:text-6xl" />,
    text: "To deliver ethical, advanced, and patient-focused dental care using the latest technology. Our mission is to make every treatment journey seamless, transparent, and comfortable while building lifelong relationships based on trust.",
    image: missionImg,
  },
  {
    title: "Our Commitment",
    icon: <FaHeart className="text-[#88d4cb] text-5xl md:text-6xl" />,
    text: "We are devoted to excellence in every smile we create. From preventive care to full restoration, our commitment is honesty, precision, and personalized care that ensures lasting confidence.",
    image: commitmentImg,
  },
];

const VisionMission = () => {
  return (
    <section className="bg-[#f7f4f1] py-28 md:py-36 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-extrabold text-[#2c3e50] font-['Raleway'] mb-6">
            Our <span className="text-[#88d4cb]">Vision, Mission</span> & Commitment
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 font-['Open Sans'] max-w-3xl mx-auto leading-relaxed">
            Guided by care, driven by innovation — building trust through every smile.
          </p>
        </div>

        {/* Alternating Layouts */}
        <div className="flex flex-col gap-24 md:gap-40">
          {sections.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${
                i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-10 md:gap-20`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 relative">
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[26rem] md:h-[32rem] object-cover transform hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#00000020] to-transparent rounded-3xl"></div>
              </div>

              {/* Text + Icon */}
              <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
                <div className="mb-6 flex justify-center md:justify-start">{item.icon}</div>
                <h3 className="text-4xl md:text-5xl font-extrabold text-[#2c3e50] mb-6 font-['Raleway']">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-['Open Sans']">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
