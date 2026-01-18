import { useState, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';
import img1 from '../assets/gallery/IMG_8114.JPG';
import img2 from '../assets/gallery/IMG_8120.JPG';
import img3 from '../assets/gallery/IMG_8127.JPG';
import img4 from '../assets/gallery/IMG_8201.JPG';
import img5 from '../assets/gallery/IMG_8214.JPG';
import img6 from '../assets/gallery/IMG_8226.JPG';
import img7 from '../assets/gallery/IMG_8359.JPG';
import img8 from '../assets/gallery/IMG_8360.JPG';

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const categories = ['All', 'Clinic Interiors', 'Happy Smiles', 'Advanced Equipment'];

    // Real images from gallery folder
    const galleryItems = [
        {
            id: 1,
            category: 'Clinic Interiors',
            title: 'Modern Reception & Waiting Area',
            image: img1
        },
        {
            id: 2,
            category: 'Advanced Equipment',
            title: 'Dental Operatory View',
            image: img2
        },
        {
            id: 3,
            category: 'Clinic Interiors',
            title: 'State-of-the-Art Facility',
            image: img3
        },
        {
            id: 4,
            category: 'Happy Smiles',
            title: 'Patient Consultation',
            image: img4
        },
        {
            id: 5,
            category: 'Advanced Equipment',
            title: 'Advanced Dental Unit',
            image: img5
        },
        {
            id: 6,
            category: 'Clinic Interiors',
            title: 'Hygienic Treatment Room',
            image: img6
        },
        {
            id: 7,
            category: 'Happy Smiles',
            title: 'Expert Dental Care',
            image: img7
        },
        {
            id: 8,
            category: 'Clinic Interiors',
            title: 'Premium Dental Experience',
            image: img8
        }
    ];

    const filteredItems = selectedCategory === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === selectedCategory);

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <div className="bg-[#f7f4f1] py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-roboto-slab text-[#424040] mb-4 tracking-tight">
                        Our <span className="text-[#88d4cb]">Gallery</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-raleway">
                        Take a glimpse into our world-class facility, state-of-the-art equipment, and the beautiful smiles we create every day.
                    </p>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
                    <div className="flex justify-center space-x-2 md:space-x-4 min-w-max">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-[#424040] text-white shadow-lg transform scale-105'
                                    : 'bg-gray-100 text-gray-600 hover:bg-[#88d4cb] hover:text-white'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="group relative bg-gray-100 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
                            onClick={() => setSelectedImage(item)}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-64 md:h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                loading="lazy"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                                    <span className="inline-block bg-[#88d4cb] text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                                        {item.category}
                                    </span>
                                    <div className="mt-4">
                                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white">
                                            <ZoomIn className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-10 h-10" />
                    </button>
                    <div
                        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
                        onClick={e => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage.image}
                            alt={selectedImage.title}
                            className="max-w-full max-h-[80vh] rounded-lg shadow-2xl object-contain"
                        />
                        <div className="mt-6 text-center">
                            <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                            <span className="text-[#88d4cb] font-medium tracking-wide">
                                {selectedImage.category}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
