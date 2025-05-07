import React, { forwardRef } from 'react';
import type { ReactNode, HTMLAttributes } from 'react';
import type { BorderWidth, Margin, Padding, Radius, ResponsiveProp } from '../../../types/component';
import { getResponsiveClasses, responsivePropToClasses } from '../../../utils/responsive';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Content inside the card */
  children: ReactNode;
  /** Card style variant */
  variant?: 'filled' | 'outlined' | 'elevated';
  /** Card padding */
  padding?: ResponsiveProp<Padding>;
  /** Card border radius */
  radius?: ResponsiveProp<Radius>;
  /** Card border width (for outlined variant) */
  borderWidth?: ResponsiveProp<BorderWidth>;
  /** Whether to add shadow (for elevated variant) */
  hasShadow?: boolean;
  /** Make card occupy the full width of its container */
  isFullWidth?: boolean;
  /** Additional CSS class */
  className?: string;
  /** Optional card header */
  header?: ReactNode;
  /** Optional card footer */
  footer?: ReactNode;
  /** Card margin top */
  mt?: ResponsiveProp<Margin>;
  /** Card margin right */
  mr?: ResponsiveProp<Margin>;
  /** Card margin bottom */
  mb?: ResponsiveProp<Margin>;
  /** Card margin left */
  ml?: ResponsiveProp<Margin>;
  /** Card margin x-axis (left and right) */
  mx?: ResponsiveProp<Margin>;
  /** Card margin y-axis (top and bottom) */
  my?: ResponsiveProp<Margin>;
  /** Card margin all sides */
  m?: ResponsiveProp<Margin>;
}

/**
 * Card component
 * 
 * Container component that groups related content with optional header and footer
 */
const Card = forwardRef<HTMLDivElement, CardProps>(({
  children,
  variant = 'filled',
  padding = 'md',
  radius = 'md',
  borderWidth = 'md',
  hasShadow = true,
  isFullWidth = false,
  className = '',
  header,
  footer,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  m,
  ...props
}, ref) => {
  // Generate padding classes based on the padding prop
  const paddingClasses = responsivePropToClasses(padding, 'p', (value) => {
    switch (value) {
      case 'none': return '0';
      case 'xs': return '1';
      case 'sm': return '2';
      case 'md': return '4';
      case 'lg': return '6';
      case 'xl': return '8';
      default: return '4';
    }
  });

  // Generate border radius classes based on the radius prop
  const radiusClasses = responsivePropToClasses(radius, 'rounded', (value) => {
    switch (value) {
      case 'none': return 'none';
      case 'xs': return 'sm';
      case 'sm': return 'md';
      case 'md': return 'lg';
      case 'lg': return 'xl';
      case 'xl': return '2xl';
      case 'full': return 'full';
      default: return 'lg';
    }
  });

  // Generate border width classes based on the borderWidth prop (for outlined variant)
  const borderWidthClasses = variant === 'outlined' ? responsivePropToClasses(borderWidth, 'border', (value) => {
    switch (value) {
      case 'none': return '0';
      case 'xs': return '';
      case 'sm': return '';
      case 'md': return '2';
      case 'lg': return '4';
      case 'xl': return '8';
      default: return '';
    }
  }) : '';

  // Generate shadow classes (for elevated variant)
  const shadowClasses = variant === 'elevated' && hasShadow ? 'shadow-md' : '';

  // Generate width classes
  const widthClasses = isFullWidth ? 'w-full' : '';

  // Generate margin classes
  const marginClasses = getResponsiveClasses({
    m,
    mt,
    mr,
    mb,
    ml,
    mx,
    my,
  });

  // Define style variants
  const variantClasses = {
    filled: 'bg-brand-surface',
    outlined: 'bg-transparent border-brand-border',
    elevated: 'bg-brand-surface',
  };

  // Generate header and footer classes
  const headerClasses = header ? 'border-b border-brand-border' : '';
  const footerClasses = footer ? 'border-t border-brand-border' : '';

  return (
    <div
      ref={ref}
      className={`
        ${variantClasses[variant]}
        ${radiusClasses}
        ${borderWidthClasses}
        ${shadowClasses}
        ${widthClasses}
        ${marginClasses}
        overflow-hidden
        ${className}
      `}
      {...props}
    >
      {header && (
        <div className={`${headerClasses} ${paddingClasses}`}>
          {header}
        </div>
      )}

      <div className={paddingClasses}>
        {children}
      </div>

      {footer && (
        <div className={`${footerClasses} ${paddingClasses}`}>
          {footer}
        </div>
      )}
    </div>
  );
});

Card.displayName = 'Card';

export default Card; 