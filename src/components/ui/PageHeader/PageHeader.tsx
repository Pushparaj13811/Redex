import React from 'react';
import { Link } from 'react-router-dom';

export interface PageHeaderProps {
  /** Page title */
  title: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Breadcrumb items */
  breadcrumbs?: {
    label: string;
    href?: string;
  }[];
  /** Additional class names */
  className?: string;
  /** Page meta tags for SEO */
  metaTitle?: string;
  metaDescription?: string;
  /** Optional action button */
  actionButton?: React.ReactNode;
}

/**
 * PageHeader component
 * 
 * Displays a consistent header for content pages with optional breadcrumbs
 */
const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  breadcrumbs = [],
  className = '',
  actionButton,
}) => {
  // Check if the first breadcrumb is already "Home"
  const hasHomeLink = breadcrumbs.length > 0 && breadcrumbs[0].label === 'Home';

  return (
    <div className={`mb-8 ${className}`}>
      {/* Breadcrumbs */}
      {breadcrumbs.length > 0 && (
        <nav className="flex items-center text-sm mb-4" aria-label="Breadcrumb">
          {!hasHomeLink && (
            <>
              <Link to="/" className="text-brand-muted hover:text-brand-primary">
                Home
              </Link>
              <span className="mx-2 text-brand-muted">›</span>
            </>
          )}
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className="mx-2 text-brand-muted">›</span>}
              {index === breadcrumbs.length - 1 || !crumb.href ? (
                <span className="text-brand-text">{crumb.label}</span>
              ) : (
                <Link
                  to={crumb.href}
                  className="text-brand-muted hover:text-brand-primary"
                >
                  {crumb.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </nav>
      )}

      {/* Header content */}
      <div className="flex flex-wrap justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-brand-text">{title}</h1>
          {subtitle && (
            <p className="mt-2 text-lg text-brand-muted">{subtitle}</p>
          )}
        </div>
        {actionButton && <div>{actionButton}</div>}
      </div>
    </div>
  );
};

export default PageHeader; 