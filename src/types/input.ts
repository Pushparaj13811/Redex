import type { ChangeEvent, ReactNode, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from 'react';
import type { BaseProps, Size, ColorVariant } from './component';

/**
 * Base input field props
 */
export interface InputBaseProps extends BaseProps {
  label?: string;
  error?: string;
  hint?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isFullWidth?: boolean;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  size?: Size;
  variant?: ColorVariant;
}

/**
 * Text input props
 */
export interface TextInputProps extends InputBaseProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search' | 'number';
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Textarea input props
 */
export interface TextareaProps extends InputBaseProps, Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  rows?: number;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

/**
 * Option type for select inputs
 */
export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

/**
 * Select input props
 */
export interface SelectProps extends InputBaseProps, Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  options: SelectOption[];
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

/**
 * Checkbox props
 */
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'>, BaseProps {
  label?: ReactNode;
  isChecked?: boolean;
  isIndeterminate?: boolean;
  size?: Size;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Radio group option
 */
export interface RadioOption {
  value: string;
  label: ReactNode;
  disabled?: boolean;
}

/**
 * Radio group props
 */
export interface RadioGroupProps extends BaseProps {
  name: string;
  options: RadioOption[];
  value?: string;
  direction?: 'horizontal' | 'vertical';
  size?: Size;
  isDisabled?: boolean;
  onChange?: (value: string) => void;
}

/**
 * Switch/Toggle props
 */
export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'>, BaseProps {
  label?: ReactNode;
  isChecked?: boolean;
  size?: Size;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
} 