import { ProjectsSection } from '@/components/sections';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  return (
    <motion.div
      className="container-custom pt-32 pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ProjectsSection />
    </motion.div>
  );
}
