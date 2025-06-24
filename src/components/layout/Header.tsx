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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
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
            Steve Amissi
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
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors relative z-50"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed top-0 left-0 right-0 z-40 mt-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mx-4 mt-4 rounded-2xl bg-background/95 backdrop-blur-xl shadow-2xl border border-border/50 overflow-hidden">
              <div className="p-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-3 px-4 rounded-lg transition-all ${
                        isActive(item.path)
                          ? 'text-primary font-semibold bg-primary/10'
                          : 'text-foreground/70 hover:text-foreground hover:bg-accent'
                      }`}
                    >
                      {t(`nav.${item.key}`)}
                    </Link>
                  </motion.div>
                ))}

                <div className="pt-4 mt-4 border-t border-border/50 space-y-4">
                  <motion.button
                    onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                    className="flex items-center gap-3 w-full py-3 px-4 rounded-lg hover:bg-accent transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Globe className="w-5 h-5 text-primary" />
                    <span className="flex-1 text-left">Language</span>
                    <span className="font-semibold">
                      {language.toUpperCase()}
                    </span>
                  </motion.button>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <div className="flex items-center gap-3 px-4">
                      <span className="text-sm text-muted-foreground">
                        Theme
                      </span>
                    </div>
                    <div className="flex gap-2 px-4">
                      {(['light', 'system', 'dark'] as const).map((t) => (
                        <button
                          key={t}
                          onClick={() => setTheme(t)}
                          className={`flex-1 p-3 rounded-lg transition-all ${
                            theme === t
                              ? 'bg-primary text-primary-foreground shadow-md'
                              : 'bg-accent hover:bg-accent/80'
                          }`}
                        >
                          {t === 'light' && <Sun className="w-5 h-5 mx-auto" />}
                          {t === 'system' && (
                            <Monitor className="w-5 h-5 mx-auto" />
                          )}
                          {t === 'dark' && <Moon className="w-5 h-5 mx-auto" />}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
