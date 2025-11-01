import React from "react";

const serviceImages = {
  cosmetic: "https://images.unsplash.com/photo-1684607632829-1e5bf4f21dab?auto=format&fit=crop&q=80&w=1931",
  alignment: "https://plus.unsplash.com/premium_photo-1681997203595-e45e06abe034?auto=format&fit=crop&q=60&w=500",
  wisdom: "https://plus.unsplash.com/premium_photo-1667520328870-5b871fb2f212?auto=format&fit=crop&q=60&w=500",
  rootCanal: "https://plus.unsplash.com/premium_photo-1674575270991-653fb6bfc1bf?auto=format&fit=crop&q=80&w=1470",
  implants: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=60&w=500",
  hygiene: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop",
};

const serviceData = [
  {
    image: serviceImages.cosmetic,
    title: "Cosmetic Dentistry",
    description:
      "Advanced smile enhancement treatments combining restoration, technology, and natural-looking results.",
  },
  {
    image: serviceImages.alignment,
    title: "Teeth Alignment",
    description:
      "Modern orthodontic solutions using metal, ceramic, and clear aligners for precise, comfortable smile correction.",
  },
  {
    image: serviceImages.wisdom,
    title: "Wisdom Tooth Surgery",
    description:
      "Safe, painless removal of impacted wisdom teeth with advanced surgical precision.",
  },
  {
    image: serviceImages.rootCanal,
    title: "Root Canal Treatment",
    description:
      "Pain-free treatment to remove infection and preserve your natural tooth structure.",
  },
  {
    image: serviceImages.implants,
    title: "Dental Implants",
    description:
      "Permanent tooth replacement offering natural aesthetics, stability, and long-lasting confidence.",
  },
  {
    image: serviceImages.hygiene,
    title: "Oral Hygiene & Preventive Care",
    description:
      "Comprehensive dental cleaning and check-ups ensuring long-term oral health protection.",
  },
];

const Services = () => {
  return (
    <section className="bg-[#D9D2CC] min-h-screen py-20 px-6 sm:px-10 lg:px-20">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-extrabold text-[#723E31] mb-6">
          Our Services
        </h2>
        <p className="text-lg md:text-xl text-[#A67564] max-w-3xl mx-auto">
          We blend precision, innovation, and compassion to deliver complete
          dental care tailored for every smile.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {serviceData.map((service, index) => (
          <div
            key={index}
            className="bg-[#F2F1EF] rounded-3xl shadow-md hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
          >
            {/* Image */}
            <div className="h-80 md:h-96 w-full overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-[#723E31] mb-3">
                {service.title}
              </h3>
              <p className="text-[#A67564]/90 text-base leading-relaxed">
                {service.description}
              </p>

              <button className="mt-6 inline-flex items-center text-[#D9B18E] font-semibold hover:text-[#A67564] transition-all">
                Learn more
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
