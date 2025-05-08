import companyInformation from "./companyInfo";

const privacySections = [
    {
        title: 'Information We Collect',
        content: `
        We collect several types of information from and about users of our platform, including:
        
        • Personal information you provide when registering or creating an account (name, email address, phone number, etc.)
        • Order and transaction details (items purchased, delivery address, payment information)
        • Location information for delivery purposes
        • Usage and activity data (browsing history, search queries, products viewed)
        • Device information (IP address, browser type, operating system, device type)
      `,
    },
    {
        title: 'How We Use Your Information',
        content: `
        We use the information we collect for various purposes, including:
        
        • Processing and delivering your orders
        • Managing your account and providing customer support
        • Personalizing your shopping experience and recommending products
        • Improving our services, website, and app functionality
        • Communicating with you about orders, promotions, and updates
        • Analyzing usage patterns and conducting market research
        • Detecting and preventing fraudulent activities
      `,
    },
    {
        title: 'Information Sharing and Disclosure',
        content: `
        We may share your personal information with:
        
        • Delivery partners to fulfill your orders
        • Payment processors to complete transactions
        • Service providers who assist with our business operations
        • Legal authorities when required by law or to protect our rights
        
        We do not sell your personal information to third parties for marketing purposes.
      `,
    },
    {
        title: 'Your Privacy Choices',
        content: `
        You have several rights regarding your personal information:
        
        • Access and update your account information
        • Opt-out of marketing communications
        • Request deletion of your personal data (subject to legal requirements)
        • Set cookie preferences on our website
        
        You can manage these choices through your account settings or by contacting our customer support team.
      `,
    },
    {
        title: 'Data Security',
        content: `
        We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:
        
        • Encryption of sensitive data
        • Regular security assessments
        • Access controls and authentication procedures
        • Secure data storage practices
        
        However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
      `,
    },
    {
        title: 'Children\'s Privacy',
        content: `
        Our services are not intended for children under 16 years of age. We do not knowingly collect personal information from children. If you are a parent or guardian and believe we have collected information from your child, please contact us.
      `,
    },
    {
        title: 'Changes to Our Privacy Policy',
        content: `
        We may update this privacy policy from time to time. When we make significant changes, we will notify you through email or a notice on our website. We encourage you to review our privacy policy periodically.
      `,
    },
    {
        title: 'Contact Us',
        content: `
        If you have any questions or concerns about our privacy policy or practices, please contact us at:
        
        Email: privacy@${companyInformation.name.toLowerCase()}.com.np
        Phone: ${companyInformation.phone}
        Address: ${companyInformation.address}
      `,
    },
];

export default privacySections;
