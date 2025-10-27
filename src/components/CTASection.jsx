import React from 'react';

import ctaBanner from '../assets/images/cta-banner.png';

export default function DentalCTA() {
  return (
    <section className="py-16 md:py-0 bg-[#0f2847]" aria-label="cta">
      <div className="container mx-auto px-4 max-w-[540px] sm:max-w-[540px] md:max-w-[750px] lg:max-w-[980px] xl:max-w-[1180px]">
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-end md:gap-[60px] xl:items-center">
          {/* CTA Banner */}
          <figure className="mb-12 md:mb-0 xl:-mt-[120px]">
            <img
              src={ctaBanner}
              alt="Dentist holding dental model"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </figure>

          {/* CTA Content */}
          <div className="text-center md:text-left md:py-[60px] lg:py-[80px]">
            <p className="text-[#3b82f6] text-sm md:text-base font-medium mb-4 capitalize tracking-wide">
              Book Dentail Appointment
            </p>
            
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Start Your Journey to a Confident, Healthy Smile
            </h2>
            
            <a 
              href="#" 
              className="inline-block bg-[#3b82f6] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#2563eb] transition-colors duration-300 uppercase tracking-wide text-sm max-w-max"
            >
              Book appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}