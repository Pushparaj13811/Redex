import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ui/ProductCard';
import type { ProductProps } from '../../types/product';

interface RelatedProductsProps {
  products: ProductProps[];
  title?: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({
  products,
  title = 'Related Products'
}) => {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-brand-text">{title}</h2>
        {products.length > 4 && (
          <Link 
            to="/products" 
            className="text-sm font-medium text-brand-primary hover:underline"
          >
            View All
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts; 