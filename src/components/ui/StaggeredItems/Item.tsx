import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from '../../../utils/motion';

interface ItemProps {
  children: React.ReactNode;
  index?: number;
  className?: string;
}

/**
 * Individual item component that animates with a staggered delay
 */
const Item: React.FC<ItemProps> = ({ 
  children, 
  index = 0,
  className = '',
}) => {
  return (
    <motion.div
      className={className}
      variants={itemVariants}
      custom={index}
      transition={{
        delay: index * 0.1, // Stagger based on index
      }}
    >
      {children}
    </motion.div>
  );
};

export default Item; 