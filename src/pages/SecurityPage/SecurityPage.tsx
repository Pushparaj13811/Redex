import React from 'react';
import { PageHeader, Card } from '../../components/ui';
import companyInformation from '../../constants/companyInfo';
import theme from '../../config/theme';
import securitySections from '../../constants/security';

const SecurityPage: React.FC = () => {
  // Define security sections
 

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="Security Measures" 
        subtitle="How we protect your data and secure your transactions"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Security', href: '/security' }
        ]}
        metaTitle={`${companyInformation.name} - Security Measures`}
        metaDescription="Learn about our comprehensive security measures to protect your personal information, payment details, and account data."
      />
      
      <div className="mt-8 mb-12">
        <Card className="p-6">
          <p className="text-brand-text mb-8">
            At {companyInformation.name}, your security is our top priority. We implement comprehensive security measures 
            to protect your personal information, payment details, and ensure safe transactions. This page outlines 
            our security practices and provides information on how we safeguard your data.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securitySections.map((section, index) => (
              <div key={index} className="border rounded-lg p-6" style={{ borderColor: theme.colors.brand.border }}>
                <div className="flex items-start mb-4">
                  <div className="mr-4" style={{ color: theme.colors.brand.primary }}>
                    {React.createElement(section.icon)}
                  </div>
                  <h2 className="text-xl font-semibold" style={{ color: theme.colors.brand.primary }}>
                    {section.title}
                  </h2>
                </div>
                <div className="text-brand-text whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 rounded-lg" style={{ backgroundColor: `${theme.colors.brand.primaryLight}10` }}>
            <h2 className="text-xl font-semibold mb-4" style={{ color: theme.colors.brand.primary }}>
              Report a Security Concern
            </h2>
            <p className="text-brand-text mb-4">
              If you have identified a potential security vulnerability or have concerns about the security of your account, 
              please contact our security team immediately.
            </p>
            <p className="text-brand-text">
              Email: security@{companyInformation.name.toLowerCase()}.com.np<br />
              Phone: {companyInformation.phone}<br />
              We take all security reports seriously and will investigate promptly.
            </p>
          </div>
          
          <div className="text-brand-muted mt-12 pt-6 border-t" style={{ borderColor: theme.colors.brand.border }}>
            <p>
              Our security practices are regularly reviewed and updated to address emerging threats and vulnerabilities. 
              This security information was last updated on October 15, 2023.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SecurityPage; 