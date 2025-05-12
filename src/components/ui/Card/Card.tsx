import { forwardRef, createElement } from 'react';
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
  /** Optional heading for the card (for accessibility) */
  headingText?: string;
  /** Heading level for accessibility (if headingText is provided) */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Whether the card represents an interactive element (adds hover effects) */
  isInteractive?: boolean;
  /** Whether the card should be focusable (for keyboard navigation) */
  isFocusable?: boolean;
  /** Optional ARIA role */
  role?: string;
}

/**
 * Card component
 * 
 * Versatile container component with multiple variants and styling options
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
  headingText,
  headingLevel = 2,
  isInteractive = false,
  isFocusable = false,
  role,
  ...props
}, ref) => {
  // Generate padding classes based on the padding prop
  const paddingClasses = responsivePropToClasses(padding, 'p', (paddingValue) => {
    switch (paddingValue) {
      case 'none': return '0';
      case 'xs': return '2';
      case 'sm': return '3';
      case 'md': return '4';
      case 'lg': return '6';
      case 'xl': return '8';
      default: return '4';
    }
  });

  // Generate radius classes based on radius prop
  const radiusClasses = responsivePropToClasses(radius, 'rounded', (radiusValue) => {
    switch (radiusValue) {
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

  // Generate border width classes for the outline variant
  const borderWidthClasses = variant === 'outlined' ? responsivePropToClasses(borderWidth, 'border', (borderWidthValue) => {
    switch (borderWidthValue) {
      case 'none': return '0';
      case 'xs': return '';
      case 'sm': return '';
      case 'md': return '2';
      case 'lg': return '4';
      case 'xl': return '8';
      default: return '';
    }
  }) : '';

  // Define shadow classes
  const shadowClasses = hasShadow && variant === 'elevated' ? 'shadow-md' : '';

  // Define width classes
  const widthClasses = isFullWidth ? 'w-full' : '';

  // Define margin classes
  const marginClasses = getResponsiveClasses({
    mt,
    mr,
    mb,
    ml,
    mx,
    my,
    m,
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

  // Interactive classes
  const interactiveClasses = isInteractive 
    ? 'transition-all duration-200 hover:shadow-lg hover:transform hover:-translate-y-1' 
    : '';

  // Focusable attributes
  const focusableProps = isFocusable 
    ? { 
        tabIndex: 0,
        className: `${className} focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2`,
      } 
    : { className };

  // Render heading if provided
  const renderHeading = () => {
    if (!headingText) return null;
    
    return createElement(
      `h${headingLevel}`,
      { className: "text-brand-text font-medium" },
      headingText
    );
  };

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
        ${interactiveClasses}
        overflow-hidden
        ${focusableProps.className || className}
      `}
      {...(isFocusable ? { tabIndex: 0 } : {})}
      role={role}
      {...props}
    >
      {renderHeading()}
      
      {header && (
        <div className={`${headerClasses} ${paddingClasses}`} role="heading" aria-level={headingLevel}>
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