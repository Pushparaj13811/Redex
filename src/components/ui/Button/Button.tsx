import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { Size, ColorVariant, UIVariant, ResponsiveProp } from '../../../types/component';
import { responsivePropToClasses } from '../../../utils/responsive';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  /** Content inside button */
  children: ReactNode;
  /** Button style variant */
  variant?: UIVariant;
  /** Button color variant */
  colorScheme?: ColorVariant;
  /** Button size variant */
  size?: ResponsiveProp<Size>;
  /** Make button occupy the full width of its container */
  isFullWidth?: boolean;
  /** Renders button in loading state */
  isLoading?: boolean;
  /** Make button disabled */
  isDisabled?: boolean;
  /** Icon displayed before button text */
  leftIcon?: ReactNode;
  /** Icon displayed after button text */
  rightIcon?: ReactNode;
  /** Additional CSS class */
  className?: string;
  /** Test ID for testing */
  testId?: string;
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
  /** Accessibility label when button content is not descriptive enough */
  ariaLabel?: string;
}

/**
 * Button component
 * 
 * Responsive, accessible button component with icon support and loading state
 */
const Button = ({
  children,
  variant = 'solid',
  colorScheme = 'primary',
  size = 'md',
  isFullWidth = false,
  isLoading = false,
  isDisabled = false,
  leftIcon,
  rightIcon,
  className = '',
  testId,
  type = 'button',
  ariaLabel,
  ...props
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary';
  
  // Dynamically generate size classes based on the size prop
  const sizeClasses = responsivePropToClasses(size, '', (sizeValue) => {
    switch (sizeValue) {
      case 'xs': return 'text-xs px-2 py-1 gap-1';
      case 'sm': return 'text-sm px-3 py-1.5 gap-1.5';
      case 'md': return 'text-base px-4 py-2 gap-2';
      case 'lg': return 'text-lg px-6 py-2.5 gap-2';
      case 'xl': return 'text-xl px-8 py-3 gap-3';
      default: return 'text-base px-4 py-2 gap-2';
    }
  });
  
  // Style variants
  const variantClasses = {
    solid: `bg-brand-${colorScheme} text-brand-textLight hover:bg-brand-${colorScheme}-hover active:bg-brand-${colorScheme}-active`,
    outline: `border border-brand-${colorScheme} text-brand-${colorScheme} hover:bg-brand-${colorScheme}/10 active:bg-brand-${colorScheme}/20`,
    ghost: `text-brand-${colorScheme} hover:bg-brand-${colorScheme}/10 active:bg-brand-${colorScheme}/20`,
    link: `text-brand-${colorScheme} hover:underline underline-offset-2 p-0 h-auto bg-transparent`,
  };
  
  // Full width class
  const widthClasses = isFullWidth ? 'w-full' : '';
  
  // Loading state
  const loadingSpinner = (
    <svg 
      className="animate-spin -ml-1 mr-2 h-4 w-4" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
  
  return (
    <button
      type={type}
      className={`
        ${baseClasses}
        ${sizeClasses}
        ${variantClasses[variant]}
        ${widthClasses}
        ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      disabled={isDisabled || isLoading}
      data-testid={testId}
      aria-label={ariaLabel}
      aria-disabled={isDisabled || isLoading}
      aria-busy={isLoading}
      role="button"
      {...props}
    >
      {isLoading && loadingSpinner}
      {!isLoading && leftIcon && <span className="button-icon">{leftIcon}</span>}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="button-icon">{rightIcon}</span>}
    </button>
  );
};

export default Button; 