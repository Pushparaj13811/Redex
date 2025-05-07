import React from 'react';

export interface Manufacturer {
  name: string;
  address: string;
  contact?: string;
}

interface ProductInformationProps {
  description: string;
  manufacturer?: Manufacturer;
  legalInfo?: string[];
}

const ProductInformation: React.FC<ProductInformationProps> = ({
  description,
  manufacturer,
  legalInfo,
}) => {
  // Create information items array
  const infoItems = [
    { label: 'Disclaimer', content: legalInfo?.[0] || description },
    { label: 'Customer Care Details', content: manufacturer?.contact || 'Contact us for more information' },
    { label: 'Seller Name', content: manufacturer?.name || 'Seller information not available' },
    { label: 'Seller Address', content: manufacturer?.address || 'Address not available' },
    { label: 'Manufacturer Name', content: manufacturer?.name || 'Manufacturer information not available' },
    { label: 'Manufacturer Address', content: manufacturer?.address || 'Address not available' },
    { label: 'Country Of Origin', content: 'India' },
  ];

  return (
    <div>
      <div className="space-y-4">
        {infoItems.map((item, index) => (
          <div key={index} className="border-b border-brand-border pb-4 last:border-b-0 last:pb-0">
            <div className="text-brand-text-secondary mb-1">{item.label}</div>
            <div className="text-brand-text">{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInformation; 