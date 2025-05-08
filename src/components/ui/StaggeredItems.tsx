import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StaggeredItemsProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  once?: boolean;
}

/**
 * StaggeredItems component animates multiple children in sequence
 * Perfect for lists, grids, and multi-item sections
 */
const StaggeredItems: React.FC<StaggeredItemsProps> = ({
  children,
  className = '',
  threshold = 0.1,
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once,
    amount: threshold,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export default StaggeredItems; 