import React, { useState, useEffect } from 'react';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Image source URL */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Optional fallback/placeholder image */
  fallbackSrc?: string;
  /** Whether to lazy load the image */
  lazy?: boolean;
  /** Whether to blur the image while loading */
  blurEffect?: boolean;
  /** Aspect ratio to maintain (e.g., '1:1', '16:9', '4:3') */
  aspectRatio?: string;
  /** Object-fit property */
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  /** Object-position property */
  objectPosition?: string;
  /** Additional CSS class names */
  className?: string;
  /** Border radius */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  /** Whether to show loading skeleton */
  withSkeleton?: boolean;
  /** Function called when image is loaded */
  onLoaded?: () => void;
  /** Function called when image fails to load */
  onError?: () => void;
}

/**
 * Image component
 * 
 * Accessible, responsive image component with lazy loading, placeholders,
 * error handling, and optional blur effects
 */
const Image: React.FC<ImageProps> = ({
  src,
  alt,
  fallbackSrc = '',
  lazy = true,
  blurEffect = false,
  aspectRatio,
  objectFit = 'cover',
  objectPosition = 'center',
  className = '',
  rounded = 'none',
  withSkeleton = true,
  onLoaded,
  onError,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState(blurEffect ? fallbackSrc || '' : src);
  
  // Reset state when src changes
  useEffect(() => {
    if (src !== imageSrc && !blurEffect) {
      setIsLoading(true);
      setError(false);
      setImageSrc(src);
    }
  }, [src, imageSrc, blurEffect]);
  
  // Handle successful load
  const handleLoad = () => {
    setIsLoading(false);
    
    // If using blur effect, transition to the actual image
    if (blurEffect && imageSrc !== src) {
      setImageSrc(src);
    }
    
    if (onLoaded) {
      onLoaded();
    }
  };
  
  // Handle load error
  const handleError = () => {
    setIsLoading(false);
    setError(true);
    
    if (fallbackSrc && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
    }
    
    if (onError) {
      onError();
    }
  };
  
  // Parse aspect ratio
  const getAspectRatioStyles = () => {
    if (!aspectRatio) return {};
    
    const [width, height] = aspectRatio.split(':').map(Number);
    const paddingBottom = `${(height / width) * 100}%`;
    
    return {
      paddingBottom,
    };
  };
  
  // Border radius classes
  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };
  
  // Object fit classes
  const objectFitClasses = {
    contain: 'object-contain',
    cover: 'object-cover',
    fill: 'object-fill',
    none: 'object-none',
    'scale-down': 'object-scale-down',
  };
  
  return (
    <div
      className={`relative overflow-hidden ${roundedClasses[rounded]}`}
      style={aspectRatio ? { position: 'relative', ...getAspectRatioStyles() } : {}}
    >
      {withSkeleton && isLoading && (
        <div
          className={`absolute inset-0 bg-gray-200 animate-pulse ${roundedClasses[rounded]}`}
          aria-hidden="true"
        />
      )}
      
      <img
        src={imageSrc}
        alt={alt}
        className={`
          w-full h-full ${objectFitClasses[objectFit]}
          ${isLoading ? 'opacity-0' : 'opacity-100'}
          transition-opacity duration-300
          ${className}
        `}
        style={{ objectPosition }}
        loading={lazy ? 'lazy' : undefined}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
      
      {error && !fallbackSrc && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Image; 