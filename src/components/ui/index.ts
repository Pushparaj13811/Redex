// Basic UI components
export { default as Button } from './Button';
export type { ButtonProps } from './Button';

export { default as Card } from './Card';
export type { CardProps } from './Card';

export { default as Input } from './Input';
export type { TextInputProps } from '../../types/input';

// Form components
export {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  useFormControl,
} from './Form';

// Layout components
export { default as Flex } from './Flex';
export type { FlexProps } from './Flex';

export { default as PageHeader } from './PageHeader';
export type { PageHeaderProps } from './PageHeader';

// Product UI components
export { default as ProductCard } from './ProductCard';
export { default as CartItem } from './CartItem';
export { default as CategoryCard } from './CategoryCard';

// Animation and transition components
export { default as PageTransition } from './PageTransition';
export { default as PageTransitionWrapper } from './PageTransitionWrapper';
export { default as SectionReveal } from './SectionReveal';
export { default as StaggeredItems } from './StaggeredItems';
export { default as Item } from './StaggeredItems/Item';
export { default as SmoothScrollLink } from './SmoothScrollLink';

// Skeleton components
export { 
  Skeleton,
  CardSkeleton,
  TableSkeleton,
  TextSkeleton,
  ProductCardSkeleton,
  PageHeaderSkeleton,
  GridSkeleton
} from './Skeleton';
export { default as PageSkeleton } from './PageSkeleton';

// New component exports
export { default as Avatar } from './Avatar';
export type { AvatarProps } from './Avatar';

export { default as AvatarGroup } from './AvatarGroup';
export type { AvatarGroupProps } from './AvatarGroup';

export { default as Image } from './Image';
export type { ImageProps } from './Image'; 