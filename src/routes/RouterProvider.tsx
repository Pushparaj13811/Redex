import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider as ReactRouterProvider, useLocation, useNavigate, Outlet } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import routes from './config';
import { RoutePermission } from '../types/routes';
import type { RouteItem, LocationState } from '../types/routes';
import useAuth from '../hooks/useAuth';

/**
 * Protected Route Component
 * Redirects to login if user is not authenticated
 */
const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      // Store the location they were trying to access so we can redirect after login
      const state: LocationState = { from: location.pathname };
      if (location.search) {
        state.search = location.search;
      }
      
      navigate('/auth/login', { 
        replace: true,
        state,
      });
    }
  }, [isAuthenticated, isLoading, location, navigate]);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
      </div>
    );
  }

  // If authenticated, render the outlet (child routes)
  return isAuthenticated ? <Outlet /> : null;
};

/**
 * Admin Route Component
 * Redirects to dashboard if user is not an admin
 */
const AdminRoute = () => {
  const { isAuthenticated, isAdmin, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || !isAdmin)) {
      navigate('/dashboard', { replace: true });
    }
  }, [isAuthenticated, isAdmin, isLoading, navigate]);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
      </div>
    );
  }

  // If authenticated and admin, render the outlet (child routes)
  return isAuthenticated && isAdmin ? <Outlet /> : null;
};

/**
 * Convert our RouteItem array to react-router's RouteObject array
 * This handles permissions and wraps protected routes
 */
const convertToReactRouterRoutes = (routeItems: RouteItem[]): RouteObject[] => {
  return routeItems.map(route => {
    const { 
      path, 
      element, 
      children, 
      errorElement, 
      permission = RoutePermission.PUBLIC,
    } = route;

    // Create a new route object
    const routeObject: RouteObject = {
      path,
      errorElement,
    };

    // Apply permission-based wrappers to the route
    if (permission === RoutePermission.PROTECTED) {
      // For protected routes, wrap the element with ProtectedRoute
      routeObject.element = <ProtectedRoute />;
      
      // If this route has children, make the original element a child of ProtectedRoute
      if (children && element) {
        const wrappedChildren = [
          {
            index: true,
            element,
          },
          ...convertToReactRouterRoutes(children),
        ];
        
        routeObject.children = wrappedChildren;
      } else if (children) {
        routeObject.children = convertToReactRouterRoutes(children);
      } else if (element) {
        routeObject.children = [{ index: true, element }];
      }
    } else if (permission === RoutePermission.ADMIN) {
      // For admin routes, wrap the element with AdminRoute
      routeObject.element = <AdminRoute />;
      
      // If this route has children, make the original element a child of AdminRoute
      if (children && element) {
        const wrappedChildren = [
          {
            index: true,
            element,
          },
          ...convertToReactRouterRoutes(children),
        ];
        
        routeObject.children = wrappedChildren;
      } else if (children) {
        routeObject.children = convertToReactRouterRoutes(children);
      } else if (element) {
        routeObject.children = [{ index: true, element }];
      }
    } else {
      // For public routes, use the element directly
      routeObject.element = element;
      
      // Convert child routes recursively
      if (children) {
        routeObject.children = convertToReactRouterRoutes(children);
      }
    }

    return routeObject;
  });
};

/**
 * Main RouterProvider component
 * Sets up the router with our route configuration
 */
const RouterProvider = () => {
  const [router, setRouter] = useState<ReturnType<typeof createBrowserRouter> | null>(null);

  useEffect(() => {
    // Convert our route configuration to react-router's format
    const routerRoutes = convertToReactRouterRoutes(routes);
    
    // Create the router with our routes
    const browserRouter = createBrowserRouter(routerRoutes);
    
    setRouter(browserRouter);
  }, []);

  // Show loading state while the router is being created
  if (!router) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
      </div>
    );
  }

  return <ReactRouterProvider router={router} />;
};

export default RouterProvider; 