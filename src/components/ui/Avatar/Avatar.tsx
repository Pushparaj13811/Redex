import React from 'react';
import Image from '../Image';

export interface AvatarProps {
  /** Image source URL */
  src?: string;
  /** Alt text for accessibility */
  alt: string;
  /** Text to display when image is not available */
  fallbackText?: string;
  /** Size of the avatar */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Shape of the avatar */
  shape?: 'circle' | 'square';
  /** Status indicator (online, offline, busy, away) */
  status?: 'online' | 'offline' | 'busy' | 'away';
  /** Border color */
  borderColor?: string;
  /** Whether to show a border */
  withBorder?: boolean;
  /** Additional CSS class names */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

/**
 * Avatar component
 * 
 * Displays a user avatar with support for images and text fallbacks
 */
const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  fallbackText = '',
  size = 'md',
  shape = 'circle',
  status,
  borderColor,
  withBorder = false,
  className = '',
  onClick,
}) => {
  // Calculate initials for fallback
  const initials = React.useMemo(() => {
    if (!fallbackText) return '';
    return fallbackText
      .split(' ')
      .map(name => name[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  }, [fallbackText]);
  
  // Size classes
  const sizeClasses = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl',
    '2xl': 'w-20 h-20 text-2xl',
  };
  
  // Status color classes
  const statusColorClasses = {
    online: 'bg-green-500',
    offline: 'bg-gray-400',
    busy: 'bg-red-500',
    away: 'bg-yellow-500',
  };
  
  // Status size classes based on avatar size
  const statusSizeClasses = {
    xs: 'w-1.5 h-1.5 right-0 bottom-0',
    sm: 'w-2 h-2 right-0 bottom-0',
    md: 'w-2.5 h-2.5 right-0 bottom-0',
    lg: 'w-3 h-3 right-0 bottom-0',
    xl: 'w-4 h-4 right-0.5 bottom-0.5',
    '2xl': 'w-5 h-5 right-1 bottom-1',
  };
  
  // Border classes
  const borderClasses = withBorder 
    ? `border-2 ${borderColor ? borderColor : 'border-white'}` 
    : '';
  
  // Shape classes
  const shapeClasses = shape === 'circle' ? 'rounded-full' : 'rounded-md';
  
  return (
    <div 
      className={`
        relative inline-flex items-center justify-center flex-shrink-0
        ${sizeClasses[size]}
        ${shapeClasses}
        ${borderClasses}
        ${className}
        ${onClick ? 'cursor-pointer' : ''}
      `}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={onClick ? `${alt}'s avatar` : undefined}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          rounded={shape === 'circle' ? 'full' : 'md'}
          className="w-full h-full"
          fallbackSrc=""
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-600">
          {initials}
        </div>
      )}
      
      {status && (
        <span 
          className={`
            absolute block border-2 border-white
            ${statusColorClasses[status]}
            ${statusSizeClasses[size]}
            ${shape === 'circle' ? 'rounded-full' : 'rounded-sm'}
          `}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default Avatar; 