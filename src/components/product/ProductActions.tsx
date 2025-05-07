import React from 'react';
import Button from '../ui/Button/Button';

interface ProductActionsProps {
  quantity: number;
  onQuantityChange: (delta: number) => void;
  onAddToCart: () => void;
  onBuyNow: () => void;
  inStock: boolean;
  isAddedToCart: boolean;
  maxQuantity?: number;
}

const ProductActions: React.FC<ProductActionsProps> = ({
  quantity,
  onQuantityChange,
  onAddToCart,
  onBuyNow,
  inStock,
  isAddedToCart,
  maxQuantity = 10
}) => {
  return (
    <div className="space-y-4 mb-6">
      {/* Quantity Selector */}
      <div className="flex items-center">
        <span className="text-sm font-medium text-brand-text mr-4">Quantity:</span>
        <div className="flex items-center border border-brand-border rounded-lg overflow-hidden">
          <Button
            onClick={() => onQuantityChange(-1)}
            disabled={quantity <= 1}
            variant="ghost"
            size="sm"
            colorScheme="secondary"
            className="px-3 py-2 disabled:opacity-50"
            aria-label="Decrease quantity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </Button>
          <div className="px-4 py-2 text-brand-text font-medium border-x border-brand-border min-w-[40px] text-center">
            {quantity}
          </div>
          <Button
            onClick={() => onQuantityChange(1)}
            disabled={quantity >= maxQuantity}
            variant="ghost"
            size="sm"
            colorScheme="secondary"
            className="px-3 py-2 disabled:opacity-50"
            aria-label="Increase quantity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          onClick={onAddToCart}
          disabled={!inStock || isAddedToCart}
          colorScheme={isAddedToCart ? "success" : "primary"}
          variant="solid"
          size="lg"
          className="flex-1"
          isFullWidth
        >
          {!inStock 
            ? 'Out of Stock' 
            : isAddedToCart 
              ? 'Added to Cart ✓' 
              : 'Add to Cart'
          }
        </Button>
        
        <Button
          onClick={onBuyNow}
          disabled={!inStock}
          colorScheme="primary"
          variant="outline"
          size="lg"
          className="flex-1"
          isFullWidth
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ProductActions; 