import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../../components/ui/CartItem';
import companyInformation from '../../constants/companyInfo';
import { useAppSelector, useAppDispatch } from '../../hooks/useReduxHooks';
import { selectCartItems, selectSubtotal, clearCart } from '../../store/cartSlice';
import { validatePromoCode, calculateDiscount } from '../../utils/promoCode';
import Button from '../../components/ui/Button/Button';

const CartPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const subtotal = useAppSelector(selectSubtotal);
  
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const deliveryFee = 50; // Fixed delivery fee
  
  // Calculate discount
  const discount = promoApplied ? calculateDiscount(subtotal, discountPercentage) : 0;
  
  // Calculate total
  const total = subtotal - discount + deliveryFee;

  // Handle applying promo code
  function handleApplyPromo() {
    const percentage = validatePromoCode(promoCode);
    
    if (percentage > 0) {
      setPromoApplied(true);
      setDiscountPercentage(percentage);
    } else {
      alert('Invalid promo code');
    }
  }

  // Handle checkout
  function handleCheckout() {
    alert('Checkout functionality will be implemented in the future');
  }

  // Handle clear cart
  function handleClearCart() {
    dispatch(clearCart());
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-brand-text mb-8">Your Shopping Cart</h1>
      
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-brand-surface rounded-lg border border-brand-border p-6">
              <h2 className="text-xl font-semibold text-brand-text mb-4">Cart Items ({cartItems.length})</h2>
              
              <div className="divide-y divide-brand-border">
                {cartItems.map(item => (
                  <CartItem 
                    key={item.id} 
                    item={item}
                  />
                ))}
              </div>
              
              <div className="mt-6 flex items-center justify-between">
                <Link to="/shop" className="text-brand-primary hover:underline flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Continue Shopping
                </Link>
                
                <Button
                  onClick={handleClearCart}
                  variant="ghost"
                  colorScheme="error"
                  size="sm"
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div>
            <div className="bg-brand-surface rounded-lg border border-brand-border p-6 sticky top-20">
              <h2 className="text-xl font-semibold text-brand-text mb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-brand-text">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                
                {promoApplied && (
                  <div className="flex justify-between text-brand-success">
                    <span>Discount ({discountPercentage}%)</span>
                    <span>-₹{discount.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-brand-text">
                  <span>Delivery Fee</span>
                  <span>₹{deliveryFee.toFixed(2)}</span>
                </div>
                
                <div className="border-t border-brand-border pt-4 flex justify-between font-bold text-brand-text">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>
              
              {/* Promo Code */}
              <div className="mb-6">
                <label htmlFor="promo" className="block text-sm font-medium text-brand-text mb-2">
                  Promo Code
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    id="promo"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter code"
                    disabled={promoApplied}
                    className="flex-1 border border-brand-border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary disabled:bg-gray-100"
                  />
                  <Button
                    onClick={handleApplyPromo}
                    isDisabled={promoApplied || !promoCode}
                    colorScheme="primary"
                    variant="solid"
                    size="md"
                  >
                    Apply
                  </Button>
                </div>
                {promoApplied && (
                  <p className="text-sm text-brand-success mt-1">Promo code applied!</p>
                )}
              </div>
              
              {/* Checkout Button */}
              <Button
                onClick={handleCheckout}
                colorScheme="primary"
                variant="solid"
                size="lg"
                isFullWidth
              >
                Proceed to Checkout
              </Button>
              
              {/* Payment Methods */}
              <div className="mt-4">
                <p className="text-xs text-brand-muted mb-2">We accept:</p>
                <div className="flex space-x-2">
                  {Object.keys(companyInformation.paymentMethods).map((method, index) => (
                    <div key={index} className="bg-white border border-brand-border rounded px-2 py-1 text-xs">
                      {method === 'cashOnDelivery' ? 'Cash' : method}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 bg-brand-surface rounded-lg border border-brand-border">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-medium text-brand-text mb-2">Your cart is empty</h2>
          <p className="text-brand-muted mb-6">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link to="/shop">
            <Button
              colorScheme="primary"
              variant="solid"
              size="lg"
            >
              Start Shopping
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage; 