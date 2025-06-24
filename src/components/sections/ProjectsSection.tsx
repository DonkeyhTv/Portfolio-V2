import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import ProjectCard from '../common/ProjectCard';
import { useProjectsData, getProjectsByCategory } from '../../data/projects';

const categories = [
  { id: 'all', key: 'all' },
  { id: 'web', key: 'web' },
  { id: 'website', key: 'website' },
  { id: 'fullstack', key: 'fullstack' },
];

export default function ProjectsSection() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const { projects, loading, error } = useProjectsData();

  const filteredProjects = getProjectsByCategory(projects, activeCategory);

  if (loading) {
    return (
      <section id="projects" className="section-spacing bg-accent/10">
        <div className="container-custom">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="section-spacing bg-accent/10">
        <div className="container-custom">
          <div className="text-center text-red-600 p-4">
            <p>{error}</p>
          </div>
        </div>
      </section>
    );
  }

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
      </div>
    </section>
  );
}
