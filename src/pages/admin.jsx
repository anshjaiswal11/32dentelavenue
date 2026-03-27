import React, { useState, useEffect } from 'react';
import { Mail, Lock, LogOut, Calendar, Phone, MapPin, User, Loader2, MessageSquare, Image, Trash2, Upload, X } from 'lucide-react';

const BOOKING_API_URL = "https://server-32dentalavenue-kappa.vercel.app/api";
const BLOG_API_URL = "https://server-32dentalavenue-kappa.vercel.app/api/blogs";
const CONTACT_API_URL = "https://server-32dentalavenue-kappa.vercel.app/api/contact";
const GALLERY_API_URL = "https://server-32dentalavenue-kappa.vercel.app/api/gallery";

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
    const [status, setStatus] = useState('idle');
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
            if (status !== 'success') setStatus('idle');
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
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState('bookings');

    useEffect(() => {
        setLoading(true);
        setError('');
        if (activeTab === 'bookings') {
            fetchBookings();
        } else if (activeTab === 'contacts') {
            fetchContacts();
        } else {
            setLoading(false);
        }
    }, [activeTab]);

    const fetchBookings = async () => {
        try {
            const response = await fetch(`${BOOKING_API_URL}/bookings`, {
                headers: { Authorization: `Bearer ${token}` },
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

    const fetchContacts = async () => {
        try {
            const response = await fetch(CONTACT_API_URL, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.ok) {
                const data = await response.json();
                setContacts(Array.isArray(data.contacts) ? data.contacts : []);
            } else {
                if (response.status === 401 || response.status === 403) {
                    onLogout();
                    return;
                }
                setError('Failed to fetch contacts');
            }
        } catch (err) {
            setError('Network error fetching contacts');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteBooking = async (id) => {
        if (!window.confirm('Delete this booking? This cannot be undone.')) return;
        try {
            const res = await fetch(`${BOOKING_API_URL}/bookings/${id}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${token}` },
            });
            if (res.ok) {
                setBookings(prev => prev.filter(b => b._id !== id));
            } else {
                alert('Failed to delete booking');
            }
        } catch (err) {
            alert('Network error deleting booking');
        }
    };

    const tabs = [
        { id: 'bookings', label: 'Bookings' },
        { id: 'contacts', label: 'Contacts', badge: contacts.length },
        { id: 'blogs', label: 'Blogs' },
        { id: 'gallery', label: 'Gallery' },
    ];

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
                        <nav className="flex gap-1">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${activeTab === tab.id
                                        ? 'bg-[#8FC6B7]/10 text-[#8FC6B7]'
                                        : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    {tab.label}
                                    {tab.badge > 0 && (
                                        <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold rounded-full bg-[#8FC6B7] text-white">
                                            {tab.badge > 99 ? '99+' : tab.badge}
                                        </span>
                                    )}
                                </button>
                            ))}
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
                                    <BookingCard
                                        key={booking._id || idx}
                                        booking={booking}
                                        onDelete={handleDeleteBooking}
                                    />
                                ))}
                            </div>
                        )}
                    </>
                ) : activeTab === 'contacts' ? (
                    <>
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-2xl font-bold text-[#424040]">Contact Submissions</h2>
                                <p className="text-gray-500 mt-1">Messages received from the Contact Us form</p>
                            </div>
                            <button
                                onClick={() => { setLoading(true); fetchContacts(); }}
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
                                    onClick={fetchContacts}
                                    className="px-6 py-2 bg-[#424040] text-white rounded-full hover:bg-[#8FC6B7] transition-colors"
                                >
                                    Try Again
                                </button>
                            </div>
                        ) : contacts.length === 0 ? (
                            <div className="text-center py-20 bg-white rounded-3xl shadow-sm">
                                <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                <h3 className="text-lg font-medium text-gray-900">No messages yet</h3>
                                <p className="text-gray-500">Contact Us submissions will appear here</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {contacts.map((contact, idx) => (
                                    <ContactCard key={contact._id || idx} contact={contact} />
                                ))}
                            </div>
                        )}
                    </>
                ) : activeTab === 'blogs' ? (
                    <BlogManager />
                ) : (
                    <GalleryManager token={token} />
                )}
            </main>
        </div>
    );
}

// ─── Gallery Manager ──────────────────────────────────────────────────────────

const GALLERY_CATEGORIES = ['Clinic Interiors', 'Happy Smiles', 'Advanced Equipment'];

function GalleryManager({ token }) {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [preview, setPreview] = useState(null);

    // Upload form state
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState(GALLERY_CATEGORIES[0]);
    const [file, setFile] = useState(null);
    const [uploadError, setUploadError] = useState('');

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const res = await fetch(GALLERY_API_URL);
            const data = await res.json();
            if (data && Array.isArray(data.gallery)) setImages(data.gallery);
        } catch (err) {
            console.error('Error fetching gallery:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = (e) => {
        const f = e.target.files[0];
        setFile(f);
        if (f) {
            setPreview(URL.createObjectURL(f));
        } else {
            setPreview(null);
        }
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file || !title || !category) {
            setUploadError('Please fill all fields and select an image.');
            return;
        }
        setUploadError('');
        setUploading(true);

        const formData = new FormData();
        formData.append('title', title);
        formData.append('category', category);
        formData.append('image', file);

        try {
            const res = await fetch(GALLERY_API_URL, {
                method: 'POST',
                headers: { Authorization: `Bearer ${token}` },
                body: formData,
            });
            const data = await res.json();
            if (res.ok) {
                setImages(prev => [data.image, ...prev]);
                setTitle('');
                setCategory(GALLERY_CATEGORIES[0]);
                setFile(null);
                setPreview(null);
            } else {
                setUploadError(data.error || 'Upload failed');
            }
        } catch (err) {
            setUploadError('Network error. Please try again.');
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this image from gallery? This cannot be undone.')) return;
        try {
            const res = await fetch(`${GALLERY_API_URL}/${id}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${token}` },
            });
            if (res.ok) {
                setImages(prev => prev.filter(img => img._id !== id));
            } else {
                alert('Failed to delete image');
            }
        } catch (err) {
            alert('Network error deleting image');
        }
    };

    return (
        <div>
            {/* Upload Form */}
            <div className="mb-8 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-[#424040] mb-5 flex items-center gap-2">
                    <Upload className="w-5 h-5 text-[#8FC6B7]" />
                    Upload Gallery Image
                </h2>

                <form onSubmit={handleUpload} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                            <input
                                type="text"
                                required
                                placeholder="e.g. Modern Reception Area"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8FC6B7] outline-none"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                            <select
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8FC6B7] outline-none bg-white"
                                value={category}
                                onChange={e => setCategory(e.target.value)}
                            >
                                {GALLERY_CATEGORIES.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Image <span className="text-gray-400 font-normal">(will be auto-converted to WebP/AVIF)</span>
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            required
                            className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#8FC6B7]/10 file:text-[#8FC6B7] file:font-medium hover:file:bg-[#8FC6B7]/20 cursor-pointer"
                            onChange={handleFileChange}
                        />
                    </div>

                    {/* Preview */}
                    {preview && (
                        <div className="relative inline-block">
                            <img src={preview} alt="Preview" className="h-40 rounded-xl object-cover border border-gray-200" />
                            <button
                                type="button"
                                onClick={() => { setPreview(null); setFile(null); }}
                                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                            >
                                <X className="w-3 h-3" />
                            </button>
                        </div>
                    )}

                    {uploadError && (
                        <p className="text-red-500 text-sm">{uploadError}</p>
                    )}

                    <button
                        type="submit"
                        disabled={uploading}
                        className="px-6 py-2.5 bg-[#424040] text-white rounded-lg hover:bg-[#8FC6B7] disabled:opacity-50 transition-colors flex items-center gap-2"
                    >
                        {uploading ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Uploading...
                            </>
                        ) : (
                            <>
                                <Upload className="w-4 h-4" />
                                Upload Image
                            </>
                        )}
                    </button>
                </form>
            </div>

            {/* Image Grid */}
            <h2 className="text-xl font-bold text-[#424040] mb-4 flex items-center gap-2">
                <Image className="w-5 h-5 text-[#8FC6B7]" />
                Gallery Images ({images.length})
            </h2>

            {loading ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="h-48 bg-gray-200 rounded-xl animate-pulse" />
                    ))}
                </div>
            ) : images.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
                    <Image className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500">No images uploaded yet.</p>
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map(img => (
                        <div key={img._id} className="group relative bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <img
                                src={img.imageUrl}
                                alt={img.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-3">
                                <p className="text-sm font-semibold text-[#424040] truncate">{img.title}</p>
                                <span className="inline-block mt-1 text-xs px-2 py-0.5 bg-[#8FC6B7]/10 text-[#8FC6B7] rounded-full font-medium">
                                    {img.category}
                                </span>
                            </div>
                            <button
                                onClick={() => handleDelete(img._id)}
                                className="absolute top-2 right-2 w-8 h-8 bg-red-500/90 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                                title="Delete image"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

// ─── Blog Manager ─────────────────────────────────────────────────────────────

function BlogManager() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

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
        setTitle(''); setContent(''); setSlug(''); setMetaTitle(''); setMetaDescription('');
        setImage(null); setExistingImageUrl(''); setIsEditing(false); setEditId(null);
    };

    const handleEdit = (blog) => {
        setIsEditing(true); setEditId(blog.id); setTitle(blog.title); setContent(blog.content);
        setSlug(blog.slug || ''); setMetaTitle(blog.meta_title || '');
        setMetaDescription(blog.meta_description || ''); setExistingImageUrl(blog.image_url);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        const formData = new FormData();
        formData.append('title', title); formData.append('content', content);
        formData.append('slug', slug); formData.append('meta_title', metaTitle);
        formData.append('meta_description', metaDescription);
        if (image) formData.append('image', image);
        if (isEditing) formData.append('image_url', existingImageUrl);

        try {
            const url = isEditing ? `${BLOG_API_URL}/${editId}` : `${BLOG_API_URL}`;
            const method = isEditing ? 'PUT' : 'POST';
            const res = await fetch(url, { method, body: formData });

            if (res.ok) {
                resetForm(); fetchBlogs();
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
            const res = await fetch(`${BLOG_API_URL}/${id}`, { method: 'DELETE' });
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
                            <input type="text" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8FC6B7] outline-none" value={title} onChange={e => setTitle(e.target.value)} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL friendly)</label>
                            <input type="text" placeholder="auto-generated-from-title" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8FC6B7] outline-none" value={slug} onChange={e => setSlug(e.target.value)} />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                        <textarea required rows={6} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8FC6B7] outline-none" value={content} onChange={e => setContent(e.target.value)} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Meta Title (SEO)</label>
                            <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8FC6B7] outline-none" value={metaTitle} onChange={e => setMetaTitle(e.target.value)} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description (SEO)</label>
                            <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8FC6B7] outline-none" value={metaDescription} onChange={e => setMetaDescription(e.target.value)} />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                        <input type="file" accept="image/*" className="w-full" onChange={e => setImage(e.target.files[0])} />
                        {existingImageUrl && !image && (
                            <p className="text-xs text-gray-500 mt-1">Current image: <a href={existingImageUrl} target="_blank" className="text-blue-500 underline" rel="noreferrer">View</a></p>
                        )}
                    </div>

                    <button type="submit" disabled={submitting} className="px-6 py-2 bg-[#424040] text-white rounded-lg hover:bg-[#8FC6B7] disabled:opacity-50 transition-colors w-full md:w-auto">
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
                                    <button onClick={() => handleEdit(blog)} className="flex-1 py-1.5 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded text-sm font-medium transition-colors">Edit</button>
                                    <button onClick={() => handleDelete(blog.id)} className="flex-1 py-1.5 text-red-600 bg-red-50 hover:bg-red-100 rounded text-sm font-medium transition-colors">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

// ─── Contact Card ─────────────────────────────────────────────────────────────

function ContactCard({ contact }) {
    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) return dateStr;
        return date.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col">
            <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-[#8FC6B7]/10 rounded-full flex items-center justify-center text-[#8FC6B7] group-hover:bg-[#8FC6B7] group-hover:text-white transition-colors">
                    <MessageSquare className="w-6 h-6" />
                </div>
                {contact.location && (
                    <span className="text-xs font-medium px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">
                        {contact.location}
                    </span>
                )}
            </div>

            <h3 className="text-lg font-bold text-[#424040] mb-1">{contact.firstName} {contact.lastName}</h3>
            <p className="text-xs text-gray-400 mb-3">{formatDate(contact.createdAt)}</p>

            <div className="space-y-2 mb-4">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Mail className="w-4 h-4 text-[#8FC6B7] flex-shrink-0" />
                    <a href={`mailto:${contact.email}`} className="hover:text-[#8FC6B7] transition-colors truncate">{contact.email}</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Phone className="w-4 h-4 text-[#8FC6B7] flex-shrink-0" />
                    <a href={`tel:${contact.phone}`} className="hover:text-[#8FC6B7] transition-colors">{contact.phone}</a>
                </div>
            </div>

            <div className="mt-auto pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-700 bg-gray-50 rounded-xl p-3 leading-relaxed line-clamp-4">{contact.message}</p>
            </div>
        </div>
    );
}

// ─── Booking Card ─────────────────────────────────────────────────────────────

function BookingCard({ booking, onDelete }) {
    const formatDate = (dateStr) => {
        if (!dateStr) return "No Date";
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) return dateStr;
        try {
            return date.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
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

            <h3 className="text-lg font-bold text-[#424040] mb-1">{booking.firstName} {booking.lastName}</h3>

            <div className="space-y-3 mt-4">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Calendar className="w-4 h-4 text-[#8FC6B7]" />
                    <span>{formatDate(booking.bookingDate)}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Mail className="w-4 h-4 text-[#8FC6B7]" />
                    <a href={`mailto:${booking.email}`} className="hover:text-[#8FC6B7] transition-colors truncate">{booking.email}</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Phone className="w-4 h-4 text-[#8FC6B7]" />
                    <a href={`tel:${booking.phone}`} className="hover:text-[#8FC6B7] transition-colors">{booking.phone}</a>
                </div>
                {booking.location && (
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-[#8FC6B7]" />
                        <span>{booking.location}</span>
                    </div>
                )}
            </div>

            {/* Delete button */}
            <div className="mt-4 pt-4 border-t border-gray-100">
                <button
                    onClick={() => onDelete(booking._id)}
                    className="w-full py-1.5 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-1.5"
                >
                    <Trash2 className="w-4 h-4" />
                    Delete Booking
                </button>
            </div>
        </div>
    );
}
