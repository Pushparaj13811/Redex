import type { ResponsiveProp } from '../types/component';

/**
 * Convert responsive props to Tailwind classes
 * @param prop - The responsive prop value
 * @param classPrefix - Tailwind class prefix (e.g., 'p-', 'mt-', etc.)
 * @param propToClassValue - Optional function to transform prop value to class value
 * @returns Tailwind classes string
 */
export function responsivePropToClasses<T>(
  prop: ResponsiveProp<T> | undefined,
  classPrefix: string,
  propToClassValue: (value: T) => string = (value) => String(value)
): string {
  if (prop === undefined) return '';
  
  if (typeof prop !== 'object') {
    return `${classPrefix}${propToClassValue(prop)}`;
  }

  const classes: string[] = [];
  const responsiveProp = prop as { 
    base?: T; 
    sm?: T; 
    md?: T; 
    lg?: T; 
    xl?: T; 
    '2xl'?: T; 
  };
  
  if (responsiveProp.base !== undefined) {
    classes.push(`${classPrefix}${propToClassValue(responsiveProp.base)}`);
  }
  
  if (responsiveProp.sm !== undefined) {
    classes.push(`sm:${classPrefix}${propToClassValue(responsiveProp.sm)}`);
  }
  
  if (responsiveProp.md !== undefined) {
    classes.push(`md:${classPrefix}${propToClassValue(responsiveProp.md)}`);
  }
  
  if (responsiveProp.lg !== undefined) {
    classes.push(`lg:${classPrefix}${propToClassValue(responsiveProp.lg)}`);
  }
  
  if (responsiveProp.xl !== undefined) {
    classes.push(`xl:${classPrefix}${propToClassValue(responsiveProp.xl)}`);
  }
  
  if (responsiveProp['2xl'] !== undefined) {
    classes.push(`2xl:${classPrefix}${propToClassValue(responsiveProp['2xl'])}`);
  }
  
  return classes.join(' ');
}

/**
 * Generate spacing classes from spacing props
 * @param props - The spacing props object
 * @returns Tailwind spacing classes string
 */
export function getSpacingClasses(props: Record<string, ResponsiveProp<string | number> | undefined>): string {
  const spacingProps = {
    m: 'm',
    mx: 'mx',
    my: 'my',
    mt: 'mt',
    mr: 'mr',
    mb: 'mb',
    ml: 'ml',
    p: 'p',
    px: 'px',
    py: 'py',
    pt: 'pt',
    pr: 'pr',
    pb: 'pb',
    pl: 'pl',
  };

  const classes: string[] = [];
  
  for (const [prop, prefix] of Object.entries(spacingProps)) {
    if (props[prop] !== undefined) {
      classes.push(responsivePropToClasses(props[prop], `${prefix}-`));
    }
  }
  
  return classes.join(' ');
}

/**
 * Generate responsive classes from props
 * Simplified version of getSpacingClasses that only handles margin props
 * @param props - The props object with margin properties
 * @returns Tailwind margin classes string
 */
export function getResponsiveClasses(props: Record<string, ResponsiveProp<string | number> | undefined>): string {
  const marginProps = {
    m: 'm',
    mx: 'mx',
    my: 'my',
    mt: 'mt',
    mr: 'mr',
    mb: 'mb',
    ml: 'ml',
  };

  const classes: string[] = [];
  
  for (const [prop, prefix] of Object.entries(marginProps)) {
    if (props[prop] !== undefined) {
      classes.push(responsivePropToClasses(props[prop], `${prefix}-`));
    }
  }
  
  return classes.join(' ');
}

/**
 * Generate flex related classes
 * @param props - The flex props object
 * @returns Tailwind flex classes string
 */
export function getFlexClasses(props: Record<string, ResponsiveProp<string | number> | undefined>): string {
  const flexMappings = {
    flexDirection: {
      property: 'flex',
      valueMap: {
        row: 'row',
        'row-reverse': 'row-reverse',
        column: 'col',
        'column-reverse': 'col-reverse',
      },
    },
    justifyContent: {
      property: 'justify',
      valueMap: {
        'flex-start': 'start',
        'flex-end': 'end',
        center: 'center',
        'space-between': 'between',
        'space-around': 'around',
        'space-evenly': 'evenly',
      },
    },
    alignItems: {
      property: 'items',
      valueMap: {
        'flex-start': 'start',
        'flex-end': 'end',
        center: 'center',
        baseline: 'baseline',
        stretch: 'stretch',
      },
    },
    flexWrap: {
      property: 'flex',
      valueMap: {
        nowrap: 'nowrap',
        wrap: 'wrap',
        'wrap-reverse': 'wrap-reverse',
      },
    },
  };

  const classes: string[] = [];
  
  for (const [prop, mapping] of Object.entries(flexMappings)) {
    if (props[prop] !== undefined) {
      const { property, valueMap } = mapping;
      classes.push(
        responsivePropToClasses(
          props[prop] as ResponsiveProp<string>,
          `${property}-`,
          (value) => valueMap[value as keyof typeof valueMap] || value
        )
      );
    }
  }
  
  // Handle gap separately
  if (props.gap !== undefined) {
    classes.push(responsivePropToClasses(props.gap, 'gap-'));
  }
  
  return classes.join(' ');
}

/**
 * Generate display classes
 * @param display - The display prop
 * @returns Tailwind display classes string
 */
export function getDisplayClasses(display: ResponsiveProp<string> | undefined): string {
  if (!display) return '';
  return responsivePropToClasses(display, '');
} 