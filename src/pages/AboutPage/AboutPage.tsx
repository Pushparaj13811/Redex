import React from 'react';
import { PageHeader, Card, Flex, Button, SectionReveal, StaggeredItems, Item } from '../../components/ui';
import companyInformation from '../../constants/companyInfo';
import SEOHead from '../../components/seo/SEOHead';
import theme from '../../config/theme';
import { animateSection } from '../../utils/pageAnimations';

const AboutPage: React.FC = () => {
  // Value items for animation
  const values = [
    {
      title: "Customer First",
      description: "We put our customers at the center of everything we do, constantly improving our services to exceed their expectations."
    },
    {
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical standards in all our business dealings."
    },
    {
      title: "Innovation",
      description: "We embrace change and continuously seek new ways to improve our platform and services."
    }
  ];

  return (
    <>
      <SEOHead 
        title="About Us"
        description={`Learn more about ${companyInformation.name}, our mission, vision, and values as we deliver groceries in just 10 minutes.`}
      />
      
      <div className="container mx-auto px-4 py-8">
        <PageHeader 
          title="About Us" 
          subtitle="Learn more about our company and mission"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '/about' }
          ]}
          metaTitle={`${companyInformation.name} - About Us`}
          metaDescription={`Learn more about ${companyInformation.name}, our mission, vision, and values.`}
        />
        
        <SectionReveal className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.brand.primary }}>Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in {companyInformation.foundedYear}, {companyInformation.name} has grown from a small startup to a trusted name in 
              the quick commerce industry. Our journey began with a simple idea: to deliver fresh groceries to customers in just 10 minutes.
            </p>
            <p className="text-gray-700">
              Today, we serve customers across {companyInformation.countries.length} countries with our in-house fulfillment operations,
              while maintaining our commitment to excellence and customer satisfaction.
            </p>
          </Card>
          
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.brand.primary }}>Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At {companyInformation.name}, our mission is to revolutionize the grocery shopping experience by offering 
              a curated selection of high-quality products, delivered in just 10 minutes through our own fulfillment network.
            </p>
            <p className="text-gray-700">
              We believe in speed, reliability, and building lasting relationships with our customers through our premium service and in-house operations.
            </p>
          </Card>
        </SectionReveal>
        
        {animateSection(
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6" style={{ color: theme.colors.brand.primary }}>Our Values</h2>
            <StaggeredItems className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Item key={index} index={index}>
                  <div className="p-4 border rounded-lg" style={{ borderColor: theme.colors.brand.border }}>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.brand.text }}>{value.title}</h3>
                    <p className="text-gray-700">{value.description}</p>
                  </div>
                </Item>
              ))}
            </StaggeredItems>
          </Card>,
          { className: "mt-12", delay: 0.1 }
        )}
        
        <SectionReveal className="mt-12" delay={0.2}>
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6" style={{ color: theme.colors.brand.primary }}>Our Team</h2>
            <p className="text-gray-700 mb-6">
              Behind {companyInformation.name}'s success is a dedicated team of professionals passionate about 10-minute grocery delivery and customer satisfaction. 
              Our diverse team brings together expertise from various fields, united by a shared commitment to speed and excellence.
            </p>
            <Flex justifyContent="center" className="mt-8">
              <Button 
                variant="solid" 
                size="lg"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Our Team
              </Button>
            </Flex>
          </Card>
        </SectionReveal>
      </div>
    </>
  );
};

export default AboutPage; 