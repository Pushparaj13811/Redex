import React, { useEffect, useRef } from 'react';

interface FocusTrapProps {
  /** The content to trap focus within */
  children: React.ReactNode;
  /** Whether the focus trap is active */
  active?: boolean;
  /** Function to call when focusing the first element */
  onFirstFocus?: () => void;
  /** Function to call when focusing the last element */
  onLastFocus?: () => void;
}

/**
 * FocusTrap Component
 * 
 * Traps keyboard focus within its children for accessibility - useful for modals, dialogs, etc.
 * When active, prevents focus from leaving the contained elements, ensuring keyboard users can navigate
 * all interactive elements without accidentally tabbing outside the component.
 */
const FocusTrap: React.FC<FocusTrapProps> = ({ 
  children, 
  active = true, 
  onFirstFocus,
  onLastFocus 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Find all focusable elements inside the container
  const getFocusableElements = (): HTMLElement[] => {
    if (!containerRef.current) return [];
    
    // Query for all potentially focusable elements
    const selector = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      'details',
      'summary'
    ].join(',');
    
    const elements = containerRef.current.querySelectorAll<HTMLElement>(selector);
    return Array.from(elements).filter(el => {
      // Make sure element is visible and not hidden by CSS
      return el.offsetWidth > 0 && el.offsetHeight > 0;
    });
  };
  
  // Handle tab key navigation
  useEffect(() => {
    if (!active) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      
      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) return;
      
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      
      // Shift + Tab navigates backwards
      if (e.shiftKey) {
        // If focus is on first element, wrap to last element
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
          onLastFocus?.();
        }
      } else {
        // If focus is on last element, wrap to first element
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
          onFirstFocus?.();
        }
      }
    };
    
    // Auto-focus the first focusable element when trap is activated
    const focusableElements = getFocusableElements();
    if (focusableElements.length > 0) {
      // Timeout needed to ensure component is fully rendered
      setTimeout(() => {
        focusableElements[0].focus();
        onFirstFocus?.();
      }, 0);
    }
    
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [active, onFirstFocus, onLastFocus]);
  
  return (
    <div ref={containerRef} data-focus-trap>
      {children}
    </div>
  );
};

export default FocusTrap; 