import { forwardRef } from 'react';
import type { TextInputProps } from '../../../types/input';
import { responsivePropToClasses } from '../../../utils/responsive';

/**
 * Input component
 *
 * Accessible, responsive input field with support for different sizes, validation states,
 * and addon components
 */
const Input = forwardRef<HTMLInputElement, TextInputProps>(
  ({
    id,
    name,
    type = 'text',
    label,
    error,
    hint,
    isRequired = false,
    isDisabled = false,
    isReadOnly = false,
    isFullWidth = true,
    size = 'md',
    leftAddon,
    rightAddon,
    className = '',
    onChange,
    testId,
    ...props
  }, ref) => {
    // Create a unique ID for accessibility if not provided
    const inputId = id || `input-${name || Math.random().toString(36).substring(2, 9)}`;
    const errorId = `${inputId}-error`;
    const hintId = `${inputId}-hint`;

    // Generate size classes
    const sizeClasses = responsivePropToClasses(size, '', (sizeValue) => {
      switch (sizeValue) {
        case 'xs': return 'text-xs h-7 px-2';
        case 'sm': return 'text-sm h-8 px-3';
        case 'md': return 'text-base h-10 px-4';
        case 'lg': return 'text-lg h-12 px-5';
        case 'xl': return 'text-xl h-14 px-6';
        default: return 'text-base h-10 px-4';
      }
    });

    // Define base input classes
    const baseInputClasses = 'w-full rounded-md border border-brand-border bg-white text-brand-text focus:outline-none focus:ring-2 transition-colors';
    
    // Define state classes
    const stateClasses = [
      isDisabled ? 'opacity-60 cursor-not-allowed bg-gray-100' : '',
      isReadOnly ? 'bg-gray-50 cursor-default' : '',
      error ? 'border-brand-error focus:border-brand-error focus:ring-brand-error' : 'focus:border-brand-primary focus:ring-brand-primary',
    ].filter(Boolean).join(' ');

    // Width classes
    const widthClasses = isFullWidth ? 'w-full' : 'w-auto';

    // Rendering functions for addons
    const renderLeftAddon = () => {
      if (!leftAddon) return null;
      return (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          {typeof leftAddon === 'string' ? (
            <span className="text-gray-500">{leftAddon}</span>
          ) : (
            leftAddon
          )}
        </div>
      );
    };

    const renderRightAddon = () => {
      if (!rightAddon) return null;
      return (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          {typeof rightAddon === 'string' ? (
            <span className="text-gray-500">{rightAddon}</span>
          ) : (
            rightAddon
          )}
        </div>
      );
    };

    // Determine padding adjustments for addons
    const addonPaddingClasses = [
      leftAddon ? 'pl-10' : '',
      rightAddon ? 'pr-10' : '',
    ].filter(Boolean).join(' ');

    // Generate aria attributes
    const ariaAttributes = {
      'aria-invalid': Boolean(error),
      'aria-describedby': [
        error ? errorId : null,
        hint ? hintId : null,
      ].filter(Boolean).join(' ') || undefined,
      'aria-required': isRequired,
    };
    
    return (
      <div className={`flex flex-col ${widthClasses} ${className}`}>
        {label && (
          <label 
            htmlFor={inputId}
            className={`mb-1 text-sm font-medium ${error ? 'text-brand-error' : 'text-brand-text'}`}
          >
            {label}
            {isRequired && <span className="ml-1 text-brand-error">*</span>}
          </label>
        )}
        
        <div className="relative">
          {renderLeftAddon()}
          <input
            id={inputId}
            ref={ref}
            type={type}
            name={name}
            className={`
              ${baseInputClasses}
              ${sizeClasses}
              ${stateClasses}
              ${addonPaddingClasses}
            `}
            disabled={isDisabled}
            readOnly={isReadOnly}
            onChange={onChange}
            data-testid={testId}
            {...ariaAttributes}
            {...props}
          />
          {renderRightAddon()}
        </div>

        {(error || hint) && (
          <div className="mt-1">
            {error && (
              <p id={errorId} className="text-xs text-brand-error">{error}</p>
            )}
            {!error && hint && (
              <p id={hintId} className="text-xs text-brand-muted">{hint}</p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 