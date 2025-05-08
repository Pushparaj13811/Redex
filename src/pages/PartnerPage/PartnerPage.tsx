import React, { useState } from 'react';
import { PageHeader, Card, Button, Input, FormControl, FormLabel, FormErrorMessage } from '../../components/ui';
import companyInformation from '../../constants/companyInfo';
import theme from '../../config/theme';
import SEOHead from '../../components/seo/SEOHead';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  website: string;
  industry: string;
  partnershipType: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const PartnerPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    website: '',
    industry: '',
    partnershipType: 'Logistics Fleet',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const partnershipTypes = [
    'Logistics Fleet',
    'Storage Infrastructure',
    'Technology Solutions',
    'Supply Chain',
    'Corporate Alliance'
  ];

  const industryOptions = [
    'Logistics & Transportation',
    'Real Estate & Infrastructure',
    'Technology',
    'Manufacturing',
    'Retail',
    'Financial Services',
    'Supply Chain',
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
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (formData.phone && !/^[+]?[\d\s()-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.industry.trim()) newErrors.industry = 'Industry is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
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
        // Reset form after submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          companyName: '',
          website: '',
          industry: '',
          partnershipType: 'Logistics Fleet',
          message: ''
        });
      }, 1500);
    }
  };

  const partnerBenefits = [
    {
      title: 'Strategic Growth',
      description: 'Partner with Nepal\'s fastest-growing quick commerce platform and scale your business alongside our rapid expansion.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: 'Operational Excellence',
      description: 'Join forces with our technology-driven operations to optimize efficiency and deliver exceptional customer experiences.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Innovation Ecosystem',
      description: 'Collaborate on cutting-edge solutions that are redefining grocery delivery and transforming retail experiences.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Long-term Relationships',
      description: 'Build lasting business relationships with dedicated partnership management and collaborative growth planning.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  const partnershipTypes_detail = [
    {
      title: 'Logistics Fleet Partners',
      description: 'Join our delivery network with your vehicles and drivers to power our 10-minute delivery promise across neighborhoods.',
      requirements: [
        'Fleet of delivery vehicles (two-wheelers preferred)',
        'Trained and reliable delivery personnel',
        'Ability to integrate with our delivery management system',
        'Commitment to maintaining delivery SLAs and quality standards'
      ]
    },
    {
      title: 'Storage Infrastructure Partners',
      description: 'Help us expand our network of dark stores and micro-fulfillment centers with strategically located real estate.',
      requirements: [
        'Prime commercial properties in high-density residential areas',
        'Space suitable for conversion to dark store operations (1,000-3,000 sq ft)',
        'Proper power backup and basic infrastructure',
        'Accessible loading/unloading facilities',
        'Long-term lease arrangements'
      ]
    },
    {
      title: 'Technology Solution Providers',
      description: 'Provide innovative tech solutions that enhance our operational efficiency, customer experience, and business intelligence.',
      requirements: [
        'Expertise in retail tech, logistics software, or data analytics',
        'Scalable solutions with proven implementation success',
        'Integration capabilities with existing systems',
        'Ongoing support and development resources',
        'Security and compliance standards'
      ]
    },
    {
      title: 'Supply Chain Partners',
      description: 'Support our inventory management, procurement, and warehouse operations with specialized services and solutions.',
      requirements: [
        'Experience in quick commerce or grocery retail',
        'Cold chain capabilities for perishable goods',
        'Inventory management expertise',
        'Quality control systems',
        'Ability to handle high-frequency, small-batch operations'
      ]
    },
    {
      title: 'Corporate Alliances',
      description: 'Collaborate on strategic initiatives including co-branded experiences, loyalty programs, and enterprise delivery solutions.',
      requirements: [
        'Established brand with aligned customer demographics',
        'Complementary business model and values',
        'Executive-level engagement',
        'Resources dedicated to partnership success',
        'Long-term strategic vision'
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Partner With Redex"
        description="Join forces with Nepal's leading 10-minute grocery delivery platform. Explore partnership opportunities in logistics, infrastructure, and technology."
        keywords="business partnership, logistics partnership, grocery delivery partnership, quick commerce"
      />
      
      <div className="container mx-auto px-4 py-8">
        <PageHeader 
          title="Partner With Redex" 
          subtitle="Join forces with Nepal's leading quick commerce platform powering 10-minute delivery"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Partner With Us', href: '/partner' }
          ]}
          metaTitle={`${companyInformation.name} - Strategic Partnership Program`}
          metaDescription="Explore partnership opportunities with Redex to build the future of quick commerce, from logistics fleets to storage infrastructure and technology solutions."
        />
        
        {/* Quick Commerce Introduction */}
        <div className="mb-12">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.brand.primary }}>
              We're Building The Future of Retail
            </h2>
            <p className="text-brand-text mb-4">
              Redex is revolutionizing how people shop for groceries and essentials by delivering orders in just 10 minutes. 
              Unlike marketplaces, we own our inventory, operate our own dark stores, and manage the entire customer experience 
              from order to delivery.
            </p>
            <p className="text-brand-text mb-4">
              To scale this innovative model across Nepal, we're seeking strategic partners who can help us expand our infrastructure, 
              enhance our technological capabilities, and optimize our operational excellence.
            </p>
            <p className="text-brand-text font-medium">
              We don't onboard sellers to list products. Instead, we partner with companies that can help us strengthen our 
              logistics, storage, technology, and supply chain capabilities.
            </p>
          </Card>
        </div>
        
        {/* Partner Benefits */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: theme.colors.brand.primary }}>
            Why Partner With Redex
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerBenefits.map((benefit, index) => (
              <Card key={index} className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full p-4 mb-4" style={{ color: theme.colors.brand.primary, backgroundColor: `${theme.colors.brand.primaryLight}30` }}>
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: theme.colors.brand.text }}>
                  {benefit.title}
                </h3>
                <p className="text-brand-muted">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Partnership Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: theme.colors.brand.primary }}>
            Partnership Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnershipTypes_detail.map((type, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-3" style={{ color: theme.colors.brand.primary }}>
                  {type.title}
                </h3>
                <p className="text-brand-text mb-4">{type.description}</p>
                <h4 className="font-semibold mb-2" style={{ color: theme.colors.brand.text }}>Partner Requirements:</h4>
                <ul className="list-disc pl-5 text-brand-muted">
                  {type.requirements.map((req, idx) => (
                    <li key={idx} className="mb-1">{req}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Partner Form */}
        <div className="mb-12">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6" style={{ color: theme.colors.brand.primary }}>
              Become a Partner
            </h2>
            
            {submitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: theme.colors.brand.text }}>Thank You for Your Interest!</h3>
                <p className="text-brand-muted mb-4">
                  We've received your partnership request and our team will review it promptly. 
                  We typically respond within 2-3 business days to discuss next steps.
                </p>
                <Button
                  variant="solid"
                  onClick={() => setSubmitted(false)}
                  style={{ backgroundColor: theme.colors.brand.primary, color: theme.colors.brand.textLight }}
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormControl isRequired isInvalid={!!errors.firstName}>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      name="firstName"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      error={errors.firstName}
                    />
                    {errors.firstName && <FormErrorMessage>{errors.firstName}</FormErrorMessage>}
                  </FormControl>
                  
                  <FormControl isRequired isInvalid={!!errors.lastName}>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      name="lastName"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      error={errors.lastName}
                    />
                    {errors.lastName && <FormErrorMessage>{errors.lastName}</FormErrorMessage>}
                  </FormControl>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormControl isRequired isInvalid={!!errors.email}>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      error={errors.email}
                    />
                    {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
                  </FormControl>
                  
                  <FormControl isInvalid={!!errors.phone}>
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
                  
                  <FormControl>
                    <FormLabel>Website</FormLabel>
                    <Input
                      name="website"
                      placeholder="Enter your company website"
                      value={formData.website}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormControl isRequired isInvalid={!!errors.industry}>
                    <FormLabel>Industry</FormLabel>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border ${errors.industry ? 'border-brand-error' : 'border-brand-border'} rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary`}
                    >
                      <option value="">Select your industry</option>
                      {industryOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.industry && <FormErrorMessage>{errors.industry}</FormErrorMessage>}
                  </FormControl>
                  
                  <FormControl>
                    <FormLabel>Partnership Type</FormLabel>
                    <select
                      name="partnershipType"
                      value={formData.partnershipType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    >
                      {partnershipTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                </div>
                
                <FormControl isRequired isInvalid={!!errors.message} className="mb-6">
                  <FormLabel>Message</FormLabel>
                  <textarea
                    name="message"
                    placeholder="Tell us more about your company and how you'd like to partner with us"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-3 py-2 border ${errors.message ? 'border-brand-error' : 'border-brand-border'} rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary`}
                  ></textarea>
                  {errors.message && <FormErrorMessage>{errors.message}</FormErrorMessage>}
                </FormControl>
                
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    variant="solid"
                    isLoading={isSubmitting}
                    style={{ backgroundColor: theme.colors.brand.primary, color: theme.colors.brand.textLight }}
                  >
                    Submit Partnership Request
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

export default PartnerPage; 