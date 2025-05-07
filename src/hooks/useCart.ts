import { useState, useCallback } from 'react';
import type { CartItemData, CartItemProps } from '../types/cart';
import initialCartItems from '../data/cartItems';

export interface UseCartReturn {
  cartItems: CartItemProps[];
  addToCart: (item: CartItemData) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, newQuantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}

export const useCart = (): UseCartReturn => {
  // Initialize cart with items from data and attach handlers
  const [cartItems, setCartItems] = useState<CartItemProps[]>(() =>
    initialCartItems.map(item => ({
      ...item,
      onRemove: (id) => removeFromCart(id),
      onUpdateQuantity: (id, qty) => updateQuantity(id, qty)
    }))
  );

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Calculate total items
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Add item to cart
  const addToCart = useCallback((item: CartItemData) => {
    setCartItems(prevItems => {
      // Check if item already exists
      const existingItemIndex = prevItems.findIndex(cartItem => cartItem.id === item.id);
      
      if (existingItemIndex >= 0) {
        // Update quantity if item exists
        const updatedItems = [...prevItems];
        const newQuantity = Math.min(
          updatedItems[existingItemIndex].quantity + 1,
          updatedItems[existingItemIndex].maxQuantity
        );
        
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: newQuantity
        };
        
        return updatedItems;
      } else {
        // Add new item with handlers
        return [
          ...prevItems,
          {
            ...item,
            quantity: 1,
            onRemove: (id) => removeFromCart(id),
            onUpdateQuantity: (id, qty) => updateQuantity(id, qty)
          }
        ];
      }
    });
  }, []);

  // Remove item from cart
  const removeFromCart = useCallback((id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  }, []);

  // Update item quantity
  const updateQuantity = useCallback((id: string, newQuantity: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id
          ? { ...item, quantity: Math.min(newQuantity, item.maxQuantity) }
          : item
      )
    );
  }, []);

  // Clear cart
  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    subtotal
  };
}; 