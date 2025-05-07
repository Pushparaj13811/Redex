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
  ...props
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
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

  // Define style variants
  const variantClasses = {
    solid: {
      primary: 'bg-brand-primary text-brand-textLight hover:bg-brand-primaryHover focus:ring-brand-primary',
      secondary: 'bg-brand-surfaceHover text-brand-text hover:bg-gray-300 focus:ring-gray-400',
      success: 'bg-brand-success text-brand-textLight hover:bg-green-700 focus:ring-brand-success',
      warning: 'bg-brand-warning text-brand-textLight hover:bg-amber-700 focus:ring-brand-warning',
      error: 'bg-brand-error text-brand-textLight hover:bg-red-700 focus:ring-brand-error',
      info: 'bg-brand-info text-brand-textLight hover:bg-blue-600 focus:ring-brand-info',
    },
    outline: {
      primary: 'border border-brand-primary text-brand-primary hover:bg-brand-primaryHover hover:bg-opacity-10 focus:ring-brand-primary',
      secondary: 'border border-brand-border text-brand-text hover:bg-brand-surfaceHover focus:ring-gray-400',
      success: 'border border-brand-success text-brand-success hover:bg-green-50 focus:ring-brand-success',
      warning: 'border border-brand-warning text-brand-warning hover:bg-amber-50 focus:ring-brand-warning',
      error: 'border border-brand-error text-brand-error hover:bg-red-50 focus:ring-brand-error',
      info: 'border border-brand-info text-brand-info hover:bg-blue-50 focus:ring-brand-info',
    },
    ghost: {
      primary: 'text-brand-primary hover:bg-brand-primaryHover hover:bg-opacity-10 focus:ring-brand-primary',
      secondary: 'text-brand-text hover:bg-brand-surfaceHover focus:ring-gray-400',
      success: 'text-brand-success hover:bg-green-50 focus:ring-brand-success',
      warning: 'text-brand-warning hover:bg-amber-50 focus:ring-brand-warning',
      error: 'text-brand-error hover:bg-red-50 focus:ring-brand-error',
      info: 'text-brand-info hover:bg-blue-50 focus:ring-brand-info',
    },
    link: {
      primary: 'text-brand-primary hover:underline p-0 focus:ring-brand-primary',
      secondary: 'text-brand-text hover:underline p-0 focus:ring-gray-400',
      success: 'text-brand-success hover:underline p-0 focus:ring-brand-success',
      warning: 'text-brand-warning hover:underline p-0 focus:ring-brand-warning',
      error: 'text-brand-error hover:underline p-0 focus:ring-brand-error',
      info: 'text-brand-info hover:underline p-0 focus:ring-brand-info',
    },
  };

  // Generate state classes
  const stateClasses = [
    isDisabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '',
    isLoading ? 'relative !text-transparent hover:!text-transparent' : '',
    isFullWidth ? 'w-full' : '',
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={`
        ${baseClasses}
        ${sizeClasses}
        ${variantClasses[variant][colorScheme]}
        ${stateClasses}
        ${className}
      `}
      disabled={isDisabled || isLoading}
      data-testid={testId}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading && (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-block animate-spin">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
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
        </span>
      )}
      {leftIcon && !isLoading && <span className="flex-shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && !isLoading && <span className="flex-shrink-0">{rightIcon}</span>}
    </button>
  );
};

export default Button; 