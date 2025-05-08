import React from 'react';
import Skeleton from './Skeleton';

export interface PageHeaderSkeletonProps {
  className?: string;
  hasBreadcrumbs?: boolean;
  hasSubtitle?: boolean;
  hasActions?: boolean;
}

/**
 * PageHeaderSkeleton component for displaying page header loading state
 * Shows placeholder for title, optional subtitle, breadcrumbs, and action buttons
 */
const PageHeaderSkeleton: React.FC<PageHeaderSkeletonProps> = ({
  className = '',
  hasBreadcrumbs = true,
  hasSubtitle = true,
  hasActions = false,
}) => {
  return (
    <div className={`w-full ${className}`}>
      {/* Breadcrumbs placeholder */}
      {hasBreadcrumbs && (
        <div className="flex items-center mb-4">
          {Array(3).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              <Skeleton 
                variant="text" 
                height="0.875rem" 
                width={index === 0 ? "3rem" : index === 1 ? "4rem" : "5rem"}
              />
              {index < 2 && (
                <span className="mx-2 text-gray-400">/</span>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          {/* Title placeholder */}
          <Skeleton 
            variant="text" 
            height="2.5rem" 
            width="15rem" 
            className="mb-2"
          />
          
          {/* Optional subtitle placeholder */}
          {hasSubtitle && (
            <Skeleton 
              variant="text" 
              height="1.25rem" 
              width="20rem" 
            />
          )}
        </div>
        
        {/* Optional action buttons placeholder */}
        {hasActions && (
          <div className="flex mt-4 md:mt-0 space-x-3">
            <Skeleton 
              variant="rectangular" 
              height="2.5rem" 
              width="7rem" 
              borderRadius="0.375rem"
            />
            <Skeleton 
              variant="rectangular" 
              height="2.5rem" 
              width="7rem" 
              borderRadius="0.375rem"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeaderSkeleton; 