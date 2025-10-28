import React from 'react';

// Import icons
import icon1 from '../assets/images/service-icon-1.png';
import icon2 from '../assets/images/service-icon-2.png';
import icon3 from '../assets/images/service-icon-3.png';
import icon4 from '../assets/images/service-icon-4.png';
import icon5 from '../assets/images/service-icon-5.png';
import icon6 from '../assets/images/service-icon-6.png';
import serviceBanner from '../assets/images/service-banner.png';

// Data for the services
const servicesData = [
  {
    title: 'Cosmetic Dentistry',
    description: 'Advanced smile enhancement treatments combining restoration, technology, and natural-looking results.',
    icon: icon3,
  },
  {
    title: 'Teeth Alignment',
    description: 'Modern orthodontic solutions using metal, ceramic, and clear aligners for precise, comfortable smile correction.',
    icon: icon2,
  },
  {
    title: 'Wisdom Tooth Surgery',
    description: 'Safe, painless removal of impacted wisdom teeth with advanced surgical precision.',
    icon: icon1,
  },
  {
    title: 'Root Canal Treatment',
    description: 'Pain-free treatment to remove infection and preserve your natural tooth structure.',
    icon: icon4,
  },
  {
    title: 'Dental Implants',
    description: 'Permanent tooth replacement offering natural aesthetics, stability, and long-lasting confidence.',
    icon: icon5,
  },
  {
    title: 'Oral Hygiene & Preventive Care',
    description: 'Comprehensive dental cleaning and check-ups ensuring long-term oral health protection.',
    icon: icon6,
  },
];

/**
 * Reusable ServiceCard Component
 * This avoids repeating code and uses the styles from your original CSS.
 */
const ServiceCard = ({ icon, title, description }) => (
  <div className="flex items-start gap-[30px] min-h-full border border-gray-200 rounded-md p-[30px] shadow-sm bg-white">
    {/* .card-icon: w-50px, flex-shrink-0 */}
    <div className="w-[50px] flex-shrink-0">
      <img
        src={icon}
        alt="service icon"
        className="w-full h-auto" // .w-100
        loading="lazy"
        width="50"
        height="50"
      />
    </div>
    <div>
      {/* .card-title: mb-8px -> mb-2 */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {/* .card-text */}
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Services = () => {
  // Split services into left and right columns
  const leftServices = servicesData.slice(0, 3);
  const rightServices = servicesData.slice(3, 6);

  return (
    <section id="service" aria-label="service" className="py-16 pb-0 bg-[#f7f4f1]"> {/* .service */}
      <div className="container mx-auto px-4">
        <p className="text-center text-indigo-600 font-semibold uppercase">Our Services</p>
        {/* .service .section-title: mb-50px */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-[50px]">
          What We Provide
        </h2>

        {/* Your 3-column flex layout */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          
          {/* Left column */}
          <div className="w-full lg:w-1/3 space-y-6">
            {/* Use the reusable component */}
            {leftServices.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          {/* Center image */}
          <div className="w-full lg:w-1/3 flex justify-center order-first lg:order-none">
            {/* order-first: puts image at top on mobile */}
            {/* lg:order-none: resets to center on large screens */}
            <img
              src={serviceBanner}
              alt="services banner"
              className="w-full max-w-[220px] md:max-w-[320px] lg:max-w-[409px]" // Used 409px from original HTML
              width="409"
              height="467"
            />
          </div>

          {/* Right column */}
          <div className="w-full lg:w-1/3 space-y-6">
            {/* Use the reusable component again */}
            {rightServices.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;