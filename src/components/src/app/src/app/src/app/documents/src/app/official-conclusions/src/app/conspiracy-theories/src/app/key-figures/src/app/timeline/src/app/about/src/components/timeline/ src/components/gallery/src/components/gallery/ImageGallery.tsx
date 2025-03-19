'use client';

import { useState } from 'react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
  date: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/John_F._Kennedy%2C_White_House_color_photo_portrait.jpg",
    alt: "Official portrait of President John F. Kennedy",
    caption: "Official White House portrait of President John F. Kennedy",
    date: "1961"
  },
  {
    id: 2,
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Dealey_Plaza_2003.jpg",
    alt: "Dealey Plaza in Dallas, Texas",
    caption: "Dealey Plaza in Dallas, Texas, site of the assassination",
    date: "Modern view"
  },
  {
    id: 3,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Lee_Harvey_Oswald_arrest_card_1963.jpg/800px-Lee_Harvey_Oswald_arrest_card_1963.jpg",
    alt: "Lee Harvey Oswald arrest card",
    caption: "Lee Harvey Oswald's arrest card from the Dallas Police Department",
    date: "November 22, 1963"
  },
  {
    id: 4,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Limo_2_Dealey_Plaza.jpg/800px-Limo_2_Dealey_Plaza.jpg",
    alt: "Presidential limousine in Dealey Plaza",
    caption: "The presidential limousine carrying the Kennedys and Connallys in Dealey Plaza moments before the shooting",
    date: "November 22, 1963"
  },
  {
    id: 5,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Warren-Commission-Hearings-Volume-XVI_0371a.jpg/800px-Warren-Commission-Hearings-Volume-XVI_0371a.jpg",
    alt: "Texas School Book Depository",
    caption: "The Texas School Book Depository building, from which Oswald allegedly fired the shots",
    date: "1963"
  },
  {
    id: 6,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Ruby-shooting-Oswald.jpg/800px-Ruby-shooting-Oswald.jpg",
    alt: "Jack Ruby shooting Lee Harvey Oswald",
    caption: "Jack Ruby shooting Lee Harvey Oswald in the basement of Dallas Police Headquarters",
    date: "November 24, 1963"
  }
];

export default function ImageGallery()  {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
    } else {
      newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">JFK Assassination Photo Gallery</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((image) => (
          <div 
            key={image.id} 
            className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            onClick={() => openLightbox(image)}
          >
            <div className="aspect-w-16 aspect-h-9 relative">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 bg-white">
              <p className="text-sm text-gray-500">{image.date}</p>
              <p className="mt-1 text-sm">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="max-w-4xl w-full">
            <div className="relative">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              <button 
                onClick={() => navigateImage('prev')}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r"
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={()  => navigateImage('next')}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l"
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div className="bg-white p-4 mt-2 rounded">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">{selectedImage.date}</p>
                  <p className="mt-1">{selectedImage.caption}</p>
                </div>
                <button 
                  onClick={closeLightbox}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Close lightbox"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) }
    </div>
  );
}
