import React from 'react';
import { useAppDispatch } from '../../hooks/useReduxHooks';
import { removeFromCart, updateQuantity } from '../../store/cartSlice';
import type { CartItemData } from '../../types/cart';
import Button from './Button';

const CartItem: React.FC<{ item: CartItemData }> = ({ item }) => {
  const dispatch = useAppDispatch();

  const handleQuantityChange = (delta: number) => {
    const newQuantity = item.quantity + delta;
    
    if (newQuantity >= 1 && newQuantity <= item.maxQuantity) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="flex py-3 border-b border-brand-border">
      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-brand-surface">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-contain object-center p-1"
        />
      </div>

      <div className="ml-3 flex flex-1 flex-col">
        <div className="flex justify-between">
          <h3 className="text-sm font-medium text-brand-text line-clamp-1">{item.name}</h3>
          <div className="flex items-center border border-brand-border rounded-md h-6">
            <button
              onClick={() => handleQuantityChange(-1)}
              disabled={item.quantity <= 1}
              className={`px-2 h-full text-sm ${item.quantity <= 1 ? 'text-brand-muted' : 'text-brand-text'}`}
            >
              -
            </button>
            <span className="px-2 text-xs text-brand-text">{item.quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              disabled={item.quantity >= item.maxQuantity}
              className={`px-2 h-full text-sm ${item.quantity >= item.maxQuantity ? 'text-brand-muted' : 'text-brand-text'}`}
            >
              +
            </button>
          </div>
        </div>
        
        <div className="mt-1 flex justify-between items-center">
          <div>
            <p className="text-sm font-medium text-brand-text">₹{item.price}</p>
            <p className="text-xs text-brand-muted">{item.quantity} item{item.quantity > 1 ? 's' : ''}</p>
          </div>
          
          <Button
            variant="ghost"
            colorScheme="primary"
            size="xs"
            onClick={handleRemove}
            className="font-medium text-xs"
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem; 