import React, { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showCloseButton?: boolean;
  closeOnEsc?: boolean;
  closeOnOutsideClick?: boolean;
  className?: string;
}

/**
 * Modal component
 * 
 * Accessible, responsive modal that renders with a backdrop and supports various sizes
 */
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnEsc = true,
  closeOnOutsideClick = true,
  className = '',
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const portalRoot = document.getElementById('portal-root') || document.body;
  
  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (closeOnEsc && e.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = ''; // Restore scrolling when modal is closed
    };
  }, [isOpen, onClose, closeOnEsc]);
  
  // Handle outside click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (closeOnOutsideClick && modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };
  
  // Size classes
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  };
  
  if (!isOpen) return null;
  
  return createPortal(
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 transition-opacity"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      <div 
        ref={modalRef}
        className={`
          w-full ${sizeClasses[size]} bg-brand-surface rounded-lg shadow-xl 
          transform transition-transform duration-300 ease-out
          ${className}
        `}
      >
        {/* Modal header */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-brand-border">
            {title && (
              <h2 id="modal-title" className="text-xl font-semibold text-brand-text">
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                type="button"
                onClick={onClose}
                className="text-brand-textSecondary hover:text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-primary rounded-full p-1"
                aria-label="Close"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
            )}
          </div>
        )}
        
        {/* Modal content */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>,
    portalRoot
  );
};

export default Modal; 