import React, { useState } from 'react';

export interface Coupon {
  code: string;
  discount: number;
  isPercentage: boolean;
  description: string;
}

interface ProductCouponsProps {
  coupons: Coupon[];
  onApplyCoupon?: (coupon: Coupon) => void;
}

const ProductCoupons: React.FC<ProductCouponsProps> = ({
  coupons,
  onApplyCoupon
}) => {
  const [showAllCoupons, setShowAllCoupons] = useState(false);
  
  if (!coupons || coupons.length === 0) {
    return null;
  }

  const displayedCoupons = showAllCoupons ? coupons : coupons.slice(0, 2);

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">Available Coupons</h3>
      <div className="space-y-3">
        {displayedCoupons.map((coupon, index) => (
          <div 
            key={index} 
            className="border border-brand-border rounded-lg p-3 flex justify-between items-center bg-brand-bg-subtle"
          >
            <div>
              <div className="flex items-center">
                <span className="font-mono text-brand-primary font-bold mr-2">
                  {coupon.code}
                </span>
                <span className="text-xs bg-brand-primary text-white px-2 py-0.5 rounded">
                  {coupon.isPercentage 
                    ? `${coupon.discount}% OFF` 
                    : `$${coupon.discount.toFixed(2)} OFF`
                  }
                </span>
              </div>
              <p className="text-sm text-brand-text-secondary mt-1">
                {coupon.description}
              </p>
            </div>
            <button
              onClick={() => onApplyCoupon && onApplyCoupon(coupon)}
              className="text-brand-primary font-medium text-sm hover:underline focus:outline-none"
            >
              Apply
            </button>
          </div>
        ))}
      </div>
      
      {coupons.length > 2 && (
        <button
          onClick={() => setShowAllCoupons(!showAllCoupons)}
          className="text-brand-primary text-sm font-medium mt-2 focus:outline-none hover:underline"
        >
          {showAllCoupons ? 'Show Less' : `View All ${coupons.length} Coupons`}
        </button>
      )}
    </div>
  );
};

export default ProductCoupons; 