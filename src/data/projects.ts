// src/data/projects.ts
export interface Project {
  id: string;
  translationKey: string; // Clé pour les traductions
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

// Structure qui sera facile à migrer vers Firebase plus tard
export const projectsData: Project[] = [
  {
    id: 'proj-1',
    translationKey: 'ecommerce',
    image: '/images/projects/ecommerce-platform.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'web',
    featured: true,
    order: 1,
    links: {
      demo: 'https://demo-ecommerce.com',
      github: 'https://github.com/username/ecommerce',
    },
    createdAt: new Date('2024-01-15'),
  },
  {
    id: 'proj-2',
    translationKey: 'corporate',
    image: '/images/projects/corporate-website.jpg',
    tags: ['Vue.js', 'Tailwind', 'Figma', 'SEO'],
    category: 'website',
    featured: true,
    order: 2,
    links: {
      demo: 'https://corporate-demo.com',
      github: 'https://github.com/username/corporate',
    },
    createdAt: new Date('2024-02-20'),
  },
  {
    id: 'proj-3',
    translationKey: 'dashboard',
    image: '/images/projects/dashboard-analytics.jpg',
    tags: ['Angular', 'D3.js', 'Docker', 'DBeaver'],
    category: 'web',
    featured: false,
    order: 3,
    links: {
      demo: 'https://dashboard-demo.com',
      github: 'https://github.com/username/dashboard',
    },
    createdAt: new Date('2024-03-10'),
  },
  {
    id: 'proj-4',
    translationKey: 'booking',
    image: '/images/projects/booking-system.jpg',
    tags: ['React', 'Twilio', 'Cron Jobs', 'MySQL'],
    category: 'fullstack',
    featured: true,
    order: 4,
    links: {
      demo: 'https://booking-demo.com',
      github: 'https://github.com/username/booking',
    },
    createdAt: new Date('2024-04-05'),
  },
  {
    id: 'proj-5',
    translationKey: 'portfolio',
    image: '/images/projects/portfolio-website.jpg',
    tags: ['Vue.js', 'GSAP', 'Figma', 'Responsive'],
    category: 'website',
    featured: false,
    order: 5,
    links: {
      demo: 'https://portfolio-demo.com',
      github: 'https://github.com/username/portfolio',
    },
    createdAt: new Date('2024-05-12'),
  },
  {
    id: 'proj-6',
    translationKey: 'saas',
    image: '/images/projects/saas-application.jpg',
    tags: ['React', 'Docker', 'CI/CD', 'Testing'],
    category: 'fullstack',
    featured: true,
    order: 6,
    links: {
      demo: 'https://saas-demo.com',
      github: 'https://github.com/username/saas',
    },
    createdAt: new Date('2024-06-01'),
  },
];

// Hook personnalisé pour récupérer les projets (facilement remplaçable par Firebase plus tard)
export const useProjectsData = () => {
  // Pour l'instant, on retourne simplement les données locales
  // Plus tard, ce sera remplacé par l'appel Firebase
  return {
    projects: projectsData,
    loading: false,
    error: null,
  };
};

// Fonction pour filtrer les projets (réutilisable avec Firebase)
export const getProjectsByCategory = (
  projects: Project[],
  category: string
) => {
  if (category === 'all') return projects;
  return projects.filter((project) => project.category === category);
};

export const getFeaturedProjects = (projects: Project[]) => {
  return projects
    .filter((project) => project.featured)
    .sort((a, b) => a.order - b.order);
};
