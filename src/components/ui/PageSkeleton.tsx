import React from 'react';
import { PageHeaderSkeleton, CardSkeleton, GridSkeleton } from './Skeleton';

export interface PageSkeletonProps {
  className?: string;
  type?: 'default' | 'product' | 'list' | 'detail';
}

/**
 * PageSkeleton component for displaying full page loading state
 * Combines multiple skeleton components to create a complete page layout
 */
const PageSkeleton: React.FC<PageSkeletonProps> = ({
  className = '',
  type = 'default',
}) => {
  // Default page layout with header and content sections
  if (type === 'default') {
    return (
      <div className={`container mx-auto px-4 py-8 ${className}`}>
        <PageHeaderSkeleton className="mb-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <CardSkeleton imageHeight="12rem" />
          <CardSkeleton imageHeight="12rem" />
        </div>
        
        <CardSkeleton className="mb-8" lines={5} />
      </div>
    );
  }
  
  // Product listing page layout
  if (type === 'list') {
    return (
      <div className={`container mx-auto px-4 py-8 ${className}`}>
        <PageHeaderSkeleton className="mb-8" hasActions />
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <CardSkeleton imageHeight={0} lines={8} hasFooter className="sticky top-24" />
          </div>
          
          {/* Product grid */}
          <div className="flex-grow">
            <GridSkeleton 
              columns={{ sm: 2, md: 2, lg: 3, xl: 4 }}
              count={8}
            />
          </div>
        </div>
      </div>
    );
  }
  
  // Product detail page layout
  if (type === 'detail') {
    return (
      <div className={`container mx-auto px-4 py-8 ${className}`}>
        <PageHeaderSkeleton hasBreadcrumbs hasSubtitle={false} className="mb-6" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Product image */}
          <CardSkeleton imageHeight="24rem" lines={0} />
          
          {/* Product details */}
          <div className="space-y-6">
            <CardSkeleton imageHeight={0} lines={5} hasFooter />
            <CardSkeleton imageHeight={0} lines={2} />
          </div>
        </div>
        
        <CardSkeleton className="mb-8" lines={6} />
        
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-4">Related Products</h3>
          <GridSkeleton 
            columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
            count={5}
            itemHeight="10rem"
          />
        </div>
      </div>
    );
  }
  
  // Product category page
  if (type === 'product') {
    return (
      <div className={`container mx-auto px-4 py-8 ${className}`}>
        <PageHeaderSkeleton className="mb-6" />
        
        {/* Featured products */}
        <CardSkeleton className="mb-8" imageHeight="16rem" lines={0} />
        
        {/* Categories */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Categories</h3>
          <GridSkeleton 
            columns={{ sm: 2, md: 4, lg: 6 }}
            count={6}
            itemHeight="8rem"
          />
        </div>
        
        {/* Products */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Products</h3>
          <GridSkeleton 
            columns={{ sm: 2, md: 3, lg: 4 }}
            count={8}
          />
        </div>
      </div>
    );
  }
  
  // Fallback to default
  return (
    <div className={`container mx-auto px-4 py-8 ${className}`}>
      <PageHeaderSkeleton className="mb-8" />
      <CardSkeleton className="mb-8" lines={5} />
    </div>
  );
};

export default PageSkeleton; 