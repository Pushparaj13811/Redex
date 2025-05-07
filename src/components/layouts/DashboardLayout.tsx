import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../navigation/Sidebar';

/**
 * Dashboard layout component
 * Provides a layout for dashboard pages with a sidebar and content area
 */
const DashboardLayout: React.FC = () => {
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
            
            {/* User profile button */}
            <div className="flex items-center">
              <div className="relative">
                <button
                  className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
                  aria-label="Account"
                  aria-haspopup="true"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold">
                    U
                  </div>
                </button>
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