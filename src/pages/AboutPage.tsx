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
} from 'lucide-react';

const stats = [
  {
    label: { fr: "Années d'expérience", en: 'Years Experience' },
    value: '3+',
    icon: Award,
  },
  {
    label: { fr: 'Projets réalisés', en: 'Projects Completed' },
    value: '25+',
    icon: Rocket,
  },
  {
    label: { fr: 'Technologies maîtrisées', en: 'Technologies Mastered' },
    value: '15+',
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
    level: 90,
    color: 'from-blue-500 to-cyan-500',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    name: 'Backend Development',
    level: 85,
    color: 'from-purple-500 to-pink-500',
    tech: ['Node.js', 'Firebase', 'REST APIs', 'Express'],
  },
  {
    name: 'UI/UX Design',
    level: 80,
    color: 'from-green-500 to-teal-500',
    tech: ['Figma', 'Responsive Design', 'User Experience', 'Prototyping'],
  },
  {
    name: 'Database & DevOps',
    level: 75,
    color: 'from-orange-500 to-red-500',
    tech: ['Firestore', 'MongoDB', 'Git', 'CI/CD'],
  },
];

const technologies = {
  frontend: [
    'React',
    'TypeScript',
    'JavaScript ES6+',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Framer Motion',
    'Vite',
  ],
  backend: ['Node.js', 'Firebase', 'Express.js', 'REST APIs', 'GraphQL basics'],
  tools: ['Git', 'VS Code', 'Figma', 'Postman', 'Chrome DevTools', 'npm/yarn'],
  learning: ['Next.js', 'Docker', 'AWS', 'Testing (Jest/Cypress)'],
};

const timeline = [
  {
    year: '2024',
    title: {
      fr: 'Développeur Full Stack Freelance',
      en: 'Freelance Full Stack Developer',
    },
    company: { fr: 'Indépendant', en: 'Self-Employed' },
    description: {
      fr: "Développement d'applications web modernes pour divers clients. Spécialisation en React, TypeScript et Firebase. Création de solutions sur mesure avec une attention particulière à l'expérience utilisateur.",
      en: 'Developing modern web applications for various clients. Specializing in React, TypeScript, and Firebase. Creating custom solutions with a focus on user experience.',
    },
  },
  {
    year: '2023',
    title: { fr: 'Développeur Full Stack', en: 'Full Stack Developer' },
    company: { fr: 'Agence Web', en: 'Web Agency' },
    description: {
      fr: "Développement de sites web et d'applications pour des PME. Mise en place d'architectures scalables et maintenance de projets existants. Collaboration étroite avec l'équipe design.",
      en: 'Developing websites and applications for SMEs. Implementing scalable architectures and maintaining existing projects. Close collaboration with the design team.',
    },
  },
  {
    year: '2022',
    title: { fr: 'Développeur Frontend', en: 'Frontend Developer' },
    company: { fr: 'Startup Tech', en: 'Tech Startup' },
    description: {
      fr: "Création d'interfaces utilisateur réactives et intuitives. Intégration de maquettes et optimisation des performances. Apprentissage des technologies backend.",
      en: 'Creating responsive and intuitive user interfaces. Integrating mockups and optimizing performance. Learning backend technologies.',
    },
  },
  {
    year: '2021',
    title: {
      fr: 'Formation & Début de carrière',
      en: 'Training & Career Start',
    },
    company: {
      fr: 'Autodidacte & Projets personnels',
      en: 'Self-taught & Personal Projects',
    },
    description: {
      fr: "Apprentissage intensif du développement web moderne. Réalisation de premiers projets clients. Construction d'un portfolio solide.",
      en: 'Intensive learning of modern web development. Completing first client projects. Building a solid portfolio.',
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
      fr: "Développeur Full Stack passionné par la création d'expériences web exceptionnelles",
      en: 'Full Stack Developer passionate about creating exceptional web experiences',
    },
    intro: {
      title: {
        fr: "Créateur d'expériences digitales",
        en: 'Digital Experience Creator',
      },
      paragraphs: {
        fr: [
          'Passionné par le développement web moderne, je crée des applications performantes et élégantes qui résolvent de vrais problèmes. Mon approche combine créativité technique et souci du détail pour livrer des solutions qui dépassent les attentes.',
          "Basé à Tournai, je travaille avec des technologies cutting-edge comme React, TypeScript et Firebase pour donner vie à vos idées. Que ce soit pour un site vitrine, une application web complexe ou un outil sur mesure, j'apporte expertise technique et vision créative à chaque projet.",
          'Mon objectif ? Transformer vos concepts en réalités digitales qui captivent vos utilisateurs et propulsent votre activité vers de nouveaux sommets.',
        ],
        en: [
          'Passionate about modern web development, I create high-performance and elegant applications that solve real problems. My approach combines technical creativity with attention to detail to deliver solutions that exceed expectations.',
          "Based in Tournai, Belgium, I work with cutting-edge technologies like React, TypeScript, and Firebase to bring your ideas to life. Whether it's a showcase website, a complex web application, or a custom tool, I bring technical expertise and creative vision to every project.",
          'My goal? Transform your concepts into digital realities that captivate your users and propel your business to new heights.',
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
                    <p className="text-2xl font-bold">Full Stack Developer</p>
                    <p className="text-muted-foreground mt-2">
                      Tournai, Belgium
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

          <div className="max-w-3xl mx-auto space-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                  <motion.div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                    >
                      {tech}
                    </span>
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
