import React from "react";
import abouthero from "../../assets/gallery/IMG_8214.JPG";

const DentalHero = () => {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-screen bg-[#f7f4f1] overflow-hidden">
      {/* Left Image Column */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto flex items-center justify-center ">
        <img
          src={abouthero}
          alt="Dental care"
          className="w-400 h-400 object-cover rounded-2xl shadow-md"

        />
      </div>


      {/* Right Text Column */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-6 sm:px-12 lg:px-20 py-12">
        <h1 className="text-6xl sm:text-6xl font-bold text-[#88d4cb] mb-6 font-roboto-slab">
          Your Journey to a <br /> Confident Smile Begins Here
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-8 font-raleway">
          At <span className="font-semibold">32 Dental Avenue</span>, a leading
          dental clinic in Rohini, our experienced specialists combine advanced
          technology and compassionate care to create beautiful, lasting smiles
          tailored to every patient’s needs.
        </p>

        <button className="w-fit bg-[#88d4cb] text-white font-raleway px-6 py-3 rounded-xl shadow-lg hover:bg-[#6bc2b9] transition duration-300">
          Learn More About Our Care
        </button>
      </div>
    </section>
  );
};

export default DentalHero;
