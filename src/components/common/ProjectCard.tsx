// src/components/common/ProjectCard.tsx
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation();

  // Récupérer le titre et la description traduits
  const title = t(`projects.items.${project.translationKey}.title`);
  const description = t(`projects.items.${project.translationKey}.description`);

  return (
    <motion.div
      className="group relative bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="aspect-video relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
        <img
          src={project.image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 flex gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
          {project.links.github && (
            <a
              href={project.links.github}
              className="p-2 bg-background/80 backdrop-blur rounded-lg hover:bg-background transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t('projects.links.code')} - ${title}`}
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              className="p-2 bg-background/80 backdrop-blur rounded-lg hover:bg-background transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t('projects.links.demo')} - ${title}`}
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
