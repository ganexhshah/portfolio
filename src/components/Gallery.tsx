import { useState, useMemo } from "react";
import { Download, X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
    // Dynamic import of all PNG images from the gallery folder
    const images = import.meta.glob('@/assets/gallery/*.png', { eager: true, import: 'default' });

    const galleryImages = useMemo(() => {
        return Object.entries(images).map(([path, src], index) => ({
            id: index + 1,
            src: src as string,
            alt: `Gallery Snapshot ${index + 1}`
        }));
    }, [images]);

    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const handleDownload = (e: React.MouseEvent, src: string, id: number) => {
        e.stopPropagation();
        const link = document.createElement('a');
        link.href = src;
        link.download = `gallery-image-${id}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImage === null) return;
        const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
        const nextIndex = (currentIndex + 1) % galleryImages.length;
        setSelectedImage(galleryImages[nextIndex].id);
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImage === null) return;
        const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
        const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        setSelectedImage(galleryImages[prevIndex].id);
    };


    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section - Matching About.tsx Style */}
                <div className="mb-12">
                    <h1 className="text-3xl md:text-5xl font-black font-serif italic text-gray-900 dark:text-white leading-tight mb-6">
                        Capturing <span className="text-pink-600 dark:text-pink-400">Moments</span>, freezing <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-2 py-1 rounded-lg inline-block not-italic">Time</span>, and cherishing <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-lg inline-block not-italic">Memories</span> — one snapshot at a time.
                    </h1>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-body max-w-2xl">
                        A visual diary of my journey, projects, and the little things that inspire me.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
                    {galleryImages.map((image) => (
                        <div
                            key={image.id}
                            onClick={() => setSelectedImage(image.id)}
                            className="group relative aspect-square overflow-hidden rounded-[2rem] shadow-lg border-4 border-white dark:border-gray-800 bg-gray-100 dark:bg-gray-800 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:rotate-2 hover:z-10"
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-4">
                                <span className="text-white font-bold font-heading trancate">{image.alt}</span>
                            </div>

                            {/* Image */}
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>

                {/* Back to Home Button - Matching About.tsx */}
                <div className="flex justify-center">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        ← Back to Home
                    </a>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    onClick={() => setSelectedImage(null)}
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
                >
                    <div className="relative max-w-5xl w-full flex items-center justify-center h-full">
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-50 p-2 bg-black/50 rounded-full"
                            title="Close"
                        >
                            <X size={24} />
                        </button>

                        {/* Download button */}
                        <button
                            onClick={(e) => {
                                const img = galleryImages.find(img => img.id === selectedImage);
                                if (img) handleDownload(e, img.src, img.id);
                            }}
                            className="absolute top-4 right-16 text-white/70 hover:text-white transition-colors z-50 p-2 bg-black/50 rounded-full"
                            title="Download"
                        >
                            <Download size={24} />
                        </button>

                        {/* Navigation - Prev */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 p-3 bg-black/50 rounded-full hover:bg-black/70 hidden md:block"
                            title="Previous"
                        >
                            <ChevronLeft size={32} />
                        </button>

                        {/* Navigation - Next */}
                        <button
                            onClick={handleNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 p-3 bg-black/50 rounded-full hover:bg-black/70 hidden md:block"
                            title="Next"
                        >
                            <ChevronRight size={32} />
                        </button>

                        {/* Large image */}
                        <img
                            src={galleryImages.find(img => img.id === selectedImage)?.src}
                            alt={galleryImages.find(img => img.id === selectedImage)?.alt}
                            className="max-h-[85vh] max-w-full rounded-xl shadow-2xl border-2 border-white/10 object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />

                        {/* Image counter */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-6 py-2 rounded-full text-sm font-semibold text-white border border-white/10">
                            {galleryImages.findIndex(img => img.id === selectedImage) + 1} / {galleryImages.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
