import React from 'react';
import { useLocation } from 'react-router-dom';
import { PageTransition } from './';

interface PageTransitionWrapperProps {
  children: React.ReactNode;
}

/**
 * Wrapper component that applies page transitions based on route changes
 */
const PageTransitionWrapper: React.FC<PageTransitionWrapperProps> = ({ children }) => {
  const location = useLocation();
  
  return (
    <PageTransition location={location.pathname}>
      {children}
    </PageTransition>
  );
};

export default PageTransitionWrapper; 