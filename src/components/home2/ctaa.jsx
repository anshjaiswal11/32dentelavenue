import React from 'react';
import ctaBanner from '../../assets/images/IMG_0428.JPG';

export default function DentalCTA() {
  return (
    <section
      className="py-16 md:py-0 bg-[#D9D2CC] overflow-hidden rounded-2xl"
      aria-label="cta"
    >
      <div className="container mx-auto px-4 max-w-[540px] sm:max-w-[540px] md:max-w-[750px] lg:max-w-[980px] xl:max-w-[1180px]">
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-center md:gap-8">
          
          {/* CTA Banner */}
          <figure className="relative w-full h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden rounded-xl">
            <img
              src={ctaBanner}
              alt="Dentist holding dental model"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            {/* subtle overlay for warm tone */}
            <div className="absolute inset-0 bg-[#A67564]/30 mix-blend-multiply"></div>
          </figure>

          {/* CTA Content */}
          <div className="text-center md:text-left md:py-[40px] lg:py-[60px] px-4">
            <p className="text-[#A67564] text-sm md:text-base font-medium mb-3 capitalize tracking-wide">
              Book Dental Appointment
            </p>

            <h2 className="text-[#723E31] text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Start Your Journey to a Confident, Healthy Smile
            </h2>

            <a
              href="#"
              className="inline-block bg-[#D9B18E] text-[#F2F1EF] font-semibold px-8 py-3 rounded-lg hover:bg-[#A67564] hover:shadow-lg transition-all duration-300 uppercase tracking-wide text-sm max-w-max"
            >
              Book Appointment
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
