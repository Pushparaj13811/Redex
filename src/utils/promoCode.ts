interface PromoCodeInfo {
  code: string;
  discountPercentage: number;
  isActive: boolean;
}

// Available promo codes
const promoCodes: PromoCodeInfo[] = [
  {
    code: 'redex10',
    discountPercentage: 10,
    isActive: true
  },
  {
    code: 'welcome15',
    discountPercentage: 15,
    isActive: true
  },
  {
    code: 'summer20',
    discountPercentage: 20,
    isActive: false
  }
];

/**
 * Validates a promo code and returns the discount percentage if valid
 * @param code The promo code to validate
 * @returns The discount percentage if valid, 0 otherwise
 */
export function validatePromoCode(code: string): number {
  const promoCode = promoCodes.find(
    p => p.code.toLowerCase() === code.toLowerCase() && p.isActive
  );
  
  return promoCode ? promoCode.discountPercentage : 0;
}

/**
 * Calculates the discount amount based on a subtotal and discount percentage
 * @param subtotal The subtotal amount
 * @param discountPercentage The discount percentage (0-100)
 * @returns The discount amount
 */
export function calculateDiscount(subtotal: number, discountPercentage: number): number {
  return (subtotal * discountPercentage) / 100;
} 