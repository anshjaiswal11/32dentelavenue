import React from 'react';

// Make sure to import your image
// You might need to change this path
import dentistImage from '../assets/images/dentist-patient.png';

const AboutSection = () => {
  return (
    // Section container using padding and the light gray background
    <section className="bg-gray-50 py-20 md:py-24">
      <div className="container mx-auto px-4">
        {/* --- Section Headings --- */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
          Why Choose 32 Dental Avenue?
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mt-6 leading-relaxed">
          At 32 Dental Avenue, a leading dental clinic in Rohini, clinical excellence meets compassionate care. 
          Our experienced dentists combine 10+ years of expertise with advanced technology to deliver precise, 
          aesthetic, and long-lasting dental solutions trusted by patients locally and internationally.
        </p>

        {/* --- 2-Column Layout --- */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 mt-16">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-1/2 text-gray-700 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Experienced Specialists</h3>
              <p className="text-gray-600 leading-relaxed">
                Led by skilled prosthodontists and pediatric dentists with 10+ years of clinical expertise.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Patient-Centric Care</h3>
              <p className="text-gray-600 leading-relaxed">
                Personalized, gentle treatments ensuring comfort, trust, and long-term oral wellness.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Advanced Technology</h3>
              <p className="text-gray-600 leading-relaxed">
                Equipped with modern dental systems and digital precision for enhanced outcomes.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">4. Comprehensive Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                End-to-end dental solutions, from aesthetic smile makeovers to advanced restorative treatments, all under one roof.
              </p>
            </div>

            {/* Button */}
            <button className="mt-8 bg-secondary-teal text-white font-semibold py-4 px-8 rounded-lg hover:bg-secondary-teal/90 transition-all duration-300 shadow-lg hover:shadow-xl">
              Learn More About Us
            </button>
          </div>

          {/* Right Column: Image with Frame */}
          <div className="w-full lg:w-1/2">
            {/* Outer frame with padding, rounded corners, and shadow */}
            <div className="bg-white p-3 md:p-4 rounded-3xl shadow-lg">
              <img
                src={dentistImage}
                alt="Dentist treating a patient"
                className="w-full h-auto rounded-2xl" // Inner image with rounding
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;