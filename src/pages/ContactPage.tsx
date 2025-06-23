import { motion } from 'framer-motion';
import ContactSection from '../components/sections/ContactSection';

export default function ContactPage() {
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
