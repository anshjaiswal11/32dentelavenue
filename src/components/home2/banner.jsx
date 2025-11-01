import React from 'react';
import { motion } from 'framer-motion';
import { Smile, Timer, Crown, Award } from 'lucide-react';

const stats = [
  {
    value: '10,000+',
    label: 'Smiles Transformed',
    // detail: 'Successfully completing over 10,000 dental procedures with satisfied patients across Delhi NCR.'
  },
  {
    value: '1,000+',
    label: 'Successful Implants',
    // detail: 'Specializing in dental implants with a success rate of over 98% and lasting results.'
  },
  {
    value: '85,000+',
    label: 'Aesthetic Crowns',
    // detail: 'Crafting beautiful, durable crowns using the latest CAD/CAM technology and premium materials.'
  },
  {
    value: '10+',
    label: 'Years of Excellence',
    // detail: 'A decade of dental expertise, continuous learning, and commitment to patient care.'
  }
];

const iconComponents = {
  0: Smile,
  1: Crown,
  2: Award,
  3: Timer
};

const Banner = () => {
  return (
    <div className="relative bg-[#F2F1EF] py-12 px-6">
  <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {stats.map((stat,i)=>{
      const Icon=iconComponents[i];
      return(
        <motion.div key={i} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:i*0.1}}>
          <div className="bg-[#D9D2CC] p-8 rounded-2xl shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-28 h-28 bg-[#D9B18E]/20 rounded-full blur-2xl"></div>
            <div className="w-14 h-14 bg-[#A67564] flex items-center justify-center rounded-xl mb-4 shadow-md">
              <Icon className="text-[#F2F1EF] w-8 h-8" />
            </div>
            <h3 className="text-4xl font-bold text-[#723E31]">{stat.value}</h3>
            <p className="text-[#A67564] font-semibold mt-1">{stat.label}</p>
          </div>
        </motion.div>
      )
    })}
  </div>
</div>

  );
};

export default Banner;
