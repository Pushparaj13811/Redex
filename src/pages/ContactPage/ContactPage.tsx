import React, { useState } from 'react';
import { PageHeader, Card, Button, Input, FormControl, FormLabel, FormErrorMessage } from '../../components/ui';
import companyInformation from '../../constants/companyInfo';
import theme from '../../config/theme';
import { contactMethods, officeLocations, socialMediaPlatforms, contactFAQs } from '../../constants/contactInfo';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  department: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    department: 'Customer Support'
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const departments = [
    'Customer Support',
    'Business Inquiries',
    'Media & Press',
    'Technical Support'
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
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (formData.phone && !/^[+]?[\d\s()-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
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
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          department: 'Customer Support'
        });
      }, 1500);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="Contact Us" 
        subtitle="We're here to help with any questions or concerns"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us', href: '/contact' }
        ]}
        metaTitle={`${companyInformation.name} - Contact Us`}
        metaDescription="Get in touch with our team. We're here to answer your questions, address concerns, and provide the support you need."
      />
      
      {/* Contact cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {contactMethods.map((method, index) => (
          <Card key={index} className="p-5">
            <div className="flex items-start mb-3">
              <div className="mr-3" style={{ color: theme.colors.brand.primary }}>
                <method.icon />
              </div>
              <h3 className="text-lg font-semibold" style={{ color: theme.colors.brand.text }}>
                {method.title}
              </h3>
            </div>
            <p className="text-brand-muted text-sm mb-3">{method.description}</p>
            <div className="mt-4">
              <p className="text-brand-text mb-1">
                <strong>Email:</strong> {method.email}
              </p>
              <p className="text-brand-text mb-1">
                <strong>Phone:</strong> {method.phone}
              </p>
              <p className="text-brand-muted text-xs">
                <strong>Hours:</strong> {method.hours}
              </p>
            </div>
          </Card>
        ))}
      </div>
      
      {/* Contact Form & Map */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-6" style={{ color: theme.colors.brand.primary }}>
              Send Us a Message
            </h2>
            
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-success" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: theme.colors.brand.text }}>
                  Thank You!
                </h3>
                <p className="text-brand-muted mb-6">
                  Your message has been sent successfully. We'll get back to you within 24 hours.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormControl isRequired>
                    <FormLabel>Full Name</FormLabel>
                    <Input
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      error={errors.name}
                    />
                    {errors.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
                  </FormControl>
                  
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      error={errors.email}
                    />
                    {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
                  </FormControl>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormControl>
                    <FormLabel>Phone Number</FormLabel>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number (optional)"
                      value={formData.phone}
                      onChange={handleInputChange}
                      error={errors.phone}
                    />
                    {errors.phone && <FormErrorMessage>{errors.phone}</FormErrorMessage>}
                  </FormControl>
                  
                  <FormControl>
                    <FormLabel>Department</FormLabel>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-brand-border bg-white text-brand-text h-10 px-4 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    >
                      {departments.map(dept => (
                        <option key={dept} value={dept}>
                          {dept}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                </div>
                
                <div className="mb-6">
                  <FormControl isRequired>
                    <FormLabel>Subject</FormLabel>
                    <Input
                      name="subject"
                      placeholder="Enter the subject of your message"
                      value={formData.subject}
                      onChange={handleInputChange}
                      error={errors.subject}
                    />
                    {errors.subject && <FormErrorMessage>{errors.subject}</FormErrorMessage>}
                  </FormControl>
                </div>
                
                <div className="mb-6">
                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>
                    <textarea
                      name="message"
                      placeholder="Please type your message here"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full rounded-md border ${errors.message ? 'border-brand-error' : 'border-brand-border'} bg-white text-brand-text px-4 py-2 focus:outline-none focus:ring-2 ${errors.message ? 'focus:ring-brand-error' : 'focus:ring-brand-primary'}`}
                    />
                    {errors.message && <FormErrorMessage>{errors.message}</FormErrorMessage>}
                  </FormControl>
                </div>
                
                <div className="flex justify-end">
                  <Button 
                    type="submit" 
                    variant="solid" 
                    size="lg"
                    isLoading={isSubmitting}
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            )}
          </Card>
        </div>
        
        <div>
          <Card className="p-6 mb-6">
            <h2 className="text-xl font-bold mb-4" style={{ color: theme.colors.brand.primary }}>
              Office Locations
            </h2>
            <div className="space-y-6">
              {officeLocations.map((office, index) => (
                <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0" style={{ borderColor: theme.colors.brand.border }}>
                  <h3 className="font-semibold mb-2" style={{ color: theme.colors.brand.text }}>
                    {office.name}
                  </h3>
                  <p className="text-brand-muted text-sm mb-2">{office.address}</p>
                  <p className="text-brand-text text-sm mb-1">
                    <strong>Phone:</strong> {office.phone}
                  </p>
                  <p className="text-brand-text text-sm mb-1">
                    <strong>Email:</strong> {office.email}
                  </p>
                  <p className="text-brand-muted text-xs mb-3">
                    <strong>Hours:</strong> {office.hours}
                  </p>
                </div>
              ))}
            </div>
          </Card>
          
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4" style={{ color: theme.colors.brand.primary }}>
              Connect With Us
            </h2>
            <p className="text-brand-muted mb-4 text-sm">
              Follow us on social media for updates, offers, and more.
            </p>
            <div className="flex space-x-4">
              {socialMediaPlatforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition-colors duration-200 hover:bg-gray-100"
                  style={{ color: theme.colors.brand.primary }}
                  aria-label={`Visit our ${platform.name}`}
                >
                  <platform.icon />
                </a>
              ))}
            </div>
          </Card>
        </div>
      </div>
      
      {/* Maps */}
      <div className="mb-12">
        <h2 className="text-xl font-bold mb-6" style={{ color: theme.colors.brand.primary }}>
          Find Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {officeLocations.map((office, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="p-4">
                <h3 className="font-semibold mb-2" style={{ color: theme.colors.brand.text }}>
                  {office.name}
                </h3>
                <p className="text-brand-muted text-sm">{office.address}</p>
              </div>
              <div className="h-80 w-full">
                <iframe 
                  src={office.mapUrl}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy"
                  title={`Map showing location of ${office.name}`}
                ></iframe>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {/* FAQs */}
      <div className="mb-12">
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6" style={{ color: theme.colors.brand.primary }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {contactFAQs.map((faq, index) => (
              <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0" style={{ borderColor: theme.colors.brand.border }}>
                <h3 className="font-semibold mb-2" style={{ color: theme.colors.brand.text }}>
                  {faq.question}
                </h3>
                <p className="text-brand-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage; 