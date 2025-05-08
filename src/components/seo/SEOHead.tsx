import React from 'react';
import { Helmet } from 'react-helmet-async';
import companyInformation from '../../constants/companyInfo';

// Types for SEO props
export interface SEOProps {
  /** Page title */
  title?: string;
  /** Page description - keep between 150-160 characters for optimal SEO */
  description?: string;
  /** Page-specific keywords */
  keywords?: string;
  /** Canonical URL for this page */
  canonical?: string;
  /** Image URL for social sharing */
  image?: string;
  /** Open Graph type - defaults to website */
  type?: 'website' | 'article' | 'product' | 'profile';
  /** Optional schema.org structured data as JSON-LD */
  schema?: Record<string, unknown>[];
  /** Is this page indexable? */
  noIndex?: boolean;
}

/**
 * SEOHead component for managing document head and SEO
 * Handles metadata, social tags, and structured data
 */
const SEOHead: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  image,
  type = 'website',
  schema = [],
  noIndex = false
}) => {
  // Default values
  const pageTitle = title ? `${title} - ${companyInformation.name}` : companyInformation.name;
  const pageDescription = description || `${companyInformation.name} - Nepal's premier quick commerce platform delivering groceries and essentials in 10 minutes.`;
  const pageKeywords = keywords || 'quick commerce, grocery delivery, fast delivery nepal, online grocery, redex';
  const pageImage = image || companyInformation.logo;
  const pageUrl = canonical || (typeof window !== 'undefined' ? window.location.href : 'https://redex.com.np');
  
  // Extract address components for schema markup
  const addressParts = companyInformation.address.split(', ');
  const streetAddress = addressParts[0] || '';
  const city = addressParts[1] || 'Kathmandu';
  const region = addressParts[2] || 'Bagmati';
  const postalCode = addressParts[3] || '';
  
  // Default structured data
  const defaultSchema = [
    // Organization schema
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: companyInformation.name,
      url: 'https://redex.com.np',
      logo: companyInformation.logo,
      sameAs: [
        companyInformation.socialMedia.facebook,
        companyInformation.socialMedia.instagram,
        companyInformation.socialMedia.twitter,
        companyInformation.socialMedia.linkedin
      ].filter(Boolean),
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: companyInformation.phone,
        contactType: 'customer service',
        email: companyInformation.email,
        availableLanguage: ['English', 'Nepali']
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress,
        addressLocality: city,
        addressRegion: region,
        postalCode,
        addressCountry: 'Nepal'
      }
    },
    // Local business schema
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: companyInformation.name,
      image: companyInformation.logo,
      '@id': 'https://redex.com.np',
      url: 'https://redex.com.np',
      telephone: companyInformation.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress,
        addressLocality: city,
        addressRegion: region,
        postalCode,
        addressCountry: 'Nepal'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 27.717245,
        longitude: 85.323959
      },
      priceRange: '$$',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
        ],
        opens: '07:00',
        closes: '22:00'
      }
    }
  ];

  // Combine default and custom schema
  const combinedSchema = [...defaultSchema, ...schema];
  
  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {keywords && <meta name="keywords" content={pageKeywords} />}
      <link rel="canonical" href={pageUrl} />
      
      {/* Indexing Control */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={companyInformation.name} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      
      {/* Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#b71c1c" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(combinedSchema)}
      </script>
    </Helmet>
  );
};

export default SEOHead; 