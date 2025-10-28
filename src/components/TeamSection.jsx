import React from 'react';

// You would replace these with the actual image paths
import drAnkitaImage from '../assets/images/denties1.png';
// Use a placeholder portrait for Dr. Anuj (external image)
const drAnujImage = 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop';

// Data for the dentists
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
    qualifications: "MDS – Prosthodontics, Crown & Bridge, and Implant Dentistry",
    experience: "10+ Years of Experience",
    imageUrl: drAnujImage,
  }
];

/**
 * A reusable card component to display dentist information
 */
const DentistCard = ({ name, specialty, qualifications, experience, imageUrl }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-visible text-center transition-transform duration-300 hover:scale-105 pt-12">
      {/* Circular portrait overlapping the card */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
        <div className="rounded-full p-1 bg-white shadow-md">
          <img
            src={imageUrl}
            alt={name}
            className="w-28 h-28 rounded-full object-cover object-center"
            loading="lazy"
          />
        </div>
      </div>

      <div className="p-6 pt-8">
        <h3 className="text-lg md:text-xl font-bold text-[#424040]">{name}</h3>
        <p className="text-[#88d4cb] font-semibold mt-1">{specialty}</p>
        <p className="text-gray-600 text-sm mt-3">{qualifications}</p>
        <p className="text-[#424040] font-medium mt-2">{experience}</p>
      </div>
    </div>
  );
};

/**
 * The main section component to display the team
 */
const TeamSection = () => {
  return (
    <section className="bg-[#f7f4f1] py-20 md:py-24">
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