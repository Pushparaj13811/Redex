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

// New Pages
const ContactPage = lazy(() => import('../pages/ContactPage'));
const PartnerPage = lazy(() => import('../pages/PartnerPage'));
const SellerPage = lazy(() => import('../pages/SellerPage'));
const WarehousePage = lazy(() => import('../pages/WarehousePage'));
const DeliveryPage = lazy(() => import('../pages/DeliveryPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const BlogPage = lazy(() => import('../pages/BlogPage'));
const LeadPage = lazy(() => import('../pages/LeadPage'));
const PrivacyPage = lazy(() => import('../pages/PrivacyPage'));
const TermsPage = lazy(() => import('../pages/TermsPage'));
const FAQsPage = lazy(() => import('../pages/FAQsPage'));
const SecurityPage = lazy(() => import('../pages/SecurityPage'));
const MobilePage = lazy(() => import('../pages/MobilePage'));
const ValuesPage = lazy(() => import('../pages/ValuesPage'));
const ResourcesPage = lazy(() => import('../pages/ResourcesPage'));
const CareerPage = lazy(() => import('../pages/CareerPage'));
const PressPage = lazy(() => import('../pages/PressPage'));
const CategoryPage = lazy(() => import('../pages/CategoryPage'));

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
        {
          path: 'contact',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <ContactPage />
            </Suspense>
          ),
        },
        {
          path: 'partner',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <PartnerPage />
            </Suspense>
          ),
        },
        {
          path: 'seller',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <SellerPage />
            </Suspense>
          ),
        },
        {
          path: 'warehouses',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <WarehousePage />
            </Suspense>
          ),
        },
        {
          path: 'delivery',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <DeliveryPage />
            </Suspense>
          ),
        },
        {
          path: 'about',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <AboutPage />
            </Suspense>
          ),
        },
        {
          path: 'blog',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <BlogPage />
            </Suspense>
          ),
        },
        {
          path: 'lead',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <LeadPage />
            </Suspense>
          ),
        },
        {
          path: 'privacy',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <PrivacyPage />
            </Suspense>
          ),
        },
        {
          path: 'terms',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <TermsPage />
            </Suspense>
          ),
        },
        {
          path: 'faqs',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <FAQsPage />
            </Suspense>
          ),
        },
        {
          path: 'security',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <SecurityPage />
            </Suspense>
          ),
        },
        {
          path: 'mobile',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <MobilePage />
            </Suspense>
          ),
        },
        {
          path: 'values',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <ValuesPage />
            </Suspense>
          ),
        },
        {
          path: 'resources',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <ResourcesPage />
            </Suspense>
          ),
        },
        {
          path: 'careers',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <CareerPage />
            </Suspense>
          ),
        },
        {
          path: 'press',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <PressPage />
            </Suspense>
          ),
        },
        {
          path: 'category',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <CategoryPage />
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