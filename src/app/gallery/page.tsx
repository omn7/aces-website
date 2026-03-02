import SectionWrapper from '@/components/SectionWrapper';

const GALLERY_IMAGES = [
    { id: 1, title: 'Hackathon 2025 Winners', size: 'large' },
    { id: 2, title: 'AI Workshop Hands-on', size: 'small' },
    { id: 3, title: 'Alumni Meetup', size: 'small' },
    { id: 4, title: 'Team Building Activity', size: 'medium' },
    { id: 5, title: 'Guest Lecture on Cybersecurity', size: 'medium' },
    { id: 6, title: 'Annual Tech Fest Inauguration', size: 'large' },
    { id: 7, title: 'Coding Competition', size: 'small' },
    { id: 8, title: 'Farewell Party 2025', size: 'small' },
];

export default function GalleryPage() {
    return (
        <>
            <div className="bg-gray-50 pt-32 pb-16 sm:pt-40 sm:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Gallery</h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        A visual journey through our past events, workshops, and memorable moments.
                    </p>
                </div>
            </div>

            <SectionWrapper>
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {GALLERY_IMAGES.map((image) => {
                        // Determine height based on size for masonry effect
                        let heightClass = "h-48";
                        if (image.size === 'medium') heightClass = "h-64";
                        if (image.size === 'large') heightClass = "h-80";

                        return (
                            <div
                                key={image.id}
                                className={`break-inside-avoid relative group rounded-xl overflow-hidden bg-gray-200 ${heightClass}`}
                            >
                                {/* Image placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center p-4 text-center text-gray-400 font-medium">
                                    {image.title} (Image)
                                </div>

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <h3 className="text-white font-semibold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {image.title}
                                    </h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </SectionWrapper>
        </>
    );
}
