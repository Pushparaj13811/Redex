import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pageVariants, scrollToTop } from '../../utils/motion';

interface PageTransitionProps {
  children: React.ReactNode;
  location?: string;
}

/**
 * PageTransition component provides premium animations for page changes
 * using Framer Motion
 */
const PageTransition: React.FC<PageTransitionProps> = ({ 
  children, 
  location 
}) => {
  // Scroll to top when location changes
  useEffect(() => {
    if (location) {
      // Check if there's a hash in the location
      if (location.includes('#')) {
        // Do nothing, the hash scroll will be handled separately
        return;
      }
      
      // Only scroll to top if there's no hash
      scrollToTop();
    }
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition; 