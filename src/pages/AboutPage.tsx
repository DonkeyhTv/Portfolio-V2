import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Code2,
  Palette,
  Rocket,
  Coffee,
  Award,
  Globe,
  Layout,
  GitBranch,
  Server,
  Smartphone,
  Calendar,
  MapPin,
} from 'lucide-react';

import enTranslations from '../translations/en.json';
import frTranslations from '../translations/fr.json';

const stats = [
  { value: '13+', icon: Award, key: 'experience' },
  { value: '100+', icon: Rocket, key: 'projects' },
  { value: '20+', icon: Code2, key: 'technologies' },
  { value: '∞', icon: Coffee, key: 'coffee' },
];

const skills = [
  {
    name: 'Frontend Development',
    icon: Layout,
    level: 100,
    color: 'from-blue-500 to-cyan-500',
    tech: [
      'React',
      'TypeScript',
      'JavaScript ES6+',
      'Tailwind CSS',
      'Framer Motion',
      'Next.js',
      'Vue.js',
      'HTML5',
      'CSS3/SASS',
    ],
  },
  {
    name: 'Backend Development',
    icon: Server,
    level: 100,
    color: 'from-purple-500 to-pink-500',
    tech: [
      'Node.js',
      'Firebase',
      'Express.js',
      'REST APIs',
      'GraphQL',
      'PHP',
      'Laravel',
      'MySQL',
      'PostgreSQL',
      'MongoDB',
    ],
  },
  {
    name: 'Mobile & Responsive',
    icon: Smartphone,
    level: 100,
    color: 'from-green-500 to-teal-500',
    tech: [
      'React Native',
      'Progressive Web Apps',
      'Responsive Design',
      'Mobile First',
      'Capacitor',
      'Ionic',
    ],
  },
  {
    name: 'DevOps & Tools',
    icon: GitBranch,
    level: 100,
    color: 'from-orange-500 to-red-500',
    tech: [
      'Git/GitHub/GitLab',
      'Docker',
      'CI/CD',
      'Webpack',
      'Vite',
      'npm/yarn/pnpm',
      'Linux',
      'Nginx',
      'VS Code',
      'Figma',
    ],
  },
];

const valuesIcons = [Code2, Palette, Rocket];

const SkeletonLoader = () => (
  <div className="min-h-screen bg-background animate-pulse">
    <section className="relative py-12 md:py-20 overflow-hidden">
      <div className="container-custom relative z-10 text-center">
        <div className="h-12 md:h-16 bg-muted rounded-lg w-2/3 mx-auto mb-4 mt-16"></div>
        <div className="h-6 bg-muted rounded w-3/4 mx-auto mb-4"></div>
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="h-4 bg-muted rounded w-32"></div>
          <div className="h-4 bg-muted rounded w-24"></div>
        </div>
      </div>
    </section>

    <section className="py-12 md:py-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div>
            <div className="h-8 bg-muted rounded w-3/4 mb-4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-muted rounded w-full"></div>
              <div className="h-4 bg-muted rounded w-5/6"></div>
              <div className="h-4 bg-muted rounded w-4/5"></div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full aspect-square max-w-md mx-auto bg-muted rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default function AboutPage() {
  const { language } = useLanguage();
  const [isLoading, setIsLoading] = React.useState(true);

  const translations = language === 'fr' ? frTranslations : enTranslations;

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (translations && Object.keys(translations).length > 0) {
        setIsLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [translations]);

  const t = (path: string) => {
    const keys = path.split('.');
    let value: any = translations;
    for (const key of keys) {
      value = value?.[key];
    }
    return value || path;
  };

  if (isLoading) {
    return <SkeletonLoader />;
  }

  const introData = t('about.intro.paragraphs');
  const timelineData = t('about.timeline');
  const valuesData = t('about.values.items');

  if (
    !Array.isArray(introData) ||
    !Array.isArray(timelineData) ||
    !Array.isArray(valuesData)
  ) {
    console.error('Translation data not in expected format');
    return <SkeletonLoader />;
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <motion.div
          className="container-custom relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl mt-16 font-bold mb-3">
            <span className="text-gradient">{t('about.title')}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
          <div className="flex items-center justify-center gap-4 mt-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Tournai, Belgium
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              Since 2011
            </span>
          </div>
        </motion.div>
      </section>

      <section className="py-12 md:py-8">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {t('about.intro.title')}
              </h2>
              <div className="space-y-3 text-muted-foreground">
                {introData.map((paragraph: string, index: number) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-2xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex justify-center gap-4 mb-4">
                      <Code2 className="w-14 h-14 text-primary animate-pulse" />
                      <Globe
                        className="w-14 h-14 text-purple-600 animate-pulse"
                        style={{ animationDelay: '0.5s' }}
                      />
                    </div>
                    <p className="text-xl font-bold">
                      Senior Full Stack Developer
                    </p>
                    <p className="text-muted-foreground mt-1">
                      13+ years of excellence
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-accent/40">
        <div className="container-custom">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {t('about.stats.title')}
            </h2>
            <p className="text-muted-foreground text-sm">
              {t('about.stats.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-3">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-1">
                  {stat.value}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(`about.stats.items.${stat.key}`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-custom">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {t('about.skills.title')}
            </h2>
            <p className="text-muted-foreground text-sm">
              {t('about.skills.subtitle')}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm p-5 rounded-xl border border-border/50"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium text-lg">{skill.name}</span>
                  <skill.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="relative h-3 bg-muted rounded-full overflow-hidden mb-3">
                  <motion.div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.1 }}
                  />
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skill.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-md"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + techIndex * 0.02 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-accent/40">
        <div className="container-custom">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {t('about.experience.title')}
            </h2>
            <p className="text-muted-foreground text-sm">
              {t('about.experience.subtitle')}
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timelineData.map((item: any, index: number) => (
              <motion.div
                key={index}
                className="relative pl-8 pb-6 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute left-0 top-0 w-px h-full bg-border last:hidden" />
                <div className="absolute left-[-4px] top-2 w-2 h-2 bg-primary rounded-full" />

                <div className="bg-card/50 backdrop-blur-sm p-5 rounded-lg hover:bg-card/80 transition-colors">
                  <span className="text-primary font-semibold text-sm">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold mt-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.company}
                  </p>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-custom">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {t('about.values.title')}
            </h2>
            <p className="text-muted-foreground text-sm">
              {t('about.values.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {valuesData.map((value: any, index: number) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  {React.createElement(valuesIcons[index], {
                    className: 'w-8 h-8 text-primary',
                  })}
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
