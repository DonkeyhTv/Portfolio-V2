import { ProjectsSection } from '@/components/sections';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <motion.div
      className="container-custom pt-32 pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
        {t('projects.title')}
      </h1>
      <p className="text-lg text-muted-foreground">{t('projects.subtitle')}</p>
      <ProjectsSection />
    </motion.div>
  );
}
