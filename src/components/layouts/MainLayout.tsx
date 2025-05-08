import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navigation/Navbar';
import Footer from '../navigation/Footer';
import SEOHead from '../seo/SEOHead';

/**
 * Main application layout
 * 
 * Includes navigation, footer, base SEO metadata, and main content area with accessibility features
 */
const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead />
      <Navbar />
      <main id="main-content" className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; 