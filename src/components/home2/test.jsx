import React from 'react';

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Pitampura, Delhi",
    review: "The team at 32 Dental Avenue is exceptional! Dr. Jaiswal's attention to detail during my smile makeover was impressive. The results exceeded my expectations.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    location: "Rohini Sector 7, Delhi",
    review: "Best dental clinic in Delhi! The staff is incredibly professional, and the clinic uses state-of-the-art technology. My dental implant procedure was completely painless.",
    rating: 5,
  },
  {
    name: "Anjali Gupta",
    location: "Paschim Vihar, Delhi",
    review: "I've been visiting 32 Dental Avenue for the past year, and the experience has always been wonderful. The clinic is immaculate, and the staff is very caring.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    location: "Model Town, Delhi",
    review: "Found my forever dental clinic! The doctors explain everything in detail and make you feel comfortable. Their preventive care advice has been invaluable.",
    rating: 5,
  },
  {
    name: "Meera Patel",
    location: "Punjabi Bagh, Delhi",
    review: "My kids love coming here! The pediatric dentistry team is amazing at making children comfortable. The clinic ambiance is so welcoming and modern.",
    rating: 5,
  },
  {
    name: "Rahul Malhotra",
    location: "Dwarka, Delhi",
    review: "Outstanding dental care! The invisible braces treatment has transformed my smile. The entire team is professional and uses the latest dental technologies.",
    rating: 5,
  }
];

const happyClients = [
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1524593689594-aae2f26b75ab?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=300&h=300&fit=crop"
];

const TestimonialCard = ({ name, location, review, rating }) => (
  <div className="min-w-[350px] md:min-w-[400px] bg-[#F2F1EF] p-6 md:p-8 rounded-2xl shadow-md border border-[#D9D2CC] mr-6">
    <div className="flex items-center gap-1 mb-4">
      {[...Array(rating)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-[#D9B18E]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <p className="text-[#723E31]/80 leading-relaxed mb-6">{review}</p>
    <div>
      <h4 className="font-semibold text-[#A67564]">{name}</h4>
      <p className="text-sm text-[#723E31]/60">{location}</p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-16 md:py-20 bg-[#D9D2CC] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#723E31] mb-6">
            Stories That Make Us Smile
          </h1>
          <p className="text-lg text-[#723E31]/70">
            Real experiences shared by our valued patients who trusted us with their smiles.
          </p>
        </div>

        {/* Scrolling Happy Clients */}
        <div className="relative mb-12">
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#D9D2CC] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#D9D2CC] to-transparent z-10"></div>

          <div className="flex overflow-hidden">
            <div className="animate-scroll-right flex">
              {[...happyClients, ...happyClients].map((image, index) => (
                <div
                  key={index}
                  className="min-w-[200px] h-[200px] mx-3 rounded-2xl overflow-hidden shadow-md border border-[#D9B18E]/40 transform transition-transform hover:scale-105"
                >
                  <img
                    src={image}
                    alt="Happy Client"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scrolling Testimonials */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#D9D2CC] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#D9D2CC] to-transparent z-10"></div>

          <div className="flex overflow-hidden">
            <div className="animate-scroll-left flex">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
