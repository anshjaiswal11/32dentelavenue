import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import mainImage from '../../assets/images/aboutpng2.jpg';
import secondaryImage from '../../assets/images/Aboutimg1.jpg';

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
    <section className="bg-[#D9D2CC] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- Left Column --- */}
          <div className="flex flex-col gap-6">
            <span 
              className="font-bold uppercase tracking-wider text-lg"
              style={{ color: '#D9B18E' }}
            >
              Why Choose Us?
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-[#723E31] tracking-tight leading-tight">
              Why Choose 32 Dental Avenue?
            </h2>
            
            <p className="text-lg md:text-xl text-[#A67564] leading-relaxed font-medium">
              At 32 Dental Avenue, a leading dental clinic in Rohini, clinical excellence meets compassionate care. 
              Our experienced dentists combine 10+ years of expertise with advanced technology to deliver precise, 
              aesthetic, and long-lasting dental solutions.
            </p>

            <div className="mt-6 space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle 
                    className="w-6 h-6 mt-1"
                    style={{ color: '#D9B18E' }} 
                  />
                  <div>
                    <h3 className="text-xl font-bold text-[#723E31]">
                      {feature.title}
                    </h3>
                    <p className="text-[#A67564] mt-2 font-medium leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link 
                to="/about" 
                className="inline-flex items-center px-10 py-5 rounded-full text-white font-semibold shadow-md transition-all duration-300"
                style={{ backgroundColor: '#D9B18E' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#A67564'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#D9B18E'}
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* --- Right Column --- */}
          <div className="relative h-full min-h-[400px]">
            <img 
              src={mainImage} 
              alt="Main clinic room"
              className="w-full h-auto object-cover rounded-2xl shadow-xl"
              loading="lazy"
            />
            <img 
              src={secondaryImage}
              alt="Secondary clinic room"
              className="absolute w-1/2 -bottom-6 -right-6 object-cover rounded-2xl shadow-lg border-4 border-[#F2F1EF]"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
