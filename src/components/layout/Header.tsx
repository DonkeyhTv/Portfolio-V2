import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Menu, X, Moon, Sun, Monitor, Globe } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';

const navItems = [
  { path: '/', key: 'home' },
  { path: '/about', key: 'about' },
  { path: '/projects', key: 'projects' },
  { path: '/contact', key: 'contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      className={`top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'fixed glass py-4' : 'absolute py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container-custom flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-gradient hover:scale-105 transition-transform"
        >
          Portfolio
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.key} to={item.path} className="relative group">
              <span
                className={`transition-colors ${
                  isActive(item.path)
                    ? 'text-primary'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {t(`nav.${item.key}`)}
              </span>
              {isActive(item.path) && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  layoutId="nav-underline"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            className="flex items-center gap-1 p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label="Switch language"
          >
            <Globe className="w-5 h-5" />
            <span className="text-sm font-medium">
              {language.toUpperCase()}
            </span>
          </button>

          <div className="flex items-center gap-1 p-1 bg-accent rounded-lg">
            <button
              onClick={() => setTheme('light')}
              className={`p-1.5 rounded transition-colors ${
                theme === 'light' ? 'bg-background shadow-sm' : ''
              }`}
              aria-label="Light theme"
            >
              <Sun className="w-4 h-4" />
            </button>
            <button
              onClick={() => setTheme('system')}
              className={`p-1.5 rounded transition-colors ${
                theme === 'system' ? 'bg-background shadow-sm' : ''
              }`}
              aria-label="System theme"
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`p-1.5 rounded transition-colors ${
                theme === 'dark' ? 'bg-background shadow-sm' : ''
              }`}
              aria-label="Dark theme"
            >
              <Moon className="w-4 h-4" />
            </button>
          </div>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 glass-heavy"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container-custom py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 transition-colors ${
                    isActive(item.path)
                      ? 'text-primary font-semibold'
                      : 'text-foreground/70'
                  }`}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}

              <div className="pt-4 border-t border-border space-y-4">
                <button
                  onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                  className="flex items-center gap-2 w-full py-2"
                >
                  <Globe className="w-5 h-5" />
                  <span>Language: {language.toUpperCase()}</span>
                </button>

                <div className="flex items-center gap-2">
                  <span className="text-sm">Theme:</span>
                  <div className="flex gap-1">
                    {(['light', 'system', 'dark'] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setTheme(t)}
                        className={`p-2 rounded ${
                          theme === t ? 'bg-accent' : ''
                        }`}
                      >
                        {t === 'light' && <Sun className="w-4 h-4" />}
                        {t === 'system' && <Monitor className="w-4 h-4" />}
                        {t === 'dark' && <Moon className="w-4 h-4" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
