import React, { lazy, Suspense } from 'react';
import type { RouteItem } from '../types/routes';
import { RoutePermission } from '../types/routes';

// Loading fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
  </div>
);

// Layouts
const MainLayout = lazy(() => import('../components/layouts/MainLayout'));
const DashboardLayout = lazy(() => import('../components/layouts/DashboardLayout'));

// We'll create placeholder components for the pages we haven't built yet
const PlaceholderPage = () => (
  <div className="text-center py-20">
    <h1 className="text-3xl font-bold text-brand-text mb-4">Page Coming Soon</h1>
    <p className="text-brand-muted">This page is under construction.</p>
  </div>
);

// For now, use the placeholder for pages we haven't created yet
const HomePage = lazy(() => Promise.resolve({ default: PlaceholderPage }));
const AboutPage = lazy(() => Promise.resolve({ default: PlaceholderPage }));
const LoginPage = lazy(() => Promise.resolve({ default: PlaceholderPage }));
const RegisterPage = lazy(() => Promise.resolve({ default: PlaceholderPage }));
const DashboardPage = lazy(() => Promise.resolve({ default: PlaceholderPage }));
const ProfilePage = lazy(() => Promise.resolve({ default: PlaceholderPage }));
const SettingsPage = lazy(() => Promise.resolve({ default: PlaceholderPage }));
const AdminDashboardPage = lazy(() => Promise.resolve({ default: PlaceholderPage }));
const NotFoundPage = lazy(() => Promise.resolve({ default: PlaceholderPage }));

/**
 * Route configuration
 */
const routes: RouteItem[] = [
  // Public routes
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      { 
        path: '/', 
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <HomePage />
          </Suspense>
        ), 
        label: 'Home', 
        showInNav: true 
      },
      { 
        path: '/about', 
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <AboutPage />
          </Suspense>
        ), 
        label: 'About', 
        showInNav: true 
      },
      { 
        path: '/login', 
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <LoginPage />
          </Suspense>
        ), 
        label: 'Login', 
        showInNav: true 
      },
      { 
        path: '/register', 
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <RegisterPage />
          </Suspense>
        ), 
        label: 'Register', 
        showInNav: true 
      },
      { 
        path: '*', 
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <NotFoundPage />
          </Suspense>
        ), 
        label: 'Not Found', 
        showInNav: false 
      },
    ],
    permission: RoutePermission.PUBLIC,
    showInNav: false,
  },
  
  // Protected routes
  {
    path: '/dashboard',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <DashboardLayout />
      </Suspense>
    ),
    children: [
      { 
        path: '/dashboard', 
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <DashboardPage />
          </Suspense>
        ), 
        label: 'Dashboard', 
        showInNav: true 
      },
      { 
        path: '/dashboard/profile', 
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <ProfilePage />
          </Suspense>
        ), 
        label: 'Profile', 
        showInNav: true 
      },
      { 
        path: '/dashboard/settings', 
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <SettingsPage />
          </Suspense>
        ), 
        label: 'Settings', 
        showInNav: true 
      },
    ],
    permission: RoutePermission.PROTECTED,
    showInNav: false,
  },
  
  // Admin routes
  {
    path: '/admin',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <DashboardLayout />
      </Suspense>
    ),
    children: [
      { 
        path: '/admin/dashboard', 
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <AdminDashboardPage />
          </Suspense>
        ), 
        label: 'Admin Dashboard', 
        showInNav: true 
      },
    ],
    permission: RoutePermission.ADMIN,
    showInNav: false,
  },
];

/**
 * Get all routes
 * @returns All routes
 */
export const getAllRoutes = (): RouteItem[] => {
  return routes;
};

/**
 * Get navigation routes
 * @returns Routes that should be shown in navigation
 */
export const getNavRoutes = (): RouteItem[] => {
  const navRoutes: RouteItem[] = [];

  // Get all routes including their children
  const processRoutes = (routeItems: RouteItem[]) => {
    routeItems.forEach(route => {
      if (route.showInNav) {
        navRoutes.push(route);
      }
      
      if (route.children && route.children.length > 0) {
        processRoutes(route.children);
      }
    });
  };

  processRoutes(routes);
  
  return navRoutes;
};

export default routes; 