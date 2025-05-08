import { 
  CustomerSupportIcon, 
  BusinessInquiryIcon, 
  MediaPressIcon, 
  TechnicalSupportIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedInIcon
} from './Icons';

// Define contact methods
export const contactMethods = [
  {
    title: 'Customer Support',
    description: 'For order inquiries, product questions, and general assistance',
    email: 'support@redex.com.np',
    phone: '+977-9804301484',
    hours: 'Daily, 7:00 AM - 10:00 PM NPT',
    icon: CustomerSupportIcon
  },
  {
    title: 'Business Inquiries',
    description: 'For partnerships, bulk orders, and corporate accounts',
    email: 'business@redex.com.np',
    phone: '+977-9804301485',
    hours: 'Monday - Friday, 9:00 AM - 6:00 PM NPT',
    icon: BusinessInquiryIcon
  },
  {
    title: 'Media & Press',
    description: 'For media inquiries, press releases, and brand assets',
    email: 'media@redex.com.np',
    phone: '+977-9804301486',
    hours: 'Monday - Friday, 9:00 AM - 6:00 PM NPT',
    icon: MediaPressIcon
  },
  {
    title: 'Technical Support',
    description: 'For website and app issues, account problems, and payment difficulties',
    email: 'tech@redex.com.np',
    phone: '+977-9804301487',
    hours: 'Daily, 8:00 AM - 8:00 PM NPT',
    icon: TechnicalSupportIcon
  }
];

// Define office locations
export const officeLocations = [
  {
    name: 'Head Office - Kathmandu',
    address: 'Redex Pvt. Ltd., 3rd Floor, Naxal Plaza, Kathmandu, Nepal',
    phone: '+977-9804301484',
    email: 'info@redex.com.np',
    hours: 'Monday - Friday, 9:00 AM - 6:00 PM NPT',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0673926164655!2d85.32395!3d27.714601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a6a8524fb5%3A0x12d608276910177d!2sNaxal%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1635151721412!5m2!1sen!2snp'
  },
  {
    name: 'Lalitpur Office',
    address: 'Redex Pvt. Ltd., Ground Floor, Pulchowk Plaza, Lalitpur, Nepal',
    phone: '+977-9804301485',
    email: 'lalitpur@redex.com.np',
    hours: 'Monday - Friday, 9:00 AM - 6:00 PM NPT',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.0126366378133!2d85.31395!3d27.67601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ecd27c2cc3%3A0x85cd85148e00c05!2sPulchowk%2C%20Lalitpur%2044600!5e0!3m2!1sen!2snp!4v1635151821512!5m2!1sen!2snp'
  }
];

// Define social media platforms
export const socialMediaPlatforms = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/redex.nepal',
    icon: FacebookIcon
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/redex.nepal',
    icon: InstagramIcon
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/redex_nepal',
    icon: TwitterIcon
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/redex-nepal',
    icon: LinkedInIcon
  }
];

// Define FAQ items for the contact page
export const contactFAQs = [
  {
    question: 'How quickly can I expect a response to my inquiry?',
    answer: 'For customer support inquiries, we aim to respond within 2 hours during our operating hours. For business and media inquiries, we typically respond within 1 business day.'
  },
  {
    question: 'Can I track the status of my inquiry?',
    answer: 'Yes, all inquiries submitted through our contact form will receive a confirmation email with a reference number. You can use this reference number to check the status of your inquiry by emailing status@redex.com.np.'
  },
  {
    question: 'I need immediate assistance with my order. What should I do?',
    answer: 'For urgent order-related issues, please call our customer support line at +977-9804301484. Our team is available daily from 7:00 AM to 10:00 PM NPT.'
  },
  {
    question: 'How do I provide feedback about your service?',
    answer: 'We welcome all feedback. You can submit your comments, suggestions, or complaints through our contact form or by emailing feedback@redex.com.np. Your input helps us improve our services.'
  }
]; 