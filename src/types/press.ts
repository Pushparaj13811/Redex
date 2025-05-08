export interface PressRelease {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  image?: string;
  category: string;
  author?: string;
}

export interface MediaContact {
  name: string;
  role: string;
  email: string;
  phone?: string;
  image?: string;
}

export interface PressKit {
  id: string;
  title: string;
  description: string;
  downloadUrl: string;
  fileType: string; // PDF, ZIP, etc.
  fileSize: string; // e.g., "2.5 MB"
}

export interface MediaMention {
  id: string;
  source: string;
  title: string;
  date: string;
  excerpt: string;
  url: string;
  logo?: string;
}

export interface PressCategory {
  id: string;
  name: string;
  count: number;
} 