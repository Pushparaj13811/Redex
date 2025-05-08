import React from 'react';

export interface SkeletonProps {
  className?: string;
  variant?: 'rectangular' | 'circular' | 'text';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
  borderRadius?: string;
}

/**
 * Skeleton component for displaying content loading state 
 * with customizable shape, dimensions and animations
 */
const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'rectangular',
  width,
  height,
  animation = 'pulse',
  borderRadius,
}) => {
  // Base skeleton classes
  const baseClasses = 'bg-gray-200 dark:bg-gray-700';
  
  // Generate animation classes
  const animationClasses = {
    'pulse': 'animate-pulse',
    'wave': 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent',
    'none': '',
  };
  
  // Generate variant classes
  const variantClasses = {
    'rectangular': '',
    'circular': 'rounded-full',
    'text': 'rounded'
  };
  
  // Inline styles for dimensions
  const styles: React.CSSProperties = {
    width: width,
    height: height,
    borderRadius,
  };
  
  return (
    <div
      className={`${baseClasses} ${animationClasses[animation]} ${variantClasses[variant]} ${className}`}
      style={styles}
      aria-hidden="true"
    />
  );
};

export default Skeleton; 