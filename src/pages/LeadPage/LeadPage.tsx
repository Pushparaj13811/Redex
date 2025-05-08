import React, { useState } from 'react';
import { PageHeader, Card, Button, Input, FormControl, FormLabel, FormHelperText, FormErrorMessage } from '../../components/ui';
import companyInformation from '../../constants/companyInfo';
import theme from '../../config/theme';
import type { FormData, FormErrors } from '../../types/leadPage';
import SEOHead from '../../components/seo/SEOHead';

const LeadPage: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        interest: 'Partnership',
        message: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const interests = [
        'Partnership',
        'Business Inquiry',
        'Bulk Order',
        'Franchise',
        'Investment',
        'Other',
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Clear error when field is edited
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: '',
            }));
        }
    };

    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        // Required fields
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Phone validation (optional but if provided, validate)
        if (formData.phone && !/^[+]?[\d\s()-]{8,15}$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        if (!formData.company.trim()) newErrors.company = 'Company name is required';
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
                    company: '',
                    position: '',
                    interest: 'Partnership',
                    message: '',
                });
            }, 1500);
        }
    };

    return (
        <>
            <SEOHead 
                title="Business Leads"
                description="Explore business opportunities with Redex, Nepal's premier 10-minute grocery delivery platform. Submit your inquiry for partnerships and collaborations."
                keywords="business leads, partnership, collaboration, grocery delivery business, 10-minute delivery"
            />
            
            <div className="container mx-auto px-4 py-8">
                <PageHeader
                    title="Business Leads"
                    subtitle="Partner with Nepal's leading 10-minute grocery delivery platform"
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Business Leads', href: '/lead' }
                    ]}
                    metaTitle={`${companyInformation.name} - Business Leads & Partnerships`}
                    metaDescription="Explore business opportunities with Redex. Fill out our form to get started with partnerships, bulk orders, franchising, and more."
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                    <div className="lg:col-span-2">
                        <Card className="p-6">
                            <h2 className="text-2xl font-bold mb-6" style={{ color: theme.colors.brand.primary }}>Submit Your Inquiry</h2>

                            {submitted ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-brand-success" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2" style={{ color: theme.colors.brand.text }}>Thank You!</h3>
                                    <p className="text-brand-muted mb-6">
                                        We've received your business inquiry. Our team will review it and get back to you within 2 business days.
                                    </p>
                                    <Button
                                        variant="outline"
                                        onClick={() => setSubmitted(false)}
                                    >
                                        Submit Another Inquiry
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <FormControl isRequired>
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

                                        <FormControl isRequired>
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

                                        <FormControl>
                                            <FormLabel>Phone</FormLabel>
                                            <Input
                                                type="tel"
                                                name="phone"
                                                placeholder="Enter your phone number"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                error={errors.phone}
                                            />
                                            {errors.phone && <FormErrorMessage>{errors.phone}</FormErrorMessage>}
                                            {!errors.phone && <FormHelperText>Optional, but recommended for faster communication</FormHelperText>}
                                        </FormControl>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <FormControl isRequired>
                                            <FormLabel>Company</FormLabel>
                                            <Input
                                                name="company"
                                                placeholder="Enter your company name"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                error={errors.company}
                                            />
                                            {errors.company && <FormErrorMessage>{errors.company}</FormErrorMessage>}
                                        </FormControl>

                                        <FormControl>
                                            <FormLabel>Position</FormLabel>
                                            <Input
                                                name="position"
                                                placeholder="Enter your job title"
                                                value={formData.position}
                                                onChange={handleInputChange}
                                            />
                                        </FormControl>
                                    </div>

                                    <div className="mb-6">
                                        <FormControl>
                                            <FormLabel>Area of Interest</FormLabel>
                                            <select
                                                name="interest"
                                                value={formData.interest}
                                                onChange={handleInputChange}
                                                className="w-full rounded-md border border-brand-border bg-white text-brand-text px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                            >
                                                {interests.map((interest) => (
                                                    <option key={interest} value={interest}>
                                                        {interest}
                                                    </option>
                                                ))}
                                            </select>
                                        </FormControl>
                                    </div>

                                    <div className="mb-6">
                                        <FormControl isRequired>
                                            <FormLabel>Message</FormLabel>
                                            <textarea
                                                name="message"
                                                placeholder="Please describe your business inquiry in detail"
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
                                            Submit Inquiry
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </Card>
                    </div>

                    <div>
                        <Card className="p-6 mb-6">
                            <h2 className="text-xl font-bold mb-4" style={{ color: theme.colors.brand.primary }}>Why Partner With Us</h2>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="mr-2 text-brand-success">✓</span>
                                    <span>Access to our growing customer base across Nepal</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-brand-success">✓</span>
                                    <span>Fast, reliable delivery infrastructure</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-brand-success">✓</span>
                                    <span>Technology-driven operations for maximum efficiency</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-brand-success">✓</span>
                                    <span>Dedicated business relationship manager</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-brand-success">✓</span>
                                    <span>Transparent terms and pricing structure</span>
                                </li>
                            </ul>
                        </Card>

                        <Card className="p-6">
                            <h2 className="text-xl font-bold mb-4" style={{ color: theme.colors.brand.primary }}>Contact Information</h2>
                            <div className="space-y-4">
                                <div>
                                    <p className="font-medium">Business Development</p>
                                    <p className="text-brand-muted">business@redex.com.np</p>
                                </div>
                                <div>
                                    <p className="font-medium">Head Office</p>
                                    <p className="text-brand-muted">{companyInformation.address}</p>
                                </div>
                                <div>
                                    <p className="font-medium">Phone</p>
                                    <p className="text-brand-muted">{companyInformation.phone}</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LeadPage; 