import React from 'react';
import { PageHeader, Card} from '../../components/ui';
import companyInformation from '../../constants/companyInfo';
import theme from '../../config/theme';

const WarehousePage: React.FC = () => {
  const darkStoreNetwork = [
    {
      name: 'Kathmandu Central',
      address: 'Naxal, Kathmandu',
      coverage: '2.5 km radius',
      orderCapacity: '500+ orders/day',
      deliveryTime: '10 minutes',
      specialties: ['Grocery', 'Fresh Produce', 'Daily Essentials'],
      image: '/images/dark-stores/kathmandu-central.jpg'
    },
    {
      name: 'Patan Hub',
      address: 'Jhamsikhel, Lalitpur',
      coverage: '3 km radius',
      orderCapacity: '400+ orders/day',
      deliveryTime: '10 minutes',
      specialties: ['Personal Care', 'Home Essentials', 'Organic Foods'],
      image: '/images/dark-stores/patan-hub.jpg'
    },
    {
      name: 'Bhaktapur Zone',
      address: 'Suryabinayak, Bhaktapur',
      coverage: '2.8 km radius',
      orderCapacity: '350+ orders/day',
      deliveryTime: '10 minutes',
      specialties: ['Regional Specialties', 'Bakery', 'Beverages'],
      image: '/images/dark-stores/bhaktapur-zone.jpg'
    },
    {
      name: 'Boudha Express',
      address: 'Tushal, Boudha',
      coverage: '3.2 km radius',
      orderCapacity: '450+ orders/day',
      deliveryTime: '10 minutes',
      specialties: ['International Foods', 'Household Items', 'Snacks'],
      image: '/images/dark-stores/boudha-express.jpg'
    }
  ];

  const darkStoreFeatures = [
    {
      title: 'Hyperlocal Placement',
      description: 'Strategically located dark stores within 3km of high-density residential areas to enable 10-minute delivery radius.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Optimized Layout',
      description: 'Engineered floor plans with inventory organized by purchase frequency and delivery routes for maximum picking efficiency.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      title: 'Real-time Inventory',
      description: 'Advanced inventory management system that tracks stock levels second-by-second across all dark stores.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      )
    },
    {
      title: 'Temperature Control',
      description: 'Multi-zone temperature management for ambient, refrigerated, and frozen goods to maintain product quality.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10a1 1 0 011-1h1v-1a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0v-1H6a1 1 0 01-1-1zm12 4a1 1 0 102 0v-1h1a1 1 0 100-2h-1v-1a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1zm-6-3a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1v-1z" />
        </svg>
      )
    }
  ];

  const deliveryProcess = [
    {
      step: 1,
      title: 'Order Placement',
      description: 'Customer order is instantly routed to the nearest dark store based on delivery address.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      time: '0 sec'
    },
    {
      step: 2,
      title: 'Automated Picking',
      description: 'AI-optimized picking routes guide staff through the fastest path to collect all items.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      time: '2-3 min'
    },
    {
      step: 3,
      title: 'Quality Check',
      description: 'Each order undergoes a 10-point quality verification before being sealed for delivery.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      time: '30-45 sec'
    },
    {
      step: 4,
      title: 'Dispatch',
      description: 'Delivery personnel are automatically assigned and receive route optimization.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
      time: '1 min'
    },
    {
      step: 5,
      title: 'Doorstep Delivery',
      description: 'Order arrives at customer doorstep with real-time tracking throughout the journey.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      time: '5-6 min'
    }
  ];

  const darkStoreStats = [
    { value: '10 min', label: 'Average Delivery Time' },
    { value: '1,800+', label: 'Daily Orders' },
    { value: '98.7%', label: 'Order Accuracy' },
    { value: '3,500+', label: 'SKUs per Dark Store' }
  ];

  const techFeatures = [
    {
      title: 'Demand Forecasting',
      description: 'AI algorithms predict hyperlocal demand patterns to optimize inventory levels by neighborhood.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Smart Shelving',
      description: 'Weight-sensitive shelves that automatically update inventory levels when products are removed.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: 'Expiry Management',
      description: 'Automated tracking of product expiration dates to minimize waste and ensure freshness.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Dynamic Inventory Rebalancing',
      description: 'Automated redistribution of inventory between dark stores based on real-time demand patterns.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="Dark Store Network" 
        subtitle="How our hyperlocal warehousing enables 10-minute delivery"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Dark Stores', href: '/warehouses' }
        ]}
        metaTitle={`${companyInformation.name} - Dark Store Network`}
        metaDescription="Explore Redex's innovative dark store network that powers our 10-minute delivery promise through strategic placement, real-time inventory, and optimized operations."
      />
      
      {/* Dark Store Explanation */}
      <div className="mb-12">
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.brand.primary }}>
            Revolutionizing Retail with Dark Stores
          </h2>
          <p className="text-brand-text mb-4">
            Redex's dark stores are our secret weapon for delivering groceries and essentials in just 10 minutes. Unlike 
            traditional retail stores, dark stores are mini-warehouses located in residential neighborhoods, designed exclusively 
            for rapid order fulfillment.
          </p>
          <p className="text-brand-text mb-4">
            Each dark store stocks 3,500+ carefully curated products, from fresh produce to household essentials, optimized for 
            the specific neighborhood it serves. Our proprietary inventory system ensures the right products are always available, 
            while our layout design minimizes picking time.
          </p>
          <p className="text-brand-text mb-6 font-medium">
            With multiple dark stores strategically placed across the city, we can guarantee 10-minute delivery within a 3km radius 
            of each location — making Redex the fastest way to get what you need, when you need it.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {darkStoreStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-1" style={{ color: theme.colors.brand.primary }}>{stat.value}</div>
                <div className="text-sm text-brand-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      
      {/* Dark Store Features */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: theme.colors.brand.primary }}>
          What Makes Our Dark Stores Special
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {darkStoreFeatures.map((feature, index) => (
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
      
      {/* Order-to-Door Process */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: theme.colors.brand.primary }}>
          From Dark Store to Your Door in 10 Minutes
        </h2>
        <div className="relative">
          {/* Process Timeline */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2" style={{ backgroundColor: theme.colors.brand.primaryLight }}></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {deliveryProcess.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <div className="rounded-full p-4 mb-4 z-10" style={{ color: theme.colors.brand.primary, backgroundColor: theme.colors.brand.surface }}>
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center" style={{ color: theme.colors.brand.text }}>
                  {step.title}
                </h3>
                <p className="text-brand-muted text-center mb-2">{step.description}</p>
                <div className="font-bold text-sm py-1 px-3 rounded-full" style={{ backgroundColor: theme.colors.brand.primaryLight, color: theme.colors.brand.primary }}>
                  {step.time}
                </div>
              </div>
            ))}
          </div>

          {/* Total Time Display */}
          <div className="mt-10 text-center">
            <span className="inline-block py-2 px-4 rounded-full font-bold" style={{ backgroundColor: theme.colors.brand.primary, color: 'white' }}>
              Total Time: Under 10 Minutes
            </span>
          </div>
        </div>
      </div>
      
      {/* Technology Features */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: theme.colors.brand.primary }}>
          The Technology Behind Our Speed
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techFeatures.map((feature, index) => (
            <Card key={index} className="p-6 h-full flex flex-col">
              <div className="mb-4" style={{ color: theme.colors.brand.primary }}>
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
      
      {/* Dark Store Locations */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: theme.colors.brand.primary }}>
          Our Dark Store Network
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {darkStoreNetwork.map((location, index) => (
            <Card key={index} className="p-6 flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 mb-4 md:mb-0 mr-6 flex-shrink-0">
                <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.brand.primary }}>
                  {location.name}
                </h3>
                <p className="text-brand-text mb-1"><strong>Address:</strong> {location.address}</p>
                <p className="text-brand-text mb-1"><strong>Coverage:</strong> {location.coverage}</p>
                <p className="text-brand-text mb-1"><strong>Capacity:</strong> {location.orderCapacity}</p>
                <p className="text-brand-text mb-4"><strong>Avg. Delivery:</strong> {location.deliveryTime}</p>
                <div className="flex flex-wrap gap-2">
                  {location.specialties.map((specialty, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: `${theme.colors.brand.primaryLight}30`, color: theme.colors.brand.primary }}>
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="mb-12">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.brand.primary }}>
            Experience Lightning-Fast Delivery
          </h2>
          <p className="text-brand-text max-w-2xl mx-auto mb-6">
            Download the Redex app now and get your first order delivered in just 10 minutes. 
            Our dark stores are stocked and ready to serve you with everything you need, exactly when you need it.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {companyInformation.appDownload.android && (
              <a 
                href={companyInformation.appDownload.android.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <img 
                  src={companyInformation.appDownload.android.image} 
                  alt={companyInformation.appDownload.android.alt}
                  className="h-12"
                />
              </a>
            )}
            
            {companyInformation.appDownload.ios && (
              <a 
                href={companyInformation.appDownload.ios.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <img 
                  src={companyInformation.appDownload.ios.image} 
                  alt={companyInformation.appDownload.ios.alt}
                  className="h-12"
                />
              </a>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WarehousePage;