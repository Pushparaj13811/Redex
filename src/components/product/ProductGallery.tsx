import React, { useState } from 'react';
import Button from '../ui/Button/Button';

interface ShareOption {
  name: string;
  icon: string;
  action: () => void;
}

interface ProductGalleryProps {
  images: string[];
  productName: string;
  onShare?: () => void;
  showShareMenu?: boolean;
  shareOptions?: ShareOption[];
  onCloseShareMenu?: () => void;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  productName,
  onShare,
  showShareMenu = false,
  shareOptions = [],
  onCloseShareMenu
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handlePreviousImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      {/* Main Image */}
      <div className="bg-brand-surface rounded-lg overflow-hidden border border-brand-border mb-4">
        <div className="relative pt-[100%]"> {/* Square aspect ratio container */}
          <img
            src={images[selectedImageIndex]}
            alt={productName}
            className="absolute inset-0 w-full h-full object-contain p-4"
          />

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <Button
                onClick={handlePreviousImage}
                variant="outline"
                size="sm"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full z-10"
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Button>
              <Button
                onClick={handleNextImage}
                variant="outline"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full z-10"
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </>
          )}

          {/* Share button with dropdown */}
          {onShare && (
            <div className="absolute top-4 right-4 z-10">
              <Button 
                onClick={onShare}
                variant="outline"
                size="sm"
                className="rounded-full"
                aria-label="Share product"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </Button>
              
              {/* Share dropdown menu */}
              {showShareMenu && shareOptions.length > 0 && (
                <div className="absolute right-0 mt-2 w-64 rounded-lg shadow-xl bg-brand-surface z-20 border border-brand-border">
                  {/* Arrow indicator */}
                  <div className="absolute top-0 right-3 -mt-2 w-4 h-4 rotate-45 bg-brand-surface border-t border-l border-brand-border"></div>
                  
                  <div className="relative py-2">
                    {shareOptions.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          option.action();
                          if (onCloseShareMenu) onCloseShareMenu();
                        }}
                        className="w-full flex items-center px-6 py-3 hover:bg-brand-bg-subtle text-left"
                      >
                        <div className="flex items-center justify-center w-8 h-8 mr-4 text-xl">
                          {option.icon}
                        </div>
                        <span className="text-brand-primary font-medium">{option.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-3 px-2">
          {images.map((img, index) => (
            <div 
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`flex-shrink-0 cursor-pointer rounded-lg overflow-hidden transition-all duration-200 ${
                selectedImageIndex === index 
                  ? 'border-2 border-brand-primary ring-2 ring-brand-primary ring-opacity-30 transform scale-105' 
                  : 'border border-brand-border hover:border-brand-border-hover'
              }`}
            >
              {/* Use consistent aspect ratio for all thumbnails */}
              <div className="relative w-20 h-20">
                <img 
                  src={img} 
                  alt={`Product view ${index + 1}`} 
                  className="absolute inset-0 w-full h-full object-contain p-2" 
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery; 