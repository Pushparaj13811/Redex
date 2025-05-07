import type { ReactNode } from 'react';

/**
 * Route permission levels
 */
export enum RoutePermission {
  PUBLIC = 'public',
  PROTECTED = 'protected',
  ADMIN = 'admin',
}

/**
 * Route item interface for route configuration
 */
export interface RouteItem {
  /** Unique path for the route */
  path: string;
  /** Element to render for this route */
  element?: ReactNode;
  /** Permission level required for this route */
  permission?: RoutePermission;
  /** Error element to render if permission check fails */
  errorElement?: ReactNode;
  /** Child routes (for nested routing) */
  children?: RouteItem[];
  /** Whether this route should be included in navigation components */
  showInNav?: boolean;
  /** Display name for navigation components */
  label: string;
  /** Icon element for navigation components */
  icon?: string;
  /** Description for accessibility and tooltips */
  description?: string;
  /** Lazy loaded component function */
  lazy?: () => Promise<{ Component: React.ComponentType }>;
  /** Handles loading state for lazy loaded routes */
  loading?: ReactNode;
  /** Whether this route is protected */
  protected?: boolean;
  /** Whether this route is admin */
  admin?: boolean;
  /** Roles allowed to access this route (more granular than permission) */
  roles?: string[];
}

/**
 * For defining breadcrumb items 
 */
export interface BreadcrumbItem {
  /** Display label for the breadcrumb */
  label: string;
  /** Path to navigate to when clicked */
  path: string;
  /** Whether this is the active/current page */
  isActive?: boolean;
}

/**
 * Location state for redirects
 */
export interface LocationState {
  from: string;
  search?: string;
} 