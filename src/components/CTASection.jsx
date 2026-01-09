import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

// const Banner = "https://i.ibb.co/0Vh1mYVt/IMG-0428.jpg";
import Banner from "../assets/images/hero-setcion.png";

export default function DentalCTA({
  heading = (
    <>
      Smile With <br />
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5bbfb2] to-[#88d4cb] font-roboto-slab">
        Confidence Again
      </span>
    </>
  ),
  subheading = "Advanced treatments, experienced doctors, and a gentle approach, everything your smile deserves under one roof.",
  image = Banner
}) {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#EAF7F4] to-[#f7f4f1] overflow-hidden">

      {/* Soft background blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#88d4cb]/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#8FC6B7]/20 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Content */}
          <div className="max-w-xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[#88d4cb]/10 text-[#2b6f6a] text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              Premium Dental Care
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-[#1f2933] leading-tight mb-6 font-roboto-slab">
              {heading}
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-10 font-raleway">
              {subheading}
            </p>

            <Link to="/contact-us" className="group inline-flex items-center gap-3 bg-[#1f2933] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-[#88d4cb] hover:text-[#1f2933] hover:shadow-xl">
              Book Appointment
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt="Dental Care"
                className="w-full h-[420px] object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg">
              <p className="text-sm font-semibold text-gray-800">
                ⭐ 4.9/5 Patient Rating
              </p>
              <p className="text-xs text-gray-500">
                Trusted by 10,000+ smiles
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
