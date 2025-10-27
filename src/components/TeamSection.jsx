import React from 'react';

// You would replace these with the actual image paths
import drAnkitaImage from '../assets/images/service-icon-5.png';
import drAnujImage from '../assets/images/service-icon-5.png';

// Data for the dentists
const dentists = [
  {
    name: "Dr. Ankita Sharma Gambhir",
    specialty: "Pediatric Dentist",
    qualifications: "MDS – Pedodontics & Preventive Dentistry",
    experience: "10+ Years of Experience",
    imageUrl: drAnkitaImage, // Placeholder image
  },
  {
    name: "Dr. Anuj Gambhir",
    specialty: "Prosthodontist & Oral Implantologist",
    qualifications: "MDS – Prosthodontics, Crown & Bridge, and Implant Dentistry",
    experience: "10+ Years of Experience",
    imageUrl: drAnujImage, // Placeholder image
  }
];

/**
 * A reusable card component to display dentist information
 */
const DentistCard = ({ name, specialty, qualifications, experience, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center transition-transform duration-300 hover:scale-105">
      <div className="w-full h-56 bg-gray-200">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover object-center" 
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-indigo-600 font-semibold mt-1">{specialty}</p>
        <p className="text-gray-600 text-sm mt-3">{qualifications}</p>
        <p className="text-gray-800 font-medium mt-2">{experience}</p>
      </div>
    </div>
  );
};

/**
 * The main section component to display the team
 */
const TeamSection = () => {
  return (
    <section className="bg-gray-50 py-20 md:py-24">
      <div className="container mx-auto px-4">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Meet Our Expert Dentists
        </h2>

        {/* Responsive Grid for Dentist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {dentists.map((dentist) => (
            <DentistCard
              key={dentist.name}
              name={dentist.name}
              specialty={dentist.specialty}
              qualifications={dentist.qualifications}
              experience={dentist.experience}
              imageUrl={dentist.imageUrl}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default TeamSection;