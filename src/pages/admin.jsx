import React, { useState, useEffect } from 'react';
import { Mail, Lock, LogOut, Calendar, Phone, MapPin, User, Loader2 } from 'lucide-react';

const BOOKING_API_URL = "https://server-32dentalavenue-kappa.vercel.app/api";
const BLOG_API_URL = "https://server-32dentalavenue-kappa.vercel.app/api/blogs";

export default function Admin() {
    const [token, setToken] = useState(localStorage.getItem('adminToken'));
    const [isAuthenticated, setIsAuthenticated] = useState(!!token);

    const handleLoginSuccess = (newToken) => {
        localStorage.setItem('adminToken', newToken);
        setToken(newToken);
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        setToken(null);
        setIsAuthenticated(false);
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-24">
            {isAuthenticated ? (
                <Dashboard token={token} onLogout={handleLogout} />
            ) : (
                <Login onLoginSuccess={handleLoginSuccess} />
            )}
        </div>
    );
}

function Login({ onLoginSuccess }) {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [status, setStatus] = useState('idle'); // idle, loading, error
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setError('');

        try {
            const response = await fetch(`${BOOKING_API_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                onLoginSuccess(data.token);
            } else {
                setError(data.message || 'Login failed');
                setStatus('error');
            }
        } catch (err) {
            setError('Network error. Please try again.');
            setStatus('error');
        } finally {
            if (status !== 'success') setStatus('idle'); // Only reset if not successful to avoid flicker
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-[#424040] p-8 text-center">
                    <h1 className="text-2xl font-bold text-white font-['Raleway']">Admin Portal</h1>
                    <p className="text-gray-300 mt-2 text-sm">Please sign in to continue</p>
                </div>

                <div className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                <input
                                    type="email"
                                    required
                                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8FC6B7] focus:border-transparent outline-none transition-all"
                                    placeholder="admin@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                <input
                                    type="password"
                                    required
                                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8FC6B7] focus:border-transparent outline-none transition-all"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100 animate-in fade-in">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full py-3 bg-[#424040] hover:bg-[#8FC6B7] hover:text-[#424040] text-white rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Signing in...
                                </>
                            ) : (
                                'Sign In'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

function Dashboard({ token, onLogout }) {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState('bookings'); // 'bookings' or 'blogs'

    useEffect(() => {
        if (activeTab === 'bookings') {
            fetchBookings();
        }
    }, [activeTab]);

    const fetchBookings = async () => {
        try {
            const response = await fetch(`${BOOKING_API_URL}/bookings`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                if (Array.isArray(data)) {
                    setBookings(data);
                } else if (data && Array.isArray(data.bookings)) {
                    setBookings(data.bookings);
                } else {
                    setBookings([]);
                }
            } else {
                if (response.status === 401 || response.status === 403) {
                    onLogout();
                    return;
                }
                setError('Failed to fetch bookings');
            }
        } catch (err) {
            setError('Network error fetching bookings');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-20 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#8FC6B7] rounded-lg flex items-center justify-center text-white font-bold">
                            A
                        </div>
                        <h1 className="text-xl font-bold text-[#424040]">Dashboard</h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <nav className="flex gap-2">
                            <button
                                onClick={() => setActiveTab('bookings')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'bookings'
                                    ? 'bg-[#8FC6B7]/10 text-[#8FC6B7]'
                                    : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                Bookings
                            </button>
                            <button
                                onClick={() => setActiveTab('blogs')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'blogs'
                                    ? 'bg-[#8FC6B7]/10 text-[#8FC6B7]'
                                    : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                Blogs
                            </button>
                        </nav>

                        <div className="h-6 w-px bg-gray-200" />

                        <button
                            onClick={onLogout}
                            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                            <LogOut className="w-4 h-4" />
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {activeTab === 'bookings' ? (
                    <>
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-2xl font-bold text-[#424040]">Recent Bookings</h2>
                                <p className="text-gray-500 mt-1">Manage appointment requests</p>
                            </div>
                            <button
                                onClick={() => { setLoading(true); fetchBookings(); }}
                                className="p-2 text-[#8FC6B7] hover:bg-[#8FC6B7]/10 rounded-full transition-colors"
                                title="Refresh"
                            >
                                <Loader2 className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                            </button>
                        </div>

                        {loading ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[1, 2, 3, 4, 5, 6].map(i => (
                                    <div key={i} className="h-48 bg-gray-200 rounded-2xl animate-pulse" />
                                ))}
                            </div>
                        ) : error ? (
                            <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-red-100">
                                <p className="text-red-500 mb-4">{error}</p>
                                <button
                                    onClick={fetchBookings}
                                    className="px-6 py-2 bg-[#424040] text-white rounded-full hover:bg-[#8FC6B7] transition-colors"
                                >
                                    Try Again
                                </button>
                            </div>
                        ) : bookings.length === 0 ? (
                            <div className="text-center py-20 bg-white rounded-3xl shadow-sm">
                                <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                <h3 className="text-lg font-medium text-gray-900">No bookings yet</h3>
                                <p className="text-gray-500">New appointments will appear here</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {Array.isArray(bookings) && bookings.map((booking, idx) => (
                                    <BookingCard key={booking._id || idx} booking={booking} />
                                ))}
                            </div>
                        )}
                    </>
                ) : (
                    <BlogManager />
                )}
            </main>
        </div>
    );
}

function BlogManager() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    // Form States
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [slug, setSlug] = useState('');
    const [metaTitle, setMetaTitle] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [image, setImage] = useState(null);
    const [existingImageUrl, setExistingImageUrl] = useState('');

    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const res = await fetch(`${BLOG_API_URL}`);
            const data = await res.json();
            if (Array.isArray(data)) setBlogs(data);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setTitle('');
        setContent('');
        setSlug('');
        setMetaTitle('');
        setMetaDescription('');
        setImage(null);
        setExistingImageUrl('');
        setIsEditing(false);
        setEditId(null);
    };

    const handleEdit = (blog) => {
        setIsEditing(true);
        setEditId(blog.id);
        setTitle(blog.title);
        setContent(blog.content);
        setSlug(blog.slug || '');
        setMetaTitle(blog.meta_title || '');
        setMetaDescription(blog.meta_description || '');
        setExistingImageUrl(blog.image_url);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('slug', slug);
        formData.append('meta_title', metaTitle);
        formData.append('meta_description', metaDescription);
        if (image) formData.append('image', image);
        if (isEditing) formData.append('image_url', existingImageUrl); // Pass existing if no new one

        try {
            const url = isEditing ? `${BLOG_API_URL}/${editId}` : `${BLOG_API_URL}`;
            const method = isEditing ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method: method,
                body: formData
            });

            if (res.ok) {
                resetForm();
                fetchBlogs();
                alert(isEditing ? 'Blog updated successfully' : 'Blog created successfully');
            } else {
                const err = await res.json();
                alert(`Failed: ${err.message || 'Unknown error'}`);
            }
        } catch (error) {
            console.error("Error saving blog:", error);
            alert('Error saving blog');
        } finally {
            setSubmitting(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this blog?')) return;
        try {
            const res = await fetch(`${BLOG_API_URL}/${id}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                setBlogs(blogs.filter(b => b.id !== id));
            } else {
                alert('Failed to delete blog');
            }
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
    };

    return (
        <div>
            <div className="mb-8 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-[#424040]">
                        {isEditing ? 'Edit Blog' : 'Create New Blog'}
                    </h2>
                    {isEditing && (
                        <button onClick={resetForm} className="text-sm text-gray-500 hover:text-gray-800">
                            Cancel Edit
                        </button>
                    )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8FC6B7] outline-none"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL friendly)</label>
                            <input
                                type="text"
                                placeholder="auto-generated-from-title"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8FC6B7] outline-none"
                                value={slug}
                                onChange={e => setSlug(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                        <textarea
                            required
                            rows={6}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8FC6B7] outline-none"
                            value={content}
                            onChange={e => setContent(e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Meta Title (SEO)</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8FC6B7] outline-none"
                                value={metaTitle}
                                onChange={e => setMetaTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description (SEO)</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8FC6B7] outline-none"
                                value={metaDescription}
                                onChange={e => setMetaDescription(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image (Max 1MB)</label>
                        <input
                            type="file"
                            accept="image/*"
                            className="w-full"
                            onChange={e => setImage(e.target.files[0])}
                        />
                        {existingImageUrl && !image && (
                            <p className="text-xs text-gray-500 mt-1">Current image: <a href={existingImageUrl} target="_blank" className="text-blue-500 underline">View</a></p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={submitting}
                        className="px-6 py-2 bg-[#424040] text-white rounded-lg hover:bg-[#8FC6B7] disabled:opacity-50 transition-colors w-full md:w-auto"
                    >
                        {submitting ? 'Saving...' : (isEditing ? 'Update Blog' : 'Create Blog')}
                    </button>
                </form>
            </div>

            <h2 className="text-xl font-bold text-[#424040] mb-4">Existing Blogs</h2>
            {loading ? (
                <div className="animate-pulse space-y-4">
                    {[1, 2, 3].map(i => <div key={i} className="h-24 bg-gray-200 rounded-xl" />)}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map(blog => (
                        <div key={blog.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                            {blog.image_url && (
                                <img src={blog.image_url} alt={blog.title} className="w-full h-48 object-cover" />
                            )}
                            <div className="p-4 flex-1 flex flex-col">
                                <h3 className="font-bold text-lg mb-2">{blog.title}</h3>
                                <div className="text-xs text-gray-400 mb-2 font-mono bg-gray-50 p-1 rounded">/{blog.slug}</div>
                                <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">{blog.content}</p>
                                <div className="flex gap-2 pt-4 border-t border-gray-100">
                                    <button
                                        onClick={() => handleEdit(blog)}
                                        className="flex-1 py-1.5 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded text-sm font-medium transition-colors"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(blog.id)}
                                        className="flex-1 py-1.5 text-red-600 bg-red-50 hover:bg-red-100 rounded text-sm font-medium transition-colors"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

function BookingCard({ booking }) {
    // Format date nicely
    const formatDate = (dateStr) => {
        if (!dateStr) return "No Date";
        const date = new Date(dateStr);
        // Check if date is valid
        if (isNaN(date.getTime())) {
            return dateStr;
        }

        try {
            return date.toLocaleDateString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
        } catch (e) {
            return dateStr;
        }
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-[#8FC6B7]/10 rounded-full flex items-center justify-center text-[#8FC6B7] group-hover:bg-[#8FC6B7] group-hover:text-white transition-colors">
                    <User className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">
                    {booking.location || "General"}
                </span>
            </div>

            <h3 className="text-lg font-bold text-[#424040] mb-1">
                {booking.firstName} {booking.lastName}
            </h3>

            <div className="space-y-3 mt-4">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Calendar className="w-4 h-4 text-[#8FC6B7]" />
                    <span>{formatDate(booking.bookingDate)}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Mail className="w-4 h-4 text-[#8FC6B7]" />
                    <a href={`mailto:${booking.email}`} className="hover:text-[#8FC6B7] transition-colors truncate">
                        {booking.email}
                    </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Phone className="w-4 h-4 text-[#8FC6B7]" />
                    <a href={`tel:${booking.phone}`} className="hover:text-[#8FC6B7] transition-colors">
                        {booking.phone}
                    </a>
                </div>
                {booking.location && (
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-[#8FC6B7]" />
                        <span>{booking.location}</span>
                    </div>
                )}
            </div>
        </div>
    );
}
