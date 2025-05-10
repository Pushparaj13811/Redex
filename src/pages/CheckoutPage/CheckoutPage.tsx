import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PageHeader, Card, Button, FormControl, FormLabel, FormErrorMessage } from '../../components/ui';
import SEOHead from '../../components/seo/SEOHead';
import { useAppSelector } from '../../hooks/useReduxHooks';
import { selectCartItems, selectSubtotal } from '../../store/cartSlice';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  paymentMethod: string;
}

interface FormErrors {
  [key: string]: string;
}

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const cartItems = useAppSelector(selectCartItems);
  const subtotal = useAppSelector(selectSubtotal);
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'cashOnDelivery'
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const deliveryFee = 50;
  const total = subtotal + deliveryFee;
  
  // Payment methods
  const paymentMethods = [
    { id: 'cashOnDelivery', name: 'Cash on Delivery', description: 'Pay with cash when your order arrives' },
    { id: 'upi', name: 'UPI', description: 'Pay using UPI apps' },
    { id: 'card', name: 'Credit/Debit Card', description: 'Pay securely with your card' }
  ];
  
  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  // Form validation
  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    
    if (!formData.pincode.trim()) {
      newErrors.pincode = 'PIN code is required';
    } else if (!/^[0-9]{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Please enter a valid 6-digit PIN code';
    }
    
    if (!formData.paymentMethod) newErrors.paymentMethod = 'Please select a payment method';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle checkout submission
  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        navigate('/checkout/success');
      }, 1500);
    }
  };
  
  // Redirect if cart is empty
  React.useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/cart');
    }
  }, [cartItems, navigate]);
  
  return (
    <>
      <SEOHead 
        title="Checkout"
        description="Complete your purchase for 10-minute grocery delivery. Fast, secure checkout for all your essential groceries."
        keywords="checkout, payment, grocery delivery, secure payment"
        noIndex={true}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <PageHeader
          title="Checkout"
          subtitle="Complete your purchase"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Cart', href: '/cart' },
            { label: 'Checkout' }
          ]}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleCheckout}>
              {/* Contact information */}
              <Card className="mb-8">
                <div className="p-6 border-b border-brand-border">
                  <h2 className="text-xl font-semibold text-brand-text">Contact Information</h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormControl isRequired isInvalid={!!errors.firstName}>
                      <FormLabel htmlFor="firstName">First Name</FormLabel>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                          errors.firstName ? 'border-brand-error' : 'border-brand-border'
                        }`}
                      />
                      {errors.firstName && <FormErrorMessage>{errors.firstName}</FormErrorMessage>}
                    </FormControl>
                    
                    <FormControl isRequired isInvalid={!!errors.lastName}>
                      <FormLabel htmlFor="lastName">Last Name</FormLabel>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                          errors.lastName ? 'border-brand-error' : 'border-brand-border'
                        }`}
                      />
                      {errors.lastName && <FormErrorMessage>{errors.lastName}</FormErrorMessage>}
                    </FormControl>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <FormControl isRequired isInvalid={!!errors.email}>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                          errors.email ? 'border-brand-error' : 'border-brand-border'
                        }`}
                      />
                      {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
                    </FormControl>
                    
                    <FormControl isRequired isInvalid={!!errors.phone}>
                      <FormLabel htmlFor="phone">Phone Number</FormLabel>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="10-digit mobile number"
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                          errors.phone ? 'border-brand-error' : 'border-brand-border'
                        }`}
                      />
                      {errors.phone && <FormErrorMessage>{errors.phone}</FormErrorMessage>}
                    </FormControl>
                  </div>
                </div>
              </Card>
              
              {/* Delivery Address */}
              <Card className="mb-8">
                <div className="p-6 border-b border-brand-border">
                  <h2 className="text-xl font-semibold text-brand-text">Delivery Address</h2>
                </div>
                <div className="p-6">
                  <FormControl isRequired isInvalid={!!errors.address} className="mb-6">
                    <FormLabel htmlFor="address">Address</FormLabel>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="House/Flat No., Building, Street, Area"
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                        errors.address ? 'border-brand-error' : 'border-brand-border'
                      }`}
                    />
                    {errors.address && <FormErrorMessage>{errors.address}</FormErrorMessage>}
                  </FormControl>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <FormControl isRequired isInvalid={!!errors.city}>
                      <FormLabel htmlFor="city">City</FormLabel>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                          errors.city ? 'border-brand-error' : 'border-brand-border'
                        }`}
                      />
                      {errors.city && <FormErrorMessage>{errors.city}</FormErrorMessage>}
                    </FormControl>
                    
                    <FormControl isRequired isInvalid={!!errors.state}>
                      <FormLabel htmlFor="state">State</FormLabel>
                      <select
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                          errors.state ? 'border-brand-error' : 'border-brand-border'
                        }`}
                      >
                        <option value="">Select State</option>
                        <option value="Bagmati">Bagmati</option>
                        <option value="Province 1">Province 1</option>
                        <option value="Province 2">Province 2</option>
                        <option value="Gandaki">Gandaki</option>
                        <option value="Lumbini">Lumbini</option>
                        <option value="Karnali">Karnali</option>
                        <option value="Sudur Paschim">Sudur Paschim</option>
                      </select>
                      {errors.state && <FormErrorMessage>{errors.state}</FormErrorMessage>}
                    </FormControl>
                  </div>
                  
                  <FormControl isRequired isInvalid={!!errors.pincode}>
                    <FormLabel htmlFor="pincode">PIN Code</FormLabel>
                    <input
                      id="pincode"
                      name="pincode"
                      type="text"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      placeholder="6-digit PIN code"
                      maxLength={6}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                        errors.pincode ? 'border-brand-error' : 'border-brand-border'
                      }`}
                    />
                    {errors.pincode && <FormErrorMessage>{errors.pincode}</FormErrorMessage>}
                  </FormControl>
                </div>
              </Card>
              
              {/* Payment method */}
              <Card className="mb-8">
                <div className="p-6 border-b border-brand-border">
                  <h2 className="text-xl font-semibold text-brand-text">Payment Method</h2>
                </div>
                <div className="p-6">
                  <FormControl isRequired isInvalid={!!errors.paymentMethod}>
                    <div className="space-y-3">
                      {paymentMethods.map((method) => (
                        <div key={method.id} className={`border rounded-lg p-4 cursor-pointer ${
                          formData.paymentMethod === method.id ? 'border-brand-primary bg-brand-primary/5' : 'border-brand-border'
                        }`} onClick={() => handleInputChange({ target: { name: 'paymentMethod', value: method.id } } as React.ChangeEvent<HTMLInputElement>)}>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id={method.id}
                              name="paymentMethod"
                              value={method.id}
                              checked={formData.paymentMethod === method.id}
                              onChange={handleInputChange}
                              className="form-radio h-5 w-5 text-brand-primary focus:ring-0"
                            />
                            <label htmlFor={method.id} className="ml-3 flex flex-col cursor-pointer">
                              <span className="font-medium text-brand-text">{method.name}</span>
                              <span className="text-sm text-brand-muted">{method.description}</span>
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                    {errors.paymentMethod && <FormErrorMessage>{errors.paymentMethod}</FormErrorMessage>}
                  </FormControl>
                </div>
              </Card>
              
              <div className="flex justify-between items-center">
                <Link to="/cart" className="text-brand-primary hover:underline flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Return to Cart
                </Link>
                
                <Button
                  type="submit"
                  variant="solid"
                  colorScheme="primary"
                  size="lg"
                  isLoading={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Place Order'}
                </Button>
              </div>
            </form>
          </div>
          
          {/* Order summary */}
          <div>
            <Card className="sticky top-20">
              <div className="p-6 border-b border-brand-border">
                <h2 className="text-xl font-semibold text-brand-text">Order Summary</h2>
              </div>
              <div className="p-6">
                {/* Order items list */}
                <div className="divide-y divide-brand-border mb-6">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between py-3">
                      <div className="flex">
                        <div className="w-12 h-12 rounded-md overflow-hidden mr-3 flex-shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-brand-text">{item.name}</h4>
                          <p className="text-xs text-brand-muted">Qty: {item.quantity || 1}</p>
                        </div>
                      </div>
                      <div className="text-sm text-brand-text font-medium">
                        ₹{((item.price || 0) * (item.quantity || 1)).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Price calculations */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-muted">Subtotal</span>
                    <span className="text-brand-text">₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-muted">Delivery Fee</span>
                    <span className="text-brand-text">₹{deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-medium border-t border-brand-border pt-3">
                    <span className="text-brand-text">Total</span>
                    <span className="text-brand-text">₹{total.toFixed(2)}</span>
                  </div>
                </div>
                
                {/* Delivery time */}
                <div className="bg-brand-primary/10 p-4 rounded-md mb-6">
                  <div className="flex items-start mb-2">
                    <svg className="w-5 h-5 text-brand-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div>
                      <p className="text-sm font-medium text-brand-text">Estimated Delivery Time</p>
                      <p className="text-xs text-brand-muted">10 minutes after order is confirmed</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-xs text-brand-muted">
                  By placing your order, you agree to our <Link to="/terms" className="text-brand-primary">Terms of Service</Link> and <Link to="/privacy" className="text-brand-primary">Privacy Policy</Link>.
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage; 