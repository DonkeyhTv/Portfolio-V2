import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Sparkles,
  ArrowRight,
  Info,
  Eye,
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useState, useRef, useEffect } from 'react';

interface ProjectCardProps {
  project: any;
  onImageClick?: (imageUrl: string, title: string) => void;
}

export default function BentoProjectCard({
  project,
  onImageClick,
}: ProjectCardProps) {
  const { language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isTextTruncated, setIsTextTruncated] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const description =
    project.translations[language]?.description || 'No description available';

  useEffect(() => {
    if (descriptionRef.current) {
      const element = descriptionRef.current;
      setIsTextTruncated(element.scrollHeight > element.clientHeight);
    }
  }, [description]);

  const handleImageClick = () => {
    if (onImageClick) {
      onImageClick(
        project.image,
        project.translations[language]?.title || project.translationKey
      );
    }
  };

  const handleDescriptionHover = () => {
    if (isTextTruncated) {
      setShowFullDescription(true);
    }
  };

  return (
    <motion.article
      className="group relative bg-primary-950 backdrop-blur-sm rounded-2xl overflow-hidden h-full shadow-sm hover:shadow-xl transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      <div className="absolute inset-0 opacity-[0.03]">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-primary/30"
          animate={{
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? 5 : 0,
          }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="relative h-48 overflow-hidden bg-primary-950">
          <motion.img
            src={project.image}
            alt={
              project.translations[language]?.title || project.translationKey
            }
            className="w-full h-full object-cover cursor-pointer"
            onClick={handleImageClick}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

          {project.featured && (
            <motion.div
              className="absolute top-3 left-3 z-10"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <div className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span className="text-[10px] font-semibold text-gray-800 uppercase tracking-wider">
                  Featured
                </span>
              </div>
            </motion.div>
          )}

          <div className="absolute top-3 right-3 flex gap-2 z-10">
            {project.links?.github && (
              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/90 backdrop-blur-sm rounded-lg text-gray-700 hover:text-primary shadow-lg transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
              </motion.a>
            )}
            {project.links?.demo && (
              <motion.a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/90 backdrop-blur-sm rounded-lg text-gray-700 hover:text-primary shadow-lg transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye className="w-4 h-4" />
              </motion.a>
            )}
          </div>

          <motion.div
            className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
            onClick={handleImageClick}
            whileHover={{ scale: 1.1 }}
          >
            <ExternalLink className="w-4 h-4 text-white" />
          </motion.div>
        </div>

        <div className="flex-1 p-5 flex flex-col">
          <div className="mb-1">
            <h3 className="text-lg font-semibold text-white mb-2 line-clamp-1">
              {project.translations[language]?.title || project.translationKey}
            </h3>
          </div>

          <div ref={containerRef} className="relative mb-4 flex-1">
            <div
              className={`relative ${isTextTruncated ? 'cursor-help' : ''}`}
              onMouseEnter={handleDescriptionHover}
              onMouseLeave={() => setShowFullDescription(false)}
            >
              <p
                ref={descriptionRef}
                className="text-sm text-white line-clamp-2 leading-relaxed"
              >
                {description}
              </p>

              {isTextTruncated && (
                <motion.div
                  className="absolute -top-0.5 -right-0.5 bg-primary/10 rounded-full p-0.5"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                >
                  <Info className="w-3 h-3 text-primary" />
                </motion.div>
              )}
            </div>

            <AnimatePresence>
              {showFullDescription && isTextTruncated && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                    scale: 0.95,
                  }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{
                    opacity: 0,
                    y: -10,
                    scale: 0.95,
                  }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute z-50 left-0 right-0 bottom-full mb-2"
                  style={{
                    maxWidth: '380px',
                    width: 'calc(100% + 40px)',
                    marginLeft: '-20px',
                    marginRight: '-20px',
                  }}
                >
                  <div className="relative p-4 bg-white rounded-xl shadow-xl border border-gray-100 ring-1 ring-black/5">
                    <div className="absolute inset-0 opacity-50">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-transparent to-blue-50 rounded-xl" />
                    </div>

                    <div className="absolute -bottom-1.5 left-7">
                      <div className="w-3 h-3 bg-white border-l border-t border-gray-100 transform rotate-[225deg]" />
                    </div>

                    <div className="relative max-h-[180px] overflow-y-auto custom-scrollbar">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {description}
                      </p>
                    </div>

                    {description.length > 400 && (
                      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none rounded-b-xl" />
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-1.5">
              {project.tags?.map((tag: string, index: number) => (
                <motion.span
                  key={index}
                  className="text-[11px] px-2 py-1.5 rounded-md border border-primary-900 text-white font-medium text-center transition-colors cursor-default"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.03,
                    type: 'spring',
                    stiffness: 300,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {project.links?.demo && (
              <motion.a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2.5 bg-primary-900 text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors group/cta"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  Explore Project
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-0.5" />
                </span>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
