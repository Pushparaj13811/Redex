import companyInformation from './companyInfo';

export const MISSION_STATEMENT = {
  title: "Our Mission",
  description: `At ${companyInformation.name}, our mission is to revolutionize everyday commerce by creating an ecosystem that delivers essentials to customers' doorsteps within minutes, while ensuring quality, reliability, and sustainability in everything we do.`
};

export const COMPANY_VALUES = [
  {
    id: "customer-first",
    title: "Customer First",
    description: "We put our customers at the center of everything we do, constantly striving to exceed expectations and deliver an exceptional experience with every interaction.",
    icon: "users"
  },
  {
    id: "reliability",
    title: "Reliability",
    description: "We build trust through consistent performance, on-time delivery, and dependable service that our customers can count on every single time.",
    icon: "shield"
  },
  {
    id: "innovation",
    title: "Innovation",
    description: "We embrace technology and creative thinking to continuously improve our operations, enhance customer experience, and stay ahead in a rapidly evolving market.",
    icon: "bulb"
  },
  {
    id: "sustainability",
    title: "Sustainability",
    description: "We are committed to responsible business practices that minimize environmental impact and contribute positively to the communities we serve.",
    icon: "leaf"
  },
  {
    id: "integrity",
    title: "Integrity",
    description: "We operate with transparency, honesty, and ethical standards in all our business dealings, treating our customers, partners, and team members with respect.",
    icon: "award"
  },
  {
    id: "speed",
    title: "Speed",
    description: "We value efficiency and quick execution while maintaining quality, recognizing that our customers' time is precious.",
    icon: "zap"
  }
];

export const PRINCIPLES = [
  {
    id: "customer-obsession",
    title: "Customer Obsession",
    description: "Every decision we make starts with the customer and works backward. We work vigorously to earn and keep customer trust."
  },
  {
    id: "ownership",
    title: "Ownership",
    description: "We think long term and don't sacrifice long-term value for short-term results. We act on behalf of the entire company, beyond just our own team."
  },
  {
    id: "simplify",
    title: "Simplify",
    description: "We constantly seek ways to simplify processes and make our services more accessible and user-friendly."
  },
  {
    id: "bias-for-action",
    title: "Bias for Action",
    description: "Speed matters in business. Many decisions and actions are reversible and do not need extensive study."
  },
  {
    id: "think-big",
    title: "Think Big",
    description: "Thinking small is a self-fulfilling prophecy. We create and communicate a bold direction that inspires results."
  }
];

export const COMMITMENTS = {
  customers: [
    {
      title: "Timely Delivery",
      description: `We promise to deliver your orders within the timeframe we commit to. At ${companyInformation.name}, we understand that time is valuable.`
    },
    {
      title: "Quality Assurance",
      description: "Every product undergoes strict quality checks before it reaches your doorstep."
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees, no surprises. What you see is what you pay."
    },
    {
      title: "Responsive Support",
      description: "Our customer support team is available to assist you promptly with any questions or concerns."
    }
  ],
  environment: [
    {
      title: "Sustainable Packaging",
      description: "We use eco-friendly packaging materials and are continuously working to reduce waste."
    },
    {
      title: "Carbon Footprint Reduction",
      description: "Our hyperlocal warehousing model minimizes delivery distances, reducing emissions."
    },
    {
      title: "Energy Efficiency",
      description: "Our facilities are designed to optimize energy consumption and minimize environmental impact."
    }
  ],
  community: [
    {
      title: "Local Employment",
      description: "We create jobs within the communities we serve, contributing to local economic growth."
    },
    {
      title: "Community Initiatives",
      description: "We actively participate in and support initiatives that benefit our local communities."
    },
    {
      title: "Responsible Sourcing",
      description: "We prioritize local suppliers and ethical sourcing practices."
    }
  ],
  employees: [
    {
      title: "Fair Compensation",
      description: "We offer competitive wages and benefits to all our employees."
    },
    {
      title: "Growth Opportunities",
      description: "We invest in our team's professional development and provide clear career advancement paths."
    },
    {
      title: "Inclusive Workplace",
      description: "We foster a diverse and inclusive environment where everyone feels valued and respected."
    },
    {
      title: "Work-Life Balance",
      description: "We respect our employees' personal time and promote a healthy work-life balance."
    }
  ]
}; 