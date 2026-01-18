import React, { useEffect, useState } from 'react';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

import dentalImplantsImg from '../assets/images/dental-implants/hero.png';
import teethWhiteningImg from '../assets/images/teeth-whitening.png';
import oralHygieneImg from '../assets/images/oral-hygiene/cleaning.png';
import alignersImg from '../assets/images/service-aligners.png';
import rootCanalImg from '../assets/images/root-canal/care.png';
import kidsDentistryImg from '../assets/images/kids-dentistry.png';
import blogHeroBg from '../assets/images/blog-hero-bg.png';

const Blogs = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await fetch('https://server-32dentalavenue-kappa.vercel.app/api/blogs');
            if (response.ok) {
                const data = await response.json();
                // Map API data to UI structure
                const apiPosts = data.map(blog => ({
                    id: blog.id,
                    slug: blog.slug, // Added slug
                    title: blog.title,
                    excerpt: blog.content.substring(0, 100) + '...',
                    category: "General", // Default category for now
                    author: "Admin", // Default author
                    date: new Date(blog.created_at).toLocaleDateString(),
                    readTime: "3 min read", // Estimate
                    image: blog.image_url || blogHeroBg // Fallback image
                }));
                // Combine with static posts or replace. Let's replace for now to show dynamic content, 
                // but if empty show static? Or just show all. User asked to "add new blogs", implying addition.
                // But usually dynamic replaces static. I'll combine them for now so the page isn't empty if no dynamic blogs exist.
                setPosts([...apiPosts]);
            } else {
                setPosts(staticBlogPosts);
            }
        } catch (error) {
            console.error("Failed to fetch blogs", error);
            setPosts(staticBlogPosts);
        } finally {
            setLoading(false);
        }
    };

    const staticBlogPosts = [
        {
            id: 'static-1',
            slug: 'the-permanent-solution-for-missing-teeth',
            title: "The Permanent Solution for Missing Teeth",
            excerpt: "Discover how dental implants can restore your smile and confidence with a natural look and feel.",
            category: "Dental Implants",
            author: "Dr. Smith",
            date: "Dec 15, 2024",
            readTime: "5 min read",
            image: dentalImplantsImg
        },
        {
            id: 'static-2',
            slug: 'brighten-your-smile-safely',
            title: "Brighten Your Smile Safely",
            excerpt: "Learn about professional teeth whitening options and why over-the-counter kits might not be enough.",
            category: "Cosmetic Dentistry",
            author: "Dr. Emily",
            date: "Dec 10, 2024",
            readTime: "4 min read",
            image: teethWhiteningImg
        },
        {
            id: 'static-3',
            slug: 'daily-habits-for-a-healthy-smile',
            title: "Daily Habits for a Healthy Smile",
            excerpt: "Simple yet effective daily routines to keep your teeth and gums healthy between visits.",
            category: "Oral Hygiene",
            author: "Dr. John",
            date: "Dec 05, 2024",
            readTime: "3 min read",
            image: oralHygieneImg
        },
        {
            id: 'static-4',
            slug: 'clear-aligners-vs-braces',
            title: "Clear Aligners vs Braces",
            excerpt: "Comparing the pros and cons of clear aligners and traditional braces to help you decide.",
            category: "Orthodontics",
            author: "Dr. Sarah",
            date: "Nov 28, 2024",
            readTime: "6 min read",
            image: alignersImg
        },
        {
            id: 'static-5',
            slug: 'debunking-common-root-canal-myths',
            title: "Debunking Common Root Canal Myths",
            excerpt: "Separating fact from fiction about this common and pain-relieving dental procedure.",
            category: "Endodontics",
            author: "Dr. Michael",
            date: "Nov 20, 2024",
            readTime: "5 min read",
            image: rootCanalImg
        },
        {
            id: 'static-6',
            slug: 'making-the-first-visit-fun',
            title: "Making the First Visit Fun",
            excerpt: "Tips for parents to help their children have a positive and anxiety-free first dental experience.",
            category: "Pediatric Dentistry",
            author: "Dr. Lisa",
            date: "Nov 15, 2024",
            readTime: "4 min read",
            image: kidsDentistryImg
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-20">


            {/* Hero Section */}
            <div className="relative bg-[#f7f4f1] py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={blogHeroBg} alt="Background" className="w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#f7f4f1] via-[#f7f4f1]/90 to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#424040] mb-6 tracking-tight">
                        Our Latest <span className="text-[#88d4cb]">Insights & News</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Stay updated with expert advice, dental health tips, and the latest trends in modern dentistry.
                    </p>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#88d4cb]"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {posts.map((post) => (
                            <Link to={`/blog/${post.slug || post.id}`} key={post.id} className="block h-full group">
                                <article className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
                                    {/* Image Container */}
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-[#88d4cb] text-sm font-bold rounded-full shadow-sm">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="w-4 h-4 text-[#88d4cb]" />
                                                {post.date}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Clock className="w-4 h-4 text-[#88d4cb]" />
                                                {post.readTime}
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-[#424040] mb-3 group-hover:text-[#88d4cb] transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>

                                        <p className="text-gray-500 mb-6 line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                                                    <User className="w-4 h-4" />
                                                </div>
                                                <span className="text-sm font-medium text-gray-600">{post.author}</span>
                                            </div>
                                            <span className="text-[#88d4cb] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                                Read More <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            {/* Newsletter CTA */}
            <div className="bg-white py-16 border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-[#424040] mb-4">
                        Subscribe to our Newsletter
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Get the latest dental health tips and exclusive offers delivered correctly to your inbox.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#88d4cb]/50 focus:border-[#88d4cb] transition-all"
                        />
                        <button
                            type="submit"
                            className="bg-[#88d4cb] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#76b8b0] transition-all shadow-lg shadow-[#88d4cb]/20"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Blogs;

