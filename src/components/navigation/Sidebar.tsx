import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { getNavRoutes } from '../../routes/config';
import type { RouteItem } from '../../types/routes';
import companyInformation from '../../constants/companyInfo';

/**
 * Dashboard sidebar component
 * Shows navigation links for protected dashboard routes
 */
const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [navRoutes, setNavRoutes] = useState<RouteItem[]>([]);
  const { user, logout } = useAuth();
  const location = useLocation();

  // Get dashboard routes
  useEffect(() => {
    // Filter routes to show only dashboard routes
    const allRoutes = getNavRoutes();
    const dashboardRoutes = allRoutes.filter(route => 
      route.path.startsWith('/dashboard') && route.showInNav
    );
    
    setNavRoutes(dashboardRoutes);
  }, []);

  // Close sidebar on mobile when navigating
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close sidebar on navigation on mobile devices
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  }, [location.pathname]);

  // Handle logout
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Icons for routes
  const getIconForRoute = (path: string) => {
    const icons: Record<string, React.ReactNode> = {
      '/dashboard': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" />
        </svg>
      ),
      '/dashboard/profile': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      '/dashboard/settings': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    };
    
    return icons[path] || (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    );
  };

  return (
    <>
      {/* Mobile backdrop */}
      <div 
        className={`fixed inset-0 z-20 bg-gray-900 bg-opacity-50 transition-opacity md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen bg-brand-surface shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 md:w-64 md:shrink-0`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="flex items-center justify-between p-4 border-b border-brand-border">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">{companyInformation.name.charAt(0)}</span>
              </div>
              <span className="ml-2 text-xl font-semibold text-brand-primary">{companyInformation.name}</span>
            </div>
            <button
              className="md:hidden p-2 rounded-md text-brand-muted hover:text-brand-text hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
              aria-label="Close sidebar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* User info */}
          <div className="p-4 border-b border-brand-border">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center">
                {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-brand-text">{user?.name || 'User'}</p>
                <p className="text-xs font-medium text-brand-muted">{user?.email || ''}</p>
              </div>
            </div>
          </div>
          
          {/* Navigation links */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            {/* Dashboard Link */}
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) => 
                `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-primary text-white'
                    : 'text-brand-text hover:bg-brand-surfaceHover'
                }`
              }
            >
              <span className="mr-3">{getIconForRoute('/dashboard')}</span>
              Dashboard
            </NavLink>
            
            {/* Profile Link */}
            <NavLink
              to="/dashboard/profile"
              className={({ isActive }) => 
                `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-primary text-white'
                    : 'text-brand-text hover:bg-brand-surfaceHover'
                }`
              }
            >
              <span className="mr-3">{getIconForRoute('/dashboard/profile')}</span>
              Profile
            </NavLink>
            
            {/* Settings Link */}
            <NavLink
              to="/dashboard/settings"
              className={({ isActive }) => 
                `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-primary text-white'
                    : 'text-brand-text hover:bg-brand-surfaceHover'
                }`
              }
            >
              <span className="mr-3">{getIconForRoute('/dashboard/settings')}</span>
              Settings
            </NavLink>
            
            {/* Dynamic Routes */}
            {navRoutes.filter(route => 
              route.path !== '/dashboard' && 
              route.path !== '/dashboard/profile' && 
              route.path !== '/dashboard/settings'
            ).map((route) => (
              <NavLink
                key={route.path}
                to={route.path}
                className={({ isActive }) => 
                  `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-primary text-white'
                      : 'text-brand-text hover:bg-brand-surfaceHover'
                  }`
                }
              >
                <span className="mr-3">{getIconForRoute(route.path)}</span>
                {route.label}
              </NavLink>
            ))}
            
            {/* Additional links for admin users */}
            {user?.roles?.includes('admin') && (
              <div className="pt-4 mt-4 border-t border-brand-border">
                <h3 className="px-3 text-xs font-semibold text-brand-muted uppercase tracking-wider">
                  Admin
                </h3>
                <div className="mt-2 space-y-1">
                  <NavLink
                    to="/admin/dashboard"
                    className={({ isActive }) => 
                      `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-brand-primary text-white'
                          : 'text-brand-text hover:bg-brand-surfaceHover'
                      }`
                    }
                  >
                    <span className="mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </span>
                    Admin Dashboard
                  </NavLink>
                </div>
              </div>
            )}
          </nav>
          
          {/* Footer */}
          <div className="p-4 border-t border-brand-border">
            <div className="flex flex-col space-y-2">
              <button
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-brand-text hover:bg-brand-surfaceHover w-full"
                onClick={() => {
                  // Toggle the sidebar on mobile
                  if (window.innerWidth < 768) {
                    setIsOpen(!isOpen);
                  }
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
                {isOpen ? 'Collapse' : 'Expand'}
              </button>
              
              {/* Logout Button */}
              <button
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-brand-error hover:bg-brand-error/5 w-full"
                onClick={handleLogout}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </div>
          </div>
        </div>
      </aside>
      
      {/* Toggle button for mobile (outside the sidebar) */}
      <div className="fixed bottom-4 right-4 md:hidden z-50">
        <button
          className="bg-brand-primary text-white p-3 rounded-full shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Sidebar; 