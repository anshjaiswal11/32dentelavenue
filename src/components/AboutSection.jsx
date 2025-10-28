import React from 'react';

// Make sure to import your image
// You might need to change this path
import dentistImage from '../assets/images/dentist-patient.png';

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f7f4f1] to-white py-24 md:py-32">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#88d4cb]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#afabfd]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* --- Section Headings --- */}
        <div className="relative">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-[#424040] mb-6 relative">
            Why Choose 32 Dental Avenue?
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-[#88d4cb]/20 rounded-full hidden md:block"></div>
          </h2>
          <p className="text-lg md:text-xl text-[#424040]/70 text-center max-w-3xl mx-auto mt-6 leading-relaxed">
            At 32 Dental Avenue, a leading dental clinic in Rohini, clinical excellence meets compassionate care. 
            Our experienced dentists combine 10+ years of expertise with advanced technology to deliver precise, 
            aesthetic, and long-lasting dental solutions trusted by patients locally and internationally.
          </p>
        </div>

        {/* --- 2-Column Layout --- */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 mt-20">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-1/2 text-[#424040] space-y-10">
            <div className="group hover:translate-x-2 transition-transform duration-300 ease-out">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#88d4cb]/10 flex items-center justify-center group-hover:bg-[#88d4cb]/20 transition-colors">
                  <span className="text-[#88d4cb] font-bold">01</span>
                </div>
                <h3 className="text-2xl font-bold text-[#424040]">Experienced Specialists</h3>
              </div>
              <p className="text-[#424040]/70 leading-relaxed pl-16">
                Led by skilled prosthodontists and pediatric dentists with 10+ years of clinical expertise.
              </p>
            </div>
            
            <div className="group hover:translate-x-2 transition-transform duration-300 ease-out">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#afabfd]/10 flex items-center justify-center group-hover:bg-[#afabfd]/20 transition-colors">
                  <span className="text-[#afabfd] font-bold">02</span>
                </div>
                <h3 className="text-2xl font-bold text-[#424040]">Patient-Centric Care</h3>
              </div>
              <p className="text-[#424040]/70 leading-relaxed pl-16">
                Personalized, gentle treatments ensuring comfort, trust, and long-term oral wellness.
              </p>
            </div>
            
            <div className="group hover:translate-x-2 transition-transform duration-300 ease-out">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#88d4cb]/10 flex items-center justify-center group-hover:bg-[#88d4cb]/20 transition-colors">
                  <span className="text-[#88d4cb] font-bold">03</span>
                </div>
                <h3 className="text-2xl font-bold text-[#424040]">Advanced Technology</h3>
              </div>
              <p className="text-[#424040]/70 leading-relaxed pl-16">
                Equipped with modern dental systems and digital precision for enhanced outcomes.
              </p>
            </div>
            
            <div className="group hover:translate-x-2 transition-transform duration-300 ease-out">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#afabfd]/10 flex items-center justify-center group-hover:bg-[#afabfd]/20 transition-colors">
                  <span className="text-[#afabfd] font-bold">04</span>
                </div>
                <h3 className="text-2xl font-bold text-[#424040]">Comprehensive Expertise</h3>
              </div>
              <p className="text-[#424040]/70 leading-relaxed pl-16">
                End-to-end dental solutions, from aesthetic smile makeovers to advanced restorative treatments, all under one roof.
              </p>
            </div>

            {/* Button with gradient effect */}
            <div className="relative mt-12 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#88d4cb] to-[#afabfd] rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <button className="relative w-full sm:w-auto bg-gradient-to-r from-[#88d4cb] to-[#88d4cb] hover:to-[#afabfd] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Learn More About Us
              </button>
            </div>
          </div>

          {/* Right Column: Image with Modern Frame */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Decorative background elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#88d4cb]/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-[#afabfd]/10 rounded-full blur-2xl"></div>
              
              {/* Image container with modern styling */}
              <div className="relative bg-white p-4 rounded-3xl shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#88d4cb]/10 to-[#afabfd]/10 rounded-3xl"></div>
                <img
                  src={dentistImage}
                  alt="Dentist treating a patient"
                  className="w-full h-auto rounded-2xl relative z-10 transform transition-transform duration-500 hover:scale-[1.02]"
                  loading="lazy"
                />
                
                {/* Decorative corner accent */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#88d4cb] rounded-lg transform rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;