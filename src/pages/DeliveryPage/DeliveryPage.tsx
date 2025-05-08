import React from 'react';
import { PageHeader, Card, Button } from '../../components/ui';
import companyInformation from '../../constants/companyInfo';
import theme from '../../config/theme';

const DeliveryPage: React.FC = () => {
  const deliveryOptions = [
    {
      title: 'Standard Delivery',
      description: 'Budget-friendly delivery for non-urgent orders. Typical delivery within 3-5 business days.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      price: 'Starts at $4.99',
      features: [
        '3-5 business days',
        'Order tracking',
        'Signature on delivery optional'
      ]
    },
    {
      title: 'Express Delivery',
      description: 'Fast delivery for orders that need to arrive sooner. Get your items within 1-2 business days.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      price: 'Starts at $9.99',
      features: [
        '1-2 business days',
        'Priority processing',
        'Real-time tracking',
        'Signature confirmation included'
      ]
    },
    {
      title: 'Same-Day Delivery',
      description: 'Get your order delivered on the same day when ordered before 12 PM. Available in select cities.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      price: 'Starts at $14.99',
      features: [
        'Delivered same day',
        'Order before 12 PM',
        'Available in select cities',
        'Live tracking',
        'Delivery time selection'
      ]
    },
    {
      title: 'International Shipping',
      description: 'Global delivery for customers outside our standard service areas. Delivery times vary by destination.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      price: 'Varies by destination',
      features: [
        'Global shipping',
        'Customs documentation assistance',
        'International tracking',
        'Insurance available',
        'Multiple carrier options'
      ]
    }
  ];

  const deliveryFeatures = [
    {
      title: 'Real-Time Tracking',
      description: 'Know exactly where your package is and when it will arrive with our detailed tracking system.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: 'Flexible Delivery Options',
      description: 'Choose from various delivery speeds and special handling options to meet your needs.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: 'Safe Handling',
      description: 'Your packages are treated with care from pickup to delivery, with special handling for fragile items.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: 'Eco-Friendly Packaging',
      description: 'Our sustainable packaging options help reduce environmental impact without compromising protection.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const serviceArea = [
    {
      region: 'Domestic Coverage',
      description: 'We deliver to all 50 US states, with extensive coverage in major metropolitan areas for same-day and next-day services.',
      areas: [
        'All major cities with express and same-day options',
        'Suburban areas with standard and express services',
        'Rural areas with standard delivery (may have longer delivery times)',
        'PO Boxes and APO/FPO addresses (standard delivery only)'
      ]
    },
    {
      region: 'International Coverage',
      description: 'Our global shipping network reaches over 200 countries and territories worldwide, with varying delivery times and options.',
      areas: [
        'Canada and Mexico: 2-5 business days',
        'Europe: 3-7 business days',
        'Asia Pacific: 4-10 business days',
        'South America: 5-12 business days',
        'Africa and Middle East: 6-14 business days'
      ]
    }
  ];

  const destinationSpecifics = [
    {
      title: 'United States',
      details: 'All delivery options available. Same-day delivery in select major cities including New York, Los Angeles, Chicago, Houston, and Miami.'
    },
    {
      title: 'Canada',
      details: 'Standard (5-7 days) and Express (2-3 days) shipping available. No same-day service currently available.'
    },
    {
      title: 'Europe',
      details: 'Standard (7-10 days) and Express (3-5 days) shipping to all EU countries. Additional customs processing time may apply.'
    },
    {
      title: 'Asia',
      details: 'Standard (8-12 days) and Express (4-6 days) to major countries including Japan, South Korea, China, and Singapore.'
    },
    {
      title: 'Australia & New Zealand',
      details: 'Standard (10-14 days) and Express (5-7 days) shipping available with tracking throughout the delivery process.'
    },
    {
      title: 'Rest of World',
      details: 'Standard shipping available with delivery times varying by destination. Please check specific country details during checkout.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="Delivery Services" 
        subtitle="Fast, reliable shipping to get your orders delivered on time"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Delivery', href: '/delivery' }
        ]}
        metaTitle={`${companyInformation.name} - Delivery Services`}
        metaDescription="Explore our range of delivery options including standard, express, same-day, and international shipping to meet your needs."
      />
      
      {/* Delivery Options */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: theme.colors.brand.primary }}>
          Delivery Options
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliveryOptions.map((option, index) => (
            <Card key={index} className="p-6 flex flex-col h-full">
              <div className="flex items-start mb-4">
                <div className="rounded-full p-3 mr-3" style={{ color: theme.colors.brand.primary, backgroundColor: `${theme.colors.brand.primaryLight}30` }}>
                  {option.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: theme.colors.brand.primary }}>
                    {option.title}
                  </h3>
                  <p className="text-brand-muted text-sm">{option.price}</p>
                </div>
              </div>
              <p className="text-brand-text mb-4 flex-grow">{option.description}</p>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: theme.colors.brand.text }}>
                  Features:
                </h4>
                <ul className="list-disc pl-5 text-brand-muted">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="mb-1">{feature}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Delivery Features */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: theme.colors.brand.primary }}>
          Our Delivery Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliveryFeatures.map((feature, index) => (
            <Card key={index} className="p-6 flex flex-col items-center text-center">
              <div className="rounded-full p-4 mb-4" style={{ color: theme.colors.brand.primary, backgroundColor: `${theme.colors.brand.primaryLight}30` }}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: theme.colors.brand.text }}>
                {feature.title}
              </h3>
              <p className="text-brand-muted">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Service Area */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: theme.colors.brand.primary }}>
          Our Service Area
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {serviceArea.map((area, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-lg font-semibold mb-3" style={{ color: theme.colors.brand.primary }}>
                {area.region}
              </h3>
              <p className="text-brand-text mb-4">{area.description}</p>
              <ul className="list-disc pl-5 text-brand-muted">
                {area.areas.map((item, idx) => (
                  <li key={idx} className="mb-1">{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-6 text-center" style={{ color: theme.colors.brand.primary }}>
            Destination-Specific Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {destinationSpecifics.map((destination, index) => (
              <div key={index} className="border rounded-md p-4" style={{ borderColor: theme.colors.brand.border }}>
                <h4 className="font-semibold mb-2" style={{ color: theme.colors.brand.text }}>
                  {destination.title}
                </h4>
                <p className="text-brand-muted text-sm">{destination.details}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
      
      {/* Delivery Tracking */}
      <div className="mb-12">
        <Card className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.brand.primary }}>
                Track Your Delivery
              </h2>
              <p className="text-brand-text mb-6">
                Once your order ships, you'll receive a tracking number via email and SMS (if opted in). Enter your tracking number below to check the status of your delivery.
              </p>
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="Enter tracking number" 
                  className="flex-grow border rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  style={{ borderColor: theme.colors.brand.border }}
                />
                <Button 
                  variant="solid"
                  className="rounded-l-none"
                >
                  Track
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative h-64">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ color: theme.colors.brand.primary }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-brand-primaryLight rounded-full opacity-20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      
      {/* FAQ Section */}
      <div className="mb-12">
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6" style={{ color: theme.colors.brand.primary }}>
            Delivery FAQ
          </h2>
          <div className="space-y-6">
            <div className="border-b pb-4" style={{ borderColor: theme.colors.brand.border }}>
              <h3 className="font-semibold mb-2" style={{ color: theme.colors.brand.text }}>
                How can I change my delivery address after placing an order?
              </h3>
              <p className="text-brand-muted">
                You can change your delivery address by logging into your account and accessing the order details page. Address changes are only possible if the order has not yet been processed for shipping. If your order has already been processed, please contact our customer service team immediately for assistance.
              </p>
            </div>
            
            <div className="border-b pb-4" style={{ borderColor: theme.colors.brand.border }}>
              <h3 className="font-semibold mb-2" style={{ color: theme.colors.brand.text }}>
                What happens if I'm not home to receive my delivery?
              </h3>
              <p className="text-brand-muted">
                If you're not home when delivery is attempted, our couriers will leave a delivery notice with instructions for rescheduling or pickup. For packages that require a signature, a second delivery attempt will be made the following business day. You can also use our tracking system to arrange for an alternative delivery option.
              </p>
            </div>
            
            <div className="border-b pb-4" style={{ borderColor: theme.colors.brand.border }}>
              <h3 className="font-semibold mb-2" style={{ color: theme.colors.brand.text }}>
                Are there any restrictions on what can be delivered?
              </h3>
              <p className="text-brand-muted">
                Yes, there are restrictions on hazardous materials, perishable items without proper packaging, illegal substances, and certain oversized items. International shipments have additional restrictions based on customs regulations for each country. Please check our prohibited items list before placing an order if you're unsure.
              </p>
            </div>
            
            <div className="pb-4">
              <h3 className="font-semibold mb-2" style={{ color: theme.colors.brand.text }}>
                How do I report a damaged or missing package?
              </h3>
              <p className="text-brand-muted">
                If your package arrives damaged or is missing, please report it within 48 hours of the scheduled delivery date. You can file a claim through your account dashboard or contact our customer service team. Please have your order number and any photos of damaged items ready to expedite the process.
              </p>
            </div>
          </div>
        </Card>
      </div>
      
      {/* CTA Section */}
      <div className="mb-12">
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.brand.primary }}>
            Need a Custom Delivery Solution?
          </h2>
          <p className="text-brand-text mb-6 max-w-2xl mx-auto">
            For businesses with special delivery requirements or high-volume shipping needs, our logistics experts can create customized delivery solutions.
          </p>
          <Button 
            variant="solid" 
            size="lg"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Our Logistics Team
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default DeliveryPage; 