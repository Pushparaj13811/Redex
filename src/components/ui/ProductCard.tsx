import React from 'react';
import { Link } from 'react-router-dom';

export interface ProductProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description?: string;
  inStock: boolean;
  deliveryTime: string;
  rating?: number;
  discountPercentage?: number;
  quantity?: string; // e.g. "500 ml", "200 g", etc.
}

/**
 * ProductCard component
 * 
 * Displays a product with image, price, and basic information in a card format.
 * Includes accessibility features for screen readers and keyboard navigation.
 */
const ProductCard: React.FC<{ product: ProductProps }> = ({ product }) => {
  const discount = product.originalPrice ? Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  ) : product.discountPercentage;

  // Format price with proper currency formatting
  const formattedPrice = new Intl.NumberFormat('en-NP', {
    style: 'currency',
    currency: 'NPR',
    maximumFractionDigits: 0,
  }).format(product.price);

  // Format original price if available
  const formattedOriginalPrice = product.originalPrice
    ? new Intl.NumberFormat('en-NP', {
        style: 'currency',
        currency: 'NPR',
        maximumFractionDigits: 0,
      }).format(product.originalPrice)
    : null;

  // Generate stars for rating display
  const renderRatingStars = () => {
    if (!product.rating) return null;
    
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 >= 0.5;
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg 
          key={`star-${i}`} 
          className="w-4 h-4 text-yellow-500" 
          fill="currentColor" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    // Half star
    if (hasHalfStar) {
      stars.push(
        <svg 
          key="half-star" 
          className="w-4 h-4 text-yellow-500" 
          fill="currentColor" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="half-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
          <path fill="url(#half-gradient)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    // Empty stars
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg 
          key={`empty-star-${i}`} 
          className="w-4 h-4 text-gray-300" 
          fill="currentColor" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    return (
      <div className="flex items-center" aria-label={`Rating: ${product.rating} out of 5 stars`}>
        {stars}
        <span className="ml-1 text-xs text-brand-muted">{product.rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <article className="bg-brand-surface rounded-lg overflow-hidden h-full flex flex-col transition-shadow hover:shadow-md border border-brand-border">
      <Link 
        to={`/product/${product.id}`} 
        className="block overflow-hidden relative" 
        aria-label={`View details for ${product.name}${!product.inStock ? ' (Out of Stock)' : ''}`}
      >
        {/* Using square aspect ratio container with consistent dimensions */}
        <div className="aspect-square w-full relative bg-white">
          <img 
            src={product.image} 
            alt={product.name} 
            className="absolute inset-0 w-full h-full object-contain p-4 transition-transform hover:scale-105" 
            loading="lazy"
          />
        </div>
        
        {/* Floating badges/tags */}
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          {!product.inStock && (
            <div className="bg-brand-error text-brand-textLight font-medium text-xs px-2 py-1 rounded" role="status">
              Out of Stock
            </div>
          )}
          
          {discount && discount > 0 && (
            <div className="bg-brand-primary text-brand-textLight text-xs font-bold px-2 py-1 rounded">
              {discount}% OFF
            </div>
          )}
        </div>
      </Link>
      
      {/* Product details */}
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex-grow">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="text-brand-text font-medium line-clamp-2 flex-grow">
              <Link to={`/product/${product.id}`} className="hover:text-brand-primary transition-colors">
                {product.name}
              </Link>
            </h3>

          </div>
          {renderRatingStars()}
          
          <p className="text-xs text-brand-muted mb-2">{product.category}</p>
          
          {product.quantity && (
            <p className="text-xs text-brand-textSecondary mb-1">{product.quantity}</p>
          )}
          
          <div className="mb-3 flex items-baseline">
            <span className="text-brand-text font-bold mr-2">{formattedPrice}</span>
            {formattedOriginalPrice && (
              <span className="text-brand-muted text-sm line-through">
                {formattedOriginalPrice}
              </span>
            )}
          </div>
        </div>
        
        <div className="mt-auto">
          {/* <div className="text-xs text-brand-muted flex items-center mb-3">
            <svg className="w-4 h-4 mr-1 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {product.deliveryTime}
          </div> */}
          
          <button 
            type="button"
            disabled={!product.inStock}
            className={`w-full py-2 px-3 rounded text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary 
              ${product.inStock 
                ? 'bg-brand-primary text-brand-textLight hover:bg-brand-primary/90' 
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            aria-disabled={!product.inStock}
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard; 