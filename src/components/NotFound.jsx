import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Home } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-neutral-bg flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center pt-20">
            <Helmet>
                <title>Page Not Found | 32 Dental Avenue</title>
                <meta name="description" content="The page you are looking for does not exist. Return to 32 Dental Avenue homepage." />
                <meta name="robots" content="noindex, follow" />
            </Helmet>

            <h1 className="text-9xl font-bold text-secondary-teal opacity-20 font-roboto-slab select-none">
                404
            </h1>

            <div className="relative -mt-12 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-text-charcoal mb-4 font-roboto-slab">
                    Oops! Page Not Found
                </h2>
                <p className="text-lg text-text-light max-w-lg mx-auto font-raleway">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <a
                    href="/"
                    className="flex items-center justify-center gap-2 bg-[#8FC6B7] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#76c4bb] transition-all transform hover:-translate-y-1 shadow-lg font-roboto-slab"
                >
                    <Home className="w-5 h-5" />
                    Back to Home
                </a>
                <a
                    href="/#services"
                    className="flex items-center justify-center gap-2 bg-white text-text-charcoal border border-gray-200 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all font-roboto-slab"
                >
                    <ArrowLeft className="w-5 h-5" />
                    View Services
                </a>
            </div>
        </div>
    );
};

export default NotFound;
