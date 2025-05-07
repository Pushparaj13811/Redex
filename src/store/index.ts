import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Add other reducers here as needed
  },
});

// Re-export types from the types file
export type { RootState, AppDispatch } from './types'; 