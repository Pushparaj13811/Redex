// Define app features
const appFeatures = [
    {
        title: 'Express Delivery',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        description: 'Get your groceries and essentials delivered in under 30 minutes. Track your delivery in real-time on the map.'
    },
    {
        title: 'Personalized Recommendations',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
        ),
        description: 'Discover products tailored to your preferences. Our app learns from your shopping habits to recommend items you\'ll love.'
    },
    {
        title: 'Secure Payments',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
        ),
        description: 'Multiple secure payment options including credit/debit cards, digital wallets, and cash on delivery.'
    },
    {
        title: 'Order Tracking',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        description: 'Track your orders in real-time, from preparation to delivery. Get notifications at every step of the fulfillment process.'
    },
    {
        title: 'Smart Search',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
        ),
        description: 'Find exactly what you need with our powerful search functionality. Filter by category, brand, price, and more.'
    },
    {
        title: 'Exclusive Offers',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ),
        description: 'Access app-exclusive deals, discounts, and promotions. Save more with in-app offers not available elsewhere.'
    },
];

// How it works steps
const howItWorks = [
    {
        step: '1',
        title: 'Download the App',
        description: 'Download our app from the App Store or Google Play Store.',
    },
    {
        step: '2',
        title: 'Create an Account',
        description: 'Sign up using your phone number and verify with OTP.',
    },
    {
        step: '3',
        title: 'Browse Products',
        description: 'Explore thousands of products across various categories.',
    },
    {
        step: '4',
        title: 'Add to Cart',
        description: 'Select items and add them to your shopping cart.',
    },
    {
        step: '5',
        title: 'Checkout',
        description: 'Choose delivery time, address, and payment method.',
    },
    {
        step: '6',
        title: 'Track & Receive',
        description: 'Track your order in real-time and receive it at your doorstep.',
    },
];

export { appFeatures, howItWorks };
