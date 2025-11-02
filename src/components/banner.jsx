import React from 'react';
import { motion } from 'framer-motion';
import { Smile, Timer, Crown, Award } from 'lucide-react';
import implantIcon from '../assets/images/implant.png'; // ⬅️ update the path to your PNG file

const stats = [
  {
    value: '10,000+',
    label: 'Smiles Transformed',
  },
  {
    value: '1,000+',
    label: 'Successful Implants',
    customIcon: implantIcon, // ⬅️ Custom image icon
  },
  {
    value: '85,000+',
    label: 'Aesthetic Crowns',
  },
  {
    value: '10+',
    label: 'Years of Excellence',
  }
];

const iconComponents = {
  0: Smile,
  1: null, // will use custom PNG for this
  2: Crown,
  3: Award,
};

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-[#f7f4f1] py-12 pb-8 px-4 sm:px-6 lg:px-8">
      {/* Decorative Backgrounds */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#88d4cb]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#afabfd]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const IconComponent = iconComponents[index];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-[#f7f4f1] rounded-2xl p-8 shadow-lg relative overflow-hidden">
                  {/* Light Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#88d4cb]/10 to-[#afabfd]/10 rounded-full blur-2xl"></div>

                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#88d4cb] to-[#88d4cb]/70 flex items-center justify-center shadow-lg">
                      {stat.customIcon ? (
                        <img
                          src={stat.customIcon}
                          alt={stat.label}
                          className="w-14 h-14 object-contain"
                        />
                      ) : (
                        <IconComponent className="w-10 h-10 text-white" />
                      )}
                    </div>
                  </div>

                  {/* Text */}
                  <h3 className="text-4xl font-bold text-[#424040] mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-lg font-semibold text-[#424040]/70">
                    {stat.label}
                  </p>
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
