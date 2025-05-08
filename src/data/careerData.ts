import type { CareerOpening, CareerBenefit, CareerTestimonial, Department, CareerOffice } from '../types/careers';
import { CompetitiveCompensationIcon, HealthAndWellnessIcon, LearningAndDevelopmentIcon, FlexibleWorkIcon, TeamEventsIcon, StartupEnvironmentIcon } from '../constants/Icons';
export const jobOpenings: CareerOpening[] = [
    {
        id: 'job-001',
        title: 'Senior Software Engineer',
        department: 'Engineering',
        location: 'Kathmandu, Nepal',
        type: 'Full-time',
        description: 'We are looking for a Senior Software Engineer to join our team and help build the next generation of our delivery platform. You will work on challenging problems at scale and collaborate with cross-functional teams.',
        requirements: [
            '5+ years of experience in software development',
            'Strong proficiency in JavaScript/TypeScript, React, and Node.js',
            'Experience with cloud services (AWS, GCP)',
            'Knowledge of microservices architecture',
            'Excellent problem-solving and communication skills'
        ],
        responsibilities: [
            'Design and implement scalable, robust, and high-performance solutions',
            'Collaborate with product managers, designers, and other engineers',
            'Mentor junior engineers and provide technical leadership',
            'Participate in code reviews and contribute to engineering best practices',
            'Troubleshoot and resolve complex technical issues'
        ],
        postedDate: '2023-06-15',
        isRemote: false
    },
    {
        id: 'job-002',
        title: 'Product Manager',
        department: 'Product',
        location: 'Kathmandu, Nepal',
        type: 'Full-time',
        description: 'We are seeking a talented Product Manager to help define and execute our product roadmap. You will work closely with engineering, design, and business teams to deliver features that delight our customers.',
        requirements: [
            '3+ years of experience in product management',
            'Strong analytical and problem-solving abilities',
            'Excellent communication and stakeholder management skills',
            'Experience with agile development methodologies',
            'Passion for creating great user experiences'
        ],
        responsibilities: [
            'Define product requirements and prioritize features based on business impact',
            'Work with design and engineering teams to deliver high-quality products',
            'Analyze user behavior and feedback to inform product decisions',
            'Conduct competitive analysis and market research',
            'Track and report on key product metrics'
        ],
        postedDate: '2023-07-02',
        isRemote: true
    },
    {
        id: 'job-003',
        title: 'Dark Store Operations Manager',
        department: 'Operations',
        location: 'Lalitpur, Nepal',
        type: 'Full-time',
        description: 'We are looking for an Operations Manager to oversee our dark store operations. You will be responsible for ensuring efficient inventory management, order fulfillment, and delivery coordination.',
        requirements: [
            '3+ years of experience in retail or warehouse operations',
            'Strong leadership and team management skills',
            'Experience with inventory management systems',
            'Excellent problem-solving abilities',
            'Knowledge of logistics and supply chain management'
        ],
        responsibilities: [
            'Manage day-to-day operations of dark stores',
            'Optimize inventory levels and reduce wastage',
            'Coordinate with delivery teams to ensure timely order fulfillment',
            'Train and develop store staff',
            'Analyze operational metrics and implement improvements'
        ],
        postedDate: '2023-06-28',
        isRemote: false
    },
    {
        id: 'job-004',
        title: 'Delivery Driver',
        department: 'Logistics',
        location: 'Kathmandu, Nepal',
        type: 'Full-time',
        description: 'Join our logistics team as a Delivery Driver and help us fulfill our promise of 10-minute deliveries. You will be responsible for safely delivering orders to customers while providing excellent service.',
        requirements: [
            'Valid driving license for two-wheelers',
            'Excellent knowledge of Kathmandu streets and neighborhoods',
            'Good communication skills',
            'Smartphone proficiency',
            'Customer service orientation'
        ],
        responsibilities: [
            'Deliver orders within the promised timeframe',
            'Maintain proper condition of delivery vehicle',
            'Use delivery app to navigate and confirm orders',
            'Provide friendly customer service',
            'Handle cash and digital payments'
        ],
        postedDate: '2023-07-10',
        isRemote: false
    }
];

export const benefits: CareerBenefit[] = [
    {
        id: 'benefit-001',
        title: 'Competitive Compensation',
        description: 'We offer industry-leading salaries, equity options, and performance bonuses to reward your contributions to our success.',
        icon: CompetitiveCompensationIcon as unknown as React.ReactNode
    },
    {
        id: 'benefit-002',
        title: 'Health & Wellness',
        description: 'Comprehensive health insurance, wellness programs, gym memberships, and mental health support for you and your family.',
        icon: HealthAndWellnessIcon as unknown as React.ReactNode
    },
    {
        id: 'benefit-003',
        title: 'Learning & Development',
        description: 'Education stipends, professional development opportunities, and mentorship programs to help you grow your skills and career.',
        icon: LearningAndDevelopmentIcon as unknown as React.ReactNode
    },
    {
        id: 'benefit-004',
        title: 'Flexible Work',
        description: 'Remote work options, flexible hours, and generous paid time off to help you maintain a healthy work-life balance.',
        icon: FlexibleWorkIcon as unknown as React.ReactNode
    },
    {
        id: 'benefit-005',
        title: 'Team Events',
        description: 'Regular team outings, retreats, and social events to build strong connections with your colleagues.',
        icon: TeamEventsIcon as unknown as React.ReactNode
    },
    {
        id: 'benefit-006',
        title: 'Startup Environment',
        description: 'Work in a fast-paced environment with plenty of opportunities to make an impact and shape the future of quick commerce.',
        icon: StartupEnvironmentIcon as unknown as React.ReactNode
    }
];

export const testimonials: CareerTestimonial[] = [
    {
        id: 'testimonial-001',
        name: 'Aarav Sharma',
        role: 'Senior Software Engineer',
        testimonial: "Working at Redex has been an incredible journey. The challenging problems we solve every day and the impact we have on customers' lives is truly rewarding. The team culture is collaborative and supportive, and I've grown tremendously as an engineer.",
        image: '/images/team/engineer1.jpg'
    },
    {
        id: 'testimonial-002',
        name: 'Sita Gurung',
        role: 'Product Manager',
        testimonial: "Redex's fast-paced environment has allowed me to develop and launch features that customers love. The cross-functional collaboration is excellent, and leadership truly values product thinking. It's exciting to be part of a company that's transforming how people shop.",
        image: '/images/team/pm1.jpg'
    },
    {
        id: 'testimonial-003',
        name: 'Rohan Thapa',
        role: 'Dark Store Operations Lead',
        testimonial: "I joined Redex as an operations associate and was promoted to team lead within a year. The company invests in its people and provides clear growth paths. The work is challenging but rewarding, especially when we hit our 10-minute delivery targets day after day.",
        image: '/images/team/operations1.jpg'
    }
];

export const departments: Department[] = [
    {
        id: 'department-001',
        name: 'Engineering',
        description: 'Build the technology that powers our 10-minute delivery platform, from customer-facing apps to operational systems.',
        image: '/images/departments/engineering.jpg'
    },
    {
        id: 'department-002',
        name: 'Product',
        description: 'Define and shape our product roadmap, combining user needs with business goals to create exceptional experiences.',
        image: '/images/departments/product.jpg'
    },
    {
        id: 'department-003',
        name: 'Operations',
        description: 'Run our network of dark stores and ensure smooth, efficient fulfillment of customer orders in record time.',
        image: '/images/departments/operations.jpg'
    },
    {
        id: 'department-004',
        name: 'Logistics',
        description: 'Optimize our delivery network to maintain our promise of 10-minute delivery across neighborhoods.',
        image: '/images/departments/logistics.jpg'
    },
    {
        id: 'department-005',
        name: 'Marketing',
        description: 'Build the Redex brand and drive customer acquisition through innovative marketing strategies.',
        image: '/images/departments/marketing.jpg'
    },
    {
        id: 'department-006',
        name: 'Customer Experience',
        description: 'Ensure exceptional service at every touchpoint and build long-lasting relationships with our customers.',
        image: '/images/departments/customer-experience.jpg'
    }
];

export const offices: CareerOffice[] = [
    {
        id: 'office-001',
        city: 'Kathmandu',
        country: 'Nepal',
        address: 'Thamel, Kathmandu 44600, Nepal',
        image: '/images/offices/kathmandu.jpg'
    },
    {
        id: 'office-002',
        city: 'Lalitpur',
        country: 'Nepal',
        address: 'Jhamsikhel, Lalitpur 44700, Nepal',
        image: '/images/offices/lalitpur.jpg'
    },
    {
        id: 'office-003',
        city: 'Bhaktapur',
        country: 'Nepal',
        address: 'Bhaktapur Durbar Square Area, Bhaktapur 44800, Nepal',
        image: '/images/offices/bhaktapur.jpg'
    }
]; 