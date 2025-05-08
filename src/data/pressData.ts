import type { PressRelease, MediaContact, PressKit, MediaMention, PressCategory } from '../types/press';

export const pressReleases: PressRelease[] = [
  {
    id: 'press-001',
    title: 'Redex Launches 10-Minute Grocery Delivery in Kathmandu',
    date: '2023-01-15',
    summary: 'Redex introduces revolutionary quick commerce platform with 10-minute delivery promise.',
    content: `Redex, a Kathmandu-based startup, announced today the launch of its quick commerce platform, promising grocery delivery in just 10 minutes across select neighborhoods in Kathmandu.

    The company's network of "dark stores" - hyperlocal micro-warehouses strategically placed within 3km of high-density residential areas - enables this unprecedented delivery speed. Each dark store stocks over 3,500 products across categories including fresh produce, dairy, groceries, personal care, and household essentials.

    "We're transforming how people shop for essentials by bringing the store right to their doorstep in minutes," said Aaditya Paudel, CEO and founder of Redex. "Our technology and hyperlocal approach eliminates the need for customers to plan grocery trips or wait hours for delivery."

    The service is now available in select neighborhoods including Thamel, Baluwatar, Lazimpat, and Jhamsikhel, with plans to expand across the Kathmandu Valley within the next six months.`,
    image: '/images/press/launch-announcement.jpg',
    category: 'Company News',
    author: 'Redex PR Team'
  },
  {
    id: 'press-002',
    title: 'Redex Secures $5M in Seed Funding to Expand Quick Commerce Operations',
    date: '2023-04-22',
    summary: "Leading venture capital firms back Redex's vision to revolutionize grocery delivery in Nepal.",
    content: `Redex, Nepal's first 10-minute grocery delivery platform, has secured $5 million in seed funding led by Himalayan Ventures with participation from Kathmandu Capital and several angel investors.

    The funding will be used to expand the company's network of dark stores across Kathmandu Valley, enhance its logistics capabilities, and further develop its technology platform. Redex plans to increase its current footprint from 4 dark stores to 15 by the end of 2023, allowing it to serve most of the Kathmandu Valley.

    "The quick commerce space is transforming retail globally, and we believe Redex has the right team and model to lead this revolution in Nepal," said Suman Rayamajhi, Partner at Himalayan Ventures. "Their focus on operational excellence and customer experience sets them apart."

    Since its launch in January, Redex has completed over 100,000 deliveries with an average delivery time of 9 minutes and 47 seconds. The company currently offers more than 3,500 products and plans to expand its catalog to 5,000 items by year-end.`,
    image: '/images/press/funding-announcement.jpg',
    category: 'Company News',
    author: 'Redex PR Team'
  },
  {
    id: 'press-003',
    title: 'Redex Partners with Local Farmers to Offer Direct Farm-to-Door Produce',
    date: '2023-07-10',
    summary: "New partnership brings fresh, locally-grown produce to customers in 10 minutes or less.",
    content: `Redex today announced a partnership with the Kathmandu Valley Farmers Collective to source fresh, locally-grown produce directly from farms to its dark stores, enabling customers to receive farm-fresh vegetables and fruits at their doorstep in 10 minutes or less.

    The partnership connects over 200 local farmers with urban consumers through Redex's quick commerce platform. Produce is harvested in the morning and reaches Redex's dark stores within hours, maintaining peak freshness when delivered to customers.

    "Our mission is to make fresh, high-quality food accessible to everyone," said Maya Thapa, Chief Supply Chain Officer at Redex. "By partnering directly with local farmers, we're shortening the supply chain, reducing food waste, and ensuring our customers get the freshest produce possible while supporting local agriculture."

    The program launches with seasonal vegetables and fruits from farms in Bhaktapur and Lalitpur, with plans to expand to more product categories and farming communities in the coming months.`,
    image: '/images/press/farmers-partnership.jpg',
    category: 'Partnerships',
    author: 'Redex PR Team'
  }
];

export const mediaContacts: MediaContact[] = [
  {
    name: 'Priya Adhikari',
    role: 'Head of Communications',
    email: 'priya.adhikari@redex.com',
    phone: '+977-1-4XXXXXX',
    image: '/images/team/priya-adhikari.jpg'
  },
  {
    name: 'Rajendra Karki',
    role: 'Media Relations Manager',
    email: 'rajendra.karki@redex.com',
    phone: '+977-1-4XXXXXX',
    image: '/images/team/rajendra-karki.jpg'
  }
];

export const pressKits: PressKit[] = [
  {
    id: 'presskit-001',
    title: 'Redex Brand Assets',
    description: 'Official logos, brand colors, and usage guidelines for Redex.',
    downloadUrl: '/downloads/redex-brand-assets.zip',
    fileType: 'ZIP',
    fileSize: '12.4 MB'
  },
  {
    id: 'presskit-002',
    title: 'Redex Fact Sheet 2023',
    description: "Key facts and figures about Redex's operations, growth, and impact.",
    downloadUrl: '/downloads/redex-fact-sheet-2023.pdf',
    fileType: 'PDF',
    fileSize: '3.2 MB'
  },
  {
    id: 'presskit-003',
    title: 'Leadership Team Photos',
    description: "High-resolution photos of Redex's leadership team for media use.",
    downloadUrl: '/downloads/redex-leadership-photos.zip',
    fileType: 'ZIP',
    fileSize: '45.7 MB'
  },
  {
    id: 'presskit-004',
    title: 'Dark Store Operations Overview',
    description: "Images and information about Redex's dark store operations.",
    downloadUrl: '/downloads/redex-dark-stores.pdf',
    fileType: 'PDF',
    fileSize: '18.3 MB'
  }
];

export const mediaMentions: MediaMention[] = [
  {
    id: 'media-001',
    source: 'Kathmandu Post',
    title: 'How Redex is Changing Grocery Shopping in Nepal',
    date: '2023-05-18',
    excerpt: "Redex's promise of 10-minute delivery is setting a new standard for e-commerce in Nepal, challenging traditional retail models.",
    url: 'https://kathmandupost.com/example-article-1',
    logo: '/images/media/kathmandu-post.png'
  },
  {
    id: 'media-002',
    source: 'Himalayan Times',
    title: 'Quick Commerce Startup Redex Raises $5M in Seed Funding',
    date: '2023-04-25',
    excerpt: "Redex's recent funding round signals investor confidence in Nepal's growing quick commerce sector.",
    url: 'https://thehimalayantimes.com/example-article-1',
    logo: '/images/media/himalayan-times.png'
  },
  {
    id: 'media-003',
    source: 'TechLekh',
    title: "Inside Redex's Dark Store Network: The Technology Behind 10-Minute Delivery",
    date: '2023-03-10',
    excerpt: "A look at the sophisticated logistics and inventory management systems powering Redex's quick commerce platform.",
    url: 'https://techlekh.com/example-article-1',
    logo: '/images/media/techlekh.png'
  },
  {
    id: 'media-004',
    source: 'Nepal Business Review',
    title: "Redex CEO on Building Nepal's First Quick Commerce Platform",
    date: '2023-02-15',
    excerpt: "Interview with Aaditya Paudel on the challenges and opportunities in disrupting Nepal's retail landscape.",
    url: 'https://nepalbusinessreview.com/example-article-1',
    logo: '/images/media/nbr.png'
  }
];

export const pressCategories: PressCategory[] = [
  {
    id: 'category-001',
    name: 'Company News',
    count: 2
  },
  {
    id: 'category-002',
    name: 'Partnerships',
    count: 1
  },
  {
    id: 'category-003',
    name: 'Product Updates',
    count: 0
  },
  {
    id: 'category-004',
    name: 'Community Initiatives',
    count: 0
  }
]; 