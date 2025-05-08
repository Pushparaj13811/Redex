export interface Resource {
  id: string;
  title: string;
  description: string;
  type: ResourceType;
  image?: string;
  url?: string;
  downloadUrl?: string;
  fileSize?: string;
  category: string;
  date: string;
}

export type ResourceType = 
  | 'guide'
  | 'whitepaper'
  | 'webinar'
  | 'case_study'
  | 'video'
  | 'ebook'
  | 'template' 
  | 'infographic';

export interface ResourceCategory {
  id: string;
  name: string;
  description?: string;
  count: number;
}

export interface ResourceFilter {
  categories: string[];
  types: ResourceType[];
  searchTerm: string;
}

export interface FeaturedResource extends Resource {
  highlight: string;
} 