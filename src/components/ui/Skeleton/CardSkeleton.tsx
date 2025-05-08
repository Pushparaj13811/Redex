import React from 'react';
import Skeleton from './Skeleton';

export interface CardSkeletonProps {
  className?: string;
  imageHeight?: string | number;
  lines?: number;
  hasFooter?: boolean;
  aspectRatio?: string;
}

/**
 * CardSkeleton component for displaying card loading state
 * Shows a placeholder for an image, title, content lines, and optional footer
 */
const CardSkeleton: React.FC<CardSkeletonProps> = ({
  className = '',
  imageHeight = '12rem',
  lines = 3,
  hasFooter = false,
  aspectRatio,
}) => {
  // Create placeholder content lines
  const contentLines = Array(lines).fill(0).map((_, index) => {
    // Last line is shorter
    const width = index === lines - 1 ? '60%' : '100%';
    return (
      <Skeleton 
        key={index}
        variant="text"
        height="1rem"
        width={width}
        className="mb-2"
      />
    );
  });

  return (
    <div className={`border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden ${className}`}>
      {/* Image placeholder */}
      <div className="relative" style={{ aspectRatio: aspectRatio }}>
        <Skeleton 
          variant="rectangular"
          height={imageHeight}
          width="100%"
        />
      </div>
      
      {/* Card body */}
      <div className="p-4">
        {/* Title placeholder */}
        <Skeleton 
          variant="text" 
          height="1.5rem" 
          width="80%" 
          className="mb-4"
        />
        
        {/* Content placeholders */}
        <div className="space-y-2">
          {contentLines}
        </div>
      </div>
      
      {/* Optional footer */}
      {hasFooter && (
        <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <Skeleton variant="text" height="1rem" width="30%" />
            <Skeleton variant="rectangular" height="2rem" width="25%" borderRadius="0.375rem" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CardSkeleton; 