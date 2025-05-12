import React from 'react';
import Avatar from '../Avatar';
import type { AvatarProps } from '../Avatar';

export interface AvatarGroupProps {
  /** Array of avatar data */
  avatars: Array<Omit<AvatarProps, 'size' | 'className'>>;
  /** Maximum number of avatars to display */
  max?: number;
  /** Size of the avatars */
  size?: AvatarProps['size'];
  /** Spacing between avatars */
  spacing?: 'tight' | 'normal' | 'loose';
  /** Additional CSS class names */
  className?: string;
  /** Click handler for the "more" avatar */
  onMoreClick?: () => void;
}

/**
 * AvatarGroup component
 * 
 * Displays multiple avatars in a group with configurable overlap
 */
const AvatarGroup: React.FC<AvatarGroupProps> = ({
  avatars = [],
  max = 5,
  size = 'md',
  spacing = 'normal',
  className = '',
  onMoreClick,
}) => {
  // Determine which avatars to show and how many are hidden
  const visibleAvatars = avatars.slice(0, max);
  const remainingCount = Math.max(0, avatars.length - max);
  
  // Spacing values based on size
  const spacingValues = {
    tight: {
      xs: '-mr-2',
      sm: '-mr-3',
      md: '-mr-4',
      lg: '-mr-5',
      xl: '-mr-6',
      '2xl': '-mr-8',
    },
    normal: {
      xs: '-mr-1',
      sm: '-mr-2',
      md: '-mr-3',
      lg: '-mr-4',
      xl: '-mr-5',
      '2xl': '-mr-6',
    },
    loose: {
      xs: 'mr-0.5',
      sm: 'mr-1',
      md: 'mr-1.5',
      lg: 'mr-2',
      xl: 'mr-3',
      '2xl': 'mr-4',
    },
  };
  
  // Get spacing class based on size and spacing
  const spacingClass = spacingValues[spacing][size];
  
  return (
    <div className={`flex items-center ${className}`}>
      {visibleAvatars.map((avatar, index) => (
        <div
          key={`avatar-${index}`}
          className={`${index !== visibleAvatars.length - 1 || remainingCount > 0 ? spacingClass : ''}`}
          style={{ zIndex: 10 - index }}
        >
          <Avatar
            {...avatar}
            size={size}
            className={`${withBorder(avatar) ? '' : 'border-2 border-white'}`}
          />
        </div>
      ))}
      
      {remainingCount > 0 && (
        <div style={{ zIndex: 10 - visibleAvatars.length }}>
          <Avatar
            alt={`${remainingCount} more`}
            fallbackText={`+${remainingCount}`}
            size={size}
            className="border-2 border-white"
            onClick={onMoreClick}
          />
        </div>
      )}
    </div>
  );
};

// Helper function to check if an avatar has a border
const withBorder = (avatar: Omit<AvatarProps, 'size' | 'className'>): boolean => {
  return avatar.withBorder === true;
};

export default AvatarGroup; 