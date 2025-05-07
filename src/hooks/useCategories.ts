import { useMemo } from 'react';
import type { CategoryProps } from '../types/category';
import allCategories from '../data/categories';

export interface UseCategoriesReturn {
  categories: CategoryProps[];
  getCategoryById: (id: string) => CategoryProps | undefined;
}

export const useCategories = (): UseCategoriesReturn => {
  // Get a category by ID
  const getCategoryById = useMemo(() => (id: string): CategoryProps | undefined => {
    return allCategories.find(category => category.id === id);
  }, []);

  return {
    categories: allCategories,
    getCategoryById
  };
}; 