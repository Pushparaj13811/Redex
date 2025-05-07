import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { useAppDispatch } from '../hooks/useReduxHooks';
import { addToCart } from '../store/cartSlice';
import ProductGallery from '../components/product/ProductGallery';
import ProductInfo from '../components/product/ProductInfo';
import ProductActions from '../components/product/ProductActions';
import ProductCoupons from '../components/product/ProductCoupons';
import ProductHighlights from '../components/product/ProductHighlights';
import ProductInformation from '../components/product/ProductInformation';
import RelatedProducts from '../components/product/RelatedProducts';
import Button from '../components/ui/Button/Button';
import coupons from '../data/couponData';
import { generateProductSpecs } from '../data/productSpecifications';
import companyInformation from '../constants/companyInfo';
import type { Specification } from '../components/product/ProductHighlights';
import type { Coupon } from '../components/product/ProductCoupons';
import type { Manufacturer } from '../components/product/ProductInformation';

const ProductDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { getProductById, getRelatedProducts } = useProducts();
    const dispatch = useAppDispatch();
    const [product, setProduct] = useState<ReturnType<typeof getProductById>>(undefined);
    const [relatedProducts, setRelatedProducts] = useState<ReturnType<typeof getRelatedProducts>>([]);
    const [quantity, setQuantity] = useState(1);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [showShareMenu, setShowShareMenu] = useState(false);

    // Find the product
    useEffect(() => {
        if (id) {
            const foundProduct = getProductById(id);
            setProduct(foundProduct);

            if (foundProduct) {
                setRelatedProducts(getRelatedProducts(foundProduct));
            }

            // Reset state when product changes
            setQuantity(1);
            setIsAddedToCart(false);
            setShowShareMenu(false);
        }
    }, [id, getProductById, getRelatedProducts]);

    // Handlers
    const handleAddToCart = () => {
        if (!product) return;

        dispatch(addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity,
            maxQuantity: 10
        }));

        setIsAddedToCart(true);

        // Reset after 3 seconds
        setTimeout(() => {
            setIsAddedToCart(false);
        }, 3000);
    };

    const handleQuantityChange = (delta: number) => {
        setQuantity(prev => {
            const newQty = prev + delta;
            return newQty < 1 ? 1 : newQty > 10 ? 10 : newQty;
        });
    };

    const handleBuyNow = () => {
        handleAddToCart();
        // Navigate to checkout
        // history.push('/checkout');
    };

    if (!product) {
        return (
            <div className="py-12 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h1 className="text-2xl font-bold text-brand-text mb-4">Product Not Found</h1>
                <p className="text-brand-muted mb-6">
                    The product you are looking for does not exist or has been removed.
                </p>
                <Link to="/shop">
                    <Button
                        colorScheme="primary"
                        variant="solid"
                    >
                        Continue Shopping
                    </Button>
                </Link>
            </div>
        );
    }

    // Use product images or fallback to array with single image
    const productImages = product.images || [product.image];

    // Calculate discount
    const discount = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

    // Discount amount
    const discountAmount = product.originalPrice ? product.originalPrice - product.price : 0;

    // Get product specifications or generate them if not available
    const productSpecs = product.specifications ||
        generateProductSpecs(product.name, product.category, product.quantity);

    // Convert specifications to array of name/value pairs for ProductHighlights
    const specificationList: Specification[] = productSpecs
        ? Object.entries(productSpecs).map(([name, value]) => ({ name, value: String(value) }))
        : [];

    // Get manufacturer info or use default
    const manufacturer: Manufacturer = {
        name: product.manufacturerInfo?.name || "Redex Distributors Pvt. Ltd.",
        address: product.manufacturerInfo?.address || companyInformation.address,
        contact: product.manufacturerInfo?.contactInfo
    };

    // Prepare product coupons
    const productCoupons: Coupon[] = coupons.map(coupon => ({
        code: coupon.id,
        discount: coupon.maxDiscount || 100,
        isPercentage: true,
        description: `${coupon.title} - Min order: ₹${coupon.minOrderValue || 500}`
    }));

    // Share options for gallery
    const shareOptions = [
        { name: 'WhatsApp', icon: '📱', action: () => window.open(`https://wa.me/?text=Check out this product: ${product.name}`) },
        { name: 'Facebook', icon: '👥', action: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`) },
        { name: 'Twitter', icon: '🐦', action: () => window.open(`https://twitter.com/intent/tweet?text=${product.name}&url=${window.location.href}`) },
        { name: 'Email', icon: '✉️', action: () => window.open(`mailto:?subject=Check out this product&body=${product.name} - ${window.location.href}`) },
        {
            name: 'Copy Link', icon: '🔗', action: () => {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
            }
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            {/* Breadcrumb */}
            <div className="mb-4">
                <nav className="flex text-sm">
                    <Link to="/" className="text-brand-muted hover:text-brand-primary">Home</Link>
                    <span className="mx-2 text-brand-muted">›</span>
                    <Link to={`/category/${product.category.toLowerCase().replace(/\s+/g, '-')}`} className="text-brand-muted hover:text-brand-primary">
                        {product.category}
                    </Link>
                    <span className="mx-2 text-brand-muted">›</span>
                    <span className="text-brand-text">{product.name}</span>
                </nav>
            </div>

            {/* Main Product Content */}
            <div className="flex flex-col md:flex-row gap-8 mb-8">
                {/* Left Column - Product Gallery */}
                <div className="w-full md:w-2/5">
                    <ProductGallery
                        images={productImages}
                        productName={product.name}
                        onShare={() => setShowShareMenu(!showShareMenu)}
                        showShareMenu={showShareMenu}
                        shareOptions={shareOptions}
                        onCloseShareMenu={() => setShowShareMenu(false)}
                    />
                </div>

                {/* Right Column - Product Info */}
                <div className="w-full md:w-3/5">
                    {/* Super Saver Banner and Product Info */}
                    <ProductInfo
                        name={product.name}
                        brand={product.brand || 'Redex'}
                        price={product.price}
                        originalPrice={product.originalPrice}
                        rating={product.rating}
                        quantity={product.quantity}
                        discountAmount={discountAmount}
                        discountPercentage={discount}
                        description={product.description}
                    />


                    {/* Add to Cart Button */}
                    <ProductActions
                        quantity={quantity}
                        onQuantityChange={handleQuantityChange}
                        onAddToCart={handleAddToCart}
                        onBuyNow={handleBuyNow}
                        inStock={product.inStock}
                        isAddedToCart={isAddedToCart}
                    />
                    {/* Delivery Badges */}
                    <div className="flex gap-8 mt-4 mb-4">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-2 bg-gray-100 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </div>
                            <p className="text-sm text-brand-text-secondary">3 Days Exchange</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-2 bg-gray-100 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <p className="text-sm text-brand-text-secondary">Fast Delivery</p>
                        </div>
                    </div>
                    {/* Coupons Section */}
                    <ProductCoupons
                        coupons={productCoupons}
                        onApplyCoupon={(coupon) => alert(`Coupon ${coupon.code} applied successfully!`)}
                    />

                </div>

            </div>

            {/* Highlights Section */}
            <ProductHighlights
                specifications={specificationList}
                highlights={[
                    `100% authentic ${product.brand || 'product'}`,
                    `Fast delivery in ${product.deliveryTime || '1-2 days'}`,
                    'Easy returns within 7 days',
                    'Secure payment options'
                ]}
            />

            {/* Information Section */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
                <h2 className="text-xl font-bold p-4 border-b border-brand-border">Information</h2>
                <div className="p-4">
                    <ProductInformation
                        description={product.description || `Detailed description of ${product.name} will be available soon.`}
                        manufacturer={manufacturer}
                        legalInfo={[
                            'Images shown are for representation purposes only.',
                            'Actual product may vary slightly.',
                            'All product specifications are subject to change without notice.',
                            `Product is sourced directly from ${product.countryOfOrigin || 'Country of Origin'}.`
                        ]}
                    />
                </div>
            </div>

            {/* Related Products */}
            <RelatedProducts
                products={relatedProducts.slice(0, 4)}
                title="You May Also Like"
            />

        </div>
    );
};

export default ProductDetailPage; 