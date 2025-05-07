import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider as ReactRouterProvider, Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

// Layouts
const MainLayout = lazy(() => import('../components/layouts/MainLayout'));

// Pages
const HomePage = lazy(() => import('../pages/HomePage'));
const ShopPage = lazy(() => import('../pages/ShopPage'));
const CartPage = lazy(() => import('../pages/CartPage'));
const ProductDetailPage = lazy(() => import('../pages/ProductDetailPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

// Default placeholders for pages not yet created
const PlaceholderPage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-2xl font-semibold text-brand-text mb-4">Page Coming Soon</h1>
    <p className="text-brand-text">This page is under construction.</p>
  </div>
);

// Use placeholder for pages that aren't created yet
const DashboardPage = lazy(() => Promise.resolve({ default: PlaceholderPage }));

// Loading Fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
  </div>
);

// Route Guards
const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return <LoadingFallback />;
  }
  
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

const AdminRoute = () => {
  const { isAuthenticated, isAdmin, isLoading } = useAuth();
  
  if (isLoading) {
    return <LoadingFallback />;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  
  return isAdmin ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

// Create router with routes
const createRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: (
        <Suspense fallback={<LoadingFallback />}>
          <MainLayout />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <HomePage />
            </Suspense>
          ),
        },
        {
          path: 'shop',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <ShopPage />
            </Suspense>
          ),
        },
        {
          path: 'cart',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <CartPage />
            </Suspense>
          ),
        },
        {
          path: 'product/:id',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <ProductDetailPage />
            </Suspense>
          ),
        },
        // Protected routes
        {
          element: <ProtectedRoute />,
          children: [
            {
              path: 'dashboard',
              element: (
                <Suspense fallback={<LoadingFallback />}>
                  <DashboardPage />
                </Suspense>
              ),
            },
          ],
        },
        // Admin routes
        {
          element: <AdminRoute />,
          children: [
            {
              path: 'admin',
              element: (
                <Suspense fallback={<LoadingFallback />}>
                  <PlaceholderPage />
                </Suspense>
              ),
            },
          ],
        },
        // 404 Not Found route
        {
          path: '*',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <NotFoundPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);
};

// Router Provider
const RouterProvider = () => {
  const router = createRouter();
  
  return <ReactRouterProvider router={router} />;
};

export default RouterProvider; 