import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageHeader, Card, Button } from '../../components/ui';
import ProductCard from '../../components/ui/ProductCard';
import companyInformation from '../../constants/companyInfo';
import { useProducts } from '../../hooks/useProducts';
import { useCategories } from '../../hooks/useCategories';
import { Helmet } from 'react-helmet-async';

const CategoryPage: React.FC = () => {
  // Rest of the component remains the same
  const { id } = useParams<{ id: string }>();
  const { products } = useProducts();
  const { getCategoryById, categories } = useCategories();
  const [sortOption, setSortOption] = useState<string>('popular');
  const [filterPrice, setFilterPrice] = useState<[number, number]>([0, 1000]);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  
  // Get category details
  const category = id ? getCategoryById(id) : null;
  
  // Filter products by current category
  const categoryProducts = useMemo(() => 
    category ? products.filter(product => product.category === category.name) : [],
  [category, products]);

  // Apply additional filters
  const filteredProducts = categoryProducts
    .filter(product => !inStockOnly || product.inStock)
    .filter(product => product.price >= filterPrice[0] && product.price <= filterPrice[1]);

  // Apply sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortOption) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'popular':
      default:
        return (b.rating || 0) - (a.rating || 0);
    }
  });

  // Set price range based on available products
  useEffect(() => {
    if (categoryProducts.length > 0) {
      const prices = categoryProducts.map(p => p.price);
      const minPrice = Math.floor(Math.min(...prices));
      const maxPrice = Math.ceil(Math.max(...prices));
      setFilterPrice([minPrice, maxPrice]);
    }
  }, [categoryProducts]);

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold text-brand-text mb-4">Category Not Found</h1>
        <p className="text-brand-text mb-6">The category you're looking for doesn't exist.</p>
        <Link to="/shop" className="inline-flex items-center text-brand-primary hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${category.name} - ${companyInformation.name}`}</title>
        <meta name="description" content={`Shop our selection of ${category.name.toLowerCase()} products with fast delivery. Browse ${category.itemCount}+ items.`} />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <PageHeader 
          title={category.name} 
          subtitle={`Browse our selection of ${category.name.toLowerCase()} products`}
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop' },
            { label: category.name, href: `/category/${id}` }
          ]}
          metaTitle={`${category.name} - ${companyInformation.name}`}
          metaDescription={`Shop our selection of ${category.name.toLowerCase()} products with fast delivery. Browse ${category.itemCount}+ items.`}
        />
        
        {/* Category Hero Banner */}
        <div className="rounded-xl overflow-hidden relative mb-8">
          <img 
            src={category.image.replace('w=300', 'w=1400&h=300')} 
            alt={category.name} 
            className="w-full h-40 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/70 to-transparent flex items-center">
            <div className="px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {category.name}
              </h2>
              <p className="text-white/90">
                {category.itemCount} products available
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Section */}
          <div className="w-full md:w-64 flex-shrink-0">
            <Card className="p-4 sticky top-24">
              <h3 className="font-semibold text-brand-text text-lg mb-4">Filters</h3>
              
              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium text-brand-text mb-2">Price Range</h4>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-brand-muted">₹{filterPrice[0]}</span>
                  <span className="text-sm text-brand-muted">₹{filterPrice[1]}</span>
                </div>
                <input 
                  type="range" 
                  min={filterPrice[0]} 
                  max={filterPrice[1]} 
                  value={filterPrice[1]} 
                  onChange={(e) => setFilterPrice([filterPrice[0], parseInt(e.target.value)])}
                  className="w-full accent-brand-primary" 
                />
              </div>
              
              {/* In Stock Only */}
              <div className="mb-6">
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="accent-brand-primary mr-2 h-4 w-4" 
                  />
                  <span className="text-brand-text">In Stock Only</span>
                </label>
              </div>
              
              {/* Related Categories */}
              <div className="mb-6">
                <h4 className="font-medium text-brand-text mb-2">Related Categories</h4>
                <ul className="space-y-1">
                  {categories.filter(c => c.id !== id).slice(0, 5).map(relatedCategory => (
                    <li key={relatedCategory.id}>
                      <Link 
                        to={`/category/${relatedCategory.id}`}
                        className="text-brand-muted hover:text-brand-primary text-sm"
                      >
                        {relatedCategory.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Reset Filters Button */}
              <Button
                variant="outline"
                colorScheme="primary"
                isFullWidth
                onClick={() => {
                  setInStockOnly(false);
                  const prices = categoryProducts.map(p => p.price);
                  const minPrice = Math.floor(Math.min(...prices));
                  const maxPrice = Math.ceil(Math.max(...prices));
                  setFilterPrice([minPrice, maxPrice]);
                }}
              >
                Reset Filters
              </Button>
            </Card>
          </div>
          
          {/* Products Grid */}
          <div className="flex-grow">
            {/* Sorting Options */}
            <div className="flex justify-between items-center mb-6">
              <div className="text-brand-text">
                Showing <span className="font-semibold">{sortedProducts.length}</span> products
              </div>
              <div className="flex items-center">
                <span className="text-brand-text mr-2">Sort by:</span>
                <select 
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="border border-brand-border rounded-md py-1 px-2 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-primary"
                >
                  <option value="popular">Popularity</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
            
            {/* Products */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {sortedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-brand-text text-lg mb-4">No products found matching your criteria.</p>
                <Button
                  variant="solid"
                  colorScheme="primary"
                  onClick={() => {
                    setInStockOnly(false);
                    const prices = categoryProducts.map(p => p.price);
                    const minPrice = Math.floor(Math.min(...prices));
                    const maxPrice = Math.ceil(Math.max(...prices));
                    setFilterPrice([minPrice, maxPrice]);
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;