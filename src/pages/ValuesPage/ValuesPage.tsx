import React from 'react';
import { PageHeader, Card } from '../../components/ui';
import companyInformation from '../../constants/companyInfo';
import theme from '../../config/theme';
import { MISSION_STATEMENT, COMPANY_VALUES, PRINCIPLES, COMMITMENTS } from '../../constants/companyValues';
import SEOHead from '../../components/seo/SEOHead';

const ValuesPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Values & Mission"
        description="Discover the values, mission, and principles that drive Redex as we revolutionize quick commerce with 10-minute grocery delivery."
      />
      
      <div className="container mx-auto px-4 py-8">
        <PageHeader 
          title="Our Values & Mission" 
          subtitle="What drives us in revolutionizing quick commerce"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Values', href: '/values' }
          ]}
          metaTitle={`${companyInformation.name} - Values & Mission`}
          metaDescription="Discover the values, mission, and principles that drive Redex as we revolutionize quick commerce with 10-minute delivery."
        />
        
        {/* Mission Statement */}
        <div className="mb-12">
          <Card className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-6" style={{ color: theme.colors.brand.primary }}>
              {MISSION_STATEMENT.title}
            </h2>
            <p className="text-xl font-medium mb-4" style={{ color: theme.colors.brand.text }}>
              {MISSION_STATEMENT.description}
            </p>
          </Card>
        </div>
        
        {/* Values */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: theme.colors.brand.primary }}>
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_VALUES.map((value) => (
              <Card key={value.id} className="p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center" style={{ color: theme.colors.brand.primary }}>
                  <span className="mr-2">{value.title}</span>
                </h3>
                <p className="text-brand-muted">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Principles */}
        <div className="mb-12 bg-gray-50 py-10 px-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: theme.colors.brand.primary }}>
            Our Guiding Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRINCIPLES.map((principle) => (
              <div key={principle.id} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3" style={{ color: theme.colors.brand.text }}>
                  {principle.title}
                </h3>
                <p className="text-brand-muted">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Commitments */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: theme.colors.brand.primary }}>
            Our Commitments
          </h2>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4" style={{ color: theme.colors.brand.text }}>
              To Our Customers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {COMMITMENTS.customers.map((commitment, index) => (
                <Card key={index} className="p-4">
                  <h4 className="font-medium mb-2" style={{ color: theme.colors.brand.primary }}>
                    {commitment.title}
                  </h4>
                  <p className="text-brand-muted text-sm">{commitment.description}</p>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4" style={{ color: theme.colors.brand.text }}>
              To The Environment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {COMMITMENTS.environment.map((commitment, index) => (
                <Card key={index} className="p-4">
                  <h4 className="font-medium mb-2" style={{ color: theme.colors.brand.primary }}>
                    {commitment.title}
                  </h4>
                  <p className="text-brand-muted text-sm">{commitment.description}</p>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4" style={{ color: theme.colors.brand.text }}>
              To Our Community
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {COMMITMENTS.community.map((commitment, index) => (
                <Card key={index} className="p-4">
                  <h4 className="font-medium mb-2" style={{ color: theme.colors.brand.primary }}>
                    {commitment.title}
                  </h4>
                  <p className="text-brand-muted text-sm">{commitment.description}</p>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: theme.colors.brand.text }}>
              To Our Employees
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {COMMITMENTS.employees.map((commitment, index) => (
                <Card key={index} className="p-4">
                  <h4 className="font-medium mb-2" style={{ color: theme.colors.brand.primary }}>
                    {commitment.title}
                  </h4>
                  <p className="text-brand-muted text-sm">{commitment.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Quote */}
        <div className="mb-12">
          <Card className="p-8 text-center">
            <blockquote className="text-xl italic mb-4" style={{ color: theme.colors.brand.text }}>
              "Our values aren't just words on a wall—they're how we make decisions, how we build our team, and how we measure our success."
            </blockquote>
            <p className="font-semibold" style={{ color: theme.colors.brand.primary }}>Ayush Jaiswal - Founder & CEO</p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ValuesPage; 