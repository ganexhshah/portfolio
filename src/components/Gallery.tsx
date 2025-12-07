import { useState } from "react";
import profileImg from "@/assets/profile.jpg";

const Gallery = () => {
    // Sample gallery images - replace with your actual images
    const galleryImages = [
        { id: 1, src: profileImg, alt: "Gallery Image 1" },
        { id: 2, src: profileImg, alt: "Gallery Image 2" },
        { id: 3, src: profileImg, alt: "Gallery Image 3" },
        { id: 4, src: profileImg, alt: "Gallery Image 4" },
        { id: 5, src: profileImg, alt: "Gallery Image 5" },
        { id: 6, src: profileImg, alt: "Gallery Image 6" },
        { id: 7, src: profileImg, alt: "Gallery Image 7" },
        { id: 8, src: profileImg, alt: "Gallery Image 8" },
        { id: 9, src: profileImg, alt: "Gallery Image 9" },
        { id: 10, src: profileImg, alt: "Gallery Image 10" },
        { id: 11, src: profileImg, alt: "Gallery Image 11" },
        { id: 12, src: profileImg, alt: "Gallery Image 12" },
    ];

    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
                        Image Gallery 📸
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 font-body">
                        A collection of moments and memories
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {galleryImages.map((image) => (
                        <div
                            key={image.id}
                            onClick={() => setSelectedImage(image.id)}
                            className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                            {/* Image */}
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />

                            {/* Image number badge */}
                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-900 z-20">
                                #{image.id}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Back to Home Button */}
                <div className="flex justify-center mt-12">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        ← Back to Home
                    </a>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    onClick={() => setSelectedImage(null)}
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                >
                    <div className="relative max-w-5xl w-full">
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Large image */}
                        <img
                            src={galleryImages.find(img => img.id === selectedImage)?.src}
                            alt={galleryImages.find(img => img.id === selectedImage)?.alt}
                            className="w-full h-auto rounded-2xl shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />

                        {/* Image counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-900">
                            {selectedImage} / {galleryImages.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
