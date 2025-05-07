import type { ManufacturerInfo } from '../types/product';

// Default manufacturer information for different brands
const manufacturerInfo: Record<string, ManufacturerInfo> = {
  // Food brands
  "Fresh": {
    name: "Fresh Organic Farms Ltd.",
    address: "123 Farm Road, Kathmandu, Nepal",
    contactInfo: "info@freshfarms.com, +977-01-4321098"
  },
  "Organic": {
    name: "Organic Foods Co.",
    address: "45 Green Avenue, Lalitpur, Nepal",
    contactInfo: "support@organicfoods.com, +977-01-5678901"
  },
  "Whole": {
    name: "Whole Grain Bakeries",
    address: "78 Wheat Street, Bhaktapur, Nepal",
    contactInfo: "care@wholegrain.com, +977-01-2345678"
  },
  "Natural": {
    name: "Natural Wellness Products",
    address: "56 Health Lane, Pokhara, Nepal",
    contactInfo: "info@naturalwellness.com, +977-061-456789"
  },

  // Cleaning & household brands
  "All-Purpose": {
    name: "CleanPro Industries",
    address: "89 Sparkle Road, Kathmandu, Nepal",
    contactInfo: "support@cleanpro.com, +977-01-8765432"
  },

  // Personal care brands
  "Aloe": {
    name: "Nature's Touch Care Products",
    address: "34 Botanical Way, Chitwan, Nepal",
    contactInfo: "care@naturestouch.com, +977-056-789012"
  },

  // Default manufacturer
  "Default": {
    name: "Redex Distributors Pvt. Ltd.",
    address: "27 Commerce Road, Kathmandu, Nepal",
    contactInfo: "support@redex.com.np, +977-01-5556789"
  }
};

// Function to get manufacturer info based on product name
export const getManufacturerInfo = (productName: string): ManufacturerInfo => {
  // Extract brand from product name (usually the first word)
  const brand = productName.split(' ')[0];
  
  // Check if we have specific info for this brand
  return manufacturerInfo[brand] || manufacturerInfo["Default"];
};

export default manufacturerInfo; 