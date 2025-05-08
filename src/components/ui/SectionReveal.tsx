import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { sectionVariants } from '../../utils/motion';

interface SectionRevealProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
  threshold?: number;
  once?: boolean;
}

/**
 * SectionReveal component animates children when they come into view
 * Perfect for revealing sections as the user scrolls down the page
 */
const SectionReveal: React.FC<SectionRevealProps> = ({
  children,
  id,
  className = '',
  delay = 0,
  threshold = 0.2,
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once,
    amount: threshold,
  });
  
  const customVariants = {
    ...sectionVariants,
    visible: {
      ...sectionVariants.visible,
      transition: {
        ...sectionVariants.visible.transition,
        delay,
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={customVariants}
    >
      {children}
    </motion.div>
  );
};

export default SectionReveal; 