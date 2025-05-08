import companyInformation from "./companyInfo";

const termsSections = [
    {
        title: 'Acceptance of Terms',
        content: `By accessing or using ${companyInformation.name} services, website, or mobile application, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
      
These terms apply to all users, including registered users, guests, vendors, and other contributors to the platform.`
    },
    {
        title: 'Account Registration',
        content: `To use certain features of our service, you may need to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate and current.
      
You are responsible for safeguarding your account password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.

We reserve the right to suspend or terminate accounts that contain false or misleading information or are used for unauthorized purposes.`
    },
    {
        title: 'Ordering and Payment',
        content: `By placing an order through our platform, you confirm that all information provided is accurate and that you are authorized to use the payment method selected.
      
Prices for products are subject to change without notice. We reserve the right to refuse or cancel orders at our discretion, including cases where errors in pricing or product information have occurred.

Payment processing is handled by our secure payment partners. By providing payment information, you represent that you are authorized to use the payment method and agree to the terms of the payment processor.`
    },
    {
        title: 'Delivery and Order Fulfillment',
        content: `${companyInformation.name} aims to fulfill orders within the estimated delivery timeframes, but delivery times are not guaranteed and may vary based on factors beyond our control.
      
You agree to provide accurate delivery information and to be available to receive the order at the specified address. If delivery cannot be completed due to customer unavailability or incorrect information, additional fees may apply for redelivery.

Risk of loss and title for items purchased pass to you upon delivery to the carrier or, if applicable, to your specified delivery location.`
    },
    {
        title: 'Refunds and Returns',
        content: `Refund and return policies vary by product category and are subject to specific conditions outlined in our Refund Policy. Generally:
      
• Perishable items may be eligible for refund or replacement if reported within 2 hours of delivery in unsatisfactory condition
• Non-perishable items may be returned within 7 days if unused and in original packaging
• Digital products and services may have different refund terms specified at the time of purchase

To initiate a return or refund request, please contact our customer support team.`
    },
    {
        title: 'User Conduct',
        content: `As a user of our platform, you agree not to:
      
• Use the service for any illegal purpose or in violation of any applicable laws
• Post or transmit harmful, threatening, abusive, or defamatory content
• Attempt to gain unauthorized access to our systems or other users' accounts
• Interfere with or disrupt the service or servers connected to the service
• Impersonate another person or entity
• Engage in any activity that could damage, disable, or overburden our service`
    },
    {
        title: 'Intellectual Property',
        content: `All content on our platform, including but not limited to text, graphics, logos, images, software, and interface, is the property of ${companyInformation.name} or its content suppliers and is protected by copyright and other intellectual property laws.
      
You may not reproduce, distribute, modify, display, or create derivative works from any content without prior written permission from ${companyInformation.name}.`
    },
    {
        title: 'Limitation of Liability',
        content: `To the maximum extent permitted by applicable law, ${companyInformation.name} and its affiliates, officers, employees, agents, and partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, or goodwill, resulting from:
      
• Your use or inability to use our services
• Any unauthorized access to or use of our servers or personal information
• Any interruption or cessation of transmission to or from the service
• Any bugs, viruses, or other harmful code transmitted through the service`
    },
    {
        title: 'Dispute Resolution',
        content: `Any disputes arising from or relating to these terms or your use of our services shall be resolved through negotiation in good faith. If negotiation is unsuccessful, disputes shall be resolved through arbitration in accordance with the laws of Nepal.
      
The arbitration shall take place in Kathmandu, Nepal, and the language of arbitration shall be English.`
    },
    {
        title: 'Modifications to Terms',
        content: `We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website or application. Your continued use of our services after any changes indicates your acceptance of the modified terms.
      
We will make reasonable efforts to notify users of significant changes through email or in-app notifications.`
    },
    {
        title: 'Contact Information',
        content: `If you have any questions about these Terms of Service, please contact us at:
      
Email: legal@${companyInformation.name.toLowerCase()}.com.np
Phone: ${companyInformation.phone}
Address: ${companyInformation.address}`
    }
];

export default termsSections;
