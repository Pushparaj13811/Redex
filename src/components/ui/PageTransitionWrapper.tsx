import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PageTransition } from './';
import { scrollToHash } from '../../utils/motion';

interface PageTransitionWrapperProps {
  children: React.ReactNode;
}

/**
 * Wrapper component that applies page transitions based on route changes
 * and handles scrolling behavior for hash links
 */
const PageTransitionWrapper: React.FC<PageTransitionWrapperProps> = ({ children }) => {
  const location = useLocation();
  
  // Handle hash links when present
  useEffect(() => {
    // If there's a hash in the URL, scroll to it
    if (location.hash) {
      scrollToHash(location.hash);
    }
  }, [location.hash]);

  return (
    <PageTransition location={location.pathname + location.search + location.hash}>
      {children}
    </PageTransition>
  );
};

export default PageTransitionWrapper; 