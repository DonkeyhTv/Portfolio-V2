import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ContactSection from '../components/sections/ContactSection';

const ContactSkeleton = () => (
  <div className="container-custom pt-32 pb-20">
    <section className="section-spacing bg-accent/10 animate-pulse">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="h-10 bg-muted rounded-lg w-64 mx-auto mb-4"></div>
          <div className="h-6 bg-muted rounded w-96 mx-auto"></div>
        </div>

        <div className="max-w-lg mx-auto space-y-6">
          <div>
            <div className="h-4 bg-muted rounded w-24 mb-2"></div>
            <div className="h-12 bg-muted rounded-lg w-full"></div>
          </div>

          <div>
            <div className="h-4 bg-muted rounded w-24 mb-2"></div>
            <div className="h-12 bg-muted rounded-lg w-full"></div>
          </div>

          <div>
            <div className="h-4 bg-muted rounded w-24 mb-2"></div>
            <div className="h-32 bg-muted rounded-lg w-full"></div>
          </div>

          <div className="h-12 bg-muted rounded-lg w-full"></div>
        </div>
      </div>
    </section>
  </div>
);

export default function ContactPage() {
  const { ready } = useTranslation();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (ready) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [ready]);

  if (isLoading) {
    return <ContactSkeleton />;
  }

  return (
    <motion.div
      className="container-custom pt-32 pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ContactSection />
    </motion.div>
  );
}
