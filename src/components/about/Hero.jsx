import React from "react";
import abouthero from "../../assets/images/abouthero.jpg";

const DentalHero = () => {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-screen bg-[#f7f4f1] overflow-hidden">
      {/* Left Image Column */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto flex items-center justify-center ">
        <img
          src={abouthero}
           alt="Dental care"
          className="w-full h-full object-cover rounded-2xl shadow-md"

        />
      </div>

      {/* Right Text Column */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Your Journey to a <br /> Confident Smile Begins Here
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          At <span className="font-semibold">32 Dental Avenue</span>, a leading
          dental clinic in Rohini, our experienced specialists combine advanced
          technology and compassionate care to create beautiful, lasting smiles
          tailored to every patient’s needs.
        </p>

        <button className="w-fit bg-[#88d4cb] text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-[#6bc2b9] transition duration-300">
          Learn More About Our Care
        </button>
      </div>
    </section>
  );
};

export default DentalHero;
