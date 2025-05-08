export interface CareerOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string; // "Full-time", "Part-time", "Contract", etc.
  description: string;
  requirements: string[];
  responsibilities: string[];
  postedDate: string;
  isRemote: boolean;
  applicationUrl?: string;
}

export interface CareerBenefit {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode ;
}

export interface CareerTestimonial {
  id: string;
  name: string;
  role: string;
  testimonial: string;
  image?: string;
}

export interface CareerValues {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode ;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  image?: string;
}

export interface CareerOffice {
  id: string;
  city: string;
  country: string;
  address: string;
  image?: string;
} 