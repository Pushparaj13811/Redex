import React from 'react';
import { PageHeader, Card, Button } from '../../components/ui';
import companyInformation from '../../constants/companyInfo';
import theme from '../../config/theme';
import SEOHead from '../../components/seo/SEOHead';

const DeliveryPage: React.FC = () => {
  const deliveryFeatures = [
    {
      title: 'Real-Time Tracking',
      description: 'Track your grocery order in real-time with our precise tracking system, so you know exactly when your 10-minute delivery will arrive.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: '10-Minute Delivery Promise',
      description: 'We guarantee delivery within 10 minutes of order confirmation for all orders within our service areas.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'In-House Delivery Team',
      description: 'Our dedicated delivery partners are trained professionals who ensure your groceries arrive fresh and in perfect condition.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Eco-Friendly Packaging',
      description: 'We use sustainable packaging for all our deliveries to minimize environmental impact without compromising product quality.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const serviceArea = [
    {
      region: 'Current Service Areas',
      description: 'We currently offer our 10-minute grocery delivery service in the following areas of Nepal:',
      areas: [
        'Kathmandu (All major areas)',
        'Lalitpur (Patan, Jawalakhel, Pulchowk)',
        'Bhaktapur (City center)',
        'Pokhara (Tourist district and city center)',
        'Biratnagar (Central areas)'
      ]
    },
    {
      region: 'Coming Soon',
      description: "We're rapidly expanding our 10-minute delivery network to the following areas:",
      areas: [
        'Chitwan (Bharatpur)',
        'Butwal',
        'Dharan',
        'Birgunj',
        'Nepalgunj',
        'Additional areas in Kathmandu Valley'
      ]
    }
  ];

  const howItWorks = [
    {
      title: 'Place Your Order',
      description: 'Browse our app or website and select the groceries you need. Our intuitive interface makes shopping quick and easy.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Instant Processing',
      description: 'Our system immediately sends your order to the nearest dark store where our team prepares your items within minutes.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: '10-Minute Delivery',
      description: 'Our in-house delivery team picks up your packaged order and delivers it to your doorstep within 10 minutes of order confirmation.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const faqs = [
    {
      question: 'How can you deliver in just 10 minutes?',
      answer: 'We operate a network of dark stores strategically located throughout our service areas. This allows us to keep inventory close to our customers and utilize our dedicated delivery team for ultra-fast fulfillment.'
    },
    {
      question: 'What if my delivery takes more than 10 minutes?',
      answer: "We're committed to our 10-minute promise. If your delivery takes longer than 10 minutes from the time of order confirmation, we offer a discount on your next order. Certain external factors like severe weather conditions may occasionally affect delivery times."
    },
    {
      question: 'Is there a minimum order value for 10-minute delivery?',
      answer: 'Yes, a minimum order value of NPR 500 applies for our 10-minute delivery service. Orders below this amount may still be placed but may incur a small delivery fee.'
    },
    {
      question: 'Can I schedule a delivery for later?',
      answer: "Currently, our service is focused on immediate 10-minute deliveries. We're working on adding scheduled deliveries in the future."
    },
    {
      question: 'How do you ensure product quality during quick delivery?',
      answer: 'Our dark stores maintain the highest standards of product storage and handling. We use special packaging for temperature-sensitive items and train our delivery team on proper handling procedures to ensure your groceries arrive in perfect condition.'
    }
  ];

  return (
    <>
      <SEOHead 
        title="10-Minute Delivery"
        description="Learn about our in-house 10-minute grocery delivery service that brings fresh products to your doorstep in record time."
        keywords="10-minute delivery, grocery delivery, quick commerce, redex delivery"
      />
      
      <div className="container mx-auto px-4 py-8">
        <PageHeader 
          title="10-Minute Delivery" 
          subtitle="Ultra-fast grocery delivery powered by our in-house fulfillment network"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: '10-Minute Delivery', href: '/delivery' }
          ]}
          metaTitle={`${companyInformation.name} - 10-Minute Delivery`}
          metaDescription="Learn about our revolutionary 10-minute grocery delivery service with in-house fulfillment for maximum speed and reliability."
        />
        
        {/* Hero Banner */}
        <div className="mb-12 relative rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&q=80&w=1400&h=400&fit=crop"
            alt="10-minute delivery service"
            className="w-full h-60 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/80 to-transparent flex items-center">
            <div className="px-8 max-w-xl">
              <h2 className="text-3xl font-bold text-white mb-3">Groceries in 10 Minutes</h2>
              <p className="text-white text-lg mb-5">Our revolutionary in-house delivery network brings fresh groceries to your doorstep faster than ever before.</p>
              <Button 
                variant="solid" 
                onClick={() => window.location.href = '/shop'}
                className="px-6 py-3"
              >
                Start Shopping
              </Button>
            </div>
          </div>
        </div>
        
        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: theme.colors.brand.primary }}>
            How Our 10-Minute Delivery Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <Card key={index} className="p-6 relative">
                <div className="absolute top-4 right-4 text-4xl font-bold opacity-10" style={{ color: theme.colors.brand.primary }}>
                  {index + 1}
                </div>
                <div className="rounded-full p-4 mb-4 w-20 h-20 flex items-center justify-center" style={{ color: theme.colors.brand.primary, backgroundColor: `${theme.colors.brand.primaryLight}30` }}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: theme.colors.brand.text }}>
                  {step.title}
                </h3>
                <p className="text-brand-muted">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Delivery Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: theme.colors.brand.primary }}>
            Features of Our Delivery
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
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: theme.colors.brand.primary }}>
            Our Service Areas
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
        </div>
        
        {/* FAQs */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: theme.colors.brand.primary }}>
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-3" style={{ color: theme.colors.brand.primary }}>
                  {faq.question}
                </h3>
                <p className="text-brand-muted">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="mb-12">
          <Card className="p-8 text-center" style={{ backgroundColor: `${theme.colors.brand.primaryLight}10` }}>
            <h2 className="text-2xl font-bold mb-3" style={{ color: theme.colors.brand.primary }}>
              Experience Our 10-Minute Delivery Today
            </h2>
            <p className="text-brand-text mb-6 max-w-xl mx-auto">
              Download our app or order on our website to experience the convenience of having fresh groceries delivered to your doorstep in just 10 minutes.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button variant="solid" size="lg" onClick={() => window.location.href = '/shop'}>
                Shop Now
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.location.href = '/mobile'}>
                Download Our App
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DeliveryPage; 