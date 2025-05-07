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

const ProductCard: React.FC<{ product: ProductProps }> = ({ product }) => {
  const discount = product.originalPrice ? Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  ) : product.discountPercentage;

  return (
    <div className="bg-brand-surface rounded-lg overflow-hidden h-full flex flex-col transition-shadow hover:shadow-md">
      <Link to={`/product/${product.id}`} className="block overflow-hidden relative">
        {/* Using square aspect ratio container with consistent dimensions */}
        <div className="aspect-square w-full relative bg-white">
          <img 
            src={product.image} 
            alt={product.name} 
            className="absolute inset-0 w-full h-full object-contain p-4 transition-transform hover:scale-105" 
          />
        </div>
        
        {/* Floating badges/tags */}
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          {!product.inStock && (
            <div className="bg-brand-error text-brand-textLight font-medium text-xs px-2 py-1 rounded">
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
      
      <div className="p-4 flex-grow flex flex-col">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-brand-text text-base font-medium mb-1 line-clamp-2">{product.name}</h3>
        </Link>
        
        {product.quantity && (
          <div className="text-sm text-brand-muted mb-2">{product.quantity}</div>
        )}

        <div className="mt-auto flex justify-between items-center">
          <div>
            <span className="text-brand-text font-bold text-base">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-brand-muted text-sm line-through ml-2">₹{product.originalPrice}</span>
            )}
          </div>
          
          <button 
            disabled={!product.inStock}
            className={`px-4 py-1 rounded border border-brand-success text-brand-success font-medium text-sm transition-colors hover:bg-brand-success hover:text-brand-textLight ${
              !product.inStock && 'opacity-50 cursor-not-allowed'
            }`}
          >
            {!product.inStock ? 'SOLD OUT' : 'ADD'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 