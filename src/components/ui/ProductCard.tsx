import React from 'react';
import { Link } from 'react-router-dom';
import type { ProductProps } from '../../types/product';
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


  return (
    <article className="bg-brand-surface rounded-lg overflow-hidden h-full flex flex-col transition-shadow hover:shadow-md border border-brand-border">
      <Link
        to={`/product/${product.id}`}
        className="block overflow-hidden relative"
        aria-label={`View details for ${product.name}${!product.inStock ? ' (Out of Stock)' : ''}`}
      >
        {/* Using square aspect ratio container with consistent dimensions */}
        <div className="aspect-square w-full relative bg-white p-2 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Floating badges/tags */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 z-10">
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