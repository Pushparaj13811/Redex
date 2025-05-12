import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import type { ProductProps } from '../../types/product';
import CategoryCard from '../../components/ui/CategoryCard';
import ProductCard from '../../components/ui/ProductCard';
import { useCategories } from '../../hooks/useCategories';
import SEOHead from '../../components/seo/SEOHead';
import HeroBanner from '../../components/shared/heroBanner';

const HomePage: React.FC = () => {
  const { getFeaturedProducts } = useProducts();
  const { categories } = useCategories();
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* SEO Head with consistent favicon */}
      <SEOHead
        title="Home"
        description="Order groceries and essentials with 10-minute delivery across Nepal. In-house fulfillment for speed and reliability."
        keywords="10 minute delivery, grocery delivery, quick commerce, redex, nepal grocery"
      />

      {/* Hero banner */}
      <HeroBanner />

      {/* Categories */}
      <div className="mb-12">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4">
          {categories.slice(0, 7).map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>

      {/* Featured Products section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-brand-text">Fruits & Vegetables</h2>
          <Link to="/shop" className="text-brand-primary text-sm font-medium flex items-center">
            See All
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {featuredProducts.slice(0, 6).map((product: ProductProps) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Popular Grocery Items */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-brand-text">Daily Essentials</h2>
          <Link to="/shop" className="text-brand-primary text-sm font-medium flex items-center">
            See All
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {featuredProducts.slice(3, 9).map((product: ProductProps) => (
            <ProductCard key={product.id} product={{ ...product, category: 'Daily Essentials' }} />
          ))}
        </div>
      </div>

      {/* Popular Searches */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-brand-text mb-4">Popular Searches</h2>
        <div className="border-t border-brand-border pt-4">
          <div className="mb-4">
            <h3 className="font-medium text-brand-text inline-block mr-2">Products:</h3>
            <div className="inline">
              {['Avocado', 'Strawberry', 'Pomegranate', 'Beetroot', 'Lady finger', 'Potato', 'Lemon', 'Dalchini', 'Blueberry', 'Papaya'].map((item, index) => (
                <React.Fragment key={index}>
                  <Link to={`/search?q=${item}`} className="text-brand-muted hover:text-brand-primary">{item}</Link>
                  {index < 9 && <span className="text-brand-muted mx-1">|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-medium text-brand-text inline-block mr-2">Brands:</h3>
            <div className="inline">
              {['Yakult', 'Aashirvaad Atta', 'Too Yumm', 'Lays', 'Figaro Olive Oil', 'Nandini Milk', 'Amul', 'Fortune Oil'].map((item, index) => (
                <React.Fragment key={index}>
                  <Link to={`/search?q=${item}`} className="text-brand-muted hover:text-brand-primary">{item}</Link>
                  {index < 7 && <span className="text-brand-muted mx-1">|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-medium text-brand-text inline-block mr-2">Categories:</h3>
            <div className="inline">
              {['Grocery', 'Curd', 'Fresh fruits', 'Fresh vegetables', 'Eggs', 'Cheese', 'Bread', 'Milk', 'Refined oil', 'Butter'].map((item, index) => (
                <React.Fragment key={index}>
                  <Link to={`/search?q=${item}`} className="text-brand-muted hover:text-brand-primary">{item}</Link>
                  {index < 9 && <span className="text-brand-muted mx-1">|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Category Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {['Fruits & Vegetables', 'Baby Food', 'Breakfast & Sauces', 'Cleaning Essentials', 'Atta, Rice, Oil & Dals', 'Dairy, Bread & Eggs', 'Tea, Coffee & More', 'Home Needs'].map((category, index) => (
          <Link key={index} to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`} className="text-brand-text hover:text-brand-primary">
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage; 