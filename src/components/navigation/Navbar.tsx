import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useReduxHooks';
import { selectTotalItems } from '../../store/cartSlice';
import Button from '../ui/Button/Button';
import { getNavRoutes } from '../../routes/config';
import companyInformation from '../../constants/companyInfo';
import LoginModal from '../auth/LoginModal';
import useAuth from '../../hooks/useAuth';

interface Route {
  path: string;
  label: string;
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const locationRef = useRef<HTMLDivElement>(null);
  const locationMenuRef = useRef<HTMLDivElement>(null);
  const totalItems = useAppSelector(selectTotalItems);
  const navRoutes = getNavRoutes();
  const { isAuthenticated, user } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close location menu when clicked outside
      if (
        isLocationOpen &&
        locationRef.current &&
        !locationRef.current.contains(event.target as Node) &&
        locationMenuRef.current &&
        !locationMenuRef.current.contains(event.target as Node)
      ) {
        setIsLocationOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLocationOpen]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle location selector
  const toggleLocation = () => {
    setIsLocationOpen(!isLocationOpen);
  };

  // Open login modal
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  // Close login modal
  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top gradient bar */}
      <div className="h-1 w-full bg-brand-primary"></div>
      
      <nav
        className={`
          w-full bg-brand-primary transition-all duration-300
          ${isScrolled ? 'py-2' : 'py-3'}
        `}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-brand-textLight flex items-center justify-center">
                  <span className="text-brand-primary font-bold text-xl">{companyInformation.name.charAt(0)}</span>
                </div>
                <span className="ml-2 text-brand-textLight font-semibold text-lg hidden sm:block">
                  {companyInformation.name}
                </span>
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 mx-6 max-w-2xl">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-brand-muted"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="block w-full pl-12 pr-4 py-3 rounded-full bg-brand-textLight focus:outline-none focus:ring-2 focus:ring-brand-primaryLight shadow-sm text-sm text-brand-text"
                />
              </div>
            </div>

            {/* Location Selector */}
            <div className="hidden md:block relative" ref={locationRef}>
              <button
                onClick={toggleLocation}
                className="flex items-center py-2 px-3 rounded-lg hover:bg-opacity-20 hover:bg-brand-textLight transition-colors text-brand-textLight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1 text-brand-textLight"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="font-medium">Select Location</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ml-1 transition-transform duration-200 ${isLocationOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isLocationOpen && (
                <div
                  ref={locationMenuRef}
                  className="absolute right-0 mt-2 w-64 bg-brand-surface rounded-lg shadow-lg overflow-hidden z-10"
                >
                  <div className="p-3">
                    <h3 className="text-brand-text font-semibold mb-2">Select your location</h3>
                    <input
                      type="text"
                      placeholder="Search location..."
                      className="w-full px-3 py-2 mb-2 border border-brand-border rounded-lg text-sm"
                    />
                  </div>
                  <div className="py-2 max-h-64 overflow-y-auto">
                    <button className="text-brand-text block w-full text-left px-4 py-2 hover:bg-brand-surfaceHover transition-colors">
                      New York
                    </button>
                    <button className="text-brand-text block w-full text-left px-4 py-2 hover:bg-brand-surfaceHover transition-colors">
                      Los Angeles
                    </button>
                    <button className="text-brand-text block w-full text-left px-4 py-2 hover:bg-brand-surfaceHover transition-colors">
                      Chicago
                    </button>
                    <button className="text-brand-text block w-full text-left px-4 py-2 hover:bg-brand-surfaceHover transition-colors">
                      Houston
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-3">
              {isAuthenticated ? (
                <Link to="/dashboard" className="hidden md:flex items-center text-brand-textLight hover:bg-opacity-20 hover:bg-brand-textLight rounded-lg px-3 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="font-medium">{user?.name?.split(' ')[0] || 'Account'}</span>
                </Link>
              ) : (
                <Button
                  variant="solid"
                  size="sm"
                  className="hidden md:flex items-center bg-brand-surface text-brand-text hover:bg-opacity-90 font-medium px-4"
                  onClick={openLoginModal}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Login
                </Button>
              )}

              <Link to="/cart" className="relative flex items-center justify-center h-9 w-9 bg-brand-surface text-brand-text rounded-full hover:bg-opacity-90 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-warning text-brand-text font-bold rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {totalItems}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="md:hidden flex items-center justify-center h-9 w-9 bg-brand-surface text-brand-text rounded-full hover:bg-opacity-90 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile search bar */}
          <div className="mt-3 md:hidden">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-brand-muted"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search for products..."
                className="block w-full pl-10 pr-3 py-2 rounded-full bg-brand-textLight focus:outline-none focus:ring-1 focus:ring-brand-primaryLight text-sm text-brand-text"
              />
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 bg-brand-surface rounded-lg shadow-lg overflow-hidden">
              <div className="flex flex-col">
                <button
                  className="flex items-center text-brand-text font-medium py-3 px-4 border-b border-brand-border"
                  onClick={toggleLocation}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Select Location</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                <Link to="/about" className="flex items-center text-brand-text py-3 px-4 border-b border-brand-border hover:bg-brand-surfaceHover transition-colors">
                  <span>About Us</span>
                </Link>

                <Link to="/contact" className="flex items-center text-brand-text py-3 px-4 border-b border-brand-border hover:bg-brand-surfaceHover transition-colors">
                  <span>Contact</span>
                </Link>

                {navRoutes.map((route: Route) => (
                  <Link
                    key={route.path}
                    to={route.path}
                    className="flex items-center text-brand-text py-3 px-4 border-b border-brand-border hover:bg-brand-surfaceHover transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {route.label}
                  </Link>
                ))}

                <div className="px-4 py-3">
                  {isAuthenticated ? (
                    <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="solid" colorScheme="primary" size="sm" isFullWidth>
                        My Account
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      variant="solid"
                      colorScheme="primary"
                      size="sm"
                      isFullWidth
                      onClick={() => {
                        setIsMenuOpen(false);
                        openLoginModal();
                      }}
                    >
                      Login
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </header>
  );
};

export default Navbar; 