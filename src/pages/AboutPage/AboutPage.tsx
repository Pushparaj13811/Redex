import React from 'react';
import { PageHeader, Card, Flex, Button, SectionReveal, StaggeredItems, Item } from '../../components/ui';
import companyInformation from '../../constants/companyInfo';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>{companyInformation.name} - About Us</title>
        <meta name="description" content={`Learn more about ${companyInformation.name}, our mission, vision, and values.`} />
      </Helmet>
      
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
              the e-commerce industry. Our journey began with a simple idea: to connect consumers with quality products at affordable prices.
            </p>
            <p className="text-gray-700">
              Today, we serve customers across {companyInformation.countries.length} countries and continue to expand our reach
              while maintaining our commitment to excellence and customer satisfaction.
            </p>
          </Card>
          
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.brand.primary }}>Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At {companyInformation.name}, our mission is to revolutionize the online shopping experience by offering 
              a curated selection of high-quality products, exceptional customer service, and a seamless shopping journey.
            </p>
            <p className="text-gray-700">
              We believe in transparency, sustainability, and building lasting relationships with our customers, partners, and sellers.
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
              Behind {companyInformation.name}'s success is a dedicated team of professionals passionate about e-commerce and customer satisfaction. 
              Our diverse team brings together expertise from various fields, united by a shared commitment to excellence.
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