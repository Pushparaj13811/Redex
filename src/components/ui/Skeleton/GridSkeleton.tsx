import React from 'react';
import CardSkeleton from './CardSkeleton';

export interface GridSkeletonProps {
  className?: string;
  columns?: { 
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  count?: number;
  gap?: string;
  itemHeight?: string | number;
  aspectRatio?: string;
  cardProps?: React.ComponentProps<typeof CardSkeleton>;
}

/**
 * GridSkeleton component for displaying grid layout loading state
 * Shows a grid of card skeletons with responsive column configuration
 */
const GridSkeleton: React.FC<GridSkeletonProps> = ({
  className = '',
  columns = { sm: 1, md: 2, lg: 3, xl: 4 },
  count = 8,
  gap = '1rem',
  itemHeight,
  aspectRatio = '1/1',
  cardProps,
}) => {
  // Generate responsive grid classes
  const gridClasses = [
    'grid',
    `grid-cols-1`,
    columns.sm ? `sm:grid-cols-${columns.sm}` : '',
    columns.md ? `md:grid-cols-${columns.md}` : '',
    columns.lg ? `lg:grid-cols-${columns.lg}` : '',
    columns.xl ? `xl:grid-cols-${columns.xl}` : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={`${gridClasses} ${className}`} style={{ gap }}>
      {Array(count).fill(0).map((_, index) => (
        <CardSkeleton 
          key={index}
          imageHeight={itemHeight}
          aspectRatio={aspectRatio}
          {...cardProps}
        />
      ))}
    </div>
  );
};

export default GridSkeleton; 