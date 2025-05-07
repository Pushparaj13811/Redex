import type { Coupon } from '../types/product';

const coupons: Coupon[] = [
    {
        id: 'np1',
        title: 'Get up to NPR 50 cashback using eSewa',
        logo: 'https://cdn.redex.com.np/logos/esewa.png',
        link: 'https://www.esewa.com.np',
        minOrderValue: 299,
        maxDiscount: 50,
        validUntil: '2023-12-31'
    },
    {
        id: 'np2',
        title: 'Flat NPR 30 off on orders above NPR 499 with Khalti',
        logo: 'https://cdn.redex.com.np/logos/khalti.png',
        link: 'https://khalti.com',
        minOrderValue: 499,
        maxDiscount: 30,
        validUntil: '2023-12-31'
    },
    {
        id: 'np3',
        title: 'NPR 40 cashback with IME Pay on groceries',
        logo: 'https://cdn.redex.com.np/logos/imepay.png',
        link: 'https://imepay.com.np',
        minOrderValue: 399,
        maxDiscount: 40,
        validUntil: '2023-12-31'
    },
    {
        id: 'np4',
        title: 'Use Fonepay and get lucky draw entry for NPR 1000 voucher',
        logo: 'https://cdn.redex.com.np/logos/fonepay.png',
        link: 'https://fonepay.com',
        minOrderValue: 0,
        validUntil: '2023-12-31'
    },
    {
        id: 'np5',
        title: 'Cashback up to NPR 25 using PrabhuPay wallet',
        logo: 'https://cdn.redex.com.np/logos/prabhupay.png',
        link: 'https://prabhupay.com',
        minOrderValue: 199,
        maxDiscount: 25,
        validUntil: '2023-12-31'
    }
];

export default coupons;