import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import FocusTrap from '../../accessibility/FocusTrap';

export type ModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ModalProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Function called when the modal closes */
  onClose: () => void;
  /** Modal content */
  children: React.ReactNode;
  /** Modal title */
  title?: string;
  /** Modal size */
  size?: ModalSize;
  /** Whether to show the close button */
  showCloseButton?: boolean;
  /** Whether to close when clicking outside */
  closeOnOverlayClick?: boolean;
  /** Whether to close when ESC key is pressed */
  closeOnEsc?: boolean;
  /** Additional class name */
  className?: string;
  /** ID for the modal (for accessibility) */
  id?: string;
  /** Description of the modal (for screen readers) */
  ariaDescription?: string;
}

/**
 * Modal component
 * 
 * Accessible modal dialog with focus trap, keyboard navigation, and screen reader support
 */
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  size = 'md',
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEsc = true,
  className = '',
  id,
  ariaDescription,
}) => {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalId = id || `modal-${Math.random().toString(36).substring(2, 9)}`;
  const titleId = `${modalId}-title`;
  const descriptionId = `${modalId}-description`;

  // Size map for modal width classes
  const sizeClasses: Record<ModalSize, string> = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full mx-4',
  };

  // Find or create portal root
  useEffect(() => {
    let root = document.getElementById('modal-root');
    if (!root) {
      root = document.createElement('div');
      root.id = 'modal-root';
      document.body.appendChild(root);
    }
    setPortalRoot(root);
    
    // Clean up
    return () => {
      if (root && root.childNodes.length === 0) {
        document.body.removeChild(root);
      }
    };
  }, []);

  // Handle ESC key
  useEffect(() => {
    if (!isOpen || !closeOnEsc) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, closeOnEsc]);
  
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      // Add focus to the modal when it opens
      if (modalRef.current) {
        modalRef.current.focus();
      }
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  if (!isOpen || !portalRoot) return null;
  
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };
  
  return createPortal(
    <FocusTrap>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 transition-opacity"
        onClick={handleBackdropClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={ariaDescription ? descriptionId : undefined}
      >
        <div 
          ref={modalRef}
          className={`
            w-full ${sizeClasses[size]} bg-brand-surface rounded-lg shadow-xl 
            transform transition-transform duration-300 ease-out
            ${className}
          `}
          tabIndex={-1}
          role="document"
        >
          {/* Modal header */}
          {(title || showCloseButton) && (
            <div className="flex items-center justify-between px-6 py-4 border-b border-brand-border">
              {title && (
                <h2 id={titleId} className="text-xl font-semibold text-brand-text">
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
                    aria-hidden="true"
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
            {ariaDescription && (
              <div id={descriptionId} className="sr-only">
                {ariaDescription}
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    </FocusTrap>,
    portalRoot
  );
};

export default Modal; 