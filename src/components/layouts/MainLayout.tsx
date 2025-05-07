import { Outlet } from 'react-router-dom';
import Navbar from '../navigation/Navbar';
import Footer from '../navigation/Footer';

/**
 * Main application layout
 * 
 * Includes navigation, footer and main content area
 */
const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout; 