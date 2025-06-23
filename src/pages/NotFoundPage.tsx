import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <motion.div
      className="container-custom min-h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gradient">
          404
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          {t("404.description")}
        </p>
        <Link to="/" className="btn-primary">
          {t("404.backHome")}
        </Link>
      </div>
    </motion.div>
  );
}
