import React, { useState } from 'react';
import { PageHeader, Card, Button } from '../../components/ui';
import companyInformation from '../../constants/companyInfo';
import theme from '../../config/theme';
import faqItems from '../../constants/FAQs';
import SEOHead from '../../components/seo/SEOHead';

const FAQsPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  
  // Extract unique categories
  const categories = ['All', ...new Set(faqItems.map(item => item.category))];
  
  // Filter FAQs by category
  const filteredFAQs = activeCategory === 'All' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  // Toggle FAQ
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <SEOHead 
        title="Frequently Asked Questions"
        description="Find answers to common questions about our 10-minute grocery delivery service, payment options, and more."
      />
      
      <div className="container mx-auto px-4 py-8">
        <PageHeader 
          title="Frequently Asked Questions" 
          subtitle="Find answers to common questions about our 10-minute delivery service"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'FAQs', href: '/faqs' }
          ]}
          metaTitle={`${companyInformation.name} - Frequently Asked Questions`}
          metaDescription="Find answers to common questions about our 10-minute grocery delivery, payment, returns, and more."
        />
        
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 my-8">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeCategory === category 
                  ? 'bg-brand-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Search box */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search for questions..."
            className="w-full md:w-1/2 px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-brand-primary"
            style={{ borderColor: theme.colors.brand.border }}
          />
        </div>
        
        {/* FAQ list */}
        <div className="mb-12">
          <Card className="divide-y" style={{ borderColor: theme.colors.brand.border }}>
            {filteredFAQs.map((faq, index) => (
              <div key={index} className="py-4">
                <button
                  className="flex justify-between items-center w-full px-4 py-2 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-medium text-brand-text">{faq.question}</h3>
                  <span 
                    className="ml-6 flex-shrink-0 transition-transform duration-200"
                    style={{ 
                      color: theme.colors.brand.primary,
                      transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>
                
                {/* FAQ answer */}
                <div 
                  className={`px-4 pt-2 pb-2 whitespace-pre-line text-brand-text overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </Card>
        </div>
        
        {/* Still have questions section */}
        <div className="mb-12">
          <Card className="p-6 text-center">
            <h2 className="text-xl font-bold mb-4" style={{ color: theme.colors.brand.primary }}>
              Still Have Questions?
            </h2>
            <p className="text-brand-text mb-6">
              Our customer support team is here to help with any questions about our 10-minute grocery delivery service. Reach out to us and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="solid" 
                leftIcon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                }
                onClick={() => window.location.href = `tel:${companyInformation.phone.replace(/[-\s]/g, '')}`}
              >
                Call Us
              </Button>
              <Button 
                variant="outline" 
                leftIcon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                }
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default FAQsPage; 