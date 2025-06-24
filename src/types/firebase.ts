export interface FirebaseProject {
  id?: string;
  translationKey: string;
  image: string;
  tags: string[];
  category: 'web' | 'website' | 'fullstack';
  featured: boolean;
  order: number;
  links: {
    demo?: string;
    github?: string;
  };
  createdAt: Date;
}

export interface Skill {
  id?: string;
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  level: number;
  icon?: string;
}

export interface Experience {
  id?: string;
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  technologies: string[];
}

export interface Contact {
  id?: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
  read: boolean;
}
