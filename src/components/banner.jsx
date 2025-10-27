import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stats = [
  {
    value: '10,000+',
    label: 'Smiles Transformed',
    detail: 'Successfully completing over 10,000 dental procedures with satisfied patients across Delhi NCR.'
  },
  {
    value: '1,000+',
    label: 'Successful Implants',
    detail: 'Specializing in dental implants with a success rate of over 98% and lasting results.'
  },
  {
    value: '85,000+',
    label: 'Aesthetic Crowns',
    detail: 'Crafting beautiful, durable crowns using the latest CAD/CAM technology and premium materials.'
  },
  {
    value: '10+',
    label: 'Years of Excellence',
    detail: 'A decade of dental expertise, continuous learning, and commitment to patient care.'
  }
];

const Banner = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="bg-neutral-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="relative"
              onMouseEnter={() => setExpandedIndex(index)}
              onMouseLeave={() => setExpandedIndex(null)}
            >
              <motion.div
                className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold text-secondary-teal mb-2">
                  {stat.value}
                </div>
                <div className="text-text-charcoal font-medium">
                  {stat.label}
                </div>
                
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-4 text-sm text-gray-600 overflow-hidden"
                    >
                      {stat.detail}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
