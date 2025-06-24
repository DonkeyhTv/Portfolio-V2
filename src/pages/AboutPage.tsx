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
  Database,
  Smartphone,
  Monitor,
  Zap,
} from 'lucide-react';

const stats = [
  {
    label: { fr: "Années d'expérience", en: 'Years Experience' },
    value: '13+',
    icon: Award,
  },
  {
    label: { fr: 'Projets réalisés', en: 'Projects Completed' },
    value: '100+',
    icon: Rocket,
  },
  {
    label: { fr: 'Technologies maîtrisées', en: 'Technologies Mastered' },
    value: '20+',
    icon: Code2,
  },
  {
    label: { fr: 'Tasses de café', en: 'Cups of Coffee' },
    value: '∞',
    icon: Coffee,
  },
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
      'Bootstrap',
      'Material UI',
      'Redux',
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
      'Redis',
      'Socket.io',
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
      'Flutter basics',
      'Cross-platform',
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
      'Postman',
      'Figma',
      'Jira',
    ],
  },
];

const technologies = {
  frontend: [
    'React',
    'TypeScript',
    'JavaScript ES6+',
    'HTML5',
    'CSS3/SASS',
    'Tailwind CSS',
    'Framer Motion',
    'Vite',
    'Next.js',
    'Vue.js',

    'Testing (Jest/Cypress)',
  ],
  backend: [
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
    'Redis',
  ],
  tools: [
    'Git',
    'VS Code',
    'Figma',
    'Postman',
    'Chrome DevTools',
    'npm/yarn/pnpm',
    'Webpack',
    'Docker',
    'Linux',
    'Nginx',
    'Jira/Trello',
  ],
  learning: [
    'Three.js',
    'WebGL',
    'AWS',
    'Kubernetes',

    'Rust',
    'Go',
    'Machine Learning',
  ],
};

const timeline = [
  {
    year: '2014 - 2024',
    title: {
      fr: 'Développeur Senior Full Stack',
      en: 'Senior Full Stack Developer',
    },
    company: {
      fr: 'Agence Optesite - Bruxelles',
      en: 'Optesite Agency - Brussels',
    },
    description: {
      fr: "Développement d'applications web complexes et de sites sur mesure pour des clients variés. Expertise en React, TypeScript, Node.js et Firebase. Gestion de projets de bout en bout et mentoring des développeurs juniors.",
      en: 'Development of complex web applications and custom websites for various clients. Expertise in React, TypeScript, Node.js and Firebase. End-to-end project management and mentoring junior developers.',
    },
  },
  {
    year: '2012 - 2016',
    title: {
      fr: 'Développeur Medior Frontend',
      en: 'Medior Frontend Developer',
    },
    company: {
      fr: "Magasin Pépin d'Pomme - Tournai",
      en: "Pépin d'Pomme Store - Tournai",
    },
    description: {
      fr: "Développement et maintenance du site e-commerce. Optimisation de l'expérience utilisateur et intégration de nouvelles fonctionnalités. Amélioration des performances et du référencement.",
      en: 'E-commerce website development and maintenance. User experience optimization and new features integration. Performance and SEO improvements.',
    },
  },
  {
    year: '2011 - 2012',
    title: {
      fr: 'Développeur Junior Frontend',
      en: 'Junior Frontend Developer',
    },
    company: { fr: 'Agence Axecible - Lille', en: 'Axecible Agency - Lille' },
    description: {
      fr: "Intégration de maquettes et développement d'interfaces web. Apprentissage des bonnes pratiques et des technologies modernes. Participation à des projets clients variés.",
      en: 'Mockup integration and web interface development. Learning best practices and modern technologies. Participation in various client projects.',
    },
  },
  {
    year: '2007 - 2011',
    title: {
      fr: 'BES Développeur Web',
      en: 'Web Developer Degree',
    },
    company: {
      fr: 'Institut Paul Hankar - Bruxelles',
      en: 'Paul Hankar Institute - Brussels',
    },
    description: {
      fr: 'Formation complète en développement web : HTML, CSS, JavaScript, PHP, MySQL. Projets pratiques et stages en entreprise. Acquisition des bases solides du développement web.',
      en: 'Complete web development training: HTML, CSS, JavaScript, PHP, MySQL. Practical projects and internships. Acquisition of solid web development foundations.',
    },
  },
];

export default function AboutPage() {
  const { language } = useLanguage();

  const content = {
    title: {
      fr: 'À Propos',
      en: 'About Me',
    },
    subtitle: {
      fr: "Développeur Full Stack Senior avec 13+ ans d'expérience dans la création de solutions web innovantes",
      en: 'Senior Full Stack Developer with 13+ years of experience creating innovative web solutions',
    },
    intro: {
      title: {
        fr: 'Expert en développement web depuis 2011',
        en: 'Web Development Expert since 2011',
      },
      paragraphs: {
        fr: [
          "Fort d'une expérience de plus de 13 ans dans le développement web, j'ai évolué du frontend au full stack, maîtrisant les technologies les plus modernes. Mon parcours m'a permis de travailler sur des projets variés, du e-commerce aux applications d'entreprise complexes.",
          'Basé à Tournai avec une expérience internationale (Lille, Bruxelles), je combine expertise technique approfondie et vision créative. Spécialisé en React, TypeScript et PostgreSQL, je crée des solutions robustes et scalables qui répondent aux besoins métiers les plus exigeants.',
          "Mon objectif ? Mettre mon expertise au service de vos projets pour créer des applications web performantes, élégantes et pérennes qui propulsent votre activité dans l'ère digitale.",
        ],
        en: [
          "With over 13 years of experience in web development, I've evolved from frontend to full stack, mastering the most modern technologies. My journey has allowed me to work on varied projects, from e-commerce to complex enterprise applications.",
          'Based in Tournai with international experience (Lille, Brussels), I combine deep technical expertise with creative vision. Specialized in React, TypeScript, and PostgreSQL, I create robust and scalable solutions that meet the most demanding business needs.',
          'My goal? Put my expertise at the service of your projects to create performant, elegant, and sustainable web applications that propel your business into the digital era.',
        ],
      },
    },
    numbers: {
      title: { fr: 'Les chiffres parlent', en: 'Numbers Speak' },
      subtitle: {
        fr: 'Quelques statistiques sur mon parcours',
        en: 'Some statistics about my journey',
      },
    },
    skillsSection: {
      title: { fr: 'Compétences & Expertise', en: 'Skills & Expertise' },
      subtitle: {
        fr: 'Technologies que je maîtrise au quotidien',
        en: 'Technologies I master daily',
      },
    },
    techStack: {
      title: { fr: 'Stack Technique', en: 'Tech Stack' },
      categories: {
        frontend: { fr: 'Frontend', en: 'Frontend' },
        backend: { fr: 'Backend & APIs', en: 'Backend & APIs' },
        tools: { fr: 'Outils & Workflow', en: 'Tools & Workflow' },
        learning: { fr: 'En apprentissage', en: 'Currently Learning' },
      },
    },
    experience: {
      title: { fr: 'Parcours Professionnel', en: 'Professional Journey' },
      subtitle: {
        fr: 'Mon évolution dans le développement web',
        en: 'My evolution in web development',
      },
    },
    values: {
      title: { fr: 'Valeurs Fondamentales', en: 'Core Values' },
      subtitle: {
        fr: 'Les principes qui guident mon travail',
        en: 'The principles that guide my work',
      },
      items: [
        {
          icon: Code2,
          title: { fr: 'Code Propre', en: 'Clean Code' },
          description: {
            fr: 'Écrire du code maintenable, lisible et optimisé. Chaque ligne compte pour créer des applications durables.',
            en: 'Writing maintainable, readable, and optimized code. Every line matters in creating sustainable applications.',
          },
        },
        {
          icon: Palette,
          title: { fr: 'Design Élégant', en: 'Elegant Design' },
          description: {
            fr: "Créer des interfaces qui allient beauté et fonctionnalité. L'expérience utilisateur est au cœur de chaque décision.",
            en: 'Creating interfaces that combine beauty and functionality. User experience is at the heart of every decision.',
          },
        },
        {
          icon: Rocket,
          title: { fr: 'Performance Optimale', en: 'Optimal Performance' },
          description: {
            fr: "Optimiser chaque aspect pour des applications rapides et réactives. La vitesse est cruciale pour l'engagement.",
            en: 'Optimizing every aspect for fast and responsive applications. Speed is crucial for engagement.',
          },
        },
      ],
    },
  };

  const t = (key: any) => {
    return key[language] || key.en || key;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <motion.div
          className="container-custom relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">{t(content.title)}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t(content.subtitle)}
          </p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t(content.intro.title)}
              </h2>
              <div className="space-y-4 text-muted-foreground">
                {t(content.intro.paragraphs).map(
                  (paragraph: string, index: number) => (
                    <p key={index}>{paragraph}</p>
                  )
                )}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex justify-center gap-4 mb-6">
                      <Code2 className="w-16 h-16 text-primary" />
                      <Globe className="w-16 h-16 text-purple-600" />
                    </div>
                    <p className="text-2xl font-bold">
                      Senior Full Stack Developer
                    </p>
                    <p className="text-muted-foreground mt-2">
                      Tournai, Belgium • 13+ years
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-spacing bg-accent/50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t(content.numbers.title)}
            </h2>
            <p className="text-muted-foreground">
              {t(content.numbers.subtitle)}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground">{t(stat.label)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-spacing">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t(content.skillsSection.title)}
            </h2>
            <p className="text-muted-foreground">
              {t(content.skillsSection.subtitle)}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-10">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium text-lg">{skill.name}</span>
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-4">
                  <motion.div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
                    >
                      <Zap className="w-3 h-3 text-white drop-shadow-md" />
                    </motion.div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + techIndex * 0.05 }}
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

      {/* Tech Stack */}
      <section className="section-spacing bg-accent/50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t(content.techStack.title)}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(technologies).map(([category, techs], index) => (
              <motion.div
                key={category}
                className="bg-card p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  {category === 'frontend' && (
                    <Layout className="w-5 h-5 text-primary" />
                  )}
                  {category === 'backend' && (
                    <Server className="w-5 h-5 text-primary" />
                  )}
                  {category === 'tools' && (
                    <GitBranch className="w-5 h-5 text-primary" />
                  )}
                  {category === 'learning' && (
                    <Rocket className="w-5 h-5 text-primary" />
                  )}
                  {t(
                    content.techStack.categories[
                      category as keyof typeof content.techStack.categories
                    ]
                  )}
                </h3>
                <div className="space-y-2">
                  {techs.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-spacing">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t(content.experience.title)}
            </h2>
            <p className="text-muted-foreground">
              {t(content.experience.subtitle)}
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="relative pl-8 pb-8 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute left-0 top-0 w-px h-full bg-border last:hidden" />
                <div className="absolute left-[-4px] top-2 w-2 h-2 bg-primary rounded-full" />

                <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-primary font-semibold">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold mt-2">{t(item.title)}</h3>
                  <p className="text-muted-foreground">{t(item.company)}</p>
                  <p className="mt-3 text-muted-foreground">
                    {t(item.description)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-spacing bg-accent/50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t(content.values.title)}
            </h2>
            <p className="text-muted-foreground">
              {t(content.values.subtitle)}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.values.items.map((value, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t(value.title)}</h3>
                <p className="text-muted-foreground">{t(value.description)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
