import React from 'react';
import type { FormHTMLAttributes, ReactNode } from 'react';

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  /** Content inside the form */
  children: ReactNode;
  /** Handler for form submission */
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  /** Whether the form is currently being submitted */
  isSubmitting?: boolean;
  /** Error message to display if form submission failed */
  error?: string;
  /** Success message to display if form submission succeeded */
  success?: string;
  /** ID for the form (for accessibility) */
  id?: string;
  /** Additional CSS class */
  className?: string;
  /** Whether to show a loading state */
  isLoading?: boolean;
  /** Whether form fields are disabled */
  isDisabled?: boolean;
  /** Text for assistive technologies */
  ariaLabel?: string;
  /** Description for screen readers */
  ariaDescription?: string;
}

/**
 * Form component
 * 
 * Accessible form with support for loading states, validation, and error messages
 */
const Form: React.FC<FormProps> = ({
  children,
  onSubmit,
  isSubmitting = false,
  error,
  success,
  id,
  className = '',
  isLoading = false,
  isDisabled = false,
  ariaLabel,
  ariaDescription,
  ...props
}) => {
  const formId = id || `form-${Math.random().toString(36).substring(2, 9)}`;
  const errorId = `${formId}-error`;
  const successId = `${formId}-success`;
  const descriptionId = `${formId}-description`;
  
  // Determine needed aria attributes based on states
  const ariaAttributes = {
    'aria-busy': isSubmitting || isLoading,
    'aria-disabled': isDisabled,
    'aria-labelledby': ariaLabel ? undefined : undefined,
    'aria-label': ariaLabel,
    'aria-describedby': [
      ariaDescription ? descriptionId : null,
      error ? errorId : null,
      success ? successId : null
    ].filter(Boolean).join(' ') || undefined
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isSubmitting && !isDisabled && !isLoading) {
      onSubmit(e);
    }
  };
  
  return (
    <form
      id={formId}
      onSubmit={handleSubmit}
      className={`${className}`}
      noValidate
      {...ariaAttributes}
      {...props}
    >
      {ariaDescription && (
        <div id={descriptionId} className="sr-only">
          {ariaDescription}
        </div>
      )}
      
      {children}
      
      {error && (
        <div 
          id={errorId} 
          className="mt-4 p-3 rounded-md bg-brand-error/10 text-brand-error text-sm"
          role="alert"
          aria-live="assertive"
        >
          {error}
        </div>
      )}
      
      {success && (
        <div 
          id={successId} 
          className="mt-4 p-3 rounded-md bg-brand-success/10 text-brand-success text-sm"
          role="status"
          aria-live="polite"
        >
          {success}
        </div>
      )}
    </form>
  );
};

export default Form; 