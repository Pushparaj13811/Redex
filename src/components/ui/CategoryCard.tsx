import React from 'react';
import { Link } from 'react-router-dom';

export interface CategoryProps {
  id: string;
  name: string;
  image: string;
  itemCount: number;
}

const CategoryCard: React.FC<{ category: CategoryProps }> = ({ category }) => {
  return (
    <Link 
      to={`/category/${category.id}`}
      className="block rounded-lg overflow-hidden bg-brand-surface text-center transition-all hover:shadow-sm"
    >
      <div className="flex flex-col items-center p-2">
        <div className="w-16 h-16 rounded-full mb-2 bg-brand-primary/5 flex items-center justify-center">
          <img 
            src={category.image} 
            alt={category.name} 
            className="w-12 h-12 object-contain" 
          />
        </div>
        <div>
          <h3 className="text-xs font-medium text-brand-text">{category.name}</h3>
          <p className="text-xs text-brand-muted">
            {category.name === "Atta" ? "Starts at ₹40/kg" : 
             category.name === "Rice" ? "Starts at ₹58/kg" : 
             category.name === "Dairy, Bread & Eggs" ? "Starts at ₹16" :
             category.name === "Dals & Pulses" ? "Starts at ₹102/kg" :
             category.name === "Fruits & Vegetables" ? "Starts at ₹11" :
             category.name === "Oil" ? "Starts at ₹105/L" : 
             `${category.itemCount} items`}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard; 