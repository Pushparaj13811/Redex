import React from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from '../components/ui/CategoryCard';
import ProductCard from '../components/ui/ProductCard';
import companyInformation from '../constants/companyInfo';
import { useProducts } from '../hooks/useProducts';
import { useCategories } from '../hooks/useCategories';

const ShopPage: React.FC = () => {
  const { categories } = useCategories();
  const { filteredProducts, searchQuery, setSearchQuery } = useProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Hero Banner */}
      <div className="relative rounded-xl overflow-hidden mb-8">
        <img 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&q=75&fit=crop&w=1400&h=400"
          alt="Shop fresh groceries"
          className="w-full h-60 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/80 to-transparent flex items-center">
          <div className="max-w-md pl-8 md:pl-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Fresh Groceries Delivered
            </h1>
            <p className="text-white/90 text-lg mb-4">
              Get everything you need delivered in 30 minutes
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 px-4 pr-10 rounded-md border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <div className="absolute right-3 top-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-brand-text">Shop by Category</h2>
          <Link to="/categories" className="text-brand-primary font-medium hover:underline">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-brand-text">
            {searchQuery ? 'Search Results' : 'Featured Products'}
          </h2>
          {!searchQuery && (
            <Link to="/products" className="text-brand-primary font-medium hover:underline">
              View All
            </Link>
          )}
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-brand-surface rounded-lg border border-brand-border">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-medium text-brand-text mb-2">No products found</h3>
            <p className="text-brand-muted">
              We couldn't find any products matching "{searchQuery}".
            </p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-4 px-4 py-2 bg-brand-primary text-white rounded-md hover:bg-brand-primaryDark transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>

      {/* Delivery Features */}
      <div className="bg-brand-surface rounded-xl p-8 border border-brand-border">
        <h2 className="text-2xl font-bold text-brand-text mb-6 text-center">
          Why Choose {companyInformation.name}?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-brand-text mb-2">Quick Delivery</h3>
            <p className="text-brand-muted">
              Get your groceries delivered in 30 minutes or less.
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-brand-text mb-2">Quality Assurance</h3>
            <p className="text-brand-muted">
              All products are sourced fresh daily and inspected for quality.
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-brand-text mb-2">Secure Payments</h3>
            <p className="text-brand-muted">
              Multiple payment options with secure transactions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage; 