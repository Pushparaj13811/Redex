import React from 'react';
import { PageHeader, Card } from '../../components/ui';
import companyInformation from '../../constants/companyInfo';
import theme from '../../config/theme';
import privacySections from '../../constants/privacyInfo';

const PrivacyPage: React.FC = () => {
  // Define privacy policy sections
  
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="Privacy Policy" 
        subtitle="How we collect, use, and protect your information"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy', href: '/privacy' }
        ]}
        metaTitle={`${companyInformation.name} - Privacy Policy`}
        metaDescription="Learn about how we collect, use, and protect your information when you use our platform."
      />
      
      <div className="mt-8 mb-12">
        <Card className="p-6">
          <p className="text-brand-text mb-6">
            Last Updated: October 15, 2023
          </p>
          <p className="text-brand-text mb-8">
            At {companyInformation.name}, we value your privacy and are committed to protecting your personal information.
            This Privacy Policy explains how we collect, use, and safeguard your data when you use our website, mobile application,
            and services. By using our platform, you consent to the practices described in this policy.
          </p>
          
          {privacySections.map((section, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-xl font-semibold mb-3" style={{ color: theme.colors.brand.primary }}>
                {section.title}
              </h2>
              <div className="text-brand-text whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
          
          <div className="text-brand-muted mt-12 pt-6 border-t" style={{ borderColor: theme.colors.brand.border }}>
            <p>
              This privacy policy was last updated on October 15, 2023. If you have any questions about our privacy practices,
              please contact us at privacy@{companyInformation.name.toLowerCase()}.com.np.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPage; 