export interface ProductProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[]; // Array of additional product images
  category: string;
  cat? : string;
  description?: string;
  inStock: boolean;
  deliveryTime: string;
  rating?: number;
  discountPercentage?: number;
  quantity?: string; // e.g. "500 ml", "200 g", etc.
  specifications?: ProductSpecifications;
  brand?: string;
  countryOfOrigin?: string;
  manufacturerInfo?: ManufacturerInfo;
  keywords?: string[]; // For search optimization
}

export interface ProductSpecifications {
  brand: string;
  productType: string;
  modelName: string;
  ecoFriendly: string;
  phosphateFree: string;
  sulphateFree: string;
  keyFeatures: string;
  itemForm: string;
  usageInstruction: string;
  fragrance: string;
  weight: string;
  unit: string;
  packagingType: string;
  // Add other spec properties as needed
}

export interface ManufacturerInfo {
  name: string;
  address?: string;
  contactInfo?: string;
}

export interface Coupon {
  id: string;
  title: string;
  logo: string;
  link: string;
  minOrderValue?: number;
  maxDiscount?: number;
  validUntil?: string;
}

export interface RelatedProduct {
  id: string;
  similarity: number; // How similar this product is to the main product (0-1)
} 

export interface ProductProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description?: string;
  inStock: boolean;
  deliveryTime: string;
  rating?: number;
  discountPercentage?: number;
  quantity?: string; // e.g. "500 ml", "200 g", etc.
}