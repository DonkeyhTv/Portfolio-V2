import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import ProjectCard from '../common/ProjectCard';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'Plateforme e-commerce complète avec gestion des stocks, paiements sécurisés et tableau de bord administrateur.',
    image: '/images/projects/ecommerce-platform.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'web',
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Corporate Website',
    description:
      'Site vitrine moderne et responsive pour une entreprise internationale avec CMS intégré.',
    image: '/images/projects/corporate-website.jpg',
    tags: ['Vue.js', 'Tailwind', 'Figma', 'SEO'],
    category: 'website',
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Dashboard Analytics',
    description:
      'Application web complexe de visualisation de données en temps réel avec graphiques interactifs.',
    image: '/images/projects/dashboard-analytics.jpg',
    tags: ['Angular', 'D3.js', 'Docker', 'DBeaver'],
    category: 'web',
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Booking System',
    description:
      'Système de réservation complet avec notifications SMS via Twilio et gestion des disponibilités.',
    image: '/images/projects/booking-system.jpg',
    tags: ['React', 'Twilio', 'Cron Jobs', 'MySQL'],
    category: 'fullstack',
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description:
      'Site portfolio créatif avec animations avancées et design sur mesure.',
    image: '/images/projects/portfolio-website.jpg',
    tags: ['Vue.js', 'GSAP', 'Figma', 'Responsive'],
    category: 'website',
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'SaaS Application',
    description:
      'Application SaaS multi-tenant avec authentification, facturation et déploiement automatisé.',
    image: '/images/projects/saas-application.jpg',
    tags: ['React', 'Docker', 'CI/CD', 'Testing'],
    category: 'fullstack',
    link: '#',
    github: '#',
  },
];

const categories = [
  { id: 'all', key: 'all' },
  { id: 'web', key: 'web' },
  { id: 'website', key: 'website' },
  { id: 'fullstack', key: 'fullstack' },
];

export default function ProjectsSection() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="section-spacing bg-accent/10">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">{t('projects.title')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background hover:bg-accent'
              }`}
            >
              {t(`projects.filter.${category.key}`)}
            </button>
          ))}
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="btn-outline">{t('projects.viewAll')}</button>
        </motion.div>
      </div>
    </section>
  );
}
