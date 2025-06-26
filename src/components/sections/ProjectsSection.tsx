import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { X } from 'lucide-react';
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
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    title: string;
  } | null>(null);
  const { projects, loading, error } = useProjectsData();

  const filteredProjects = getProjectsByCategory(projects, activeCategory);

  const handleImageClick = (imageUrl: string, title: string) => {
    setSelectedImage({ url: imageUrl, title });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

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
    <>
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

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ProjectCard
                  project={project}
                  onImageClick={handleImageClick}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
              initial={{ backdropFilter: 'blur(0px)' }}
              animate={{ backdropFilter: 'blur(12px)' }}
              exit={{ backdropFilter: 'blur(0px)' }}
              onClick={closeLightbox}
            />

            <motion.div
              className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/40 via-black/20 to-transparent"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <div className="flex justify-between items-center p-6">
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-white text-xl font-medium px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl">
                    {selectedImage.title}
                  </h3>
                </motion.div>

                <motion.button
                  onClick={closeLightbox}
                  className="p-3 bg-white/10 hover:bg-red-500/80 backdrop-blur-sm rounded-xl text-white transition-all hover:scale-105 group"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  aria-label="Close"
                >
                  <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              className="absolute inset-0 overflow-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(255, 255, 255, 0.3) transparent',
              }}
            >
              <div
                className="min-h-full flex items-center justify-center p-20"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="rounded-2xl shadow-2xl"
                  style={{
                    maxWidth: '150%',
                    filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))',
                  }}
                  initial={{ filter: 'blur(20px)', scale: 0.9 }}
                  animate={{ filter: 'blur(0px)', scale: 1 }}
                  transition={{ duration: 0.5 }}
                  draggable={false}
                />
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', damping: 20, delay: 0.5 }}
            >
              <div className="bg-black/40 backdrop-blur-xl text-white/80 px-6 py-3 rounded-full text-sm flex items-center gap-3 border border-white/10">
                <motion.div
                  className="flex flex-col gap-0.5"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-4 h-0.5 bg-white/60 rounded-full" />
                  <div className="w-4 h-0.5 bg-white/40 rounded-full" />
                  <div className="w-4 h-0.5 bg-white/20 rounded-full" />
                </motion.div>
                <span>Scroll pour explorer l'image complète</span>
              </div>
            </motion.div>

            <style>{`
              @media (min-width: 768px) {
                *::-webkit-scrollbar {
                  width: 12px;
                  height: 12px;
                }
                *::-webkit-scrollbar-track {
                  background: rgba(255, 255, 255, 0.05);
                  border-radius: 10px;
                }
                *::-webkit-scrollbar-thumb {
                  background: rgba(255, 255, 255, 0.2);
                  border-radius: 10px;
                  border: 2px solid transparent;
                  background-clip: content-box;
                }
                *::-webkit-scrollbar-thumb:hover {
                  background: rgba(255, 255, 255, 0.3);
                  background-clip: content-box;
                }
              }
            `}</style>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
