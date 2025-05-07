import type { CartItemData } from "../types/cart";

// Sample cart items (without methods)
const cartItems: CartItemData[] = [
  {
    id: 'p1',
    name: 'Fresh Organic Strawberries',
    price: 180,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&q=75&fit=crop&w=300',
    maxQuantity: 10
  },
  {
    id: 'p2',
    name: 'Whole Wheat Bread',
    price: 45,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&q=75&fit=crop&w=300',
    maxQuantity: 5
  },
  {
    id: 'p4',
    name: 'Fresh Atlantic Salmon',
    price: 450,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&q=75&fit=crop&w=300',
    maxQuantity: 3
  },
];

export default cartItems; 