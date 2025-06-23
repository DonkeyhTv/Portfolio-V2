import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code2, Palette, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: Code2,
    key: 'cleanCode',
  },
  {
    icon: Palette,
    key: 'modernDesign',
  },
  {
    icon: Zap,
    key: 'performance',
  },
  {
    icon: Users,
    key: 'userFocused',
  },
];

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="section-spacing overflow-hidden">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">{t('about.title')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              {t('about.heading')}
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>{t('about.paragraph1')}</p>
              <p>{t('about.paragraph2')}</p>
              <p>{t('about.paragraph3')}</p>
            </div>
            <motion.button
              className="btn-primary mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('about.downloadCV')}
            </motion.button>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative bg-gradient-to-br from-primary via-purple-500 to-pink-500 rounded-3xl p-1">
              <div className="bg-background rounded-3xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    className="relative w-32 h-32 mx-auto mb-6"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <img
                        src="https://steve-amissi.be/public/img/photo.jpg?w=300&h=300&fit=crop"
                        alt="Experience"
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                    </div>

                    <motion.div
                      className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-50 blur-md"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.3, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.5,
                      }}
                    />
                  </motion.div>

                  <div className="text-6xl font-bold text-gradient mb-4">5</div>
                  <p className="text-xl text-muted-foreground">
                    {t('about.yearsExperience')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">
                {t(`about.features.${feature.key}.title`)}
              </h4>
              <p className="text-sm text-muted-foreground">
                {t(`about.features.${feature.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
