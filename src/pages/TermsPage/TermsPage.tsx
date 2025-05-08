import React from 'react';
import { PageHeader, Card } from '../../components/ui';
import companyInformation from '../../constants/companyInfo';
import theme from '../../config/theme';
import termsSections from '../../constants/termsConditions';

const TermsPage: React.FC = () => {
  // Define terms sections
  
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="Terms of Service" 
        subtitle="Rules and guidelines for using our platform"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Terms of Service', href: '/terms' }
        ]}
        metaTitle={`${companyInformation.name} - Terms of Service`}
        metaDescription="Read our Terms of Service to understand the rules and guidelines for using our platform."
      />
      
      <div className="mt-8 mb-12">
        <Card className="p-6">
          <p className="text-brand-text mb-6">
            Last Updated: October 15, 2023
          </p>
          <p className="text-brand-text mb-8">
            Welcome to {companyInformation.name}. These Terms of Service govern your use of our website, mobile 
            application, and services. By accessing or using our platform, you agree to be bound by these terms. 
            Please read them carefully.
          </p>
          
          {termsSections.map((section, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-xl font-semibold mb-3" style={{ color: theme.colors.brand.primary }}>
                {index + 1}. {section.title}
              </h2>
              <div className="text-brand-text whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
          
          <div className="text-brand-muted mt-12 pt-6 border-t" style={{ borderColor: theme.colors.brand.border }}>
            <p>
              These Terms of Service were last updated on October 15, 2023. If you have any questions about our terms,
              please contact us at legal@{companyInformation.name.toLowerCase()}.com.np.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TermsPage; 