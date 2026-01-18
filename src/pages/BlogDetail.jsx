import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, User, Calendar, Clock, Share2 } from 'lucide-react';
// import { Helmet } from 'react-helmet-async'; // Using standard title/meta for now to avoid dependency issues if not installed

const BLOG_API_URL = "https://server-32dentalavenue-kappa.vercel.app/api/blogs";

const BlogDetail = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchBlog();
    }, [slug]);

    useEffect(() => {
        if (blog) {
            document.title = blog.meta_title || blog.title || 'United Dental Care';

            // Update meta description safely
            let metaDesc = document.querySelector('meta[name="description"]');
            if (!metaDesc) {
                metaDesc = document.createElement('meta');
                metaDesc.name = 'description';
                document.head.appendChild(metaDesc);
            }
            metaDesc.content = blog.meta_description || blog.content.substring(0, 160);
        }
    }, [blog]);

    const fetchBlog = async () => {
        try {
            // First try fetching by slug
            let res = await fetch(`${BLOG_API_URL}/slug/${slug}`);

            // Fallback: If slug fetch fails (maybe it's an ID?), try ID - though routing usually handles this.
            // For now, assume slug.

            if (res.ok) {
                const data = await res.json();
                setBlog(data);
            } else {
                setError('Blog post not found.');
            }
        } catch (err) {
            console.error(err);
            setError('Failed to load blog post.');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-white pt-20 flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#88d4cb]"></div>
            </div>
        );
    }

    if (error || !blog) {
        return (
            <div className="min-h-screen bg-white pt-20 px-4">
                <div className="max-w-3xl mx-auto text-center py-20">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{error || "Blog not found"}</h2>
                    <Link to="/blogs" className="text-[#88d4cb] hover:underline flex items-center justify-center gap-2">
                        <ArrowLeft className="w-4 h-4" /> Back to Blogs
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">

                {/* Back Button */}
                <Link to="/blogs" className="inline-flex items-center text-gray-500 hover:text-[#88d4cb] mb-8 transition-colors group">
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-medium">Back to Blogs</span>
                </Link>

                <article className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">

                    <div className="p-8 md:p-12">
                        {/* Header Section */}
                        <header className="text-center max-w-3xl mx-auto mb-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#8FC6B7]/10 text-[#8FC6B7] rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                                Dental Health
                            </div>

                            <h1 className="text-3xl md:text-5xl font-bold text-[#424040] mb-6 leading-tight font-sans">
                                {blog.title}
                            </h1>

                            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-[#424040]">
                                        <User className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium text-gray-900">Dr. Admin</span>
                                </div>
                                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{new Date(blog.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                </div>
                                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>5 min read</span>
                                </div>
                            </div>
                        </header>

                        {/* Featured Image - Centered and Full width relative to container */}
                        {blog.image_url && (
                            <div className="mb-10 rounded-2xl overflow-hidden shadow-sm">
                                <img
                                    src={blog.image_url}
                                    alt={blog.title}
                                    className="w-full h-auto object-cover max-h-[600px]"
                                />
                            </div>
                        )}

                        {/* Content */}
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
                            {blog.content.split('\n').map((paragraph, idx) => (
                                paragraph.trim() && <p key={idx} className="mb-4">{paragraph}</p>
                            ))}
                        </div>

                        {/* Footer / Share */}
                        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div className="text-gray-900 font-medium">Share this article</div>
                            <div className="flex gap-3">
                                <button className="p-3 bg-gray-50 hover:bg-[#8FC6B7]/10 text-gray-600 hover:text-[#8FC6B7] rounded-full transition-all">
                                    <Share2 className="w-5 h-5" />
                                </button>
                                {/* Add more social buttons if needed */}
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default BlogDetail;
