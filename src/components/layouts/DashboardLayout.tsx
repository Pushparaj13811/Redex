import React, { useState, useRef, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../navigation/Sidebar';
import useAuth from '../../hooks/useAuth';

/**
 * Dashboard layout component
 * Provides a layout for dashboard pages with a sidebar and content area
 */
const DashboardLayout: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isDropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);
  
  // Handle logout
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  return (
    <div className="flex h-screen bg-brand-background">
      {/* Include the Sidebar component */}
      <Sidebar />
      
      {/* Main content */}
      <div className="flex flex-col flex-1 w-full md:ml-0">
        {/* Header */}
        <header className="z-10 py-4 bg-brand-surface shadow-sm h-16">
          <div className="flex items-center justify-between h-full px-6">
            <h1 className="text-2xl font-semibold text-brand-text">Dashboard</h1>
            
            {/* User profile dropdown */}
            <div className="flex items-center">
              <div className="relative" ref={dropdownRef}>
                <button
                  className="flex items-center focus:outline-none"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold">
                    {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-4 w-4 ml-1 text-brand-text transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <div className="px-4 py-3 border-b border-brand-border">
                      <p className="text-sm font-medium text-brand-text">{user?.name || 'User'}</p>
                      <p className="text-xs text-brand-muted truncate">{user?.email || ''}</p>
                    </div>
                    <a 
                      href="/dashboard/profile" 
                      className="block px-4 py-2 text-sm text-brand-text hover:bg-brand-surface"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsDropdownOpen(false);
                        navigate('/dashboard/profile');
                      }}
                    >
                      Profile
                    </a>
                    <a 
                      href="/dashboard/settings" 
                      className="block px-4 py-2 text-sm text-brand-text hover:bg-brand-surface"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsDropdownOpen(false);
                        navigate('/dashboard/settings');
                      }}
                    >
                      Settings
                    </a>
                    <div className="border-t border-brand-border mt-1"></div>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-brand-error hover:bg-brand-surface"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
        
        {/* Main content */}
        <main className="h-full overflow-y-auto p-6">
          <div className="container mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout; 