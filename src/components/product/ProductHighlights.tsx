import React from 'react';

export interface Specification {
  name: string;
  value: string;
}

interface ProductHighlightsProps {
  specifications: Specification[];
  highlights?: string[];
}

const ProductHighlights: React.FC<ProductHighlightsProps> = ({
  specifications,
  highlights = []
}) => {
  if ((!specifications || specifications.length === 0) && 
      (!highlights || highlights.length === 0)) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <h2 className="text-xl font-bold p-4 border-b border-brand-border">Highlights</h2>
      
      <div className="p-4">
        {highlights && highlights.length > 0 && (
          <ul className="list-disc pl-5 mb-4 space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="text-brand-text text-sm">
                {highlight}
              </li>
            ))}
          </ul>
        )}
        
        {specifications && specifications.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
            {specifications.map((spec, index) => (
              <div key={index} className="flex">
                <div className="w-1/3 text-brand-text-secondary">
                  {spec.name}
                </div>
                <div className="w-2/3 text-brand-text font-medium">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductHighlights; 