import React from 'react';
import { Link } from 'react-router-dom';

interface ProductInfoProps {
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  quantity?: string;
  discountAmount: number;
  discountPercentage: number;
  description?: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  name,
  brand,
  price,
  originalPrice,
  rating,
  quantity,
  discountAmount,
  discountPercentage,
  description,
}) => {
  return (
    <div className="flex flex-col">
      {/* Super Saver Banner */}
      {discountAmount > 0 && (
        <div className="bg-green-600 text-white py-3 px-4 rounded-lg mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-medium">Save ₹{discountAmount}</span>
            <span className="mx-1">with Redex</span>
          </div>
          <div className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold">
            SUPER SAVER
          </div>
        </div>
      )}

      {/* Brand & Product Title */}
      <Link to={`/brand/${brand.toLowerCase()}`} className="inline-block mb-1 text-brand-primary">
        {brand} ›
      </Link>

      <h1 className="text-2xl font-bold text-brand-text mb-3">{name}</h1>

      {/* Rating & Quantity */}
      <div className="flex flex-wrap items-center mb-3">
        {rating && (
          <div className="flex items-center mr-6">
            <div className="flex items-center bg-green-700 text-white px-2 py-1 rounded-sm text-sm mr-1">
              <span className="font-bold">{rating}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="text-sm text-brand-muted">(2.8k)</span>
          </div>
        )}

        <div className="text-brand-muted text-sm flex items-center">
          <span className="mr-2">Net Qty:</span>
          <span className="font-medium text-brand-text">{quantity || "500 g"}</span>
        </div>
      </div>

      {/* Price Section */}
      <div className="flex items-center mb-4">
        <div className="px-3 py-2 bg-brand-primary text-white text-xl font-bold rounded-l-md">₹{price}</div>
        {originalPrice && (
          <>
            <div className="px-3 py-2 bg-yellow-300 text-brand-text font-medium">
              <span className="line-through">₹{originalPrice}</span>
            </div>
            <div className="px-3 py-2 bg-green-500 text-white font-medium rounded-r-md">
              {discountPercentage}% OFF
            </div>
          </>
        )}
      </div>

      {/* Description Section */}
      {description && (
        <div className="mb-4">
          <p className="text-brand-text">{description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductInfo; 