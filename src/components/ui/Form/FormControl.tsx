import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import type { Size } from '../../../types/component';

// FormControl Context
interface FormControlContextProps {
  id: string;
  isRequired: boolean;
  isDisabled: boolean;
  isInvalid: boolean;
  size: Size;
}

const FormControlContext = createContext<FormControlContextProps | undefined>(undefined);

export const useFormControl = () => {
  const context = useContext(FormControlContext);
  if (!context) {
    throw new Error('useFormControl must be used within a FormControl component');
  }
  return context;
};

// FormControl Props
export interface FormControlProps {
  children: ReactNode;
  id?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  size?: Size;
  className?: string;
}

/**
 * FormControl component
 * 
 * Provides context for form elements and manages layout
 */
export const FormControl = ({
  children,
  id = `form-control-${Math.random().toString(36).substring(2, 9)}`,
  isRequired = false,
  isDisabled = false,
  isInvalid = false,
  size = 'md',
  className = '',
}: FormControlProps) => {
  const value = {
    id,
    isRequired,
    isDisabled,
    isInvalid,
    size,
  };

  return (
    <FormControlContext.Provider value={value}>
      <div className={`mb-4 ${className}`}>
        {children}
      </div>
    </FormControlContext.Provider>
  );
};

// FormLabel Props
export interface FormLabelProps {
  children: ReactNode;
  htmlFor?: string;
  className?: string;
  requiredIndicator?: ReactNode;
  optionalIndicator?: ReactNode;
}

/**
 * FormLabel component
 * 
 * Label for form controls
 */
export const FormLabel = ({
  children,
  htmlFor,
  className = '',
  requiredIndicator = <span className="ml-1 text-brand-error">*</span>,
  optionalIndicator = <span className="ml-1 text-brand-muted">(optional)</span>,
}: FormLabelProps) => {
  const { id, isRequired } = useFormControl();
  
  return (
    <label
      htmlFor={htmlFor || id}
      className={`block mb-1 text-sm font-medium text-brand-text ${className}`}
    >
      {children}
      {isRequired && requiredIndicator}
      {!isRequired && optionalIndicator && false /* Only show optional if needed */}
    </label>
  );
};

// FormHelperText Props
export interface FormHelperTextProps {
  children: ReactNode;
  className?: string;
}

/**
 * FormHelperText component
 * 
 * Helper text for form controls
 */
export const FormHelperText = ({
  children,
  className = '',
}: FormHelperTextProps) => {
  const { id, isInvalid } = useFormControl();
  
  return (
    <div
      id={`${id}-helper-text`}
      className={`mt-1 text-xs ${isInvalid ? 'text-brand-error' : 'text-brand-muted'} ${className}`}
    >
      {children}
    </div>
  );
};

// FormErrorMessage Props
export interface FormErrorMessageProps {
  children: ReactNode;
  className?: string;
}

/**
 * FormErrorMessage component
 * 
 * Error message for form controls
 */
export const FormErrorMessage = ({
  children,
  className = '',
}: FormErrorMessageProps) => {
  const { id, isInvalid } = useFormControl();
  
  if (!isInvalid) return null;
  
  return (
    <div
      id={`${id}-error`}
      className={`mt-1 text-xs text-brand-error ${className}`}
      aria-live="polite"
    >
      {children}
    </div>
  );
}; 