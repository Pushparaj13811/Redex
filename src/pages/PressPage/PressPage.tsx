import React from 'react';
import { PageHeader, Card, Button } from '../../components/ui';
import companyInformation from '../../constants/companyInfo';
import theme from '../../config/theme';
import SEOHead from '../../components/seo/SEOHead';

const PressPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Press & Media"
        description="Stay up to date with the latest news and announcements from Redex, Nepal's leading 10-minute grocery delivery platform."
      />
      
      <div className="container mx-auto px-4 py-8">
        <PageHeader 
          title="Press & Media" 
          subtitle="The latest news and updates from Redex"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Press', href: '/press' }
          ]}
          metaTitle={`${companyInformation.name} - Press and Media`}
          metaDescription="Stay up to date with the latest news and announcements from Redex, Nepal's leading quick commerce platform."
        />
        
        {/* Content will go here */}
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.brand.primary }}>
            Media Inquiries
          </h2>
          <p className="text-brand-text max-w-2xl mx-auto mb-6">
            For interview requests, additional information, or to arrange a media visit to our dark stores,
            please contact our media relations team. We're always happy to provide information or quotes for your stories.
          </p>
          <Button 
            variant="solid" 
            size="lg"
            style={{ backgroundColor: theme.colors.brand.primary, color: theme.colors.brand.textLight }}
          >
            Contact Media Team
          </Button>
        </Card>
      </div>
    </>
  );
};

export default PressPage; 