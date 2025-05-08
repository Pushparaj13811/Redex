import React from 'react';
import Skeleton from './Skeleton';

export interface TableSkeletonProps {
  className?: string;
  rows?: number;
  columns?: number;
  hasHeader?: boolean;
}

/**
 * TableSkeleton component for displaying table loading state
 * Shows placeholder rows and columns with header option
 */
const TableSkeleton: React.FC<TableSkeletonProps> = ({
  className = '',
  rows = 5,
  columns = 4,
  hasHeader = true,
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <div className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          {/* Header */}
          {hasHeader && (
            <div className="bg-gray-50 dark:bg-gray-800">
              <div className="grid p-4" 
                   style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
                {Array(columns).fill(0).map((_, index) => (
                  <Skeleton 
                    key={`header-${index}`}
                    variant="text"
                    height="1.2rem"
                  />
                ))}
              </div>
            </div>
          )}
          
          {/* Rows */}
          <div className="bg-white dark:bg-gray-900">
            {Array(rows).fill(0).map((_, rowIndex) => (
              <div key={`row-${rowIndex}`} className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="grid gap-4" 
                     style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
                  {Array(columns).fill(0).map((_, colIndex) => (
                    <Skeleton 
                      key={`cell-${rowIndex}-${colIndex}`}
                      variant="text"
                      height="1rem"
                      width={colIndex === columns - 1 ? "60%" : "100%"}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Pagination */}
      <div className="flex items-center justify-between mt-4 px-2">
        <Skeleton variant="text" width="5rem" height="1rem" />
        <div className="flex gap-2">
          <Skeleton variant="circular" width="2rem" height="2rem" />
          <Skeleton variant="circular" width="2rem" height="2rem" />
          <Skeleton variant="circular" width="2rem" height="2rem" />
        </div>
      </div>
    </div>
  );
};

export default TableSkeleton; 