import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PageHeader, Card, Button } from '../../components/ui';
import SEOHead from '../../components/seo/SEOHead';
import { useAppSelector } from '../../hooks/useReduxHooks';
import { selectCartItems, selectSubtotal } from '../../store/cartSlice';

const CheckoutSuccessPage: React.FC = () => {
  const navigate = useNavigate();
  const cartItems = useAppSelector(selectCartItems);
  const subtotal = useAppSelector(selectSubtotal);
  
  // Mock order data
  const orderData = {
    orderId: `ORD-${Math.floor(100000 + Math.random() * 900000)}`,
    orderDate: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }),
    deliveryAddress: '123 Main Street, Kathmandu, Nepal',
    paymentMethod: 'Cash on Delivery',
    estimatedDelivery: '10 minutes',
    items: cartItems,
    subtotal,
    deliveryFee: 50,
    total: subtotal + 50
  };

  // If there are no items (e.g., after page refresh), redirect to home
  useEffect(() => {
    if (cartItems.length === 0) {
      // In a real application, you'd fetch the order details from an API using an order ID from URL params
      setTimeout(() => {
        navigate('/');
      }, 5000);
    }
  }, [cartItems, navigate]);

  return (
    <>
      <SEOHead 
        title="Order Confirmed"
        description="Your order has been successfully placed. Expect delivery within 10 minutes."
        keywords="order confirmation, successful order, grocery delivery"
        noIndex={true}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <PageHeader
          title="Order Confirmed"
          subtitle="Thank you for your order!"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Checkout', href: '/checkout' },
            { label: 'Order Confirmation' }
          ]}
        />
        
        <div className="max-w-3xl mx-auto">
          {/* Success Message */}
          <Card className="mb-8 border-l-4 border-l-brand-success">
            <div className="p-6 flex items-center">
              <div className="bg-brand-success/20 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-brand-success" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-brand-text">Your order has been placed successfully!</h2>
                <p className="text-brand-muted">
                  We've sent a confirmation email to your registered email address.
                </p>
              </div>
            </div>
          </Card>
          
          {/* Order Details */}
          <Card className="mb-8">
            <div className="p-6 border-b border-brand-border">
              <h2 className="text-xl font-semibold text-brand-text">Order Details</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-medium text-brand-text mb-2">Order Information</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-brand-muted">Order Number:</span>
                      <span className="text-brand-text font-medium">{orderData.orderId}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-brand-muted">Date:</span>
                      <span className="text-brand-text">{orderData.orderDate}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-brand-muted">Payment Method:</span>
                      <span className="text-brand-text">{orderData.paymentMethod}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-brand-muted">Status:</span>
                      <span className="text-brand-success font-medium">Confirmed</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-brand-text mb-2">Delivery Information</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-brand-muted">Address:</span>
                      <span className="text-brand-text">{orderData.deliveryAddress}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-brand-muted">Estimated Delivery:</span>
                      <span className="text-brand-text font-medium">{orderData.estimatedDelivery}</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <h3 className="font-medium text-brand-text mb-3">Order Summary</h3>
              <div className="border border-brand-border rounded-md mb-6">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-brand-border">
                    <thead className="bg-brand-surface">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-brand-muted uppercase tracking-wider">
                          Item
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-brand-muted uppercase tracking-wider">
                          Quantity
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-brand-muted uppercase tracking-wider">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-brand-muted uppercase tracking-wider">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-brand-border">
                      {orderData.items.map((item) => (
                        <tr key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-10 w-10 flex-shrink-0">
                                <img className="h-10 w-10 rounded-md object-cover" src={item.image} alt={item.name} />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-brand-text">{item.name}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-brand-text">
                            {item.quantity || 1}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-brand-text">
                            ₹{item.price?.toFixed(2)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-brand-text">
                            ₹{((item.price || 0) * (item.quantity || 1)).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="border-t border-brand-border pt-4">
                <div className="flex justify-end">
                  <div className="w-full sm:w-1/2">
                    <div className="flex justify-between py-2">
                      <span className="text-brand-muted">Subtotal:</span>
                      <span className="text-brand-text">₹{orderData.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-brand-muted">Delivery Fee:</span>
                      <span className="text-brand-text">₹{orderData.deliveryFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-2 font-medium">
                      <span>Total:</span>
                      <span className="text-brand-text">₹{orderData.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Delivery Tracking */}
          <Card className="mb-8">
            <div className="p-6 border-b border-brand-border">
              <h2 className="text-xl font-semibold text-brand-text">Delivery Tracking</h2>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="relative flex items-center justify-center">
                    <div className="h-8 w-8 rounded-full bg-brand-primary flex items-center justify-center">
                      <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-brand-text">Order Confirmed</h3>
                    <p className="text-xs text-brand-muted">Your order has been received and is being processed</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="relative">
                    <div className="h-8 w-8 rounded-full bg-brand-primary/20 flex items-center justify-center">
                      <svg className="h-4 w-4 text-brand-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H11a1 1 0 001-1v-1h2.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1v-2a1 1 0 00-.293-.707l-2-2A1 1 0 0017 8h-3V5a1 1 0 00-1-1H3z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-brand-text">Out for Delivery</h3>
                    <p className="text-xs text-brand-muted">Your order will arrive in approximately 10 minutes</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-brand-surface p-4 rounded-md text-center">
                <p className="text-sm text-brand-text">Track your delivery in real-time in the mobile app</p>
                <div className="flex justify-center mt-2 space-x-3">
                  <Link to="/mobile">
                    <Button variant="outline" colorScheme="primary" size="sm">
                      Download App
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/">
              <Button variant="outline" colorScheme="primary" className="w-full sm:w-auto">
                Continue Shopping
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="solid" colorScheme="primary" className="w-full sm:w-auto">
                View My Orders
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutSuccessPage; 