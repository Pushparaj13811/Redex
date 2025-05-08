export interface CompanyValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface MissionStatement {
  title: string;
  description: string;
}

export interface ValueStory {
  id: string;
  title: string;
  content: string;
  image?: string;
  relatedValue: string; // ID of the related value
}

export interface Principle {
  id: string;
  title: string;
  description: string;
}

export interface Commitment {
  title: string;
  description: string;
}

export interface CommitmentCategories {
  customers: Commitment[];
  environment: Commitment[];
  community: Commitment[];
  employees: Commitment[];
} 