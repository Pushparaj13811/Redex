import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import { scrollToHash } from '../../utils/motion';

interface SmoothScrollLinkProps extends Omit<LinkProps, 'to'> {
  to: string;
  className?: string;
  activeClassName?: string;
}

/**
 * SmoothScrollLink handles both regular navigation and hash links
 * with smooth scrolling behavior
 */
const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({
  to,
  children,
  className = '',
  activeClassName = '',
  ...props
}) => {
  const location = useLocation();
  const isActive = location.pathname === to || 
                  (to.includes('#') && location.hash === to.substring(to.indexOf('#')));
  
  const combinedClassName = `${className} ${isActive ? activeClassName : ''}`.trim();

  const isHashLink = to.includes('#');
  
  // Handle hash link in current page
  const handleHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const currentPath = location.pathname;
    const targetPath = to.split('#')[0];
    const hash = to.substring(to.indexOf('#'));
    
    // If we're already on the right page, just scroll to the element
    if (currentPath === targetPath || targetPath === '') {
      e.preventDefault();
      scrollToHash(hash);
    }
  };

  return (
    <Link
      to={to}
      className={combinedClassName}
      onClick={isHashLink ? handleHashLinkClick : undefined}
      {...props}
    >
      {children}
    </Link>
  );
};

export default SmoothScrollLink; 