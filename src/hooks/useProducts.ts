import { useState, useEffect, useMemo } from 'react';
import type { ProductProps } from '../types/product';
import allProducts from '../data/products';

export interface UseProductsReturn {
  products: ProductProps[];
  filteredProducts: ProductProps[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  getProductById: (id: string) => ProductProps | undefined;
  getRelatedProducts: (product: ProductProps) => ProductProps[];
  getFeaturedProducts: () => ProductProps[];
  getCategories: () => string[];
}

export const useProducts = (): UseProductsReturn => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>(allProducts);
  
  // Filter products based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredProducts(allProducts);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = allProducts.filter(
      product => 
        product.name.toLowerCase().includes(query) || 
        product.category.toLowerCase().includes(query) || 
        (product.description && product.description.toLowerCase().includes(query))
    );
    
    setFilteredProducts(results);
  }, [searchQuery]);

  // Get a product by ID
  const getProductById = useMemo(() => (id: string): ProductProps | undefined => {
    return allProducts.find(product => product.id === id);
  }, []);

  // Get related products by category
  const getRelatedProducts = useMemo(() => (product: ProductProps): ProductProps[] => {
    return allProducts.filter(p => 
      p.id !== product.id && 
      p.category === product.category
    ).slice(0, 4);
  }, []);

  // Get featured products (products with highest rating)
  const getFeaturedProducts = useMemo(() => (): ProductProps[] => {
    return [...allProducts]
      .sort((a, b) => (b.rating || 0) - (a.rating || 0))
      .slice(0, 8);
  }, []);

  // Get all unique categories
  const getCategories = useMemo(() => (): string[] => {
    const categories = allProducts.map(product => product.category);
    return [...new Set(categories)];
  }, []);

  return {
    products: allProducts,
    filteredProducts,
    searchQuery,
    setSearchQuery,
    getProductById,
    getRelatedProducts,
    getFeaturedProducts,
    getCategories
  };
}; 