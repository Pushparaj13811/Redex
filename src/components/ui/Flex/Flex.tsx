import type { HTMLAttributes, ReactNode } from 'react';
import type { FlexProps as FlexTypeProps } from '../../../types/component';
import { getFlexClasses, getSpacingClasses } from '../../../utils/responsive';

export interface FlexProps extends HTMLAttributes<HTMLDivElement>, Omit<FlexTypeProps, 'width' | 'height'> {
  /** Flex container contents */
  children: ReactNode;
  /** Additional CSS class */
  className?: string;
  /** Test ID for testing */
  testId?: string;
}

/**
 * Flex component
 * 
 * A responsive flexbox container with support for all flex properties
 */
const Flex = ({
  children,
  className = '',
  flexDirection,
  alignItems,
  justifyContent,
  flexWrap,
  gap,
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  p,
  pt,
  pr,
  pb,
  pl,
  px,
  py,
  testId,
  ...props
}: FlexProps) => {
  // Extract spacing props for generating spacing classes
  const spacingProps = { m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py };
  
  // Extract flex-related props for generating flex classes
  const flexProps = { 
    flexDirection, 
    alignItems, 
    justifyContent, 
    flexWrap,
    // Convert gap to string to satisfy the type requirement
    gap: gap !== undefined ? gap : undefined
  };
  
  // Generate class strings
  const flexClasses = getFlexClasses(flexProps);
  const spacingClasses = getSpacingClasses(spacingProps);
  
  return (
    <div
      className={`
        flex
        ${flexClasses}
        ${spacingClasses}
        ${className}
      `}
      data-testid={testId}
      {...props}
    >
      {children}
    </div>
  );
};

export default Flex; 