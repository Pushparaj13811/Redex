import companyInformation from "./companyInfo";

interface FAQItem {
    question: string;
    answer: string;
    category: string;
}

// FAQ data with categories
const faqItems: FAQItem[] = [
    {
        question: 'How do I place an order?',
        answer: `To place an order on ${companyInformation.name}, follow these steps:\n\n1. Browse or search for the products you want\n2. Add items to your cart\n3. Go to checkout\n4. Enter your delivery address and select a delivery time\n5. Choose your payment method\n6. Review your order and click "Place Order"\n\nYou'll receive an order confirmation via SMS and email.`,
        category: 'Ordering',
    },
    {
        question: 'What are the delivery areas covered?',
        answer: `We currently offer delivery in selected areas across Kathmandu, Lalitpur, and Bhaktapur. During checkout, you can enter your address to check if we deliver to your location. We're constantly expanding our delivery network to cover more areas.`,
        category: 'Delivery',
    },
    {
        question: 'What are the delivery hours?',
        answer: `Our delivery hours are from 7:00 AM to 10:00 PM, 7 days a week. You can schedule your delivery for any available time slot within these hours.`,
        category: 'Delivery',
    },
    {
        question: 'How much is the delivery fee?',
        answer: `Our delivery fee is NPR 50 for orders below NPR 500. For orders above NPR 500, delivery is free. Additional charges may apply for remote locations or during extreme weather conditions.`,
        category: 'Delivery',
    },
    {
        question: 'How long does delivery take?',
        answer: `We offer express delivery with a typical delivery time of 20-40 minutes, depending on your location and order volume. During peak hours or adverse weather conditions, delivery may take longer. You can track your order in real-time through our app.`,
        category: 'Delivery',
    },
    {
        question: 'What payment methods do you accept?',
        answer: `We accept multiple payment methods including:\n\n• Cash on Delivery\n• Credit/Debit Cards\n• eSewa\n• Khalti\n• IME Pay\n\nAll online payment methods are secured with industry-standard encryption protocols.`,
        category: 'Payment',
    },
    {
        question: 'Is there a minimum order value?',
        answer: `Yes, the minimum order value is NPR 300 (excluding delivery fee). This helps us ensure efficient operations and maintain our quick delivery standards.`,
        category: 'Ordering',
    },
    {
        question: 'How can I track my order?',
        answer: `You can track your order in real-time through our app or website. After placing an order, you'll get a tracking link via SMS and email. This allows you to see when your order is being prepared, when it's out for delivery, and the estimated arrival time.`,
        category: 'Delivery',
    },
    {
        question: 'What if an item is out of stock after I place my order?',
        answer: `If an item in your order is out of stock, our customer service team will contact you to offer alternatives or remove the item from your order with a refund for that item. We always try to keep our inventory updated, but occasional discrepancies can occur.`,
        category: 'Ordering',
    },
    {
        question: 'What is your return and refund policy?',
        answer: `We accept returns for damaged, defective, or incorrect items. For perishable items, you must notify us within 2 hours of delivery. For non-perishable items, the return window is 7 days. Refunds are processed to the original payment method within 3-5 business days. For detailed information, please visit our Returns & Refunds page.`,
        category: 'Returns & Refunds',
    },
    {
        question: 'How do I create an account?',
        answer: `Creating an account is simple! Click on the "Sign Up" button on our website or app, then enter your phone number. You'll receive an OTP (One-Time Password) for verification. After verification, complete your profile by adding your name, email, and delivery address. Having an account allows you to track orders, save addresses, and check your order history.`,
        category: 'Account',
    },
    {
        question: 'Is my personal information secure?',
        answer: `Yes, we take data security very seriously. All personal information is encrypted and stored securely. We use industry-standard security measures to protect your data and never share your information with third parties without your consent. For more details, please review our Privacy Policy.`,
        category: 'Account',
    },
    {
        question: 'Do you offer any discounts or promotional offers?',
        answer: `Yes, we regularly offer discounts and promotional campaigns. You can find current offers on our homepage or in the "Offers" section of our app. We also send exclusive deals to our subscribers through email and SMS. For first-time users, we offer a welcome discount on your first order.`,
        category: 'Offers & Promotions',
    },
    {
        question: 'How can I contact customer support?',
        answer: `Our customer support team is available from 7:00 AM to 10:00 PM daily. You can reach us through:\n\n• Phone: ${companyInformation.phone}\n• Email: support@${companyInformation.name.toLowerCase()}.com.np\n• Live chat on our website and app\n\nWe strive to respond to all inquiries within 30 minutes during operating hours.`,
        category: 'Customer Support',
    },
    {
        question: 'Can I change or cancel my order?',
        answer: `You can modify or cancel your order within 5 minutes of placing it through our app or website. After this window, please contact our customer support team immediately, and they'll try to accommodate your request if the order hasn't been processed yet. Once an order is out for delivery, it cannot be canceled.`,
        category: 'Ordering',
    },
];

export default faqItems;
