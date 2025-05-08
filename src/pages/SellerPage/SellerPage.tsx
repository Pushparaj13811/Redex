import React, { useState } from 'react';
import { PageHeader, Card, Button, Input, FormControl, FormLabel, FormErrorMessage } from '../../components/ui';
import companyInformation from '../../constants/companyInfo';
import theme from '../../config/theme';
import SEOHead from '../../components/seo/SEOHead';

interface FormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  website: string;
  category: string;
  productDetails: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const SellerPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    category: '',
    productDetails: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const categoryOptions = [
    'Fruits & Vegetables',
    'Bakery & Dairy',
    'Grocery Staples',
    'Snacks & Packaged Foods',
    'Beverages',
    'Personal Care',
    'Home Essentials',
    'Baby & Pet Care',
    'Specialty Foods',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.contactName.trim()) newErrors.contactName = 'Contact name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]?[\d\s()-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.category.trim()) newErrors.category = 'Category is required';
    if (!formData.productDetails.trim()) newErrors.productDetails = 'Product details are required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 1500);
    }
  };

  const qualityProcessSteps = [
    {
      title: 'Rigorous Supplier Selection',
      description: 'We partner only with suppliers who meet our strict quality, safety, and ethical standards through a comprehensive vetting process.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Expert Product Curation',
      description: 'Our product team carefully selects each item based on quality, freshness, market demand, and alignment with our customers\' needs.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      )
    },
    {
      title: 'Quality Assurance',
      description: 'Every product undergoes thorough quality checks at multiple stages from sourcing to shelf placement in our dark stores.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      title: 'Direct Inventory Management',
      description: 'We own and manage our inventory, maintaining optimal stock levels and freshness through advanced inventory systems.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      )
    }
  ];

  const supplierRequirements = [
    {
      category: 'Quality Standards',
      requirements: [
        'Adherence to industry quality certifications relevant to product category',
        'Batch testing and quality control documentation',
        'Clean production facilities meeting health and safety regulations',
        'Transparency in ingredient sourcing and manufacturing processes'
      ]
    },
    {
      category: 'Operational Capabilities',
      requirements: [
        'Consistent production capacity to meet demand',
        'Reliable order fulfillment within agreed timelines',
        'Digital inventory and order management systems',
        'Flexible production scaling based on demand forecasts'
      ]
    },
    {
      category: 'Documentation & Compliance',
      requirements: [
        'Product certifications and safety testing records',
        'Legal business registration and licenses',
        'Tax compliance documentation',
        'Insurance coverage appropriate to products supplied'
      ]
    },
    {
      category: 'Logistics & Packaging',
      requirements: [
        'Appropriate packaging that maintains product integrity during transport',
        'Clear labeling with required legal information',
        'Ability to deliver to our designated receiving centers',
        'Cold chain maintenance where applicable'
      ]
    }
  ];

  const statistics = [
    { value: '750+', label: 'Product SKUs' },
    { value: '98%', label: 'On-time Delivery' },
    { value: '30+', label: 'Quality Checks' },
    { value: '15 min', label: 'Avg. Order Fulfillment' }
  ];

  return (
    <>
      <SEOHead 
        title="Product Sourcing"
        description="Learn about Redex's direct inventory model for 10-minute grocery delivery and how we curate quality products for our customers."
        keywords="grocery sourcing, direct inventory model, product selection, quality groceries"
      />
      
      <div className="container mx-auto px-4 py-8">
        <PageHeader 
          title="Our Product Sourcing Approach" 
          subtitle="How we curate quality products for 10-minute delivery"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Product Sourcing', href: '/seller' }
          ]}
          metaTitle={`${companyInformation.name} - Product Sourcing & Curation`}
          metaDescription="Learn about Redex's direct inventory model and how we carefully source, curate, and quality-check every product to deliver the best to your doorstep."
        />
        
        {/* Business Model Explanation */}
        <div className="mb-12">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.brand.primary }}>
              Our Direct Inventory Model
            </h2>
            <p className="text-brand-text mb-4">
              Unlike traditional marketplaces, Redex operates on a direct inventory model. We source, purchase, and own all products available 
              on our platform, which we carefully store in our network of dark stores for lightning-fast delivery.
            </p>
            <p className="text-brand-text mb-4 font-medium">
              We do not operate as a marketplace where individual sellers can register and list their products. 
              This approach allows us complete control over product quality, availability, and the 10-minute delivery promise we make to our customers.
            </p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold mb-1" style={{ color: theme.colors.brand.primary }}>{stat.value}</div>
                  <div className="text-sm text-brand-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        {/* Quality Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: theme.colors.brand.primary }}>
            Our Quality-First Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityProcessSteps.map((step, index) => (
              <Card key={index} className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full p-4 mb-4" style={{ color: theme.colors.brand.primary, backgroundColor: `${theme.colors.brand.primaryLight}20` }}>
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: theme.colors.brand.text }}>
                  {step.title}
                </h3>
                <p className="text-brand-muted">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Supplier Requirements */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: theme.colors.brand.primary }}>
            Our Supplier Selection Criteria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supplierRequirements.map((requirement, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-3" style={{ color: theme.colors.brand.primary }}>
                  {requirement.category}
                </h3>
                <ul className="list-disc pl-5 text-brand-muted">
                  {requirement.requirements.map((req, idx) => (
                    <li key={idx} className="mb-2">{req}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnership Form */}
        <div className="mb-12">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6" style={{ color: theme.colors.brand.primary }}>
              Supply Partnership Inquiry
            </h2>
            <p className="text-brand-text mb-6">
              While we don't have an open marketplace for sellers, we're always looking for exceptional suppliers who can provide high-quality 
              products that meet our standards. If you're a manufacturer or distributor interested in a wholesale supply partnership, please 
              share your details below.
            </p>
            
            {submitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: theme.colors.brand.text }}>Thank You For Your Interest!</h3>
                <p className="text-brand-muted mb-4">
                  We've received your supply partnership inquiry. Our procurement team reviews all inquiries based on our current needs and 
                  expansion plans. If there's a potential fit, we'll contact you within 14 business days.
                </p>
                <Button
                  variant="solid"
                  onClick={() => setSubmitted(false)}
                  style={{ backgroundColor: theme.colors.brand.primary, color: theme.colors.brand.textLight }}
                >
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormControl isRequired isInvalid={!!errors.companyName}>
                    <FormLabel>Company Name</FormLabel>
                    <Input
                      name="companyName"
                      placeholder="Enter your company name"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      error={errors.companyName}
                    />
                    {errors.companyName && <FormErrorMessage>{errors.companyName}</FormErrorMessage>}
                  </FormControl>
                  
                  <FormControl isRequired isInvalid={!!errors.contactName}>
                    <FormLabel>Contact Person</FormLabel>
                    <Input
                      name="contactName"
                      placeholder="Enter contact person's name"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      error={errors.contactName}
                    />
                    {errors.contactName && <FormErrorMessage>{errors.contactName}</FormErrorMessage>}
                  </FormControl>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormControl isRequired isInvalid={!!errors.email}>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Enter your business email"
                      value={formData.email}
                      onChange={handleInputChange}
                      error={errors.email}
                    />
                    {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
                  </FormControl>
                  
                  <FormControl isRequired isInvalid={!!errors.phone}>
                    <FormLabel>Phone Number</FormLabel>
                    <Input
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      error={errors.phone}
                    />
                    {errors.phone && <FormErrorMessage>{errors.phone}</FormErrorMessage>}
                  </FormControl>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormControl>
                    <FormLabel>Website</FormLabel>
                    <Input
                      name="website"
                      placeholder="Enter your company website"
                      value={formData.website}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  
                  <FormControl isRequired isInvalid={!!errors.category}>
                    <FormLabel>Product Category</FormLabel>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border ${errors.category ? 'border-brand-error' : 'border-brand-border'} rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary`}
                    >
                      <option value="">Select product category</option>
                      {categoryOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.category && <FormErrorMessage>{errors.category}</FormErrorMessage>}
                  </FormControl>
                </div>
                
                <FormControl isRequired isInvalid={!!errors.productDetails} className="mb-6">
                  <FormLabel>Product Details</FormLabel>
                  <textarea
                    name="productDetails"
                    placeholder="Describe your products, pricing structure, production capacity, etc."
                    value={formData.productDetails}
                    onChange={handleInputChange}
                    rows={3}
                    className={`w-full px-3 py-2 border ${errors.productDetails ? 'border-brand-error' : 'border-brand-border'} rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary`}
                  ></textarea>
                  {errors.productDetails && <FormErrorMessage>{errors.productDetails}</FormErrorMessage>}
                </FormControl>
                
                <FormControl className="mb-6">
                  <FormLabel>Additional Information</FormLabel>
                  <textarea
                    name="message"
                    placeholder="Any other information that might be relevant to your inquiry"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  ></textarea>
                </FormControl>
                
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    variant="solid"
                    isLoading={isSubmitting}
                    style={{ backgroundColor: theme.colors.brand.primary, color: theme.colors.brand.textLight }}
                  >
                    Submit Supply Inquiry
                  </Button>
                </div>
              </form>
            )}
          </Card>
        </div>
      </div>
    </>
  );
};

export default SellerPage; 