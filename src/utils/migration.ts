import { projectService } from '../services/projectService';
import { FirebaseProject } from '../types/firebase';

const projectsToMigrate: Omit<FirebaseProject, 'id'>[] = [
  {
    translationKey: 'ecommerce',
    image: 'https://steve-amissi.be/images/projects/ecommerce-platform.jpg',
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
    translationKey: 'corporate',
    image: 'https://steve-amissi.be/images/projects/corporate-website.jpg',
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
    translationKey: 'dashboard',
    image: 'https://steve-amissi.be/images/projects/dashboard-analytics.jpg',
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
    translationKey: 'booking',
    image: 'https://steve-amissi.be/images/projects/booking-system.jpg',
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
    translationKey: 'portfolio',
    image: 'https://steve-amissi.be/images/projects/portfolio-website.jpg',
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
    translationKey: 'saas',
    image: 'https://steve-amissi.be/images/projects/saas-application.jpg',
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

export async function migrateProjects() {
  console.log('Starting migration...');

  for (const project of projectsToMigrate) {
    try {
      const id = await projectService.create(project);
      console.log(`✅ Project migrated: ${project.translationKey} (ID: ${id})`);
    } catch (error) {
      console.error(`❌ Error migrating ${project.translationKey}:`, error);
    }
  }

  console.log('Migration completed!');
}
