import React, { useEffect, useRef } from 'react';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

import dentalImplantsImg from '../assets/images/dental-implants/hero.png';
import teethWhiteningImg from '../assets/images/teeth-whitening.png';
import oralHygieneImg from '../assets/images/oral-hygiene/cleaning.png';

const LatestBlogs = () => {
    const blogPosts = [
        {
            id: 1,
            title: "The Permanent Solution for Missing Teeth",
            excerpt: "Discover how dental implants can restore your smile and confidence with a natural look and feel.",
            category: "Dental Implants",
            author: "Dr. Ankita",
            date: "Dec 15, 2024",
            readTime: "5 min read",
            image: dentalImplantsImg
        },
        {
            id: 2,
            title: "Brighten Your Smile Safely",
            excerpt: "Learn about professional teeth whitening options and why over-the-counter kits might not be enough.",
            category: "Cosmetic Dentistry",
            author: "Dr. Ankita",
            date: "Dec 10, 2024",
            readTime: "4 min read",
            image: teethWhiteningImg
        },
        {
            id: 3,
            title: "Daily Habits for a Healthy Smile",
            excerpt: "Simple yet effective daily routines to keep your teeth and gums healthy between visits.",
            category: "Oral Hygiene",
            author: "Dr. Ankita",
            date: "Dec 05, 2024",
            readTime: "3 min read",
            image: oralHygieneImg
        }
    ];

    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const scrollInterval = setInterval(() => {
            if (scrollContainer.scrollWidth <= scrollContainer.clientWidth) return;

            const cardWidth = scrollContainer.children[0].offsetWidth + 24; // width + gap check
            const currentScroll = scrollContainer.scrollLeft;
            const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

            if (currentScroll >= maxScroll - 10) {
                scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
            }
        }, 3000);

        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <section className="bg-white pt-20 pb-0 px-6 sm:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#88d4cb] mb-4 font-roboto-slab">
                        Latest Insights & News
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto font-raleway">
                        Stay updated with expert dental advice and the latest trends in oral healthcare.
                    </p>
                </div>

                <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 md:overflow-visible md:pb-0 hide-scrollbar">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="min-w-[85vw] sm:min-w-[45vw] snap-center md:min-w-0 bg-[#f7f4f1] rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full group">
                            {/* Image Container */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-[#88d4cb] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                                    {post.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                                    <div className="flex items-center">
                                        <Calendar className="w-4 h-4 mr-1.5 text-[#88d4cb]" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="w-4 h-4 mr-1.5 text-[#88d4cb]" />
                                        {post.readTime}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-[#424040] mb-3 leading-snug font-roboto-slab group-hover:text-[#88d4cb] transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 mb-6 flex-1 leading-relaxed font-raleway">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between pt-6 border-t border-gray-200 mt-auto">
                                    <div className="flex items-center text-sm font-medium text-gray-500">
                                        <User className="w-4 h-4 mr-2 text-[#88d4cb]" />
                                        {post.author}
                                    </div>
                                    <Link
                                        to="/blogs"
                                        className="inline-flex items-center text-[#88d4cb] font-semibold hover:text-[#76b8b0] transition-colors group-hover:translate-x-1 duration-300 font-roboto-slab"
                                    >
                                        Read More
                                        <ArrowRight className="ml-1.5 w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link to="/blogs" className="inline-flex items-center text-[#424040] hover:text-[#88d4cb] font-semibold text-lg transition-colors font-roboto-slab group">
                        View All Articles
                        <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LatestBlogs;
