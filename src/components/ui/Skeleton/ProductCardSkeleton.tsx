import React from 'react';
import Skeleton from './Skeleton';

export interface ProductCardSkeletonProps {
  className?: string;
}

/**
 * ProductCardSkeleton component for displaying product card loading state
 * Shows placeholder for product image, title, price, rating, and action button
 */
const ProductCardSkeleton: React.FC<ProductCardSkeletonProps> = ({
  className = '',
}) => {
  return (
    <div className={`border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden ${className}`}>
      {/* Product image placeholder */}
      <div className="relative aspect-square">
        <Skeleton 
          variant="rectangular"
          width="100%"
          height="100%"
        />
      </div>
      
      {/* Product details */}
      <div className="p-4">
        {/* Title placeholder */}
        <Skeleton 
          variant="text" 
          height="1.25rem" 
          width="90%" 
          className="mb-2"
        />
        
        {/* Category placeholder */}
        <Skeleton 
          variant="text" 
          height="0.875rem" 
          width="60%" 
          className="mb-3"
        />
        
        {/* Price and rating row */}
        <div className="flex justify-between items-center mb-4">
          {/* Price placeholder */}
          <Skeleton 
            variant="text" 
            height="1.5rem" 
            width="40%" 
          />
          
          {/* Rating placeholder */}
          <div className="flex items-center">
            {Array(5).fill(0).map((_, index) => (
              <Skeleton 
                key={index}
                variant="circular" 
                height="1rem" 
                width="1rem"
                className="mx-0.5" 
              />
            ))}
          </div>
        </div>
        
        {/* Add to cart button placeholder */}
        <Skeleton 
          variant="rectangular"
          height="2.5rem"
          width="100%"
          borderRadius="0.375rem"
        />
      </div>
    </div>
  );
};

export default ProductCardSkeleton; 