import React, { useState, useEffect } from 'react';
import { Mail, Lock, LogOut, Calendar, Phone, MapPin, User, Loader2 } from 'lucide-react';

const API_BASE_URL = "https://server-32dentalavenue-kappa.vercel.app/api";

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
        <div className="min-h-screen bg-gray-50">
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
            const response = await fetch(`${API_BASE_URL}/login`, {
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

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/bookings`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                // Handle different possible response structures
                if (Array.isArray(data)) {
                    setBookings(data);
                } else if (data && Array.isArray(data.bookings)) {
                    setBookings(data.bookings);
                } else {
                    console.warn("Unexpected API response format:", data);
                    setBookings([]);
                }
            } else {
                // If 401/403, might want to auto logout, but for now just show error
                if (response.status === 401 || response.status === 403) {
                    onLogout(); // Token likely expired
                    return;
                }
                setError('Failed to fetch bookings');
            }
        } catch (err) {
            console.error("Fetch error:", err);
            setError('Network error fetching bookings');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#8FC6B7] rounded-lg flex items-center justify-center text-white font-bold">
                            A
                        </div>
                        <h1 className="text-xl font-bold text-[#424040]">Dashboard</h1>
                    </div>
                    <button
                        onClick={onLogout}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                        <LogOut className="w-4 h-4" />
                        Logout
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
            </main>
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
