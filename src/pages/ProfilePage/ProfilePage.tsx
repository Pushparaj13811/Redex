import React, { useState } from 'react';
import { PageHeader, Card, Button, FormControl, FormLabel, FormErrorMessage } from '../../components/ui';
import SEOHead from '../../components/seo/SEOHead';
import theme from '../../config/theme';

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatarUrl?: string;
  dateOfBirth?: string;
  gender?: 'male' | 'female' | 'other' | '';
}

interface FormErrors {
  [key: string]: string;
}

const ProfilePage: React.FC = () => {
  // User profile state
  const [profile, setProfile] = useState<UserProfile>({
    firstName: 'Demo',
    lastName: 'Kumar',
    email: 'demo@example.com',
    phone: '9876543210',
    dateOfBirth: '',
    gender: ''
  });

  // Form state for editing
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<UserProfile>(profile);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSaving, setIsSaving] = useState(false);

  // State for tab navigation
  const [activeTab, setActiveTab] = useState('profile');

  // Generate initials for avatar
  const getInitials = () => {
    return `${profile.firstName.charAt(0)}${profile.lastName.charAt(0)}`.toUpperCase();
  };

  // Handle input changes
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

  // Validate form
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSaving(true);
      
      // Simulate API call
      setTimeout(() => {
        setProfile(formData);
        setIsEditing(false);
        setIsSaving(false);
      }, 1000);
    }
  };

  // Handle cancel edit
  const handleCancelEdit = () => {
    setFormData(profile);
    setIsEditing(false);
    setErrors({});
  };

  return (
    <>
      <SEOHead
        title="Profile"
        description="Manage your account profile for 10-minute grocery delivery service. Update your preferences and delivery details."
        keywords="user profile, account settings, delivery preferences"
        noIndex={true}
      />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <PageHeader
          title="My Profile"
          subtitle="Manage your account information and delivery preferences"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Dashboard', href: '/dashboard' },
            { label: 'Profile' }
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div>
            <Card className="mb-6">
              <div className="p-6 flex items-center">
                {profile.avatarUrl ? (
                  <img
                    src={profile.avatarUrl}
                    alt={`${profile.firstName} ${profile.lastName}`}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                ) : (
                  <div
                    className="w-16 h-16 rounded-full mr-4 flex items-center justify-center"
                    style={{
                      backgroundColor: theme.colors.brand.primary + '20',
                      color: theme.colors.brand.primary
                    }}
                  >
                    <span className="text-xl font-semibold">{getInitials()}</span>
                  </div>
                )}
                <div>
                  <h2 className="font-semibold text-brand-text">{profile.firstName} {profile.lastName}</h2>
                  <p className="text-sm text-brand-muted">{profile.email}</p>
                </div>
              </div>

              <nav className="border-t border-brand-border">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full text-left px-6 py-3 flex items-center ${
                    activeTab === 'profile'
                      ? 'text-brand-primary bg-brand-primary/5 border-l-2 border-brand-primary'
                      : 'text-brand-text hover:bg-brand-surface'
                  }`}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Personal Information
                </button>
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full text-left px-6 py-3 flex items-center ${
                    activeTab === 'orders'
                      ? 'text-brand-primary bg-brand-primary/5 border-l-2 border-brand-primary'
                      : 'text-brand-text hover:bg-brand-surface'
                  }`}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Order History
                </button>
                <button
                  onClick={() => setActiveTab('addresses')}
                  className={`w-full text-left px-6 py-3 flex items-center ${
                    activeTab === 'addresses'
                      ? 'text-brand-primary bg-brand-primary/5 border-l-2 border-brand-primary'
                      : 'text-brand-text hover:bg-brand-surface'
                  }`}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Addresses
                </button>
                <button
                  onClick={() => setActiveTab('payment')}
                  className={`w-full text-left px-6 py-3 flex items-center ${
                    activeTab === 'payment'
                      ? 'text-brand-primary bg-brand-primary/5 border-l-2 border-brand-primary'
                      : 'text-brand-text hover:bg-brand-surface'
                  }`}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  Payment Methods
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full text-left px-6 py-3 flex items-center ${
                    activeTab === 'settings'
                      ? 'text-brand-primary bg-brand-primary/5 border-l-2 border-brand-primary'
                      : 'text-brand-text hover:bg-brand-surface'
                  }`}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Account Settings
                </button>
              </nav>
            </Card>

            <Card className="p-6 bg-brand-primary/10">
              <div className="flex items-center space-x-2 text-brand-primary mb-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <h3 className="font-medium">Need Help?</h3>
              </div>
              <p className="text-sm text-brand-text mb-3">
                Have questions about your account or orders? Our support team is here to help.
              </p>
              <Button
                variant="solid"
                colorScheme="primary"
                size="sm"
                className="w-full"
              >
                Contact Support
              </Button>
            </Card>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <Card>
                <div className="p-6 border-b border-brand-border flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-brand-text">Personal Information</h2>
                  {!isEditing && (
                    <Button
                      variant="outline"
                      colorScheme="primary"
                      size="sm"
                      onClick={() => setIsEditing(true)}
                    >
                      Edit Profile
                    </Button>
                  )}
                </div>
                <div className="p-6">
                  {isEditing ? (
                    /* Edit Form */
                    <form onSubmit={handleSave}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <FormControl>
                          <FormLabel htmlFor="dateOfBirth">Date of Birth</FormLabel>
                          <input
                            id="dateOfBirth"
                            name="dateOfBirth"
                            type="date"
                            value={formData.dateOfBirth || ''}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                          />
                        </FormControl>
                        
                        <FormControl>
                          <FormLabel htmlFor="gender">Gender</FormLabel>
                          <select
                            id="gender"
                            name="gender"
                            value={formData.gender || ''}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                          >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </FormControl>
                      </div>
                      
                      <div className="flex justify-end space-x-3">
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={handleCancelEdit}
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          variant="solid"
                          colorScheme="primary"
                          isLoading={isSaving}
                        >
                          {isSaving ? 'Saving...' : 'Save Changes'}
                        </Button>
                      </div>
                    </form>
                  ) : (
                    /* Profile Display */
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-medium text-brand-muted mb-1">Name</h3>
                        <p className="text-brand-text">{profile.firstName} {profile.lastName}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-brand-muted mb-1">Email</h3>
                        <p className="text-brand-text">{profile.email}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-brand-muted mb-1">Phone</h3>
                        <p className="text-brand-text">{profile.phone}</p>
                      </div>
                      {profile.dateOfBirth && (
                        <div>
                          <h3 className="text-sm font-medium text-brand-muted mb-1">Date of Birth</h3>
                          <p className="text-brand-text">{profile.dateOfBirth}</p>
                        </div>
                      )}
                      {profile.gender && (
                        <div>
                          <h3 className="text-sm font-medium text-brand-muted mb-1">Gender</h3>
                          <p className="text-brand-text">{profile.gender.charAt(0).toUpperCase() + profile.gender.slice(1)}</p>
                        </div>
                      )}
                      <div className="pt-4 border-t border-brand-border">
                        <h3 className="text-sm font-medium text-brand-muted mb-3">Account Security</h3>
                        <Button variant="outline" colorScheme="primary" size="sm">
                          Change Password
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <Card>
                <div className="p-6 border-b border-brand-border">
                  <h2 className="text-xl font-semibold text-brand-text">Order History</h2>
                </div>
                <div className="px-6 py-4 border-b border-brand-border flex items-center">
                  <input 
                    type="search"
                    placeholder="Search orders..."
                    className="flex-grow px-4 py-2 border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                  <Button variant="solid" colorScheme="primary" className="ml-3">
                    Search
                  </Button>
                </div>
                <div className="p-6">
                  <div className="text-center py-8">
                    <div className="text-5xl mb-4">📦</div>
                    <h3 className="text-lg font-medium text-brand-text mb-2">No orders yet</h3>
                    <p className="text-brand-muted mb-6">
                      You haven't placed any orders yet. Start shopping and your orders will appear here.
                    </p>
                    <Button
                      variant="solid"
                      colorScheme="primary"
                    >
                      Browse Products
                    </Button>
                  </div>
                </div>
              </Card>
            )}

            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <Card>
                <div className="p-6 border-b border-brand-border flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-brand-text">Saved Addresses</h2>
                  <Button variant="solid" colorScheme="primary" size="sm">
                    Add New Address
                  </Button>
                </div>
                <div className="p-6">
                  <div className="text-center py-8">
                    <div className="text-5xl mb-4">📍</div>
                    <h3 className="text-lg font-medium text-brand-text mb-2">No addresses saved</h3>
                    <p className="text-brand-muted mb-6">
                      You haven't saved any delivery addresses yet. Add an address for faster checkout.
                    </p>
                    <Button
                      variant="solid"
                      colorScheme="primary"
                    >
                      Add New Address
                    </Button>
                  </div>
                </div>
              </Card>
            )}

            {/* Payment Tab */}
            {activeTab === 'payment' && (
              <Card>
                <div className="p-6 border-b border-brand-border flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-brand-text">Payment Methods</h2>
                  <Button variant="solid" colorScheme="primary" size="sm">
                    Add Payment Method
                  </Button>
                </div>
                <div className="p-6">
                  <div className="text-center py-8">
                    <div className="text-5xl mb-4">💳</div>
                    <h3 className="text-lg font-medium text-brand-text mb-2">No payment methods</h3>
                    <p className="text-brand-muted mb-6">
                      You haven't saved any payment methods. Add a payment method for faster checkout.
                    </p>
                    <Button
                      variant="solid"
                      colorScheme="primary"
                    >
                      Add Payment Method
                    </Button>
                  </div>
                </div>
              </Card>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <Card>
                <div className="p-6 border-b border-brand-border">
                  <h2 className="text-xl font-semibold text-brand-text">Account Settings</h2>
                </div>
                <div className="divide-y divide-brand-border">
                  <div className="p-6 flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-brand-text">Notifications</h3>
                      <p className="text-sm text-brand-muted">Manage how you receive alerts and updates</p>
                    </div>
                    <Button variant="outline" colorScheme="primary" size="sm">
                      Configure
                    </Button>
                  </div>
                  
                  <div className="p-6 flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-brand-text">Privacy Settings</h3>
                      <p className="text-sm text-brand-muted">Control how your information is used</p>
                    </div>
                    <Button variant="outline" colorScheme="primary" size="sm">
                      Manage
                    </Button>
                  </div>
                  
                  <div className="p-6 flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-brand-text">Premium Membership</h3>
                      <p className="text-sm text-brand-muted">Get free delivery on all orders and exclusive offers</p>
                    </div>
                    <Button variant="solid" colorScheme="primary" size="sm">
                      Join Now
                    </Button>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-medium text-brand-text mb-4">Delete Account</h3>
                    <p className="text-sm text-brand-muted mb-4">
                      Permanently delete your account and all associated data. This action cannot be undone.
                    </p>
                    <Button variant="ghost" colorScheme="error" size="sm">
                      Delete Account
                    </Button>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage; 