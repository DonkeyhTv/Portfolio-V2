import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProjectCardProps {
  project: {
    id?: string;
    translationKey?: string;
    translations?: {
      fr: { title: string; description: string };
      en: { title: string; description: string };
    };
    image: string;
    tags: string[];
    category: string;
    featured: boolean;
    links: {
      demo?: string;
      github?: string;
    };
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const title =
    project.translations?.[currentLang as 'fr' | 'en']?.title ||
    project.translations?.fr?.title ||
    'Untitled Project';

  const description =
    project.translations?.[currentLang as 'fr' | 'en']?.description ||
    project.translations?.fr?.description ||
    'No description available';

  return (
    <motion.div
      className="group relative bg-blue-950 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="aspect-video relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
        <img
          src={project.image}
          alt={title}
          loading="lazy"
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
              className="px-2 py-1 border border-blue-500 text-white text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
