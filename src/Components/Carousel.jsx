import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import img1 from '../assets/Photos/1.jpg';
import img2 from '../assets/Photos/2.jpg';
import img3 from '../assets/Photos/3.jpg';
import img4 from '../assets/Photos/4.jpg';
import img5 from '../assets/Photos/5.jpg';
import img6 from '../assets/Photos/6.jpg';
import img7 from '../assets/Photos/7.jpg';
import img8 from '../assets/Photos/8.jpg';
import img9 from '../assets/Photos/9.jpg';
import img10 from '../assets/Photos/10.jpg';

const Carousel = ({ images = [], autoPlayInterval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Default images from assets folder
    const defaultImages = [
        { url: img1, alt: 'Slide 1' },
        { url: img2, alt: 'Slide 2' },
        { url: img3, alt: 'Slide 3' },
        { url: img4, alt: 'Slide 4' },
        { url: img5, alt: 'Slide 5' },
        { url: img6, alt: 'Slide 6' },
        { url: img7, alt: 'Slide 7' },
        { url: img8, alt: 'Slide 8' },
        { url: img9, alt: 'Slide 9' },
        { url: img10, alt: 'Slide 10' }
    ];

    const slides = images.length > 0 ? images : defaultImages;

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlaying, slides.length, autoPlayInterval]);

    const goToPrevious = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) => 
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-full mx-auto group">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
                {/* Slides */}
                <div 
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div 
                            key={index} 
                            className="min-w-full relative"
                        >
                            <div className="relative h-[350px] lg:h-[450px] xl:h-[500px]">
                                <img
                                    src={slide.url}
                                    alt={slide.alt || `Slide ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Previous Button */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-amber-600 text-white p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                    aria-label="Previous slide"
                >
                    <FaChevronLeft className="text-base sm:text-lg md:text-xl lg:text-2xl" />
                </button>
                <button
                    onClick={goToNext}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-amber-600 text-white p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                    aria-label="Next slide"
                >
                    <FaChevronRight className="text-base sm:text-lg md:text-xl lg:text-2xl" />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
