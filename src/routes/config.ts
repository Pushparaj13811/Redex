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
    path: '/about',
    label: 'About Us',
    icon: 'info'
  },
  {
    path: '/blog',
    label: 'Blog',
    icon: 'book-open'
  },
  {
    path: '/lead',
    label: 'Lead',
    icon: 'trending-up'
  },
  {
    path: '/contact',
    label: 'Contact Us',
    icon: 'message-circle'
  },
  {
    path: '/partner',
    label: 'Partner With Us',
    icon: 'users'
  },
  {
    path: '/seller',
    label: 'Become a Seller',
    icon: 'shopping-bag'
  },
  {
    path: '/warehouses',
    label: 'Warehouses',
    icon: 'home'
  },
  {
    path: '/delivery',
    label: 'Delivery',
    icon: 'truck'
  },
  {
    path: '/careers',
    label: 'Careers',
    icon: 'briefcase'
  },
  {
    path: '/press',
    label: 'Press',
    icon: 'globe'
  },
  {
    path: '/values',
    label: 'Our Values',
    icon: 'heart',
    showInNav: false
  },
  {
    path: '/resources',
    label: 'Resources',
    icon: 'book'
  },
  {
    path: '/privacy',
    label: 'Privacy Policy',
    icon: 'shield',
    showInNav: false
  },
  {
    path: '/terms',
    label: 'Terms & Conditions',
    icon: 'file-text',
    showInNav: false
  },
  {
    path: '/faqs',
    label: 'FAQs',
    icon: 'help-circle',
    showInNav: false
  },
  {
    path: '/security',
    label: 'Security',
    icon: 'lock',
    showInNav: false
  },
  {
    path: '/mobile',
    label: 'Mobile App',
    icon: 'smartphone',
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