import React from 'react';
import ctaBanner from '../assets/images/IMG_0428.jpg';

export default function DentalCTA() {
  return (
    <section
      className=" py-12 md:py-0 bg-[#88d4cb] overflow-hidden rounded-xl"
      aria-label="cta"
    >
      <div className="container mx-auto px-4 max-w-[540px] sm:max-w-[540px] md:max-w-[750px] lg:max-w-[980px] xl:max-w-[1180px]">
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-center md:gap-8">
          
          {/* CTA Banner */}
          <figure className="relative w-full h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden rounded-lg">
            <img
              src={ctaBanner}
              alt="Dentist holding dental model"
              className="absolute inset-0 w-full h-full object-contain md:object-cover"
              loading="lazy"
            />
          </figure>

          {/* CTA Content */}
          <div className="text-center md:text-left md:py-[40px] lg:py-[60px] px-4">
            <p className="text-white text-sm md:text-base font-medium mb-3 capitalize tracking-wide">
              Book Dental Appointment
            </p>

            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Start Your Journey to a Confident, Healthy Smile
            </h2>

            <a
              href="#"
              className="inline-block bg-white text-[#88d4cb] font-semibold px-8 py-3 rounded-lg hover:bg-[#f0fdfa] hover:text-[#5fa49d] transition-all duration-300 uppercase tracking-wide text-sm max-w-max shadow-md"
            >
              Book Appointment
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
