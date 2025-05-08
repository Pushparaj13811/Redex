import React from 'react';
import { PageHeader, Card, Button, SectionReveal, StaggeredItems, Item, SmoothScrollLink } from '../components/ui';
import companyInformation from '../constants/companyInfo';
import theme from '../config/theme';

/**
 * Example page showing how to use the animation components
 */
const ExampleAnimatedPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="Animation Examples" 
        subtitle="Showcasing our premium animation components"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Examples', href: '/examples' }
        ]}
        metaTitle={`${companyInformation.name} - Animation Examples`}
        metaDescription="See premium animation examples with Framer Motion integration"
      />

      {/* Nav section with smooth scroll links */}
      <div className="my-8 flex flex-wrap gap-4">
        <SmoothScrollLink to="#section1" className="text-brand-primary hover:underline">Section 1</SmoothScrollLink>
        <SmoothScrollLink to="#section2" className="text-brand-primary hover:underline">Section 2</SmoothScrollLink>
        <SmoothScrollLink to="#section3" className="text-brand-primary hover:underline">Section 3</SmoothScrollLink>
      </div>
      
      {/* First animated section */}
      <SectionReveal id="section1" className="mb-12">
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.brand.primary }}>
            Section Reveal Animation
          </h2>
          <p className="text-brand-text mb-6">
            This entire card fades in and slides up when it enters the viewport. This is perfect for sections that
            should animate as the user scrolls down the page.
          </p>
          <Button 
            variant="solid" 
            colorScheme="primary"
            className="mt-4"
          >
            Learn More
          </Button>
        </Card>
      </SectionReveal>
      
      {/* Staggered items section */}
      <SectionReveal id="section2" className="mb-12" delay={0.2}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.brand.primary }}>
          Staggered Items Animation
        </h2>
        <p className="text-brand-text mb-6">
          Each item below animates one after another with a staggered delay.
        </p>
        
        <StaggeredItems className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item, index) => (
            <Item key={index} index={index} className="h-full">
              <Card className="p-6 h-full">
                <h3 className="text-lg font-semibold mb-2" style={{ color: theme.colors.brand.text }}>
                  Feature {item}
                </h3>
                <p className="text-brand-muted">
                  This card animates with a staggered delay based on its position in the list.
                </p>
              </Card>
            </Item>
          ))}
        </StaggeredItems>
      </SectionReveal>
      
      {/* Third animated section */}
      <SectionReveal id="section3" className="mb-12" delay={0.4}>
        <Card className="p-6 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.brand.primary }}>
            Scroll Handling
          </h2>
          <p className="text-brand-text mb-6">
            Try clicking the navigation links at the top of the page. The page will smoothly scroll
            to each section. This works for both same-page links and cross-page navigation.
          </p>
          <div className="mt-8">
            <SmoothScrollLink 
              to="#section1" 
              className="inline-block px-4 py-2 bg-brand-primary text-white rounded-md mr-4"
            >
              Back to Top
            </SmoothScrollLink>
          </div>
        </Card>
      </SectionReveal>
    </div>
  );
};

export default ExampleAnimatedPage; 