import type { RouteItem } from '../types/routes';

/**
 * Main application routes
 */
export const appRoutes: RouteItem[] = [
  {
    path: '/',
    label: 'Home',
    icon: 'home'
  },
  {
    path: '/shop',
    label: 'Shop',
    icon: 'shopping-bag'
  },
  {
    path: '/cart',
    label: 'Cart',
    icon: 'shopping-cart'
  },
  {
    path: '/product/:id',
    label: 'Product Details',
    showInNav: false
  },
  {
    path: '/category/:id',
    label: 'Category',
    showInNav: false
  },
  {
    path: '/dashboard',
    label: 'Dashboard',
    icon: 'user',
    protected: true
  },
  {
    path: '/dashboard/profile',
    label: 'Profile',
    protected: true,
    showInNav: false
  },
  {
    path: '/dashboard/settings',
    label: 'Settings',
    protected: true,
    showInNav: false
  },
  {
    path: '*',
    label: 'Not Found',
    showInNav: false
  }
];

/**
 * Get routes to display in navigation
 */
export const getNavRoutes = (): RouteItem[] => {
  return appRoutes.filter(route => route.showInNav !== false);
};

export default appRoutes; 