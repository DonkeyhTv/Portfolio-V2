import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowDown, Github } from 'lucide-react';
import Typed from 'typed.js';
import ParticlesBackground from './ParticlesBackground';
import FloatingShapes from './FloatingShapes';
import MagneticButton from '../../common/MagneticButton';

const socialLinks = [
  { icon: Github, href: 'https://github.com/DonkeyhTv', label: 'GitHub' },
];

export default function Hero() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const typedRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const typedInstance = useRef<Typed | null>(null);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    if (typedRef.current) {
      const strings =
        i18n.language === 'fr'
          ? [
              'Développeur Full Stack',
              "Créateur d'Applications Web",
              'Expert React/Vue/Angular',
              "Passionné d'Innovation",
            ]
          : [
              'Full Stack Developer',
              'Web Application Creator',
              'React/Vue/Angular Expert',
              'Innovation Enthusiast',
            ];

      typedInstance.current = new Typed(typedRef.current, {
        strings,
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
      });

      return () => {
        if (typedInstance.current) {
          typedInstance.current.destroy();
        }
      };
    }
  }, [i18n.language]);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticlesBackground />
      <FloatingShapes />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      <motion.div className="container-custom z-10" style={{ y, opacity }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-lg md:text-xl text-muted-foreground mb-4">
              {t('hero.greeting')}
            </h2>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-gradient">Steve Amissi</span>
          </motion.h1>

          <motion.div
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-8 h-10 sm:h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span ref={typedRef}></span>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <MagneticButton>
              <button
                onClick={() => navigate('/projects')}
                className="relative overflow-hidden btn-primary border border-primary-600 group w-full sm:w-auto"
              >
                <span className="relative z-10">{t('hero.cta.primary')}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </MagneticButton>

            <MagneticButton>
              <a
                href="/cv.html"
                className="relative inline-block w-full sm:w-auto px-6 py-3 border border-primary text-primary font-semibold rounded-lg overflow-hidden transition-colors duration-300 hover:text-white group"
              >
                <span className="relative z-10">{t('hero.cta.secondary')}</span>
                <span className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0" />
              </a>
            </MagneticButton>
          </motion.div>

          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-full border border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 transition-colors group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <link.icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.button
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 cursor-pointer z-20"
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        style={{ opacity }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs sm:text-sm text-muted-foreground">
            Scroll
          </span>
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
        </motion.div>
      </motion.button>
    </section>
  );
}
