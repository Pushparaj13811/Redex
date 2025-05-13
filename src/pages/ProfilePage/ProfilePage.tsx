import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageHeader, Card, Button, FormControl, FormLabel, FormErrorMessage } from '../../components/ui';
import SEOHead from '../../components/seo/SEOHead';
import theme from '../../config/theme';
import useAuth from '../../hooks/useAuth';

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
  const navigate = useNavigate();
  const { user } = useAuth();
  
  // User profile state
  const [profile, setProfile] = useState<UserProfile>({
    firstName: user?.name?.split(' ')[0] || 'Demo',
    lastName: user?.name?.split(' ')[1] || 'Kumar',
    email: user?.email || 'demo@example.com',
    phone: '9876543210',
    dateOfBirth: '',
    gender: ''
  });

  // Form state for editing
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<UserProfile>(profile);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSaving, setIsSaving] = useState(false);

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

      <div className="max-w-7xl mx-auto">
        <PageHeader
          title="My Profile"
          subtitle="Manage your account information and delivery preferences"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Dashboard', href: '/dashboard' },
            { label: 'Profile' }
          ]}
        />

        {/* Profile Card */}
        <Card className="mb-6">
          <div className="p-6 border-b border-brand-border flex justify-between items-center">
            <div className="flex items-center">
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
        
        {/* Additional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <div className="p-6 border-b border-brand-border">
              <h2 className="text-xl font-semibold text-brand-text">Order History</h2>
            </div>
            <div className="p-6">
              <div className="text-center py-4">
                <p className="text-brand-muted mb-4">You haven't placed any orders yet.</p>
                <Button
                  variant="solid"
                  colorScheme="primary"
                  size="sm"
                  onClick={() => navigate('/shop')}
                >
                  Browse Products
                </Button>
              </div>
            </div>
          </Card>
          
          <Card>
            <div className="p-6 border-b border-brand-border">
              <h2 className="text-xl font-semibold text-brand-text">Saved Addresses</h2>
            </div>
            <div className="p-6">
              <div className="text-center py-4">
                <p className="text-brand-muted mb-4">You haven't saved any delivery addresses yet.</p>
                <Button
                  variant="solid"
                  colorScheme="primary"
                  size="sm"
                >
                  Add New Address
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ProfilePage; 