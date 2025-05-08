import React from 'react';

interface SkipLinkProps {
  /**
   * The ID of the main content to skip to
   */
  targetId?: string;
  /**
   * Optional custom text for the skip link
   */
  text?: string;
  /**
   * Optional additional class names
   */
  className?: string;
}

/**
 * SkipLink component for accessibility
 * 
 * Provides keyboard-only users a way to skip navigation and get straight to the main content
 */
const SkipLink: React.FC<SkipLinkProps> = ({
  targetId = 'main-content',
  text = 'Skip to main content',
  className = '',
}) => {
  return (
    <a 
      href={`#${targetId}`} 
      className={`
        absolute -top-10 left-0 
        bg-brand-primary text-brand-textLight 
        z-50 p-2 transition-[top] duration-200
        focus:top-0 focus:outline-none focus:ring-2 focus:ring-brand-accent
        ${className}
      `}
    >
      {text}
    </a>
  );
};

export default SkipLink; 