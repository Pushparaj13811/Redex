import companyInformation from "./companyInfo"
import { DataProtectionIcon, SecureTransactionsIcon, MultiFactorAuthenticationIcon, IncidentResponseIcon, PhysicalSecurityIcon, ApplicationSecurityIcon, PrivacyControlsIcon } from "./Icons"

const securitySections = [
    {
        title: 'Data Protection',
        icon: DataProtectionIcon,
        content: `At ${companyInformation.name}, we employ multiple layers of data protection to safeguard your personal information:
      
• All personal data is encrypted both during transmission and at rest
• We implement strict access controls based on the principle of least privilege
• Regular security audits are conducted to identify and address vulnerabilities
• We maintain comprehensive logs of data access and modifications

We adhere to industry best practices and relevant regulations to ensure your data remains protected.`
    },
    {
        title: 'Secure Transactions',
        icon: SecureTransactionsIcon,
        content: `Your financial information security is our priority:
      
• All payment transactions are processed through PCI-DSS compliant payment gateways
• We use industry-standard TLS/SSL encryption for all transaction data
• Credit card details are never stored on our servers
• We partner with trusted payment providers who maintain the highest security standards

Our multiple layers of security ensure that your payment information remains confidential and protected during every transaction.`
    },
    {
        title: 'Account Security',
        icon: MultiFactorAuthenticationIcon,
        content: `We provide several features to ensure the security of your account:
      
• Multi-factor authentication for account access
• OTP verification for sensitive operations
• Automated alerts for suspicious account activities
• Session timeout after periods of inactivity
• Secure password reset procedures

We recommend that you use a strong, unique password and enable all available security features to maximize your account protection.`
    },
    {
        title: 'Privacy Controls',
        icon: PrivacyControlsIcon,
        content: `We empower you with control over your personal information:
      
• Granular privacy settings in your account dashboard
• Ability to view and export your personal data
• Options to limit data collection and processing
• Clear consent mechanisms for marketing communications

Visit your account settings to review and adjust your privacy preferences at any time.`
    },
    {
        title: 'Application Security',
        icon: ApplicationSecurityIcon,
        content: `Our website and mobile applications are built with security at their core:
      
• Regular code reviews and security testing throughout the development lifecycle
• Protection against common web vulnerabilities such as XSS, CSRF, and SQL injection
• App Store and Play Store verification of our mobile applications
• Continuous monitoring for suspicious activities and automated threat detection
• Regular security updates and patches

We employ a secure-by-design approach to ensure our applications remain resilient against emerging threats.`
    },
    {
        title: 'Physical Security',
        icon: PhysicalSecurityIcon,
        content: `We implement robust physical security measures for our infrastructure:
      
• All data is hosted in Tier III or above certified data centers
• Biometric access controls for server locations
• 24/7 security monitoring and surveillance
• Redundant power and connectivity
• Comprehensive disaster recovery planning

These physical safeguards ensure that your data remains secure and available even during unexpected events.`
    },
    {
        title: 'Incident Response',
        icon: IncidentResponseIcon,
        content: `We maintain a comprehensive incident response plan to address security events promptly:
      
• Dedicated security team for monitoring and responding to incidents
• Clearly defined procedures for different types of security events
• Timely notification process for affected users when required by law
• Post-incident analysis to prevent similar issues in the future
• Regular drills and testing of our incident response procedures

Our proactive approach to incident management helps minimize the impact of any security events.`
    },
];

export default securitySections;