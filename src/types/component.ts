/**
 * Base component props interface
 */
export interface BaseProps {
  className?: string;
  id?: string;
  testId?: string;
}

/**
 * Size variants for UI components
 */
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Common color variants
 */
export type ColorVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

/**
 * Common UI component variants
 */
export type UIVariant = 'solid' | 'outline' | 'ghost' | 'link';

/**
 * Padding sizes
 */
export type Padding = 'none' | Size;

/**
 * Margin sizes
 */
export type Margin = 'none' | Size | 'auto';

/**
 * Border radius sizes
 */
export type Radius = 'none' | Size | 'full';

/**
 * Border width options
 */
export type BorderWidth = 'none' | Size;

/**
 * Responsive prop type utility
 * Allows defining different values at different breakpoints
 */
export type ResponsiveProp<T> = T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
};

/**
 * Spacing related props
 */
export interface SpacingProps {
  m?: ResponsiveProp<string | number>;
  mx?: ResponsiveProp<string | number>;
  my?: ResponsiveProp<string | number>;
  mt?: ResponsiveProp<string | number>;
  mr?: ResponsiveProp<string | number>;
  mb?: ResponsiveProp<string | number>;
  ml?: ResponsiveProp<string | number>;
  p?: ResponsiveProp<string | number>;
  px?: ResponsiveProp<string | number>;
  py?: ResponsiveProp<string | number>;
  pt?: ResponsiveProp<string | number>;
  pr?: ResponsiveProp<string | number>;
  pb?: ResponsiveProp<string | number>;
  pl?: ResponsiveProp<string | number>;
}

/**
 * Layout related props
 */
export interface LayoutProps extends SpacingProps {
  width?: ResponsiveProp<string | number>;
  maxWidth?: ResponsiveProp<string | number>;
  minWidth?: ResponsiveProp<string | number>;
  height?: ResponsiveProp<string | number>;
  maxHeight?: ResponsiveProp<string | number>;
  minHeight?: ResponsiveProp<string | number>;
  display?: ResponsiveProp<'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'none'>;
}

/**
 * Flex container props
 */
export interface FlexProps extends LayoutProps {
  flexDirection?: ResponsiveProp<'row' | 'row-reverse' | 'column' | 'column-reverse'>;
  justifyContent?: ResponsiveProp<'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'>;
  alignItems?: ResponsiveProp<'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'>;
  flexWrap?: ResponsiveProp<'nowrap' | 'wrap' | 'wrap-reverse'>;
  gap?: ResponsiveProp<string | number>;
}

/**
 * Grid container props
 */
export interface GridProps extends LayoutProps {
  gridTemplateColumns?: ResponsiveProp<string>;
  gridTemplateRows?: ResponsiveProp<string>;
  gridGap?: ResponsiveProp<string | number>;
  gridColumnGap?: ResponsiveProp<string | number>;
  gridRowGap?: ResponsiveProp<string | number>;
}

/**
 * Accessibility props
 */
export interface A11yProps {
  ariaLabel?: string;
  ariaDescribedby?: string;
  ariaLabelledby?: string;
  ariaHidden?: boolean;
  role?: string;
} 