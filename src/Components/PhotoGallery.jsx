import { useState } from 'react';
import art1 from '../assets/galleryPhotos/art_1_mri.jpg';
import carpenter from '../assets/galleryPhotos/carpenter_mri.jpg';
import classImg from '../assets/galleryPhotos/class_mri.jpg';
import computer from '../assets/galleryPhotos/computer_mri.jpg';
import fitter from '../assets/galleryPhotos/fitter_mri.jpg';
import skill1 from '../assets/galleryPhotos/skill_1_mri.jpg';
import skill2 from '../assets/galleryPhotos/skill_2_mri.jpg';
import skill3 from '../assets/galleryPhotos/skill_3_mri.jpg';
import skill5 from '../assets/galleryPhotos/skill_5_mri.jpg';
import skill7 from '../assets/galleryPhotos/skill_7_mri.jpg';
import skill9 from '../assets/galleryPhotos/skill_9_mri.jpg';
import welding from '../assets/galleryPhotos/welding_mri.jpg';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    { id: 1, src: art1, alt: 'Art Training' },
    { id: 2, src: carpenter, alt: 'Carpentry Skills' },
    { id: 3, src: classImg, alt: 'Classroom Training' },
    { id: 4, src: computer, alt: 'Computer Skills' },
    { id: 5, src: fitter, alt: 'Fitter Training' },
    { id: 6, src: skill1, alt: 'Skill Development' },
    { id: 7, src: skill2, alt: 'Hands-on Training' },
    { id: 8, src: skill3, alt: 'Technical Skills' },
    { id: 9, src: skill5, alt: 'Workshop Training' },
    { id: 10, src: skill7, alt: 'Practical Training' },
    { id: 11, src: skill9, alt: 'Industrial Training' },
    { id: 12, src: welding, alt: 'Welding Training' }
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent mb-3">
              Photo Gallery
            </h2>
            <div className="h-1.5 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-full"></div>
          </div>
          <p className="text-gray-600 mt-4 text-lg">
            Glimpses of Skill Development & Training Programs
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative cursor-pointer"
              onClick={() => setSelectedImage(photo)}
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-xl bg-white shadow-lg
                transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                
                {/* Image Container */}
                <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-700 
                      group-hover:scale-125 group-hover:rotate-2"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* UPSDM Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1.5 
                    rounded-full text-xs font-bold flex items-center gap-1.5 shadow-xl
                    transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <span className="text-sm animate-pulse">⭐</span>
                    <span>UPSDM</span>
                  </div>
                </div>

                {/* Bottom Info Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10
                  transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-xl">
                    <p className="text-sm font-bold text-gray-800 mb-1">{photo.alt}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                        </svg>
                        View
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                      <span>Photo {index + 1}</span>
                    </div>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-transparent 
                  rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full">
              {/* Close Button */}
              <button
                className="absolute -top-12 right-0 text-white text-4xl font-light hover:text-orange-500 
                  transition-colors duration-200"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>

              {/* Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Caption */}
              <div className="text-center mt-4 text-white text-lg font-semibold">
                {selectedImage.alt}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoGallery;
