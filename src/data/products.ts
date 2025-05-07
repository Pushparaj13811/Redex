import type { ProductProps } from '../types/product';
import { generateProductSpecs } from './productSpecifications';
import { getManufacturerInfo } from './manufacturerInfo';

// Sample data for featured products
const products: ProductProps[] = [
  {
    id: 'p1',
    name: 'Fresh Organic Strawberries',
    price: 180,
    originalPrice: 220,
    image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&q=75&fit=crop&w=600',
    images: [
      'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&q=75&fit=crop&w=600',
      'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&q=75&fit=crop&w=600',
      'https://images.unsplash.com/photo-1560693225-ac70ac5c2476?auto=format&q=75&fit=crop&w=600',
    ],
    category: 'Fruits & Vegetables',
    description: 'Sweet and juicy organic strawberries, perfect for snacking or desserts. Grown without pesticides or harmful chemicals, these strawberries are harvested at peak ripeness for maximum flavor and nutritional value.',
    inStock: true,
    deliveryTime: '30 min',
    rating: 4.8,
    quantity: '500 g',
    brand: 'Fresh',
    countryOfOrigin: 'Nepal',
    keywords: ['strawberry', 'fruit', 'organic', 'fresh', 'berries']
  },
  {
    id: 'p2',
    name: 'Whole Wheat Bread',
    price: 45,
    originalPrice: 55,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&q=75&fit=crop&w=600',
    images: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&q=75&fit=crop&w=600',
      'https://images.unsplash.com/photo-1598373182133-52452f7691ef?auto=format&q=75&fit=crop&w=600',
      'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&q=75&fit=crop&w=600',
    ],
    category: 'Dairy & Bakery',
    description: 'Freshly baked whole wheat bread, made with 100% whole grains. Our bread is made daily using traditional methods and contains no preservatives or artificial ingredients. Perfect for sandwiches, toast, or enjoying with your favorite spread.',
    inStock: true,
    deliveryTime: '30 min',
    rating: 4.5,
    quantity: '400 g',
    brand: 'Whole',
    countryOfOrigin: 'Nepal',
    keywords: ['bread', 'wheat', 'bakery', 'whole grain', 'fresh']
  },
  {
    id: 'p3',
    name: 'Organic Free-Range Eggs',
    price: 90,
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&q=75&fit=crop&w=600',
    images: [
      'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&q=75&fit=crop&w=600',
      'https://images.unsplash.com/photo-1506976773555-b3da30a63b57?auto=format&q=75&fit=crop&w=600',
      'https://images.unsplash.com/photo-1569288063643-5de640de745b?auto=format&q=75&fit=crop&w=600',
    ],
    category: 'Dairy & Bakery',
    description: 'Farm-fresh organic free-range eggs from ethically raised hens. Our hens are raised in open pastures where they are free to roam and fed an organic diet. These eggs are rich in nutrients and have vibrant, orange yolks.',
    inStock: true,
    deliveryTime: '30 min',
    rating: 4.9,
    quantity: '12 eggs',
    brand: 'Organic',
    countryOfOrigin: 'Nepal',
    keywords: ['eggs', 'free-range', 'organic', 'dairy', 'protein']
  },
  {
    id: 'p4',
    name: 'Fresh Atlantic Salmon',
    price: 450,
    originalPrice: 550,
    image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&q=75&fit=crop&w=600',
    images: [
      'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&q=75&fit=crop&w=600',
      'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&q=75&fit=crop&w=600',
      'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&q=75&fit=crop&w=600',
    ],
    category: 'Meat & Seafood',
    description: 'Fresh Atlantic salmon fillet, rich in omega-3 fatty acids. Our salmon is responsibly sourced and delivered fresh daily. Perfect for grilling, baking, or pan-searing for a healthy and delicious meal.',
    inStock: true,
    deliveryTime: '45 min',
    rating: 4.7,
    quantity: '400 g',
    brand: 'Fresh',
    countryOfOrigin: 'Imported',
    keywords: ['salmon', 'fish', 'seafood', 'omega-3', 'protein']
  },
  {
    id: 'p5',
    name: 'Assorted Chocolate Box',
    price: 320,
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&q=75&fit=crop&w=600',
    images: [
      'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&q=75&fit=crop&w=600',
      'https://images.unsplash.com/photo-1526081347589-7fa3cb680977?auto=format&q=75&fit=crop&w=600',
      'https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&q=75&fit=crop&w=600',
    ],
    category: 'Snacks & Beverages',
    description: 'Luxury assorted chocolates, perfect for gifting or treating yourself. This exquisite collection features a variety of flavors including milk, dark, and white chocolate with different fillings like caramel, fruit, and nuts.',
    inStock: false,
    deliveryTime: '30 min',
    rating: 4.6,
    quantity: '200 g',
    brand: 'Assorted',
    countryOfOrigin: 'Imported',
    keywords: ['chocolate', 'sweets', 'gift', 'assorted', 'treats']
  },
  {
    id: 'p6',
    name: 'All-Purpose Surface Cleaner',
    price: 120,
    originalPrice: 150,
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&q=75&fit=crop&w=600',
    images: [
      'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&q=75&fit=crop&w=600',
      'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&q=75&fit=crop&w=600',
      'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&q=75&fit=crop&w=600',
    ],
    category: 'Household & Cleaning',
    description: 'Effective all-purpose cleaner that eliminates 99.9% of bacteria. Our formula is tough on stains and grime but gentle on surfaces. Leaves a fresh, clean scent without harsh chemical residues.',
    inStock: true,
    deliveryTime: '30 min',
    rating: 4.3,
    quantity: '500 ml',
    brand: 'All-Purpose',
    countryOfOrigin: 'Nepal',
    keywords: ['cleaner', 'household', 'disinfectant', 'surface', 'cleaning']
  },
  {
    id: 'p7',
    name: 'Natural Aloe Vera Moisturizer',
    price: 210,
    image: 'https://images.unsplash.com/photo-1601612628452-9e99ced43524?auto=format&q=75&fit=crop&w=600',
    images: [
      'https://images.unsplash.com/photo-1601612628452-9e99ced43524?auto=format&q=75&fit=crop&w=600',
      'https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc?auto=format&q=75&fit=crop&w=600',
      'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&q=75&fit=crop&w=600',
    ],
    category: 'Personal Care',
    description: 'Hydrating natural moisturizer with aloe vera for all skin types. This lightweight, fast-absorbing formula provides deep hydration without greasiness. Enriched with vitamins and antioxidants to nourish and protect your skin.',
    inStock: true,
    deliveryTime: '30 min',
    rating: 4.4,
    quantity: '100 ml',
    brand: 'Natural',
    countryOfOrigin: 'Nepal',
    keywords: ['moisturizer', 'aloe vera', 'skincare', 'natural', 'hydration']
  },
  {
    id: 'p8',
    name: 'Organic Avocados (Pack of 3)',
    price: 190,
    originalPrice: 230,
    image: 'https://images.unsplash.com/photo-1601039641847-7857b994d704?auto=format&q=75&fit=crop&w=600',
    images: [
      'https://images.unsplash.com/photo-1601039641847-7857b994d704?auto=format&q=75&fit=crop&w=600',
      'https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?auto=format&q=75&fit=crop&w=600',
      'https://images.unsplash.com/photo-1550861957-9d7f7e37941a?auto=format&q=75&fit=crop&w=600',
    ],
    category: 'Fruits & Vegetables',
    description: 'Perfectly ripe organic avocados, rich in healthy fats and nutrients. Our avocados are hand-selected for quality and ripeness. Versatile for use in salads, sandwiches, guacamole, or enjoyed on their own.',
    inStock: true,
    deliveryTime: '30 min',
    rating: 4.7,
    quantity: '3 avocados',
    brand: 'Organic',
    countryOfOrigin: 'Imported',
    keywords: ['avocado', 'organic', 'fruit', 'healthy', 'fresh']
  },
];

// Add specifications and manufacturer info to each product
const enhancedProducts = products.map(product => {
  return {
    ...product,
    specifications: generateProductSpecs(product.name, product.category, product.quantity),
    manufacturerInfo: getManufacturerInfo(product.name)
  };
});

export default enhancedProducts; 