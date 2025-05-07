import type { CartState } from './cartSlice';
import type { store } from './index';

export interface RootState {
  cart: CartState;
  // Add other state interfaces here as needed
}

// Define the AppDispatch type from the store
export type AppDispatch = typeof store.dispatch; 