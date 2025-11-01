import React from 'react';
// Icon for the list, replacing the pink checkmark
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images directly
import mainImage from '../assets/images/aboutpng2.jpg';
import secondaryImage from '../assets/images/Aboutimg1.jpg';

// Your content, structured for the new layout
const features = [
  {
    title: "Experienced Specialists",
    description: "Led by skilled prosthodontists and pediatric dentists with 10+ years of clinical expertise."
  },
  {
    title: "Patient-Centric Care",
    description: "Personalized, gentle treatments ensuring comfort, trust, and long-term oral wellness."
  },
  {
    title: "Advanced Technology",
    description: "Equipped with modern dental systems and digital precision for enhanced outcomes."
  },
  {
    title: "Comprehensive Expertise",
    description: "End-to-end dental solutions, from aesthetic smile makeovers to advanced restorative treatments, all under one roof."
  }
];

const CommitmentSection = () => {
  return (
    <section className="bg-[#F7F4F1] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- Left Column: Text Content --- */}
          <div className="flex flex-col gap-6">
            <span 
              className="font-bold uppercase tracking-wider text-lg" 
              style={{ color: '#88D4CB' }}
            >
              Why Choose Us?
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-[#424040] tracking-tight leading-tight">
              Why Choose 32 Dental Avenue?
            </h2>
            
            <p className="text-lg md:text-xl text-[#424040]/80 leading-relaxed font-medium">
              At 32 Dental Avenue, a leading dental clinic in Rohini, clinical excellence meets compassionate care. 
              Our experienced dentists combine 10+ years of expertise with advanced technology to deliver precise, 
              aesthetic, and long-lasting dental solutions.
            </p>

            {/* Features List */}
            <div className="mt-6 space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div>
                    <CheckCircle 
                      className="w-6 h-6 mt-1" 
                      style={{ color: '#88D4CB' }} 
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#424040]">
                      {feature.title}
                    </h3>
                    <p className="text-[#424040]/70 mt-2 font-medium leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Learn more button linking to About page */}
            <div className="mt-8">
              <Link to="/about" className="inline-flex items-center px-10 py-5 rounded-full text-white font-semibold shadow-lg hover:opacity-95 transition-opacity"
                style={{ backgroundColor: '#88d4cb' }}
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* --- Right Column: Image Layout --- */}
          <div className="relative h-full min-h-[400px]">
            {/* Main Image */}
            <img 
              src={mainImage} 
              alt="Main clinic room"
              className="w-full h-auto object-cover rounded-xl shadow-lg"
              loading="lazy"
            />
            
            {/* Secondary, Inset Image */}
            <img 
              src={secondaryImage}
              alt="Secondary clinic room"
              className="absolute w-1/2 h-100 -bottom-0 -right-0 object-cover rounded-xl shadow-2x1 border-4 border-white"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;