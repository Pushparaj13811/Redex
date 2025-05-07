import type { ProductSpecifications } from '../types/product';

// Default specifications for different product categories
const defaultProductSpecs: Record<string, Partial<ProductSpecifications>> = {
  "Fruits & Vegetables": {
    ecoFriendly: "Yes",
    phosphateFree: "Yes",
    sulphateFree: "Yes",
    itemForm: "Fresh",
    usageInstruction: "Store in a cool, dry place. Refrigerate after opening for extended freshness.",
    packagingType: "Eco-friendly packaging"
  },
  "Dairy & Bakery": {
    ecoFriendly: "Yes",
    phosphateFree: "Yes",
    sulphateFree: "Yes",
    itemForm: "Fresh",
    usageInstruction: "Keep refrigerated. Consume before expiry date.",
    packagingType: "Recyclable packaging"
  },
  "Meat & Seafood": {
    ecoFriendly: "Yes",
    phosphateFree: "Yes",
    sulphateFree: "Yes",
    itemForm: "Fresh/Frozen",
    usageInstruction: "Keep refrigerated or frozen. Thaw completely before cooking.",
    packagingType: "Vacuum sealed"
  },
  "Snacks & Beverages": {
    ecoFriendly: "Varies",
    phosphateFree: "Varies",
    sulphateFree: "Varies",
    itemForm: "Packaged",
    usageInstruction: "Store in a cool, dry place. Consume before expiry date.",
    packagingType: "Varies by product"
  },
  "Household & Cleaning": {
    ecoFriendly: "Varies",
    phosphateFree: "Varies",
    sulphateFree: "Varies",
    itemForm: "Liquid/Powder/Spray",
    usageInstruction: "Follow directions on label. Keep away from children.",
    packagingType: "Plastic bottle/Cardboard box"
  },
  "Personal Care": {
    ecoFriendly: "Varies",
    phosphateFree: "Varies",
    sulphateFree: "Varies",
    itemForm: "Liquid/Cream/Gel",
    usageInstruction: "Follow directions on label. For external use only.",
    packagingType: "Tube/Bottle/Jar"
  }
};

// Generate specifications for a product based on its name and category
export const generateProductSpecs = (
  productName: string,
  category: string,
  quantity?: string
): ProductSpecifications => {
  const brandName = productName.split(' ')[0];
  const modelName = productName.split(' ').slice(1).join(' ');
  const defaultSpecs = defaultProductSpecs[category] || {};
  
  return {
    brand: brandName,
    productType: category,
    modelName: modelName,
    ecoFriendly: defaultSpecs.ecoFriendly || "No",
    phosphateFree: defaultSpecs.phosphateFree || "No",
    sulphateFree: defaultSpecs.sulphateFree || "No",
    keyFeatures: `Premium quality ${productName.toLowerCase()}, carefully sourced for maximum freshness and taste.`,
    itemForm: defaultSpecs.itemForm || "Standard",
    usageInstruction: defaultSpecs.usageInstruction || "Use as directed.",
    fragrance: category.includes("Fruits") ? "Natural" : (category.includes("Cleaning") ? "Lemon Fresh" : "None"),
    weight: quantity || "Standard package",
    unit: "1 pack",
    packagingType: defaultSpecs.packagingType || "Standard packaging",
  };
};

export default defaultProductSpecs; 