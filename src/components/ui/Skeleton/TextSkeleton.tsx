import React from 'react';
import Skeleton from './Skeleton';

export interface TextSkeletonProps {
  className?: string;
  lines?: number;
  width?: number | string;
  lastLineWidth?: number | string;
  spacing?: number | string;
  hasHeading?: boolean;
  headingHeight?: number | string;
  headingWidth?: number | string;
}

/**
 * TextSkeleton component for displaying text content loading state
 * Shows placeholder lines with customizable width and spacing
 */
const TextSkeleton: React.FC<TextSkeletonProps> = ({
  className = '',
  lines = 3,
  width = '100%',
  lastLineWidth = '70%',
  spacing = '0.75rem',
  hasHeading = false,
  headingHeight = '1.75rem',
  headingWidth = '50%',
}) => {
  return (
    <div className={`w-full ${className}`}>
      {/* Optional heading */}
      {hasHeading && (
        <Skeleton 
          variant="text" 
          height={headingHeight} 
          width={headingWidth}
          className="mb-4" 
        />
      )}
      
      {/* Text lines */}
      <div className="space-y-2" style={{ rowGap: spacing }}>
        {Array(lines).fill(0).map((_, index) => {
          // Determine if this is the last line
          const isLastLine = index === lines - 1;
          // Set width based on line position
          const lineWidth = isLastLine ? lastLineWidth : width;
          
          return (
            <Skeleton 
              key={index}
              variant="text"
              height="1rem"
              width={lineWidth}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TextSkeleton; 