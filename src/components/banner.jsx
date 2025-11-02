import React from 'react';
import { motion } from 'framer-motion';
import { Smile, Crown, Award } from 'lucide-react';
import implantIcon from '../assets/images/implant.png'; // ⬅️ Update path if needed

const stats = [
  {
    value: '10,000+',
    label: 'Smiles Transformed',
  },
  {
    value: '1,000+',
    label: 'Successful Implants',
    customIcon: implantIcon,
  },
  {
    value: '85,000+',
    label: 'Aesthetic Crowns',
  },
  {
    value: '10+',
    label: 'Years of Excellence',
  },
];

const iconComponents = {
  0: Smile,
  1: null,
  2: Crown,
  3: Award,
};

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-[#f7f4f1] py-10 px-4 sm:px-6 lg:px-8">
      {/* Decorative Backgrounds */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#88d4cb]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#afabfd]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {stats.map((stat, index) => {
            const IconComponent = iconComponents[index];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-lg overflow-hidden">
                  {/* Gradient Accent */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#88d4cb]/10 to-[#afabfd]/10 rounded-2xl"></div>

                  {/* Icon */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-4 rounded-2xl bg-gradient-to-br from-[#88d4cb] to-[#88d4cb]/70 shadow-md">
                    {stat.customIcon ? (
                      <img
                        src={stat.customIcon}
                        alt={stat.label}
                        className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                      />
                    ) : (
                      <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    )}
                  </div>

                  {/* Text */}
                  <div className="relative z-10">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#424040] mb-1 sm:mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-[#424040]/80">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Banner;
