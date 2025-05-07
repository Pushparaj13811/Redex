import type { CategoryProps } from "../types/category";

// Sample data for categories
const categories: CategoryProps[] = [
  {
    id: 'fruits-vegetables',
    name: 'Fruits & Vegetables',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&q=75&fit=crop&w=300',
    itemCount: 120
  },
  {
    id: 'dairy-bakery',
    name: 'Dairy & Bakery',
    image: 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?auto=format&q=75&fit=crop&w=300',
    itemCount: 86
  },
  {
    id: 'meat-seafood',
    name: 'Meat & Seafood',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&q=75&fit=crop&w=300',
    itemCount: 64
  },
  {
    id: 'snacks',
    name: 'Snacks & Beverages',
    image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&q=75&fit=crop&w=300',
    itemCount: 112
  },
  {
    id: 'household',
    name: 'Household & Cleaning',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&q=75&fit=crop&w=300',
    itemCount: 75
  },
  {
    id: 'personal-care',
    name: 'Personal Care',
    image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?auto=format&q=75&fit=crop&w=300',
    itemCount: 93
  },
];

export default categories; 