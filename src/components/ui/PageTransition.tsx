import React, { useEffect, useState } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  location?: string;
}

/**
 * PageTransition component provides subtle animations for page changes
 */
const PageTransition: React.FC<PageTransitionProps> = ({ 
  children, 
  location 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Reset animation on route change
    setIsVisible(false);
    
    // Start entrance animation after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div
      className={`
        transition-all duration-300 ease-in-out
        transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
    >
      {children}
    </div>
  );
};

export default PageTransition; 