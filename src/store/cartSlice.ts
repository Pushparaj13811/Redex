import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { CartItemData } from '../types/cart';
import initialCartItems from '../data/cartItems';
import type { RootState } from './types';

export interface CartState {
  items: CartItemData[];
  loading: boolean;
  error: string | null;
}

// Initialize cart items
const initialState: CartState = {
  items: initialCartItems.map(item => ({
    ...item,
    maxQuantity: 10 // Ensure maxQuantity is set
  })),
  loading: false,
  error: null
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<CartItemData>) => {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex((item: CartItemData) => item.id === newItem.id);
      
      if (existingItemIndex >= 0) {
        // Update quantity if item exists
        const newQuantity = Math.min(
          state.items[existingItemIndex].quantity + (newItem.quantity || 1),
          state.items[existingItemIndex].maxQuantity
        );
        
        state.items[existingItemIndex].quantity = newQuantity;
      } else {
        // Add new item
        state.items.push({
          ...newItem,
          quantity: newItem.quantity || 1,
          maxQuantity: newItem.maxQuantity || 10 // Default maxQuantity if not provided
        });
      }
    },
    removeFromCart: (state: CartState, action: PayloadAction<string>) => {
      const idToRemove = action.payload;
      state.items = state.items.filter((item: CartItemData) => item.id !== idToRemove);
    },
    updateQuantity: (state: CartState, action: PayloadAction<{ id: string; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const itemIndex = state.items.findIndex((item: CartItemData) => item.id === id);
      
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity = Math.min(
          quantity,
          state.items[itemIndex].maxQuantity
        );
      }
    },
    clearCart: (state: CartState) => {
      state.items = [];
    }
  }
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

// Selectors
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectTotalItems = (state: RootState) => 
  state.cart.items.reduce((sum: number, item: CartItemData) => sum + item.quantity, 0);
export const selectSubtotal = (state: RootState) => 
  state.cart.items.reduce((sum: number, item: CartItemData) => sum + (item.price * item.quantity), 0);

export default cartSlice.reducer; 