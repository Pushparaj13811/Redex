import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider as ReactRouterProvider, Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { PageTransitionWrapper, PageSkeleton } from '../components/ui';

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
const ExampleAnimatedPage = lazy(() => import('../pages/ExampleAnimatedPage'));

// Default placeholders for pages not yet created
const PlaceholderPage = () => (
  <PageTransitionWrapper>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-brand-text mb-4">Page Coming Soon</h1>
      <p className="text-brand-text">This page is under construction.</p>
    </div>
  </PageTransitionWrapper>
);

// Use placeholder for pages that aren't created yet
const DashboardPage = lazy(() => Promise.resolve({ default: PlaceholderPage }));

// Component-specific loading skeletons
const MainLayoutSkeleton = () => (
  <div className="flex flex-col min-h-screen">
    {/* Navbar skeleton */}
    <div className="h-16 bg-white dark:bg-gray-800 shadow-sm fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="w-32 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        <div className="flex space-x-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-20 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          ))}
        </div>
      </div>
    </div>
    
    {/* Main content area */}
    <main className="flex-grow pt-20">
      <Outlet />
    </main>
    
    {/* Footer skeleton */}
    <div className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-3">
              <div className="w-24 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              {[1, 2, 3].map((j) => (
                <div key={j} className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Route Guards
const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <PageSkeleton />;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

const AdminRoute = () => {
  const { isAuthenticated, isAdmin, isLoading } = useAuth();

  if (isLoading) {
    return <PageSkeleton />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return isAdmin ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

// Wrap page components with PageTransitionWrapper
const withPageTransition = (Component: React.ComponentType) => {
  return () => (
    <PageTransitionWrapper>
      <Component />
    </PageTransitionWrapper>
  );
};

// Create router with routes
const createRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: (
        <Suspense fallback={<MainLayoutSkeleton />}>
          <MainLayout />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<PageSkeleton type="default" />}>
              {withPageTransition(HomePage)()}
            </Suspense>
          ),
        },
        {
          path: 'shop',
          element: (
            <Suspense fallback={<PageSkeleton type="product" />}>
              {withPageTransition(ShopPage)()}
            </Suspense>
          ),
        },
        {
          path: 'cart',
          element: (
            <Suspense fallback={<PageSkeleton type="list" />}>
              {withPageTransition(CartPage)()}
            </Suspense>
          ),
        },
        {
          path: 'product/:id',
          element: (
            <Suspense fallback={<PageSkeleton type="detail" />}>
              {withPageTransition(ProductDetailPage)()}
            </Suspense>
          ),
        },
        {
          path: 'contact',
          element: (
            <Suspense fallback={<PageSkeleton type="default" />}>
              {withPageTransition(ContactPage)()}
            </Suspense>
          ),
        },
        {
          path: 'partner',
          element: (
            <Suspense fallback={<PageSkeleton type="default" />}>
              {withPageTransition(PartnerPage)()}
            </Suspense>
          ),
        },
        {
          path: 'seller',
          element: (
            <Suspense fallback={<PageSkeleton type="default" />}>
              {withPageTransition(SellerPage)()}
            </Suspense>
          ),
        },
        {
          path: 'warehouses',
          element: (
            <Suspense fallback={<PageSkeleton type="default" />}>
              {withPageTransition(WarehousePage)()}
            </Suspense>
          ),
        },
        {
          path: 'delivery',
          element: (
            <Suspense fallback={<PageSkeleton type="default" />}>
              {withPageTransition(DeliveryPage)()}
            </Suspense>
          ),
        },
        {
          path: 'about',
          element: (
            <Suspense fallback={<PageSkeleton type="default" />}>
              {withPageTransition(AboutPage)()}
            </Suspense>
          ),
        },
        {
          path: 'blog',
          element: (
            <Suspense fallback={<PageSkeleton type="list" />}>
              {withPageTransition(BlogPage)()}
            </Suspense>
          ),
        },
        {
          path: 'lead',
          element: (
            <Suspense fallback={<PageSkeleton type="default" />}>
              {withPageTransition(LeadPage)()}
            </Suspense>
          ),
        },
        {
          path: 'privacy',
          element: (
            <Suspense fallback={<PageSkeleton type="default" />}>
              {withPageTransition(PrivacyPage)()}
            </Suspense>
          ),
        },
        {
          path: 'terms',
          element: (
            <Suspense fallback={<PageSkeleton type="default" />}>
              {withPageTransition(TermsPage)()}
            </Suspense>
          ),
        },
        {
          path: 'faqs',
          element: (
            <Suspense fallback={<PageSkeleton type="default" />}>
              {withPageTransition(FAQsPage)()}
            </Suspense>
          ),
        },
        {
          path: 'security',
          element: (
            <Suspense fallback={<PageSkeleton type="default" />}>
              {withPageTransition(SecurityPage)()}
            </Suspense>
          ),
        },
        {
          path: 'mobile',
          element: (
            <Suspense fallback={<PageSkeleton type="default" />}>
              {withPageTransition(MobilePage)()}
            </Suspense>
          ),
        },
        {
          path: 'values',
          element: (
            <Suspense fallback={<PageSkeleton type="default" />}>
              {withPageTransition(ValuesPage)()}
            </Suspense>
          ),
        },
        {
          path: 'resources',
          element: (
            <Suspense fallback={<PageSkeleton type="list" />}>
              {withPageTransition(ResourcesPage)()}
            </Suspense>
          ),
        },
        {
          path: 'careers',
          element: (
            <Suspense fallback={<PageSkeleton type="default" />}>
              {withPageTransition(CareerPage)()}
            </Suspense>
          ),
        },
        {
          path: 'press',
          element: (
            <Suspense fallback={<PageSkeleton type="list" />}>
              {withPageTransition(PressPage)()}
            </Suspense>
          ),
        },
        {
          path: 'category/:id',
          element: (
            <Suspense fallback={<PageSkeleton type="list" />}>
              {withPageTransition(CategoryPage)()}
            </Suspense>
          ),
        },
        {
          path: 'examples',
          element: (
            <Suspense fallback={<PageSkeleton type="default" />}>
              {withPageTransition(ExampleAnimatedPage)()}
            </Suspense>
          ),
        },
        {
          path: '*',
          element: (
            <Suspense fallback={<PageSkeleton type="default" />}>
              {withPageTransition(NotFoundPage)()}
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
                <Suspense fallback={<PageSkeleton type="default" />}>
                  {withPageTransition(DashboardPage)()}
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
                <Suspense fallback={<PageSkeleton type="default" />}>
                  {withPageTransition(PlaceholderPage)()}
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
  ]);
};

// RouterProvider component
const RouterProvider = () => {
  const router = createRouter();
  return <ReactRouterProvider router={router} />;
};

export default RouterProvider;