import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Code2,
  Palette,
  Database,
  Server,
  Wrench,
  ShoppingCart,
  Globe,
  FileCode,
  Cpu,
  Cloud,
  Lock,
  TestTube,
  Layers,
  Monitor,
  Smartphone,
  Mail,
  CreditCard,
  Settings,
} from 'lucide-react';

// Si vous n'avez pas react-icons, voici une version avec lucide-react uniquement
const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Monitor,
    skills: [
      { name: 'React.js', icon: Code2, color: 'text-blue-500' },
      { name: 'Vue.js', icon: Code2, color: 'text-green-500' },
      { name: 'Angular', icon: Code2, color: 'text-red-500' },
      { name: 'Next.js', icon: Code2, color: 'text-black dark:text-white' },
      { name: 'TypeScript', icon: FileCode, color: 'text-blue-600' },
      { name: 'JavaScript ES6+', icon: FileCode, color: 'text-yellow-500' },
      { name: 'HTML5/CSS3', icon: Globe, color: 'text-orange-500' },
      { name: 'Tailwind CSS', icon: Palette, color: 'text-teal-500' },
      { name: 'Sass/SCSS', icon: Palette, color: 'text-pink-500' },
      { name: 'Bootstrap', icon: Palette, color: 'text-purple-500' },
      { name: 'Three.js', icon: Cpu, color: 'text-gray-700' },
      { name: 'Framer Motion', icon: Layers, color: 'text-purple-600' },
    ],
  },
  {
    title: 'Backend & Databases',
    icon: Database,
    skills: [
      { name: 'Node.js', icon: Server, color: 'text-green-600' },
      { name: 'PHP', icon: Code2, color: 'text-indigo-500' },
      { name: 'Elasticsearch', icon: Code2, color: 'text-red-600' },
      { name: 'Python', icon: Code2, color: 'text-yellow-600' },
      { name: 'MySQL', icon: Database, color: 'text-blue-600' },
      { name: 'PostgreSQL', icon: Database, color: 'text-blue-700' },
      { name: 'MongoDB', icon: Database, color: 'text-green-600' },
      { name: 'REST API', icon: Globe, color: 'text-blue-500' },
      { name: 'GraphQL', icon: Globe, color: 'text-pink-600' },
      { name: 'JWT', icon: Lock, color: 'text-orange-600' },
      { name: 'OAuth', icon: Lock, color: 'text-purple-600' },
      { name: 'Firebase Auth', icon: Lock, color: 'text-yellow-500' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    skills: [
      { name: 'Docker', icon: Server, color: 'text-blue-600' },
      { name: 'Git/GitHub', icon: Code2, color: 'text-gray-700' },
      { name: 'AWS', icon: Cloud, color: 'text-orange-500' },
      { name: 'Google Cloud', icon: Cloud, color: 'text-blue-500' },
      { name: 'Nginx', icon: Server, color: 'text-green-600' },
      { name: 'SSH', icon: Lock, color: 'text-purple-600' },
      { name: 'HTTPS/SSL', icon: Lock, color: 'text-green-600' },
      { name: 'CI/CD', icon: Settings, color: 'text-blue-600' },
      { name: 'Deployment', icon: Cloud, color: 'text-indigo-600' },
      { name: 'Cron Jobs', icon: Settings, color: 'text-gray-600' },
      { name: 'Docker Compose', icon: Server, color: 'text-blue-700' },
      { name: 'FTP/SFTP', icon: Server, color: 'text-purple-500' },
    ],
  },
  {
    title: 'Tools & Testing',
    icon: Wrench,
    skills: [
      { name: 'VS Code', icon: Code2, color: 'text-blue-600' },
      { name: 'Git', icon: Code2, color: 'text-red-600' },
      { name: 'Vite', icon: Cpu, color: 'text-purple-600' },
      { name: 'Jest', icon: TestTube, color: 'text-red-600' },
      { name: 'Cypress', icon: TestTube, color: 'text-green-600' },
      { name: 'React Testing Library', icon: TestTube, color: 'text-red-500' },
      { name: 'Postman', icon: Globe, color: 'text-orange-600' },
      { name: 'Insomnia', icon: Globe, color: 'text-purple-600' },
      { name: 'DBeaver', icon: Database, color: 'text-gray-700' },
      { name: 'phpMyAdmin', icon: Database, color: 'text-orange-500' },
      { name: 'FileZilla', icon: Server, color: 'text-red-600' },
      { name: 'Vim', icon: Code2, color: 'text-green-600' },
    ],
  },
  {
    title: 'Design & Marketing',
    icon: Palette,
    skills: [
      { name: 'Figma', icon: Palette, color: 'text-purple-600' },
      { name: 'Photoshop', icon: Palette, color: 'text-blue-600' },
      { name: 'Illustrator', icon: Palette, color: 'text-orange-600' },
      { name: 'Canva', icon: Palette, color: 'text-teal-500' },
      { name: 'Material-UI', icon: Layers, color: 'text-blue-500' },
      { name: 'Responsive Design', icon: Smartphone, color: 'text-green-600' },
      { name: 'Web Design', icon: Globe, color: 'text-indigo-600' },
      { name: 'UI/UX', icon: Palette, color: 'text-pink-600' },
      { name: 'Google Analytics', icon: Globe, color: 'text-yellow-600' },
      { name: 'Google Tag Manager', icon: Globe, color: 'text-blue-600' },
      { name: 'SEO', icon: Globe, color: 'text-green-600' },
      { name: 'Google Maps API', icon: Globe, color: 'text-red-600' },
    ],
  },
  {
    title: 'CMS & E-commerce',
    icon: ShoppingCart,
    skills: [
      { name: 'WordPress', icon: Globe, color: 'text-blue-700' },
      { name: 'WooCommerce', icon: ShoppingCart, color: 'text-purple-600' },
      { name: 'PrestaShop', icon: ShoppingCart, color: 'text-pink-600' },
      { name: 'Twilio', icon: Mail, color: 'text-red-600' },
      { name: 'Agile/Scrum', icon: Settings, color: 'text-blue-600' },
      { name: 'Problem Solving', icon: Settings, color: 'text-green-600' },
      { name: 'JSON/XML', icon: FileCode, color: 'text-gray-600' },
      { name: 'REST Integration', icon: Globe, color: 'text-blue-500' },
      { name: 'Email Integration', icon: Mail, color: 'text-red-500' },
      {
        name: 'Payment Integration',
        icon: CreditCard,
        color: 'text-green-600',
      },
      { name: 'CMS Development', icon: Code2, color: 'text-indigo-600' },
      { name: 'Plugin Development', icon: Code2, color: 'text-purple-600' },
    ],
  },
];

export default function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="section-spacing">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">{t('skills.title')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group flex items-center gap-2 p-2.5 rounded-lg bg-accent/50 hover:bg-accent transition-all cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: categoryIndex * 0.1 + index * 0.03,
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <skill.icon
                      className={`w-5 h-5 flex-shrink-0 ${skill.color} group-hover:scale-110 transition-transform`}
                    />
                    <span className="text-sm font-medium truncate">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
