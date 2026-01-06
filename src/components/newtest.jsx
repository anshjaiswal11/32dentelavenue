import React from 'react';

/* ================= GOOGLE REVIEWS ================= */

const testimonials = [
    {
        name: "Shivank Sharma",
        meta: "3 reviews · 7 photos · a year ago",
        review: "Visited 32 Dental Avenue for a routine checkup for my mom. Very impressed by the setup, very clean and hygienic. Dr. Ankita examined thoroughly and explained the treatment needed. Got scaling and filling done, the Dr was very gentle and effective. Must recommend for a quick and pain-free treatment.",
    },
    {
        name: "Vikas Mandal",
        meta: "1 review · a month ago",
        review: "Went with a broken tooth after my cricket tournament. Found this clinic near mt abu school and came home with perfect teeth. Nobody got to know I broke my tooth. Dr Ankita is the best dentist in rohini.",
    },
    {
        name: "Satyam Kumar",
        meta: "4 reviews · 4 months ago",
        review: "Very good doctors. Dr Ankita understands the problem and explains the procedures very well. All treatment options explained with no pressure. My mother's implant surgery was done smoothly with literally no pain. Dr Anuj is a great implant surgeon. Kudos to the team. Transparent and efficient!",
    },
    {
        name: "Tanu Bhambhani",
        meta: "2 reviews · 2 months ago",
        review: "My daughter was in severe tooth pain but after rct and crown from 32 dental avenue, she's able to eat everything hot or cold, sweets. Great job by dentists in rohini!",
    },
    {
        name: "Noby Thomas",
        meta: "3 reviews · 3 months ago",
        review: "I had a root canal done here, and the whole process was much smoother than I expected. The dentist explained everything clearly, and I felt comfortable throughout the treatment. No more pain, and I’m very satisfied with the result.",
    },
    {
        name: "Aashish Gambhir",
        meta: "Local Guide · 47 reviews · 2 months ago",
        review: "Excellent services… underwent wisdom tooth extraction and root canal treatment with aesthetic crowns. Doctors are very nice and professional staff is well trained.",
    },
    {
        name: "Nishant Sharma",
        meta: "1 review · a month ago",
        review: "Appointments always on time, no unnecessary waiting. Perfect for working professionals. Quick, clean, and efficient dental treatment in rohini at 32DA.",
    },
    {
        name: "Kusum Sharma",
        meta: "1 review · a year ago",
        review: "Pleased with the treatment done by Dr Ankita. Got my scaling and filling done. Very hygienic cleaning. Didn't feel any pain at all. Highly recommended.",
    },
];

/* ================= VIDEO TESTIMONIALS ================= */

const videoTestimonials = [
    "https://youtube.com/shorts/hrGgAIg-3JA",
    "https://youtube.com/shorts/TVZ5IL52T_g",
    "https://youtube.com/shorts/VCJBYD7NJLI"
];

/* ================= COMPONENTS ================= */

const VideoTestimonial = ({ videoUrl }) => {
    const videoId = videoUrl.split('/').pop();
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="min-w-[280px] md:min-w-[320px] h-[500px] rounded-2xl overflow-hidden shadow-xl mr-6 bg-black">
            <iframe
                src={embedUrl}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
            />
        </div>
    );
};

const TestimonialCard = ({ name, meta, review }) => (
    <div className="min-w-[320px] md:min-w-[420px] bg-white p-6 md:p-7 rounded-xl shadow-md mr-6 border border-gray-100 font-raleway">
        <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-600">
                {name.charAt(0)}
            </div>
            <div>
                <p className="font-semibold text-[#424040] leading-tight">{name}</p>
                <p className="text-xs text-[#424040]/60">{meta}</p>
            </div>
        </div>

        <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>

        <p className="text-sm text-[#424040]/80 leading-relaxed line-clamp-5">
            {review}
        </p>
    </div>
);

export default function Testimonials() {
    return (
        <section className="py-16 md:py-20 bg-[#f7f4f1] overflow-hidden w-full">
            <div className="w-full">
                <div className="max-w-3xl mx-auto text-center mb-12 px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#8FC6B7] mb-6 font-roboto-slab">
                        Stories That Make Us Smile
                    </h1>
                    <p className="text-lg text-[#424040]/70 font-raleway">
                        Real experiences shared by our valued patients who trusted us with their smiles.
                    </p>
                </div>

                {/* VIDEO TESTIMONIALS */}
                <div className="relative mb-16 w-full">
                    <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#f7f4f1] to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#f7f4f1] to-transparent z-10 pointer-events-none"></div>

                    <div className="flex overflow-hidden w-full">
                        <div className="animate-scroll-right flex">
                            {[...videoTestimonials, ...videoTestimonials].map((videoUrl, i) => (
                                <VideoTestimonial key={i} videoUrl={videoUrl} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* TEXT REVIEWS */}
                <div className="relative w-full">
                    <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#f7f4f1] to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#f7f4f1] to-transparent z-10 pointer-events-none"></div>

                    <div className="flex overflow-hidden w-full">
                        <div className="animate-scroll-left flex">
                            {[...testimonials, ...testimonials].map((t, i) => (
                                <TestimonialCard key={i} {...t} />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
