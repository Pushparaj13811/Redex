// Base cart item data without UI-specific callbacks
export interface CartItemData {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  maxQuantity: number;
}

// CartItem component props with callbacks
export interface CartItemProps extends CartItemData {
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, newQuantity: number) => void;
} 